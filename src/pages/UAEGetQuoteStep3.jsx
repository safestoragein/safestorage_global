import React, { useState, useEffect } from 'react';
import UAEHeader from '../components/uae/UAEHeader';
import UAEFooter from '../components/uae/UAEFooter';

const UAEGetQuoteStep3 = () => {
  const [formData, setFormData] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Load data from previous steps
  useEffect(() => {
    const step1Data = localStorage.getItem('step1Data');
    const step2Data = localStorage.getItem('step2Data');

    if (!step1Data || !step2Data) {
      alert('Please complete all previous steps');
      window.location.href = '/uae/get-quote';
      return;
    }

    try {
      const parsedStep1 = JSON.parse(step1Data);
      const parsedStep2 = JSON.parse(step2Data);

      setFormData(parsedStep1);
      setSelectedItems(parsedStep2.selectedItems || []);
    } catch (error) {
      console.error('Error parsing stored data:', error);
      alert('Error loading data. Please start over.');
      window.location.href = '/uae/get-quote';
    }
  }, []);

  // Calculate pricing
  const calculatePrice = () => {
    let basePrice = 0;

    selectedItems.forEach((item) => {
      basePrice += item.price * item.quantity;
    });

    const multiplier = formData?.storageType === "long-term" ? 0.85 :
                      formData?.storageType === "business" ? 1.2 : 1;

    const finalPrice = Math.round(basePrice * multiplier);
    const monthlyPrice = Math.round(finalPrice / 30);
    const savings = formData?.storageType === "long-term" ? Math.round(basePrice * 0.15) : 0;

    return { finalPrice, monthlyPrice, basePrice, savings };
  };

  // Submit quote
  const handleSubmit = async () => {
    if (!formData) return;

    setIsSubmitting(true);

    try {
      const pricing = calculatePrice();
      const quoteData = {
        customer_name: formData.fullName,
        customer_email: formData.email,
        customer_contact1: formData.phone,
        company_name: formData.storageType === 'business' ? 'Business Customer' : '',
        storage_type: formData.storageType,
        storage_size: selectedItems.length.toString(),
        address: formData.address,
        floor: formData.floor,
        elevator: formData.liftAvailable,
        selected_items: selectedItems,
        quoted_price: pricing.finalPrice
      };

      console.log('Submitting quote data:', quoteData);

      // For now, simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success
      setIsSubmitted(true);
      triggerConfetti();

      // Clear stored data
      localStorage.removeItem('step1Data');
      localStorage.removeItem('step2Data');

      alert("Quote submitted successfully! We'll contact you soon.");

      // Redirect after 3 seconds
      setTimeout(() => {
        window.location.href = '/uae';
      }, 3000);

    } catch (error) {
      console.error('Submission error:', error);
      alert("Failed to submit quote. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerConfetti = () => {
    console.log('🎉 Confetti triggered!');
    // Simple confetti effect
    const confettiElement = document.createElement('div');
    confettiElement.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
      pointer-events: none; z-index: 9999; 
      background: radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 50%);
      animation: confetti-fall 3s ease-out forwards;
    `;
    document.body.appendChild(confettiElement);
    setTimeout(() => document.body.removeChild(confettiElement), 3000);
  };

  const handlePrevious = () => {
    window.location.href = '/uae/get-quote/step2';
  };

  const handleStartOver = () => {
    localStorage.removeItem('step1Data');
    localStorage.removeItem('step2Data');
    window.location.href = '/uae/get-quote';
  };

  if (!formData) {
    return (
      <div className="uae-get-quote-page">
        <UAEHeader />
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '18px', color: '#64748b' }}>Loading quote...</div>
          </div>
        </div>
        <UAEFooter />
      </div>
    );
  }

  const pricing = calculatePrice();

  return (
    <div className="uae-get-quote-page">
      <UAEHeader />
      
      <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #f8fafc, #e0f2fe, #e0e7ff)' }}>
        {/* Header */}
        <div style={{ background: 'white', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 16px' }}>
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>
                {isSubmitted ? 'Quote Submitted!' : 'Your Storage Quote'}
              </h1>
              <p style={{ color: '#64748b' }}>
                {isSubmitted ? 'Thank you for your request' : 'Step 3 of 3: Review & Submit'}
              </p>
            </div>

            {/* Progress Bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ 
                  width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#10b981', 
                  color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  fontSize: '14px', fontWeight: 'bold' 
                }}>
                  ✓
                </div>
                <div style={{ width: '48px', height: '1px', backgroundColor: '#10b981' }}></div>
                <div style={{ 
                  width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#10b981', 
                  color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  fontSize: '14px', fontWeight: 'bold' 
                }}>
                  ✓
                </div>
                <div style={{ width: '48px', height: '1px', backgroundColor: '#10b981' }}></div>
                <div style={{ 
                  width: '40px', height: '40px', borderRadius: '50%', 
                  backgroundColor: isSubmitted ? '#10b981' : '#2563eb', 
                  color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  fontSize: '14px', fontWeight: 'bold' 
                }}>
                  {isSubmitted ? '✓' : '3'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 16px' }}>
          <div style={{ 
            background: 'white', borderRadius: '16px', 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', 
            border: '1px solid #e2e8f0', overflow: 'hidden', minHeight: '600px'
          }}>
            {/* Quote Header */}
            <div style={{ background: 'linear-gradient(to right, #d1fae5, #a7f3d0)', padding: '32px', borderBottom: '1px solid #e2e8f0' }}>
              <div style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>
                  Your Storage Quote
                </h2>
                <p style={{ color: '#64748b' }}>Review your customized storage solution</p>
              </div>
            </div>

            <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Price Hero Section */}
              <div style={{ 
                background: 'linear-gradient(to right, #2563eb, #1d4ed8)', 
                borderRadius: '16px', padding: '32px', color: 'white', textAlign: 'center',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#bfdbfe', marginBottom: '8px' }}>
                    Total Storage Cost
                  </div>
                  <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '8px' }}>
                    AED {pricing.finalPrice}
                  </div>
                  <div style={{ color: '#bfdbfe', fontSize: '18px' }}>
                    ≈ AED {pricing.monthlyPrice} per day
                  </div>
                </div>

                {pricing.savings > 0 && (
                  <div style={{ 
                    display: 'inline-flex', alignItems: 'center', padding: '8px 16px', 
                    backgroundColor: '#10b981', color: 'white', borderRadius: '9999px', 
                    fontSize: '14px', fontWeight: '600', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                  }}>
                    <span style={{ fontSize: '18px', marginRight: '8px' }}>🎉</span>
                    You save AED {pricing.savings} with long-term storage!
                  </div>
                )}
              </div>

              {/* Quote Summary Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '4px' }}>Storage Type</div>
                      <div style={{ fontWeight: '600', color: '#1e293b', textTransform: 'capitalize' }}>
                        {formData.storageType.replace('-', ' ')}
                      </div>
                    </div>
                    <div style={{ width: '48px', height: '48px', backgroundColor: '#dbeafe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#2563eb' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '4px' }}>Selected Items</div>
                      <div style={{ fontWeight: '600', color: '#1e293b' }}>{selectedItems.length} Items</div>
                    </div>
                    <div style={{ width: '48px', height: '48px', backgroundColor: '#d1fae5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#10b981' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '4px' }}>Location</div>
                      <div style={{ fontWeight: '600', color: '#1e293b' }}>Dubai, UAE</div>
                    </div>
                    <div style={{ width: '48px', height: '48px', backgroundColor: '#faf5ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#8b5cf6' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                <div style={{ backgroundColor: '#f8fafc', padding: '16px 24px', borderBottom: '1px solid #e2e8f0' }}>
                  <h3 style={{ fontWeight: '600', color: '#1e293b', margin: 0 }}>Price Breakdown</h3>
                </div>

                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '240px', overflowY: 'auto' }}>
                    {selectedItems.map((item, index) => (
                      <div key={`${item.name}-${index}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '8px' }}>
                        <div style={{ flex: 1 }}>
                          <span style={{ color: '#1e293b', fontWeight: '500' }}>{item.name}</span>
                          <span style={{ color: '#64748b', marginLeft: '8px' }}>× {item.quantity}</span>
                        </div>
                        <div style={{ fontWeight: '600', color: '#1e293b' }}>
                          AED {item.price * item.quantity}
                        </div>
                      </div>
                    ))}

                    {pricing.savings > 0 && (
                      <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#64748b' }}>
                          <span>Subtotal</span>
                          <span>AED {pricing.basePrice}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#10b981', marginTop: '8px' }}>
                          <span>Long-term Discount (15%)</span>
                          <span>-AED {pricing.savings}</span>
                        </div>
                      </div>
                    )}

                    <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '18px' }}>
                        <span style={{ fontWeight: '600', color: '#1e293b' }}>Total</span>
                        <span style={{ fontWeight: 'bold', color: '#2563eb', fontSize: '20px' }}>AED {pricing.finalPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div style={{ backgroundColor: '#f8fafc', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontWeight: '600', color: '#1e293b', marginBottom: '16px', textAlign: 'center' }}>What's Included</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  {[
                    { icon: '🛡️', label: "24/7 Security", color: "#2563eb" },
                    { icon: '🚚', label: "Free Pickup", color: "#10b981" },
                    { icon: '🕒', label: "Flexible Access", color: "#8b5cf6" },
                    { icon: '👥', label: "Expert Team", color: "#f59e0b" },
                  ].map((feature, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                      <div style={{ 
                        width: '48px', height: '48px', backgroundColor: 'white', 
                        borderRadius: '50%', display: 'flex', alignItems: 'center', 
                        justifyContent: 'center', margin: '0 auto 8px', 
                        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', 
                        fontSize: '20px'
                      }}>
                        {feature.icon}
                      </div>
                      <p style={{ fontSize: '14px', color: '#374151', fontWeight: '500', margin: 0 }}>{feature.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information Summary */}
              <div style={{ backgroundColor: '#dbeafe', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>Pickup Details</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', fontSize: '14px' }}>
                  <div>
                    <div style={{ color: '#64748b', marginBottom: '4px' }}>Customer</div>
                    <div style={{ fontWeight: '500', color: '#1e293b' }}>{formData.fullName}</div>
                    <div style={{ color: '#64748b' }}>{formData.phone}</div>
                    <div style={{ color: '#64748b' }}>{formData.email}</div>
                  </div>
                  <div>
                    <div style={{ color: '#64748b', marginBottom: '4px' }}>Address</div>
                    <div style={{ fontWeight: '500', color: '#1e293b' }}>
                      {formData.address} (Floor {formData.floor})
                    </div>
                    <div style={{ color: '#64748b' }}>
                      Elevator: {formData.liftAvailable === 'yes' ? 'Available' : 'Not Available'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div style={{ backgroundColor: 'white', borderTop: '1px solid #e2e8f0', padding: '24px 32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                  onClick={isSubmitted ? handleStartOver : handlePrevious}
                  style={{ 
                    display: 'flex', alignItems: 'center', gap: '12px', 
                    padding: '12px 24px', background: 'white', border: '1px solid #d1d5db',
                    color: '#374151', borderRadius: '12px', fontWeight: '600', cursor: 'pointer'
                  }}
                >
                  {isSubmitted ? 'Start New Quote' : '← Previous'}
                </button>

                {!isSubmitted && (
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    style={{ 
                      display: 'flex', alignItems: 'center', gap: '12px', 
                      padding: '16px 32px', 
                      background: isSubmitting ? '#9ca3af' : 'linear-gradient(to right, #10b981, #059669)',
                      color: 'white', borderRadius: '12px', fontWeight: '600', border: 'none',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      minWidth: '180px', justifyContent: 'center'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div style={{ width: '20px', height: '20px', border: '2px solid white', borderTop: '2px solid transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Get My Quote</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '32px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            textAlign: 'center',
            zIndex: 50,
            maxWidth: '400px',
            width: '90%'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>
              Quote Submitted Successfully!
            </h3>
            <p style={{ color: '#64748b', marginBottom: '16px' }}>
              Our team will contact you within 24 hours to schedule pickup.
            </p>
            <div style={{ fontSize: '14px', color: '#64748b' }}>
              Redirecting to home page...
            </div>
          </div>
        )}

        {isSubmitted && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 40
          }}></div>
        )}
      </div>
      
      <UAEFooter />

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes confetti-fall {
          0% { transform: scale(0) rotate(0deg); opacity: 1; }
          10% { transform: scale(1) rotate(36deg); opacity: 1; }
          90% { transform: scale(1) rotate(324deg); opacity: 1; }
          100% { transform: scale(0) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default UAEGetQuoteStep3;