import React from 'react';
import { useTranslation } from 'react-i18next';

const Solar = () => {
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
    <div className='solar-container'>
      <div className="title-solar">
        <h1 className='carousel-title'>{t('solarPage.title')}</h1>
        <p className='carousel-description'>{t('solarPage.description')}</p>
      </div>
      <div className="Photovoltaik-section fade-in">
        <div className="Photovoltaik-container">
          <h2>{t('solarPage.photovoltaik.title')}</h2>
          <p>{t('solarPage.photovoltaik.description')}</p>
        </div>
        <div className="Photovoltaik-img">
          <img src="Photovoltaik.png" alt="" />
        </div>
      </div>
      <section className="solar-storage-section fade-in">
        <div className="storage-item fade-in">
          <img src="solar-panel.svg" alt="" className='icon' />
          <h3>{t('solarPage.photovoltaik.whatIsPhotovoltaik')}</h3>
          <p>{t('solarPage.photovoltaik.howPhotovoltaikWorks')}</p>
        </div>
        <div className="storage-item fade-in">
          <img src="sun.svg" alt="" className='icon' />
          <h3>{t('solarPage.photovoltaik.benefitsOfPhotovoltaik')}</h3>
          <p>{t('solarPage.photovoltaik.benefitsDescription')}</p>
        </div>
        <div className="storage-item fade-in">
        <img src="storage (2).svg" alt="" className='icon'/>
        <h3>{t('solarPage.photovoltaik.Vorteile')}</h3>
        <p>{t("solarPage.photovoltaik.Photovoltaik1")}</p>
      </div>
      </section>
      <div className="Photovoltaik-section fade-in">
        <div className="Photovoltaik-container" style={{ maxWidth: "100%" }}>
          <h2>{t('solarPage.storageSystems.title')}</h2>
          <p>{t('solarPage.storageSystems.description')}</p>
        </div>
      </div>
      <section className="solar-Speichersysteme-images fade-in">
        <img src="Speichersysteme1.jpg" alt="" />
        <img src="Speichersysteme2.jpg" alt="" />
        <img src="Speichersysteme3.jpg" alt="" />
        <img src="Speichersysteme4.jpg" alt="" />
      </section>
      <section className="solar-storage-section fade-in">
        <div className="storage-item fade-in">
          <img src="box.svg" alt="" className='icon' />
          <h3>{t('solarPage.storageSystems.storageInPhotovoltaik')}</h3>
          <p>{t('solarPage.storageSystems.storageDescription')}</p>
        </div>
        <div className="storage-item fade-in">
          <img src="light-bulb.svg" alt="" className='icon' />
          <h3>{t('solarPage.storageSystems.excessEnergy')}</h3>
          <p>{t('solarPage.storageSystems.excessEnergyDescription')}</p>
        </div>
        <div className="storage-item fade-in">
          <img src="moon.svg" alt="" className='icon' />
          <h3>{t('solarPage.storageSystems.nightUsage')}</h3>
          <p>{t('solarPage.storageSystems.nightUsageDescription')}</p>
        </div>
      </section>
      <video src="solar.mp4" className='video-solar' autoPlay loop muted></video>
    </div>
  );
};

export default Solar;