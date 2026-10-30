// Small pictures drawn with CSS, used inside the full stack project cards.
function Mock({ type }) {
  if (type === "quiz") {
    return (
      <>
        <div className="blk q">Explain the difference between a list and a tuple.</div>
        <div className="blk opt">Lists are mutable, tuples are not</div>
        <div className="blk opt on">Tuples are mutable, lists are not</div>
        <div className="blk opt">They behave the same</div>
        <div className="prog">
          <b />
        </div>
      </>
    );
  }
  if (type === "pets") {
    const names = ["Bruno", "Misty", "Coco", "Rocky", "Luna", "Milo"];
    return (
      <>
        <div className="blk row">
          <span>Find a friend</span>
          <span>Dogs · Cats · Birds</span>
        </div>
        <div className="pets">
          {names.map((n) => (
            <div className="pet" key={n}>
              <i />
              {n}
            </div>
          ))}
        </div>
      </>
    );
  }
  if (type === "cart") {
    return (
      <>
        <div className="blk row">
          <span>Wireless Mouse</span>
          <span>1 × 599</span>
        </div>
        <div className="blk row">
          <span>USB Cable</span>
          <span>2 × 199</span>
        </div>
        <div className="blk row">
          <span>Notebook</span>
          <span>3 × 85</span>
        </div>
        <div className="blk row total">
          <span>Total</span>
          <span>1,252</span>
        </div>
      </>
    );
  }
  return null;
}

function BrowserBar({ address }) {
  return (
    <div className="bar">
      <i />
      <i />
      <i />
      <span>{address}</span>
    </div>
  );
}

function Links({ live, code }) {
  if (!live && !code) return null;
  return (
    <div className="links">
      {live && (
        <a className="btn" href={live} target="_blank" rel="noopener noreferrer">
          Live site
        </a>
      )}
      {code && (
        <a className="btn ghost" href={code} target="_blank" rel="noopener noreferrer">
          Source code
        </a>
      )}
    </div>
  );
}

function SiteCard({ site }) {
  return (
    <article className="site" style={{ "--t": site.tint }}>
      <div className="shot" aria-hidden="true">
        <BrowserBar address={site.host} />
        <div className="screen">
          <div className="hero-blk">{site.tagline}</div>
          <div className="mini">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
      <div className="body">
        <span className="label">{site.kind}</span>
        <h3>{site.name}</h3>
        <p>{site.text}</p>
        <Links live={site.live} code={site.code} />
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project">
      <div className="shot" aria-hidden="true">
        <BrowserBar address={project.url} />
        <div className="screen">
          <Mock type={project.mock} />
        </div>
      </div>
      <div>
        <span className="label">{project.kind}</span>
        <h3>{project.name}</h3>
        <p>{project.text}</p>
        <ul className="tags">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <Links live={project.live} code={project.code} />
      </div>
    </article>
  );
}

export default function Websites({ sites, projects }) {
  return (
    <section id="projects" aria-labelledby="projects-h">
      <div className="inner">
        <div className="sec-head">
          <span className="label">Portfolio</span>
          <h2 id="projects-h">Websites I built myself</h2>
          <p>
            Small business websites for a cafe, a cleaning service, a bridal studio, a shoe store, a pharmacy, a gym and a
            travel company. Open any site live, or read its source code on GitHub.
          </p>
          <p className="count">
            <span className="total-line">
              <b>{sites.length + projects.length}</b>total projects
            </span>
            <span>{sites.length} live websites</span>
            <span>{projects.length} full stack</span>
          </p>
        </div>

        <div className="sites">
          {sites.map((s) => (
            <SiteCard site={s} key={s.name} />
          ))}
        </div>

        <div className="sec-head sites-head">
          <span className="label">Full stack</span>
          <h2>Full stack projects</h2>
        </div>

        <div className="projects">
          {projects.map((p) => (
            <ProjectCard project={p} key={p.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
