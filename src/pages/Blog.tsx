import { Link } from 'react-router-dom'
import { BLOG_POSTS } from '@/data/blog'
import styles from './Blog.module.css'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export default function Blog() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Blog</h1>
          <p className={styles.subtitle}>
            Insights on electrical solutions, panel manufacturing, and industrial automation.
          </p>
        </header>
        <ul className={styles.list}>
          {BLOG_POSTS.map((post) => (
            <li key={post.slug}>
              <article className={styles.card}>
                <Link to={`/blog/${post.slug}`} className={styles.imageWrap}>
                  {post.image && (
                    <img src={post.image} alt="" loading="lazy" className={styles.image} />
                  )}
                </Link>
                <div className={styles.body}>
                  <time className={styles.date} dateTime={post.date}>
                    {formatDate(post.date)}
                  </time>
                  <h2 className={styles.cardTitle}>
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className={styles.readMore}>
                    Read more →
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
