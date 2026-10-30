import CopyButton from "./CopyButton.jsx";

export function Skills({ skills }) {
  return (
    <section id="skills" aria-labelledby="skills-h">
      <div className="inner">
        <div className="sec-head">
          <span className="label">Toolbox</span>
          <h2 id="skills-h">Web development skills</h2>
        </div>
        <div className="skills">
          {skills.map((s) => (
            <div className="skill" key={s.label}>
              <span className="label">{s.label}</span>
              <h3>{s.title}</h3>
              <ul>
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About({ timeline }) {
  return (
    <section id="about" aria-labelledby="about-h">
      <div className="inner">
        <div className="sec-head">
          <span className="label">About me</span>
          <h2 id="about-h">Education and experience</h2>
          <p>
            I studied electronics and communication, then moved into web development. I build websites with HTML, CSS and
            JavaScript, and use React, Django and MySQL for full stack work.
          </p>
        </div>
        <div className="timeline">
          {timeline.map((t) => (
            <div className="step" key={t.title}>
              <span className="label">{t.when}</span>
              <div>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact({ profile }) {
  return (
    <section id="contact" aria-labelledby="contact-h">
      <div className="inner">
        <div className="sec-head">
          <span className="label">Get in touch</span>
          <h2 id="contact-h">Let us work together</h2>
          <p>I am looking for a website developer role. I can share the source code of every site above.</p>
        </div>
        <div className="contact">
          <div className="card">
            <span className="label">Email</span>
            <span className="val">{profile.email}</span>
            <CopyButton text={profile.email} label="Copy email" />
          </div>
          <div className="card">
            <span className="label">Phone</span>
            <span className="val">{profile.phone}</span>
            <CopyButton text={profile.phone} label="Copy number" />
          </div>
        </div>
      </div>
    </section>
  );
}
