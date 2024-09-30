import React from 'react';
import { Button, Row, Col } from 'antd';

const InvestSection = () => {
  return (
    <div style={{ textAlign: 'center', margin: '50px 0' }}>
      {/* Heading */}
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>
        Invest in everything
      </h1>
      
      {/* Subtext */}
      <p style={{ fontSize: '18px', color: '#555', marginBottom: '30px' }}>
        Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
      </p>

      {/* Sign-up Button */}
      <Button 
        type="primary" 
        size="large"
        style={{ fontWeight: 'bold' }}
      >
        Sign up for free
      </Button>
    </div>
  );
};

export default InvestSection;
