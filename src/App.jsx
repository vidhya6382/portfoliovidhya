import Hero from "./components/Hero.jsx";
import Websites from "./components/Websites.jsx";
import { Skills, About, Contact } from "./components/Sections.jsx";
import { PROFILE, SITES, PROJECTS, SKILLS, TIMELINE } from "./data.js";

export default function App() {
  return (
    <>
      <Hero profile={PROFILE} />
      <main>
        <Websites sites={SITES} projects={PROJECTS} />
        <Skills skills={SKILLS} />
        <About timeline={TIMELINE} />
        <Contact profile={PROFILE} />
      </main>
      <footer>
        <div className="inner">© 2026 {PROFILE.name} · Surandai, Tenkasi, Tamil Nadu</div>
      </footer>
    </>
  );
}
