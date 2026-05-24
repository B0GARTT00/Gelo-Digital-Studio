import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import studioOverview from '../port 1.png'
import abstractFlow from '../port 2.png'
import mobileSystems from '../port 3.png'
import heroVideo from '../port vid.mp4'
import acadexPreview from '../acadex.png'
import eargasmPreview from '../eargasm.png'
import fleetPreview from '../fleet.png'
import leakPreview from '../leak.png'
import smartBuyPreview from '../smart buy.png'
import stridePreview from '../stride.png'

const highlights = [
  {
    title: 'Frontend Craft',
    copy: 'Responsive interfaces with polished visuals, clear hierarchy, and smooth user flows.',
  },
  {
    title: 'Product Thinking',
    copy: 'I shape features around real users, practical workflows, and measurable outcomes.',
  },
  {
    title: 'Full-Stack Delivery',
    copy: 'Comfortable connecting UI, data, backend logic, and deployment into working products.',
  },
]

const capabilities = [
  {
    title: 'React Interfaces',
    copy: 'Component-driven pages, dashboards, and interactive product screens with careful responsive behavior.',
  },
  {
    title: 'Mobile Experiences',
    copy: 'React Native and Flutter app screens built around clear navigation, useful states, and focused flows.',
  },
  {
    title: 'Backend Integration',
    copy: 'APIs, authentication, databases, admin features, and the logic needed to make products actually work.',
  },
  {
    title: 'Visual Polish',
    copy: 'Layouts, spacing, typography, and motion that make a product feel intentional instead of assembled.',
  },
  {
    title: 'Problem Solving',
    copy: 'Breaking broad ideas into practical screens, data models, and buildable development steps.',
  },
  {
    title: 'Team Readiness',
    copy: 'GitHub-based workflows, readable code, quick learning, and communication that keeps work moving.',
  },
]

const projects = [
  {
    title: 'LeakDetection',
    type: 'Mobile app',
    role: 'Mobile developer',
    stack: ['React Native', 'Firebase', 'Field workflows'],
    focus: 'Leak reporting, utility flows, and practical screens for field use.',
    copy: 'Utility app used by Davao City Water District for leak reporting and field workflows.',
    link: 'https://github.com/abllenos/LeakDetectionV1',
    image: leakPreview,
  },
  {
    title: 'Smart Buy Grocery App',
    type: 'Mobile app',
    role: 'React Native developer',
    stack: ['React Native', 'MobX', 'Mobile UI'],
    focus: 'Budget tracking, grocery list management, and organized shopping flows.',
    copy: 'React Native app with budget tracking and grocery list management using MobX.',
    link: 'https://github.com/B0GARTT00/Smart-Buy',
    image: smartBuyPreview,
  },
  {
    title: 'Fleettrack',
    type: 'Web app',
    role: 'Full-stack developer',
    stack: ['Laravel', 'PHP', 'Dashboard UI'],
    focus: 'Fleet tracking screens, admin-style workflows, and data-driven interface structure.',
    copy: 'Fleet tracking dashboard built with PHP and Laravel.',
    link: 'https://github.com/B0GARTT00/fleettrack',
    image: fleetPreview,
  },
  {
    title: 'AcadexV3 (Capstone)',
    type: 'Web app',
    role: 'Capstone team developer',
    stack: ['Web system', 'Team project', 'Academic platform'],
    focus: 'Collaborative development, grading-system features, and product presentation.',
    copy: 'Team capstone platform built with classmates for Brokenshire College.',
    link: 'https://github.com/xaviworks/AcadexV3',
    image: acadexPreview,
  },
  {
    title: 'Eargasm',
    type: 'Mobile app',
    role: 'Mobile UI developer',
    stack: ['JavaScript', 'React Native', 'Audio app'],
    focus: 'Audio-focused app screens, navigation, and mobile interaction patterns.',
    copy: 'Audio-focused mobile app demo built with JavaScript and React Native.',
    link: 'https://github.com/B0GARTT00/Eargasm',
    image: eargasmPreview,
  },
  {
    title: 'Stride Quest Fitness App',
    type: 'Mobile app',
    role: 'Mobile app developer',
    stack: ['Mobile UI', 'Fitness flows', 'Progress tracking'],
    focus: 'Workout screens, achievements, profile flows, and a clean fitness app experience.',
    copy: 'Workouts, progress tracking, achievements, and profile flows in a clean mobile UI.',
    link: 'https://github.com/B0GARTT00/StrideQuest-V2',
    image: stridePreview,
  },
]

const featuredProof = [
  {
    label: 'Best proof of product thinking',
    title: 'LeakDetection',
    copy: 'A real utility workflow with practical reporting screens and field-use context.',
  },
  {
    label: 'Best proof of full-stack direction',
    title: 'Fleettrack',
    copy: 'A dashboard-style web app showing Laravel, PHP, and data-centered interface work.',
  },
  {
    label: 'Best proof of mobile UI practice',
    title: 'Smart Buy',
    copy: 'A React Native app focused on user flow, budget tracking, and state management.',
  },
]

const featuredProject = {
  title: 'LeakDetection',
  type: 'Featured mobile project',
  role: 'Mobile developer',
  stack: ['React Native', 'Firebase', 'Utility workflow'],
  copy: 'A practical reporting app used by Davao City Water District for leak reporting and field workflows. This project is the strongest proof of my interest in building software that is useful, clear, and connected to real operational needs.',
  points: [
    'Built mobile-first screens for practical reporting workflows.',
    'Focused on clear user flow for field and utility use cases.',
    'Connected interface work with real product logic and data needs.',
  ],
  image: leakPreview,
  link: 'https://github.com/abllenos/LeakDetectionV1',
}

const heroStats = [
  {
    value: '6',
    label: 'Featured projects',
  },
  {
    value: 'Web + Mobile',
    label: 'Product experience',
  },
  {
    value: 'Full-Stack',
    label: 'Frontend, backend, database',
  },
]

const processSteps = [
  {
    title: 'Understand',
    copy: 'I start by clarifying the user, goal, constraints, and what the product needs to accomplish.',
  },
  {
    title: 'Map',
    copy: 'I translate requirements into screens, routes, data needs, and a realistic implementation path.',
  },
  {
    title: 'Prototype',
    copy: 'I move quickly into usable UI so ideas can be tested, reviewed, and improved early.',
  },
  {
    title: 'Build',
    copy: 'I implement the interface, logic, database connections, and core product behavior.',
  },
  {
    title: 'Test',
    copy: 'I check responsiveness, forms, key flows, edge cases, and the details users will notice.',
  },
  {
    title: 'Iterate',
    copy: 'I use feedback to refine the product, clean up rough spots, and make the next version stronger.',
  },
]

const reasons = [
  {
    title: 'I Care About Product Quality',
    copy: 'I look beyond whether something works and pay attention to how it feels to use.',
  },
  {
    title: 'I Learn Fast',
    copy: 'I can pick up new tools, patterns, and team conventions without needing everything handed to me.',
  },
  {
    title: 'I Can Work Across the Stack',
    copy: 'Frontend is my strongest visual lane, but I can connect backend, database, and app logic too.',
  },
  {
    title: 'I Communicate Clearly',
    copy: 'I explain what I am building, where I am blocked, and what tradeoffs I see.',
  },
  {
    title: 'I Finish Practical Work',
    copy: 'My projects show working apps, not just mockups, with real screens and usable features.',
  },
  {
    title: 'I Bring Visual Taste',
    copy: 'I like building interfaces that feel modern, organized, and ready to present.',
  },
]

const experienceNotes = [
  {
    title: 'Academic and Team Projects',
    tag: 'Built with classmates and collaborators.',
    items: ['Capstone platform work', 'Shared repositories', 'Feature planning', 'Project presentation'],
  },
  {
    title: 'Mobile App Practice',
    tag: 'Focused on screens, flows, and app logic.',
    items: ['React Native builds', 'Flutter exposure', 'Authentication flows', 'State management'],
  },
  {
    title: 'Web App Foundations',
    tag: 'Dashboards, data, and admin-style products.',
    items: ['Laravel and PHP work', 'MySQL database use', 'Dashboard layouts', 'CRUD-style features'],
  },
  {
    title: 'Portfolio Direction',
    tag: 'Where I want to grow next.',
    items: ['Frontend engineering', 'UI implementation', 'Product teams', 'Full-stack development'],
  },
]

const skillGroups = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'React', 'JavaScript', 'TypeScript', 'Responsive Design', 'UI/UX Design'],
  },
  {
    title: 'Backend',
    items: ['PHP', 'Laravel', 'Python', 'REST API', 'Authentication', 'CRUD'],
  },
  {
    title: 'Database',
    items: ['MySQL', 'SQLite', 'Firebase'],
  },
  {
    title: 'Mobile',
    items: ['React Native', 'Flutter', 'MobX'],
  },
  {
    title: 'Desktop',
    items: ['Electron'],
  },
  {
    title: 'Tools',
    items: ['Vite', 'Tailwind CSS', 'Bootstrap', 'Git', 'GitHub', 'Postman', 'Deployment'],
  },
  {
    title: 'Product Work',
    items: ['Dashboard Development', 'User Flows', 'Interface Design'],
  },
]

const profileLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/B0GARTT00',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/kyle.lamigo.18',
  },
]

const contactDetails = [
  {
    label: 'Portfolio focus',
    value: 'Full-stack, backend, frontend, and mobile development',
  },
  {
    label: 'Resume',
    value: 'Available on request',
  },
  {
    label: 'Best project proof',
    value: 'LeakDetection, Fleettrack, Smart Buy',
  },
]

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'capabilities', label: 'What I Do' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'process', label: 'Workflow' },
  { id: 'fit', label: 'How I Work' },
  { id: 'experience', label: 'Background' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  const [state, handleSubmit] = useForm('xykvwwpw')
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const elements = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!elements.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0.1,
      },
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className="site-shell relative"
      style={{ '--site-bg-image': `url(${abstractFlow})` } as CSSProperties}
    >
      <div className="sticky-nav">
        <div className="flex items-center justify-between gap-6 px-6 sm:px-10 lg:px-16 py-4">
          <div className="brand-mark">
            <span>Kyle Lamigo</span>
            <small>Gelo Digital Studio</small>
          </div>
          <nav className="nav-scroll flex items-center gap-4 text-xs sm:text-sm text-white/70 overflow-x-auto whitespace-nowrap">
            {navItems.map((item) => (
              <a
                key={item.id}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <header className="section pb-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="hidden lg:block text-xs uppercase tracking-[0.3em] text-white/60">
              Developer portfolio
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="hero-kicker fade-up">Full-stack web and mobile developer</p>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold fade-up">
                <span className="gradient-text">Kyle Lamigo</span>
                <br />
                Full-Stack Developer
              </h1>
              <p className="section-lead fade-up delay-1">
                I build responsive websites, web apps, backend features, databases, and mobile app
                experiences with a strong eye for interface quality and practical product logic.
              </p>
              <div className="hero-meta fade-up delay-1">
                <span>React</span>
                <span>React Native</span>
                <span>Laravel</span>
                <span>MySQL</span>
                <span>UI-focused development</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 fade-up delay-2">
                <a className="btn-primary" href="#contact">
                  Contact Me
                </a>
                <a className="btn-ghost" href="#projects">
                  View My Work
                </a>
                <a
                  className="btn-ghost"
                  href="https://github.com/B0GARTT00"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="hero-stats fade-up delay-3">
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual mt-12 lg:mt-0">
              <video
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
                aria-label="Digital product interface animation"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="section pt-4" id="home">
        <div className="glass-card p-8 sm:p-10">
          <p className="chip">Portfolio focus</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="image-card rounded-2xl border border-white/10 p-6"
                style={{
                  '--card-bg-image': `url(${index % 2 === 0 ? studioOverview : mobileSystems})`,
                } as CSSProperties}
              >
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm sm:text-base">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="capabilities">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="chip">Capabilities</p>
            <h2 className="section-title mt-4">What I Do</h2>
            <p className="section-lead">
              A mix of interface craft, product sense, and enough full-stack range to help ideas
              move from plan to working software.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="glass-card image-card p-6"
              style={{
                '--card-bg-image': `url(${index % 2 === 0 ? studioOverview : mobileSystems})`,
              } as CSSProperties}
            >
              <h3 className="text-lg font-semibold text-white">{capability.title}</h3>
              <p className="mt-3 text-sm sm:text-base">{capability.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="cta-panel">
          <div>
            <p className="chip">Available for opportunities</p>
            <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-white">
              Looking for a role where I can build useful, polished products with a strong team.
            </h3>
            <p className="mt-3 text-sm sm:text-base">
              I am especially interested in frontend, full-stack, and mobile app development work.
            </p>
          </div>
          <a className="btn-primary" href="#contact">
            Get in Touch
          </a>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="chip">Projects</p>
            <h2 className="section-title mt-4">Featured Work</h2>
            <p className="section-lead">
              Projects that show my range across mobile apps, dashboards, capstone work, and product
              interface design.
            </p>
          </div>
          <a className="btn-ghost" href="#contact">
            Contact Me
          </a>
        </div>
        <div className="featured-project mt-10">
          <div className="featured-project-media">
            <img src={featuredProject.image} alt={`${featuredProject.title} preview`} />
          </div>
          <div className="featured-project-body">
            <p className="chip">{featuredProject.type}</p>
            <h3>{featuredProject.title}</h3>
            <p>{featuredProject.copy}</p>
            <div className="featured-meta">
              <span>Role</span>
              <strong>{featuredProject.role}</strong>
            </div>
            <ul>
              {featuredProject.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="project-tags">
              {featuredProject.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a
              className="btn-primary mt-6"
              href={featuredProject.link}
              target="_blank"
              rel="noreferrer"
            >
              View Featured Project
            </a>
          </div>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredProof.map((item) => (
            <div key={item.title} className="proof-card">
              <p>{item.label}</p>
              <h3>{item.title}</h3>
              <span>{item.copy}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="glass-card project-card">
              <div className="project-preview">
                <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/80">{project.type}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm sm:text-base">{project.copy}</p>
                <div className="project-detail">
                  <span>Role</span>
                  <p>{project.role}</p>
                </div>
                <div className="project-detail">
                  <span>Focus</span>
                  <p>{project.focus}</p>
                </div>
                <div className="project-tags">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                {project.link ? (
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="about">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="chip">About</p>
            <h2 className="section-title mt-4">
              Developer With a Strong Eye for Product Experience
            </h2>
            <div className="about-copy section-lead">
              <p>
                I am a developer focused on creating websites, web applications, and mobile
                applications that are clean, functional, and easy to understand. I enjoy building
                digital products that do not only work properly, but also feel smooth, organized,
                and useful for the people who use them.
              </p>
              <p>
                My work is centered on combining good design, practical functionality, and clear
                user experience. Whether I am creating a simple landing page, a full web system, or
                a mobile app, I always think about how users will interact with the product, how
                information should be presented, and how the overall experience can feel more
                intuitive.
              </p>
              <p>
                I have experience working on projects such as portfolio websites, utility apps,
                mobile app concepts, dashboards, grading systems, inventory systems, and other
                product-based applications. These projects helped me understand the importance of
                both the technical side and the user-facing side of development.
              </p>
              <p>
                My goal is to join a company where I can continue growing as a developer while
                contributing to real product work. I am eager to improve my skills, learn from
                experienced teams, and be part of projects that solve actual problems for users and
                businesses. I value clean code, thoughtful design, teamwork, and continuous
                learning.
              </p>
              <p>
                I want to keep building products that are not only visually appealing, but also
                reliable, practical, and meaningful.
              </p>
            </div>
          </div>
          <div className="glass-card p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-white">Skills and Stack</h3>
            <div className="mt-5 space-y-4">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-sm uppercase tracking-[0.28em] text-white/80">
                    {group.title}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="process">
        <div>
          <p className="chip">Workflow</p>
          <h2 className="section-title mt-4">How I Approach Product Work</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="glass-card image-card p-6"
              style={{
                '--card-bg-image': `url(${index % 2 === 0 ? mobileSystems : studioOverview})`,
              } as CSSProperties}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-white/80">Step {index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm sm:text-base">{step.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="fit">
        <div>
          <p className="chip">How I work</p>
          <h2 className="section-title mt-4">What I Bring to a Team</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="glass-card image-card p-6"
              style={{
                '--card-bg-image': `url(${index % 2 === 0 ? studioOverview : mobileSystems})`,
              } as CSSProperties}
            >
              <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
              <p className="mt-3 text-sm sm:text-base">{reason.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <div>
          <p className="chip">Background</p>
          <h2 className="section-title mt-4">Development Background</h2>
          <p className="section-lead">
            The portfolio is built around practical proof: screens, repositories, app flows, and
            the kind of development work I want to keep doing professionally.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {experienceNotes.map((pkg, index) => (
            <div
              key={pkg.title}
              className="glass-card image-card p-6"
              style={{
                '--card-bg-image': `url(${index % 2 === 0 ? mobileSystems : studioOverview})`,
              } as CSSProperties}
            >
              <h3 className="text-xl font-semibold text-white">{pkg.title}</h3>
              <p className="mt-2 text-sm text-white/80">{pkg.tag}</p>
              <ul className="mt-4 space-y-2 text-sm sm:text-base text-white/70">
                {pkg.items.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="contact">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="chip">Contact</p>
            <h2 className="section-title mt-4">Let's Talk About a Role</h2>
            <p className="section-lead">
              If my work fits what your company needs, I would be glad to talk about frontend,
              full-stack, backend, mobile, internship, or entry-level developer opportunities.
            </p>
            <div className="contact-links">
              <p>Currently looking for full-stack, frontend, backend, mobile, internship, or entry-level software development opportunities.</p>
              <div>
                {profileLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-details">
              {contactDetails.map((detail) => (
                <div key={detail.label}>
                  <span>{detail.label}</span>
                  <strong>{detail.value}</strong>
                </div>
              ))}
            </div>
          </div>
          {state.succeeded ? (
            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white">Thanks for the details.</h3>
              <p className="mt-3 text-sm sm:text-base">
                Your message was sent. I will reply as soon as I can.
              </p>
            </div>
          ) : (
            <form className="glass-card p-6 sm:p-8 space-y-5" onSubmit={handleSubmit}>
              <p className="text-xs text-white/80">
                This form is connected to Formspree.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-white/70">
                  Name
                  <input
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[var(--accent)]"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </label>
                <label className="text-sm text-white/70">
                  Email
                  <input
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[var(--accent)]"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>
              <ValidationError field="email" errors={state.errors} className="text-xs text-red-300" />
              <label className="text-sm text-white/70">
                Opportunity Type
                <input
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[var(--accent)]"
                  name="opportunity"
                  placeholder="Frontend, full-stack, mobile, internship"
                  required
                />
              </label>
              <label className="text-sm text-white/70">
                Company or Role
                <input
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[var(--accent)]"
                  name="companyRole"
                  placeholder="Company name or role title"
                  required
                />
              </label>
              <label className="text-sm text-white/70">
                Message
                <textarea
                  className="mt-2 min-h-[140px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[var(--accent)]"
                  name="message"
                  placeholder="Tell me about the role or opportunity"
                  required
                />
              </label>
              <ValidationError field="message" errors={state.errors} className="text-xs text-red-300" />
              <div className="flex flex-wrap gap-3">
                <button className="btn-primary" type="submit" disabled={state.submitting}>
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <footer className="section pt-0">
        <div className="footer-bar">
          <p>(c) 2026 Gelo Digital Studio. Portfolio by Kyle Lamigo.</p>
          <div>
            {profileLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
