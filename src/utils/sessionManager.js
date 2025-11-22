// Session management utilities for quote flow
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export const sessionManager = {
  // Save data with timestamp
  saveData(key, data) {
    const sessionData = {
      data: data,
      timestamp: Date.now(),
      expires: Date.now() + SESSION_DURATION
    };
    localStorage.setItem(key, JSON.stringify(sessionData));
  },

  // Get data if not expired
  getData(key) {
    try {
      const stored = localStorage.getItem(key);
      if (!stored) return null;

      const sessionData = JSON.parse(stored);
      
      // Check if session has expired
      if (Date.now() > sessionData.expires) {
        this.removeData(key);
        return null;
      }

      return sessionData.data;
    } catch (error) {
      console.error('Error reading session data:', error);
      this.removeData(key);
      return null;
    }
  },

  // Remove specific data
  removeData(key) {
    localStorage.removeItem(key);
  },

  // Clear all quote session data
  clearQuoteSession() {
    this.removeData('step1Data');
    this.removeData('step2Data');
  },

  // Check if session is valid
  isSessionValid(key) {
    try {
      const stored = localStorage.getItem(key);
      if (!stored) return false;

      const sessionData = JSON.parse(stored);
      return Date.now() < sessionData.expires;
    } catch (error) {
      return false;
    }
  },

  // Get time remaining in session (in minutes)
  getTimeRemaining(key) {
    try {
      const stored = localStorage.getItem(key);
      if (!stored) return 0;

      const sessionData = JSON.parse(stored);
      const remaining = sessionData.expires - Date.now();
      return Math.max(0, Math.floor(remaining / (60 * 1000))); // Convert to minutes
    } catch (error) {
      return 0;
    }
  }
};