import React from 'react'
import { useTranslation } from "react-i18next";

const Energie = () => {
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
    <div>
        <div className='energie-container'>
            <div className="title-energie">
                <h1 className='carousel-title'>{t("energyPage.Energie")}</h1>
                <p className='carousel-description'>{t("energyPage.description")}</p>
            </div>
            <div>
                <svg
          className="waves"
 
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(105, 140, 71, 0.5)
" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(162, 209, 115, 0.5)
" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(115, 157, 72, 0.5)
" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(190, 249, 132, 0.5)
" />
          </g>
                </svg>
            </div>
        </div>
        <div className="Photovoltaik-section ">
  <div className="Photovoltaik-container fade-in">
    <h2>{t("energyPage.A")}</h2>
    <p>{t("energyPage.B")}</p>
  </div>
  <div className="Photovoltaik-img fade-in">
    <img src="Wärmepumpe.jpg" alt="Wärmepumpe" />
  </div>
</div>

<section className="solar-storage-section fade-in">
  <div className="storage-item fade-in">
    <img src="light-bulb-14-svgrepo-com.svg" alt="Energie sparen" className="icon" />
    <h3>{t("energyPage.e")}</h3>
    <p>{t("energyPage.j")}</p>
  </div>
  <div className="storage-item fade-in">
    <img src="working-work-svgrepo-com.svg" alt="Funktionsweise" className="icon" />
    <h3>{t("energyPage.h")}</h3>
    <p>{t("energyPage.i")}</p>
  </div>
  <div className="storage-item fade-in">
    <img src="savings-svgrepo-com.svg" alt="Kosteneinsparungen" className="icon" />
    <h3>{t("energyPage.k")}</h3>
    <p>{t("energyPage.l")}</p>
  </div>
</section>

        
        <div className="Photovoltaik-section elec fade-in">
            <div className="Photovoltaik-img fade-in">
                <img src="Planung.jpg" alt="" />
            </div>
            <div className="Photovoltaik-container fade-in">
                <h2>{t("energyPage.d")}</h2>
                <p>{t("energyPage.H")}</p>
            </div>
        </div>


        <section className="solar-storage-section fade-in">
  <div className="storage-item fade-in">
    <img src="blueprint.svg" alt="" className="icon" />
    <h3>{t("energyPage.z")}</h3>
    <p>{t("energyPage.x")}</p>
  </div>
  <div className="storage-item fade-in">
    <img src="teamwork.svg" alt="" className="icon" />
    <h3>{t("energyPage.c")}</h3>
    <p>{t("energyPage.v")}</p>
  </div>
  <div className="storage-item fade-in">
    <img src="success.svg" alt="" className="icon" />
    <h3>{t("energyPage.b")}</h3>
    <p>{t("energyPage.n")}</p>
  </div>
        </section>

        <div className="light-bulb"></div>
        <img src="light.jpg" alt="" className='video-solar' />

        <div className="Photovoltaik-section fade-in">
            <div className="Photovoltaik-container fade-in">
                <h2>{t("energyPage.el")}</h2>
                <p>{t("energyPage.er")}
                </p>
            </div>
            <div className="Photovoltaik-img fade-in">
                <img src="Elektroinstallationen-2.jpg" alt="" />
            </div>
            
        </div>
        <section className="solar-storage-section fade-in">
  <div className="storage-item fade-in">
    <img src="check.svg" alt="" className="icon" />
    <h3>{t("energyPage.z")}</h3>
    <p>{t("energyPage.x")}</p>
  </div>
  <div className="storage-item fade-in">
    <img src="inspection.svg" alt="" className="icon" />
    <h3>{t("energyPage.r")}</h3>
    <p>{t("energyPage.t")}</p>
  </div>
  <div className="storage-item fade-in">
    <img src="benefits.svg" alt="" className="icon" />
    <h3>{t("energyPage.y")}</h3>
    <p>{t("energyPage.u")}</p>
  </div>
        </section>
        <div className="Photovoltaik-section fade-in">
            <div className="Photovoltaik-container fade-in">
                <h2>{t("energyPage.or")}</h2>
                <p>{t("energyPage.op")}</p>
            </div>
            <div className="Photovoltaik-img fade-in">
                <img src="Elektroinstallationen.jpg" alt="" />
            </div>
            
        </div>
        <section className="solar-storage-section fade-in">
  <div className="storage-item fade-in">
    <img src="electric-refueli.svg" alt="" className="icon" />
    <h3>{t("energyPage.qa")}</h3>
    <p>{t("energyPage.qs")}</p>
  </div>
  <div className="storage-item fade-in">
    <img src="electric-tower.svg" alt="" className="icon" />
    <h3>{t("energyPage.qd")}</h3>
    <p>{t("energyPage.qf")}</p>
  </div>
  <div className="storage-item fade-in">
    <img src="plug-circle.svg" alt="" className="icon" />
    <h3>{t("energyPage.qg")}</h3>
    <p>{t("energyPage.qh")}</p>
  </div>
        </section>

    </div>
  )
}

export default Energie
