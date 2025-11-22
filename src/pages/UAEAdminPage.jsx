import { useState, useEffect } from 'react';
import AdminLogin from '../components/admin/AdminLogin';
import AdminDashboard from '../components/admin/AdminDashboard';
import SEOHead from '../components/SEOHead';

const UAEAdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in (from session storage)
    const authStatus = sessionStorage.getItem('safestorage_admin_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (status) => {
    setIsAuthenticated(status);
    if (status) {
      sessionStorage.setItem('safestorage_admin_auth', 'true');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('safestorage_admin_auth');
  };

  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f8f9fa'
      }}>
        <div style={{ fontSize: '18px', color: '#666' }}>Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <>
        <SEOHead 
          title="SafeStorage UAE Admin - Content Management"
          description="Admin panel for managing SafeStorage UAE website content and blog posts"
          canonical="/uae/admin"
          keywords="admin, cms, content management, safestorage"
        />
        <AdminLogin onLogin={handleLogin} />
      </>
    );
  }

  return (
    <>
      <SEOHead 
        title="SafeStorage UAE Dashboard - Admin Panel"
        description="Administrative dashboard for SafeStorage UAE operations"
        canonical="/uae/admin"
      />
      <AdminDashboard onLogout={handleLogout} />
    </>
  );
};

export default UAEAdminPage;