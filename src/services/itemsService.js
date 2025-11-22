import axios from 'axios';

const API_BASE_URL = 'https://safestorage.in/back/app';

export const itemsService = {
  // Fetch all items from Dubai items list
  async getDubaiItems() {
    try {
      const response = await axios.get(`${API_BASE_URL}/dubai_items_list`);
      const data = response.data;
      
      // Ensure we always return an array
      if (Array.isArray(data)) {
        return data;
      } else if (data && Array.isArray(data.items)) {
        return data.items;
      } else if (data && Array.isArray(data.data)) {
        return data.data;
      } else {
        console.warn('API response is not an array:', data);
        return [];
      }
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
    // Ensure items is an array
    const safeItems = Array.isArray(items) ? items : [];
    const safeServices = Array.isArray(services) ? services : [];
    const safeDuration = Number(duration) || 1;

    const baseItemsCost = safeItems.reduce((total, item) => {
      if (!item) return total;
      const itemCost = (Number(item.price) || 0) * (Number(item.quantity) || 1);
      return total + itemCost;
    }, 0);

    const servicesCost = safeServices.reduce((total, service) => {
      if (!service) return total;
      return total + (Number(service.price) || 0);
    }, 0);

    const monthlyTotal = baseItemsCost + servicesCost;
    
    // Apply duration discounts
    let discount = 0;
    if (safeDuration >= 12) discount = 0.20; // 20% for 12+ months
    else if (safeDuration >= 6) discount = 0.15; // 15% for 6+ months
    else if (safeDuration >= 3) discount = 0.10; // 10% for 3+ months

    const discountAmount = monthlyTotal * discount;
    const discountedMonthly = monthlyTotal - discountAmount;
    const totalCost = discountedMonthly * safeDuration;

    return {
      monthlyOriginal: monthlyTotal,
      monthlyDiscounted: discountedMonthly,
      totalCost,
      discountAmount: discountAmount * safeDuration,
      discountPercentage: discount * 100
    };
  }
};