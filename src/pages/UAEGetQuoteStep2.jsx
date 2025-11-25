import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UAEHeader from '../components/uae/UAEHeader';
import UAEFooter from '../components/uae/UAEFooter';
import { sessionManager } from '../utils/sessionManager';
import '../components/uae/UAEQuoteForm.css';

const UAEGetQuoteStep2 = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [apiItems, setApiItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  // Load step 1 data and previous selections
  useEffect(() => {
    const step1Data = sessionManager.getData('step1Data');
    if (!step1Data) {
      alert('Please complete Step 1 first');
      navigate('/uae/get-quote');
      return;
    }

    // Load previously selected items if any
    const step2Data = sessionManager.getData('step2Data');
    if (step2Data && step2Data.selectedItems) {
      setSelectedItems(step2Data.selectedItems);
    }
  }, []);

  // Fetch items from API
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('https://safestorage.in/back/app/dubai_items_list');
        const data = await response.json();

        if (data.status && data.data) {
          setApiItems(data.data);
          setFilteredItems(data.data);
          setDisplayedItems(data.data.slice(0, 20));
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        console.error('Error fetching items:', error);
        // Fallback mock data for demo
        const mockItems = [
          { storage_item_name: "Single Seater Sofa", aed_item_points: "25" },
          { storage_item_name: "Double Bed", aed_item_points: "35" },
          { storage_item_name: "Dining Table (4 seater)", aed_item_points: "30" },
          { storage_item_name: "Office Chair", aed_item_points: "15" },
          { storage_item_name: "Refrigerator (Medium)", aed_item_points: "40" },
          { storage_item_name: "TV (32-42 inch)", aed_item_points: "20" },
          { storage_item_name: "Washing Machine", aed_item_points: "35" },
          { storage_item_name: "Wardrobe (2 door)", aed_item_points: "45" },
          { storage_item_name: "Study Table", aed_item_points: "25" },
          { storage_item_name: "Bookshelf", aed_item_points: "30" }
        ];
        setApiItems(mockItems);
        setFilteredItems(mockItems);
        setDisplayedItems(mockItems);
        alert("Failed to load items. Using demo data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  // Search functionality
  useEffect(() => {
    if (!searchTerm) {
      setFilteredItems(apiItems);
      setDisplayedItems(showMore ? apiItems : apiItems.slice(0, 20));
    } else {
      const filtered = apiItems.filter(item =>
        item.storage_item_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(filtered);
      setDisplayedItems(filtered);
    }
  }, [searchTerm, apiItems, showMore]);

  // Auto-save selected items to session storage whenever they change
  useEffect(() => {
    if (selectedItems.length > 0) {
      sessionManager.saveData('step2Data', { selectedItems });
    }
  }, [selectedItems]);

  const getItemIcon = (itemName) => {
    const name = itemName.toLowerCase();
    
    if (name.includes('sofa') || name.includes('couch')) return '🛋️';
    if (name.includes('chair') || name.includes('armchair')) return '🪑';
    if (name.includes('table') || name.includes('desk')) return '🪑';
    if (name.includes('bed') || name.includes('mattress')) return '🛏️';
    if (name.includes('wardrobe') || name.includes('almirah') || name.includes('cupboard')) return '🚪';
    if (name.includes('tv') || name.includes('television')) return '📺';
    if (name.includes('laptop') || name.includes('computer')) return '💻';
    if (name.includes('refrigerator') || name.includes('fridge')) return '🧊';
    if (name.includes('washing machine') || name.includes('washer')) return '🌊';
    if (name.includes('microwave') || name.includes('oven')) return '🔥';
    if (name.includes('ac') || name.includes('air condition')) return '❄️';
    if (name.includes('kitchen') || name.includes('cooking') || name.includes('utensils')) return '🍳';
    if (name.includes('dining') || name.includes('plates') || name.includes('dishes')) return '🍽️';
    if (name.includes('gym') || name.includes('fitness') || name.includes('exercise')) return '💪';
    if (name.includes('bike') || name.includes('bicycle')) return '🚲';
    if (name.includes('book') || name.includes('shelf') || name.includes('library')) return '📚';
    if (name.includes('cloth') || name.includes('dress') || name.includes('shirt')) return '👕';
    if (name.includes('box') || name.includes('container') || name.includes('storage')) return '📦';
    
    return '📦';
  };

  const addItem = (item) => {
    const existingItem = selectedItems.find(si => si.name === item.storage_item_name);
    if (existingItem) {
      setSelectedItems(selectedItems.map(si =>
        si.name === item.storage_item_name
          ? { ...si, quantity: si.quantity + 1 }
          : si
      ));
    } else {
      setSelectedItems([...selectedItems, {
        name: item.storage_item_name,
        quantity: 1,
        price: parseInt(item.aed_item_points)
      }]);
    }
  };

  const removeItem = (index) => {
    setSelectedItems(selectedItems.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, delta) => {
    setSelectedItems(selectedItems.map((item, i) =>
      i === index
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const handleNext = () => {
    console.log('handleNext clicked - selectedItems length:', selectedItems.length);
    
    if (selectedItems.length === 0) {
      alert("Please select at least one item");
      return;
    }

    // Save selected items to session storage
    sessionManager.saveData('step2Data', { selectedItems });
    console.log('Selected Items saved:', selectedItems);
    console.log('About to navigate to step 3...');
    
    // Navigate to step 3
    navigate('/uae/get-quote/step3');
  };

  const handlePrevious = () => {
    navigate('/uae/get-quote');
  };

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
              <p style={{ color: '#64748b' }}>Step 2 of 3: Select Items</p>
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
                  width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#2563eb', 
                  color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', 
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
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 16px' }}>
          <div style={{ 
            background: 'white', borderRadius: '16px', 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', 
            border: '1px solid #e2e8f0', overflow: 'hidden', minHeight: '600px'
          }}>
            {/* Items Header */}
            <div style={{ background: 'linear-gradient(to right, #dbeafe, #e0e7ff)', padding: '32px', borderBottom: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>
                    Select Your Items
                  </h2>
                  <p style={{ color: '#64748b' }}>Choose the items you want to store</p>
                </div>
                {selectedItems.length > 0 && (
                  <div style={{ background: 'white', borderRadius: '12px', padding: '16px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', border: '1px solid #dbeafe', textAlign: 'center' }}>
                    <div style={{ fontSize: '14px', color: '#64748b' }}>Selected Items</div>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2563eb' }}>{selectedItems.length}</div>
                  </div>
                )}
              </div>

              {/* Search Bar */}
              <div style={{ position: 'relative', maxWidth: '400px' }}>
                <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }}>
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search for furniture, electronics, etc..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="uae-quote-input"
                  style={{
                    width: '100%',
                    paddingLeft: '48px',
                    paddingRight: searchTerm ? '48px' : '16px',
                    height: '48px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '16px',
                    color: '#000000',
                    backgroundColor: 'white',
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
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    style={{ 
                      position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', 
                      color: '#64748b', background: 'none', border: 'none', cursor: 'pointer' 
                    }}
                  >
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Items Content - Two Column Layout */}
            <div style={{ 
              display: 'flex', 
              flexDirection: window.innerWidth < 768 ? 'column' : 'row',
              gap: '24px', 
              padding: '32px', 
              minHeight: '600px' 
            }}>
              {/* Items Grid - Left Side */}
              <div style={{ flex: selectedItems.length > 0 ? '2' : '1' }}>
              {isLoading ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                  {[...Array(12)].map((_, i) => (
                    <div key={i} style={{ animation: 'pulse 1.5s ease-in-out infinite' }}>
                      <div style={{ background: '#e2e8f0', borderRadius: '12px', height: '120px', marginBottom: '8px' }}></div>
                      <div style={{ height: '16px', background: '#e2e8f0', borderRadius: '4px', marginBottom: '8px' }}></div>
                      <div style={{ height: '12px', background: '#e2e8f0', borderRadius: '4px', width: '60%' }}></div>
                    </div>
                  ))}
                </div>
              ) : displayedItems.length > 0 ? (
                <>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
                    gap: '16px',
                    maxHeight: '400px',
                    overflowY: 'auto',
                    padding: '8px'
                  }}>
                    {displayedItems.map((item, index) => {
                      const isSelected = selectedItems.find(si => si.name === item.storage_item_name);

                      return (
                        <div
                          key={`${item.storage_item_name}-${index}`}
                          style={{
                            position: 'relative',
                            background: 'white',
                            borderRadius: '12px',
                            padding: '16px',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                            border: `2px solid ${isSelected ? '#2563eb' : '#e2e8f0'}`,
                            backgroundColor: isSelected ? '#dbeafe' : 'white',
                            textAlign: 'center'
                          }}
                          onClick={() => addItem(item)}
                          onMouseEnter={(e) => {
                            if (!isSelected) {
                              e.target.style.transform = 'scale(1.03)';
                              e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isSelected) {
                              e.target.style.transform = 'scale(1)';
                              e.target.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
                            }
                          }}
                        >
                          <div style={{ 
                            fontSize: '32px', 
                            marginBottom: '12px',
                            padding: '12px',
                            borderRadius: '12px',
                            backgroundColor: isSelected ? '#2563eb' : '#f1f5f9',
                            color: isSelected ? 'white' : '#64748b',
                            display: 'inline-block'
                          }}>
                            {getItemIcon(item.storage_item_name)}
                          </div>
                          <div style={{ 
                            fontSize: '14px', 
                            fontWeight: '500', 
                            lineHeight: '1.3', 
                            marginBottom: '8px',
                            color: isSelected ? '#1e293b' : '#374151'
                          }}>
                            {item.storage_item_name}
                          </div>

                          {isSelected && (
                            <>
                              <div style={{
                                position: 'absolute',
                                top: '-8px',
                                right: '-8px',
                                width: '32px',
                                height: '32px',
                                backgroundColor: '#2563eb',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                              }}>
                                ✓
                              </div>
                              <div style={{ textAlign: 'center', marginTop: '8px' }}>
                                <span style={{ 
                                  display: 'inline-flex', 
                                  alignItems: 'center', 
                                  padding: '4px 8px', 
                                  backgroundColor: '#dbeafe', 
                                  color: '#1e40af', 
                                  fontSize: '12px', 
                                  fontWeight: '500', 
                                  borderRadius: '9999px' 
                                }}>
                                  Qty: {isSelected.quantity}
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Show More Button */}
                  {!searchTerm && !showMore && apiItems.length > 20 && (
                    <div style={{ textAlign: 'center', marginTop: '24px' }}>
                      <button
                        onClick={() => setShowMore(true)}
                        style={{
                          padding: '12px 24px',
                          background: 'white',
                          border: '1px solid #d1d5db',
                          color: '#374151',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontWeight: '500'
                        }}
                      >
                        Show More Items ({apiItems.length - 20} remaining)
                      </button>
                    </div>
                  )}
                </>
              ) : searchTerm ? (
                <div style={{ textAlign: 'center', padding: '64px 16px' }}>
                  <div style={{ width: '64px', height: '64px', backgroundColor: '#f1f5f9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>No items found</h3>
                  <p style={{ color: '#64748b' }}>Try searching for different keywords</p>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '64px 16px' }}>
                  <div style={{ width: '64px', height: '64px', backgroundColor: '#f1f5f9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>Start by searching</h3>
                  <p style={{ color: '#64748b' }}>Search for items like "chair", "TV", "refrigerator", etc.</p>
                </div>
              )}
              </div>

              {/* Selected Items Panel - Right Side */}
              {selectedItems.length > 0 && (
                <div style={{ 
                  flex: '1', 
                  minWidth: window.innerWidth < 768 ? '100%' : '300px', 
                  maxWidth: window.innerWidth < 768 ? '100%' : '400px' 
                }}>
                  <div style={{ 
                    position: window.innerWidth < 768 ? 'relative' : 'sticky', 
                    top: window.innerWidth < 768 ? 'auto' : '24px' 
                  }}>
                    <div style={{ backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                      <div style={{ padding: '24px', borderBottom: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b' }}>
                            Selected Items ({selectedItems.length})
                          </h3>
                          <button
                            onClick={() => setSelectedItems([])}
                            style={{ fontSize: '14px', color: '#ef4444', fontWeight: '500', background: 'none', border: 'none', cursor: 'pointer' }}
                          >
                            Clear All
                          </button>
                        </div>
                        <p style={{ fontSize: '14px', color: '#64748b' }}>Review and adjust quantities</p>
                      </div>
                      
                      <div style={{ padding: '16px' }}>

                        <div style={{ 
                          display: 'flex', 
                          flexDirection: 'column',
                          gap: '12px', 
                          maxHeight: '400px', 
                          overflowY: 'auto' 
                        }}>
                  {selectedItems.map((selectedItem, index) => (
                    <div
                      key={`${selectedItem.name}-${index}`}
                      style={{
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        padding: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                        border: '1px solid #e2e8f0'
                      }}
                    >
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: '500', color: '#1e293b', fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {selectedItem.name}
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '12px' }}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            updateQuantity(index, -1);
                          }}
                          disabled={selectedItem.quantity <= 1}
                          style={{
                            width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#f3f4f6',
                            border: '2px solid #d1d5db', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: selectedItem.quantity <= 1 ? 'not-allowed' : 'pointer',
                            opacity: selectedItem.quantity <= 1 ? 0.5 : 1,
                            color: '#000000'
                          }}
                        >
                          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
                          </svg>
                        </button>

                        <span style={{ width: '40px', textAlign: 'center', fontWeight: '600', color: '#1e293b', fontSize: '16px' }}>
                          {selectedItem.quantity}
                        </span>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            updateQuantity(index, 1);
                          }}
                          style={{
                            width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#2563eb',
                            color: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer'
                          }}
                        >
                          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeItem(index);
                          }}
                          style={{
                            width: '28px', height: '28px', borderRadius: '50%', color: '#64748b',
                            backgroundColor: 'transparent', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', marginLeft: '4px'
                          }}
                        >
                          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
                  disabled={selectedItems.length === 0}
                  style={{ 
                    display: 'flex', alignItems: 'center', gap: '12px', 
                    padding: '16px 32px', background: selectedItems.length === 0 ? '#9ca3af' : 'linear-gradient(to right, #2563eb, #1d4ed8)',
                    color: 'white', borderRadius: '12px', fontWeight: '600', border: 'none',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    cursor: selectedItems.length === 0 ? 'not-allowed' : 'pointer'
                  }}
                >
                  Continue to Step 3 →
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

export default UAEGetQuoteStep2;