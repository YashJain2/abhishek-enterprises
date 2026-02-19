import { useMemo, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIES } from '@/data/categories'
import { ALL_PRODUCTS, ALL_TAGS, ALL_BRANDS } from '@/data/products'
import type { ProductItemFull } from '@/data/products'
import styles from './Products.module.css'

const PER_PAGE = 9

type SortOption = 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc' | 'category'

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'name-asc', label: 'Name (A–Z)' },
  { value: 'name-desc', label: 'Name (Z–A)' },
  { value: 'price-asc', label: 'Price (low to high)' },
  { value: 'price-desc', label: 'Price (high to low)' },
  { value: 'category', label: 'Category' },
]

function getCategoryTitle(categoryId: string): string {
  return CATEGORIES.find((c) => c.id === categoryId)?.title ?? categoryId
}

export default function Products() {
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set())
  const [selectedBrand, setSelectedBrand] = useState<string>('')
  const [sortBy, setSortBy] = useState<SortOption>('category')
  const [page, setPage] = useState(1)

  const filteredAndSorted = useMemo(() => {
    let list: ProductItemFull[] = ALL_PRODUCTS

    if (selectedTags.size > 0) {
      list = list.filter((p) => p.tags.some((t) => selectedTags.has(t)))
    }
    if (selectedBrand) {
      list = list.filter((p) => p.brand === selectedBrand)
    }

    const sorted = [...list]
    switch (sortBy) {
      case 'name-asc':
        sorted.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'name-desc':
        sorted.sort((a, b) => b.name.localeCompare(a.name))
        break
      case 'price-asc':
        sorted.sort((a, b) => a.priceValue - b.priceValue)
        break
      case 'price-desc':
        sorted.sort((a, b) => b.priceValue - a.priceValue)
        break
      case 'category':
        sorted.sort((a, b) => {
          const cat = a.categoryId.localeCompare(b.categoryId)
          return cat !== 0 ? cat : a.name.localeCompare(b.name)
        })
        break
    }
    return sorted
  }, [selectedTags, selectedBrand, sortBy])

  const totalPages = Math.max(1, Math.ceil(filteredAndSorted.length / PER_PAGE))
  const paginated = useMemo(() => {
    const start = (page - 1) * PER_PAGE
    return filteredAndSorted.slice(start, start + PER_PAGE)
  }, [filteredAndSorted, page])

  useEffect(() => {
    setPage(1)
  }, [selectedTags, selectedBrand, sortBy])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      const next = new Set(prev)
      if (next.has(tag)) next.delete(tag)
      else next.add(tag)
      return next
    })
  }

  const clearFilters = () => {
    setSelectedTags(new Set())
    setSelectedBrand('')
  }

  const hasActiveFilters = selectedTags.size > 0 || selectedBrand !== ''

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Our products</h1>
          <p className={styles.subtitle}>
            Electrical solutions — filter by sub-category, brand, or sort to find what you need.
          </p>
        </header>

        <div className={styles.filtersCard}>
          <div className={styles.filtersRow}>
            <div className={styles.filterPair}>
              <label className={styles.filterPairLabel} htmlFor="brand-filter">Brand</label>
              <select
                id="brand-filter"
                className={styles.filterSelect}
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option value="">All brands</option>
                {ALL_BRANDS.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
            <div className={styles.filterPair}>
              <label className={styles.filterPairLabel} htmlFor="sort-filter">Sort by</label>
              <select
                id="sort-filter"
                className={styles.filterSelect}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <span className={styles.resultCount}>
              {filteredAndSorted.length} product{filteredAndSorted.length !== 1 ? 's' : ''}
            </span>
            {hasActiveFilters && (
              <button type="button" className={styles.clearBtn} onClick={clearFilters}>
                Clear filters
              </button>
            )}
          </div>
          <p className={styles.priceDisclaimer}>
            * Prices may vary and are tentative based on quantity purchased.
          </p>
        </div>

        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarSection}>
              <span className={styles.filterLabel}>Sub-category</span>
              <div className={styles.tags}>
                {ALL_TAGS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className={selectedTags.has(tag) ? `${styles.tag} ${styles.tagActive}` : styles.tag}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className={styles.main}>
            {totalPages > 1 && (
              <p className={styles.pageInfo}>
                Page {page} of {totalPages}
              </p>
            )}

            {filteredAndSorted.length === 0 ? (
              <p className={styles.empty}>No products match the current filters. Try clearing filters.</p>
            ) : (
              <>
                <div className={styles.grid}>
                  {paginated.map((product) => (
                    <div key={product.id} className={styles.card}>
                      {product.image && (
                        <div className={styles.cardImageWrap}>
                          <img src={product.image} alt={product.name} className={styles.cardImage} loading="lazy" />
                        </div>
                      )}
                      <div className={styles.cardBody}>
                        <div className={styles.cardHeader}>
                          <span className={styles.categoryBadge}>{getCategoryTitle(product.categoryId)}</span>
                          <span className={styles.brandBadge}>{product.brand}</span>
                        </div>
                        <h2 className={styles.cardTitle}>{product.name}</h2>
                      <p className={styles.cardInfo}>{product.info}</p>
                      <div className={styles.cardTags}>
                        {product.tags.map((t) => (
                          <span key={t} className={styles.cardTag}>
                            {t}
                          </span>
                        ))}
                      </div>
                      <p className={styles.cardPrice}>{product.price}</p>
                      <Link to={`/products/${product.categoryId}`} className={styles.cardLink}>
                          View in {getCategoryTitle(product.categoryId)} →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {totalPages > 1 && (
                  <nav className={styles.pagination} aria-label="Product pagination">
                    <button
                      type="button"
                      className={styles.pageBtn}
                      disabled={page <= 1}
                      onClick={() => setPage((p) => p - 1)}
                      aria-label="Previous page"
                    >
                      ← Previous
                    </button>
                    <span className={styles.pageNumbers}>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                        <button
                          key={n}
                          type="button"
                          className={page === n ? `${styles.pageBtn} ${styles.pageBtnActive}` : styles.pageBtn}
                          onClick={() => setPage(n)}
                          aria-label={`Page ${n}`}
                          aria-current={page === n ? 'page' : undefined}
                        >
                          {n}
                        </button>
                      ))}
                    </span>
                    <button
                      type="button"
                      className={styles.pageBtn}
                      disabled={page >= totalPages}
                      onClick={() => setPage((p) => p + 1)}
                      aria-label="Next page"
                    >
                      Next →
                    </button>
                  </nav>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
