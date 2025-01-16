import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const Home = () => {
  const slides = [
    {
      id: 1,
      src: 'bg1.jpg',
      label: 'DIE SPEZIALISTEN',
      title:'DEVISOL AG',
      description: 'Wir sind Ihr zuverlässiger Partner für Solaranlagen, Stromspeicher, Elektromobilität,Elektroinstallationen und Elektroanlagen.',
    },
    {
      id: 2,
      src: 'bg4.jpg',
      label: 'DEVISOL AG - DIE SPEZIALISTEN',
      title:'Solaranlagen',
      description: 'Sorgenlos Strom produzieren.Für Sie holen wir die Sonne vom Himmel.',
    },
    {
      id: 3,
      src: 'Planung.jpg',
      label: 'DEVISOL AG – DIE SPEZIALISTEN',
      title:'Elektroinstallationen',
      description: 'Profitieren Sie von unserem spezifischen und breiten Know-how.',
    },
    {
      id: 4,
      src: 'bg2.jpg',
      label: 'DEVISOL AG – DIE SPEZIALISTEN',
      title:'Elektromobilität',
      description: 'Nutzen Sie die eigene Solarenergie für Ihr Elektroauto.',
    },
    {
      id: 5,
      src: 'bg5.jpg',
      label: 'DEVISOL AG - DIE SPEZIALISTEN',
      title:'ENERGY STORAGE',
      description: 'Clever speichern, clever sparen.Überschüssigen Strom speichern statt einspeisen.Werden Sie autark!',
    },
  ];
  document.addEventListener("scroll", function () {
    const fadeElements = document.querySelectorAll(".fade-in");
    const triggerBottom = window.innerHeight * 0.8;

    fadeElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerBottom) {
        element.classList.add("show");
      } else {
        element.classList.remove("show");
      }
    });
  });
  return (
    <div>
<div className="crousel">
  <MDBCarousel showIndicators showControls fade>
    {slides.map((slide) => (
      <MDBCarouselItem key={slide.id} itemId={slide.id}>
        {/* صورة الشريحة */}
        <img src={slide.src} className="w-100 carousel-image" alt={slide.label} />

{/* محتوى النصوص */}
<div className="carousel-caption">
  <h5 className="carousel-label">{slide.label}</h5>
  <h2 className="carousel-title">{slide.title}</h2>
  <hr className="carousel-divider" />
  <p className="carousel-description">{slide.description}</p>
</div>

      </MDBCarouselItem>
    ))}
  </MDBCarousel>
</div>


        
        {/* Energy Section */}
        <div className="Photovoltaik-section fade-in" role="link" onClick={() => window.location.href = '/energie'}>
            <div className="Photovoltaik-container">
                <h2>Energie</h2>
                <p>
                Bei MFM Energie sind wir auf die Reparatur und Installation elektrischer Anlagen im Innen- und Außenbereich spezialisiert und bieten erstklassige Reparatur-, Austausch- und Serviceleistungen für private und gewerbliche Projekte.
                </p>
                <button className="cta-button fade-in">Mehr erfahren</button>
            </div>
            <div className="Photovoltaik-img fade-in">
                <img src="Energie.jpg" alt="" />
            </div>
        </div>


        {/* Solar Section */}
        <div className="Photovoltaik-section electro fade-in" role="link" onClick={() => window.location.href = '/solar'}>
          <div className="Photovoltaik-img fade-in">
                <img src="Solar.jpg" alt="" />
            </div>
            <div className="Photovoltaik-container">
                <h2>Solar</h2>
                <p>
                Bei MFM SOLAR sind wir auf die Installation von Solarmodulen und anderen Komponenten spezialisiert, die Unternehmen dabei helfen, ihren CO2-Fußabdruck zu reduzieren und Energiekosten zu sparen.
                </p>
                <button className="cta-button fade-in">Mehr erfahren</button>
            </div>
            
        </div>

      </div>
  );
}

export default Home;
