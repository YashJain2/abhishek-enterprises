import { Link, useParams } from 'react-router-dom'
import { BLOG_POSTS } from '@/data/blog'
import styles from './BlogPost.module.css'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <p>Post not found.</p>
          <Link to="/blog">← Back to blog</Link>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <header className={styles.header}>
          <Link to="/blog" className={styles.back}>
            ← Blog
          </Link>
          <time className={styles.date} dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.author}>{post.author}</p>
        </header>
        {post.image && (
          <div className={styles.imageWrap}>
            <img src={post.image} alt="" className={styles.image} />
          </div>
        )}
        <div className={styles.content}>
          <p>{post.content}</p>
        </div>
      </article>
    </div>
  )
}
