import { Link, useParams } from 'react-router-dom'
import { CATEGORIES } from '@/data/categories'
import { PRODUCTS_BY_CATEGORY } from '@/data/products'
import styles from './ProductCategory.module.css'

export default function ProductCategory() {
  const { categoryId } = useParams<{ categoryId: string }>()
  const category = CATEGORIES.find((c) => c.id === categoryId)
  const products = categoryId ? PRODUCTS_BY_CATEGORY[categoryId] ?? [] : []

  if (!category) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <p>Category not found.</p>
          <Link to="/products">← Back to products</Link>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link to="/products" className={styles.back}>
          ← All products
        </Link>
        <div className={styles.card}>
          <span className={styles.icon}>{category.icon}</span>
          <h1 className={styles.title}>{category.title}</h1>
          <p className={styles.desc}>{category.description}</p>

          {products.length > 0 && (
            <div className={styles.productList}>
              <div className={styles.productListHeader}>
                <span>Product</span>
                <span>Details</span>
                <span>Price</span>
              </div>
              <ul className={styles.productRows}>
                {products.map((p) => (
                  <li key={p.id} className={styles.productRow}>
                    <span className={styles.productName}>{p.name}</span>
                    <span className={styles.productInfo}>{p.info}</span>
                    <span className={styles.productPrice}>{p.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className={styles.ctaText}>
            For rates and availability, please get in touch.
          </p>
          <Link to="/contact" className={styles.cta}>
            Contact us
          </Link>
        </div>
      </div>
    </div>
  )
}
