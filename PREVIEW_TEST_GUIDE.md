# End-to-End Test Guide — Preview & Retainer Automation (`joshuaoparachukwu.com`)

Use this guide to test every service thank-you page, the 4-Month Performance Retainer ($500) pending-to-paid flow, automated 4-digit PIN email delivery, Client Portal login, and Admin Vault sync before moving to app development.

---

## 1. Per-Service Thank You Pages (Discovery Consultations)

Paste these URLs directly into your **Calendly Event Redirect** or **Selar Product Redirect** settings, and open them in your browser to verify personalized greetings + pricing:

| Service | Redirect / Test URL |
| :--- | :--- |
| **1-on-1 Individual ($30 · 15m)** | `https://joshuaoparachukwu.com/preview/thank-you-individual.html?invitee_full_name=Marcus+Vance` |
| **Team & Organization ($75 · 30m)** | `https://joshuaoparachukwu.com/preview/thank-you-team.html?invitee_full_name=Coach+David+Bello` |
| **Executive / High-Pressure ($100 · 30m)** | `https://joshuaoparachukwu.com/preview/thank-you-executive.html?invitee_full_name=Elena+Rostova` |
| **Sport Governance Strategy ($150 · 30m)** | `https://joshuaoparachukwu.com/preview/thank-you-governance.html?invitee_full_name=Director+Samuel+Osei` |

> **Tip:** When the 48-hour Free Consultation Promo is active, all 4 pages automatically switch their fee badge to **FREE ($0)** by reading the live promo state.

---

## 2. Full 4-Month Retainer ($500) Flow — Test Data & Steps

### Test Client Profile
- **Name:** `Alex Mercer`
- **Email:** *(use your own real email address so you can verify the Resend PIN email arrives in your inbox)*
- **Phone:** `+44 7700 900123`
- **Focus:** `Match-day composure under penalty pressure`

### Step A — Enrol & Enter Pending State
1. Open: `https://joshuaoparachukwu.com/preview/performance-retainer.html`
2. Click **Enrol in Retainer Program**, fill in the test client details above, and submit Step 1.
3. In Step 2, click **View Pending Payment & Activation Status →** (or open `https://joshuaoparachukwu.com/preview/retainer-pending.html?email=YOUR_TEST_EMAIL`).
4. **Expected result:**
   - Step 1 shows **✓ Enrolment Saved**.
   - Step 2 shows **⏳ $500 Selar Payment (Pending Verification)** and polls `/api/retainer?action=status` every 6 seconds.

### Step B — Verify Unpaid Login Is Blocked
1. Open: `https://joshuaoparachukwu.com/preview/client-portal.html`
2. Try logging in with your test email while still unpaid.
3. **Expected result:** Login is blocked with *"Payment verification is still pending for this email"* and a link back to `retainer-pending.html`.

### Step C — Trigger Activation & Automated PIN Email (2 Ways to Test)

#### Method 1: One-Click via Admin Vault (Fastest)
1. Open the Admin Vault: `https://joshuaoparachukwu.com/preview/jo-practice-vault-9x4k.html`
2. Sign in and locate your test client row (`Unpaid`).
3. Click **Mark Paid & Email PIN**.
4. **Expected result:**
   - Status updates to `$500 Paid`.
   - You get an alert showing the generated **4-digit Access PIN** and confirming the welcome email was sent.
   - Your open `retainer-pending.html` tab **automatically redirects** within ~6 seconds to `https://joshuaoparachukwu.com/preview/thank-you-retainer.html`.

#### Method 2: Simulate Live Selar Webhook (PowerShell / Terminal)
Run this command (replacing `YOUR_TEST_EMAIL` with the email you enrolled):

```powershell
Invoke-RestMethod -Uri "https://joshuaoparachukwu.com/api/selar-webhook" `
  -Method POST `
  -ContentType "application/json" `
  -Body '{"event":"order.completed","data":{"email":"YOUR_TEST_EMAIL","full_name":"Alex Mercer","status":"completed"}}'
```

- **Expected result:** Returns `{"ok":true,"activated":true,...}`, marks the client `paid: true`, emails the 4-digit PIN + standing Google Meet link via Resend, and `retainer-pending.html` auto-redirects to `thank-you-retainer.html`.

### Step D — Client Portal Login & Session Ledger
1. Check your email inbox for **"Your 4-Month Performance Retainer Portal & Access PIN"**.
2. Open: `https://joshuaoparachukwu.com/preview/client-portal.html`
3. Sign in with `YOUR_TEST_EMAIL` and the **4-digit PIN** from your email.
   *(Quick demo accounts are also available on the login screen, e.g. `marcus@athletics.org` with PIN `2026`.)*
4. Test booking a session, expanding past consultation notes/history, and verifying the booking reflects in the Admin Vault.

---

## 3. What We Need From You to Enable Live Automated Emails

The backend (`api/retainer.js` and `api/selar-webhook.js`) is already deployed. To send live emails to real clients:

1. **Create a free Resend API Key** at [resend.com](https://resend.com) (100 free emails/day).
2. **Add Environment Variables in Vercel** (`Project Settings → Environment Variables`):
   - `RESEND_API_KEY` = `re_xxxxxxxxx` *(required for automated PIN emails)*
   - `RESEND_FROM` = `Dr. Joshua Oparachukwu <portal@joshuaoparachukwu.com>` *(optional — requires verifying `joshuaoparachukwu.com` in Resend; without it, Resend defaults to `onboarding@resend.dev` which only delivers to your own Resend account email)*
   - `SELAR_WEBHOOK_SECRET` = *(optional — only if you enable a webhook secret in Selar)*
3. **Add the Webhook & Redirect URLs in Selar**:
   - **Webhook URL:** `https://joshuaoparachukwu.com/api/selar-webhook`
   - **Retainer ($500) Redirect URL after payment:** `https://joshuaoparachukwu.com/preview/thank-you-retainer.html`

---

## 4. Today's UI, Portal & Content Updates — Verification Checklist

Verify these visual and functional updates alongside the payment/thank-you flow:

### A. Homepage (`https://joshuaoparachukwu.com/preview/index.html`)
- **2026 Asymmetric Bento Grid (`#why-choose`):** Scroll to *"Why Elite Performers & Organizations Choose Dr. Joshua"* and confirm the 12-column Bento layout (3 ivory top cards, wide obsidian + gold-cream middle row, and full-width two-column bottom card) plus working filter pills (`All 6 Capabilities`, `For Individual Athletes`, `For Teams & Squads`, `For Executives & Boards`).
- **Hero Overlay:** Confirm the stadium background image has the deep royal-blue overlay with crisp contrast.

### B. Services Page (`https://joshuaoparachukwu.com/preview/services.html`)
- **Audience Box & Hook:** Confirm the service hook sits inside the audience pill, **is not italicized**, uses full-size readable typography, and the audience heading stays cleanly on **one line**.

### C. Testimonials Page (`https://joshuaoparachukwu.com/preview/testimonials.html`)
- **Header & Spacing:** Confirm the redundant `"Testimonials"` eyebrow label above the heading is removed and vertical spacing between hero and cards is tightened.
- **Filters & Privacy:** Test the **Parents of Athletes** filter pill, confirm single-line subtitles (*"Video reflections from athletes and coaches"*), and confirm testimonial last names are masked.

### D. Client Portal (`https://joshuaoparachukwu.com/preview/client-portal.html`)
- **Clickable Meeting History & Notes:** Log in (e.g., `marcus@athletics.org` with PIN `2026`) and click rows in the **Retainer Consultation Ledger** (`Completed`, `Booked`, `Available`) to confirm each row expands to show past meeting details, debrief summary, action plan, and standing Google Meet link.

### E. Admin Vault (`https://joshuaoparachukwu.com/preview/jo-practice-vault-9x4k.html`)
- **Cloud Sync & One-Click Activation:** Confirm retainer enrolments sync from `/api/retainer` and that unpaid rows display the **Mark Paid & Email PIN** button.
