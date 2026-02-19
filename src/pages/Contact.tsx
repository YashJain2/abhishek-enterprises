import { useState, FormEvent } from 'react'
import styles from './Contact.module.css'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeellova'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error('Something went wrong')
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch {
      setError('Failed to send. Please try again or contact us directly.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Contact us</h1>
          <p className={styles.subtitle}>
            Get in touch for enquiries, bulk orders and product availability.
          </p>
        </header>

        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <h2>Abhishek Enterprises</h2>
              <p className={styles.label}>Address</p>
              <p className={styles.address}>
                ABHISHEK ENTERPRISES<br />
                1E/17 BP NIT 1-2 ChowK Block 1, New Industrial Twp 1<br />
                New Industrial Township, Faridabad, Haryana 121001
              </p>
              <p className={styles.label}>Phone</p>
              <a href="tel:01294020669" className={styles.phone}>0129 402 0669</a>
              <p className={styles.label}>Business</p>
              <p>Electrical solutions — panel manufacturing components, industrial automation, switches, LED lights, multimeters, plugs, wires, heavy duty industrial electronics.</p>
            </div>
            <div className={styles.links}>
            <a
              href="https://maps.google.com/?q=1E%2F17+BP+NIT+1-2+ChowK+Block+1%2C+New+Industrial+Twp+1%2C+New+Industrial+Township%2C+Faridabad%2C+Haryana+121001"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              Open in Google Maps →
            </a>
          </div>
          </div>

          <div className={styles.formWrap}>
            {submitted ? (
              <div className={styles.success}>
                <p>Thank you for your message. We will get back to you soon.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.label}>
                  Name *
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={styles.input}
                  />
                </label>
                <label className={styles.label}>
                  Email *
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={styles.input}
                  />
                </label>
                <label className={styles.label}>
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className={styles.input}
                  />
                </label>
                <label className={styles.label}>
                  Message *
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your enquiry or order details..."
                    rows={4}
                    className={styles.textarea}
                  />
                </label>
                {error && <p className={styles.error}>{error}</p>}
                <button type="submit" className={styles.submit} disabled={loading}>
                  {loading ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
