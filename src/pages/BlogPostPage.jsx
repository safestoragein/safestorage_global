import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, BookOpen, ChevronRight } from 'lucide-react'
import { getPostBySlug, getLatestPosts } from '../data/blogData'
import './BlogPostPage.css'

const BlogPostPage = () => {
  const { slug } = useParams()
  const post = getPostBySlug(slug)
  const relatedPosts = getLatestPosts(3).filter(p => p.id !== post?.id)

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  if (!post) {
    return (
      <div className="page-container">
        <div className="container">
          <div className="not-found">
            <h1>Blog post not found</h1>
            <p>The article you're looking for doesn't exist or has been moved.</p>
            <Link to="/blog" className="back-to-blog">
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-post-page">
      {/* Header */}
      <div className="post-header">
        <div className="container">
          <Link to="/blog" className="back-link">
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>
          
          <motion.div 
            className="post-header-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="post-meta-header">
              <span className="category-badge">{post.category}</span>
              <div className="post-meta-details">
                <span className="read-time">
                  <Clock size={16} />
                  {post.readTime}
                </span>
                <span className="publish-date">
                  <Calendar size={16} />
                  {formatDate(post.publishDate)}
                </span>
              </div>
            </div>
            
            <h1 className="post-title">{post.title}</h1>
            <p className="post-subtitle">{post.excerpt}</p>
            
            <div className="post-author-section">
              <div className="author-info">
                <div className="author-avatar">
                  {post.author.charAt(0)}
                </div>
                <div className="author-details">
                  <p className="author-name">{post.author}</p>
                  <p className="author-meta">Published on {formatDate(post.publishDate)}</p>
                </div>
              </div>
              
              <button className="share-button">
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
                  {post.tags.map((tag, index) => (
                    <span key={index} className="post-tag">
                      <Tag size={14} />
                      {tag}
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
                key={relatedPost.id}
                className="related-post-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link to={`/blog/${relatedPost.slug}`}>
                  <div className="related-post-image">
                    <img src={relatedPost.image} alt={relatedPost.title} />
                    <div className="related-post-overlay">
                      <span className="category">{relatedPost.category}</span>
                    </div>
                  </div>
                  <div className="related-post-content">
                    <h3>{relatedPost.title}</h3>
                    <p>{relatedPost.excerpt}</p>
                    <div className="related-post-meta">
                      <span className="read-time">
                        <Clock size={14} />
                        {relatedPost.readTime}
                      </span>
                      <span className="author">
                        <User size={14} />
                        {relatedPost.author}
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
  )
}

export default BlogPostPage