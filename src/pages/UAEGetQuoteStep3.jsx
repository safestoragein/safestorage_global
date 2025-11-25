import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UAEHeader from '../components/uae/UAEHeader';
import UAEFooter from '../components/uae/UAEFooter';
import { sessionManager } from '../utils/sessionManager';
import '../components/uae/UAEQuoteForm.css';

const UAEGetQuoteStep3 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedStorage, setSelectedStorage] = useState('shared'); // Default to shared storage
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load data from previous steps
  useEffect(() => {
    const step1Data = sessionManager.getData('step1Data');
    const step2Data = sessionManager.getData('step2Data');

    if (!step1Data || !step2Data) {
      alert('Please complete all previous steps');
      navigate('/uae/get-quote');
      return;
    }

    setFormData(step1Data);
    setSelectedItems(step2Data.selectedItems || []);
  }, [navigate]);

  // Calculate total items and quantity
  const getTotalItems = () => selectedItems.length;
  const getTotalQuantity = () => selectedItems.reduce((total, item) => total + item.quantity, 0);
  
  // Step 1: Calculate total storage points from selected items
  const calculateTotalPoints = (items) => {
    return items.reduce((total, item) => {
      return total + (item.price * item.quantity); // item.price is actually storage_item_point from API
    }, 0);
  };

  // Step 2: Calculate pallets needed (13 points per pallet)
  const calculatePallets = (totalPoints) => {
    return Math.ceil(totalPoints / 13);
  };

  // Step 3: Calculate square feet needed (16 sqft per pallet)
  const calculateSquareFeet = (pallets) => {
    return pallets * 16;
  };

  // Step 4A: Shared Storage Pricing Calculation
  const calculateSharedSpacePricing = (items) => {
    const totalPoints = calculateTotalPoints(items);
    const pallets = calculatePallets(totalPoints);
    const calculatedSqft = calculateSquareFeet(pallets);
    
    // Minimum 30 sqft for shared space
    const chargeableSqft = Math.max(calculatedSqft, 30);
    
    // 20 AED per sqft
    const pricePerSqft = 20;
    const totalCost = chargeableSqft * pricePerSqft;
    
    return {
      totalPoints,
      pallets,
      calculatedSqft,
      chargeableSqft,
      pricePerSqft,
      totalCost,
      description: `${chargeableSqft} sqft × AED ${pricePerSqft}`
    };
  };

  // Step 4B: Closed Storage Pricing Calculation
  const calculateClosedSpacePricing = (items) => {
    const totalPoints = calculateTotalPoints(items);
    const pallets = calculatePallets(totalPoints);
    const calculatedSqft = calculateSquareFeet(pallets);
    
    // Each container is 30 sqft
    const containerSize = 30;
    const pricePerContainer = 700;
    
    // Calculate number of containers needed (round up)
    const containersNeeded = Math.ceil(calculatedSqft / containerSize);
    
    const totalCost = containersNeeded * pricePerContainer;
    
    return {
      totalPoints,
      pallets,
      calculatedSqft,
      containersNeeded,
      pricePerContainer,
      totalCost,
      description: `${containersNeeded} container${containersNeeded > 1 ? 's' : ''} × AED ${pricePerContainer}`
    };
  };

  // Main pricing calculation function
  const calculatePricing = (storageType = selectedStorage) => {
    console.log('🔍 Calculating pricing for:', storageType);
    console.log('📦 Selected items:', selectedItems);
    console.log('📊 Items count:', selectedItems.length);
    
    if (storageType === 'shared') {
      const result = calculateSharedSpacePricing(selectedItems);
      console.log('✅ Shared calculation result:', result);
      return {
        type: 'shared',
        totalCost: result.totalCost,
        breakdown: {
          totalPoints: result.totalPoints,
          pallets: result.pallets,
          calculatedSqft: result.calculatedSqft,
          chargeableSqft: result.chargeableSqft,
          pricePerSqft: result.pricePerSqft
        },
        description: result.description
      };
    } else {
      const result = calculateClosedSpacePricing(selectedItems);
      console.log('✅ Closed calculation result:', result);
      return {
        type: 'closed',
        totalCost: result.totalCost,
        breakdown: {
          totalPoints: result.totalPoints,
          pallets: result.pallets,
          calculatedSqft: result.calculatedSqft,
          containersNeeded: result.containersNeeded,
          pricePerContainer: result.pricePerContainer
        },
        description: result.description
      };
    }
  };

  const handleStorageSelection = (storageType) => {
    setSelectedStorage(storageType);
  };

  const handleNext = () => {
    // Save storage selection to session
    const step3Data = { selectedStorage };
    sessionManager.saveData('step3Data', step3Data);
    
    const finalPricing = calculatePricing(selectedStorage);
    
    // Create detailed breakdown message
    let breakdownMessage = `Selected Storage: ${selectedStorage === 'closed' ? 'Closed Storage' : 'Shared Storage'}\nTotal Monthly Cost: AED ${finalPricing.totalCost}\n\n📊 Calculation Breakdown:\n- Total Points: ${finalPricing.breakdown.totalPoints}\n- Pallets Needed: ${finalPricing.breakdown.pallets}\n- Space Required: ${finalPricing.breakdown.calculatedSqft} sqft`;
    
    if (selectedStorage === 'shared') {
      breakdownMessage += `\n- Chargeable Space: ${finalPricing.breakdown.chargeableSqft} sqft\n- Rate: ${finalPricing.breakdown.pricePerSqft} AED/sqft\n- Final Cost: ${finalPricing.breakdown.chargeableSqft} × ${finalPricing.breakdown.pricePerSqft} = AED ${finalPricing.totalCost}`;
    } else {
      breakdownMessage += `\n- Containers Needed: ${finalPricing.breakdown.containersNeeded}\n- Rate: ${finalPricing.breakdown.pricePerContainer} AED/container\n- Final Cost: ${finalPricing.breakdown.containersNeeded} × ${finalPricing.breakdown.pricePerContainer} = AED ${finalPricing.totalCost}`;
    }
    
    alert(breakdownMessage);
    console.log('Final Quote:', finalPricing);
  };

  const handlePrevious = () => {
    navigate('/uae/get-quote/step2');
  };

  if (!formData) {
    return (
      <div className="uae-get-quote-page">
        <UAEHeader />
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '18px', color: '#64748b' }}>Loading...</div>
          </div>
        </div>
        <UAEFooter />
      </div>
    );
  }

  return (
    <div className="uae-get-quote-page">
      <UAEHeader />
      
      <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #f8fafc, #e0f2fe, #e0e7ff)' }}>
        {/* Header */}
        <div style={{ background: 'white', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 16px' }}>
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>
                Get Storage Quote
              </h1>
              <p style={{ color: '#64748b' }}>Step 3 of 3: Choose Your Storage Solution</p>
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
                  width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#2563eb', 
                  color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  fontSize: '14px', fontWeight: 'bold' 
                }}>
                  3
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
            
            {/* Success Icon and Title */}
            <div style={{ textAlign: 'center', padding: '40px 32px 20px' }}>
              <div style={{ 
                width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#10b981',
                margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <svg width="40" height="40" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e293b', marginBottom: '12px' }}>
                Choose Your Storage Solution
              </h2>
              <p style={{ color: '#64748b', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
                Select between private closed storage or cost-effective shared space
              </p>
            </div>

            {/* Storage Options */}
            <div style={{ padding: '0 32px 40px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
                
                {/* Closed Storage Card */}
                <div 
                  onClick={() => handleStorageSelection('closed')}
                  style={{
                    position: 'relative',
                    background: 'white',
                    border: `3px solid ${selectedStorage === 'closed' ? '#2563eb' : '#e2e8f0'}`,
                    borderRadius: '16px',
                    padding: '32px 24px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: selectedStorage === 'closed' ? '0 20px 25px -5px rgba(0, 0, 0, 0.1)' : '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                    transform: selectedStorage === 'closed' ? 'scale(1.02)' : 'scale(1)'
                  }}
                >
                  {/* Most Secure Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#2563eb',
                    color: 'white',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    MOST SECURE
                  </div>

                  {/* Shield Icon */}
                  <div style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#dbeafe',
                    borderRadius: '16px',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="28" height="28" fill="none" stroke="#2563eb" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>

                  <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>
                      Closed Storage
                    </h3>
                    <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px' }}>
                      Your exclusive private unit
                    </p>

                    {/* Pricing */}
                    <div style={{
                      backgroundColor: '#2563eb',
                      borderRadius: '12px',
                      padding: '20px',
                      marginBottom: '20px'
                    }}>
                      <div style={{ color: '#bfdbfe', fontSize: '12px', textTransform: 'uppercase', marginBottom: '4px' }}>
                        MONTHLY RATE
                      </div>
                      <div style={{ color: 'white', fontSize: '32px', fontWeight: 'bold', marginBottom: '4px' }}>
                        AED {calculatePricing('closed').totalCost}
                      </div>
                      <div style={{ color: '#bfdbfe', fontSize: '14px' }}>
                        {calculatePricing('closed').description}
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div style={{ textAlign: 'left' }}>
                    {[
                      '100% Private Unit',
                      '24/7 Access',
                      'Climate Controlled',
                      'Personal Lock & Key',
                      'Full Insurance'
                    ].map((feature, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                        <div style={{ 
                          width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#dbeafe',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                        }}>
                          <svg width="12" height="12" fill="none" stroke="#2563eb" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span style={{ fontSize: '14px', color: '#374151' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shared Storage Card */}
                <div 
                  onClick={() => handleStorageSelection('shared')}
                  style={{
                    position: 'relative',
                    background: 'white',
                    border: `3px solid ${selectedStorage === 'shared' ? '#10b981' : '#e2e8f0'}`,
                    borderRadius: '16px',
                    padding: '32px 24px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: selectedStorage === 'shared' ? '0 20px 25px -5px rgba(0, 0, 0, 0.1)' : '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                    transform: selectedStorage === 'shared' ? 'scale(1.02)' : 'scale(1)'
                  }}
                >
                  {/* Best Value Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#10b981',
                    color: 'white',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    BEST VALUE
                  </div>

                  {/* Shared Icon */}
                  <div style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#d1fae5',
                    borderRadius: '16px',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg width="28" height="28" fill="none" stroke="#10b981" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>

                  <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>
                      Shared Storage
                    </h3>
                    <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px' }}>
                      Cost-effective shared space
                    </p>

                    {/* Pricing */}
                    <div style={{
                      backgroundColor: '#10b981',
                      borderRadius: '12px',
                      padding: '20px',
                      marginBottom: '20px'
                    }}>
                      <div style={{ color: '#a7f3d0', fontSize: '12px', textTransform: 'uppercase', marginBottom: '4px' }}>
                        MONTHLY RATE
                      </div>
                      <div style={{ color: 'white', fontSize: '32px', fontWeight: 'bold', marginBottom: '4px' }}>
                        AED {calculatePricing('shared').totalCost}
                      </div>
                      <div style={{ color: '#a7f3d0', fontSize: '14px' }}>
                        {calculatePricing('shared').description}
                      </div>
                      <div style={{ color: '#a7f3d0', fontSize: '12px', marginTop: '4px' }}>
                        *Minimum 30 sqft applied
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div style={{ textAlign: 'left' }}>
                    {[
                      'Shared Warehouse',
                      'Scheduled Access',
                      'Climate Controlled',
                      'Professional Care',
                      'Basic Insurance'
                    ].map((feature, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                        <div style={{ 
                          width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#d1fae5',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                        }}>
                          <svg width="12" height="12" fill="none" stroke="#10b981" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span style={{ fontSize: '14px', color: '#374151' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Selection Summary */}
            <div style={{ backgroundColor: '#f8fafc', padding: '32px', borderTop: '1px solid #e2e8f0' }}>
              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>
                  Your Selection Summary
                </h3>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#2563eb' }}>{getTotalItems()}</div>
                    <div style={{ fontSize: '14px', color: '#64748b' }}>Total Items</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#2563eb' }}>{getTotalQuantity()}</div>
                    <div style={{ fontSize: '14px', color: '#64748b' }}>Total Quantity</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#2563eb' }}>Long Term</div>
                    <div style={{ fontSize: '14px', color: '#64748b' }}>Duration</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#2563eb' }}>Dubai</div>
                    <div style={{ fontSize: '14px', color: '#64748b' }}>Location</div>
                  </div>
                </div>
              </div>

              {/* Included With Both Options */}
              <div style={{ textAlign: 'center' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>
                  Included With Both Options
                </h4>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '24px' }}>
                  {[
                    { icon: '📦', label: 'Free Pickup' },
                    { icon: '🔒', label: 'Secure' },
                    { icon: '❄️', label: 'Climate Control' },
                    { icon: '⏰', label: 'Flexible' },
                    { icon: '📞', label: '24/7 Support' }
                  ].map((feature, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '20px' }}>{feature.icon}</span>
                      <span style={{ fontSize: '14px', color: '#374151', fontWeight: '500' }}>{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div style={{ backgroundColor: 'white', borderTop: '1px solid #e2e8f0', padding: '24px 32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                  onClick={handlePrevious}
                  style={{ 
                    display: 'flex', alignItems: 'center', gap: '12px', 
                    padding: '12px 24px', background: 'white', border: '1px solid #d1d5db',
                    color: '#374151', borderRadius: '12px', fontWeight: '600', cursor: 'pointer'
                  }}
                >
                  ← Previous
                </button>

                <button
                  onClick={handleNext}
                  style={{ 
                    display: 'flex', alignItems: 'center', gap: '12px', 
                    padding: '16px 32px', 
                    background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
                    color: 'white', borderRadius: '12px', fontWeight: '600', border: 'none',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer'
                  }}
                >
                  Get My Quote →
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

export default UAEGetQuoteStep3;