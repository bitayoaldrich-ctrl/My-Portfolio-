import React, { useState } from "react";

const skills = [
  { name: "HTML", level: 85 },
  { name: "CSS", level: 80 },
  { name: "JavaScript", level: 65 },
  { name: "ReactJS", level: 55 },
  { name: "Java", level: 60 },
  { name: "MySQL", level: 70 },
  { name: "XML", level: 65 },
  { name: "Bootstrap", level: 70 }
];

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    category: "Web Development",
    icon: "</>",
    description:
      "A responsive portfolio website that presents personal information, skills, educational background, and projects."
  },
  {
    id: 2,
    title: "Inventory Management System",
    category: "Database",
    icon: "▦",
    description:
      "An academic project concept for organizing inventory records and managing product information."
  },
  {
    id: 3,
    title: "Event Management System",
    category: "Database",
    icon: "◇",
    description:
      "A database project concept for managing event details, guests, resources, staff, and expenses."
  }
];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 85px;
}

body {
  background: #fcfaff;
  color: #352d40;
  font-family: 'DM Sans', sans-serif;
}

button, input, textarea {
  font: inherit;
}

button, a {
  -webkit-tap-highlight-color: transparent;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
}

.portfolio {
  overflow: hidden;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 8%;
  background: rgba(252,250,255,.96);
  border-bottom: 1px solid #eee7f5;
  backdrop-filter: blur(14px);
}

.logo {
  font-family: 'Manrope', sans-serif;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -2px;
}

.logo span, .hero h1 span, .section-title span {
  color: #9270d5;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 25px;
}

.nav-links a {
  color: #746a80;
  font-size: 13px;
  transition: color .2s;
}

.nav-links a:hover {
  color: #9270d5;
}

.menu-toggle {
  display: none;
  color: #7855bd;
  background: transparent;
  border: none;
  font-size: 25px;
}

.hero {
  display: grid;
  grid-template-columns: 1.15fr .85fr;
  align-items: center;
  gap: 40px;
  min-height: 620px;
  padding: 80px 8%;
  background:
    radial-gradient(ellipse at 85% 10%, #f5e5f5 0%, transparent 34%),
    radial-gradient(ellipse at 10% 95%, #e5f6eb 0%, transparent 30%),
    #fcfaff;
}

.eyebrow {
  margin-bottom: 17px;
  color: #8762ca;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2.5px;
}

.hero h1 {
  font-family: 'Manrope', sans-serif;
  font-size: clamp(42px, 6vw, 72px);
  line-height: 1.15;
  letter-spacing: -3px;
}

.hero h2 {
  margin-top: 15px;
  color: #766151;
  font-size: clamp(17px, 2.5vw, 23px);
}

.hero-description {
  max-width: 520px;
  margin-top: 22px;
  color: #82788c;
  font-size: 14px;
  line-height: 1.9;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 27px;
}

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 45px;
  padding: 12px 19px;
  border: 1px solid transparent;
  border-radius: 11px;
  font-size: 13px;
  font-weight: 700;
  transition: .25s;
}

.button:hover {
  transform: translateY(-3px);
}

.button-primary {
  color: white;
  background: #9170d5;
  box-shadow: 0 8px 20px #9170d52e;
}

.button-primary:hover {
  background: #7855bd;
}

.button-secondary {
  color: #7855bd;
  background: white;
  border-color: #e7dcf5;
}

.button-secondary:hover {
  background: #f5efff;
}

.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 38px;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.stat strong {
  font-family: 'Manrope', sans-serif;
  font-size: 22px;
}

.stat span {
  color: #8b8195;
  font-size: 12px;
}

.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 380px;
}

.profile-card {
  position: relative;
  z-index: 2;
  width: min(100%, 340px);
  padding: 35px 24px;
  text-align: center;
  background: rgba(255,255,255,.92);
  border: 1px solid white;
  border-radius: 25px;
  box-shadow: 0 25px 70px #59427017;
}

.avatar {
  display: grid;
  place-items: center;
  width: 125px;
  height: 125px;
  margin: 0 auto 22px;
  color: white;
  background: linear-gradient(135deg, #c4acee, #8b68d1);
  border: 7px solid #f2eaff;
  border-radius: 50%;
  font-family: 'Manrope', sans-serif;
  font-size: 53px;
  font-weight: 800;
}

.profile-label {
  color: #9270d5;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
}

.profile-card h3 {
  margin-top: 10px;
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
}

.profile-description {
  margin-top: 9px;
  color: #8b8195;
  font-size: 12px;
  line-height: 1.7;
}

.tags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 19px;
}

.tags span {
  padding: 7px 10px;
  color: #7855bd;
  background: #f3ecff;
  border-radius: 30px;
  font-size: 10px;
}

.float-badge {
  position: absolute;
  z-index: 3;
  padding: 12px 14px;
  color: #6f5a83;
  background: white;
  border: 1px solid #eee7f5;
  border-radius: 11px;
  box-shadow: 0 10px 30px #59427012;
  font-size: 11px;
  font-weight: 700;
}

.badge-top {
  top: 25px;
  right: -5px;
}

.badge-bottom {
  bottom: 20px;
  left: -5px;
}

.section {
  padding: 85px 8%;
  scroll-margin-top: 75px;
}

.section-heading {
  max-width: 600px;
  margin: 0 auto 43px;
  text-align: center;
}

.section-title {
  font-family: 'Manrope', sans-serif;
  font-size: clamp(30px, 4vw, 43px);
  letter-spacing: -1.5px;
}

.section-subtitle {
  margin-top: 12px;
  color: #8a8094;
  font-size: 13px;
  line-height: 1.8;
}

.about-section, .projects-section, .contact-section {
  background: white;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  max-width: 1150px;
  margin: auto;
}

.about-card {
  padding: 27px;
  background: #fcfaff;
  border: 1px solid #eee7f5;
  border-radius: 17px;
  transition: transform .25s, box-shadow .25s;
}

.about-card:hover, .project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px #59427010;
}

.about-card:nth-child(2) {
  background: #f0faf4;
}

.about-card:nth-child(3) {
  background: #fff5fb;
}

.card-icon {
  display: grid;
  place-items: center;
  width: 45px;
  height: 45px;
  margin-bottom: 20px;
  color: #8762ca;
  background: white;
  border-radius: 13px;
  font-size: 21px;
}

.about-card h3 {
  margin-bottom: 11px;
  font-family: 'Manrope', sans-serif;
  font-size: 17px;
}

.about-card p {
  color: #82788c;
  font-size: 13px;
  line-height: 1.9;
}

.skills-section, .education-section {
  background: linear-gradient(180deg, #fcfaff, #f8f3ff);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 26px 40px;
  max-width: 850px;
  margin: auto;
}

.skill-heading {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: 700;
}

.skill-heading span:last-child {
  color: #8762ca;
}

.skill-track {
  height: 8px;
  overflow: hidden;
  background: #e9e1f2;
  border-radius: 30px;
}

.skill-fill {
  height: 100%;
  background: linear-gradient(90deg, #c1a8ec, #8964d0);
  border-radius: 30px;
  transition: width .6s;
}

.center-button {
  display: flex;
  margin: 33px auto 0;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 9px;
  margin-bottom: 30px;
}

.filter-button {
  padding: 10px 16px;
  color: #81768c;
  background: #fcfaff;
  border: 1px solid #eee7f5;
  border-radius: 30px;
  font-size: 12px;
  transition: .2s;
}

.filter-button.active, .filter-button:hover {
  color: white;
  background: #9170d5;
  border-color: #9170d5;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  max-width: 1150px;
  margin: auto;
}

.project-card {
  overflow: hidden;
  background: white;
  border: 1px solid #eee7f5;
  border-radius: 17px;
  transition: transform .25s, box-shadow .25s;
}

.project-art {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 175px;
}

.project-art.purple {
  background: linear-gradient(135deg, #eee4ff, #f9e8f4);
}

.project-art.green {
  background: linear-gradient(135deg, #dff5e8, #eae3fb);
}

.project-art.pink {
  background: linear-gradient(135deg, #f9e7db, #f6e0f2);
}

.project-symbol {
  color: #8662bd;
  font-family: monospace;
  font-size: 57px;
  font-weight: 700;
}

.project-number {
  position: absolute;
  top: 15px;
  left: 17px;
  color: #7c668d;
  font-size: 11px;
  font-weight: 700;
}

.project-category {
  position: absolute;
  right: 12px;
  bottom: 12px;
  padding: 7px 10px;
  color: #705b82;
  background: #ffffffd9;
  border-radius: 30px;
  font-size: 10px;
}

.project-content {
  padding: 22px;
}

.project-content h3 {
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

.project-content p {
  margin-top: 11px;
  color: #82788c;
  font-size: 12px;
  line-height: 1.85;
}

.details-button {
  margin-top: 15px;
  padding: 0;
  color: #8560c5;
  background: transparent;
  border: none;
  font-size: 12px;
  font-weight: 700;
}

.timeline {
  position: relative;
  max-width: 760px;
  margin: auto;
}

.timeline::before {
  position: absolute;
  top: 12px;
  bottom: 20px;
  left: 9px;
  width: 2px;
  background: #dfd0f5;
  content: '';
}

.timeline-item {
  position: relative;
  padding-left: 38px;
  margin-bottom: 22px;
}

.timeline-dot {
  position: absolute;
  top: 22px;
  left: 1px;
  width: 18px;
  height: 18px;
  background: #9170d5;
  border: 4px solid #e8ddf8;
  border-radius: 50%;
}

.timeline-card {
  padding: 25px;
  background: white;
  border: 1px solid #eee7f5;
  border-radius: 16px;
}

.timeline-label {
  display: inline-block;
  padding: 6px 10px;
  margin-bottom: 12px;
  color: #7954bc;
  background: #f2eaff;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 700;
}

.timeline-card h3 {
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  line-height: 1.6;
}

.timeline-school {
  margin-top: 7px;
  color: #8964c8;
  font-size: 12px;
  font-weight: 700;
}

.timeline-description {
  margin-top: 12px;
  color: #82788c;
  font-size: 13px;
  line-height: 1.8;
}

.contact-grid {
  display: grid;
  grid-template-columns: .9fr 1.1fr;
  gap: 45px;
  max-width: 1050px;
  margin: auto;
}

.contact-info h3 {
  font-family: 'Manrope', sans-serif;
  font-size: 25px;
  line-height: 1.5;
}

.contact-info > p {
  margin-top: 14px;
  color: #82788c;
  font-size: 13px;
  line-height: 1.9;
}

.contact-detail {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-top: 24px;
}

.contact-icon {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  color: #8560c5;
  background: #f2eaff;
  border-radius: 12px;
}

.contact-detail small {
  color: #92869d;
  font-size: 11px;
}

.contact-detail p {
  margin-top: 4px;
  font-size: 12px;
  font-weight: 700;
  overflow-wrap: anywhere;
}

.contact-form {
  display: flex;
  flex-direction: column;
  padding: 27px;
  background: #fcfaff;
  border: 1px solid #eee7f5;
  border-radius: 17px;
}

.contact-form label {
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 700;
}

.contact-form input, .contact-form textarea {
  width: 100%;
  margin-bottom: 16px;
  padding: 13px;
  color: #352d40;
  background: white;
  border: 1px solid #e8dfef;
  border-radius: 9px;
  outline: none;
}

.contact-form input:focus, .contact-form textarea:focus {
  border-color: #9270d5;
  box-shadow: 0 0 0 3px #9270d51a;
}

.contact-form textarea {
  resize: vertical;
}

.field-error {
  margin-top: -10px;
  margin-bottom: 13px;
  color: #c33d5c;
  font-size: 11px;
}

.form-success {
  margin-top: 14px;
  padding: 12px;
  color: #286c4b;
  background: #e5f7ec;
  border-radius: 9px;
  font-size: 12px;
  line-height: 1.7;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 25px 8%;
  background: #f6f0ff;
  border-top: 1px solid #eee7f5;
}

.footer p {
  color: #82788c;
  font-size: 11px;
  text-align: center;
}

.footer .back-top {
  color: #7954bc;
  font-size: 12px;
  font-weight: 700;
}

@media (max-width: 900px) {
  .navbar, .footer {
    padding-left: 5%;
    padding-right: 5%;
  }

  .nav-links {
    gap: 14px;
  }

  .nav-links a {
    font-size: 11px;
  }

  .hero, .section {
    padding-left: 6%;
    padding-right: 6%;
  }

  .about-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 650px) {
  .navbar {
    padding: 14px 6%;
  }

  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    display: none;
    padding: 10px 6% 18px;
    background: #fcfaff;
    border-bottom: 1px solid #eee7f5;
  }

  .nav-links.open {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }

  .nav-links a {
    padding: 13px 0;
    border-bottom: 1px solid #eee7f5;
    font-size: 14px;
  }

  .hero {
    grid-template-columns: 1fr;
    gap: 25px;
    padding: 60px 6%;
  }

  .hero h1 {
    font-size: clamp(42px, 12vw, 62px);
  }

  .hero-visual {
    min-height: 350px;
  }

  .profile-card {
    max-width: 320px;
  }

  .badge-top {
    right: 0;
  }

  .badge-bottom {
    left: 0;
  }

  .section {
    padding: 65px 6%;
  }

  .section-heading {
    margin-bottom: 32px;
  }

  .about-grid, .skills-grid, .project-grid, .contact-grid {
    grid-template-columns: 1fr;
  }

  .about-grid, .project-grid {
    gap: 15px;
  }

  .skills-grid {
    gap: 24px;
  }

  .contact-grid {
    gap: 30px;
  }

  .contact-form {
    padding: 20px;
  }

  .footer {
    flex-direction: column;
    text-align: center;
    padding: 25px 6%;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    transition: none !important;
  }
}
`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedProjects, setExpandedProjects] = useState([]);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category))
  ];

  const visibleProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  const navigation = [
    ["Home", "home"],
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Education", "education"],
    ["Contact", "contact"]
  ];

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: ""
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.message.trim()) {
      nextErrors.message = "Please enter your message.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        message: ""
      });
    }
  }

  function toggleProject(id) {
    setExpandedProjects((previous) =>
      previous.includes(id)
        ? previous.filter((projectId) => projectId !== id)
        : [...previous, id]
    );
  }

  return (
    <div className="portfolio">
      <style>{styles}</style>

      <header className="navbar">
        <a
          href="#home"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          ad<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navigation.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

            <h1>
              Hi, I'm <span>Aldrich.</span>
            </h1>

            <h2>Information Technology Student</h2>

            <p className="hero-description">
              I am an aspiring IT professional interested in web
              development, technology, and creative digital experiences.
              I enjoy learning new skills and turning ideas into
              meaningful projects.
            </p>

            <div className="hero-buttons">
              <a className="button button-primary" href="#projects">
                Explore My Work ↗
              </a>

              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="stats">
              <div className="stat">
                <strong>{String(projects.length).padStart(2, "0")}</strong>
                <span>Projects</span>
              </div>

              <div className="stat">
                <strong>{String(skills.length).padStart(2, "0")}</strong>
                <span>Skills</span>
              </div>

              <div className="stat">
                <strong>BSIT</strong>
                <span>Degree Program</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-card">
              <div className="avatar">A</div>
              <p className="profile-label">ASPIRING DEVELOPER</p>
              <h3>Aldrich Dave T. Bitayo</h3>
              <p className="profile-description">
                Bachelor of Science in Information Technology
              </p>

              <div className="tags">
                <span>Creative</span>
                <span>Curious</span>
                <span>Dedicated</span>
              </div>
            </div>

            <div className="float-badge badge-top">
              ✦ Keep Learning
            </div>

            <div className="float-badge badge-bottom">
              &lt; Code &amp; Create /&gt;
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="about-grid">
            <div className="about-card">
              <div className="card-icon">✦</div>
              <h3>Who I Am</h3>
              <p>
                I am Aldrich Dave T. Bitayo, an Information Technology
                student who enjoys learning about technology and creating
                meaningful digital experiences.
              </p>
            </div>

            <div className="