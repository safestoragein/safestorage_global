import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, User, ChevronRight, TrendingUp, BookOpen, Star, ArrowUpRight, Tag, Search, Filter } from 'lucide-react'
import { Link } from 'react-router-dom'
import blogService from '../services/blogService'
import SEOHead from '../components/SEOHead'
import UAEHeader from '../components/uae/UAEHeader'
import UAEFooter from '../components/uae/UAEFooter'
import './BlogPage.css'

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogData = await blogService.getAllBlogs()
        const formattedBlogs = blogData.map(blog => blogService.formatBlog(blog))
        setBlogs(formattedBlogs)
      } catch (error) {
        console.error('Error loading blogs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  const filteredBlogs = blogs.filter(blog => {
    const searchMatch = !searchTerm || 
      blog.meta_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.meta_description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.tags.toLowerCase().includes(searchTerm.toLowerCase())
    return searchMatch
  })

  const featuredBlogs = blogs.slice(0, 3)
  const latestBlogs = blogs.slice(0, 3)

  return (
    <div className="uae-page">
      <SEOHead 
        title="SafeStorage UAE Blog - Expert Storage Tips & Insights"
        description="Expert storage tips, insights and guides for Dubai residents and businesses. Learn from SafeStorage's storage professionals and make informed decisions."
        canonical="/uae/blog"
        keywords="storage tips, storage guides, Dubai storage, storage advice, self storage blog"
      />
      <UAEHeader />
      
      {/* Hero Section */}
      <div className="blog-hero-section" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '80px 0 60px',
        color: 'white'
      }}>
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
          <motion.div
            style={{textAlign: 'center'}}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: '700',
              marginBottom: '20px',
              lineHeight: '1.1'
            }}>
              Storage Insights & Tips
            </h1>
            <p style={{
              fontSize: '1.25rem',
              opacity: 0.9,
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px'
            }}>
              Expert advice, industry insights, and practical tips for your storage needs
            </p>
            
            <motion.div
              style={{
                maxWidth: '500px',
                margin: '0 auto',
                position: 'relative'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '50px',
                padding: '8px 20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <Search size={20} style={{marginRight: '12px', color: 'rgba(255, 255, 255, 0.7)'}} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    flex: 1,
                    background: 'none',
                    border: 'none',
                    outline: 'none',
                    color: 'white',
                    fontSize: '16px',
                    padding: '12px 0'
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Featured Articles Section */}
      {featuredBlogs.length > 0 && (
        <div className="featured-articles-section" style={{paddingTop: '40px'}}>
          <div className="container">
            <motion.div 
              className="featured-header"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="featured-title-wrapper" style={{textAlign: 'center', position: 'relative'}}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '20px',
                  boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)'
                }}>
                  <Star size={16} style={{marginRight: '8px'}} />
                  Editor's Choice
                </div>
                <h2 className="featured-title" style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '16px'
                }}>Featured Storage Insights</h2>
                <p className="featured-subtitle" style={{
                  fontSize: '1.2rem',
                  color: '#64748b',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}>Expert tips and insights for your storage needs</p>
              </div>
            </motion.div>
            
            <div className="featured-articles-grid">
              {featuredBlogs.map((blog, index) => (
                <motion.article 
                  key={blog.blog_id}
                  className={`featured-article-card ${index === 0 ? 'main-featured' : 'secondary-featured'}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -5 }}
                >
                  <Link to={`/uae/blog/${blog.slug}`} className="featured-article-link">
                    <div className="featured-image-container">
                      <img src={blog.extraData.featured_image} alt={blog.meta_title} className="featured-article-image" />
                      <div className="featured-overlay">
                        <div className="featured-category-badge">{blog.extraData.category}</div>
                        <div className="featured-read-time">
                          <Clock size={14} />
                          {blog.extraData.read_time}
                        </div>
                      </div>
                    </div>
                    
                    <div className="featured-article-content">
                      <div className="featured-meta">
                        <span className="featured-author">
                          <User size={14} />
                          {blog.extraData.author}
                        </span>
                        <span className="featured-date">
                          <Calendar size={14} />
                          {blog.formattedDate}
                        </span>
                      </div>
                      
                      <h3 className="featured-article-title">{blog.meta_title}</h3>
                      <p className="featured-article-excerpt">{blog.meta_description}</p>
                      
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
            {latestBlogs.map((blog, index) => (
              <motion.div
                key={blog.blog_id}
                className="trending-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link to={`/uae/blog/${blog.slug}`} className="trending-link">
                  <div className="trending-number bg-gradient-to-br from-orange-500 to-red-600">
                    {index + 1}
                  </div>
                  <div className="trending-content">
                    <span className="trending-category">{blog.extraData.category}</span>
                    <h3>{blog.meta_title}</h3>
                    <div className="trending-meta">
                      <span>{blog.extraData.read_time}</span>
                      <ChevronRight size={16} className="trending-arrow" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      {/* Main Blog Grid */}
      <div className="blog-main-section">
        <div className="container">
          <div className="posts-header">
            <h2 className="section-title">All Articles</h2>
            <p className="posts-count">{filteredBlogs.length} articles found</p>
          </div>

          {loading ? (
            <div className="loading-state">
              <h3>Loading articles...</h3>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="no-posts">
              <h3>No articles found</h3>
              <p>Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="blog-modern-grid">
              {filteredBlogs.map((blog, index) => (
                <motion.article 
                  key={blog.blog_id}
                  className="blog-modern-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                >
                  <Link to={`/uae/blog/${blog.slug}`} className="card-link">
                    <div className="card-header-gradient bg-gradient-to-br from-orange-500 to-red-600">
                      <img src={blog.extraData.featured_image} alt={blog.meta_title} className="card-image" />
                      <span className="card-read-time">{blog.extraData.read_time}</span>
                    </div>
                    
                    <div className="card-body">
                      <div className="card-tags">
                        <Tag size={14} />
                        <span>{blog.extraData.category}</span>
                      </div>
                      
                      <h3 className="card-title">{blog.meta_title}</h3>
                      <p className="card-excerpt">{blog.meta_description}</p>
                      
                      <div className="card-footer">
                        <div className="card-author">
                          <div className="mini-avatar">
                            {blog.extraData.author.charAt(0)}
                          </div>
                          <div className="author-details">
                            <p className="author-name">{blog.extraData.author}</p>
                            <p className="author-date">{blog.formattedDate}</p>
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

      <UAEFooter />
    </div>
  )
}

export default BlogPage