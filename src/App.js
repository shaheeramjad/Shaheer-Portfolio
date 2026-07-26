import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom";
import { FaArrowRight, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowLeft, FiArrowUpRight, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { project9, projectSeven, projectOne } from "./assets";
import { articles } from "./content/articles";

const links = [
  ["Work", "work"],
  ["Experience", "experience"],
  ["Open source", "open-source"],
  ["Stack", "stack"],
  ["Writing", "writing"],
];

const projects = [
  {
    name: "MV Shops",
    type: "Multi-vendor commerce platform",
    image: project9,
    summary:
      "A scalable marketplace with seller operations, role-based dashboards, checkout, and real-time messaging between buyers and sellers.",
    challenge: "Coordinate buyers, sellers, orders, and admin controls without creating fragmented workflows.",
    contribution: "Built core full-stack flows, real-time messaging, role boundaries, and cloud deployment.",
    stack: ["React", "Node.js", "MongoDB", "Socket.io"],
    impact: "Built with a 2-person team",
    href: "https://mv-frontend-sandy.vercel.app/",
  },
  {
    name: "Hisaber Accounts",
    type: "Enterprise finance system",
    image: projectSeven,
    summary:
      "A centralized accounting platform for multiple companies, replacing fragmented spreadsheets with secure, role-based workflows.",
    challenge: "Replace slow, error-prone finance processes spread across branches, teams, and spreadsheets.",
    contribution: "Shipped finance modules, optimized data access, and built reporting for large operational datasets.",
    stack: ["React", ".NET 8", "SQL Server", "GitHub Actions"],
    impact: "30% gain in operational efficiency",
    href: "https://hisaaber.com/",
  },
  {
    name: "Hisaber Pharmacy",
    type: "Pharmacy operations platform",
    image: projectOne,
    summary:
      "An end-to-end system for inventory, sales, purchasing, reporting, and day-to-day pharmacy operations.",
    challenge: "Give pharmacy teams one dependable view of inventory, purchasing, sales, and reporting.",
    contribution: "Implemented business-critical interfaces and APIs across daily operational workflows.",
    stack: ["React", "ASP.NET Core", "SQL Server", "REST APIs"],
    impact: "Production business workflows",
    href: "https://pharmacy.hisaber.com/",
  },
];

const stack = {
  "MERN frontend": [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Redux Toolkit",
    "Tailwind CSS",
  ],
  "MERN backend & data": [
    "Node.js",
    "Express",
    "MongoDB",
    "REST APIs",
    "Socket.io",
    "Redis",
  ],
  "Additional engineering": [
    "ASP.NET Core",
    "SQL Server",
    "Python",
    "Docker",
    "AWS",
    "CI/CD",
  ],
};

const openSource = [
  {
    project: "Apache Beam",
    role: "Python SDK contributor",
    summary:
      "Contributing developer ergonomics, clearer error tracing, streaming APIs, and process reliability to a large scale data processing system.",
    contributions: [
      "Merged a take(n) convenience method for PCollection.",
      "Merged Python exception chaining across the codebase for better diagnostics.",
      "Opened work on UnboundedSource, process error handling, and a configurable Watch PTransform.",
    ],
    href: "https://github.com/apache/beam",
  },
  {
    project: "MetaCall",
    role: "Infrastructure portability",
    summary:
      "Expanding OS portability and automated build coverage across Unix, Windows-compatible, and mobile environments.",
    contributions: [
      "Added FreeBSD detection and package installation for major language loaders in PR #650.",
      "Extended path portability support to FreeBSD, NetBSD, and DragonFly BSD.",
      "Designed CI and build support spanning Linux, macOS, FreeBSD, MinGW, Cygwin, and Android.",
    ],
    href: "https://github.com/metacall/core",
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved) return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {}
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      theme === "dark" ? "#101713" : "#f5f4ef"
    );
  }, [theme]);

  const toggleTheme = () => setTheme((current) => current === "dark" ? "light" : "dark");

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Link className="wordmark" to="/" aria-label="Shaheer Amjad, home">
        SA<span>.</span>
      </Link>
      <nav className={open ? "nav open" : "nav"}>
        {links.map(([name, id]) => (
          <a key={id} href={`/#${id}`} onClick={() => setOpen(false)}>
            {name}
          </a>
        ))}
        <a className="nav-cta" href="/Shaheer-Amjad-Resume.pdf" download>
          Resume <FiArrowUpRight />
        </a>
      </nav>
      <button
        className="theme-toggle"
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? <FiSun /> : <FiMoon />}
      </button>
      <button
        className="menu-button"
        aria-label="Toggle navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX /> : <FiMenu />}
      </button>
    </header>
  );
}

function SectionTitle({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <span>© {new Date().getFullYear()} Shaheer Amjad</span>
      <span>Software engineer · Lahore, PK · Remote worldwide</span>
    </footer>
  );
}

function ArticleCard({ article, index }) {
  const articleLink = article.externalUrl ? (
    <a href={article.externalUrl} target="_blank" rel="noreferrer">
      Read article <FiArrowUpRight />
    </a>
  ) : (
    <Link to={`/articles/${article.slug}`}>Read article <FiArrowUpRight /></Link>
  );

  return (
    <article className="note">
      <div><span>0{index + 1}</span><span>{article.category}</span></div>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <div className="note-footer">
        <span>{article.readingTime}</span>
        {articleLink}
      </div>
    </article>
  );
}

function Home() {
  return (
    <div id="top">
      <Header />
      <main id="main-content">
        <section className="hero">
          <div className="hero-main">
            <p className="availability">
              <span /> Open to remote startup roles
            </p>
            <h1>
              I turn operational complexity into software{" "}
              <em>teams can trust.</em>
            </h1>
            <p className="hero-copy">
              I’m Shaheer Amjad, a product-minded software engineer. I build
              reliable systems that remove operational friction, help teams
              move faster, and create measurable value for the people using
              them while taking ownership from problem to production.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                See selected work <FaArrowRight />
              </a>
              <a className="button secondary" href="mailto:stansari4500@gmail.com">
                Email me
              </a>
              <a className="text-link" href="/Shaheer-Amjad-Resume.pdf" download>
                Download resume <FiArrowUpRight />
              </a>
            </div>
          </div>
          <aside className="hero-profile">
            <div className="portrait-frame">
              <span className="portrait-label">Software engineer</span>
              <img src="/profile-cutout.png" alt="Shaheer Amjad" />
            </div>
            <div className="profile-meta">
              <div>
                <p>Based in</p>
                <strong>Lahore, Pakistan</strong>
              </div>
              <div>
                <p>Best fit</p>
                <strong>Product-minded startup teams</strong>
              </div>
              <div className="socials">
                <a href="https://github.com/shaheeramjad" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/shaheer-amjad-software-engineer/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="https://leetcode.com/u/dev_shaheer/" target="_blank" rel="noreferrer" aria-label="LeetCode"><SiLeetcode /></a>
              </div>
            </div>
          </aside>
        </section>

        <section className="metrics" aria-label="Highlights">
          <div><strong>40%</strong><span>faster API responses</span></div>
          <div><strong>10k+</strong><span>records in generated reports</span></div>
          <div><strong>15+</strong><span>high-priority bugs resolved</span></div>
          <div><strong>#64</strong><span>ICPC Pakistan prelims</span></div>
        </section>

        <section id="work" className="section">
          <SectionTitle
            eyebrow="01 / Selected work"
            title="Business problems, shipped."
            copy="A few systems where I worked across product, interface, API, data, and delivery."
          />
          <div className="project-list">
            {projects.map((project, i) => (
              <article className="project" key={project.name}>
                <a className="project-image" href={project.href} target="_blank" rel="noreferrer">
                  <img src={project.image} alt={`${project.name} interface`} />
                  <span>0{i + 1}</span>
                </a>
                <div className="project-body">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <dl className="project-details">
                    <div>
                      <dt>Challenge</dt>
                      <dd>{project.challenge}</dd>
                    </div>
                    <div>
                      <dt>My contribution</dt>
                      <dd>{project.contribution}</dd>
                    </div>
                  </dl>
                  <ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                  <div className="project-footer">
                    <span>{project.impact}</span>
                    <a href={project.href} target="_blank" rel="noreferrer">
                      View product <FiArrowUpRight />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="principles" aria-label="How I work">
          <p className="eyebrow">How I work</p>
          <div>
            <article>
              <span>01</span>
              <h3>Start with the problem</h3>
              <p>I clarify the user need, constraints, and success measure before committing to a solution.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Own the outcome</h3>
              <p>I carry work through architecture, implementation, review, release, and learning from production.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Make thinking visible</h3>
              <p>I communicate tradeoffs early, document decisions, and keep distributed teams moving without ambiguity.</p>
            </article>
          </div>
        </section>

        <section id="experience" className="section two-column">
          <SectionTitle
            eyebrow="02 / Experience"
            title="Ownership over hand-offs."
            copy="I’m most useful on small teams where engineers understand the problem, question assumptions, and carry work through production."
          />
          <div className="timeline">
            <article>
              <div><strong>AI Reasoning Engineer</strong><span>Oct 2025 to Jan 2026</span></div>
              <p className="company">Turing · Remote</p>
              <p>Trained and evaluated AI reasoning models through algorithmic challenges and optimized C++ solutions. Diagnosed reasoning gaps, improved evaluation data, and tested model pipelines in reproducible Docker environments with AI research teams.</p>
            </article>
            <article>
              <div><strong>Associate Software Engineer</strong><span>Sep 2024 to Oct 2025</span></div>
              <p className="company">Maima Soft · Lahore, Pakistan</p>
              <p>Led full-stack delivery of enterprise applications using React, .NET Core, and SQL Server. Improved client operational efficiency by 30%, reduced API response time by 40%, and cut PDF generation for 10,000+ records from 10 minutes to 30 seconds.</p>
            </article>
            <article>
              <div><strong>Technical Mentor</strong><span>2024 to Present</span></div>
              <p className="company">Dev Weekends · Community</p>
              <p>Helping early-career developers strengthen problem-solving habits and practical software development skills.</p>
            </article>
          </div>
        </section>

        <section id="open-source" className="section open-source-section">
          <SectionTitle
            eyebrow="03 / Open source"
            title="Contributing beyond my own codebase."
            copy="Work across data infrastructure and language interoperability, focused on APIs, debugging, portability, and dependable developer tooling."
          />
          <div className="oss-grid">
            {openSource.map((item) => (
              <article className="oss-card" key={item.project}>
                <div className="oss-title">
                  <div>
                    <p>{item.role}</p>
                    <h3>{item.project}</h3>
                  </div>
                  <a href={item.href} target="_blank" rel="noreferrer" aria-label={`View ${item.project} on GitHub`}>
                    <FaGithub />
                  </a>
                </div>
                <p>{item.summary}</p>
                <ul>
                  {item.contributions.map((contribution) => (
                    <li key={contribution}>{contribution}</li>
                  ))}
                </ul>
                <a className="oss-link" href={item.href} target="_blank" rel="noreferrer">
                  View project <FiArrowUpRight />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="section stack-section">
          <SectionTitle
            eyebrow="04 / Toolkit"
            title="Modern tools, pragmatic choices."
            copy="Technology is a means to a dependable product. These are the tools I use most often."
          />
          <div className="stack-grid">
            {Object.entries(stack).map(([group, items]) => (
              <div className="stack-group" key={group}>
                <h3>{group}</h3>
                {items.map((item) => <span key={item}>{item}</span>)}
              </div>
            ))}
          </div>
        </section>

        <section id="writing" className="section">
          <SectionTitle
            eyebrow="05 / Writing"
            title="Latest articles."
            copy="The three newest practical notes about production systems, architecture, performance, and lessons learned while shipping."
          />
          <div className="notes-grid">
            {articles.slice(0, 3).map((article, i) => <ArticleCard article={article} index={i} key={article.slug} />)}
          </div>
          <Link className="all-articles-link" to="/articles">Browse all articles <FaArrowRight /></Link>
        </section>

        <section id="contact" className="contact">
          <p className="eyebrow">Have a role or product in mind?</p>
          <h2>Let’s build something people rely on.</h2>
          <p>I’m open to remote software engineering roles with ambitious, thoughtful startup teams.</p>
          <a className="button light" href="mailto:stansari4500@gmail.com">
            Start a conversation <FiArrowUpRight />
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ArticlesPage() {
  return (
    <div>
      <Header />
      <main id="main-content" className="articles-page">
        <Link className="back-link" to="/"><FiArrowLeft /> Back to portfolio</Link>
        <SectionTitle
          eyebrow="Writing"
          title="Engineering notes."
          copy="Practical lessons from building production software, improving performance, and contributing to open source."
        />
        <div className="article-index">
          {articles.map((article, i) => <ArticleCard article={article} index={i} key={article.slug} />)}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug && !item.externalUrl);

  if (!article) {
    return (
      <div>
        <Header />
        <main id="main-content" className="not-found">
          <p className="eyebrow">404</p>
          <h1>Article not found.</h1>
          <Link className="button primary" to="/articles">View all articles</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main id="main-content" className="article-page">
        <Link className="back-link" to="/articles"><FiArrowLeft /> All articles</Link>
        <header className="article-header">
          <p className="eyebrow">{article.category}</p>
          <h1>{article.title}</h1>
          <p className="article-deck">{article.description}</p>
          <div className="article-meta">
            <span>By Shaheer Amjad</span>
            <span>{article.published}</span>
            <span>{article.readingTime}</span>
          </div>
        </header>
        <article className="article-content">
          <p className="article-intro">{article.intro}</p>
          {article.sections.map((section) => (
            <section key={section.heading || section.callout}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && (
                <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              )}
              {section.subsections?.map((subsection) => (
                <div className="article-subsection" key={subsection.heading}>
                  <h3>{subsection.heading}</h3>
                  {subsection.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {subsection.bullets && (
                    <ul>{subsection.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
                  )}
                  {subsection.advantages && (
                    <>
                      <h4>Advantages</h4>
                      <ul>{subsection.advantages.map((item) => <li key={item}>{item}</li>)}</ul>
                    </>
                  )}
                  {subsection.disadvantages && (
                    <>
                      <h4>Disadvantages</h4>
                      <ul>{subsection.disadvantages.map((item) => <li key={item}>{item}</li>)}</ul>
                    </>
                  )}
                </div>
              ))}
              {section.callout && <blockquote>{section.callout}</blockquote>}
              {section.after && <p>{section.after}</p>}
            </section>
          ))}
          <div className="article-end">
            <p>Thanks for reading.</p>
            <div>
              {article.originalUrl && (
                <a href={article.originalUrl} target="_blank" rel="noreferrer">
                  Originally on LinkedIn <FiArrowUpRight />
                </a>
              )}
              <a href="mailto:stansari4500@gmail.com">Discuss this article <FiArrowUpRight /></a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
