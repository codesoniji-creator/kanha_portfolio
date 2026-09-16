import React from "react";
import ReactDOM from "react-dom/client";
import { Github, Linkedin, Mail, ArrowUpRight, Download, Menu, X } from "lucide-react";
import "./index.css";

const skills = {
  "Languages": ["C++", "C", "Python", "JavaScript"],
  "Core": ["DSA", "Machine Learning", "SQL"],
  "Development": ["HTML", "CSS", "Django", "Git / GitHub"]
};

const projects = [
  {
    number: "01",
    title: "Alzheimer's Disease Detection",
    description:
      "A machine-learning classification project using patient-related data to predict whether the data indicates the presence of Alzheimer's disease.",
    tags: ["Python", "ML", "Logistic Regression", "SVM"],
    type: "Machine Learning",
    featured: true
  },
  {
    number: "02",
    title: "JavaScript Practice Collection",
    description:
      "A collection of small frontend projects built while learning DOM manipulation, events, styling and practical JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "Frontend",
    featured: false
  },
  {
    number: "03",
    title: "To-Do List",
    description:
      "A simple task-management project focused on JavaScript logic, user interaction and dynamic page updates.",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "Frontend",
    featured: false
  },
  {
    number: "04",
    title: "Testimonial Slider",
    description:
      "A lightweight responsive slider created to practice JavaScript events, DOM updates and reusable UI interactions.",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "Frontend",
    featured: false
  },
  {
    number: "05",
    title: "Calculator",
    description:
      "A basic calculator built from scratch to practice JavaScript functions, event handling and responsive interface design.",
    tags: ["HTML", "CSS", "JavaScript"],
    type: "Frontend",
    featured: false
  }
];

function Navbar() {
  const [open, setOpen] = React.useState(false);

  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <a href="#home" className="brand" onClick={close}>KS<span>.</span></a>

      <nav className={open ? "nav-links open" : "nav-links"}>
        {["about", "skills", "projects", "journey", "contact"].map((item) => (
          <a href={`#${item}`} key={item} onClick={close}>{item}</a>
        ))}
      </nav>

      <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={16} /></a>

      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-copy">
        <p className="eyebrow">M.Tech IT Student · Developer · ML Enthusiast</p>
        <h1>Hi, I’m <span>Kanha.</span><br />I like to build & learn.</h1>
        <p className="hero-text">
          I like solving problems, building things, and exploring what's next in tech
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">See my work <ArrowUpRight size={17} /></a>
          <a className="button secondary" href="#contact">Get in touch</a>
        </div>
      </div>

      <div className="hero-note">
        <div className="note-line"></div>
        <p>Currently exploring</p>
        <strong>Machine Learning<br />+ Web Development</strong>
        <span>Based in Indore, India</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section two-col">
      <div className="section-label"><span>01</span> About</div>
      <div className="about-content">
        <h2>Curious about how things work.</h2>
        <p>
          I’m Kanha Soni, currently pursuing M.Tech (IT) Integrated at IIPS, DAVV.
          I started my journey with C++ and DSA, which helped me develop a strong
          interest in problem-solving and mathematics.
        </p>
        <p>
          Over time, I became interested in Machine Learning, web development and
          emerging technologies. I enjoy participating in hackathons and building
          small projects while exploring new ideas.
        </p>
        <p>
          Outside academics, I like reading, photography, travelling, art and craft,
          volunteering and teaching. My goal is to become a software engineer and
          keep learning by working on things that challenge me.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-label"><span>02</span> Skills</div>
      <div className="skills-content">
        <h2>Tools I work with.</h2>
        <div className="skill-grid">
          {Object.entries(skills).map(([group, items]) => (
            <div className="skill-group" key={group}>
              <p>{group}</p>
              <div className="skill-list">
                {items.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-label"><span>03</span> Projects</div>
      <div className="projects-content">
        <div className="section-heading">
          <div>
            <h2>Things I’ve built.</h2>
            <p>Some serious projects, some practice — all part of the learning process.</p>
          </div>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className={project.featured ? "project-card featured" : "project-card"} key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <ArrowUpRight className="project-arrow" size={24} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const timeline = [
    ["2026", "SIH Internal Round", "Participated in Smart India Hackathon and was selected in the internal round."],
    ["2026", "IIT KGP AI/ML Bootcamp", "Completed an AI and Machine Learning bootcamp at IIT Kharagpur."],
    ["2026", "Hackathons", "Participated in hackathons at Prestige College and Bhawarkua, Indore."],
    ["Now", "M.Tech IT — IIPS, DAVV", "3rd semester · CGPA 8.63"]
  ];

  return (
    <section id="journey" className="section">
      <div className="section-label"><span>04</span> Journey</div>
      <div className="journey-content">
        <h2>Still in the making.</h2>
        <div className="timeline">
          {timeline.map(([year, title, text]) => (
            <div className="timeline-item" key={title}>
              <div className="timeline-year">{year}</div>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="education-strip">
          <div><span>10th</span><strong>68%</strong></div>
          <div><span>12th</span><strong>84%</strong></div>
          <div><span>College</span><strong>8.63 CGPA</strong></div>
          <div><span>Graduation</span><strong>2030</strong></div>
        </div>
      </div>
    </section>
  );
}

function Interests() {
  const interests = ["Reading", "Photography", "Travelling", "Art & Craft", "Volunteering", "Teaching / Mentoring", "Spiritual activities"];
  return (
    <section className="section interests-section">
      <div className="section-label"><span>05</span> Beyond code</div>
      <div className="interests-content">
        <h2>There’s more to me<br />than a GitHub profile.</h2>
        <div className="interest-list">
          {interests.map((item, index) => (
            <span key={item}><b>0{index + 1}</b>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="contact-inner">
        <p className="eyebrow">06 · Contact</p>
        <h2>Have an idea?<br /><span>Let’s talk.</span></h2>
        <p className="contact-copy">
          I’m always interested in learning, building and meeting people who are
          working on something interesting.
        </p>
        <div className="contact-links">
          <a href="mailto:kanhasoni2777@gmail.com"><Mail size={18} /> kanhasoni2777@gmail.com</a>
          <a href="https://www.linkedin.com/in/kanha-soni-6b18613b4/" target="_blank" rel="noreferrer">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href="https://github.com/codesoniji-creator" target="_blank"><Github size={18} /> GitHub </a>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Interests />
        <Contact />
      </main>
      <footer>
        <span>© {new Date().getFullYear()} Kanha Soni</span>
        <span>Built with React · kept simple on purpose.</span>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);