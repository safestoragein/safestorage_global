import axios from 'axios';

const API_BASE_URL = 'https://safestorage.in/back/app';

export const blogService = {
  // Fetch all blogs from the API
  async getAllBlogs() {
    try {
      const response = await axios.get(`${API_BASE_URL}/get_blog_content`);
      return response.data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  },

  // Get a single blog by slug
  async getBlogBySlug(slug) {
    try {
      const blogs = await this.getAllBlogs();
      return blogs.find(blog => blog.slug === slug);
    } catch (error) {
      console.error('Error fetching blog by slug:', error);
      throw error;
    }
  },

  // Get blogs by category
  async getBlogsByCategory(category) {
    try {
      const blogs = await this.getAllBlogs();
      return blogs.filter(blog => {
        if (blog.extra_data) {
          const extraData = JSON.parse(blog.extra_data);
          return extraData.category === category;
        }
        return false;
      });
    } catch (error) {
      console.error('Error fetching blogs by category:', error);
      throw error;
    }
  },

  // Get featured blogs (for homepage)
  async getFeaturedBlogs(limit = 6) {
    try {
      const blogs = await this.getAllBlogs();
      return blogs
        .filter(blog => blog.status === '0') // Only published blogs
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by newest
        .slice(0, limit);
    } catch (error) {
      console.error('Error fetching featured blogs:', error);
      throw error;
    }
  },

  // Parse blog extra data
  parseExtraData(extraData) {
    try {
      return JSON.parse(extraData);
    } catch (error) {
      return {
        author: 'SafeStorage Team',
        category: 'Blog',
        featured_image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center',
        read_time: '5 mins'
      };
    }
  },

  // Get placeholder image based on category
  getImageForCategory(category) {
    const imageMap = {
      'Storage Guide': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center',
      'Storage Tips': 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop&crop=center',
      'Business Storage': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=center',
      'Emergency Services': 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop&crop=center',
      'Sustainability': 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&crop=center',
      'Seasonal Storage': 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop&crop=center',
      'Location Guide': 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center'
    };
    return imageMap[category] || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center';
  },

  // Format blog for display
  formatBlog(blog) {
    const extraData = this.parseExtraData(blog.extra_data);
    
    // Always use category-based placeholder images since API images don't exist
    extraData.featured_image = this.getImageForCategory(extraData.category);
    
    return {
      ...blog,
      extraData,
      formattedDate: new Date(blog.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };
  }
};

export default blogService;