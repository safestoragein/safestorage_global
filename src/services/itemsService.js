import axios from 'axios';

const API_BASE_URL = 'https://safestorage.in/back/app';

export const itemsService = {
  // Fetch all items from Dubai items list
  async getDubaiItems() {
    try {
      const response = await axios.get(`${API_BASE_URL}/dubai_items_list`);
      return response.data || [];
    } catch (error) {
      console.error('Error fetching Dubai items:', error);
      return [];
    }
  },

  // Submit household storage quote
  async submitHouseholdQuote(quoteData) {
    try {
      const response = await axios.post(`${API_BASE_URL}/household_storage_quote`, quoteData);
      return response.data;
    } catch (error) {
      console.error('Error submitting household quote:', error);
      throw error;
    }
  },

  // Submit business storage quote
  async submitBusinessQuote(quoteData) {
    try {
      const response = await axios.post(`${API_BASE_URL}/business_storage_quote`, quoteData);
      return response.data;
    } catch (error) {
      console.error('Error submitting business quote:', error);
      throw error;
    }
  },

  // Calculate pricing based on items and services
  calculatePricing(items, duration, services = []) {
    const baseItemsCost = items.reduce((total, item) => {
      const itemCost = (item.price || 0) * (item.quantity || 1);
      return total + itemCost;
    }, 0);

    const servicesCost = services.reduce((total, service) => {
      return total + (service.price || 0);
    }, 0);

    const monthlyTotal = baseItemsCost + servicesCost;
    
    // Apply duration discounts
    let discount = 0;
    if (duration >= 12) discount = 0.20; // 20% for 12+ months
    else if (duration >= 6) discount = 0.15; // 15% for 6+ months
    else if (duration >= 3) discount = 0.10; // 10% for 3+ months

    const discountAmount = monthlyTotal * discount;
    const discountedMonthly = monthlyTotal - discountAmount;
    const totalCost = discountedMonthly * duration;

    return {
      monthlyOriginal: monthlyTotal,
      monthlyDiscounted: discountedMonthly,
      totalCost,
      discountAmount: discountAmount * duration,
      discountPercentage: discount * 100
    };
  }
};