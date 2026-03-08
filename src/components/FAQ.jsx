import { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What are your delivery hours and areas?',
      answer: 'We deliver Monday through Saturday from 8:00 AM to 6:00 PM. Our delivery areas include the surrounding rural districts and nearby cities within a 50-mile radius of our farm. Free delivery is available for orders over π 10.'
    },
    {
      question: 'How do you ensure the quality of your products?',
      answer: 'We take pride in our sustainable farming practices. All our products are harvested fresh daily and go through strict quality control. We never use harmful pesticides or chemicals, ensuring all produce is 100% organic and safe for your family.'
    },
    {
      question: 'Can I visit the farm?',
      answer: 'Absolutely! We welcome visitors to our farm. You can schedule a tour by contacting us in advance. We offer guided farm tours every Saturday from 9:00 AM to 12:00 PM. It\'s a great way to see our sustainable practices in action.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept multiple payment methods including Pi Network cryptocurrency, credit/debit cards, bank transfers, and cash on delivery. For bulk orders, we also offer NET 30 payment terms for qualifying businesses.'
    },
    {
      question: 'Do you offer wholesale pricing?',
      answer: 'Yes, we offer competitive wholesale pricing for restaurants, grocery stores, and other businesses. Please contact our sales team at sales@arisefarms.com to discuss your specific needs and get a custom quote.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is dispatched, you\'ll receive an SMS/email with tracking information. You can also log into your account on our website to view order history and current delivery status in real-time.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <div className="section-header">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Find answers to the most common questions about our farm and products
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

