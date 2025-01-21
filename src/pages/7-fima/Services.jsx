import React from 'react'
import './services.css'
const Services = () => {
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
              <span className='mfm'>MFM</span> ist ein führendes Unternehmen in den Bereichen erneuerbare Energien, Elektrotechnik und moderne Installationen. 
              Wir stehen für Innovation, Qualität und eine nachhaltige Zukunft.
            </p>
            <img src='construction-management-building-materials.png' alt='Company Overview' className='header-image' />
          </div>
          
          <section className='company-mission fade-in'>
            <h2>Unsere Mission</h2>
            <p>
              Unser Ziel ist es, nachhaltige Energielösungen bereitzustellen, die die Umwelt schützen und unseren Kunden langfristige Einsparungen ermöglichen. 
              Mit einem starken Fokus auf Kundenzufriedenheit und Umweltbewusstsein arbeiten wir daran, die Lebensqualität unserer Kunden zu verbessern.
            </p>
            <p>
              Wir engagieren uns dafür, die besten Technologien zu nutzen, um innovative Lösungen zu entwickeln, die sowohl effizient als auch umweltfreundlich sind.
            </p>
            <img src='mission.jpg' alt='Unsere Mission' className='mission-image'  />
          </section>
          
          <section className='company-vision fade-in'>
            <h2>Unsere Vision</h2>
            <p>
              Wir möchten eine grünere Zukunft schaffen, indem wir innovative und effiziente Energielösungen für Haushalte und Unternehmen anbieten. 
              Unser Traum ist es, in einer Welt zu leben, in der saubere Energie für jeden zugänglich ist.
            </p>
            <p>
              Wir glauben daran, dass technologische Fortschritte der Schlüssel zu einer nachhaltigen Welt sind. Deshalb streben wir danach, Vorreiter in der Branche zu bleiben.
            </p>
            <img src='vision.jpg' alt='Unsere Vision' className='vision-image' />
          </section>
          
          <section className='company-services fade-in'>
            <h2>Unsere Dienstleistungen</h2>
            <div className='service-list'>
              <div className='service-item'>
                <img src='Photovoltaikanlagen.svg' alt='Photovoltaikanlagen Icon' className='service-icon' />
                <h3>Photovoltaikanlagen</h3>
                <p>Installation und Wartung moderner Solarsysteme zur nachhaltigen Energiegewinnung. Unsere Experten sorgen für höchste Effizienz und Langlebigkeit Ihrer Solaranlage.</p>
              </div>
              <div className='service-item'>
                <img src='Heat pump.svg' alt='Wärmepumpen Icon' className='service-icon' />
                <h3>Wärmepumpen</h3>
                <p>Umweltfreundliche Heizlösungen für Haushalte und Unternehmen. Wir bieten Beratung, Installation und Wartung für die besten Wärmepumpensysteme.</p>
              </div>
              <div className='service-item'>
                <img src='Electrical installation.svg' alt='Elektroinstallationen Icon' className='service-icon' />
                <h3>Elektroinstallationen</h3>
                <p>Professionelle und sichere Elektroinstallationen für Neubauten und Renovierungen. Unser Team gewährleistet höchste Sicherheitsstandards und Qualität.</p>
              </div>
              <div className='service-item'>
                <img src='storage (2).svg' alt='Speichersysteme Icon' className='service-icon' />
                <h3>Speichersysteme</h3>
                <p>Effiziente Energiespeicherung zur Maximierung der Eigenverbrauchsquote. Unsere Speicherlösungen sind darauf ausgelegt, Ihre Energieunabhängigkeit zu fördern.</p>
              </div>
              <div className='service-item'>
                <img src='Consulting and planning.svg' alt='Beratung und Planung Icon' className='service-icon' />
                <h3>Beratung und Planung</h3>
                <p>Individuelle Beratung und maßgeschneiderte Planung für alle Ihre Energiebedürfnisse. Unser Team entwickelt Lösungen, die perfekt auf Ihre Anforderungen abgestimmt sind.</p>
              </div>
            </div>
          </section>
          
          
          <section className='company-contact fade-in'>
            <h2>Kontaktieren Sie uns</h2>
            <p>
              Haben Sie Fragen oder möchten Sie eine Beratung? Kontaktieren Sie unser Expertenteam für maßgeschneiderte Lösungen.
              Wir stehen Ihnen von Montag bis Freitag von 9:00 bis 18:00 Uhr zur Verfügung.
            </p>
            <p>
  Sie können uns telefonisch unter  
  <a href="tel:+41032508323" ><strong> +41 032 508 323 </strong></a> 
  erreichen oder uns eine E-Mail an  
  <a href="mailto:info@mfmelektro.ch" ><strong> info@mfmelektro.ch </strong></a> 
   senden.
</p>

            <button className='contact-button'>Jetzt Kontakt aufnehmen</button>
            <img src='kontakt.jpg' alt='Kontaktieren Sie uns' className='contact-image' />
          </section>
        </div>
      );
    };

export default Services
