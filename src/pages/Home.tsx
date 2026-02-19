import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CATEGORIES } from '@/data/categories'
import { PROJECTS, TESTIMONIALS } from '@/data/projectsAndTestimonials'
import styles from './Home.module.css'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash])

  return (
    <>
      <section className={styles.hero} id="hero">
        <div className={styles.heroBg} aria-hidden />
        <div className={styles.heroContent}>
          <p className={styles.heroLabel}>Electrical Solutions</p>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroBrand}>Abhishek Enterprises</span>
          </h1>
          <p className={styles.heroSub}>
            Switches · LED Lights · Multimeters · Plugs · Wires · Heavy Duty Industrial Electronics
          </p>
          <p className={styles.heroTagline}>
            Deals in Panel manufacturing components and industrial automation products.
          </p>
          <div className={styles.heroCta}>
            <Link to="/contact" className={styles.ctaPrimary}>
              Get in touch
            </Link>
            <a href="#categories" className={styles.ctaSecondary}>
              View products
            </a>
          </div>
        </div>
      </section>

      <section className={styles.section} id="gallery">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What we do</h2>
          <p className={styles.sectionSub}>
            Panel manufacturing components, industrial automation & electrical solutions
          </p>
          <div className={styles.gallery}>
            <div className={styles.galleryItem}>
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                alt="Electrical control panel"
                loading="lazy"
              />
              <span>Control panels & manufacturing</span>
            </div>
            <div className={styles.galleryItem}>
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
                alt="Industrial automation"
                loading="lazy"
              />
              <span>Industrial automation</span>
            </div>
            <div className={styles.galleryItem}>
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                alt="Electrical wiring and cables"
                loading="lazy"
              />
              <span>Wires, cables & components</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="about">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>About us</h2>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutCard}>
              <span className={styles.aboutIcon}>🏢</span>
              <h3>Brand presence</h3>
              <p>
                We are your trusted partner for electrical solutions, serving New Industrial Township, Faridabad and beyond with quality products and reliable supply.
              </p>
            </div>
            <div className={styles.aboutCard}>
              <span className={styles.aboutIcon}>📦</span>
              <h3>Wide range</h3>
              <p>
                From switches and LED lights to multimeters, plugs, wires, panel manufacturing components and industrial automation products — we stock what you need.
              </p>
            </div>
            <div className={styles.aboutCard}>
              <span className={styles.aboutIcon}>🤝</span>
              <h3>B2B focus</h3>
              <p>
                Dedicated to contractors, retailers and businesses. Competitive pricing and consistent availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="categories">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Product categories</h2>
          <p className={styles.sectionSub}>
            Quality electrical products for every application
          </p>
          <div className={styles.categoryGrid}>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/products/${cat.id}`}
                className={styles.categoryCard}
              >
                <span className={styles.categoryIcon}>{cat.icon}</span>
                <h3 className={styles.categoryTitle}>{cat.title}</h3>
                <p className={styles.categoryDesc}>{cat.description}</p>
              </Link>
            ))}
          </div>
          <div className={styles.ctaWrap}>
            <Link to="/products" className={styles.ctaLink}>
              View all products →
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section} id="projects">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Previous projects</h2>
          <p className={styles.sectionSub}>
            Some of the electrical and automation work we have supported
          </p>
          <div className={styles.projectsGrid}>
            {PROJECTS.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.projectImageWrap}>
                  <img src={project.image} alt={project.title} loading="lazy" />
                  {project.tags && project.tags.length > 0 && (
                    <div className={styles.projectTags}>
                      {project.tags.map((tag) => (
                        <span key={tag} className={styles.projectTag}>{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className={styles.projectBody}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="testimonials">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What our clients say</h2>
          <p className={styles.sectionSub}>
            Testimonials from businesses we have worked with
          </p>
          <div className={styles.testimonialsGrid}>
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.id} className={styles.testimonialCard}>
                <p className={styles.testimonialQuote}>"{t.quote}"</p>
                <footer className={styles.testimonialFooter}>
                  <cite className={styles.testimonialAuthor}>{t.author}</cite>
                  <span className={styles.testimonialRole}>{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactCard}>
            <h2 className={styles.contactTitle}>Ready to work with us?</h2>
            <p className={styles.contactText}>
              Contact us for enquiries, bulk orders and product availability. We are located at 1E/17 BP NIT 1-2 ChowK Block 1, New Industrial Township, Faridabad 121001.
            </p>
            <div className={styles.contactActions}>
              <Link to="/contact" className={styles.ctaPrimary}>
                Contact us
              </Link>
              <a
                href="https://maps.google.com/?q=1E%2F17+BP+NIT+1-2+ChowK+Block+1%2C+New+Industrial+Twp+1%2C+New+Industrial+Township%2C+Faridabad%2C+Haryana+121001"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaSecondary}
              >
                View on map
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
