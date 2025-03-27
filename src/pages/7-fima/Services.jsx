import React from 'react'
import './services.css'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
const Services = () => {
  const { t } = useTranslation();
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
        <div className='company-container'>
          <div className='company-header'>
            <p className='company-description'>
            <span className='mfm'>MFM</span> {t('companyPage.description')}
            </p>
            <img src='construction-management-building-materials.png' alt='Company Overview' className='header-image' />
          </div>
          
          <section className='company-mission fade-in'>
          <h2>{t('companyPage.missionTitle')}</h2>
      <p>{t('companyPage.missionP1')}</p>
      <p>{t('companyPage.missionP2')}</p>
            <img src='mission.jpg' alt='Unsere Mission' className='mission-image'  />
          </section>
          
          <section className='company-vision fade-in'>
          <h2>{t('companyPage.visionTitle')}</h2>
      <p>{t('companyPage.visionP1')}</p>
      <p>{t('companyPage.visionP2')}</p>
            <img src='vision.jpg' alt='Unsere Vision' className='vision-image' />
          </section>
          
          <section className='company-services fade-in'>
            <h2>{t("companyPage.servicesTitle")}</h2>
            <div className='service-list'>
              <div className='service-item'>
                <img src='Photovoltaikanlagen.svg' alt='Photovoltaikanlagen Icon' className='service-icon' />
                <h3>{t("companyPage.services.title1")}</h3>
                <p>{t("companyPage.services.description1")}</p>
              </div>
              <div className='service-item'>
                <img src='Heat pump.svg' alt='Wärmepumpen Icon' className='service-icon' />
                <h3>{t("companyPage.services.title2")}</h3>
                <p>{t("companyPage.services.description2")}</p>
              </div>
              <div className='service-item'>
                <img src='Electrical installation.svg' alt='Elektroinstallationen Icon' className='service-icon' />
                <h3>{t("companyPage.services.title3")}</h3>
                <p>{t("companyPage.services.description3")}</p>
              </div>
              <div className='service-item'>
                <img src='storage (2).svg' alt='Speichersysteme Icon' className='service-icon' />
                <h3>{t("companyPage.services.title4")}</h3>
                <p>{t("companyPage.services.description4")}</p>
              </div>
              <div className='service-item'>
                <img src='Consulting and planning.svg' alt='Beratung und Planung Icon' className='service-icon' />
                <h3>{t("companyPage.services.title5")}</h3>
                <p>{t("companyPage.services.description5")}</p>
              </div>
            </div>
          </section>
          
          
          <section className='company-contact fade-in'>
      <h2>{t('companyPage.contactTitle')}</h2>
      <p>{t('companyPage.contactDescription')}</p>
      <p>
        {t('companyPage.contactPhone')}  
        <Link to="tel:+41325080323" ><strong> +41325080323 </strong></Link> 
        {t('companyPage.contactEmail')}
        <Link to="mailto:info@mfmelektro.ch" ><strong> info@mfmelektro.ch </strong></Link>
      </p>

      <button className='contact-button'>{t('companyPage.contactButton')}</button>
      <img src='kontakt.jpg' alt='Kontaktieren Sie uns' className='contact-image' />
    </section>
        </div>
      );
    };

export default Services
