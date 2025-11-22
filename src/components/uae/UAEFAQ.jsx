import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import './UAEFAQ.css';

const UAEFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What documents do I need to rent a storage unit in Dubai?",
          a: "You'll need a valid Emirates ID or passport, proof of address (utility bill or tenancy contract), and a contact number. Business customers also need a trade license copy."
        },
        {
          q: "Do you offer month-to-month rentals?",
          a: "Yes! We offer flexible month-to-month rentals with no long-term commitments. You can extend or cancel with just 7 days notice."
        },
        {
          q: "Is SafeStorage approved by Dubai authorities?",
          a: "Yes, we are fully licensed by Dubai Municipality and approved by Dubai Police. Our facilities meet all safety and security standards required by UAE law."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept cash, credit/debit cards (Visa, Mastercard, American Express), bank transfers, and post-dated cheques for long-term rentals."
        }
      ]
    },
    {
      category: "Security & Access",
      questions: [
        {
          q: "How secure are your storage facilities?",
          a: "Our facilities feature 24/7 CCTV surveillance, biometric access control, individual unit alarms, on-site security guards, and are fully approved by Dubai Police."
        },
        {
          q: "Can I access my unit anytime?",
          a: "Yes! You get 24/7 access to your storage unit. Our facilities are equipped with proper lighting and security for safe access at any time."
        },
        {
          q: "Do you provide insurance for stored items?",
          a: "Basic insurance coverage is included free with every unit. Additional coverage up to AED 100,000 is available for high-value items."
        },
        {
          q: "Can someone else access my unit?",
          a: "You can authorize additional people to access your unit by adding them to your account with proper documentation. They'll receive their own access code."
        }
      ]
    },
    {
      category: "Storage & Moving",
      questions: [
        {
          q: "Do you provide moving services?",
          a: "Yes! We offer professional moving services with trained staff. Free pickup is included for storage units above 100 sq ft within Dubai."
        },
        {
          q: "What items are prohibited in storage?",
          a: "Prohibited items include flammable materials, explosives, illegal substances, perishable goods, live animals, and hazardous chemicals as per UAE regulations."
        },
        {
          q: "Is climate control really necessary in Dubai?",
          a: "Absolutely! Dubai's extreme heat and humidity can damage furniture, electronics, documents, and clothing. Our climate-controlled units maintain optimal temperature and humidity levels year-round."
        },
        {
          q: "Do you sell packing materials?",
          a: "Yes, we have a full range of packing supplies including boxes, bubble wrap, tape, covers, and locks available at competitive prices at all our locations."
        }
      ]
    },
    {
      category: "Pricing & Billing",
      questions: [
        {
          q: "Are there any hidden fees?",
          a: "No hidden fees! Our pricing is transparent and includes unit rental, basic insurance, and 24/7 access. VAT is additional as per UAE law."
        },
        {
          q: "Do you offer discounts for long-term rentals?",
          a: "Yes! We offer discounts for 6-month and annual prepayments. Business customers and multiple unit rentals also qualify for special rates."
        },
        {
          q: "What happens if I'm late with payment?",
          a: "We offer a 5-day grace period. After that, a late fee applies. Units may be locked after 15 days of non-payment as per our terms."
        },
        {
          q: "Can I upgrade or downsize my unit?",
          a: "Yes, you can change unit sizes anytime based on availability. We'll help you move to the new unit and adjust your billing accordingly."
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="uae-faq">
      <div className="dubai-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">FAQs</span>
          <h2 className="section-title">
            Frequently Asked
            <span className="highlight"> Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about storage in Dubai
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="faq-container">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="faq-category">
              <h3 className="category-title">
                <HelpCircle size={20} />
                {category.category}
              </h3>
              <div className="questions-list">
                {category.questions.map((item, qIndex) => (
                  <div 
                    key={qIndex} 
                    className={`faq-item ${activeIndex === `${catIndex}-${qIndex}` ? 'active' : ''}`}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleQuestion(catIndex, qIndex)}
                    >
                      <span>{item.q}</span>
                      <div className="faq-icon">
                        {activeIndex === `${catIndex}-${qIndex}` ? 
                          <Minus size={20} /> : <Plus size={20} />
                        }
                      </div>
                    </button>
                    <div className="faq-answer">
                      <p>{item.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="faq-cta">
          <h3>Still have questions?</h3>
          <p>Our storage experts are here to help you find the perfect solution</p>
          <div className="cta-buttons">
            <a href="tel:+971505773388" className="cta-call">
              Call +971 50 577 3388
            </a>
            <a href="https://wa.me/971505773388" className="cta-whatsapp">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UAEFAQ;