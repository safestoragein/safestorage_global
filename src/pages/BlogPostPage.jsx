import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, BookOpen, ChevronRight } from 'lucide-react'
import blogService from '../services/blogService'
import SEOHead from '../components/SEOHead'
import UAEHeader from '../components/uae/UAEHeader'
import UAEFooter from '../components/uae/UAEFooter'
import './BlogPostPage.css'

const BlogPostPage = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const blogData = await blogService.getBlogBySlug(slug)
        if (blogData) {
          const formattedPost = blogService.formatBlog(blogData)
          setPost(formattedPost)
          
          // Get related posts (exclude current post)
          const allBlogs = await blogService.getAllBlogs()
          const related = allBlogs
            .filter(blog => blog.blog_id !== blogData.blog_id)
            .slice(0, 3)
            .map(blog => blogService.formatBlog(blog))
          setRelatedPosts(related)
        }
      } catch (error) {
        console.error('Error loading blog post:', error)
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchBlogData()
    }
  }, [slug])

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  if (loading) {
    return (
      <div className="uae-page">
        <UAEHeader />
        <div className="container">
          <div className="loading-state">
            <h1>Loading article...</h1>
          </div>
        </div>
        <UAEFooter />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="uae-page">
        <UAEHeader />
        <div className="container">
          <div className="not-found">
            <h1>Blog post not found</h1>
            <p>The article you're looking for doesn't exist or has been moved.</p>
            <Link to="/uae/blog" className="back-to-blog">
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
          </div>
        </div>
        <UAEFooter />
      </div>
    )
  }

  return (
    <div className="uae-page">
      <SEOHead 
        title={post.meta_title}
        description={post.meta_description}
        canonical={`/uae/blog/${post.slug}`}
        keywords={post.tags}
      />
      <UAEHeader />
      <div className="blog-post-page">
      {/* Hero Section */}
      <div className="blog-hero-section" style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
        padding: '100px 0 60px',
        color: 'white'
      }}>
        <div className="container" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
          <Link to="/uae/blog" className="back-link" style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: 'rgba(255, 255, 255, 0.8)',
            textDecoration: 'none',
            marginBottom: '30px',
            fontSize: '16px'
          }}>
            <ArrowLeft size={20} style={{marginRight: '8px'}} />
            <span>Back to Blog</span>
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px'}}>
              <span style={{
                background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
                padding: '8px 16px',
                borderRadius: '25px',
                fontSize: '14px',
                fontWeight: '600'
              }}>{post.extraData.category}</span>
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', opacity: 0.8}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                  <Clock size={16} />
                  {post.extraData.read_time}
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                  <Calendar size={16} />
                  {post.formattedDate}
                </span>
              </div>
            </div>
            
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '20px'
            }}>{post.meta_title}</h1>
            <p style={{
              fontSize: '1.25rem',
              opacity: 0.9,
              marginBottom: '30px',
              lineHeight: '1.6'
            }}>{post.meta_description}</p>
            
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ff6b35, #f7931e)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: '700'
                }}>
                  {post.extraData.author?.charAt(0) || 'S'}
                </div>
                <div>
                  <p style={{fontWeight: '600', marginBottom: '2px'}}>{post.extraData.author || 'SafeStorage Team'}</p>
                  <p style={{opacity: 0.7, fontSize: '14px'}}>Published on {post.formattedDate}</p>
                </div>
              </div>
              
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                padding: '12px 20px',
                borderRadius: '25px',
                cursor: 'pointer'
              }}>
                <Share2 size={18} />
                Share
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Image */}
      <motion.div 
        className="post-hero-image"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container">
          <div className="image-wrapper">
            <img src={post.image} alt={post.title} />
            <div className="image-overlay">
              <div className="image-credit">
                Photo by SafeStorage Team
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="post-content-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="container">
          <div className="post-layout">
            {/* Main Content */}
            <article className="post-content">
              <div 
                className="post-body"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              <div className="post-tags-section">
                <h3>Tags</h3>
                <div className="post-tags">
                  {post.tags.split(',').map((tag, index) => (
                    <span key={index} className="post-tag">
                      <Tag size={14} />
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Section */}
              <div className="post-share-section">
                <h3>Share this article</h3>
                <div className="share-buttons">
                  <button className="share-btn twitter">Share on Twitter</button>
                  <button className="share-btn linkedin">Share on LinkedIn</button>
                  <button className="share-btn facebook">Share on Facebook</button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="post-sidebar">
              {/* Table of Contents */}
              <div className="sidebar-section">
                <h3>In this article</h3>
                <div className="table-of-contents">
                  <ul>
                    <li><a href="#section1">Why Self Storage is Essential in Dubai</a></li>
                    <li><a href="#section2">Choosing the Right Storage Unit Size</a></li>
                    <li><a href="#section3">Security Features to Look For</a></li>
                    <li><a href="#section4">Climate Control in Dubai's Heat</a></li>
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="sidebar-cta">
                <div className="cta-content">
                  <BookOpen size={32} />
                  <h3>Need Storage Solutions?</h3>
                  <p>Get a free quote and find the perfect storage unit for your needs.</p>
                  <Link to="/uae/get-quote" className="cta-button">
                    Get Free Quote
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </motion.div>

      {/* Related Posts */}
      <motion.section 
        className="related-posts-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="container">
          <h2 className="section-title">Related Articles</h2>
          <div className="related-posts-grid">
            {relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost.blog_id}
                className="related-post-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link to={`/uae/blog/${relatedPost.slug}`}>
                  <div className="related-post-image">
                    <img src={relatedPost.extraData.featured_image} alt={relatedPost.meta_title} />
                    <div className="related-post-overlay">
                      <span className="category">{relatedPost.extraData.category}</span>
                    </div>
                  </div>
                  <div className="related-post-content">
                    <h3>{relatedPost.meta_title}</h3>
                    <p>{relatedPost.meta_description}</p>
                    <div className="related-post-meta">
                      <span className="read-time">
                        <Clock size={14} />
                        {relatedPost.extraData.read_time}
                      </span>
                      <span className="author">
                        <User size={14} />
                        {relatedPost.extraData.author}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Newsletter CTA */}
      <motion.section 
        className="post-newsletter-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="container">
          <div className="newsletter-card">
            <div className="newsletter-content">
              <h2>Stay Updated with Storage Tips</h2>
              <p>Get the latest storage insights and exclusive offers delivered to your inbox.</p>
            </div>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                className="newsletter-input"
              />
              <button className="newsletter-button">
                Subscribe
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </motion.section>
      </div>
      <UAEFooter />
    </div>
  )
}

export default BlogPostPage