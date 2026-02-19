import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <span className={styles.logoIcon}>AE</span>
            <span className={styles.name}>Abhishek Enterprises</span>
            <p className={styles.tagline}>
              Electrical solutions — panel manufacturing components, industrial automation, switches, LED lights, wires & plugs.
            </p>
          </div>
          <div className={styles.block}>
            <h3 className={styles.heading}>Quick links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/#about">About</Link></li>
              <li><Link to="/#categories">Products</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className={styles.block}>
            <h3 className={styles.heading}>Contact</h3>
            <div className={styles.addressWrap}>
              <span className={styles.icon} aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <p className={styles.address}>
                ABHISHEK ENTERPRISES<br />
                1E/17 BP NIT 1-2 ChowK Block 1, New Industrial Twp 1<br />
                New Industrial Township, Faridabad, Haryana 121001
              </p>
            </div>
            <p className={styles.phone}>
              <span className={styles.icon} aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <a href="tel:01294020669">0129 402 0669</a>
            </p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {CURRENT_YEAR} Abhishek Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
