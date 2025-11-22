import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, Calendar, Clock, User, ChevronRight, TrendingUp, 
  Star, ArrowUpRight, Tag, Search, BookOpen, Sparkles 
} from 'lucide-react'
import { Link } from 'react-router-dom'
import UAEHeader from '../components/uae/UAEHeader'
import UAEFooter from '../components/uae/UAEFooter'
import { blogPosts, blogCategories, getFeaturedPosts, getPostsByCategory, getLatestPosts } from '../data/blogData'
import './UAEBlog.css'

const UAEBlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  const featuredPosts = getFeaturedPosts()
  const latestPosts = getLatestPosts(6)
  
  const filteredPosts = getPostsByCategory(selectedCategory).filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="uae-blog-page">
      <UAEHeader />
      
      {/* Hero Section */}
      <section className="uae-blog-hero">
        <div className="uae-blog-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/uae" className="uae-blog-breadcrumb">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
            
            <h1 className="uae-blog-title">
              Dubai Storage <span style={{color: 'var(--uae-primary)'}}>Insights</span>
            </h1>
            
            <p className="uae-blog-subtitle">
              Expert advice, industry insights, and practical storage tips for Dubai & UAE residents
            </p>
            
            <div className="uae-blog-search">
              <input
                type="text"
                placeholder="Search articles, tips, and guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="uae-search-input"
              />
              <button className="uae-search-btn">
                <Search size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="uae-featured-section">
        <div className="uae-section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="uae-section-badge">
              <Star size={16} />
              Editor's Choice
            </div>
            <h2 className="uae-section-title">Featured Articles</h2>
            <p className="uae-section-description">
              Handpicked insights and expert tips for your storage needs in Dubai
            </p>
          </motion.div>
        </div>

        <div className="uae-featured-grid">
          {featuredPosts.slice(0, 3).map((post, index) => (
            <motion.article
              key={post.id}
              className={`uae-featured-card ${index === 0 ? 'uae-featured-main' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Link to={`/uae/blog/${post.slug}`} className="uae-featured-link">
                <div className="uae-featured-image">
                  <img src={post.image} alt={post.title} className="uae-featured-img" />
                  <div className="uae-featured-overlay">
                    <div className="uae-category-tag">{post.category}</div>
                    <div className="uae-read-time">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                
                <div className="uae-featured-content">
                  <div className="uae-featured-meta">
                    <div className="uae-meta-item">
                      <User size={16} />
                      {post.author}
                    </div>
                    <div className="uae-meta-item">
                      <Calendar size={16} />
                      {formatDate(post.publishDate)}
                    </div>
                  </div>
                  
                  <h3 className="uae-featured-title">{post.title}</h3>
                  <p className="uae-featured-excerpt">{post.excerpt}</p>
                  
                  <div className="uae-read-more">
                    <span>Read Full Article</span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      <section className="uae-latest-section">
        <div className="uae-latest-header">
          <h2 className="uae-latest-title">
            <TrendingUp size={32} />
            Latest Articles
          </h2>
          <Link to="#" className="uae-view-all">
            <span>View All</span>
            <ChevronRight size={18} />
          </Link>
        </div>

        <div className="uae-articles-grid">
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="uae-article-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <Link to={`/uae/blog/${post.slug}`} className="uae-article-link">
                <div className="uae-article-image">
                  <img src={post.image} alt={post.title} className="uae-article-img" />
                  <div className="uae-featured-overlay">
                    <div className="uae-category-tag">{post.category}</div>
                    <div className="uae-read-time">
                      <Clock size={12} />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                
                <div className="uae-article-content">
                  <div className="uae-article-meta">
                    <span>{formatDate(post.publishDate)}</span>
                  </div>
                  
                  <h3 className="uae-article-title">{post.title}</h3>
                  <p className="uae-article-excerpt">{post.excerpt}</p>
                  
                  <div className="uae-article-footer">
                    <div className="uae-author-info">
                      <div className="uae-author-avatar">
                        {post.author.charAt(0)}
                      </div>
                      <span className="uae-author-name">{post.author}</span>
                    </div>
                    <div className="uae-article-arrow">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Categories Filter */}
      <section className="uae-filter-section">
        <div className="uae-filter-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="uae-filter-title">Browse by Category</h2>
            <div className="uae-filter-grid">
              {blogCategories.map((category) => (
                <motion.button
                  key={category}
                  className={`uae-filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Tag size={16} />
                  {category}
                  <span className="uae-filter-count">
                    {getPostsByCategory(category).length}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filtered Results */}
      {searchTerm || selectedCategory !== 'All' ? (
        <section className="uae-latest-section">
          <div className="uae-filter-container">
            <div className="uae-section-header" style={{marginBottom: '40px'}}>
              <h2 className="uae-section-title" style={{fontSize: '32px'}}>
                {selectedCategory === 'All' ? 'Search Results' : `${selectedCategory} Articles`}
              </h2>
              <p className="uae-section-description">
                {filteredPosts.length} articles found
              </p>
            </div>

            {filteredPosts.length === 0 ? (
              <div style={{textAlign: 'center', padding: '60px 0'}}>
                <h3 style={{fontSize: '24px', color: 'var(--uae-dark)', marginBottom: '12px'}}>
                  No articles found
                </h3>
                <p style={{color: 'var(--uae-gray)', fontSize: '16px'}}>
                  Try adjusting your search terms or browsing different categories
                </p>
              </div>
            ) : (
              <div className="uae-articles-grid">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="uae-article-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                  >
                    <Link to={`/uae/blog/${post.slug}`} className="uae-article-link">
                      <div className="uae-article-image">
                        <img src={post.image} alt={post.title} className="uae-article-img" />
                        <div className="uae-featured-overlay">
                          <div className="uae-category-tag">{post.category}</div>
                          <div className="uae-read-time">
                            <Clock size={12} />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                      
                      <div className="uae-article-content">
                        <div className="uae-article-meta">
                          <span>{formatDate(post.publishDate)}</span>
                        </div>
                        
                        <h3 className="uae-article-title">{post.title}</h3>
                        <p className="uae-article-excerpt">{post.excerpt}</p>
                        
                        <div className="uae-article-footer">
                          <div className="uae-author-info">
                            <div className="uae-author-avatar">
                              {post.author.charAt(0)}
                            </div>
                            <span className="uae-author-name">{post.author}</span>
                          </div>
                          <div className="uae-article-arrow">
                            <ArrowUpRight size={16} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>
      ) : null}

      {/* Newsletter CTA */}
      <section className="uae-newsletter-section">
        <div className="uae-newsletter-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
              <div style={{
                background: 'var(--uae-primary)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <BookOpen size={40} />
              </div>
            </div>
            
            <h2 className="uae-newsletter-title">Never Miss Dubai Storage Updates</h2>
            <p className="uae-newsletter-description">
              Get the latest storage tips, exclusive UAE offers, and expert insights delivered to your inbox
            </p>
            
            <form className="uae-newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="uae-newsletter-input"
              />
              <motion.button
                type="submit"
                className="uae-newsletter-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe Now
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
      
      <UAEFooter />
    </div>
  )
}

export default UAEBlogPage