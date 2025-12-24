import React from 'react';
import './UAE4steps.css';
import { Phone, Box, Shield } from 'lucide-react';

const UAE4steps = () => {
  return (
    <section className="process-section">
      <div className="personal-container">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Get your storage unit in 4 simple steps</p>
        </div>

        <div className="process-steps">
          <div className="process-step">
            <div className="step-icon">
              <Phone size={30} />
            </div>
            <h3>Book Your Unit</h3>
            <p>Call us or book online. Get instant confirmation.</p>
          </div>

          <div className="step-connector">→</div>

          <div className="process-step">
            <div className="step-icon">
              <Box size={30} />
            </div>
            <h3>Packing and Pickup</h3>
            <p>We pack your items and pick them up from your doorstep.</p>
          </div>

          <div className="step-connector">→</div>

          <div className="process-step">
            <div className="step-icon">
              <Shield size={30} />
            </div>
            <h3>Storing In Warehouse</h3>
            <p>We store your items in our secured warehouses.</p>
          </div>

          <div className="step-connector">→</div>

          <div className="process-step">
            <div className="step-icon">
              <Shield size={30} />
            </div>
            <h3>Doorstep Delivery</h3>
            <p>We return your items whenever you need them.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UAE4steps;