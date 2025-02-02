import React from 'react';
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();

  const slides = t("home.carousel.slides", { returnObjects: true });

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
          {slides.map((slide, index) => (
            <MDBCarouselItem key={index} itemId={index + 1}>
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
        <div className="Photovoltaik-container" style={{ flex: '1' }}>
          <h2>{t("home.photovoltaikSection.energie.title")}</h2>
          <p>{t("home.photovoltaikSection.energie.description")}</p>
          <Link className="cta-button fade-in">{t("home.photovoltaikSection.energie.button")}</Link>
        </div>
        <div className="Photovoltaik-img fade-in">
          <img src="Energie.jpg" alt="" style={{ width: "85%" }} />
        </div>
      </div>

      <div className="Photovoltaik-section electro fade-in" role="link" onClick={() => window.location.href = '/solar'}>
        <div className="Photovoltaik-img fade-in">
          <img src="Solar.jpg" alt="" style={{ width: "85%", height: "500px" }} />
        </div>
        <div className="Photovoltaik-container" style={{ flex: '1' }}>
          <h2>{t("home.photovoltaikSection.solar.title")}</h2>
          <p>{t("home.photovoltaikSection.solar.description")}</p>
          <Link className="cta-button fade-in">{t("home.photovoltaikSection.solar.button")}</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
