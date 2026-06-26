import profileImage from '../assets/me.jpeg';
import resume from '../data/resume.json';
import './PortfolioHome.css';

const sectionList = [
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'awards', label: 'Awards' },
    { id: 'community', label: 'Community' },
    { id: 'contact', label: 'Contact' }
];

const PortfolioHome = () => {
    return (
        <div className="portfolio-page">
            <div className="top-nav">
                <div className="brand">Rachel Cynthia</div>
                <nav className="nav-links">
                    {sectionList.map((section) => (
                        <a key={section.id} href={`#${section.id}`}>
                            {section.label}
                        </a>
                    ))}
                </nav>
            </div>

            <header className="hero">
                <div className="hero-copy">
                    <p className="hero-tag">Hello, I’m</p>
                    <h1 className="hero-title">{resume.name}</h1>
                    <p className="hero-headline">{resume.headline}</p>

                    <div className="hero-meta-list">
                        <div className="meta-card">
                            <span className="meta-label">Location</span>
                            <span>{resume.location}</span>
                        </div>
                        <div className="meta-card">
                            <span className="meta-label">Email</span>
                            <a href={`mailto:${resume.email}`}>{resume.email}</a>
                        </div>
                        <div className="meta-card">
                            <span className="meta-label">Phone</span>
                            <span>{resume.phone}</span>
                        </div>
                    </div>

                    <p className="hero-text">
                        {resume.summary} I enjoy turning complex problems into clear, usable products and building software that feels reliable and thoughtful.
                    </p>
                </div>

                <div className="hero-image-wrap">
                    <img src={profileImage} alt="Rachel Cynthia" className="hero-image" />
                </div>
            </header>

            <section id="experience" className="section">
                <h2>Experience</h2>
                <div className="section-grid">
                    {resume.experience.map((item) => (
                        <article key={`${item.company}-${item.role}`} className="job-card">
                            <div className="job-header">
                                <div>
                                    <h3 className="job-title">{item.role}</h3>
                                    <p className="job-company">{item.company} • {item.location}</p>
                                </div>
                                <div className="job-meta">{item.dateRange}</div>
                            </div>
                            <div className="job-meta">Technologies: {item.technologies.join(', ')}</div>
                            <ul className="job-list">
                                {item.highlights.map((highlight, index) => (
                                    <li key={index}>{highlight}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section id="education" className="section">
                <h2>Education</h2>
                <div className="section-grid">
                    {resume.education.map((item) => (
                        <article key={`${item.institution}-${item.dateRange}`} className="job-card">
                            <h3 className="job-title">{item.degree}</h3>
                            <p className="job-company">{item.institution}</p>
                            <div className="job-meta">{item.dateRange}</div>
                        </article>
                    ))}
                </div>
            </section>

            <section id="skills" className="section">
                <h2>Skills</h2>
                <div>
                    {resume.skills.map((skill) => (
                        <span key={skill} className="skill-pill">{skill}</span>
                    ))}
                </div>
            </section>

            <section id="awards" className="section">
                <h2>Awards & Certifications</h2>
                <ul>
                    {resume.awards.map((award, index) => (
                        <li key={index}>{award}</li>
                    ))}
                </ul>
            </section>

            <section id="community" className="section">
                <h2>Community</h2>
                <ul>
                    {resume.community.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>

            <section id="contact" className="section">
                <h2>Contact</h2>
                <p>Feel free to reach out via email or any of the links below.</p>
                <div className="section-grid">
                    {resume.links.map((link) => (
                        <div key={link.label} className="job-card">
                            <h3 className="job-title">{link.label}</h3>
                            <p>
                                <a href={link.url} target="_blank" rel="noreferrer">
                                    {link.url}
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PortfolioHome;
