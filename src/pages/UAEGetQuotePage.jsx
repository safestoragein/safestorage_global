import React, { useState, useEffect } from 'react';
import UAEHeader from '../components/uae/UAEHeader';
import UAEFooter from '../components/uae/UAEFooter';
import { itemsService } from '../services/itemsService';
import { 
  Calculator, Package, MapPin, Calendar, Clock, 
  DollarSign, CheckCircle, Star, ArrowRight, Phone,
  Mail, MessageCircle, Shield, Award, Zap, Users,
  Building, Home, FileText, Car, Truck, Search,
  Plus, Minus, Loader, Sparkles, Building2,
  MapPinIcon, Elevator, CalendarIcon
} from 'lucide-react';
import '../components/uae/UAEGetQuotePage.css';

const UAEGetQuotePage = () => {
  const [formData, setFormData] = useState({
    // Customer Details
    name: '',
    email: '',
    mobile: '',
    address: '',
    floor: '',
    elevator: '',
    storageType: '',
    duration: 1,
    
    // Selected Items
    selectedItems: [],
    
    // Additional Services
    additionalServices: []
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [availableItems, setAvailableItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [itemSearchTerm, setItemSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [calculatedPrice, setCalculatedPrice] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const storageTypes = [
    { 
      id: 'household', 
      name: 'Household Storage', 
      icon: <Home />, 
      desc: 'Furniture, appliances, and personal items',
      color: '#10b981'
    },
    { 
      id: 'business', 
      name: 'Business Storage', 
      icon: <Building2 />, 
      desc: 'Office equipment, inventory, and documents',
      color: '#3b82f6'
    }
  ];

  const additionalServices = [
    { 
      id: 'pickup', 
      name: 'Free Pickup & Delivery', 
      price: 0, 
      desc: 'We collect and deliver your items',
      icon: <Truck />
    },
    { 
      id: 'packing', 
      name: 'Professional Packing', 
      price: 150, 
      desc: 'Expert packing with quality materials',
      icon: <Package />
    },
    { 
      id: 'insurance', 
      name: 'Premium Insurance', 
      price: 50, 
      desc: 'Extended coverage up to AED 50,000',
      icon: <Shield />
    },
    { 
      id: 'climate', 
      name: 'Climate Control', 
      price: 100, 
      desc: 'Temperature and humidity controlled',
      icon: <Star />
    }
  ];

  const durations = [
    { value: 1, label: '1 Month', discount: 0 },
    { value: 3, label: '3 Months', discount: 10 },
    { value: 6, label: '6 Months', discount: 15 },
    { value: 12, label: '12+ Months', discount: 20 }
  ];

  // Load items from API
  useEffect(() => {
    const loadItems = async () => {
      setLoading(true);
      try {
        const items = await itemsService.getDubaiItems();
        setAvailableItems(items);
        setFilteredItems(items);
      } catch (error) {
        console.error('Failed to load items:', error);
        // Fallback items if API fails
        const fallbackItems = [
          { id: 1, name: 'Sofa (2-3 Seater)', price: 45, category: 'Furniture' },
          { id: 2, name: 'Double Bed', price: 40, category: 'Furniture' },
          { id: 3, name: 'Dining Table (4 Chairs)', price: 35, category: 'Furniture' },
          { id: 4, name: 'Refrigerator', price: 30, category: 'Appliances' },
          { id: 5, name: 'Washing Machine', price: 25, category: 'Appliances' },
          { id: 6, name: 'Television (32-55")', price: 20, category: 'Electronics' },
          { id: 7, name: 'Wardrobe (Large)', price: 50, category: 'Furniture' },
          { id: 8, name: 'Storage Boxes (Medium)', price: 8, category: 'Boxes' },
          { id: 9, name: 'Mattress (Queen)', price: 25, category: 'Furniture' },
          { id: 10, name: 'Office Desk', price: 30, category: 'Office' }
        ];
        setAvailableItems(fallbackItems);
        setFilteredItems(fallbackItems);
      }
      setLoading(false);
    };

    loadItems();
  }, []);

  // Filter items based on search
  useEffect(() => {
    const filtered = availableItems.filter(item =>
      item.name.toLowerCase().includes(itemSearchTerm.toLowerCase()) ||
      (item.category && item.category.toLowerCase().includes(itemSearchTerm.toLowerCase()))
    );
    setFilteredItems(filtered);
  }, [itemSearchTerm, availableItems]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        additionalServices: checked 
          ? [...prev.additionalServices, value]
          : prev.additionalServices.filter(service => service !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const addItemToSelection = (item) => {
    setFormData(prev => {
      const existingItem = prev.selectedItems.find(selected => selected.id === item.id);
      if (existingItem) {
        return {
          ...prev,
          selectedItems: prev.selectedItems.map(selected =>
            selected.id === item.id 
              ? { ...selected, quantity: selected.quantity + 1 }
              : selected
          )
        };
      } else {
        return {
          ...prev,
          selectedItems: [...prev.selectedItems, { ...item, quantity: 1 }]
        };
      }
    });
  };

  const updateItemQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      setFormData(prev => ({
        ...prev,
        selectedItems: prev.selectedItems.filter(item => item.id !== itemId)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        selectedItems: prev.selectedItems.map(item =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      }));
    }
  };

  const calculatePrice = () => {
    const pricing = itemsService.calculatePricing(
      formData.selectedItems,
      formData.duration,
      formData.additionalServices.map(serviceId => 
        additionalServices.find(s => s.id === serviceId)
      )
    );
    
    setCalculatedPrice(pricing);
  };

  const nextStep = () => {
    if (currentStep === 2) {
      calculatePrice();
    }
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const submitQuote = async () => {
    setLoading(true);
    try {
      const quoteData = {
        customerDetails: {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          address: formData.address,
          floor: formData.floor,
          elevator: formData.elevator
        },
        storageType: formData.storageType,
        duration: formData.duration,
        items: formData.selectedItems,
        services: formData.additionalServices,
        pricing: calculatedPrice
      };

      if (formData.storageType === 'household') {
        await itemsService.submitHouseholdQuote(quoteData);
      } else {
        await itemsService.submitBusinessQuote(quoteData);
      }

      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
      
    } catch (error) {
      console.error('Failed to submit quote:', error);
      alert('Failed to submit quote. Please try again or contact support.');
    }
    setLoading(false);
  };

  return (
    <div className="uae-get-quote-page">
      <UAEHeader />

      {/* Confetti Animation */}
      {showConfetti && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 9999,
          background: 'radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 50%)',
          animation: 'confetti-fall 3s ease-out'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '48px',
            color: '#10b981',
            fontWeight: 'bold',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            🎉 Quote Submitted Successfully! 🎉
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="quote-hero-section" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '80px 0 60px',
        textAlign: 'center'
      }}>
        <div className="quote-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '20px', marginBottom: '20px' }}>
            <Calculator size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            <span>Get Free Quote in 3 Steps</span>
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px', lineHeight: '1.2' }}>
            Get Your <span style={{ color: '#ffd700' }}>Instant Quote</span>
          </h1>
          <p style={{ fontSize: '20px', marginBottom: '40px', opacity: '0.9' }}>
            Store with confidence. Starting from AED 24/month with free pickup and delivery.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginBottom: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle size={20} style={{ color: '#10b981' }} />
              <span>Free Pickup & Delivery</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle size={20} style={{ color: '#10b981' }} />
              <span>24/7 Access</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle size={20} style={{ color: '#10b981' }} />
              <span>SIRA Certified</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Star size={18} fill="#ffd700" color="#ffd700" />
              <span>4.9/5 Rating</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Users size={18} />
              <span>10,000+ Happy Customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section style={{ padding: '60px 0', background: '#f8fafc' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          
          {/* Progress Indicator */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              {[1, 2, 3].map((step) => (
                <div key={step} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: currentStep >= step ? '#10b981' : '#e5e7eb',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    marginRight: step < 3 ? '10px' : '0'
                  }}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div style={{
                      width: '80px',
                      height: '2px',
                      background: currentStep > step ? '#10b981' : '#e5e7eb',
                      marginRight: '10px'
                    }} />
                  )}
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '14px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Step {currentStep} of 3
              </div>
              <div style={{ fontSize: '18px', fontWeight: '600', marginTop: '4px' }}>
                {currentStep === 1 && 'Customer Details'}
                {currentStep === 2 && 'Select Items'}
                {currentStep === 3 && 'Price & Confirmation'}
              </div>
            </div>
          </div>

          <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>

            {/* Step 1: Customer Details */}
            {currentStep === 1 && (
              <div>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                  <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '12px' }}>Tell us about yourself</h2>
                  <p style={{ color: '#6b7280' }}>We need these details for pickup and delivery</p>
                </div>

                {/* Storage Type Selection */}
                <div style={{ marginBottom: '30px' }}>
                  <label style={{ display: 'block', fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>
                    What type of storage do you need? *
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                    {storageTypes.map((type) => (
                      <div 
                        key={type.id}
                        onClick={() => setFormData({...formData, storageType: type.id})}
                        style={{
                          padding: '20px',
                          border: `2px solid ${formData.storageType === type.id ? type.color : '#e5e7eb'}`,
                          borderRadius: '12px',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          background: formData.storageType === type.id ? `${type.color}15` : 'white'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                          <div style={{ color: type.color, marginRight: '12px' }}>
                            {type.icon}
                          </div>
                          <h3 style={{ fontSize: '18px', fontWeight: '600', margin: 0 }}>{type.name}</h3>
                        </div>
                        <p style={{ color: '#6b7280', margin: 0, fontSize: '14px' }}>{type.desc}</p>
                        {formData.storageType === type.id && (
                          <div style={{ marginTop: '12px', color: type.color }}>
                            <CheckCircle size={20} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Customer Details Form */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                      Full Name *
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#10b981'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                      Email Address *
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#10b981'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                      Mobile Number *
                    </label>
                    <input 
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="+971 XX XXX XXXX"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#10b981'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                      Storage Duration *
                    </label>
                    <select 
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none',
                        backgroundColor: 'white'
                      }}
                      required
                    >
                      {durations.map((duration) => (
                        <option key={duration.value} value={duration.value}>
                          {duration.label} {duration.discount > 0 && `(${duration.discount}% off)`}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                    <MapPinIcon size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                    Pickup/Delivery Address *
                  </label>
                  <input 
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Building name, street, area, Dubai"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '16px',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#10b981'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                      Floor Level *
                    </label>
                    <select 
                      name="floor"
                      value={formData.floor}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none',
                        backgroundColor: 'white'
                      }}
                      required
                    >
                      <option value="">Select floor</option>
                      <option value="ground">Ground Floor</option>
                      <option value="1">1st Floor</option>
                      <option value="2">2nd Floor</option>
                      <option value="3">3rd Floor</option>
                      <option value="4">4th Floor</option>
                      <option value="5+">5th Floor+</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
                      Elevator Available? *
                    </label>
                    <select 
                      name="elevator"
                      value={formData.elevator}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none',
                        backgroundColor: 'white'
                      }}
                      required
                    >
                      <option value="">Select option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="goods">Goods Lift Only</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Item Selection */}
            {currentStep === 2 && (
              <div>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '12px' }}>What do you want to store?</h2>
                  <p style={{ color: '#6b7280' }}>Select items and quantities for accurate pricing</p>
                </div>

                {/* Search Bar */}
                <div style={{ marginBottom: '30px', position: 'relative' }}>
                  <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#6b7280' }} />
                  <input 
                    type="text"
                    value={itemSearchTerm}
                    onChange={(e) => setItemSearchTerm(e.target.value)}
                    placeholder="Search items (e.g., sofa, bed, boxes)..."
                    style={{
                      width: '100%',
                      padding: '12px 16px 12px 48px',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Selected Items Summary */}
                {formData.selectedItems.length > 0 && (
                  <div style={{ marginBottom: '30px', padding: '20px', background: '#f0fdf4', border: '1px solid #10b981', borderRadius: '8px' }}>
                    <h4 style={{ margin: '0 0 16px 0', color: '#10b981', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle size={20} />
                      Selected Items ({formData.selectedItems.length})
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
                      {formData.selectedItems.map((item) => (
                        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', padding: '12px', borderRadius: '6px' }}>
                          <div>
                            <div style={{ fontWeight: '600', fontSize: '14px' }}>{item.name}</div>
                            <div style={{ color: '#6b7280', fontSize: '12px' }}>AED {item.price}/month</div>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <button 
                              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                              style={{
                                width: '24px',
                                height: '24px',
                                border: '1px solid #e5e7eb',
                                borderRadius: '4px',
                                background: 'white',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              <Minus size={12} />
                            </button>
                            <span style={{ fontWeight: '600', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                            <button 
                              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                              style={{
                                width: '24px',
                                height: '24px',
                                border: '1px solid #e5e7eb',
                                borderRadius: '4px',
                                background: 'white',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Available Items */}
                <div>
                  <h4 style={{ marginBottom: '16px' }}>Available Items</h4>
                  {loading ? (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
                      <Loader className="animate-spin" size={24} />
                      <span style={{ marginLeft: '12px' }}>Loading items...</span>
                    </div>
                  ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px' }}>
                      {filteredItems.map((item) => {
                        const selectedItem = formData.selectedItems.find(selected => selected.id === item.id);
                        return (
                          <div 
                            key={item.id}
                            style={{
                              border: '1px solid #e5e7eb',
                              borderRadius: '8px',
                              padding: '16px',
                              cursor: 'pointer',
                              transition: 'all 0.2s',
                              background: selectedItem ? '#f0fdf4' : 'white'
                            }}
                            onClick={() => addItemToSelection(item)}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                              <div>
                                <h5 style={{ margin: '0 0 4px 0', fontWeight: '600' }}>{item.name}</h5>
                                {item.category && (
                                  <span style={{ fontSize: '12px', color: '#6b7280', background: '#f3f4f6', padding: '2px 6px', borderRadius: '4px' }}>
                                    {item.category}
                                  </span>
                                )}
                              </div>
                              <div style={{ textAlign: 'right' }}>
                                <div style={{ fontWeight: '600', color: '#10b981' }}>AED {item.price}</div>
                                <div style={{ fontSize: '12px', color: '#6b7280' }}>/month</div>
                              </div>
                            </div>
                            <button 
                              style={{
                                width: '100%',
                                padding: '8px',
                                background: selectedItem ? '#10b981' : '#f3f4f6',
                                color: selectedItem ? 'white' : '#374151',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: '500',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '6px'
                              }}
                            >
                              {selectedItem ? (
                                <>
                                  <CheckCircle size={16} />
                                  Added ({selectedItem.quantity})
                                </>
                              ) : (
                                <>
                                  <Plus size={16} />
                                  Add Item
                                </>
                              )}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Additional Services */}
                <div style={{ marginTop: '40px' }}>
                  <h4 style={{ marginBottom: '16px' }}>Additional Services</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px' }}>
                    {additionalServices.map((service) => (
                      <label key={service.id} style={{ cursor: 'pointer' }}>
                        <input 
                          type="checkbox"
                          value={service.id}
                          checked={formData.additionalServices.includes(service.id)}
                          onChange={handleInputChange}
                          style={{ display: 'none' }}
                        />
                        <div style={{
                          border: `2px solid ${formData.additionalServices.includes(service.id) ? '#10b981' : '#e5e7eb'}`,
                          borderRadius: '8px',
                          padding: '16px',
                          transition: 'all 0.2s',
                          background: formData.additionalServices.includes(service.id) ? '#f0fdf4' : 'white'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                            <div style={{ color: '#10b981', marginRight: '8px' }}>
                              {service.icon}
                            </div>
                            <h5 style={{ margin: 0, fontWeight: '600' }}>{service.name}</h5>
                          </div>
                          <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#6b7280' }}>{service.desc}</p>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontWeight: '600', color: service.price === 0 ? '#10b981' : '#374151' }}>
                              {service.price === 0 ? 'FREE' : `+AED ${service.price}/month`}
                            </span>
                            {formData.additionalServices.includes(service.id) && (
                              <CheckCircle size={20} style={{ color: '#10b981' }} />
                            )}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Price Display */}
            {currentStep === 3 && calculatedPrice && (
              <div>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                  <div style={{ fontSize: '60px', marginBottom: '20px' }}>🎉</div>
                  <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '12px', color: '#10b981' }}>Your Quote is Ready!</h2>
                  <p style={{ color: '#6b7280' }}>Here's your personalized storage solution</p>
                </div>

                {/* Price Breakdown */}
                <div style={{ background: 'linear-gradient(135deg, #10b981, #059669)', color: 'white', padding: '30px', borderRadius: '12px', marginBottom: '30px', textAlign: 'center' }}>
                  <h3 style={{ margin: '0 0 20px 0', fontSize: '20px' }}>Monthly Cost</h3>
                  <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>
                    AED {calculatedPrice.monthlyDiscounted.toFixed(0)}
                  </div>
                  <div style={{ opacity: '0.9', fontSize: '16px' }}>
                    per month × {formData.duration} months = AED {calculatedPrice.totalCost.toFixed(0)} total
                  </div>
                  {calculatedPrice.discountAmount > 0 && (
                    <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(255,255,255,0.2)', borderRadius: '8px' }}>
                      <span style={{ fontSize: '16px', fontWeight: '600' }}>
                        💰 You Save AED {calculatedPrice.discountAmount.toFixed(0)} ({calculatedPrice.discountPercentage}% off)
                      </span>
                    </div>
                  )}
                </div>

                {/* Items Summary */}
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ marginBottom: '16px' }}>Selected Items ({formData.selectedItems.length})</h4>
                  <div style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                    {formData.selectedItems.map((item) => (
                      <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid #f3f4f6' }}>
                        <div>
                          <span style={{ fontWeight: '600' }}>{item.name}</span>
                          <span style={{ color: '#6b7280', marginLeft: '8px' }}>× {item.quantity}</span>
                        </div>
                        <span style={{ fontWeight: '600' }}>AED {(item.price * item.quantity).toFixed(0)}/mo</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services Summary */}
                {formData.additionalServices.length > 0 && (
                  <div style={{ marginBottom: '30px' }}>
                    <h4 style={{ marginBottom: '16px' }}>Additional Services</h4>
                    <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px' }}>
                      {formData.additionalServices.map((serviceId) => {
                        const service = additionalServices.find(s => s.id === serviceId);
                        return (
                          <div key={serviceId} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid #f3f4f6' }}>
                            <span style={{ fontWeight: '600' }}>{service.name}</span>
                            <span style={{ fontWeight: '600', color: service.price === 0 ? '#10b981' : '#374151' }}>
                              {service.price === 0 ? 'FREE' : `AED ${service.price}/mo`}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* What's Included */}
                <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
                  <h4 style={{ marginBottom: '16px' }}>What's Included</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle size={16} style={{ color: '#10b981' }} />
                      <span>24/7 Facility Access</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle size={16} style={{ color: '#10b981' }} />
                      <span>CCTV Security Monitoring</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle size={16} style={{ color: '#10b981' }} />
                      <span>Basic Insurance Coverage</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle size={16} style={{ color: '#10b981' }} />
                      <span>SIRA Certified Facility</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  onClick={submitQuote}
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: loading ? '#9ca3af' : 'linear-gradient(135deg, #10b981, #059669)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '18px',
                    fontWeight: '600',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    transition: 'all 0.2s'
                  }}
                >
                  {loading ? (
                    <>
                      <Loader className="animate-spin" size={20} />
                      Submitting Quote...
                    </>
                  ) : (
                    <>
                      <Sparkles size={20} />
                      Confirm & Get Quote
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Navigation */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px', paddingTop: '30px', borderTop: '1px solid #e5e7eb' }}>
              <div>
                {currentStep > 1 && (
                  <button 
                    onClick={prevStep}
                    style={{
                      padding: '12px 24px',
                      background: 'white',
                      color: '#374151',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    ← Previous
                  </button>
                )}
              </div>
              
              <div>
                {currentStep < 3 && (
                  <button 
                    onClick={nextStep}
                    disabled={
                      (currentStep === 1 && (!formData.name || !formData.email || !formData.mobile || !formData.address || !formData.storageType || !formData.floor || !formData.elevator)) ||
                      (currentStep === 2 && formData.selectedItems.length === 0)
                    }
                    style={{
                      padding: '12px 24px',
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      opacity: (currentStep === 1 && (!formData.name || !formData.email || !formData.mobile || !formData.address || !formData.storageType || !formData.floor || !formData.elevator)) || 
                               (currentStep === 2 && formData.selectedItems.length === 0) ? 0.5 : 1
                    }}
                  >
                    {currentStep === 2 ? 'Calculate Price' : 'Continue'} →
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '60px 0', background: '#1f2937', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '16px' }}>
            Need Help? We're Here for You!
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '30px', opacity: '0.9' }}>
            Our storage experts are available to assist you with any questions
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="tel:8088848484"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 28px',
                background: '#10b981',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'all 0.2s'
              }}
            >
              <Phone size={20} />
              Call 8088848484
            </a>
            <a 
              href="https://wa.me/8088848484"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 28px',
                background: '#25d366',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'all 0.2s'
              }}
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <UAEFooter />
    </div>
  );
};

export default UAEGetQuotePage;