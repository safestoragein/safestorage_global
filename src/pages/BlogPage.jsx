import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, User, ChevronRight, TrendingUp, BookOpen, Star, ArrowUpRight, Tag, Search, Filter } from 'lucide-react'
import { Link } from 'react-router-dom'
import { blogPosts, blogCategories, getFeaturedPosts, getPostsByCategory, getLatestPosts } from '../data/blogData'
import './BlogPage.css'

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  const featuredPosts = getFeaturedPosts()
  const latestPosts = getLatestPosts(3)
  
  const filteredPosts = getPostsByCategory(selectedCategory).filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Storage Insights & Tips
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Expert advice, industry insights, and practical tips for your storage needs
          </motion.p>

          {/* Search and Filter Controls */}
          <motion.div 
            className="blog-controls"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="search-wrapper">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Articles Section */}
      {featuredPosts.length > 0 && (
        <div className="featured-articles-section">
          <div className="container">
            <motion.div 
              className="featured-header"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="featured-title-wrapper">
                <span className="featured-badge">
                  <Star size={16} />
                  Editor's Choice
                </span>
                <h2 className="featured-title">Featured Storage Insights</h2>
                <p className="featured-subtitle">Expert tips and insights for your storage needs</p>
              </div>
            </motion.div>
            
            <div className="featured-articles-grid">
              {featuredPosts.map((post, index) => (
                <motion.article 
                  key={post.id}
                  className={`featured-article-card ${index === 0 ? 'main-featured' : 'secondary-featured'}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -5 }}
                >
                  <Link to={`/blog/${post.slug}`} className="featured-article-link">
                    <div className="featured-image-container">
                      <img src={post.image} alt={post.title} className="featured-article-image" />
                      <div className="featured-overlay">
                        <div className="featured-category-badge">{post.category}</div>
                        <div className="featured-read-time">
                          <Clock size={14} />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <div className="featured-article-content">
                      <div className="featured-meta">
                        <span className="featured-author">
                          <User size={14} />
                          {post.author}
                        </span>
                        <span className="featured-date">
                          <Calendar size={14} />
                          {formatDate(post.publishDate)}
                        </span>
                      </div>
                      
                      <h3 className="featured-article-title">{post.title}</h3>
                      <p className="featured-article-excerpt">{post.excerpt}</p>
                      
                      <motion.div 
                        className="featured-read-more"
                        whileHover={{ x: 5 }}
                      >
                        <span>Read Full Article</span>
                        <ArrowUpRight size={18} />
                      </motion.div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Latest Posts Section */}
      <div className="blog-trending-section">
        <div className="container">
          <motion.div 
            className="section-header-modern"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-title-wrapper">
              <TrendingUp size={24} className="section-icon" />
              <h2>Latest Articles</h2>
            </div>
            <Link to="#" className="view-all-link">
              View All <ChevronRight size={18} />
            </Link>
          </motion.div>

          <div className="trending-grid">
            {latestPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="trending-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link to={`/blog/${post.slug}`} className="trending-link">
                  <div className="trending-number bg-gradient-to-br from-orange-500 to-red-600">
                    {index + 1}
                  </div>
                  <div className="trending-content">
                    <span className="trending-category">{post.category}</span>
                    <h3>{post.title}</h3>
                    <div className="trending-meta">
                      <span>{post.readTime}</span>
                      <ChevronRight size={16} className="trending-arrow" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="blog-filter-section">
        <div className="container">
          <div className="filter-wrapper">
            {blogCategories.map((category) => (
              <motion.button
                key={category}
                className={`filter-pill ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
                <span className="filter-count">
                  {getPostsByCategory(category).length}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Blog Grid */}
      <div className="blog-main-section">
        <div className="container">
          <div className="posts-header">
            <h2 className="section-title">
              {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
            </h2>
            <p className="posts-count">{filteredPosts.length} articles found</p>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="no-posts">
              <h3>No articles found</h3>
              <p>Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="blog-modern-grid">
              {filteredPosts.map((post, index) => (
                <motion.article 
                  key={post.id}
                  className="blog-modern-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                >
                  <Link to={`/blog/${post.slug}`} className="card-link">
                    <div className="card-header-gradient bg-gradient-to-br from-orange-500 to-red-600">
                      <img src={post.image} alt={post.title} className="card-image" />
                      <span className="card-read-time">{post.readTime}</span>
                    </div>
                    
                    <div className="card-body">
                      <div className="card-tags">
                        <Tag size={14} />
                        <span>{post.category}</span>
                      </div>
                      
                      <h3 className="card-title">{post.title}</h3>
                      <p className="card-excerpt">{post.excerpt}</p>
                      
                      <div className="card-footer">
                        <div className="card-author">
                          <div className="mini-avatar">
                            {post.author.charAt(0)}
                          </div>
                          <div className="author-details">
                            <p className="author-name">{post.author}</p>
                            <p className="author-date">{formatDate(post.publishDate)}</p>
                          </div>
                        </div>
                        
                        <motion.div 
                          className="read-more-link"
                          whileHover={{ x: 5 }}
                        >
                          <ArrowUpRight size={18} />
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}

          {/* Load More */}
          <motion.div 
            className="load-more-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button 
              className="load-more-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Articles
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="blog-cta-section">
        <div className="container">
          <motion.div 
            className="cta-modern-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="cta-icon-wrapper">
              <BookOpen size={40} />
            </div>
            <div className="cta-content">
              <h3>Never Miss an Update</h3>
              <p>Get the latest storage tips and exclusive offers delivered to your inbox</p>
            </div>
            <form className="cta-form">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="cta-input"
              />
              <motion.button 
                type="submit"
                className="cta-submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage