
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateStaticParams() {
  return [{ id: '01' }, { id: '02' }];
}

export default async function ResearchPub({ params }: { params: Promise<{ id: string }> }) {
  const resolved = await params;
  
  if (resolved.id === '01') {
    return <>{`<div>
  <div style={{position: 'sticky', top: 0, zIndex: 10, background: '#00102A', padding: '0 52px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,.08)'}}>
    <span style={{fontFamily: 'var(--font-display,serif)', color: '#fff', fontSize: 16, fontWeight: 700}}>Dr. Joshua A. Oparachukwu</span>
    <button style={{background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)', color: '#fff', padding: '7px 18px', borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body,sans-serif)'}}>← Back</button>
  </div>
  <div style={{background: '#00102A', padding: '56px 120px 64px', borderBottom: '3px solid #C8A830'}}>
    <div style={{fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#C8A830', marginBottom: 14}}>Research Publication · 2024</div>
    <h1 style={{fontFamily: 'var(--font-display,serif)', fontSize: 36, fontWeight: 700, color: '#fff', lineHeight: '1.2', maxWidth: 760, marginBottom: 18}}>The Effect of Martial Arts Training on the Performance of Football Skills among Football Players in University of Ibadan</h1>
    <p style={{fontSize: 14, color: '#6688AA', marginBottom: 6}}>Prof. A.O Fadoju &amp; Oparachukwu Joshua Ayodeji</p>
    <p style={{fontSize: 13, color: '#445566'}}>Department of Human Kinetics and Health Education · University of Ibadan, Ibadan, Nigeria</p>
    <div style={{display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap'}}>
      <span style={{fontSize: 11, padding: '4px 14px', borderRadius: 20, background: 'rgba(255,255,255,.06)', color: '#C8A830', border: '1px solid rgba(200,168,48,.3)'}}>Taekwondo · Martial Arts</span>
      <span style={{fontSize: 11, padding: '4px 14px', borderRadius: 20, background: 'rgba(255,255,255,.06)', color: '#aaa', border: '1px solid rgba(255,255,255,.1)'}}>Physical Skills</span>
      <span style={{fontSize: 11, padding: '4px 14px', borderRadius: 20, background: 'rgba(255,255,255,.06)', color: '#aaa', border: '1px solid rgba(255,255,255,.1)'}}>Football</span>
      <span style={{fontSize: 11, padding: '4px 14px', borderRadius: 20, background: 'rgba(255,255,255,.06)', color: '#aaa', border: '1px solid rgba(255,255,255,.1)'}}>University of Ibadan</span>
    </div>
  </div>
  <div style={{maxWidth: 780, margin: '0 auto', padding: '56px 24px 0'}}>
    <h2 style={{fontFamily: 'var(--font-display,serif)', fontSize: 24, fontWeight: 700, color: '#1A1A16', marginBottom: 10}}>Abstract</h2>
    <div style={{width: 36, height: 2, background: '#C8A830', marginBottom: 20, borderRadius: 2}} />
    <div style={{background: '#F4F2EC', borderLeft: '4px solid #C8A830', borderRadius: '0 10px 10px 0', padding: '20px 24px', marginBottom: 40}}>
      <p style={{fontSize: 14, color: '#444', lineHeight: '1.85', marginBottom: 10}}>Football athletes within the University of Ibadan do not exert themselves on the field of play, failing to demonstrate dominance and assertiveness, and have become generally docile, lacking the instrumentally aggressive properties desirable of a football team. This study seeks to understand the effect of Taekwondo martial art training on physical skill among University of Ibadan Football Players. The study assessed the effect of 6 weeks Taekwondo Skill training on University of Ibadan football players' physical skill. Non-probability purposive sampling was adopted. Instruments included the Sport Aggression Questionnaire and the 18-item Sport Mental Toughness Questionnaire (SMTQ-18). Data was analyzed using descriptive and inferential statistics. Results revealed significant influence of Taekwondo training on physical skill and Instrumental Aggression as indicated by F-statistics value of 65.49 (p=0.000 &lt;0.05).</p>
      <p style={{fontSize: 12, color: '#888', margin: 0}}><strong>Key words:</strong> Taekwondo (Martial Arts), Physical Skills</p>
    </div>
    <h2 style={{fontFamily: 'var(--font-display,serif)', fontSize: 24, fontWeight: 700, color: '#1A1A16', marginBottom: 10}}>Introduction</h2>
    <div style={{width: 36, height: 2, background: '#C8A830', marginBottom: 20, borderRadius: 2}} />
    <p style={{fontSize: 15, color: '#444', lineHeight: '1.85', marginBottom: 16}}>Sport is characterized by the surmounting of challenges, and the bracing of differing levels of difficulty in an attempt to overcome an opponent, win the competition, obtain laurels, medals, sport rewards, trophies or some other form of sport recognition. It involves physical training, mental training, some pleasure, sport rules, and then victory or defeat (Oparachukwu, 2022).</p>
    <p style={{fontSize: 15, color: '#444', lineHeight: '1.85', marginBottom: 16}}>Athletes within their chosen sports engage in competition at various levels against an opponent and attempt to exert themselves on the opponent. In contact sports, to protect a team's winning strategy and successfully prevent the opponent from scoring, measures, methods, and elements of aggression under stipulated guidelines and rules are allowed and employed. This kind of permitted aggression in sport is labelled <em>instrumental aggression</em>, a form of aggression expressed against another person where the aggression is used only as a means of securing some reward or achieving an external goal such as victory.</p>
    <p style={{fontSize: 15, color: '#444', lineHeight: '1.85', marginBottom: 16}}>Football is a sport that has developed over the years and has experienced dynamism in its style of play, its rules, its tactics, and its rules of engagement; it is increasingly important that football players be equipped appropriately with the necessary skills that would aid scoring goals and ultimately winning.</p>
    <p style={{fontSize: 15, color: '#444', lineHeight: '1.85', marginBottom: 16}}>Many martial arts have evolved into combat sports over time, as evidenced by the Olympic combat sports of freestyle wrestling, Greco-Roman wrestling, boxing, fencing, judo, taekwondo, and karate. Competitors in all martial arts, particularly Taekwondo, must be able to anticipate their opponents' actions and methods, processing incoming information swiftly and participating in rapid planning and decision-making (Anshel and Payne, 2005).</p>
    <p style={{fontSize: 15, color: '#444', lineHeight: '1.85', marginBottom: 16}}>At the University of Ibadan, an observation was made regarding student athletes participating in football. These athletes tend to avoid instrumental aggression and engaging in forceful tackles on the field. This study aims to explore the effect of martial arts training on the performance of football skills among football players in University of Ibadan.</p>
    <div style={{position: 'relative', height: 160, marginTop: '-80px', background: 'linear-gradient(to bottom, transparent 0%, #FAFAF7 70%)', pointerEvents: 'none'}} />
  </div>
  <div style={{maxWidth: 780, margin: '0 auto', padding: '0 24px 80px'}}>
    <div style={{background: '#00102A', borderRadius: 16, padding: '44px 48px', textAlign: 'center', boxShadow: '0 8px 40px rgba(0,12,32,.25)'}}>
      <div style={{fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#C8A830', marginBottom: 14}}>Full Paper Available</div>
      <h3 style={{fontFamily: 'var(--font-display,serif)', fontSize: 24, fontWeight: 700, color: '#fff', lineHeight: '1.3', marginBottom: 12}}>Access the Complete Publication</h3>
      <p style={{fontSize: 14, color: '#6688AA', lineHeight: '1.7', marginBottom: 28, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto'}}>The full manuscript includes methodology, data analysis, findings, and discussion. Submit a request to receive it directly to your inbox.</p>
      <button style={{background: '#C8A830', color: '#00102A', fontFamily: 'var(--font-body,sans-serif)', fontWeight: 700, fontSize: 14, padding: '14px 36px', borderRadius: 8, border: 'none', cursor: 'pointer'}}>Request Full Manuscript →</button>
      <p style={{fontSize: 11, color: '#445566', marginTop: 14, marginBottom: 0}}>You will receive the manuscript within 24 hours of submitting your details.</p>
    </div>
  </div>
</div>
`.length > 0 ? (
      <div>
  <div style={{position: 'sticky', top: 0, zIndex: 10, background: '#00102A', padding: '0 52px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,.08)'}}>
    <span style={{fontFamily: 'var(--font-display,serif)', color: '#fff', fontSize: 16, fontWeight: 700}}>Dr. Joshua A. Oparachukwu</span>
    <button style={{background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)', color: '#fff', padding: '7px 18px', borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body,sans-serif)'}}>← Back</button>
  </div>
  <div style={{background: '#00102A', padding: '56px 120px 64px', borderBottom: '3px solid #C8A830'}}>
    <div style={{fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#C8A830', marginBottom: 14}}>Research Publication · 2024</div>
    <h1 style={{fontFamily: 'var(--font-display,serif)', fontSize: 36, fontWeight: 700, color: '#fff', lineHeight: '1.2', maxWidth: 760, marginBottom: 18}}>The Effect of Martial Arts Training on the Performance of Football Skills among Football Players in University of Ibadan</h1>
    <p style={{fontSize: 14, color: '#6688AA', marginBottom: 6}}>Prof. A.O Fadoju &amp; Oparachukwu Joshua Ayodeji</p>
    <p style={{fontSize: 13, color: '#445566'}}>Department of Human Kinetics and Health Education · University of Ibadan, Ibadan, Nigeria</p>
    <div style={{display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap'}}>
      <span style={{fontSize: 11, padding: '4px 14px', borderRadius: 20, background: 'rgba(255,255,255,.06)', color: '#C8A830', border: '1px solid rgba(200,168,48,.3)'}}>Taekwondo · Martial Arts</span>
      <span style={{fontSize: 11, padding: '4px 14px', borderRadius: 20, background: 'rgba(255,255,255,.06)', color: '#aaa', border: '1px solid rgba(255,255,255,.1)'}}>Physical Skills</span>
      <span style={{fontSize: 11, padding: '4px 14px', borderRadius: 20, background: 'rgba(255,255,255,.06)', color: '#aaa', border: '1px solid rgba(255,255,255,.1)'}}>Football</span>
      <span style={{fontSize: 11, padding: '4px 14px', borderRadius: 20, background: 'rgba(255,255,255,.06)', color: '#aaa', border: '1px solid rgba(255,255,255,.1)'}}>University of Ibadan</span>
    </div>
  </div>
  <div style={{maxWidth: 780, margin: '0 auto', padding: '56px 24px 0'}}>
    <h2 style={{fontFamily: 'var(--font-display,serif)', fontSize: 24, fontWeight: 700, color: '#1A1A16', marginBottom: 10}}>Abstract</h2>
    <div style={{width: 36, height: 2, background: '#C8A830', marginBottom: 20, borderRadius: 2}} />
    <div style={{background: '#F4F2EC', borderLeft: '4px solid #C8A830', borderRadius: '0 10px 10px 0', padding: '20px 24px', marginBottom: 40}}>
      <p style={{fontSize: 14, color: '#444', lineHeight: '1.85', marginBottom: 10}}>Football athletes within the University of Ibadan do not exert themselves on the field of play, failing to demonstrate dominance and assertiveness, and have become generally docile, lacking the instrumentally aggressive properties desirable of a football team. This study seeks to understand the effect of Taekwondo martial art training on physical skill among University of Ibadan Football Players. The study assessed the effect of 6 weeks Taekwondo Skill training on University of Ibadan football players' physical skill. Non-probability purposive sampling was adopted. Instruments included the Sport Aggression Questionnaire and the 18-item Sport Mental Toughness Questionnaire (SMTQ-18). Data was analyzed using descriptive and inferential statistics. Results revealed significant influence of Taekwondo training on physical skill and Instrumental Aggression as indicated by F-statistics value of 65.49 (p=0.000 &lt;0.05).</p>
      <p style={{fontSize: 12, color: '#888', margin: 0}}><strong>Key words:</strong> Taekwondo (Martial Arts), Physical Skills</p>
    </div>
    <h2 style={{fontFamily: 'var(--font-display,serif)', fontSize: 24, fontWeight: 700, color: '#1A1A16', marginBottom: 10}}>Introduction</h2>
    <div style={{width: 36, height: 2, background: '#C8A830', marginBottom: 20, borderRadius: 2}} />
    <p style={{fontSize: 15, color: '#444', lineHeight: '1.85', marginBottom: 16}}>Sport is characterized by the surmounting of challenges, and the bracing of differing levels of difficulty in an attempt to overcome an opponent, win the competition, obtain laurels, medals, sport rewards, trophies or some other form of sport recognition. It involves physical training, mental training, some pleasure, sport rules, and then victory or defeat (Oparachukwu, 2022).</p>
    <p style={{fontSize: 15, color: '#444', lineHeight: '1.85', marginBottom: 16}}>Athletes within their chosen sports engage in competition at various levels against an opponent and attempt to exert themselves on the opponent. In contact sports, to protect a team's winning strategy and successfully prevent the opponent from scoring, measures, methods, and elements of aggression under stipulated guidelines and rules are allowed and employed. This kind of permitted aggression in sport is labelled <em>instrumental aggression</em>, a form of aggression expressed against another person where the aggression is used only as a means of securing some reward or achieving an external goal such as victory.</p>
    <p style={{fontSize: 15, color: '#444', lineHeight: '1.85', marginBottom: 16}}>Football is a sport that has developed over the years and has experienced dynamism in its style of play, its rules, its tactics, and its rules of engagement; it is increasingly important that football players be equipped appropriately with the necessary skills that would aid scoring goals and ultimately winning.</p>
    <p style={{fontSize: 15, color: '#444', lineHeight: '1.85', marginBottom: 16}}>Many martial arts have evolved into combat sports over time, as evidenced by the Olympic combat sports of freestyle wrestling, Greco-Roman wrestling, boxing, fencing, judo, taekwondo, and karate. Competitors in all martial arts, particularly Taekwondo, must be able to anticipate their opponents' actions and methods, processing incoming information swiftly and participating in rapid planning and decision-making (Anshel and Payne, 2005).</p>
    <p style={{fontSize: 15, color: '#444', lineHeight: '1.85', marginBottom: 16}}>At the University of Ibadan, an observation was made regarding student athletes participating in football. These athletes tend to avoid instrumental aggression and engaging in forceful tackles on the field. This study aims to explore the effect of martial arts training on the performance of football skills among football players in University of Ibadan.</p>
    <div style={{position: 'relative', height: 160, marginTop: '-80px', background: 'linear-gradient(to bottom, transparent 0%, #FAFAF7 70%)', pointerEvents: 'none'}} />
  </div>
  <div style={{maxWidth: 780, margin: '0 auto', padding: '0 24px 80px'}}>
    <div style={{background: '#00102A', borderRadius: 16, padding: '44px 48px', textAlign: 'center', boxShadow: '0 8px 40px rgba(0,12,32,.25)'}}>
      <div style={{fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#C8A830', marginBottom: 14}}>Full Paper Available</div>
      <h3 style={{fontFamily: 'var(--font-display,serif)', fontSize: 24, fontWeight: 700, color: '#fff', lineHeight: '1.3', marginBottom: 12}}>Access the Complete Publication</h3>
      <p style={{fontSize: 14, color: '#6688AA', lineHeight: '1.7', marginBottom: 28, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto'}}>The full manuscript includes methodology, data analysis, findings, and discussion. Submit a request to receive it directly to your inbox.</p>
      <button style={{background: '#C8A830', color: '#00102A', fontFamily: 'var(--font-body,sans-serif)', fontWeight: 700, fontSize: 14, padding: '14px 36px', borderRadius: 8, border: 'none', cursor: 'pointer'}}>Request Full Manuscript →</button>
      <p style={{fontSize: 11, color: '#445566', marginTop: 14, marginBottom: 0}}>You will receive the manuscript within 24 hours of submitting your details.</p>
    </div>
  </div>
</div>

    ) : null}</>;
  }
  
  if (resolved.id === '02') {
    return <>{`<div>
  <div style={{position: 'sticky', top: 0, zIndex: 10, background: '#00102A', padding: '0 52px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,.08)'}}>
    <span style={{fontFamily: 'var(--font-display,serif)', color: '#fff', fontSize: 16, fontWeight: 700}}>Dr. Joshua A. Oparachukwu</span>
    <button style={{background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)', color: '#fff', padding: '7px 18px', borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body,sans-serif)'}}>← Back</button>
  </div>
  <div style={{background: '#00102A', padding: '56px 120px 64px', borderBottom: '3px solid #C8A830'}}>
    <div style={{fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#C8A830', marginBottom: 14}}>Research Publication · 2024</div>
    <h1 style={{fontFamily: 'var(--font-display,serif)', fontSize: 36, fontWeight: 700, color: '#fff', lineHeight: '1.2', maxWidth: 760, marginBottom: 18}}>Effect of Taekwondo Mental Toughness Skill Training on Assertive Behaviour among University of Ibadan Football Players</h1>
    <p style={{fontSize: 14, color: '#6688AA', marginBottom: 6}}>Oparachukwu Joshua Ayodeji</p>
    <p style={{fontSize: 13, color: '#445566'}}>Department of Human Kinetics and Health Education · University of Ibadan, Ibadan, Nigeria</p>
    <div style={{display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap'}}>
      <span style={{fontSize: 11, padding: '4px 14px', borderRadius: 20, background: 'rgba(255,255,255,.06)', color: '#C8A830', border: '1px solid rgba(200,168,48,.3)'}}>Taekwondo · Mental Toughness</span>
      <span style={{fontSize: 11, padding: '4px 14px', borderRadius: 20, background: 'rgba(255,255,255,.06)', color: '#aaa', border: '1px solid rgba(255,255,255,.1)'}}>Assertive Behaviour</span>
      <span style={{fontSize: 11, padding: '4px 14px', borderRadius: 20, background: 'rgba(255,255,255,.06)', color: '#aaa', border: '1px solid rgba(255,255,255,.1)'}}>Football</span>
      <span style={{fontSize: 11, padding: '4px 14px', borderRadius: 20, background: 'rgba(255,255,255,.06)', color: '#aaa', border: '1px solid rgba(255,255,255,.1)'}}>University of Ibadan</span>
    </div>
  </div>
  <div style={{maxWidth: 780, margin: '0 auto', padding: '56px 24px 0'}}>
    <h2 style={{fontFamily: 'var(--font-display,serif)', fontSize: 24, fontWeight: 700, color: '#1A1A16', marginBottom: 10}}>Abstract</h2>
    <div style={{width: 36, height: 2, background: '#C8A830', marginBottom: 20, borderRadius: 2}} />
    <div style={{background: '#F4F2EC', borderLeft: '4px solid #C8A830', borderRadius: '0 10px 10px 0', padding: '20px 24px', marginBottom: 40}}>
      <p style={{fontSize: 14, color: '#444', lineHeight: '1.85', marginBottom: 10}}>Football is a sport that has grown and developed over the years and so it has experienced dynamism in its style of play, rules, tactics and rules of engagement. Taekwondo is regarded as the most versatile martial art, originating in the Korean peninsula as a self-defense art form famous for its flexible kicking techniques. This study sought to understand the effect of Taekwondo mental toughness skill training on assertive behaviour among University of Ibadan Football Players. Twenty-four (24) players from the Faculty of Education were selected using non-probability purposive sampling. Instruments used: the Sport Aggression Questionnaire and the 18-item Sport Mental Toughness Questionnaire (SMTQ-18). Regression analysis shows a significant result: Taekwondo Martial Art skills training has a significant effect on assertive behaviour in game situations. ANOVA shows F(3, 246) = 26.86, P&lt;0.01. Findings indicate that Taekwondo mental toughness skill training significantly influences the Instrumental Aggression of University of Ibadan football players.</p>
      <p style={{fontSize: 12, color: '#888', margin: 0}}><strong>Key words:</strong> Taekwondo, Mental Toughness, Skill Training, Assertive Behaviour, University, Football Players</p>
    </div>
    <h2 style={{fontFamily: 'var(--font-display,serif)', fontSize: 24, fontWeight: 700, color: '#1A1A16', marginBottom: 10}}>Introduction</h2>
    <div style={{width: 36, height: 2, background: '#C8A830', marginBottom: 20, borderRadius: 2}} />
    <p style={{fontSize: 15, color: '#444', lineHeight: '1.85', marginBottom: 16}}>Football is a contact sport, by far the most far-reaching and colossal game in the world, with unprecedented and unrivalled social impact and presence in the lives of millions of people spread out across the world (FIFA, 2022). It is increasingly important that football players be equipped appropriately with the current and necessary skills that would aid scoring goals and ultimately winning the opponent.</p>
    <p style={{fontSize: 15, color: '#444', lineHeight: '1.85', marginBottom: 16}}>In the most recent Laws of the Game published in 2022 by FIFA, the use of instrumental aggression towards the scoring of goals is found in Law 12, where the law provides for the use of instrumentally aggressive tackles, permitted so long as the aggressive tackling action is aimed exclusively at the ball, for the specific and altruistic purposes of winning the ball from the opponent.</p>
    <p style={{fontSize: 15, color: '#444', lineHeight: '1.85', marginBottom: 16}}>At the Nigerian Collegiate level, it has been observed that athletes do not engage their opponents aggressively or assertively enough on the field of play. The majority of the university's football players consider themselves to be much more students than athletes, informing their decision not to extend themselves fully on the field. This has the cumulative effect of reducing the overall competitive nature of football at the Nigerian collegiate level.</p>
    <p style={{fontSize: 15, color: '#444', lineHeight: '1.85', marginBottom: 16}}>Taekwondo encompasses not only physical skill training but also equips and trains the mind with strong emphasis on psychological preparation, concentration, anticipation, emotional control, self-confidence, discipline, and patience. The researcher's hypothesis is that football athletes who shy away from assertiveness may be reconditioned and taught the basics of instrumental aggressiveness via participation in martial arts.</p>
    <div style={{position: 'relative', height: 160, marginTop: '-80px', background: 'linear-gradient(to bottom, transparent 0%, #FAFAF7 70%)', pointerEvents: 'none'}} />
  </div>
  <div style={{maxWidth: 780, margin: '0 auto', padding: '0 24px 80px'}}>
    <div style={{background: '#00102A', borderRadius: 16, padding: '44px 48px', textAlign: 'center', boxShadow: '0 8px 40px rgba(0,12,32,.25)'}}>
      <div style={{fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#C8A830', marginBottom: 14}}>Full Paper Available</div>
      <h3 style={{fontFamily: 'var(--font-display,serif)', fontSize: 24, fontWeight: 700, color: '#fff', lineHeight: '1.3', marginBottom: 12}}>Access the Complete Publication</h3>
      <p style={{fontSize: 14, color: '#6688AA', lineHeight: '1.7', marginBottom: 28, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto'}}>The full manuscript includes methodology, data analysis, findings, and discussion. Submit a request to receive it directly to your inbox.</p>
      <button style={{background: '#C8A830', color: '#00102A', fontFamily: 'var(--font-body,sans-serif)', fontWeight: 700, fontSize: 14, padding: '14px 36px', borderRadius: 8, border: 'none', cursor: 'pointer'}}>Request Full Manuscript →</button>
      <p style={{fontSize: 11, color: '#445566', marginTop: 14, marginBottom: 0}}>You will receive the manuscript within 24 hours of submitting your details.</p>
    </div>
  </div>
</div>
`.length > 0 ? (
      <div>
  <div style={{position: 'sticky', top: 0, zIndex: 10, background: '#00102A', padding: '0 52px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,.08)'}}>
    <span style={{fontFamily: 'var(--font-display,serif)', color: '#fff', fontSize: 16, fontWeight: 700}}>Dr. Joshua A. Oparachukwu</span>
    <button style={{background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)', color: '#fff', padding: '7px 18px', borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-body,sans-serif)'}}>← Back</button>
  </div>
  <div style={{background: '#00102A', padding: '56px 120px 64px', borderBottom: '3px solid #C8A830'}}>
    <div style={{fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#C8A830', marginBottom: 14}}>Research Publication · 2024</div>
    <h1 style={{fontFamily: 'var(--font-display,serif)', fontSize: 36, fontWeight: 700, color: '#fff', lineHeight: '1.2', maxWidth: 760, marginBottom: 18}}>Effect of Taekwondo Mental Toughness Skill Training on Assertive Behaviour among University of Ibadan Football Players</h1>
    <p style={{fontSize: 14, color: '#6688AA', marginBottom: 6}}>Oparachukwu Joshua Ayodeji</p>
    <p style={{fontSize: 13, color: '#445566'}}>Department of Human Kinetics and Health Education · University of Ibadan, Ibadan, Nigeria</p>
    <div style={{display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap'}}>
      <span style={{fontSize: 11, padding: '4px 14px', borderRadius: 20, background: 'rgba(255,255,255,.06)', color: '#C8A830', border: '1px solid rgba(200,168,48,.3)'}}>Taekwondo · Mental Toughness</span>
      <span style={{fontSize: 11, padding: '4px 14px', borderRadius: 20, background: 'rgba(255,255,255,.06)', color: '#aaa', border: '1px solid rgba(255,255,255,.1)'}}>Assertive Behaviour</span>
      <span style={{fontSize: 11, padding: '4px 14px', borderRadius: 20, background: 'rgba(255,255,255,.06)', color: '#aaa', border: '1px solid rgba(255,255,255,.1)'}}>Football</span>
      <span style={{fontSize: 11, padding: '4px 14px', borderRadius: 20, background: 'rgba(255,255,255,.06)', color: '#aaa', border: '1px solid rgba(255,255,255,.1)'}}>University of Ibadan</span>
    </div>
  </div>
  <div style={{maxWidth: 780, margin: '0 auto', padding: '56px 24px 0'}}>
    <h2 style={{fontFamily: 'var(--font-display,serif)', fontSize: 24, fontWeight: 700, color: '#1A1A16', marginBottom: 10}}>Abstract</h2>
    <div style={{width: 36, height: 2, background: '#C8A830', marginBottom: 20, borderRadius: 2}} />
    <div style={{background: '#F4F2EC', borderLeft: '4px solid #C8A830', borderRadius: '0 10px 10px 0', padding: '20px 24px', marginBottom: 40}}>
      <p style={{fontSize: 14, color: '#444', lineHeight: '1.85', marginBottom: 10}}>Football is a sport that has grown and developed over the years and so it has experienced dynamism in its style of play, rules, tactics and rules of engagement. Taekwondo is regarded as the most versatile martial art, originating in the Korean peninsula as a self-defense art form famous for its flexible kicking techniques. This study sought to understand the effect of Taekwondo mental toughness skill training on assertive behaviour among University of Ibadan Football Players. Twenty-four (24) players from the Faculty of Education were selected using non-probability purposive sampling. Instruments used: the Sport Aggression Questionnaire and the 18-item Sport Mental Toughness Questionnaire (SMTQ-18). Regression analysis shows a significant result: Taekwondo Martial Art skills training has a significant effect on assertive behaviour in game situations. ANOVA shows F(3, 246) = 26.86, P&lt;0.01. Findings indicate that Taekwondo mental toughness skill training significantly influences the Instrumental Aggression of University of Ibadan football players.</p>
      <p style={{fontSize: 12, color: '#888', margin: 0}}><strong>Key words:</strong> Taekwondo, Mental Toughness, Skill Training, Assertive Behaviour, University, Football Players</p>
    </div>
    <h2 style={{fontFamily: 'var(--font-display,serif)', fontSize: 24, fontWeight: 700, color: '#1A1A16', marginBottom: 10}}>Introduction</h2>
    <div style={{width: 36, height: 2, background: '#C8A830', marginBottom: 20, borderRadius: 2}} />
    <p style={{fontSize: 15, color: '#444', lineHeight: '1.85', marginBottom: 16}}>Football is a contact sport, by far the most far-reaching and colossal game in the world, with unprecedented and unrivalled social impact and presence in the lives of millions of people spread out across the world (FIFA, 2022). It is increasingly important that football players be equipped appropriately with the current and necessary skills that would aid scoring goals and ultimately winning the opponent.</p>
    <p style={{fontSize: 15, color: '#444', lineHeight: '1.85', marginBottom: 16}}>In the most recent Laws of the Game published in 2022 by FIFA, the use of instrumental aggression towards the scoring of goals is found in Law 12, where the law provides for the use of instrumentally aggressive tackles, permitted so long as the aggressive tackling action is aimed exclusively at the ball, for the specific and altruistic purposes of winning the ball from the opponent.</p>
    <p style={{fontSize: 15, color: '#444', lineHeight: '1.85', marginBottom: 16}}>At the Nigerian Collegiate level, it has been observed that athletes do not engage their opponents aggressively or assertively enough on the field of play. The majority of the university's football players consider themselves to be much more students than athletes, informing their decision not to extend themselves fully on the field. This has the cumulative effect of reducing the overall competitive nature of football at the Nigerian collegiate level.</p>
    <p style={{fontSize: 15, color: '#444', lineHeight: '1.85', marginBottom: 16}}>Taekwondo encompasses not only physical skill training but also equips and trains the mind with strong emphasis on psychological preparation, concentration, anticipation, emotional control, self-confidence, discipline, and patience. The researcher's hypothesis is that football athletes who shy away from assertiveness may be reconditioned and taught the basics of instrumental aggressiveness via participation in martial arts.</p>
    <div style={{position: 'relative', height: 160, marginTop: '-80px', background: 'linear-gradient(to bottom, transparent 0%, #FAFAF7 70%)', pointerEvents: 'none'}} />
  </div>
  <div style={{maxWidth: 780, margin: '0 auto', padding: '0 24px 80px'}}>
    <div style={{background: '#00102A', borderRadius: 16, padding: '44px 48px', textAlign: 'center', boxShadow: '0 8px 40px rgba(0,12,32,.25)'}}>
      <div style={{fontSize: 11, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#C8A830', marginBottom: 14}}>Full Paper Available</div>
      <h3 style={{fontFamily: 'var(--font-display,serif)', fontSize: 24, fontWeight: 700, color: '#fff', lineHeight: '1.3', marginBottom: 12}}>Access the Complete Publication</h3>
      <p style={{fontSize: 14, color: '#6688AA', lineHeight: '1.7', marginBottom: 28, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto'}}>The full manuscript includes methodology, data analysis, findings, and discussion. Submit a request to receive it directly to your inbox.</p>
      <button style={{background: '#C8A830', color: '#00102A', fontFamily: 'var(--font-body,sans-serif)', fontWeight: 700, fontSize: 14, padding: '14px 36px', borderRadius: 8, border: 'none', cursor: 'pointer'}}>Request Full Manuscript →</button>
      <p style={{fontSize: 11, color: '#445566', marginTop: 14, marginBottom: 0}}>You will receive the manuscript within 24 hours of submitting your details.</p>
    </div>
  </div>
</div>

    ) : null}</>;
  }

  notFound();
}
  