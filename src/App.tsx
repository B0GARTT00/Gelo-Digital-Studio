import { useForm, ValidationError } from '@formspree/react'
import acadexPreview from '../acadex.png'
import eargasmPreview from '../eargasm.png'
import fleetPreview from '../fleet.png'
import leakPreview from '../leak.png'
import smartBuyPreview from '../smart buy.png'
import stridePreview from '../stride.png'

const projects = [
  { title: 'LeakDetection', year: '2025', category: 'Mobile product', description: 'A field-ready reporting app for Davao City Water District, designed around clear utility workflows.', stack: 'React Native · Mobile UI', link: 'https://github.com/abllenos/LeakDetectionV1', image: leakPreview, featured: true },
  { title: 'Fleettrack', year: '2025', category: 'Web application', description: 'A fleet management dashboard built around data, operations, and useful admin workflows.', stack: 'Laravel · PHP', link: 'https://github.com/B0GARTT00/fleettrack', image: fleetPreview },
  { title: 'Smart Buy', year: '2024', category: 'Mobile product', description: 'A grocery companion that brings budgeting and list-making into one considered flow.', stack: 'React Native · MobX', link: 'https://github.com/B0GARTT00/Smart-Buy', image: smartBuyPreview },
  { title: 'AcadexV3', year: '2024', category: 'Capstone platform', description: 'A collaborative academic platform created with classmates at Brokenshire College.', stack: 'Web system · Team project', link: 'https://github.com/xaviworks/AcadexV3', image: acadexPreview },
  { title: 'Eargasm', year: '2024', category: 'Mobile concept', description: 'An audio-focused app exploration with an emphasis on simple, fluid mobile navigation.', stack: 'React Native · JavaScript', link: 'https://github.com/B0GARTT00/Eargasm', image: eargasmPreview },
  { title: 'Stride Quest', year: '2024', category: 'Fitness app', description: 'A fitness app with progress tracking, workout flows, achievements, and profile views.', stack: 'Mobile UI · Product flows', link: 'https://github.com/B0GARTT00/StrideQuest-V2', image: stridePreview },
]
const skills = ['React', 'React Native', 'TypeScript', 'Laravel', 'PHP', 'MySQL', 'Firebase', 'UI implementation']
function Arrow() { return <span aria-hidden="true">↗</span> }

function App() {
  const [state, handleSubmit] = useForm('xykvwwpw')
  const featured = projects.find((project) => project.featured)!
  return <main>
    <nav className="topbar" aria-label="Main navigation"><a className="wordmark" href="#top">KYLE LAMIGO<span>.</span></a><div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div></nav>
    <section className="hero" id="top"><p className="eyebrow">Independent developer · Philippines</p><h1>I make digital<br /><em>products</em> feel considered.</h1><div className="hero-bottom"><p>I’m Kyle — a full-stack developer focused on clear interfaces, practical product thinking, and web and mobile experiences that work beautifully.</p><a className="text-link" href="#work">Selected work <Arrow /></a></div></section>
    <section className="work-section" id="work"><div className="section-heading"><p className="eyebrow">01 / Selected work</p><p className="muted">A growing collection of web and mobile products, made with attention to the details people actually use.</p></div>
      <a className="featured-work" href={featured.link} target="_blank" rel="noreferrer"><div className="featured-image"><img src={featured.image} alt={`${featured.title} app preview`} /></div><div className="featured-copy"><div><span>{featured.category}</span><span>{featured.year}</span></div><h2>{featured.title} <Arrow /></h2><p>{featured.description}</p><small>{featured.stack}</small></div></a>
      <div className="project-grid">{projects.filter((project) => !project.featured).map((project) => <a className="project" href={project.link} target="_blank" rel="noreferrer" key={project.title}><div className="project-image"><img src={project.image} alt={`${project.title} preview`} loading="lazy" /></div><div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div><h3>{project.title} <Arrow /></h3><p>{project.description}</p><small>{project.stack}</small></a>)}</div>
    </section>
    <section className="about-section" id="about"><p className="eyebrow">02 / About</p><div className="about-grid"><h2>Useful, elegant,<br />and built to last.</h2><div><p className="about-intro">I enjoy turning an idea into something people can navigate without thinking twice. My work sits between thoughtful interface design and the engineering that makes it reliable.</p><p className="muted">I’m especially drawn to frontend, full-stack, and mobile development roles where I can keep learning, contribute to a good team, and ship work that has a real purpose.</p><div className="skill-list" aria-label="Core skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div></div></section>
    <section className="contact-section" id="contact"><p className="eyebrow">03 / Contact</p><div className="contact-grid"><div><h2>Have something<br /><em>in mind?</em></h2><p className="muted">I’m open to frontend, full-stack, and mobile opportunities. Let’s talk about what you’re building.</p><div className="socials"><a href="https://github.com/B0GARTT00" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="https://www.facebook.com/kyle.lamigo.18" target="_blank" rel="noreferrer">Facebook <Arrow /></a></div></div>
      {state.succeeded ? <div className="success-message"><p className="eyebrow">Message sent</p><h3>Thank you.</h3><p>I’ll get back to you as soon as I can.</p></div> : <form onSubmit={handleSubmit}><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label><ValidationError field="email" errors={state.errors} className="form-error" /><label>Message<textarea name="message" required placeholder="Tell me a little about the opportunity" /></label><ValidationError field="message" errors={state.errors} className="form-error" /><button type="submit" disabled={state.submitting}>{state.submitting ? 'Sending…' : <>Send a message <Arrow /></>}</button></form>}</div></section>
    <footer><span>© 2026 Kyle Lamigo</span><span>Designed and developed with care</span></footer>
  </main>
}
export default App
