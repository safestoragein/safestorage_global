import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UAEHeader from '../components/uae/UAEHeader';
import UAEFooter from '../components/uae/UAEFooter';
import { sessionManager } from '../utils/sessionManager';
import '../components/uae/UAEQuoteForm.css';

const UAEGetQuotePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    floor: "",
    liftAvailable: "",
  });

  // Load existing data from session storage on component mount
  useEffect(() => {
    const savedData = sessionManager.getData('step1Data');
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  // Auto-save form data to session storage whenever it changes
  useEffect(() => {
    if (formData.fullName || formData.email || formData.phone) {
      sessionManager.saveData('step1Data', formData);
    }
  }, [formData]);

  const validateStep1 = () => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address || !formData.floor || !formData.liftAvailable) {
      alert("Please fill in all required fields");
      return false;
    }
    if (!formData.email.includes("@")) {
      alert("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep1()) {
      console.log("Form Data:", formData);
      sessionManager.saveData('step1Data', formData);
      // Navigate to step 2
      navigate('/uae/get-quote/step2');
    }
  };

  return (
    <div className="uae-get-quote-page">
      <UAEHeader />
      
      <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #f8fafc, #e0f2fe, #e0e7ff)' }}>
        {/* Header */}
        <div style={{ background: 'white', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '24px 16px' }}>
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>
                Get Storage Quote
              </h1>
              <p style={{ color: '#64748b' }}>Step 1 of 3: Contact Information</p>
            </div>

            {/* Progress Bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ 
                  width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#2563eb', 
                  color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  fontSize: '14px', fontWeight: 'bold' 
                }}>
                  1
                </div>
                <div style={{ width: '48px', height: '1px', backgroundColor: '#cbd5e1' }}></div>
                <div style={{ 
                  width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#e2e8f0', 
                  color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  fontSize: '14px', fontWeight: 'bold' 
                }}>
                  2
                </div>
                <div style={{ width: '48px', height: '1px', backgroundColor: '#cbd5e1' }}></div>
                <div style={{ 
                  width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#e2e8f0', 
                  color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  fontSize: '14px', fontWeight: 'bold' 
                }}>
                  3
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '32px 16px' }}>
          <div style={{ 
            background: 'white', borderRadius: '16px', 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', 
            border: '1px solid #e2e8f0', overflow: 'hidden' 
          }}>
            <div style={{ padding: '32px' }}>
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>
                  Contact Information
                </h2>
                <p style={{ color: '#64748b' }}>We'll need these details to process your storage request</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Personal Details */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>Full Name *</label>
                    <input
                      type="text"
                      placeholder="Ahmed Al-Mansouri"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="uae-quote-input"
                      style={{
                        width: '100%',
                        height: '48px',
                        padding: '12px 16px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '8px',
                        fontSize: '16px',
                        color: '#000000',
                        outline: 'none',
                        backgroundColor: 'white',
                        transition: 'all 0.2s'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#2563eb';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e2e8f0';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="+971 50 577 3388"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="uae-quote-input"
                      style={{
                        width: '100%',
                        height: '48px',
                        padding: '12px 16px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '8px',
                        fontSize: '16px',
                        color: '#000000',
                        outline: 'none',
                        backgroundColor: 'white',
                        transition: 'all 0.2s'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#2563eb';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e2e8f0';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>Email Address *</label>
                  <input
                    type="email"
                    placeholder="ahmed.mansouri@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="uae-quote-input"
                    style={{
                      width: '100%',
                      height: '48px',
                      padding: '12px 16px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '16px',
                      color: '#000000',
                      outline: 'none',
                      backgroundColor: 'white',
                      transition: 'all 0.2s'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#2563eb';
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e2e8f0';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Address Section */}
                <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '24px' }}>
                  <h3 style={{ fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>Pickup Location</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>Complete Address *</label>
                      <input
                        type="text"
                        placeholder="Villa 123, Dubai Marina, Dubai, UAE"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="uae-quote-input"
                        style={{
                          width: '100%',
                          height: '48px',
                          padding: '12px 16px',
                          border: '2px solid #e2e8f0',
                          borderRadius: '8px',
                          fontSize: '16px',
                          color: '#000000',
                          outline: 'none',
                          backgroundColor: 'white',
                          transition: 'all 0.2s'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#2563eb';
                          e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#e2e8f0';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                      <p style={{ fontSize: '12px', color: '#64748b' }}>Start typing your address for suggestions</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>Floor Level *</label>
                        <select 
                          value={formData.floor} 
                          onChange={(e) => setFormData({ ...formData, floor: e.target.value })}
                          style={{
                            width: '100%',
                            height: '48px',
                            padding: '12px 16px',
                            border: '2px solid #e2e8f0',
                            borderRadius: '8px',
                            fontSize: '16px',
                            outline: 'none',
                            backgroundColor: 'white'
                          }}
                        >
                          <option value="">Select floor</option>
                          <option value="basement">Basement</option>
                          <option value="ground">Ground Floor</option>
                          <option value="1">1st Floor</option>
                          <option value="2">2nd Floor</option>
                          <option value="3">3rd Floor</option>
                          <option value="4">4th Floor</option>
                          <option value="5">5th Floor</option>
                          <option value=">10">10+ Floors</option>
                        </select>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>Elevator Available? *</label>
                        <select 
                          value={formData.liftAvailable} 
                          onChange={(e) => setFormData({ ...formData, liftAvailable: e.target.value })}
                          style={{
                            width: '100%',
                            height: '48px',
                            padding: '12px 16px',
                            border: '2px solid #e2e8f0',
                            borderRadius: '8px',
                            fontSize: '16px',
                            outline: 'none',
                            backgroundColor: 'white'
                          }}
                        >
                          <option value="">Select option</option>
                          <option value="yes">Yes, elevator available</option>
                          <option value="no">No, stairs only</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Navigation Buttons */}
            <div style={{ background: 'white', borderTop: '1px solid #e2e8f0', padding: '24px 32px' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={handleNext}
                  style={{ 
                    background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
                    color: 'white',
                    padding: '16px 32px',
                    borderRadius: '12px',
                    fontWeight: '600',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  Continue to Items Selection
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <UAEFooter />
    </div>
  );
};

export default UAEGetQuotePage;