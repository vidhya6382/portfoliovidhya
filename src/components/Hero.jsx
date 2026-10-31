import { useState } from "react";


const GithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

function Header() {
  return (
    <header className="top">
      <div className="inner wide">
        <div className="logo">
          <a className="mark" href="#top" aria-label="Vidhya G, back to top">
            V
          </a>
         
        </div>
        <nav className="nav" aria-label="Sections">
          <a href="#about">About me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Websites</a>
          <a className="pill" href="#contact">
            Contact me
          </a>
        </nav>
      </div>
    </header>
  );
}

// Shows your photo, or a placeholder until you add one.
function Photo({ photo, name }) {
  if (photo) {
    return <img src={import.meta.env.BASE_URL + photo} alt={name} />;
  }
  return (
    <svg viewBox="0 0 400 460" role="img" aria-label="Photo placeholder">
      <path d="M20 460 C20 350 90 300 200 300 C310 300 380 350 380 460 Z" fill="#1E2A33" />
      <circle cx="200" cy="190" r="86" fill="#2A3944" />
      <text x="200" y="430" textAnchor="middle">
        ADD YOUR PHOTO
      </text>
    </svg>
  );
}

export default function Hero({ profile }) {
  const [note, setNote] = useState("");

  async function copyEmail() {
    let ok = false;
    try {
      await navigator.clipboard.writeText(profile.email);
      ok = true;
    } catch {
      ok = false;
    }
    setNote(ok ? `Email copied: ${profile.email}` : `Email: ${profile.email}`);
    setTimeout(() => setNote(""), 2600);
  }

  return (
    <div className="hero" id="top">
      <Header />

      <div className="hero-main">
        <div className="inner wide" style={{ width: "100%" }}>
          <div className="hero-copy">
            <p className="hi">Hi, I am</p>
            <h1>{profile.name}</h1>
            <p className="role">{profile.role}</p>
            <p className="where">{profile.where}</p>

            <div className="social">
              <button className="sbtn" type="button" onClick={copyEmail} aria-label="Copy my email address">
                @
              </button>
              {profile.github && (
                <a className="sbtn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                  <GithubIcon />
                </a>
              )}
              {profile.linkedin && (
                <a
                  className="sbtn"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  style={{ fontSize: 24 }}
                >
                  in
                </a>
              )}
            </div>
            <p className="copied" aria-live="polite">
              {note}
            </p>
          </div>
        </div>
      </div>

      <div className="panel">
        <div className="photo">
          <Photo photo={profile.photo} name={profile.name} />
        </div>
      </div>
    </div>
  );
}
