import React, { useState } from 'react';
import UAEHeader from '../components/uae/UAEHeader';
import UAEFooter from '../components/uae/UAEFooter';

const UAEGetQuotePage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    floor: "",
    liftAvailable: "",
    storageType: "long-term",
  });

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
      localStorage.setItem('step1Data', JSON.stringify(formData));
      // Navigate to step 2 (implement navigation later)
      alert("Form data saved! Ready for step 2 implementation.");
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
                      style={{
                        width: '100%',
                        height: '48px',
                        padding: '12px 16px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none',
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
                      style={{
                        width: '100%',
                        height: '48px',
                        padding: '12px 16px',
                        border: '2px solid #e2e8f0',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none',
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
                    style={{
                      width: '100%',
                      height: '48px',
                      padding: '12px 16px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontSize: '16px',
                      outline: 'none',
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
                        style={{
                          width: '100%',
                          height: '48px',
                          padding: '12px 16px',
                          border: '2px solid #e2e8f0',
                          borderRadius: '8px',
                          fontSize: '16px',
                          outline: 'none',
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

                {/* Storage Type */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b' }}>Storage Duration *</h3>
                    <p style={{ fontSize: '14px', color: '#64748b', marginTop: '4px' }}>Choose the option that best fits your needs</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    
                    <label 
                      style={{ 
                        display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', 
                        borderRadius: '12px', border: '2px solid #e2e8f0', cursor: 'pointer',
                        transition: 'all 0.2s',
                        borderColor: formData.storageType === 'short-term' ? '#93c5fd' : '#e2e8f0',
                        backgroundColor: formData.storageType === 'short-term' ? '#dbeafe' : 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#93c5fd';
                        e.currentTarget.style.backgroundColor = '#dbeafe';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = formData.storageType === 'short-term' ? '#93c5fd' : '#e2e8f0';
                        e.currentTarget.style.backgroundColor = formData.storageType === 'short-term' ? '#dbeafe' : 'transparent';
                      }}
                    >
                      <input
                        type="radio"
                        name="storageType"
                        value="short-term"
                        checked={formData.storageType === 'short-term'}
                        onChange={(e) => setFormData({ ...formData, storageType: e.target.value })}
                        style={{ width: '16px', height: '16px', accentColor: '#2563eb' }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: '600', color: '#1e293b' }}>Short-term Storage</div>
                        <div style={{ fontSize: '14px', color: '#64748b' }}>Perfect for 1-3 months • Flexible terms</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '14px', color: '#64748b' }}>Starting from</div>
                        <div style={{ fontWeight: 'bold', color: '#2563eb' }}>AED 50/month</div>
                      </div>
                    </label>

                    <label 
                      style={{ 
                        position: 'relative', display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', 
                        borderRadius: '12px', border: '2px solid #e2e8f0', cursor: 'pointer',
                        transition: 'all 0.2s',
                        borderColor: formData.storageType === 'long-term' ? '#6ee7b7' : '#e2e8f0',
                        backgroundColor: formData.storageType === 'long-term' ? '#d1fae5' : 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#6ee7b7';
                        e.currentTarget.style.backgroundColor = '#d1fae5';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = formData.storageType === 'long-term' ? '#6ee7b7' : '#e2e8f0';
                        e.currentTarget.style.backgroundColor = formData.storageType === 'long-term' ? '#d1fae5' : 'transparent';
                      }}
                    >
                      <input
                        type="radio"
                        name="storageType"
                        value="long-term"
                        checked={formData.storageType === 'long-term'}
                        onChange={(e) => setFormData({ ...formData, storageType: e.target.value })}
                        style={{ width: '16px', height: '16px', accentColor: '#059669' }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: '600', color: '#1e293b' }}>Long-term Storage</div>
                        <div style={{ fontSize: '14px', color: '#059669', fontWeight: '500' }}>3+ months • Save 15% on total cost</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '14px', color: '#64748b' }}>Starting from</div>
                        <div style={{ fontWeight: 'bold', color: '#059669' }}>AED 42/month</div>
                      </div>
                      <span style={{ 
                        position: 'absolute', top: '8px', right: '8px', backgroundColor: '#059669', 
                        color: 'white', fontSize: '12px', padding: '4px 8px', borderRadius: '9999px', 
                        fontWeight: 'bold' 
                      }}>
                        BEST VALUE
                      </span>
                    </label>

                    <label 
                      style={{ 
                        display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', 
                        borderRadius: '12px', border: '2px solid #e2e8f0', cursor: 'pointer',
                        transition: 'all 0.2s',
                        borderColor: formData.storageType === 'business' ? '#c084fc' : '#e2e8f0',
                        backgroundColor: formData.storageType === 'business' ? '#faf5ff' : 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#c084fc';
                        e.currentTarget.style.backgroundColor = '#faf5ff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = formData.storageType === 'business' ? '#c084fc' : '#e2e8f0';
                        e.currentTarget.style.backgroundColor = formData.storageType === 'business' ? '#faf5ff' : 'transparent';
                      }}
                    >
                      <input
                        type="radio"
                        name="storageType"
                        value="business"
                        checked={formData.storageType === 'business'}
                        onChange={(e) => setFormData({ ...formData, storageType: e.target.value })}
                        style={{ width: '16px', height: '16px', accentColor: '#9333ea' }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: '600', color: '#1e293b' }}>Business Storage</div>
                        <div style={{ fontSize: '14px', color: '#64748b' }}>Commercial solutions • Bulk discounts available</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '14px', color: '#64748b' }}>Custom pricing</div>
                        <div style={{ fontWeight: 'bold', color: '#9333ea' }}>Contact us</div>
                      </div>
                    </label>
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