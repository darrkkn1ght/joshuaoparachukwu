
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Book() {
  const [activeForm, setActiveForm] = useState('selector');

  return (
    <div style={{ background: '#FAFAF7', minHeight: '100vh' }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 10, background: '#00102A', padding: '0 52px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
        <span style={{ fontFamily: 'var(--font-display,serif)', color: '#fff', fontSize: '16px', fontWeight: '700' }}>Dr. Joshua A. Oparachukwu</span>
        <Link href="/services" style={{ background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)', color: '#fff', padding: '7px 18px', borderRadius: '6px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', textDecoration: 'none' }}>← Back to Services</Link>
      </div>

      <div>
        
        <div style={{ display: activeForm === 'selector' ? 'block' : 'none' }}>
          <div>
  <div className="bk-nav">
    <Link href="/services" className="bk-back"><svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15,18 9,12 15,6" /></svg>Back</Link>
  </div>
  <div className="bk-selector-hero">
    <span className="bk-eyebrow">Book a Consultation Call</span>
    <h1 className="bk-selector-title">Which service are you looking for?</h1>
    <p className="bk-selector-sub">Select the option that best describes your situation and you'll be taken to the right booking form.</p>
  </div>
  <div className="bk-selector-grid">
    <div className="bk-selector-card" onClick={() => {}}>
      <div className="bk-card-top" />
      <div className="bk-card-inner">
        <div className="bk-card-audience">For athletes, students, professionals, performers, and creators</div>
        <h3>1-on-1 Individual Performance Consultation</h3>
        <p className="bk-card-hook">You know you are capable. But something's off.</p>
        <p className="bk-card-body">You overthink. You hesitate. You lose confidence, struggle to recover after mistakes, or find yourself mentally exhausted carrying expectations alone.</p>
        <p className="bk-card-closer">This consultation is where we identify what is disrupting your performance and what kind of support would move things forward.</p>
        <div className="bk-card-meta">15 min · $30</div>
        <span className="bk-card-cta">Select →</span>
      </div>
    </div>
    <div className="bk-selector-card" onClick={() => {}}>
      <div className="bk-card-top" />
      <div className="bk-card-inner">
        <div className="bk-card-audience">For teams, coaches, academies, and organisations</div>
        <h3>Team &amp; Organization Consultation</h3>
        <p className="bk-card-hook">The talent is there. But the team isn't delivering as it should.</p>
        <p className="bk-card-body">Mistakes fracture the group. Pressure splinters the team. Confidence is never collective. Doubt always is. Players perform well in training but shrink in competition. The culture looks fine on the surface, but something is quietly wrong with it.</p>
        <p className="bk-card-closer">This consultation is where we identify what is disrupting performance across your environment and what kind of support would actually address it.</p>
        <div className="bk-card-meta">30 min · $75</div>
        <span className="bk-card-cta">Select →</span>
      </div>
    </div>
    <div className="bk-selector-card" onClick={() => {}}>
      <div className="bk-card-top" />
      <div className="bk-card-inner">
        <div className="bk-card-audience">For founders, executives, and leaders</div>
        <h3>Executive / High-Pressure Performance Consultation</h3>
        <p className="bk-card-hook">The position is already yours. But performing inside it is taking a toll.</p>
        <p className="bk-card-body">You make decisions under pressure, in public, in private, with little room for error. The composure people see on the outside is heavy. Clarity is currently harder to hold. Fatigue accumulates in ways you can't quantify. Somewhere in the middle of managing all of these, your own performance worries you.</p>
        <p className="bk-card-closer">This consultation is where we identify what is eroding your mental performance and what kind of support would actually restore it.</p>
        <div className="bk-card-meta">30 min · $100</div>
        <span className="bk-card-cta">Select →</span>
      </div>
    </div>
    <div className="bk-selector-card" onClick={() => {}}>
      <div className="bk-card-top" />
      <div className="bk-card-inner">
        <div className="bk-card-audience">For clubs, academies, federations, and sport organisations</div>
        <h3>Sport Governance &amp; Strategic Consultation</h3>
        <p className="bk-card-hook">The organisation is not functioning as it should.</p>
        <p className="bk-card-body">There is activity. But not the results the organisation should be producing. Good people are working hard inside a system that keeps producing the same problems. Decisions are slow. Often unclear.</p>
        <p className="bk-card-closer">This consultation is where we identify what is structurally disrupting your organisation and what kind of advisory support would actually address it.</p>
        <div className="bk-card-meta">Advisory · Request reviewed</div>
        <span className="bk-card-cta">Select →</span>
      </div>
    </div>
  </div>
</div>

        </div>

        <div style={{ display: activeForm === 'A' ? 'block' : 'none' }}>
          <div className="bk-nav" style={{ padding: "0 250px", marginTop: "24px", background: "none", border: "none" }}><button className="bk-back" onClick={() => setActiveForm('selector')}>← Change Service Type</button></div>
          <div>
  <div className="bk-nav">
    <button className="bk-back" onClick={() => {}}>
      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15,18 9,12 15,6" /></svg>
      Back to Services
    </button>
  </div>
  <div className="bk-form-hero navy">
    <span className="bk-form-badge">Individual Performance Coaching</span>
    <h1 className="bk-form-title">1-on-1 Individual Performance Consultation</h1>
    <p className="bk-form-sub">For athletes, students, professionals, and performers · 15 min consultation · $30</p>
  </div>
  <div className="bk-form-body">
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="bk-section-label">Section 1 Contact Information</div>
      <div className="bk-form-row2">
        <div className="bk-fg"><label>First Name *</label><input type="text" required id="fA-fname" placeholder="First name" /></div>
        <div className="bk-fg"><label>Last Name *</label><input type="text" required id="fA-lname" placeholder="Last name" /></div>
      </div>
      <div className="bk-form-row2">
        <div className="bk-fg"><label>Email Address *</label><input type="email" required id="fA-email" placeholder="your@email.com" /></div>
        <div className="bk-fg"><label>Country *</label>
          <input type="text" placeholder="Search country..." onInput={() => {}} style={{width: '100%', padding: '11px 14px', marginBottom: 8, border: '1.5px solid var(--border,#E0DDD4)', borderRadius: 8, fontFamily: 'var(--font-body,sans-serif)', fontSize: 13, color: 'var(--ink,#1A1A16)', background: 'var(--white,#fff)', outline: 'none', boxSizing: 'border-box'}} />
          <select required id="fA-country" onChange={() => {}} size={1}>
            <option value="">Select country...</option>
            <option value="AF" data-dial={+93}>Afghanistan</option>
            <option value="AL" data-dial={+355}>Albania</option>
            <option value="DZ" data-dial={+213}>Algeria</option>
            <option value="AD" data-dial={+376}>Andorra</option>
            <option value="AO" data-dial={+244}>Angola</option>
            <option value="AG" data-dial={+1}>Antigua and Barbuda</option>
            <option value="AR" data-dial={+54}>Argentina</option>
            <option value="AM" data-dial={+374}>Armenia</option>
            <option value="AU" data-dial={+61}>Australia</option>
            <option value="AT" data-dial={+43}>Austria</option>
            <option value="AZ" data-dial={+994}>Azerbaijan</option>
            <option value="BS" data-dial={+1}>Bahamas</option>
            <option value="BH" data-dial={+973}>Bahrain</option>
            <option value="BD" data-dial={+880}>Bangladesh</option>
            <option value="BB" data-dial={+1}>Barbados</option>
            <option value="BY" data-dial={+375}>Belarus</option>
            <option value="BE" data-dial={+32}>Belgium</option>
            <option value="BZ" data-dial={+501}>Belize</option>
            <option value="BJ" data-dial={+229}>Benin</option>
            <option value="BT" data-dial={+975}>Bhutan</option>
            <option value="BO" data-dial={+591}>Bolivia</option>
            <option value="BA" data-dial={+387}>Bosnia and Herzegovina</option>
            <option value="BW" data-dial={+267}>Botswana</option>
            <option value="BR" data-dial={+55}>Brazil</option>
            <option value="BN" data-dial={+673}>Brunei</option>
            <option value="BG" data-dial={+359}>Bulgaria</option>
            <option value="BF" data-dial={+226}>Burkina Faso</option>
            <option value="BI" data-dial={+257}>Burundi</option>
            <option value="KH" data-dial={+855}>Cambodia</option>
            <option value="CM" data-dial={+237}>Cameroon</option>
            <option value="CA" data-dial={+1}>Canada</option>
            <option value="CV" data-dial={+238}>Cape Verde</option>
            <option value="CF" data-dial={+236}>Central African Republic</option>
            <option value="TD" data-dial={+235}>Chad</option>
            <option value="CL" data-dial={+56}>Chile</option>
            <option value="CN" data-dial={+86}>China</option>
            <option value="CO" data-dial={+57}>Colombia</option>
            <option value="KM" data-dial={+269}>Comoros</option>
            <option value="CG" data-dial={+242}>Congo</option>
            <option value="CD" data-dial={+243}>Congo (DRC)</option>
            <option value="CR" data-dial={+506}>Costa Rica</option>
            <option value="HR" data-dial={+385}>Croatia</option>
            <option value="CU" data-dial={+53}>Cuba</option>
            <option value="CY" data-dial={+357}>Cyprus</option>
            <option value="CZ" data-dial={+420}>Czech Republic</option>
            <option value="CI" data-dial={+225}>Côte d'Ivoire</option>
            <option value="DK" data-dial={+45}>Denmark</option>
            <option value="DJ" data-dial={+253}>Djibouti</option>
            <option value="DM" data-dial={+1}>Dominica</option>
            <option value="DO" data-dial={+1}>Dominican Republic</option>
            <option value="EC" data-dial={+593}>Ecuador</option>
            <option value="EG" data-dial={+20}>Egypt</option>
            <option value="SV" data-dial={+503}>El Salvador</option>
            <option value="GQ" data-dial={+240}>Equatorial Guinea</option>
            <option value="ER" data-dial={+291}>Eritrea</option>
            <option value="EE" data-dial={+372}>Estonia</option>
            <option value="SZ" data-dial={+268}>Eswatini</option>
            <option value="ET" data-dial={+251}>Ethiopia</option>
            <option value="FJ" data-dial={+679}>Fiji</option>
            <option value="FI" data-dial={+358}>Finland</option>
            <option value="FR" data-dial={+33}>France</option>
            <option value="GA" data-dial={+241}>Gabon</option>
            <option value="GM" data-dial={+220}>Gambia</option>
            <option value="GE" data-dial={+995}>Georgia</option>
            <option value="DE" data-dial={+49}>Germany</option>
            <option value="GH" data-dial={+233}>Ghana</option>
            <option value="GR" data-dial={+30}>Greece</option>
            <option value="GD" data-dial={+1}>Grenada</option>
            <option value="GT" data-dial={+502}>Guatemala</option>
            <option value="GN" data-dial={+224}>Guinea</option>
            <option value="GW" data-dial={+245}>Guinea-Bissau</option>
            <option value="GY" data-dial={+592}>Guyana</option>
            <option value="HT" data-dial={+509}>Haiti</option>
            <option value="HN" data-dial={+504}>Honduras</option>
            <option value="HU" data-dial={+36}>Hungary</option>
            <option value="IS" data-dial={+354}>Iceland</option>
            <option value="IN" data-dial={+91}>India</option>
            <option value="ID" data-dial={+62}>Indonesia</option>
            <option value="IR" data-dial={+98}>Iran</option>
            <option value="IQ" data-dial={+964}>Iraq</option>
            <option value="IE" data-dial={+353}>Ireland</option>
            <option value="IL" data-dial={+972}>Israel</option>
            <option value="IT" data-dial={+39}>Italy</option>
            <option value="JM" data-dial={+1}>Jamaica</option>
            <option value="JP" data-dial={+81}>Japan</option>
            <option value="JO" data-dial={+962}>Jordan</option>
            <option value="KZ" data-dial={+7}>Kazakhstan</option>
            <option value="KE" data-dial={+254}>Kenya</option>
            <option value="KI" data-dial={+686}>Kiribati</option>
            <option value="KW" data-dial={+965}>Kuwait</option>
            <option value="KG" data-dial={+996}>Kyrgyzstan</option>
            <option value="LA" data-dial={+856}>Laos</option>
            <option value="LV" data-dial={+371}>Latvia</option>
            <option value="LB" data-dial={+961}>Lebanon</option>
            <option value="LS" data-dial={+266}>Lesotho</option>
            <option value="LR" data-dial={+231}>Liberia</option>
            <option value="LY" data-dial={+218}>Libya</option>
            <option value="LI" data-dial={+423}>Liechtenstein</option>
            <option value="LT" data-dial={+370}>Lithuania</option>
            <option value="LU" data-dial={+352}>Luxembourg</option>
            <option value="MG" data-dial={+261}>Madagascar</option>
            <option value="MW" data-dial={+265}>Malawi</option>
            <option value="MY" data-dial={+60}>Malaysia</option>
            <option value="MV" data-dial={+960}>Maldives</option>
            <option value="ML" data-dial={+223}>Mali</option>
            <option value="MT" data-dial={+356}>Malta</option>
            <option value="MH" data-dial={+692}>Marshall Islands</option>
            <option value="MR" data-dial={+222}>Mauritania</option>
            <option value="MU" data-dial={+230}>Mauritius</option>
            <option value="MX" data-dial={+52}>Mexico</option>
            <option value="FM" data-dial={+691}>Micronesia</option>
            <option value="MD" data-dial={+373}>Moldova</option>
            <option value="MC" data-dial={+377}>Monaco</option>
            <option value="MN" data-dial={+976}>Mongolia</option>
            <option value="ME" data-dial={+382}>Montenegro</option>
            <option value="MA" data-dial={+212}>Morocco</option>
            <option value="MZ" data-dial={+258}>Mozambique</option>
            <option value="MM" data-dial={+95}>Myanmar</option>
            <option value="NA" data-dial={+264}>Namibia</option>
            <option value="NR" data-dial={+674}>Nauru</option>
            <option value="NP" data-dial={+977}>Nepal</option>
            <option value="NL" data-dial={+31}>Netherlands</option>
            <option value="NZ" data-dial={+64}>New Zealand</option>
            <option value="NI" data-dial={+505}>Nicaragua</option>
            <option value="NE" data-dial={+227}>Niger</option>
            <option value="NG" data-dial={+234}>Nigeria</option>
            <option value="KP" data-dial={+850}>North Korea</option>
            <option value="MK" data-dial={+389}>North Macedonia</option>
            <option value="NO" data-dial={+47}>Norway</option>
            <option value="OM" data-dial={+968}>Oman</option>
            <option value="PK" data-dial={+92}>Pakistan</option>
            <option value="PW" data-dial={+680}>Palau</option>
            <option value="PS" data-dial={+970}>Palestine</option>
            <option value="PA" data-dial={+507}>Panama</option>
            <option value="PG" data-dial={+675}>Papua New Guinea</option>
            <option value="PY" data-dial={+595}>Paraguay</option>
            <option value="PE" data-dial={+51}>Peru</option>
            <option value="PH" data-dial={+63}>Philippines</option>
            <option value="PL" data-dial={+48}>Poland</option>
            <option value="PT" data-dial={+351}>Portugal</option>
            <option value="QA" data-dial={+974}>Qatar</option>
            <option value="RO" data-dial={+40}>Romania</option>
            <option value="RU" data-dial={+7}>Russia</option>
            <option value="RW" data-dial={+250}>Rwanda</option>
            <option value="KN" data-dial={+1}>Saint Kitts and Nevis</option>
            <option value="LC" data-dial={+1}>Saint Lucia</option>
            <option value="VC" data-dial={+1}>Saint Vincent and the Grenadines</option>
            <option value="WS" data-dial={+685}>Samoa</option>
            <option value="SM" data-dial={+378}>San Marino</option>
            <option value="SA" data-dial={+966}>Saudi Arabia</option>
            <option value="SN" data-dial={+221}>Senegal</option>
            <option value="RS" data-dial={+381}>Serbia</option>
            <option value="SC" data-dial={+248}>Seychelles</option>
            <option value="SL" data-dial={+232}>Sierra Leone</option>
            <option value="SG" data-dial={+65}>Singapore</option>
            <option value="SK" data-dial={+421}>Slovakia</option>
            <option value="SI" data-dial={+386}>Slovenia</option>
            <option value="SB" data-dial={+677}>Solomon Islands</option>
            <option value="SO" data-dial={+252}>Somalia</option>
            <option value="ZA" data-dial={+27}>South Africa</option>
            <option value="KR" data-dial={+82}>South Korea</option>
            <option value="SS" data-dial={+211}>South Sudan</option>
            <option value="ES" data-dial={+34}>Spain</option>
            <option value="LK" data-dial={+94}>Sri Lanka</option>
            <option value="SD" data-dial={+249}>Sudan</option>
            <option value="SR" data-dial={+597}>Suriname</option>
            <option value="SE" data-dial={+46}>Sweden</option>
            <option value="CH" data-dial={+41}>Switzerland</option>
            <option value="SY" data-dial={+963}>Syria</option>
            <option value="ST" data-dial={+239}>São Tomé and Príncipe</option>
            <option value="TW" data-dial={+886}>Taiwan</option>
            <option value="TJ" data-dial={+992}>Tajikistan</option>
            <option value="TZ" data-dial={+255}>Tanzania</option>
            <option value="TH" data-dial={+66}>Thailand</option>
            <option value="TL" data-dial={+670}>Timor-Leste</option>
            <option value="TG" data-dial={+228}>Togo</option>
            <option value="TO" data-dial={+676}>Tonga</option>
            <option value="TT" data-dial={+1}>Trinidad and Tobago</option>
            <option value="TN" data-dial={+216}>Tunisia</option>
            <option value="TR" data-dial={+90}>Turkey</option>
            <option value="TM" data-dial={+993}>Turkmenistan</option>
            <option value="TV" data-dial={+688}>Tuvalu</option>
            <option value="UG" data-dial={+256}>Uganda</option>
            <option value="UA" data-dial={+380}>Ukraine</option>
            <option value="AE" data-dial={+971}>United Arab Emirates</option>
            <option value="GB" data-dial={+44}>United Kingdom</option>
            <option value="US" data-dial={+1}>United States</option>
            <option value="UY" data-dial={+598}>Uruguay</option>
            <option value="UZ" data-dial={+998}>Uzbekistan</option>
            <option value="VU" data-dial={+678}>Vanuatu</option>
            <option value="VE" data-dial={+58}>Venezuela</option>
            <option value="VN" data-dial={+84}>Vietnam</option>
            <option value="YE" data-dial={+967}>Yemen</option>
            <option value="ZM" data-dial={+260}>Zambia</option>
            <option value="ZW" data-dial={+263}>Zimbabwe</option>
          </select>
        </div>
      </div>
      <div className="bk-form-row2">
        <div className="bk-fg"><label>Phone / WhatsApp *</label>
          <div className="phone-wrap">
            <select id="fA-dialcode" className="dial-select">
              <option value="">+</option>
              <option value={+234}>🇳🇬 +234</option>
              <option value={+44}>🇬🇧 +44</option>
              <option value={+1}>🇺🇸 +1</option>
              <option value={+233}>🇬🇭 +233</option>
              <option value={+27}>🇿🇦 +27</option>
              <option value={+254}>🇰🇪 +254</option>
              <option value={+1}>🇨🇦 +1</option>
              <option value={+61}>🇦🇺 +61</option>
              <option value={+49}>🇩🇪 +49</option>
              <option value={+33}>🇫🇷 +33</option>
              <option value={+39}>🇮🇹 +39</option>
              <option value={+34}>🇪🇸 +34</option>
              <option value={+351}>🇵🇹 +351</option>
              <option value={+31}>🇳🇱 +31</option>
              <option value={+32}>🇧🇪 +32</option>
              <option value={+46}>🇸🇪 +46</option>
              <option value={+47}>🇳🇴 +47</option>
              <option value={+45}>🇩🇰 +45</option>
              <option value={+971}>🇦🇪 +971</option>
              <option value={+966}>🇸🇦 +966</option>
              <option value={+91}>🇮🇳 +91</option>
              <option value={+86}>🇨🇳 +86</option>
              <option value={+81}>🇯🇵 +81</option>
              <option value={+55}>🇧🇷 +55</option>
              <option value={+52}>🇲🇽 +52</option>
              <option value={+221}>🇸🇳 +221</option>
              <option value={+225}>🇨🇮 +225</option>
              <option value={+237}>🇨🇲 +237</option>
              <option value={+250}>🇷🇼 +250</option>
              <option value={+251}>🇪🇹 +251</option>
              <option value={+255}>🇹🇿 +255</option>
              <option value={+256}>🇺🇬 +256</option>
              <option value={+260}>🇿🇲 +260</option>
              <option value={+263}>🇿🇼 +263</option>
              <option value={+65}>🇸🇬 +65</option>
              <option value={+60}>🇲🇾 +60</option>
            </select>
            <input type="tel" required id="fA-phone" placeholder="234 567 8900" className="phone-input" />
          </div>
        </div>
        <div className="bk-fg"><label>Time Zone</label><input type="text" id="fA-timezone" required placeholder="e.g. GMT+1, EST, WAT" /></div>
      </div>
      <div className="bk-section-label">Section 2 Background</div>
      <div className="bk-fg"><label>Which best describes you? *</label>
        <select id="fA-role" required>
          <option value="">Select...</option>
          <option>Athlete</option>
          <option>Coach</option>
          <option>Student</option>
          <option>Professional</option>
          <option>Performer / Creator</option>
          <option>Other</option>
        </select>
      </div>
      <div className="bk-form-row2">
        <div className="bk-fg"><label>Sport / Profession / Field</label><input type="text" required placeholder="e.g. Football, Finance, Medicine" /></div>
        <div className="bk-fg"><label>Current Role or Level</label><input type="text" required placeholder="e.g. university athlete, founder" /></div>
      </div>
      <div className="bk-section-label">Section 3 Presenting Issue</div>
      <div className="bk-fg"><label>What challenge are you currently experiencing? *</label><textarea required rows={5} id="fA-challenge" placeholder="Describe what's happening in as much detail as you'd like..." defaultValue={""} /></div>
      <div className="bk-form-row2">
        <div className="bk-fg"><label>How long has this been present?</label>
          <select required>
            <option value="">Select...</option>
            <option>Less than 1 month</option>
            <option>1 6 months</option>
            <option>6 12 months</option>
            <option>Over a year</option>
          </select>
        </div>
        <div className="bk-fg"><label>When does this show up most?</label>
          <select required>
            <option value="">Select...</option>
            <option>Competition / Performance</option>
            <option>Training / Preparation</option>
            <option>Work or leadership situations</option>
            <option>Relationships / communication</option>
            <option>Across multiple settings</option>
          </select>
        </div>
      </div>
      <div className="bk-fg"><label>What have you already tried?</label><textarea required rows={4} placeholder="Describe any approaches you have already attempted..." defaultValue={""} /></div>
      <div className="bk-fg"><label>What outcome would make this consultation worthwhile for you?</label><textarea required rows={4} placeholder="Describe what success would look like for you..." defaultValue={""} /></div>
      <div className="bk-section-label">Section 4 Fit</div>
      <div className="bk-form-row2">
        <div className="bk-fg"><label>What are you seeking?</label>
          <select required>
            <option value="">Select...</option>
            <option>One consultation only</option>
            <option>Short-term support</option>
            <option>Ongoing support</option>
            <option>Unsure</option>
          </select>
        </div>
        <div className="bk-fg"><label>How did you hear about me?</label><input type="text" required placeholder="Social media, referral, other..." /></div>
      </div>
      <div className="bk-fg"><label>What else should I know before we speak?</label><textarea required rows={3} placeholder="Anything else you would like to share..." defaultValue={""} /></div>
      <div className="bk-consent">
        <input type="checkbox" id="consent-A" required />
        <label htmlFor="consent-A">I understand this consultation is exploratory and does not constitute therapy, emergency support, or guaranteed outcomes.</label>
      </div>
      <button type="submit" className="bk-submit">Submit &amp; Book Your Slot →</button>
      <p className="bk-submit-note">After submitting you will be redirected to book your 15-minute consultation slot and complete the $30 payment.</p>
    </form>
  </div>
</div>

        </div>

        <div style={{ display: activeForm === 'B' ? 'block' : 'none' }}>
          <div className="bk-nav" style={{ padding: "0 250px", marginTop: "24px", background: "none", border: "none" }}><button className="bk-back" onClick={() => setActiveForm('selector')}>← Change Service Type</button></div>
          <div>
  <div className="bk-nav">
    <button className="bk-back" onClick={() => {}}>
      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15,18 9,12 15,6" /></svg>
      Back to Services
    </button>
  </div>
  <div className="bk-form-hero navy">
    <span className="bk-form-badge">Team &amp; Organization Consultation · 30 min · $75</span>
    <h1 className="bk-form-title">Team &amp; Organization Consultation</h1>
    <p className="bk-form-sub" style={{fontStyle: 'italic', fontSize: 16, marginBottom: 8}}>"The talent is there. But the team isn't delivering as it should."</p>
    <p className="bk-form-sub">For teams, coaches, and academies. This consultation is where we identify what is disrupting performance across your environment and what kind of support would actually address it.</p>
  </div>
  <div className="bk-form-body">
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="bk-section-label">Section 1: Contact Details</div>
      <div className="bk-form-row2">
        <div className="bk-fg"><label>First Name *</label><input type="text" required id="fB-fname" placeholder="First name" /></div>
        <div className="bk-fg"><label>Last Name *</label><input type="text" required id="fB-lname" placeholder="Last name" /></div>
      </div>
      <div className="bk-fg"><label>Club / Team / Organization Name *</label><input type="text" required id="fB-org" placeholder="Organization name" /></div>
      <div className="bk-form-row2">
        <div className="bk-fg"><label>Country *</label>
          <input type="text" placeholder="Search country..." onInput={() => {}} style={{width: '100%', padding: '11px 14px', marginBottom: 8, border: '1.5px solid var(--border,#E0DDD4)', borderRadius: 8, fontFamily: 'var(--font-body,sans-serif)', fontSize: 13, color: 'var(--ink,#1A1A16)', background: 'var(--white,#fff)', outline: 'none', boxSizing: 'border-box'}} />
          <select required id="fB-country" onChange={() => {}} size={1}>
            <option value="">Select country...</option>
            <option value="AF" data-dial={+93}>Afghanistan</option>
            <option value="AL" data-dial={+355}>Albania</option>
            <option value="DZ" data-dial={+213}>Algeria</option>
            <option value="AD" data-dial={+376}>Andorra</option>
            <option value="AO" data-dial={+244}>Angola</option>
            <option value="AG" data-dial={+1}>Antigua and Barbuda</option>
            <option value="AR" data-dial={+54}>Argentina</option>
            <option value="AM" data-dial={+374}>Armenia</option>
            <option value="AU" data-dial={+61}>Australia</option>
            <option value="AT" data-dial={+43}>Austria</option>
            <option value="AZ" data-dial={+994}>Azerbaijan</option>
            <option value="BS" data-dial={+1}>Bahamas</option>
            <option value="BH" data-dial={+973}>Bahrain</option>
            <option value="BD" data-dial={+880}>Bangladesh</option>
            <option value="BB" data-dial={+1}>Barbados</option>
            <option value="BY" data-dial={+375}>Belarus</option>
            <option value="BE" data-dial={+32}>Belgium</option>
            <option value="BZ" data-dial={+501}>Belize</option>
            <option value="BJ" data-dial={+229}>Benin</option>
            <option value="BT" data-dial={+975}>Bhutan</option>
            <option value="BO" data-dial={+591}>Bolivia</option>
            <option value="BA" data-dial={+387}>Bosnia and Herzegovina</option>
            <option value="BW" data-dial={+267}>Botswana</option>
            <option value="BR" data-dial={+55}>Brazil</option>
            <option value="BN" data-dial={+673}>Brunei</option>
            <option value="BG" data-dial={+359}>Bulgaria</option>
            <option value="BF" data-dial={+226}>Burkina Faso</option>
            <option value="BI" data-dial={+257}>Burundi</option>
            <option value="KH" data-dial={+855}>Cambodia</option>
            <option value="CM" data-dial={+237}>Cameroon</option>
            <option value="CA" data-dial={+1}>Canada</option>
            <option value="CV" data-dial={+238}>Cape Verde</option>
            <option value="CF" data-dial={+236}>Central African Republic</option>
            <option value="TD" data-dial={+235}>Chad</option>
            <option value="CL" data-dial={+56}>Chile</option>
            <option value="CN" data-dial={+86}>China</option>
            <option value="CO" data-dial={+57}>Colombia</option>
            <option value="KM" data-dial={+269}>Comoros</option>
            <option value="CG" data-dial={+242}>Congo</option>
            <option value="CD" data-dial={+243}>Congo (DRC)</option>
            <option value="CR" data-dial={+506}>Costa Rica</option>
            <option value="HR" data-dial={+385}>Croatia</option>
            <option value="CU" data-dial={+53}>Cuba</option>
            <option value="CY" data-dial={+357}>Cyprus</option>
            <option value="CZ" data-dial={+420}>Czech Republic</option>
            <option value="CI" data-dial={+225}>Côte d'Ivoire</option>
            <option value="DK" data-dial={+45}>Denmark</option>
            <option value="DJ" data-dial={+253}>Djibouti</option>
            <option value="DM" data-dial={+1}>Dominica</option>
            <option value="DO" data-dial={+1}>Dominican Republic</option>
            <option value="EC" data-dial={+593}>Ecuador</option>
            <option value="EG" data-dial={+20}>Egypt</option>
            <option value="SV" data-dial={+503}>El Salvador</option>
            <option value="GQ" data-dial={+240}>Equatorial Guinea</option>
            <option value="ER" data-dial={+291}>Eritrea</option>
            <option value="EE" data-dial={+372}>Estonia</option>
            <option value="SZ" data-dial={+268}>Eswatini</option>
            <option value="ET" data-dial={+251}>Ethiopia</option>
            <option value="FJ" data-dial={+679}>Fiji</option>
            <option value="FI" data-dial={+358}>Finland</option>
            <option value="FR" data-dial={+33}>France</option>
            <option value="GA" data-dial={+241}>Gabon</option>
            <option value="GM" data-dial={+220}>Gambia</option>
            <option value="GE" data-dial={+995}>Georgia</option>
            <option value="DE" data-dial={+49}>Germany</option>
            <option value="GH" data-dial={+233}>Ghana</option>
            <option value="GR" data-dial={+30}>Greece</option>
            <option value="GD" data-dial={+1}>Grenada</option>
            <option value="GT" data-dial={+502}>Guatemala</option>
            <option value="GN" data-dial={+224}>Guinea</option>
            <option value="GW" data-dial={+245}>Guinea-Bissau</option>
            <option value="GY" data-dial={+592}>Guyana</option>
            <option value="HT" data-dial={+509}>Haiti</option>
            <option value="HN" data-dial={+504}>Honduras</option>
            <option value="HU" data-dial={+36}>Hungary</option>
            <option value="IS" data-dial={+354}>Iceland</option>
            <option value="IN" data-dial={+91}>India</option>
            <option value="ID" data-dial={+62}>Indonesia</option>
            <option value="IR" data-dial={+98}>Iran</option>
            <option value="IQ" data-dial={+964}>Iraq</option>
            <option value="IE" data-dial={+353}>Ireland</option>
            <option value="IL" data-dial={+972}>Israel</option>
            <option value="IT" data-dial={+39}>Italy</option>
            <option value="JM" data-dial={+1}>Jamaica</option>
            <option value="JP" data-dial={+81}>Japan</option>
            <option value="JO" data-dial={+962}>Jordan</option>
            <option value="KZ" data-dial={+7}>Kazakhstan</option>
            <option value="KE" data-dial={+254}>Kenya</option>
            <option value="KI" data-dial={+686}>Kiribati</option>
            <option value="KW" data-dial={+965}>Kuwait</option>
            <option value="KG" data-dial={+996}>Kyrgyzstan</option>
            <option value="LA" data-dial={+856}>Laos</option>
            <option value="LV" data-dial={+371}>Latvia</option>
            <option value="LB" data-dial={+961}>Lebanon</option>
            <option value="LS" data-dial={+266}>Lesotho</option>
            <option value="LR" data-dial={+231}>Liberia</option>
            <option value="LY" data-dial={+218}>Libya</option>
            <option value="LI" data-dial={+423}>Liechtenstein</option>
            <option value="LT" data-dial={+370}>Lithuania</option>
            <option value="LU" data-dial={+352}>Luxembourg</option>
            <option value="MG" data-dial={+261}>Madagascar</option>
            <option value="MW" data-dial={+265}>Malawi</option>
            <option value="MY" data-dial={+60}>Malaysia</option>
            <option value="MV" data-dial={+960}>Maldives</option>
            <option value="ML" data-dial={+223}>Mali</option>
            <option value="MT" data-dial={+356}>Malta</option>
            <option value="MH" data-dial={+692}>Marshall Islands</option>
            <option value="MR" data-dial={+222}>Mauritania</option>
            <option value="MU" data-dial={+230}>Mauritius</option>
            <option value="MX" data-dial={+52}>Mexico</option>
            <option value="FM" data-dial={+691}>Micronesia</option>
            <option value="MD" data-dial={+373}>Moldova</option>
            <option value="MC" data-dial={+377}>Monaco</option>
            <option value="MN" data-dial={+976}>Mongolia</option>
            <option value="ME" data-dial={+382}>Montenegro</option>
            <option value="MA" data-dial={+212}>Morocco</option>
            <option value="MZ" data-dial={+258}>Mozambique</option>
            <option value="MM" data-dial={+95}>Myanmar</option>
            <option value="NA" data-dial={+264}>Namibia</option>
            <option value="NR" data-dial={+674}>Nauru</option>
            <option value="NP" data-dial={+977}>Nepal</option>
            <option value="NL" data-dial={+31}>Netherlands</option>
            <option value="NZ" data-dial={+64}>New Zealand</option>
            <option value="NI" data-dial={+505}>Nicaragua</option>
            <option value="NE" data-dial={+227}>Niger</option>
            <option value="NG" data-dial={+234}>Nigeria</option>
            <option value="KP" data-dial={+850}>North Korea</option>
            <option value="MK" data-dial={+389}>North Macedonia</option>
            <option value="NO" data-dial={+47}>Norway</option>
            <option value="OM" data-dial={+968}>Oman</option>
            <option value="PK" data-dial={+92}>Pakistan</option>
            <option value="PW" data-dial={+680}>Palau</option>
            <option value="PS" data-dial={+970}>Palestine</option>
            <option value="PA" data-dial={+507}>Panama</option>
            <option value="PG" data-dial={+675}>Papua New Guinea</option>
            <option value="PY" data-dial={+595}>Paraguay</option>
            <option value="PE" data-dial={+51}>Peru</option>
            <option value="PH" data-dial={+63}>Philippines</option>
            <option value="PL" data-dial={+48}>Poland</option>
            <option value="PT" data-dial={+351}>Portugal</option>
            <option value="QA" data-dial={+974}>Qatar</option>
            <option value="RO" data-dial={+40}>Romania</option>
            <option value="RU" data-dial={+7}>Russia</option>
            <option value="RW" data-dial={+250}>Rwanda</option>
            <option value="KN" data-dial={+1}>Saint Kitts and Nevis</option>
            <option value="LC" data-dial={+1}>Saint Lucia</option>
            <option value="VC" data-dial={+1}>Saint Vincent and the Grenadines</option>
            <option value="WS" data-dial={+685}>Samoa</option>
            <option value="SM" data-dial={+378}>San Marino</option>
            <option value="SA" data-dial={+966}>Saudi Arabia</option>
            <option value="SN" data-dial={+221}>Senegal</option>
            <option value="RS" data-dial={+381}>Serbia</option>
            <option value="SC" data-dial={+248}>Seychelles</option>
            <option value="SL" data-dial={+232}>Sierra Leone</option>
            <option value="SG" data-dial={+65}>Singapore</option>
            <option value="SK" data-dial={+421}>Slovakia</option>
            <option value="SI" data-dial={+386}>Slovenia</option>
            <option value="SB" data-dial={+677}>Solomon Islands</option>
            <option value="SO" data-dial={+252}>Somalia</option>
            <option value="ZA" data-dial={+27}>South Africa</option>
            <option value="KR" data-dial={+82}>South Korea</option>
            <option value="SS" data-dial={+211}>South Sudan</option>
            <option value="ES" data-dial={+34}>Spain</option>
            <option value="LK" data-dial={+94}>Sri Lanka</option>
            <option value="SD" data-dial={+249}>Sudan</option>
            <option value="SR" data-dial={+597}>Suriname</option>
            <option value="SE" data-dial={+46}>Sweden</option>
            <option value="CH" data-dial={+41}>Switzerland</option>
            <option value="SY" data-dial={+963}>Syria</option>
            <option value="ST" data-dial={+239}>São Tomé and Príncipe</option>
            <option value="TW" data-dial={+886}>Taiwan</option>
            <option value="TJ" data-dial={+992}>Tajikistan</option>
            <option value="TZ" data-dial={+255}>Tanzania</option>
            <option value="TH" data-dial={+66}>Thailand</option>
            <option value="TL" data-dial={+670}>Timor-Leste</option>
            <option value="TG" data-dial={+228}>Togo</option>
            <option value="TO" data-dial={+676}>Tonga</option>
            <option value="TT" data-dial={+1}>Trinidad and Tobago</option>
            <option value="TN" data-dial={+216}>Tunisia</option>
            <option value="TR" data-dial={+90}>Turkey</option>
            <option value="TM" data-dial={+993}>Turkmenistan</option>
            <option value="TV" data-dial={+688}>Tuvalu</option>
            <option value="UG" data-dial={+256}>Uganda</option>
            <option value="UA" data-dial={+380}>Ukraine</option>
            <option value="AE" data-dial={+971}>United Arab Emirates</option>
            <option value="GB" data-dial={+44}>United Kingdom</option>
            <option value="US" data-dial={+1}>United States</option>
            <option value="UY" data-dial={+598}>Uruguay</option>
            <option value="UZ" data-dial={+998}>Uzbekistan</option>
            <option value="VU" data-dial={+678}>Vanuatu</option>
            <option value="VE" data-dial={+58}>Venezuela</option>
            <option value="VN" data-dial={+84}>Vietnam</option>
            <option value="YE" data-dial={+967}>Yemen</option>
            <option value="ZM" data-dial={+260}>Zambia</option>
            <option value="ZW" data-dial={+263}>Zimbabwe</option>
          </select>
        </div>
        <div className="bk-fg"><label>Time Zone *</label><input type="text" required id="fB-timezone" placeholder="e.g. GMT+1, EST, WAT" /></div>
      </div>
      <div className="bk-fg"><label>Phone / WhatsApp *</label>
        <div className="phone-wrap">
          <select id="fB-dialcode" className="dial-select">
            <option value="">+</option>
            <option value={+234}>🇳🇬 +234</option>
            <option value={+44}>🇬🇧 +44</option>
            <option value={+1}>🇺🇸 +1</option>
            <option value={+233}>🇬🇭 +233</option>
            <option value={+27}>🇿🇦 +27</option>
            <option value={+254}>🇰🇪 +254</option>
            <option value={+1}>🇨🇦 +1</option>
            <option value={+61}>🇦🇺 +61</option>
            <option value={+49}>🇩🇪 +49</option>
            <option value={+33}>🇫🇷 +33</option>
            <option value={+39}>🇮🇹 +39</option>
            <option value={+34}>🇪🇸 +34</option>
            <option value={+351}>🇵🇹 +351</option>
            <option value={+31}>🇳🇱 +31</option>
            <option value={+32}>🇧🇪 +32</option>
            <option value={+46}>🇸🇪 +46</option>
            <option value={+47}>🇳🇴 +47</option>
            <option value={+45}>🇩🇰 +45</option>
            <option value={+971}>🇦🇪 +971</option>
            <option value={+966}>🇸🇦 +966</option>
            <option value={+91}>🇮🇳 +91</option>
            <option value={+86}>🇨🇳 +86</option>
            <option value={+81}>🇯🇵 +81</option>
            <option value={+55}>🇧🇷 +55</option>
            <option value={+52}>🇲🇽 +52</option>
            <option value={+221}>🇸🇳 +221</option>
            <option value={+225}>🇨🇮 +225</option>
            <option value={+237}>🇨🇲 +237</option>
            <option value={+250}>🇷🇼 +250</option>
            <option value={+251}>🇪🇹 +251</option>
            <option value={+255}>🇹🇿 +255</option>
            <option value={+256}>🇺🇬 +256</option>
            <option value={+260}>🇿🇲 +260</option>
            <option value={+263}>🇿🇼 +263</option>
            <option value={+65}>🇸🇬 +65</option>
            <option value={+60}>🇲🇾 +60</option>
          </select>
          <input type="tel" required id="fB-phone" placeholder="234 567 8900" className="phone-input" />
        </div>
      </div>
      <div className="bk-fg"><label>Email *</label><input type="email" required id="fB-email" placeholder="your@email.com" /></div>
      <div className="bk-section-label">Section 2: About Your Team</div>
      <div className="bk-fg"><label>Your Role *</label>
        <select required id="fB-role">
          <option value="">Select...</option>
          <option>Head Coach</option>
          <option>Assistant Coach</option>
          <option>Director</option>
          <option>Manager</option>
          <option>HR</option>
          <option>Academy Director</option>
          <option>Other</option>
        </select>
      </div>
      <div className="bk-fg"><label>Number of People Involved *</label><input type="number" required id="fB-size" placeholder="e.g. 22" min={1} /></div>
      <div className="bk-fg"><label>What challenge is the team facing? *</label>
        <select required id="fB-challenge-type">
          <option value="">Select...</option>
          <option>Cohesion</option>
          <option>Accountability</option>
          <option>Communication</option>
          <option>Pressure response</option>
          <option>Culture issues</option>
          <option>Other</option>
        </select>
      </div>
      <div className="bk-section-label">Section 3: Detail</div>
      <div className="bk-fg"><label>What have you already tried? *</label>
        <textarea required rows={5} id="fB-tried" placeholder="Describe any approaches, interventions, or conversations you have already attempted..." defaultValue={""} />
      </div>
      <div className="bk-fg"><label>What outcome are you seeking? *</label>
        <textarea required rows={5} id="fB-outcome" placeholder="Describe what success would look like for your team or organisation..." defaultValue={""} />
      </div>
      <div className="bk-fg"><label>What are you seeking? *</label>
        <select required id="fB-seeking">
          <option value="">Select...</option>
          <option>One consultation only</option>
          <option>Short-term support</option>
          <option>Ongoing support</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div className="bk-fg"><label>How did you hear about me? *</label>
        <input type="text" required id="fB-source" placeholder="Social media, referral, search, other..." />
      </div>
      <div className="bk-fg"><label>What else should I know before we speak?</label>
        <textarea rows={3} id="fB-extra" placeholder="Anything else you would like to share..." defaultValue={""} />
      </div>
      <div className="bk-section-label">Section 4: Consent</div>
      <div className="bk-fg" style={{display: 'flex', alignItems: 'flex-start', gap: 12}}>
        <input type="checkbox" required id="fB-consent" style={{marginTop: 4, flexShrink: 0, width: 18, height: 18, accentColor: 'var(--navy,#00102A)', cursor: 'pointer'}} />
        <label htmlFor="fB-consent" style={{fontSize: 13, color: 'var(--ink3,#6B6B64)', lineHeight: '1.6', cursor: 'pointer', textTransform: 'none', letterSpacing: 0, fontWeight: 400}}>I understand this consultation is exploratory and does not constitute therapy, emergency support, or guaranteed outcomes.</label>
      </div>
      <button type="submit" className="bk-submit">Book Team Consultation →</button>
      <p className="bk-submit-note">After submitting you will be redirected to complete the $75 payment and book your 30-minute slot.</p>
    </form>
  </div>
</div>

        </div>

        <div style={{ display: activeForm === 'C' ? 'block' : 'none' }}>
          <div className="bk-nav" style={{ padding: "0 250px", marginTop: "24px", background: "none", border: "none" }}><button className="bk-back" onClick={() => setActiveForm('selector')}>← Change Service Type</button></div>
          <div>
  <div className="bk-nav">
    <button className="bk-back" onClick={() => {}}>
      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15,18 9,12 15,6" /></svg>
      Back to Services
    </button>
  </div>
  <div className="bk-form-hero navy">
    <span className="bk-form-badge">Executive / High-Pressure Performance · 30 min · $100</span>
    <h1 className="bk-form-title">Executive / High-Pressure Performance Consultation</h1>
    <p className="bk-form-sub" style={{fontStyle: 'italic', fontSize: 16, marginBottom: 8}}>"The position is already yours. But performing inside it is taking a toll."</p>
    <p className="bk-form-sub">For founders, executives, and leaders. This consultation is where we identify what is eroding your mental performance and what kind of support would actually restore it.</p>
  </div>
  <div className="bk-form-body">
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="bk-section-label">Section 1 Contact Details</div>
      <div className="bk-form-row2">
        <div className="bk-fg"><label>First Name *</label><input type="text" required id="fC-fname" placeholder="First name" /></div>
        <div className="bk-fg"><label>Last Name *</label><input type="text" required id="fC-lname" placeholder="Last name" /></div>
      </div>
      <div className="bk-form-row2">
        <div className="bk-fg"><label>Email *</label><input type="email" id="fC-email" required placeholder="your@email.com" /></div>
        <div className="bk-fg"><label>Organization Name</label><input type="text" id="fC-org" required placeholder="Organization name" /></div>
      </div>
      <div className="bk-form-row2">
        <div className="bk-fg"><label>Country *</label>
          <input type="text" placeholder="Search country..." onInput={() => {}} style={{width: '100%', padding: '11px 14px', marginBottom: 8, border: '1.5px solid var(--border,#E0DDD4)', borderRadius: 8, fontFamily: 'var(--font-body,sans-serif)', fontSize: 13, color: 'var(--ink,#1A1A16)', background: 'var(--white,#fff)', outline: 'none', boxSizing: 'border-box'}} />
          <select required id="fC-country" onChange={() => {}} size={1}>
            <option value="">Select country...</option>
            <option value="AF" data-dial={+93}>Afghanistan</option>
            <option value="AL" data-dial={+355}>Albania</option>
            <option value="DZ" data-dial={+213}>Algeria</option>
            <option value="AD" data-dial={+376}>Andorra</option>
            <option value="AO" data-dial={+244}>Angola</option>
            <option value="AG" data-dial={+1}>Antigua and Barbuda</option>
            <option value="AR" data-dial={+54}>Argentina</option>
            <option value="AM" data-dial={+374}>Armenia</option>
            <option value="AU" data-dial={+61}>Australia</option>
            <option value="AT" data-dial={+43}>Austria</option>
            <option value="AZ" data-dial={+994}>Azerbaijan</option>
            <option value="BS" data-dial={+1}>Bahamas</option>
            <option value="BH" data-dial={+973}>Bahrain</option>
            <option value="BD" data-dial={+880}>Bangladesh</option>
            <option value="BB" data-dial={+1}>Barbados</option>
            <option value="BY" data-dial={+375}>Belarus</option>
            <option value="BE" data-dial={+32}>Belgium</option>
            <option value="BZ" data-dial={+501}>Belize</option>
            <option value="BJ" data-dial={+229}>Benin</option>
            <option value="BT" data-dial={+975}>Bhutan</option>
            <option value="BO" data-dial={+591}>Bolivia</option>
            <option value="BA" data-dial={+387}>Bosnia and Herzegovina</option>
            <option value="BW" data-dial={+267}>Botswana</option>
            <option value="BR" data-dial={+55}>Brazil</option>
            <option value="BN" data-dial={+673}>Brunei</option>
            <option value="BG" data-dial={+359}>Bulgaria</option>
            <option value="BF" data-dial={+226}>Burkina Faso</option>
            <option value="BI" data-dial={+257}>Burundi</option>
            <option value="KH" data-dial={+855}>Cambodia</option>
            <option value="CM" data-dial={+237}>Cameroon</option>
            <option value="CA" data-dial={+1}>Canada</option>
            <option value="CV" data-dial={+238}>Cape Verde</option>
            <option value="CF" data-dial={+236}>Central African Republic</option>
            <option value="TD" data-dial={+235}>Chad</option>
            <option value="CL" data-dial={+56}>Chile</option>
            <option value="CN" data-dial={+86}>China</option>
            <option value="CO" data-dial={+57}>Colombia</option>
            <option value="KM" data-dial={+269}>Comoros</option>
            <option value="CG" data-dial={+242}>Congo</option>
            <option value="CD" data-dial={+243}>Congo (DRC)</option>
            <option value="CR" data-dial={+506}>Costa Rica</option>
            <option value="HR" data-dial={+385}>Croatia</option>
            <option value="CU" data-dial={+53}>Cuba</option>
            <option value="CY" data-dial={+357}>Cyprus</option>
            <option value="CZ" data-dial={+420}>Czech Republic</option>
            <option value="CI" data-dial={+225}>Côte d'Ivoire</option>
            <option value="DK" data-dial={+45}>Denmark</option>
            <option value="DJ" data-dial={+253}>Djibouti</option>
            <option value="DM" data-dial={+1}>Dominica</option>
            <option value="DO" data-dial={+1}>Dominican Republic</option>
            <option value="EC" data-dial={+593}>Ecuador</option>
            <option value="EG" data-dial={+20}>Egypt</option>
            <option value="SV" data-dial={+503}>El Salvador</option>
            <option value="GQ" data-dial={+240}>Equatorial Guinea</option>
            <option value="ER" data-dial={+291}>Eritrea</option>
            <option value="EE" data-dial={+372}>Estonia</option>
            <option value="SZ" data-dial={+268}>Eswatini</option>
            <option value="ET" data-dial={+251}>Ethiopia</option>
            <option value="FJ" data-dial={+679}>Fiji</option>
            <option value="FI" data-dial={+358}>Finland</option>
            <option value="FR" data-dial={+33}>France</option>
            <option value="GA" data-dial={+241}>Gabon</option>
            <option value="GM" data-dial={+220}>Gambia</option>
            <option value="GE" data-dial={+995}>Georgia</option>
            <option value="DE" data-dial={+49}>Germany</option>
            <option value="GH" data-dial={+233}>Ghana</option>
            <option value="GR" data-dial={+30}>Greece</option>
            <option value="GD" data-dial={+1}>Grenada</option>
            <option value="GT" data-dial={+502}>Guatemala</option>
            <option value="GN" data-dial={+224}>Guinea</option>
            <option value="GW" data-dial={+245}>Guinea-Bissau</option>
            <option value="GY" data-dial={+592}>Guyana</option>
            <option value="HT" data-dial={+509}>Haiti</option>
            <option value="HN" data-dial={+504}>Honduras</option>
            <option value="HU" data-dial={+36}>Hungary</option>
            <option value="IS" data-dial={+354}>Iceland</option>
            <option value="IN" data-dial={+91}>India</option>
            <option value="ID" data-dial={+62}>Indonesia</option>
            <option value="IR" data-dial={+98}>Iran</option>
            <option value="IQ" data-dial={+964}>Iraq</option>
            <option value="IE" data-dial={+353}>Ireland</option>
            <option value="IL" data-dial={+972}>Israel</option>
            <option value="IT" data-dial={+39}>Italy</option>
            <option value="JM" data-dial={+1}>Jamaica</option>
            <option value="JP" data-dial={+81}>Japan</option>
            <option value="JO" data-dial={+962}>Jordan</option>
            <option value="KZ" data-dial={+7}>Kazakhstan</option>
            <option value="KE" data-dial={+254}>Kenya</option>
            <option value="KI" data-dial={+686}>Kiribati</option>
            <option value="KW" data-dial={+965}>Kuwait</option>
            <option value="KG" data-dial={+996}>Kyrgyzstan</option>
            <option value="LA" data-dial={+856}>Laos</option>
            <option value="LV" data-dial={+371}>Latvia</option>
            <option value="LB" data-dial={+961}>Lebanon</option>
            <option value="LS" data-dial={+266}>Lesotho</option>
            <option value="LR" data-dial={+231}>Liberia</option>
            <option value="LY" data-dial={+218}>Libya</option>
            <option value="LI" data-dial={+423}>Liechtenstein</option>
            <option value="LT" data-dial={+370}>Lithuania</option>
            <option value="LU" data-dial={+352}>Luxembourg</option>
            <option value="MG" data-dial={+261}>Madagascar</option>
            <option value="MW" data-dial={+265}>Malawi</option>
            <option value="MY" data-dial={+60}>Malaysia</option>
            <option value="MV" data-dial={+960}>Maldives</option>
            <option value="ML" data-dial={+223}>Mali</option>
            <option value="MT" data-dial={+356}>Malta</option>
            <option value="MH" data-dial={+692}>Marshall Islands</option>
            <option value="MR" data-dial={+222}>Mauritania</option>
            <option value="MU" data-dial={+230}>Mauritius</option>
            <option value="MX" data-dial={+52}>Mexico</option>
            <option value="FM" data-dial={+691}>Micronesia</option>
            <option value="MD" data-dial={+373}>Moldova</option>
            <option value="MC" data-dial={+377}>Monaco</option>
            <option value="MN" data-dial={+976}>Mongolia</option>
            <option value="ME" data-dial={+382}>Montenegro</option>
            <option value="MA" data-dial={+212}>Morocco</option>
            <option value="MZ" data-dial={+258}>Mozambique</option>
            <option value="MM" data-dial={+95}>Myanmar</option>
            <option value="NA" data-dial={+264}>Namibia</option>
            <option value="NR" data-dial={+674}>Nauru</option>
            <option value="NP" data-dial={+977}>Nepal</option>
            <option value="NL" data-dial={+31}>Netherlands</option>
            <option value="NZ" data-dial={+64}>New Zealand</option>
            <option value="NI" data-dial={+505}>Nicaragua</option>
            <option value="NE" data-dial={+227}>Niger</option>
            <option value="NG" data-dial={+234}>Nigeria</option>
            <option value="KP" data-dial={+850}>North Korea</option>
            <option value="MK" data-dial={+389}>North Macedonia</option>
            <option value="NO" data-dial={+47}>Norway</option>
            <option value="OM" data-dial={+968}>Oman</option>
            <option value="PK" data-dial={+92}>Pakistan</option>
            <option value="PW" data-dial={+680}>Palau</option>
            <option value="PS" data-dial={+970}>Palestine</option>
            <option value="PA" data-dial={+507}>Panama</option>
            <option value="PG" data-dial={+675}>Papua New Guinea</option>
            <option value="PY" data-dial={+595}>Paraguay</option>
            <option value="PE" data-dial={+51}>Peru</option>
            <option value="PH" data-dial={+63}>Philippines</option>
            <option value="PL" data-dial={+48}>Poland</option>
            <option value="PT" data-dial={+351}>Portugal</option>
            <option value="QA" data-dial={+974}>Qatar</option>
            <option value="RO" data-dial={+40}>Romania</option>
            <option value="RU" data-dial={+7}>Russia</option>
            <option value="RW" data-dial={+250}>Rwanda</option>
            <option value="KN" data-dial={+1}>Saint Kitts and Nevis</option>
            <option value="LC" data-dial={+1}>Saint Lucia</option>
            <option value="VC" data-dial={+1}>Saint Vincent and the Grenadines</option>
            <option value="WS" data-dial={+685}>Samoa</option>
            <option value="SM" data-dial={+378}>San Marino</option>
            <option value="SA" data-dial={+966}>Saudi Arabia</option>
            <option value="SN" data-dial={+221}>Senegal</option>
            <option value="RS" data-dial={+381}>Serbia</option>
            <option value="SC" data-dial={+248}>Seychelles</option>
            <option value="SL" data-dial={+232}>Sierra Leone</option>
            <option value="SG" data-dial={+65}>Singapore</option>
            <option value="SK" data-dial={+421}>Slovakia</option>
            <option value="SI" data-dial={+386}>Slovenia</option>
            <option value="SB" data-dial={+677}>Solomon Islands</option>
            <option value="SO" data-dial={+252}>Somalia</option>
            <option value="ZA" data-dial={+27}>South Africa</option>
            <option value="KR" data-dial={+82}>South Korea</option>
            <option value="SS" data-dial={+211}>South Sudan</option>
            <option value="ES" data-dial={+34}>Spain</option>
            <option value="LK" data-dial={+94}>Sri Lanka</option>
            <option value="SD" data-dial={+249}>Sudan</option>
            <option value="SR" data-dial={+597}>Suriname</option>
            <option value="SE" data-dial={+46}>Sweden</option>
            <option value="CH" data-dial={+41}>Switzerland</option>
            <option value="SY" data-dial={+963}>Syria</option>
            <option value="ST" data-dial={+239}>São Tomé and Príncipe</option>
            <option value="TW" data-dial={+886}>Taiwan</option>
            <option value="TJ" data-dial={+992}>Tajikistan</option>
            <option value="TZ" data-dial={+255}>Tanzania</option>
            <option value="TH" data-dial={+66}>Thailand</option>
            <option value="TL" data-dial={+670}>Timor-Leste</option>
            <option value="TG" data-dial={+228}>Togo</option>
            <option value="TO" data-dial={+676}>Tonga</option>
            <option value="TT" data-dial={+1}>Trinidad and Tobago</option>
            <option value="TN" data-dial={+216}>Tunisia</option>
            <option value="TR" data-dial={+90}>Turkey</option>
            <option value="TM" data-dial={+993}>Turkmenistan</option>
            <option value="TV" data-dial={+688}>Tuvalu</option>
            <option value="UG" data-dial={+256}>Uganda</option>
            <option value="UA" data-dial={+380}>Ukraine</option>
            <option value="AE" data-dial={+971}>United Arab Emirates</option>
            <option value="GB" data-dial={+44}>United Kingdom</option>
            <option value="US" data-dial={+1}>United States</option>
            <option value="UY" data-dial={+598}>Uruguay</option>
            <option value="UZ" data-dial={+998}>Uzbekistan</option>
            <option value="VU" data-dial={+678}>Vanuatu</option>
            <option value="VE" data-dial={+58}>Venezuela</option>
            <option value="VN" data-dial={+84}>Vietnam</option>
            <option value="YE" data-dial={+967}>Yemen</option>
            <option value="ZM" data-dial={+260}>Zambia</option>
            <option value="ZW" data-dial={+263}>Zimbabwe</option>
          </select>
        </div>
        <div className="bk-fg"><label>Time Zone</label><input type="text" id="fC-timezone" required placeholder="e.g. GMT+1, EST, WAT" /></div>
      </div>
      <div className="bk-fg"><label>Phone / WhatsApp *</label>
        <div className="phone-wrap">
          <select id="fC-dialcode" className="dial-select">
            <option value="">+</option>
            <option value={+234}>🇳🇬 +234</option>
            <option value={+44}>🇬🇧 +44</option>
            <option value={+1}>🇺🇸 +1</option>
            <option value={+233}>🇬🇭 +233</option>
            <option value={+27}>🇿🇦 +27</option>
            <option value={+254}>🇰🇪 +254</option>
            <option value={+1}>🇨🇦 +1</option>
            <option value={+61}>🇦🇺 +61</option>
            <option value={+49}>🇩🇪 +49</option>
            <option value={+33}>🇫🇷 +33</option>
            <option value={+39}>🇮🇹 +39</option>
            <option value={+34}>🇪🇸 +34</option>
            <option value={+351}>🇵🇹 +351</option>
            <option value={+31}>🇳🇱 +31</option>
            <option value={+32}>🇧🇪 +32</option>
            <option value={+46}>🇸🇪 +46</option>
            <option value={+47}>🇳🇴 +47</option>
            <option value={+45}>🇩🇰 +45</option>
            <option value={+971}>🇦🇪 +971</option>
            <option value={+966}>🇸🇦 +966</option>
            <option value={+91}>🇮🇳 +91</option>
            <option value={+86}>🇨🇳 +86</option>
            <option value={+81}>🇯🇵 +81</option>
            <option value={+55}>🇧🇷 +55</option>
            <option value={+52}>🇲🇽 +52</option>
            <option value={+221}>🇸🇳 +221</option>
            <option value={+225}>🇨🇮 +225</option>
            <option value={+237}>🇨🇲 +237</option>
            <option value={+250}>🇷🇼 +250</option>
            <option value={+251}>🇪🇹 +251</option>
            <option value={+255}>🇹🇿 +255</option>
            <option value={+256}>🇺🇬 +256</option>
            <option value={+260}>🇿🇲 +260</option>
            <option value={+263}>🇿🇼 +263</option>
            <option value={+65}>🇸🇬 +65</option>
            <option value={+60}>🇲🇾 +60</option>
          </select>
          <input type="tel" required id="fC-phone" placeholder="234 567 8900" className="phone-input" />
        </div>
      </div>
      <div className="bk-section-label">Section 2 About You</div>
      <div className="bk-fg"><label>Role / Title *</label><input type="text" required id="fC-role" placeholder="e.g. CEO, Founder, Director, MD" /></div>
      <div className="bk-fg"><label>What challenge are you currently experiencing? *</label>
        <textarea required rows={5} id="fC-challenge" placeholder="Describe the challenge in detail..." defaultValue={""} />
      </div>
      <button type="submit" className="bk-submit">Submit &amp; Book Slot →</button>
      <p className="bk-submit-note">After submitting you will be redirected to book your time slot.</p>
    </form>
  </div>
</div>

        </div>

        <div style={{ display: activeForm === 'D' ? 'block' : 'none' }}>
          <div className="bk-nav" style={{ padding: "0 250px", marginTop: "24px", background: "none", border: "none" }}><button className="bk-back" onClick={() => setActiveForm('selector')}>← Change Service Type</button></div>
          <div>
  <div className="bk-nav">
    <button className="bk-back" onClick={() => {}}>
      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15,18 9,12 15,6" /></svg>
      Back to Services
    </button>
  </div>
  <div className="bk-form-hero navy">
    <span className="bk-form-badge">Sport Governance &amp; Strategic Advisory</span>
    <h1 className="bk-form-title">Sport Governance &amp; Strategic Consultation</h1>
    <p className="bk-form-sub" style={{fontStyle: 'italic', fontSize: 16, marginBottom: 8}}>"The organisation is not functioning as it should."</p>
    <p className="bk-form-sub">For clubs, academies, federations, and sport organisations. This consultation is where we identify what is structurally disrupting your organisation and what kind of advisory support would actually address it.</p>
  </div>
  <div className="bk-form-body">
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="bk-section-label">Section 1 Contact Details</div>
      <div className="bk-form-row2">
        <div className="bk-fg"><label>First Name *</label><input type="text" required id="fD-fname" placeholder="First name" /></div>
        <div className="bk-fg"><label>Last Name *</label><input type="text" required id="fD-lname" placeholder="Last name" /></div>
      </div>
      <div className="bk-form-row2">
        <div className="bk-fg"><label>Email *</label><input type="email" id="fD-email" required placeholder="your@email.com" /></div>
        <div className="bk-fg"><label>Club / Team / Organization Name *</label><input type="text" id="fD-org" required placeholder="Organization name" /></div>
      </div>
      <div className="bk-form-row2">
        <div className="bk-fg"><label>Country *</label>
          <input type="text" placeholder="Search country..." onInput={() => {}} style={{width: '100%', padding: '11px 14px', marginBottom: 8, border: '1.5px solid var(--border,#E0DDD4)', borderRadius: 8, fontFamily: 'var(--font-body,sans-serif)', fontSize: 13, color: 'var(--ink,#1A1A16)', background: 'var(--white,#fff)', outline: 'none', boxSizing: 'border-box'}} />
          <select required id="fD-country" onChange={() => {}} size={1}>
            <option value="">Select country...</option>
            <option value="AF" data-dial={+93}>Afghanistan</option>
            <option value="AL" data-dial={+355}>Albania</option>
            <option value="DZ" data-dial={+213}>Algeria</option>
            <option value="AD" data-dial={+376}>Andorra</option>
            <option value="AO" data-dial={+244}>Angola</option>
            <option value="AG" data-dial={+1}>Antigua and Barbuda</option>
            <option value="AR" data-dial={+54}>Argentina</option>
            <option value="AM" data-dial={+374}>Armenia</option>
            <option value="AU" data-dial={+61}>Australia</option>
            <option value="AT" data-dial={+43}>Austria</option>
            <option value="AZ" data-dial={+994}>Azerbaijan</option>
            <option value="BS" data-dial={+1}>Bahamas</option>
            <option value="BH" data-dial={+973}>Bahrain</option>
            <option value="BD" data-dial={+880}>Bangladesh</option>
            <option value="BB" data-dial={+1}>Barbados</option>
            <option value="BY" data-dial={+375}>Belarus</option>
            <option value="BE" data-dial={+32}>Belgium</option>
            <option value="BZ" data-dial={+501}>Belize</option>
            <option value="BJ" data-dial={+229}>Benin</option>
            <option value="BT" data-dial={+975}>Bhutan</option>
            <option value="BO" data-dial={+591}>Bolivia</option>
            <option value="BA" data-dial={+387}>Bosnia and Herzegovina</option>
            <option value="BW" data-dial={+267}>Botswana</option>
            <option value="BR" data-dial={+55}>Brazil</option>
            <option value="BN" data-dial={+673}>Brunei</option>
            <option value="BG" data-dial={+359}>Bulgaria</option>
            <option value="BF" data-dial={+226}>Burkina Faso</option>
            <option value="BI" data-dial={+257}>Burundi</option>
            <option value="KH" data-dial={+855}>Cambodia</option>
            <option value="CM" data-dial={+237}>Cameroon</option>
            <option value="CA" data-dial={+1}>Canada</option>
            <option value="CV" data-dial={+238}>Cape Verde</option>
            <option value="CF" data-dial={+236}>Central African Republic</option>
            <option value="TD" data-dial={+235}>Chad</option>
            <option value="CL" data-dial={+56}>Chile</option>
            <option value="CN" data-dial={+86}>China</option>
            <option value="CO" data-dial={+57}>Colombia</option>
            <option value="KM" data-dial={+269}>Comoros</option>
            <option value="CG" data-dial={+242}>Congo</option>
            <option value="CD" data-dial={+243}>Congo (DRC)</option>
            <option value="CR" data-dial={+506}>Costa Rica</option>
            <option value="HR" data-dial={+385}>Croatia</option>
            <option value="CU" data-dial={+53}>Cuba</option>
            <option value="CY" data-dial={+357}>Cyprus</option>
            <option value="CZ" data-dial={+420}>Czech Republic</option>
            <option value="CI" data-dial={+225}>Côte d'Ivoire</option>
            <option value="DK" data-dial={+45}>Denmark</option>
            <option value="DJ" data-dial={+253}>Djibouti</option>
            <option value="DM" data-dial={+1}>Dominica</option>
            <option value="DO" data-dial={+1}>Dominican Republic</option>
            <option value="EC" data-dial={+593}>Ecuador</option>
            <option value="EG" data-dial={+20}>Egypt</option>
            <option value="SV" data-dial={+503}>El Salvador</option>
            <option value="GQ" data-dial={+240}>Equatorial Guinea</option>
            <option value="ER" data-dial={+291}>Eritrea</option>
            <option value="EE" data-dial={+372}>Estonia</option>
            <option value="SZ" data-dial={+268}>Eswatini</option>
            <option value="ET" data-dial={+251}>Ethiopia</option>
            <option value="FJ" data-dial={+679}>Fiji</option>
            <option value="FI" data-dial={+358}>Finland</option>
            <option value="FR" data-dial={+33}>France</option>
            <option value="GA" data-dial={+241}>Gabon</option>
            <option value="GM" data-dial={+220}>Gambia</option>
            <option value="GE" data-dial={+995}>Georgia</option>
            <option value="DE" data-dial={+49}>Germany</option>
            <option value="GH" data-dial={+233}>Ghana</option>
            <option value="GR" data-dial={+30}>Greece</option>
            <option value="GD" data-dial={+1}>Grenada</option>
            <option value="GT" data-dial={+502}>Guatemala</option>
            <option value="GN" data-dial={+224}>Guinea</option>
            <option value="GW" data-dial={+245}>Guinea-Bissau</option>
            <option value="GY" data-dial={+592}>Guyana</option>
            <option value="HT" data-dial={+509}>Haiti</option>
            <option value="HN" data-dial={+504}>Honduras</option>
            <option value="HU" data-dial={+36}>Hungary</option>
            <option value="IS" data-dial={+354}>Iceland</option>
            <option value="IN" data-dial={+91}>India</option>
            <option value="ID" data-dial={+62}>Indonesia</option>
            <option value="IR" data-dial={+98}>Iran</option>
            <option value="IQ" data-dial={+964}>Iraq</option>
            <option value="IE" data-dial={+353}>Ireland</option>
            <option value="IL" data-dial={+972}>Israel</option>
            <option value="IT" data-dial={+39}>Italy</option>
            <option value="JM" data-dial={+1}>Jamaica</option>
            <option value="JP" data-dial={+81}>Japan</option>
            <option value="JO" data-dial={+962}>Jordan</option>
            <option value="KZ" data-dial={+7}>Kazakhstan</option>
            <option value="KE" data-dial={+254}>Kenya</option>
            <option value="KI" data-dial={+686}>Kiribati</option>
            <option value="KW" data-dial={+965}>Kuwait</option>
            <option value="KG" data-dial={+996}>Kyrgyzstan</option>
            <option value="LA" data-dial={+856}>Laos</option>
            <option value="LV" data-dial={+371}>Latvia</option>
            <option value="LB" data-dial={+961}>Lebanon</option>
            <option value="LS" data-dial={+266}>Lesotho</option>
            <option value="LR" data-dial={+231}>Liberia</option>
            <option value="LY" data-dial={+218}>Libya</option>
            <option value="LI" data-dial={+423}>Liechtenstein</option>
            <option value="LT" data-dial={+370}>Lithuania</option>
            <option value="LU" data-dial={+352}>Luxembourg</option>
            <option value="MG" data-dial={+261}>Madagascar</option>
            <option value="MW" data-dial={+265}>Malawi</option>
            <option value="MY" data-dial={+60}>Malaysia</option>
            <option value="MV" data-dial={+960}>Maldives</option>
            <option value="ML" data-dial={+223}>Mali</option>
            <option value="MT" data-dial={+356}>Malta</option>
            <option value="MH" data-dial={+692}>Marshall Islands</option>
            <option value="MR" data-dial={+222}>Mauritania</option>
            <option value="MU" data-dial={+230}>Mauritius</option>
            <option value="MX" data-dial={+52}>Mexico</option>
            <option value="FM" data-dial={+691}>Micronesia</option>
            <option value="MD" data-dial={+373}>Moldova</option>
            <option value="MC" data-dial={+377}>Monaco</option>
            <option value="MN" data-dial={+976}>Mongolia</option>
            <option value="ME" data-dial={+382}>Montenegro</option>
            <option value="MA" data-dial={+212}>Morocco</option>
            <option value="MZ" data-dial={+258}>Mozambique</option>
            <option value="MM" data-dial={+95}>Myanmar</option>
            <option value="NA" data-dial={+264}>Namibia</option>
            <option value="NR" data-dial={+674}>Nauru</option>
            <option value="NP" data-dial={+977}>Nepal</option>
            <option value="NL" data-dial={+31}>Netherlands</option>
            <option value="NZ" data-dial={+64}>New Zealand</option>
            <option value="NI" data-dial={+505}>Nicaragua</option>
            <option value="NE" data-dial={+227}>Niger</option>
            <option value="NG" data-dial={+234}>Nigeria</option>
            <option value="KP" data-dial={+850}>North Korea</option>
            <option value="MK" data-dial={+389}>North Macedonia</option>
            <option value="NO" data-dial={+47}>Norway</option>
            <option value="OM" data-dial={+968}>Oman</option>
            <option value="PK" data-dial={+92}>Pakistan</option>
            <option value="PW" data-dial={+680}>Palau</option>
            <option value="PS" data-dial={+970}>Palestine</option>
            <option value="PA" data-dial={+507}>Panama</option>
            <option value="PG" data-dial={+675}>Papua New Guinea</option>
            <option value="PY" data-dial={+595}>Paraguay</option>
            <option value="PE" data-dial={+51}>Peru</option>
            <option value="PH" data-dial={+63}>Philippines</option>
            <option value="PL" data-dial={+48}>Poland</option>
            <option value="PT" data-dial={+351}>Portugal</option>
            <option value="QA" data-dial={+974}>Qatar</option>
            <option value="RO" data-dial={+40}>Romania</option>
            <option value="RU" data-dial={+7}>Russia</option>
            <option value="RW" data-dial={+250}>Rwanda</option>
            <option value="KN" data-dial={+1}>Saint Kitts and Nevis</option>
            <option value="LC" data-dial={+1}>Saint Lucia</option>
            <option value="VC" data-dial={+1}>Saint Vincent and the Grenadines</option>
            <option value="WS" data-dial={+685}>Samoa</option>
            <option value="SM" data-dial={+378}>San Marino</option>
            <option value="SA" data-dial={+966}>Saudi Arabia</option>
            <option value="SN" data-dial={+221}>Senegal</option>
            <option value="RS" data-dial={+381}>Serbia</option>
            <option value="SC" data-dial={+248}>Seychelles</option>
            <option value="SL" data-dial={+232}>Sierra Leone</option>
            <option value="SG" data-dial={+65}>Singapore</option>
            <option value="SK" data-dial={+421}>Slovakia</option>
            <option value="SI" data-dial={+386}>Slovenia</option>
            <option value="SB" data-dial={+677}>Solomon Islands</option>
            <option value="SO" data-dial={+252}>Somalia</option>
            <option value="ZA" data-dial={+27}>South Africa</option>
            <option value="KR" data-dial={+82}>South Korea</option>
            <option value="SS" data-dial={+211}>South Sudan</option>
            <option value="ES" data-dial={+34}>Spain</option>
            <option value="LK" data-dial={+94}>Sri Lanka</option>
            <option value="SD" data-dial={+249}>Sudan</option>
            <option value="SR" data-dial={+597}>Suriname</option>
            <option value="SE" data-dial={+46}>Sweden</option>
            <option value="CH" data-dial={+41}>Switzerland</option>
            <option value="SY" data-dial={+963}>Syria</option>
            <option value="ST" data-dial={+239}>São Tomé and Príncipe</option>
            <option value="TW" data-dial={+886}>Taiwan</option>
            <option value="TJ" data-dial={+992}>Tajikistan</option>
            <option value="TZ" data-dial={+255}>Tanzania</option>
            <option value="TH" data-dial={+66}>Thailand</option>
            <option value="TL" data-dial={+670}>Timor-Leste</option>
            <option value="TG" data-dial={+228}>Togo</option>
            <option value="TO" data-dial={+676}>Tonga</option>
            <option value="TT" data-dial={+1}>Trinidad and Tobago</option>
            <option value="TN" data-dial={+216}>Tunisia</option>
            <option value="TR" data-dial={+90}>Turkey</option>
            <option value="TM" data-dial={+993}>Turkmenistan</option>
            <option value="TV" data-dial={+688}>Tuvalu</option>
            <option value="UG" data-dial={+256}>Uganda</option>
            <option value="UA" data-dial={+380}>Ukraine</option>
            <option value="AE" data-dial={+971}>United Arab Emirates</option>
            <option value="GB" data-dial={+44}>United Kingdom</option>
            <option value="US" data-dial={+1}>United States</option>
            <option value="UY" data-dial={+598}>Uruguay</option>
            <option value="UZ" data-dial={+998}>Uzbekistan</option>
            <option value="VU" data-dial={+678}>Vanuatu</option>
            <option value="VE" data-dial={+58}>Venezuela</option>
            <option value="VN" data-dial={+84}>Vietnam</option>
            <option value="YE" data-dial={+967}>Yemen</option>
            <option value="ZM" data-dial={+260}>Zambia</option>
            <option value="ZW" data-dial={+263}>Zimbabwe</option>
          </select>
        </div>
        <div className="bk-fg"><label>Time Zone</label><input type="text" id="fD-timezone" required placeholder="e.g. GMT+1, EST, WAT" /></div>
      </div>
      <div className="bk-fg"><label>Phone / WhatsApp *</label>
        <div className="phone-wrap">
          <select id="fD-dialcode" className="dial-select">
            <option value="">+</option>
            <option value={+234}>🇳🇬 +234</option>
            <option value={+44}>🇬🇧 +44</option>
            <option value={+1}>🇺🇸 +1</option>
            <option value={+233}>🇬🇭 +233</option>
            <option value={+27}>🇿🇦 +27</option>
            <option value={+254}>🇰🇪 +254</option>
            <option value={+1}>🇨🇦 +1</option>
            <option value={+61}>🇦🇺 +61</option>
            <option value={+49}>🇩🇪 +49</option>
            <option value={+33}>🇫🇷 +33</option>
            <option value={+39}>🇮🇹 +39</option>
            <option value={+34}>🇪🇸 +34</option>
            <option value={+351}>🇵🇹 +351</option>
            <option value={+31}>🇳🇱 +31</option>
            <option value={+32}>🇧🇪 +32</option>
            <option value={+46}>🇸🇪 +46</option>
            <option value={+47}>🇳🇴 +47</option>
            <option value={+45}>🇩🇰 +45</option>
            <option value={+971}>🇦🇪 +971</option>
            <option value={+966}>🇸🇦 +966</option>
            <option value={+91}>🇮🇳 +91</option>
            <option value={+86}>🇨🇳 +86</option>
            <option value={+81}>🇯🇵 +81</option>
            <option value={+55}>🇧🇷 +55</option>
            <option value={+52}>🇲🇽 +52</option>
            <option value={+221}>🇸🇳 +221</option>
            <option value={+225}>🇨🇮 +225</option>
            <option value={+237}>🇨🇲 +237</option>
            <option value={+250}>🇷🇼 +250</option>
            <option value={+251}>🇪🇹 +251</option>
            <option value={+255}>🇹🇿 +255</option>
            <option value={+256}>🇺🇬 +256</option>
            <option value={+260}>🇿🇲 +260</option>
            <option value={+263}>🇿🇼 +263</option>
            <option value={+65}>🇸🇬 +65</option>
            <option value={+60}>🇲🇾 +60</option>
          </select>
          <input type="tel" required id="fD-phone" placeholder="234 567 8900" className="phone-input" />
        </div>
      </div>
      <div className="bk-section-label">Section 2 Organization Details</div>
      <div className="bk-fg"><label>Your Role *</label><input type="text" required id="fD-role" placeholder="e.g. Chairman, Secretary General, CEO" /></div>
      <div className="bk-fg"><label>Type of Organization</label>
        <select required>
          <option value="">Select...</option>
          <option>Club</option>
          <option>Academy</option>
          <option>Federation</option>
          <option>NGO</option>
          <option>Government Body</option>
          <option>Other</option>
        </select>
      </div>
      <div className="bk-fg"><label>What governance or strategic challenge are you facing?</label>
        <textarea required rows={5} placeholder="Describe your situation..." defaultValue={""} />
      </div>
      <button type="submit" className="bk-submit">Submit Advisory Request →</button>
      <p className="bk-submit-note">Advisory requests are reviewed before a discovery call is scheduled. We will be in touch.</p>
    </form>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
