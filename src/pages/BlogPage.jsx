import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, User, ChevronRight, TrendingUp, BookOpen, Star, ArrowUpRight, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'storage-tips', name: 'Storage Tips', count: 5 },
    { id: 'moving-guide', name: 'Moving Guide', count: 3 },
    { id: 'business', name: 'Business', count: 2 },
    { id: 'lifestyle', name: 'Lifestyle', count: 2 }
  ]

  const blogPosts = [
    {
      id: 1,
      category: 'storage-tips',
      title: '10 Smart Storage Solutions for Small Spaces',
      excerpt: 'Discover innovative ways to maximize your storage space with these expert tips and tricks that will transform your living area.',
      author: 'Priya Sharma',
      authorRole: 'Storage Expert',
      date: 'Jan 15, 2024',
      readTime: '5 min',
      image: '📦',
      featured: true,
      trending: true,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      category: 'moving-guide',
      title: 'Complete Moving Checklist: Your Stress-Free Guide',
      excerpt: 'Moving doesn\'t have to be stressful. Follow our comprehensive checklist to ensure a smooth transition to your new home.',
      author: 'Rajesh Kumar',
      authorRole: 'Relocation Specialist',
      date: 'Jan 10, 2024',
      readTime: '7 min',
      image: '🚚',
      trending: true,
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      category: 'business',
      title: 'How Businesses Can Optimize Inventory Storage',
      excerpt: 'Learn how modern storage solutions can help businesses reduce costs and improve efficiency in inventory management.',
      author: 'Amit Patel',
      authorRole: 'Business Consultant',
      date: 'Jan 08, 2024',
      readTime: '6 min',
      image: '📊',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 4,
      category: 'lifestyle',
      title: 'Decluttering Your Life: The KonMari Method',
      excerpt: 'Explore the famous KonMari method and learn how professional storage can help you maintain a clutter-free lifestyle.',
      author: 'Sarah Williams',
      authorRole: 'Lifestyle Coach',
      date: 'Jan 05, 2024',
      readTime: '4 min',
      image: '✨',
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 5,
      category: 'storage-tips',
      title: 'Climate-Controlled Storage: What You Need to Know',
      excerpt: 'Understand the importance of climate-controlled storage and which items benefit most from temperature regulation.',
      author: 'Mohammed Khan',
      authorRole: 'Facility Manager',
      date: 'Jan 03, 2024',
      readTime: '5 min',
      image: '🌡️',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 6,
      category: 'moving-guide',
      title: 'International Relocation: A Complete Guide',
      excerpt: 'Planning to move abroad? Here\'s everything you need to know about international relocation and storage solutions.',
      author: 'Emily Brown',
      authorRole: 'Global Moving Expert',
      date: 'Dec 28, 2023',
      readTime: '8 min',
      image: '✈️',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 7,
      category: 'storage-tips',
      title: 'Seasonal Storage Solutions for Your Home',
      excerpt: 'Learn how to efficiently store seasonal items and rotate your belongings throughout the year.',
      author: 'David Wilson',
      authorRole: 'Organization Expert',
      date: 'Dec 25, 2023',
      readTime: '4 min',
      image: '🍂',
      color: 'from-amber-500 to-orange-600'
    },
    {
      id: 8,
      category: 'business',
      title: 'Document Storage Best Practices for Businesses',
      excerpt: 'Ensure your important business documents are stored safely and accessibly with these professional tips.',
      author: 'Sophie Martinez',
      authorRole: 'Records Manager',
      date: 'Dec 20, 2023',
      readTime: '6 min',
      image: '📄',
      color: 'from-gray-500 to-gray-700'
    },
    {
      id: 9,
      category: 'lifestyle',
      title: 'Creating a Minimalist Living Space',
      excerpt: 'Discover how storage solutions can help you achieve and maintain a minimalist lifestyle without sacrificing comfort.',
      author: 'James Thompson',
      authorRole: 'Interior Designer',
      date: 'Dec 18, 2023',
      readTime: '5 min',
      image: '🏡',
      color: 'from-teal-500 to-green-600'
    }
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPost = blogPosts.find(post => post.featured)
  const trendingPosts = blogPosts.filter(post => post.trending).slice(0, 3)

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
            Blog & Insights
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Expert advice on storage, moving, and organization
          </motion.p>
        </div>
      </div>

      {/* Hero Featured Post */}
      {featuredPost && (
        <div className="blog-hero-section">
          <div className="container">
            <motion.div 
              className="hero-featured-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={`hero-gradient-bg bg-gradient-to-br ${featuredPost.color}`}>
                <span className="hero-emoji">{featuredPost.image}</span>
              </div>
              <div className="hero-content">
                <div className="hero-badges">
                  <span className="badge-featured">
                    <Star size={14} />
                    Featured
                  </span>
                  <span className="badge-category">{featuredPost.category.replace('-', ' ')}</span>
                </div>
                <h2 className="hero-title">{featuredPost.title}</h2>
                <p className="hero-excerpt">{featuredPost.excerpt}</p>
                
                <div className="hero-footer">
                  <div className="hero-author">
                    <div className="author-avatar">
                      {featuredPost.author.charAt(0)}
                    </div>
                    <div className="author-info">
                      <p className="author-name">{featuredPost.author}</p>
                      <p className="author-meta">
                        <span>{featuredPost.date}</span>
                        <span className="dot">•</span>
                        <span>{featuredPost.readTime} read</span>
                      </p>
                    </div>
                  </div>
                  <motion.button 
                    className="hero-cta-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read Article
                    <ArrowUpRight size={18} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Trending Section */}
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
              <h2>Trending Now</h2>
            </div>
            <Link to="#" className="view-all-link">
              View All <ChevronRight size={18} />
            </Link>
          </motion.div>

          <div className="trending-grid">
            {trendingPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="trending-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`trending-number bg-gradient-to-br ${post.color}`}>
                  {index + 1}
                </div>
                <div className="trending-content">
                  <span className="trending-category">{post.category.replace('-', ' ')}</span>
                  <h3>{post.title}</h3>
                  <div className="trending-meta">
                    <span>{post.readTime} read</span>
                    <ChevronRight size={16} className="trending-arrow" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="blog-filter-section">
        <div className="container">
          <div className="filter-wrapper">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`filter-pill ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
                <span className="filter-count">{category.count}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Blog Grid */}
      <div className="blog-main-section">
        <div className="container">
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
                <div className={`card-header-gradient bg-gradient-to-br ${post.color}`}>
                  <span className="card-emoji">{post.image}</span>
                  <span className="card-read-time">{post.readTime}</span>
                </div>
                
                <div className="card-body">
                  <div className="card-tags">
                    <Tag size={14} />
                    <span>{post.category.replace('-', ' ')}</span>
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
                        <p className="author-date">{post.date}</p>
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
              </motion.article>
            ))}
          </div>

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