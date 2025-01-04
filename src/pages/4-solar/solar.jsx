import React from 'react'

const Solar = () => {
  return (
    <div className='solar-container'>
        <div className="title-solar">
            <h1>SOLAR</h1>
            <p>
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
        <div className="Speichersysteme-section">
            <div className="Speichersysteme-img"></div>
            <div styleName='Speichersysteme-container'>
            <h2>Speichersysteme</h2>
            <p>
            Ein Speichersystem für eine Photovoltaikanlage besteht aus einem Satz Batterien, die die von den Solarpaneelen produzierte und nicht sofort verbrauchte Energie speichern. Dieses System ermöglicht es, überschüssige Energie, die tagsüber erzeugt wird, zu speichern und abends oder nachts zu nutzen.
            </p>
            </div>
            
        </div>
        
        <video src="solar.mp4" className='video-solar' autoPlay loop muted ></video>
    </div>
  )
}

export default Solar
