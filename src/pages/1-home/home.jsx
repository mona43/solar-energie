import React from 'react';

const Home = () => {
  return (
      <div className="sections-container">
        
        {/* Energy Section */}
        <div className="section energy-section">
          <h2 className="home-title">Energie</h2>
          <hr />
          <img className="section-image" src="Energie.jpg" alt="Electrical Panel" height={390} />
          <hr />
          <p className="section-text">
            Bei MFM ELEKTRO sind wir auf die Reparatur und Installation elektrischer Anlagen im Innen- und Außenbereich spezialisiert und bieten erstklassige Reparatur-, Austausch- und Serviceleistungen für private und gewerbliche Projekte.
          </p>
        </div>

        {/* Solar Section */}
        <div className="section solar-section">
          <h2 className="home-title">Solar</h2>
          <hr />
          <img className="section-image" src="Solar.jpg" alt="Solar Panels" height={390}/>
          <hr />
          <p className="section-text">
            Bei MFM SOLAR sind wir auf die Installation von Solarmodulen und anderen Komponenten spezialisiert, die Unternehmen dabei helfen, ihren CO2-Fußabdruck zu reduzieren und Energiekosten zu sparen.
          </p>
        </div>

      </div>
  );
}

export default Home;
