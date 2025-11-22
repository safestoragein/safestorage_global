import { useState, useRef, useEffect } from 'react';

const BlogEditor = ({ onSave, editingBlog = null, onCancel }) => {
  const [blog, setBlog] = useState({
    title: editingBlog?.title || '',
    content: editingBlog?.content || '',
    excerpt: editingBlog?.excerpt || '',
    featuredImage: editingBlog?.featuredImage || '',
    category: editingBlog?.category || 'general',
    tags: editingBlog?.tags?.join(', ') || '',
    status: editingBlog?.status || 'draft'
  });

  const [isUploading, setIsUploading] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#333333');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isAutoSaving, setIsAutoSaving] = useState(false);
  const contentRef = useRef(null);
  const fileInputRef = useRef(null);

  const categories = ['general', 'storage-tips', 'business', 'moving', 'documents', 'vehicle-storage'];

  // Auto-save functionality
  useEffect(() => {
    const autoSave = setTimeout(() => {
      if (blog.title || blog.content) {
        setIsAutoSaving(true);
        // Auto-save to localStorage
        localStorage.setItem('blog_draft', JSON.stringify(blog));
        setTimeout(() => setIsAutoSaving(false), 1000);
      }
    }, 3000);

    return () => clearTimeout(autoSave);
  }, [blog]);

  // Word count calculation
  useEffect(() => {
    if (contentRef.current) {
      const text = contentRef.current.innerText || '';
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      setWordCount(words);
      setCharCount(text.length);
    }
  }, [blog.content]);

  // Force LTR direction and handle initial setup
  useEffect(() => {
    // Set HTML document direction
    document.documentElement.dir = 'ltr';
    document.documentElement.lang = 'en';
    document.body.dir = 'ltr';
    
    if (contentRef.current) {
      const element = contentRef.current;
      
      // Set content safely without dangerouslySetInnerHTML
      element.innerHTML = blog.content || '';
      
      // Set all attributes after content is set
      element.dir = 'ltr';
      element.lang = 'en';
      element.setAttribute('dir', 'ltr');
      element.setAttribute('lang', 'en');
      element.style.setProperty('direction', 'ltr', 'important');
      element.style.setProperty('text-align', 'left', 'important');
      element.style.setProperty('unicode-bidi', 'normal', 'important');
      element.style.setProperty('writing-mode', 'lr-tb', 'important');
      element.style.setProperty('text-direction', 'ltr', 'important');
      
      // Add debugging
      console.log('Setting LTR on element:', element);
      console.log('Element dir:', element.dir);
      console.log('Element style.direction:', element.style.direction);
      
      // Force all child elements to LTR
      const forceChildrenLTR = () => {
        const allElements = element.querySelectorAll('*');
        allElements.forEach(el => {
          el.dir = 'ltr';
          el.setAttribute('dir', 'ltr');
          el.style.setProperty('direction', 'ltr', 'important');
          el.style.setProperty('text-align', 'left', 'important');
        });
      };
      
      forceChildrenLTR();
      
      // Watch for mutations and fix them
      const observer = new MutationObserver((mutations) => {
        console.log('DOM mutation detected:', mutations);
        forceChildrenLTR();
        element.style.setProperty('direction', 'ltr', 'important');
        element.style.setProperty('text-align', 'left', 'important');
      });
      
      observer.observe(element, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['dir', 'style', 'class']
      });
      
      // Cleanup observer
      return () => observer.disconnect();
    }
  }, [blog.content]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        if (e.target.dataset.type === 'featured') {
          setBlog(prev => ({ ...prev, featuredImage: imageUrl }));
        } else {
          // Insert image into content at cursor position
          const img = `<img src="${imageUrl}" alt="Blog image" style="max-width: 100%; height: auto; margin: 15px 0; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />`;
          insertAtCursor(img);
        }
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const insertAtCursor = (html) => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      range.deleteContents();
      const div = document.createElement('div');
      div.innerHTML = html;
      const fragment = document.createDocumentFragment();
      let node, lastNode;
      while ((node = div.firstChild)) {
        lastNode = fragment.appendChild(node);
      }
      range.insertNode(fragment);
      if (lastNode) {
        range = range.cloneRange();
        range.setStartAfter(lastNode);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    } else {
      // Fallback: append to end
      const currentContent = blog.content;
      setBlog(prev => ({ ...prev, content: currentContent + html }));
    }
    handleContentChange();
  };

  const formatText = (command, value = null) => {
    contentRef.current.focus();
    document.execCommand(command, false, value);
    handleContentChange();
  };

  const formatBlock = (tagName) => {
    contentRef.current.focus();
    document.execCommand('formatBlock', false, tagName);
    handleContentChange();
  };

  const insertLink = () => {
    const url = prompt('Enter URL:');
    if (url) {
      const text = prompt('Enter link text:', url);
      if (text) {
        const link = `<a href="${url}" target="_blank" style="color: #007bff; text-decoration: underline;">${text}</a>`;
        insertAtCursor(link);
      }
    }
  };

  const changeTextColor = (color) => {
    setSelectedColor(color);
    formatText('foreColor', color);
  };

  const insertHorizontalRule = () => {
    insertAtCursor('<hr style="margin: 20px 0; border: none; border-top: 2px solid #e9ecef;">');
  };

  const insertQuote = () => {
    insertAtCursor('<blockquote style="border-left: 4px solid #007bff; padding-left: 15px; margin: 15px 0; font-style: italic; color: #666;">Quote text here</blockquote>');
  };

  const handleContentChange = () => {
    if (contentRef.current) {
      setBlog(prev => ({ ...prev, content: contentRef.current.innerHTML }));
      
      // Force LTR after content change
      const element = contentRef.current;
      element.dir = 'ltr';
      element.style.setProperty('direction', 'ltr', 'important');
      element.style.setProperty('text-align', 'left', 'important');
    }
  };

  const handleSave = () => {
    const blogData = {
      ...blog,
      tags: blog.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      id: editingBlog?.id || Date.now().toString(),
      createdAt: editingBlog?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    onSave(blogData);
  };

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px', background: '#f8fafc', minHeight: '100vh', direction: 'ltr', textAlign: 'left' }}>
      <style>
        {`
          /* Force LTR Direction Globally */
          .blog-editor-wrapper,
          .blog-editor-wrapper *,
          .blog-editor-wrapper input,
          .blog-editor-wrapper textarea,
          .blog-editor-wrapper [contenteditable] {
            direction: ltr !important;
            text-align: left !important;
            unicode-bidi: normal !important;
            writing-mode: initial !important;
            text-direction: ltr !important;
          }
          
          /* Content Editor Styles */
          .blog-editor-content {
            background: #ffffff !important;
            color: #1a202c !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif !important;
            font-size: 16px !important;
            line-height: 1.75 !important;
            position: relative !important;
            z-index: 10 !important;
            caret-color: #4299e1 !important;
            direction: ltr !important;
            text-align: left !important;
            unicode-bidi: embed !important;
          }
          
          .blog-editor-content:focus {
            background: #ffffff !important;
            color: #1a202c !important;
            outline: none !important;
            border-color: #4299e1 !important;
          }
          
          .blog-editor-content * {
            color: inherit !important;
            background: transparent !important;
          }
          
          .blog-editor-content h1 {
            font-size: 2.25rem !important;
            font-weight: 700 !important;
            margin: 1.5rem 0 1rem 0 !important;
            color: #1a202c !important;
            line-height: 1.2 !important;
          }
          
          .blog-editor-content h2 {
            font-size: 1.875rem !important;
            font-weight: 600 !important;
            margin: 1.25rem 0 0.75rem 0 !important;
            color: #1a202c !important;
            line-height: 1.3 !important;
          }
          
          .blog-editor-content h3 {
            font-size: 1.5rem !important;
            font-weight: 600 !important;
            margin: 1rem 0 0.5rem 0 !important;
            color: #1a202c !important;
            line-height: 1.4 !important;
          }
          
          .blog-editor-content p {
            margin: 0.75rem 0 !important;
            line-height: 1.75 !important;
            color: #1a202c !important;
          }
          
          .blog-editor-content blockquote {
            border-left: 4px solid #4299e1 !important;
            margin: 1.5rem 0 !important;
            padding: 1rem 1.5rem !important;
            background: #f7fafc !important;
            font-style: italic !important;
            color: #4a5568 !important;
            border-radius: 0 8px 8px 0 !important;
          }
          
          .blog-editor-content ul, .blog-editor-content ol {
            margin: 1rem 0 !important;
            padding-left: 2rem !important;
            color: #1a202c !important;
          }
          
          .blog-editor-content li {
            margin: 0.5rem 0 !important;
            line-height: 1.6 !important;
            color: #1a202c !important;
          }
          
          .blog-editor-content a {
            color: #4299e1 !important;
            text-decoration: underline !important;
          }
          
          .blog-editor-content a:hover {
            color: #3182ce !important;
          }
          
          .blog-editor-content hr {
            margin: 2rem 0 !important;
            border: none !important;
            border-top: 1px solid #e2e8f0 !important;
          }
          
          .blog-editor-content img {
            max-width: 100% !important;
            height: auto !important;
            margin: 1rem 0 !important;
            border-radius: 8px !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
          }
          
          .blog-editor-content:empty:before {
            content: "Start writing your story..." !important;
            color: #a0aec0 !important;
            font-style: italic !important;
            pointer-events: none !important;
            position: absolute !important;
            top: 30px !important;
            left: 30px !important;
          }
          
          .blog-editor-content:focus:before {
            display: none !important;
          }
          
          /* Input and Form Styles */
          .input-field {
            background: #ffffff !important;
            color: #1a202c !important;
            border: 2px solid #e2e8f0 !important;
            transition: all 0.2s ease !important;
            font-family: inherit !important;
            direction: ltr !important;
            text-align: left !important;
          }
          
          .input-field:focus {
            border-color: #4299e1 !important;
            box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1) !important;
            outline: none !important;
            background: #ffffff !important;
            color: #1a202c !important;
          }
          
          .input-field::placeholder {
            color: #a0aec0 !important;
          }
          
          .select-field {
            background: #ffffff !important;
            color: #1a202c !important;
            border: 2px solid #e2e8f0 !important;
          }
          
          .select-field:focus {
            border-color: #4299e1 !important;
            outline: none !important;
          }
          
          /* Toolbar Styles */
          .toolbar-button {
            transition: all 0.2s ease !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            min-width: 40px !important;
            height: 36px !important;
          }
          
          .toolbar-button:hover {
            transform: translateY(-1px) !important;
            box-shadow: 0 4px 8px rgba(0,0,0,0.15) !important;
          }
          
          .toolbar-button:active {
            transform: translateY(0) !important;
          }
        `}
      </style>
      <div className="blog-editor-wrapper" style={{
        background: 'white',
        borderRadius: '16px',
        padding: '32px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        border: '1px solid #e2e8f0',
        direction: 'ltr',
        textAlign: 'left'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
          borderBottom: '2px solid #f0f0f0',
          paddingBottom: '20px'
        }}>
          <h2 style={{ margin: 0, color: '#333', fontSize: '28px' }}>
            {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h2>
          <div>
            <button
              onClick={onCancel}
              style={{
                padding: '10px 20px',
                marginRight: '10px',
                background: '#f5f5f5',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              style={{
                padding: '10px 20px',
                background: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              {editingBlog ? 'Update' : 'Save'} Blog
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
          {/* Main Content */}
          <div>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '10px', 
                fontWeight: '600',
                color: '#2d3748',
                fontSize: '14px'
              }}>
                📝 Blog Title
              </label>
              <input
                type="text"
                value={blog.title}
                onChange={(e) => setBlog(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Enter an engaging blog title..."
                className="input-field"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: '10px',
                  fontSize: '16px',
                  fontWeight: '500',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '10px', 
                fontWeight: '600',
                color: '#2d3748',
                fontSize: '14px'
              }}>
                📄 Excerpt
              </label>
              <textarea
                value={blog.excerpt}
                onChange={(e) => setBlog(prev => ({ ...prev, excerpt: e.target.value }))}
                placeholder="Write a compelling brief description of your blog post..."
                rows="3"
                className="input-field"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  resize: 'vertical',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '10px', 
                fontWeight: '600',
                color: '#2d3748',
                fontSize: '14px'
              }}>
                ✏️ Content
              </label>
              
              {/* Enhanced Toolbar */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
                padding: '16px',
                background: 'linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%)',
                border: '1px solid #e2e8f0',
                borderBottom: 'none',
                borderRadius: '12px 12px 0 0',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}>
                {/* Text Formatting */}
                <div style={{ display: 'flex', gap: '4px', marginRight: '12px' }}>
                  <button
                    type="button"
                    onClick={() => formatText('bold')}
                    className="toolbar-button"
                    style={{ 
                      padding: '8px 12px', 
                      border: '1px solid #cbd5e0', 
                      background: 'linear-gradient(145deg, #ffffff, #f7fafc)', 
                      borderRadius: '8px', 
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      color: '#2d3748',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                    title="Bold"
                  >
                    <strong>B</strong>
                  </button>
                  <button
                    type="button"
                    onClick={() => formatText('italic')}
                    className="toolbar-button"
                    style={{ 
                      padding: '8px 12px', 
                      border: '1px solid #cbd5e0', 
                      background: 'linear-gradient(145deg, #ffffff, #f7fafc)', 
                      borderRadius: '8px', 
                      cursor: 'pointer',
                      fontStyle: 'italic',
                      fontSize: '14px',
                      color: '#2d3748',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                    title="Italic"
                  >
                    <em>I</em>
                  </button>
                  <button
                    type="button"
                    onClick={() => formatText('underline')}
                    className="toolbar-button"
                    style={{ 
                      padding: '8px 12px', 
                      border: '1px solid #cbd5e0', 
                      background: 'linear-gradient(145deg, #ffffff, #f7fafc)', 
                      borderRadius: '8px', 
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      fontSize: '14px',
                      color: '#2d3748',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                    title="Underline"
                  >
                    U
                  </button>
                </div>

                {/* Headings */}
                <div style={{ display: 'flex', gap: '4px', marginRight: '12px' }}>
                  <button
                    type="button"
                    onClick={() => formatBlock('h1')}
                    className="toolbar-button"
                    style={{ 
                      padding: '8px 12px', 
                      border: '1px solid #4299e1', 
                      background: 'linear-gradient(145deg, #ebf8ff, #bee3f8)', 
                      borderRadius: '8px', 
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: '#2c5282',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                    title="Heading 1"
                  >
                    H1
                  </button>
                  <button
                    type="button"
                    onClick={() => formatBlock('h2')}
                    className="toolbar-button"
                    style={{ 
                      padding: '8px 12px', 
                      border: '1px solid #4299e1', 
                      background: 'linear-gradient(145deg, #ebf8ff, #bee3f8)', 
                      borderRadius: '8px', 
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: '#2c5282',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                    title="Heading 2"
                  >
                    H2
                  </button>
                  <button
                    type="button"
                    onClick={() => formatBlock('h3')}
                    className="toolbar-button"
                    style={{ 
                      padding: '8px 12px', 
                      border: '1px solid #4299e1', 
                      background: 'linear-gradient(145deg, #ebf8ff, #bee3f8)', 
                      borderRadius: '8px', 
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: '#2c5282',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                    title="Heading 3"
                  >
                    H3
                  </button>
                  <button
                    type="button"
                    onClick={() => formatBlock('p')}
                    className="toolbar-button"
                    style={{ 
                      padding: '8px 12px', 
                      border: '1px solid #cbd5e0', 
                      background: 'linear-gradient(145deg, #ffffff, #f7fafc)', 
                      borderRadius: '8px', 
                      cursor: 'pointer',
                      fontSize: '14px',
                      color: '#2d3748',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                    title="Paragraph"
                  >
                    P
                  </button>
                </div>

                {/* Text Color */}
                <div style={{ display: 'flex', gap: '6px', marginRight: '12px', alignItems: 'center' }}>
                  <input
                    type="color"
                    value={selectedColor}
                    onChange={(e) => changeTextColor(e.target.value)}
                    style={{ 
                      width: '36px', 
                      height: '36px', 
                      border: '2px solid #cbd5e0', 
                      borderRadius: '8px', 
                      cursor: 'pointer',
                      padding: '0',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                    title="Text Color"
                  />
                  <span style={{ fontSize: '11px', color: '#4a5568', fontWeight: '500' }}>🎨</span>
                </div>

                {/* Lists */}
                <div style={{ display: 'flex', gap: '4px', marginRight: '12px' }}>
                  <button
                    type="button"
                    onClick={() => formatText('insertUnorderedList')}
                    className="toolbar-button"
                    style={{ 
                      padding: '8px 12px', 
                      border: '1px solid #48bb78', 
                      background: 'linear-gradient(145deg, #f0fff4, #c6f6d5)', 
                      borderRadius: '8px', 
                      cursor: 'pointer',
                      fontSize: '14px',
                      color: '#22543d',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                    title="Bullet List"
                  >
                    • List
                  </button>
                  <button
                    type="button"
                    onClick={() => formatText('insertOrderedList')}
                    className="toolbar-button"
                    style={{ 
                      padding: '8px 12px', 
                      border: '1px solid #48bb78', 
                      background: 'linear-gradient(145deg, #f0fff4, #c6f6d5)', 
                      borderRadius: '8px', 
                      cursor: 'pointer',
                      fontSize: '14px',
                      color: '#22543d',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                    title="Numbered List"
                  >
                    1. List
                  </button>
                </div>

                {/* Special Elements */}
                <div style={{ display: 'flex', gap: '4px', marginRight: '12px' }}>
                  <button
                    type="button"
                    onClick={insertLink}
                    className="toolbar-button"
                    style={{ 
                      padding: '8px 12px', 
                      border: '1px solid #ed8936', 
                      background: 'linear-gradient(145deg, #fffaf0, #fbd38d)', 
                      borderRadius: '8px', 
                      cursor: 'pointer',
                      fontSize: '14px',
                      color: '#7b341e',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                    title="Insert Link"
                  >
                    🔗
                  </button>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="toolbar-button"
                    style={{ 
                      padding: '8px 12px', 
                      border: '1px solid #ed8936', 
                      background: 'linear-gradient(145deg, #fffaf0, #fbd38d)', 
                      borderRadius: '8px', 
                      cursor: 'pointer',
                      fontSize: '14px',
                      color: '#7b341e',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                    title="Insert Image"
                  >
                    📷
                  </button>
                  <button
                    type="button"
                    onClick={insertQuote}
                    className="toolbar-button"
                    style={{ 
                      padding: '8px 12px', 
                      border: '1px solid #9f7aea', 
                      background: 'linear-gradient(145deg, #faf5ff, #d6d8f5)', 
                      borderRadius: '8px', 
                      cursor: 'pointer',
                      fontSize: '14px',
                      color: '#553c9a',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                    title="Insert Quote"
                  >
                    💬
                  </button>
                </div>

                {/* Clear Formatting */}
                <button
                  type="button"
                  onClick={() => formatText('removeFormat')}
                  className="toolbar-button"
                  style={{ 
                    padding: '8px 12px', 
                    border: '1px solid #f56565', 
                    background: 'linear-gradient(145deg, #fed7d7, #feb2b2)', 
                    color: '#c53030',
                    borderRadius: '8px', 
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                  title="Clear Formatting"
                >
                  🧹
                </button>
              </div>

              <div
                ref={contentRef}
                className="blog-editor-content"
                contentEditable
                onInput={handleContentChange}
                dir="ltr"
                data-dir="ltr"
                lang="en"
                style={{
                  minHeight: '450px',
                  padding: '30px',
                  border: '1px solid #e2e8f0',
                  borderTop: 'none',
                  borderRadius: '0 0 12px 12px',
                  fontSize: '16px',
                  lineHeight: '1.8',
                  outline: 'none',
                  background: '#ffffff',
                  color: '#2d3748',
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                  overflow: 'auto',
                  maxHeight: '650px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                  transition: 'box-shadow 0.2s ease',
                  direction: 'ltr !important',
                  textAlign: 'left !important',
                  unicodeBidi: 'normal !important',
                  writingMode: 'lr-tb !important'
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                  // Force LTR on focus
                  e.target.dir = 'ltr';
                  e.target.style.direction = 'ltr';
                  e.target.style.textAlign = 'left';
                  e.target.style.unicodeBidi = 'normal';
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                }}
                onKeyDown={(e) => {
                  // Force LTR on keydown
                  const element = e.target;
                  element.dir = 'ltr';
                  element.style.setProperty('direction', 'ltr', 'important');
                  element.style.setProperty('text-align', 'left', 'important');
                  
                  // Handle Enter key for better paragraph formatting
                  if (e.key === 'Enter' && !e.shiftKey) {
                    document.execCommand('formatBlock', false, 'p');
                    // Force LTR on new paragraphs
                    setTimeout(() => {
                      const element = contentRef.current;
                      if (element) {
                        element.dir = 'ltr';
                        element.style.setProperty('direction', 'ltr', 'important');
                        element.style.setProperty('text-align', 'left', 'important');
                      }
                    }, 10);
                  }
                }}
                suppressContentEditableWarning={true}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div style={{
              background: 'linear-gradient(145deg, #ffffff, #f7fafc)',
              padding: '24px',
              borderRadius: '16px',
              marginBottom: '24px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ 
                marginTop: 0, 
                color: '#2d3748',
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '16px'
              }}>
                🖼️ Featured Image
              </h3>
              {blog.featuredImage ? (
                <div style={{ marginBottom: '16px' }}>
                  <img
                    src={blog.featuredImage}
                    alt="Featured"
                    style={{
                      width: '100%',
                      height: '180px',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      border: '2px solid #e2e8f0'
                    }}
                  />
                  <button
                    onClick={() => setBlog(prev => ({ ...prev, featuredImage: '' }))}
                    style={{
                      marginTop: '12px',
                      padding: '8px 16px',
                      background: 'linear-gradient(145deg, #fed7d7, #feb2b2)',
                      color: '#c53030',
                      border: '1px solid #f56565',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '13px',
                      fontWeight: '500',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'translateY(-1px)'}
                    onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                  >
                    🗑️ Remove
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => {
                    const input = document.createElement('input');
                    input.type = 'file';
                    input.accept = 'image/*';
                    input.dataset.type = 'featured';
                    input.onchange = handleImageUpload;
                    input.click();
                  }}
                  style={{
                    border: '2px dashed #cbd5e0',
                    borderRadius: '12px',
                    padding: '40px 20px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    marginBottom: '16px',
                    background: 'linear-gradient(145deg, #f7fafc, #edf2f7)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#4299e1';
                    e.target.style.background = 'linear-gradient(145deg, #ebf8ff, #bee3f8)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = '#cbd5e0';
                    e.target.style.background = 'linear-gradient(145deg, #f7fafc, #edf2f7)';
                  }}
                >
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>📷</div>
                  <div style={{ color: '#4a5568', fontWeight: '500' }}>Click to upload featured image</div>
                  <div style={{ color: '#a0aec0', fontSize: '12px', marginTop: '4px' }}>JPG, PNG, GIF up to 10MB</div>
                </div>
              )}
            </div>

            <div style={{
              background: 'linear-gradient(145deg, #ffffff, #f7fafc)',
              padding: '24px',
              borderRadius: '16px',
              marginBottom: '24px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ 
                marginTop: 0, 
                color: '#2d3748',
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '20px'
              }}>
                ⚙️ Settings
              </h3>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontWeight: '600',
                  color: '#2d3748',
                  fontSize: '14px'
                }}>
                  📁 Category
                </label>
                <select
                  value={blog.category}
                  onChange={(e) => setBlog(prev => ({ ...prev, category: e.target.value }))}
                  className="select-field"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ')}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontWeight: '600',
                  color: '#2d3748',
                  fontSize: '14px'
                }}>
                  🏷️ Tags (comma separated)
                </label>
                <input
                  type="text"
                  value={blog.tags}
                  onChange={(e) => setBlog(prev => ({ ...prev, tags: e.target.value }))}
                  placeholder="storage, tips, business"
                  className="input-field"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    fontSize: '14px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '0' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontWeight: '600',
                  color: '#2d3748',
                  fontSize: '14px'
                }}>
                  📊 Status
                </label>
                <select
                  value={blog.status}
                  onChange={(e) => setBlog(prev => ({ ...prev, status: e.target.value }))}
                  className="select-field"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  <option value="draft">📝 Draft</option>
                  <option value="published">🌟 Published</option>
                  <option value="archived">📦 Archived</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />

        {isUploading && (
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '20px',
            borderRadius: '8px',
            zIndex: 1000
          }}>
            Uploading image...
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogEditor;