import { useEffect, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'

const highlights = [
  {
    title: 'Website Development',
    copy: 'Fast, polished sites that communicate value and convert visitors.',
  },
  {
    title: 'Web App Development',
    copy: 'Dashboards, portals, and custom tools with clean UX and solid logic.',
  },
  {
    title: 'Mobile App Development',
    copy: 'Mobile-first experiences that feel native and keep users engaged.',
  },
]

const services = [
  {
    title: 'Business Websites',
    copy: 'For companies, local businesses, brands, portfolios, restaurants, clinics, shops, and service providers.',
  },
  {
    title: 'Landing Pages',
    copy: 'For product launches, online ads, promotions, events, and sales pages.',
  },
  {
    title: 'Web Applications',
    copy: 'For dashboards, booking systems, inventory systems, portals, admin panels, and custom tools.',
  },
  {
    title: 'Mobile Applications',
    copy: 'For business apps, delivery apps, fitness apps, booking apps, and mobile-first platforms.',
  },
  {
    title: 'E-Commerce Websites',
    copy: 'For online stores, product catalogs, carts, checkout systems, and admin product management.',
  },
  {
    title: 'Maintenance and Support',
    copy: 'For bug fixes, updates, improvements, redesigns, and website speed optimization.',
  },
]

const projects = [
  {
    title: 'LeakDetection',
    type: 'Mobile app',
    copy: 'Utility app used by Davao City Water District for leak reporting and field workflows.',
    link: 'https://github.com/abllenos/LeakDetectionV1',
  },
  {
    title: 'Smart Buy Grocery App',
    type: 'Mobile app',
    copy: 'React Native app with budget tracking and grocery list management using MobX.',
    link: 'https://github.com/B0GARTT00/Smart-Buy',
  },
  {
    title: 'Fleettrack',
    type: 'Web app',
    copy: 'Fleet tracking dashboard built with PHP and Laravel.',
    link: 'https://github.com/B0GARTT00/fleettrack',
  },
  {
    title: 'AcadexV3 (Capstone)',
    type: 'Web app',
    copy: 'Team capstone platform built with classmates for Brokenshire College.',
    link: 'https://github.com/xaviworks/AcadexV3',
  },
  {
    title: 'Eargasm',
    type: 'Mobile app',
    copy: 'Audio-focused mobile app demo built with JavaScript and React Native.',
    link: 'https://github.com/B0GARTT00/Eargasm',
  },
  {
    title: 'Stride Quest Fitness App',
    type: 'Mobile app',
    copy: 'Workouts, progress tracking, achievements, and profile flows in a clean mobile UI.',
    link: 'https://github.com/B0GARTT00/StrideQuest-V2',
  },
]

const processSteps = [
  {
    title: 'Discover',
    copy: 'We talk about your idea, business goals, target users, and must-have features.',
  },
  {
    title: 'Plan',
    copy: 'I map the pages, user flow, and development structure for clean delivery.',
  },
  {
    title: 'Design',
    copy: 'A modern interface that fits your brand and feels premium on every screen.',
  },
  {
    title: 'Build',
    copy: 'Frontend, backend, database, and core features built with care.',
  },
  {
    title: 'Launch',
    copy: 'Deploy, test, and make sure everything runs smoothly.',
  },
  {
    title: 'Improve',
    copy: 'Ongoing updates, fixes, and enhancements after launch.',
  },
]

const reasons = [
  {
    title: 'Business-Focused',
    copy: 'Every feature supports growth, conversion, or operational clarity.',
  },
  {
    title: 'Modern Design',
    copy: 'Clean layouts, bold type, and polished visuals that feel premium.',
  },
  {
    title: 'Full-Stack Skills',
    copy: 'Frontend, backend, database, and deployment in one workflow.',
  },
  {
    title: 'Mobile-Ready',
    copy: 'Responsive experiences across phones, tablets, and desktops.',
  },
  {
    title: 'Scalable Structure',
    copy: 'Built to grow with your business and new features.',
  },
  {
    title: 'Clear Communication',
    copy: 'You always know what is being built and what comes next.',
  },
]

const packages = [
  {
    title: 'Starter Website',
    tag: 'Best for personal brands and small businesses.',
    starting: 'Starts at PHP 1,500',
    items: ['1-5 pages', 'Responsive design', 'Contact form', 'Basic SEO', 'Social links'],
  },
  {
    title: 'Business Website',
    tag: 'Best for service businesses and growing brands.',
    starting: 'Starts at PHP 15,000',
    items: [
      '5-10 pages',
      'Custom design',
      'Contact form',
      'Google Maps',
      'Basic animations',
      'Deployment assistance',
    ],
  },
  {
    title: 'Custom Web App',
    tag: 'Best for businesses that need systems.',
    starting: 'Starts at PHP 30,000',
    items: ['User login', 'Dashboard', 'Database', 'Admin panel', 'Custom features', 'Deployment'],
  },
  {
    title: 'Mobile App Build',
    tag: 'Best for mobile-first ideas.',
    starting: 'Starts at PHP 30,000',
    items: [
      'App screens',
      'User flow',
      'Authentication',
      'Backend integration',
      'App prototype or full build',
    ],
  },
]

const skillGroups = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'React', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Backend',
    items: ['PHP', 'Python'],
  },
  {
    title: 'Database',
    items: ['MySQL', 'Firebase'],
  },
  {
    title: 'Mobile',
    items: ['React Native', 'Flutter'],
  },
  {
    title: 'Desktop',
    items: ['Electron'],
  },
  {
    title: 'Tools',
    items: ['Vite', 'Tailwind CSS', 'Bootstrap'],
  },
]

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'process', label: 'Process' },
  { id: 'why', label: 'Why' },
  { id: 'packages', label: 'Packages' },
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
    <div className="relative">
      <div className="sticky-nav">
        <div className="flex items-center justify-between gap-6 px-6 sm:px-10 lg:px-16 py-4">
          <div className="text-sm uppercase tracking-[0.3em] text-white/70">Gelo Digital Studio</div>
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
              Full-stack studio
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold fade-up">
              <span className="gradient-text">Websites, Web Apps & Mobile Apps</span>
              <br />
              Built for Business Growth
            </h1>
            <p className="section-lead fade-up delay-1">
              I help businesses, creators, and startups turn ideas into modern digital products, from
              professional websites to full-stack platforms and mobile applications.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 fade-up delay-2">
              <a className="btn-primary" href="#contact">
                Start a Project
              </a>
              <a className="btn-ghost" href="#projects">
                View My Work
              </a>
            </div>
            </div>

            <div className="relative mt-12 flex items-center justify-center lg:mt-0 lg:justify-end">
              <div className="mockup-shell p-6 w-[320px] sm:w-[420px] lg:w-[460px]">
                <div className="mockup-screen">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/60">
                    <span>Studio Dash</span>
                    <span>Live</span>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="mockup-line">
                      <strong style={{ width: '68%' }} />
                    </div>
                    <div className="mockup-line">
                      <strong style={{ width: '82%' }} />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-20 rounded-xl bg-white/10" />
                      <div className="h-20 rounded-xl bg-white/5" />
                      <div className="h-20 rounded-xl bg-white/10" />
                    </div>
                    <div className="h-24 rounded-2xl bg-white/5" />
                  </div>
                </div>
              </div>
              <div className="mockup-shell p-3 w-[160px] sm:w-[190px] absolute -bottom-8 -left-2 sm:-left-12 lg:-left-20">
                <div className="mockup-screen">
                  <div className="h-4 w-16 rounded-full bg-white/20" />
                  <div className="mt-4 space-y-3">
                    <div className="h-16 rounded-xl bg-white/10" />
                    <div className="mockup-line">
                      <strong style={{ width: '76%' }} />
                    </div>
                    <div className="mockup-line">
                      <strong style={{ width: '54%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section pt-4" id="home">
        <div className="glass-card p-8 sm:p-10">
          <p className="chip">What I do</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 p-6 bg-white/5">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm sm:text-base">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="chip">Services</p>
            <h2 className="section-title mt-4">What I Can Build</h2>
            <p className="section-lead">
              End-to-end development with modern stacks, clean structure, and a premium finish.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm sm:text-base">{service.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="cta-panel">
          <div>
            <p className="chip">Ready to start</p>
            <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-white">
              Tell me what you want to build, I will map the scope and timeline.
            </h3>
            <p className="mt-3 text-sm sm:text-base">
              Get a clear plan, realistic budget, and a roadmap you can trust.
            </p>
          </div>
          <a className="btn-primary" href="#contact">
            Book a Discovery Call
          </a>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="chip">Projects</p>
            <h2 className="section-title mt-4">Featured Work</h2>
            <p className="section-lead">
              Real or concept builds that show the kind of solutions I can deliver.
            </p>
          </div>
          <a className="btn-ghost" href="#contact">
            Start a Project
          </a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="glass-card p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/80">{project.type}</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm sm:text-base">{project.copy}</p>
              {project.link ? (
                <a
                  className="mt-4 inline-flex text-sm text-white/80 hover:text-white"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </section>


      <section className="section" id="about">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="chip">About</p>
            <h2 className="section-title mt-4">
              Full-Stack Developer Building Real Digital Solutions
            </h2>
            <p className="section-lead">
              I focus on creating websites, web apps, and mobile applications that are clean,
              functional, and business-ready. Every project is designed for clarity, responsiveness,
              and a purpose that helps the business grow.
            </p>
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
            <p className="mt-6 text-xs text-white/80">
              Only list the tools you actually use.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="process">
        <div>
          <p className="chip">Process</p>
          <h2 className="section-title mt-4">How I Turn Ideas Into Working Products</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={step.title} className="glass-card p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-white/80">Step {index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm sm:text-base">{step.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="why">
        <div>
          <p className="chip">Why work with me</p>
          <h2 className="section-title mt-4">Why Choose Gelo Digital Studio?</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="glass-card p-6">
              <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
              <p className="mt-3 text-sm sm:text-base">{reason.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="packages">
        <div>
          <p className="chip">Packages</p>
          <h2 className="section-title mt-4">Simple Project Packages</h2>
          <p className="section-lead">Price depends on project scope.</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {packages.map((pkg) => (
            <div key={pkg.title} className="glass-card p-6">
              <h3 className="text-xl font-semibold text-white">{pkg.title}</h3>
              <p className="mt-2 text-sm text-white/80">{pkg.tag}</p>
              <p className="mt-2 text-sm text-white/80">{pkg.starting}</p>
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
            <h2 className="section-title mt-4">Let's Build Your Website or App</h2>
            <p className="section-lead">
              Have an idea for a website, web app, or mobile application? Tell me what you want to
              build, and I will help you turn it into a real digital product.
            </p>
          </div>
          {state.succeeded ? (
            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white">Thanks for the details.</h3>
              <p className="mt-3 text-sm sm:text-base">
                Your project inquiry was sent. I will reply within 1-2 business days.
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
                Project Type
                <input
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[var(--accent)]"
                  name="projectType"
                  placeholder="Website, web app, mobile app"
                  required
                />
              </label>
              <label className="text-sm text-white/70">
                Budget Range
                <select
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[var(--accent)]"
                  name="budget"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  <option value="1500-5000">PHP 1,500-5,000</option>
                  <option value="5000-15000">PHP 5,000-15,000</option>
                  <option value="15000-30000">PHP 15,000-30,000</option>
                  <option value="30000-60000">PHP 30,000-60,000</option>
                  <option value="60000+">PHP 60,000+</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </label>
              <label className="text-sm text-white/70">
                Message
                <textarea
                  className="mt-2 min-h-[140px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[var(--accent)]"
                  name="message"
                  placeholder="Tell me about your idea"
                  required
                />
              </label>
              <ValidationError field="message" errors={state.errors} className="text-xs text-red-300" />
              <div className="flex flex-wrap gap-3">
                <button className="btn-primary" type="submit" disabled={state.submitting}>
                  {state.submitting ? 'Sending...' : 'Send Project Inquiry'}
                </button>
                <a
                  className="btn-ghost"
                  href="https://m.me/kyle.lamigo.18"
                  target="_blank"
                  rel="noreferrer"
                >
                  Message Me on Facebook
                </a>
              </div>
            </form>
          )}
        </div>
      </section>

      <footer className="section pt-0">
        <div className="flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <p>Gelo Digital Studio - Full-stack websites, web apps, and mobile apps.</p>
          <p>Based in your time zone. Remote projects welcome.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
