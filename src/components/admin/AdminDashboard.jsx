import { useState, useEffect } from 'react';
import BlogEditor from './BlogEditor';

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('list');
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Load blogs from localStorage
    const savedBlogs = localStorage.getItem('safestorage_blogs');
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs));
    }
  }, []);

  const saveBlog = (blogData) => {
    let updatedBlogs;
    if (editingBlog) {
      updatedBlogs = blogs.map(blog => 
        blog.id === editingBlog.id ? blogData : blog
      );
    } else {
      updatedBlogs = [...blogs, blogData];
    }
    
    setBlogs(updatedBlogs);
    localStorage.setItem('safestorage_blogs', JSON.stringify(updatedBlogs));
    setActiveTab('list');
    setEditingBlog(null);
  };

  const deleteBlog = (id) => {
    if (confirm('Are you sure you want to delete this blog?')) {
      const updatedBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(updatedBlogs);
      localStorage.setItem('safestorage_blogs', JSON.stringify(updatedBlogs));
    }
  };

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return '#28a745';
      case 'draft': return '#ffc107';
      case 'archived': return '#6c757d';
      default: return '#007bff';
    }
  };

  if (activeTab === 'editor') {
    return (
      <BlogEditor
        onSave={saveBlog}
        editingBlog={editingBlog}
        onCancel={() => {
          setActiveTab('list');
          setEditingBlog(null);
        }}
      />
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      {/* Header */}
      <div style={{
        background: 'white',
        borderBottom: '1px solid #e9ecef',
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ margin: '0 20px 0 0', color: '#333', fontSize: '24px' }}>
            SafeStorage Blog Admin
          </h1>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => setActiveTab('list')}
              style={{
                padding: '8px 16px',
                border: 'none',
                background: activeTab === 'list' ? '#007bff' : '#e9ecef',
                color: activeTab === 'list' ? 'white' : '#333',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              Blog List
            </button>
            <button
              onClick={() => {
                setActiveTab('editor');
                setEditingBlog(null);
              }}
              style={{
                padding: '8px 16px',
                border: 'none',
                background: '#28a745',
                color: 'white',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              + New Blog
            </button>
          </div>
        </div>
        <button
          onClick={onLogout}
          style={{
            padding: '8px 16px',
            border: 'none',
            background: '#dc3545',
            color: 'white',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div style={{ padding: '30px' }}>
        {activeTab === 'list' && (
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* Stats Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              marginBottom: '30px'
            }}>
              <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>Total Blogs</h3>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff' }}>
                  {blogs.length}
                </div>
              </div>
              <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>Published</h3>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#28a745' }}>
                  {blogs.filter(b => b.status === 'published').length}
                </div>
              </div>
              <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>Drafts</h3>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ffc107' }}>
                  {blogs.filter(b => b.status === 'draft').length}
                </div>
              </div>
              <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>Categories</h3>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#17a2b8' }}>
                  {new Set(blogs.map(b => b.category)).size}
                </div>
              </div>
            </div>

            {/* Search and Filters */}
            <div style={{
              background: 'white',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              marginBottom: '20px',
              display: 'flex',
              gap: '15px',
              alignItems: 'center'
            }}>
              <div style={{ flex: 1 }}>
                <input
                  type="text"
                  placeholder="Search blogs by title or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 15px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '16px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              <button
                onClick={() => {
                  setActiveTab('editor');
                  setEditingBlog(null);
                }}
                style={{
                  padding: '10px 20px',
                  background: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                + Add New Blog
              </button>
            </div>

            {/* Blog List */}
            <div style={{
              background: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}>
              {filteredBlogs.length === 0 ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
                  {searchTerm ? 'No blogs found matching your search.' : 'No blogs yet. Create your first blog!'}
                </div>
              ) : (
                <div>
                  {/* Table Header */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 150px 120px 100px 150px',
                    gap: '15px',
                    padding: '15px 20px',
                    background: '#f8f9fa',
                    borderBottom: '1px solid #e9ecef',
                    fontWeight: 'bold',
                    color: '#333'
                  }}>
                    <div>Title</div>
                    <div>Category</div>
                    <div>Status</div>
                    <div>Date</div>
                    <div>Actions</div>
                  </div>

                  {/* Table Body */}
                  {filteredBlogs.map((blog) => (
                    <div
                      key={blog.id}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 150px 120px 100px 150px',
                        gap: '15px',
                        padding: '15px 20px',
                        borderBottom: '1px solid #f0f0f0',
                        alignItems: 'center'
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: '600', color: '#333', marginBottom: '5px' }}>
                          {blog.title || 'Untitled'}
                        </div>
                        <div style={{ fontSize: '14px', color: '#666', lineHeight: '1.4' }}>
                          {blog.excerpt ? blog.excerpt.substring(0, 80) + '...' : 'No excerpt'}
                        </div>
                      </div>
                      <div style={{ color: '#666', fontSize: '14px' }}>
                        {blog.category.charAt(0).toUpperCase() + blog.category.slice(1).replace('-', ' ')}
                      </div>
                      <div>
                        <span style={{
                          background: getStatusColor(blog.status),
                          color: 'white',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: '500'
                        }}>
                          {blog.status.charAt(0).toUpperCase() + blog.status.slice(1)}
                        </span>
                      </div>
                      <div style={{ color: '#666', fontSize: '12px' }}>
                        {new Date(blog.updatedAt).toLocaleDateString()}
                      </div>
                      <div style={{ display: 'flex', gap: '5px' }}>
                        <button
                          onClick={() => {
                            setEditingBlog(blog);
                            setActiveTab('editor');
                          }}
                          style={{
                            padding: '6px 12px',
                            background: '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px'
                          }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteBlog(blog.id)}
                          style={{
                            padding: '6px 12px',
                            background: '#dc3545',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px'
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;