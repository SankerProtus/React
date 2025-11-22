import React from 'react';
import Header from '../../components/Header';
import CrewMembers from './CrewMembers';

const CrewHomePage = () => {
  return (
    <div className="crew-hero-section">
      <Header />
      <div>
        <p className="section-title"><span>02</span> Meet your crew</p>
        <CrewMembers />
      </div>
    </div>
  );
}

export default CrewHomePage