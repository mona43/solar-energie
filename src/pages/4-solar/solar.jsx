import React from 'react'

const Solar = () => {
  return (
    <div className='solar-container'>
        <div className="title-solar">
            <h1 className='carousel-title'>SOLAR</h1>
            <p className='carousel-description'>
            Bei MFM SOLAR sind wir auf die Installation von Solarmodulen und anderen Komponenten spezialisiert.
            </p>
        </div>
        <div className="Photovoltaik-section">
            <div className="Photovoltaik-container">
                <h2>Photovoltaik</h2>
                <p>
                Nutzen Sie Ihre Energie, wie Sie möchten: verbrauchen, speichern, ins Netz einspeisen. Mit einer Photovoltaikanlage können Sie die Sonnenenergie optimal nutzen. Produzieren Sie Ihre saubere Energie, speichern Sie sie für den späteren Gebrauch und senken Sie Ihre Stromrechnung um bis zu 80%.
                </p>
            </div>
            <div className="Photovoltaik-img">
                <img src="Photovoltaik.png" alt="" />
            </div>
        </div>
        <section className="solar-storage-section">
      <div className="storage-item">
        <img src="solar-panel.svg" alt="" className='icon' />
        <h3>Was ist Photovoltaik?</h3>
        <p>Photovoltaik bezieht sich auf die Umwandlung von Sonnenlicht in elektrische Energie mithilfe von Solarzellen. Diese Technologie wird weltweit genutzt, um saubere und nachhaltige Energie zu erzeugen.</p>
      </div>
      <div className="storage-item" >
        <img src="sun.svg" alt="" className='icon'/>
        <h3>Wie funktioniert Photovoltaik?</h3>
        <p>Wenn Sonnenlicht auf eine Solarzelle trifft, erzeugt das Licht eine elektrische Spannung, die dann in nutzbare elektrische Energie umgewandelt wird. Diese Energie kann sofort genutzt oder gespeichert werden.</p>
      </div>
      <div className="storage-item">
        <img src="storage (2).svg" alt="" className='icon'/>
        <h3>Vorteile der Photovoltaik</h3>
        <p>Photovoltaik ist eine erneuerbare Energiequelle, die keine schädlichen Emissionen verursacht. Sie hilft dabei, den Kohlenstoff-Fußabdruck zu reduzieren und Energieunabhängigkeit zu fördern.</p>
      </div>
        </section>
        <div className="light-bulb"></div>
        <div className="Photovoltaik-section elec ">
            <div className="Photovoltaik-img">
                <img src="Speichersysteme.jpg" alt="" />
            </div>
            <div className="Photovoltaik-container">
                <h2>Speichersysteme</h2>
                <p>
                Ein Speichersystem für eine Photovoltaikanlage besteht aus einem Satz Batterien, die die von den Solarpaneelen produzierte und nicht sofort verbrauchte Energie speichern. Dieses System ermöglicht es, überschüssige Energie, die tagsüber erzeugt wird, zu speichern und abends oder nachts zu nutzen.
            </p>
            </div>
            
            
        </div>
        <section className="solar-storage-section">
            <div className="storage-item">
                <img src="box.svg" alt="" className='icon' />
                <h3>Speicherung im Photovoltaiksystem</h3>
                <p>Das Speichersystem besteht aus Batterien, die die von den Solarmodulen erzeugte Energie speichern, die nicht sofort verbraucht wird. Diese Speicherung ermöglicht die Nutzung der Energie zu einem späteren Zeitpunkt, beispielsweise am Abend oder in der Nacht.</p>
            </div>
            <div className="storage-item" >
                <img src="light-bulb.svg" alt="" className='icon'/>
                <h3>Überschüssige Energie speichern</h3>
                <p>Wenn die Solarmodule tagsüber überschüssige Energie erzeugen, wird diese in Batterien gespeichert, um sie zu nutzen, wenn die Sonneneinstrahlung nachlässt oder keine sofortige Energieproduktion stattfindet.</p>
            </div>
            <div className="storage-item">
                <img src="moon.svg" alt="" className='icon'/>
                <h3>Nutzung der Energie in der Nacht</h3>
                <p>Batterien helfen dabei, während der Nachtstunden Strom zu liefern, um sicherzustellen, dass elektrische Geräte ohne Unterbrechung verwendet werden können, auch wenn keine direkte Sonneneinstrahlung vorhanden ist.</p>
            </div>
        </section>
        
        <video src="solar.mp4" className='video-solar' autoPlay loop muted ></video>
    </div>
  )
}

export default Solar
