
import Link from 'next/link';

export default function About() {
  return (
    <>
      <div>
  <div className="about-page-nav">
    <Link href="/" className="about-page-back" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#fff", fontWeight: 600, fontSize: "14px" }}><svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15,18 9,12 15,6" /></svg>Back</Link>
  </div>
  <div className="about-page-body">
    <div className="about-page-inner">
      <div className="about-page-header">
        <div className="about-page-photo">
          <img src="https://res.cloudinary.com/dkxyhtuun/image/upload/v1778194219/Dr._Oparachukwu_irnxil.png" alt="Dr. Joshua A. Oparachukwu" />
        </div>
        <div>
          <h1 className="about-page-name">Dr. Joshua A. Oparachukwu</h1>
          <p className="about-page-role">Performance Psychologist · Performance Strategist · Sport Administration Expert</p>
          <p className="about-page-creds">BSc Human Kinetics &nbsp;·&nbsp; MSc Sociology &amp; Psychology of Sport &nbsp;·&nbsp; PhD Performance Psychology<br />University of Ibadan, Nigeria</p>
          <div className="about-tags" style={{marginTop: 16}}>
            <span className="about-tag">MindGame Africa</span>
            <span className="about-tag">SportLead Africa</span>
          </div>
        </div>
      </div>
      <div className="about-page-text">
        <p>Dr. Joshua A. Oparachukwu is a Performance Psychologist, Performance Strategist, and Sport Administration expert committed to helping athletes, teams, leaders, and everyday high performers unlock sustainable excellence under pressure. He is the Founder of MindGame Africa, a sport and performance consulting practice focused on mental performance, psychological skills training, and applied performance solutions, and the Founder of SportLead Africa, a consulting platform dedicated to sport administration, governance, and policy development.</p>
        <p>Working at the intersection of human performance and performance systems, Dr. Oparachukwu brings a rare dual lens to his work. He not only helps individuals strengthen the mental skills required to perform consistently, but also understands the organizational structures, leadership environments, and governance systems that shape performance outcomes. This integrated perspective allows him to support both people and the systems they operate within.</p>
        <p>Over the years, he has worked with athletes across multiple levels of development, from grassroots footballers and university athletes to professionals, coaches, and performers in high-pressure environments. His work has centered on helping individuals understand how the mind functions in moments of challenge, how confidence is built and protected, how mistakes can be managed productively, and how peak performance can be developed as a repeatable process rather than a matter of chance.</p>
        <p>Dr. Oparachukwu earned a Bachelor's degree in Human Kinetics, a Master's degree in the Sociology and Psychology of Sport, and a PhD in Performance Psychology from the University of Ibadan, Nigeria. His scholarly and applied work has focused on themes such as cognitive reframing, verbal affirmation, mental toughness, athlete mistake response, and high-performance system design. He has contributed chapters to scholarly books and published research in areas spanning psychological skills interventions, athlete development, and sport performance.</p>
        <p>Beyond consulting and research, Dr. Oparachukwu has built a growing digital presence as an educator and thought leader. Through his YouTube platform and educational content, he teaches practical lessons on confidence, focus, self-talk, pressure management, performance slumps, leadership, and human potential. He is also the creator of <strong>#AskDrJoshuaOparachukwu</strong>, a question-and-response platform through which athletes and performers from around the world can seek guidance on performance-related challenges.</p>
        <p className="about-page-closing">At the heart of his work is a simple conviction: <em>excellence is trainable.</em> Whether working with an athlete preparing for competition, a coach building a performance culture, or an individual seeking greater consistency in life and work, Dr. Oparachukwu is devoted to helping people perform closer to their potential, more often, and with greater purpose.</p>
      </div>
      <div className="about-page-cta">
        <p>Ready to work together?</p>
        <button className="btn-navy-solid">Book a Consultation Call</button>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
  