import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const Home = () => {
  const slides = [
    {
      id: 1,
      src: 'solar-energy-collectors-photovoltaic-system-pv-1.jpg',
      label: 'DIE SPEZIALISTEN',
      title: 'Photovoltaik',
      description: 'Wir sind Ihr zuverlässiger Partner für Photovoltaiklösungen und erneuerbare Energien.',
    },
    {
      id: 2,
      src: 'bg5.jpg',
      label: 'DIE SPEZIALISTEN',
      title: 'Speichersysteme',
      description: 'Optimieren Sie Ihren Energieverbrauch mit unseren intelligenten Stromspeichersystemen.',
    },
    {
      id: 3,
      src: '4088241_air-to-air-heat-pump-for-cooling-or-heating-the-home-outdoor-un_noscale_1A_8zW_Bf2A2v.jpg',
      label: 'DIE SPEZIALISTEN',
      title: 'Wärmepumpe',
      description: 'Effiziente Heizlösungen mit modernsten Wärmepumpensystemen für Ihr Zuhause.',
    },
    {
      id: 4,
      src: 'bg3.jpg',
      label: 'DIE SPEZIALISTEN',
      title: 'Planung',
      description: 'Professionelle Planung für Ihre individuellen Energieprojekte – von Anfang an perfekt umgesetzt.',
    },
    {
      id: 5,
      src: 'beutler-elektro-einblick-elektrokontrollen.jpg',
      label: 'DIE SPEZIALISTEN',
      title: 'Elektrokontrolle',
      description: 'Sichern Sie Ihre Elektroanlagen mit unserer umfassenden Elektrokontrolle.',
    },
    {
      id: 6,
      src: 'hon-ab-energy-storage-solar-power.jpg',
      label: 'DIE SPEZIALISTEN',
      title: 'Elektroinstallationen',
      description: 'Profitieren Sie von unserer Expertise in Elektroinstallationen für jede Art von Projekt.',
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
        <img src={slide.src} className="w-100 carousel-image" alt={slide.label} />
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


        
        <div className="Photovoltaik-section fade-in" role="link" onClick={() => window.location.href = '/energie'}>
            <div className="Photovoltaik-container" style={{flex:'1'}}>
                <h2>Energie</h2>
                <p>
                Bei MFM Energie sind wir auf die Reparatur und Installation elektrischer Anlagen im Innen- und Außenbereich spezialisiert und bieten erstklassige Reparatur-, Austausch- und Serviceleistungen für private und gewerbliche Projekte.
                </p>
                <button className="cta-button fade-in">Mehr erfahren</button>
            </div>
            <div className="Photovoltaik-img fade-in">
                <img src="Energie.jpg" alt="" style={{width:"100%"}} />
            </div>
        </div>


        <div className="Photovoltaik-section electro fade-in" role="link" onClick={() => window.location.href = '/solar'}>
          <div className="Photovoltaik-img fade-in">
                <img src="Solar.jpg" alt="" style={{width:"100%" , height:"500px"}} />
            </div>
            <div className="Photovoltaik-container" style={{flex:'1'}}>
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
