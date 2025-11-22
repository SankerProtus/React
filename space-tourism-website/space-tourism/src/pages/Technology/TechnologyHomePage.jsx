import React from 'react';
import Header from '../../components/Header';
import Technology from './Technology';

const TechnologyHomePage = () => {
  return (
    <div className="technology-hero-section">
        <Header />
      <div>
        <p className="section-title"><span>03</span> Space launch 101</p>
        <Technology />
      </div>
    </div>
  )
}

export default TechnologyHomePage;