import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  de: {
    translation: {
      navbar: {
        home: "Willkommen",
        solar: "Solar",
        energy: "Energie",
        services: "Firma",
        contact: "Kontakt",
        de: "Deutsch", // لغة المانية
        fr: "Französisch", // لغة فرنسية
      },
      footer: {
        location: "Lindenstrasse 21, 2552 Orpund",
        phone: "+41 032 508 03 23 ",
        email: "info@mfmelektro.ch",
        privacy: "Datenschutzerklärung",
        terms: "Nutzungsbedingungen",
        contactUs: "Kontaktieren Sie uns",
        followUs: "Folgen Sie uns",
        copyright: "Alle Rechte vorbehalten.",
      },
      home: {
        carousel: {
          slides: [
            {
              label: "DIE SPEZIALISTEN",
              title: "Photovoltaik",
              description: "Wir sind Ihr zuverlässiger Partner für Photovoltaiklösungen und erneuerbare Energien.",
              src: "solar-energy-collectors-photovoltaic-system-pv-1.jpg",
            },
            {
              label: "DIE SPEZIALISTEN",
              title: "Speichersysteme",
              description: "Optimieren Sie Ihren Energieverbrauch mit unseren intelligenten Stromspeichersystemen.",
              src: "bg5.jpg",
            },
            {
              label: "DIE SPEZIALISTEN",
              title: "Wärmepumpe",
              description: "Effiziente Heizlösungen mit modernsten Wärmepumpensystemen für Ihr Zuhause.",
              src: "4088241_air-to-air-heat-pump-for-cooling-or-heating-the-home-outdoor-un_noscale_1A_8zW_Bf2A2v.jpg",
            },
            {
              label: "DIE SPEZIALISTEN",
              title: "Planung",
              description: "Professionelle Planung für Ihre individuellen Energieprojekte – von Anfang an perfekt umgesetzt.",
              src: "bg3.jpg",
            },
            {
              label: "DIE SPEZIALISTEN",
              title: "Technische Kontrolle",
              description: "Schützen Sie Ihre Anlagen mit unserer umfassenden technischen Kontrolle.",
              src: "beutler-elektro-einblick-elektrokontrollen.jpg",
            },
            {
              label: "DIE SPEZIALISTEN",
              title: "Energiesysteme und Solartechnologie",
              description: "Profitieren Sie von unserer Expertise in modernen Energiesystemen und Solartechnologie für jede Art von Projekt.",
              src: "hon-ab-energy-storage-solar-power.jpg",
            },
          ],
        },
        photovoltaikSection: {
          energie: {
            title: "Energie",
            description:
              "Bei MFM Energie sind wir auf die Reparatur und Installation elektrischer Anlagen im Innen- und Außenbereich spezialisiert und bieten erstklassige Reparatur-, Austausch- und Serviceleistungen für private und gewerbliche Projekte.",
            button: "Mehr erfahren",
          },
          solar: {
            title: "Solar",
            description:
              "Bei MFM SOLAR sind wir auf die Installation von Solarmodulen und anderen Komponenten spezialisiert, die Unternehmen dabei helfen, ihren CO2-Fußabdruck zu reduzieren und Energiekosten zu sparen.",
            button: "Mehr erfahren",
          },
        },
      },
      solarPage: {
        title: "SOLAR",
        description: "Bei MFM SOLAR sind wir auf die Installation von Solarmodulen und anderen Komponenten spezialisiert.",
        photovoltaik: {
          title: "Photovoltaik",
          description:
            "Nutzen Sie Ihre Energie, wie Sie möchten: verbrauchen, speichern, ins Netz einspeisen. Mit einer Photovoltaikanlage können Sie die Sonnenenergie optimal nutzen. Produzieren Sie Ihre saubere Energie, speichern Sie sie für den späteren Gebrauch und senken Sie Ihre Stromrechnung um bis zu 80%.",
          whatIsPhotovoltaik: "Was ist Photovoltaik?",
          howPhotovoltaikWorks:
            "Photovoltaik bezieht sich auf die Umwandlung von Sonnenlicht in elektrische Energie mithilfe von Solarzellen. Diese Technologie wird weltweit genutzt, um saubere und nachhaltige Energie zu erzeugen.",
          benefitsOfPhotovoltaik: "Vorteile der Photovoltaik",
          Vorteile :"Vorteile der Photovoltaik",
          Photovoltaik1 :"Photovoltaik ist eine erneuerbare Energiequelle, die keine schädlichen Emissionen verursacht. Sie hilft dabei, den Kohlenstoff-Fußabdruck zu reduzieren und Energieunabhängigkeit zu fördern.",
          benefitsDescription:
            "Photovoltaik ist eine erneuerbare Energiequelle, die keine schädlichen Emissionen verursacht. Sie hilft dabei, den Kohlenstoff-Fußabdruck zu reduzieren und Energieunabhängigkeit zu fördern.",
        },
        storageSystems: {
          title: "Speichersysteme",
          description:
            "Ein Speichersystem für eine Photovoltaikanlage besteht aus einem Satz Batterien, die die von den Solarpaneelen produzierte und nicht sofort verbrauchte Energie speichern. Dieses System ermöglicht es, überschüssige Energie, die tagsüber erzeugt wird, zu speichern und abends oder nachts zu nutzen.",
          storageInPhotovoltaik: "Speicherung im Photovoltaiksystem",
          storageDescription:
            "Das Speichersystem besteht aus Batterien, die die von den Solarmodulen erzeugte Energie speichern, die nicht sofort verbraucht wird. Diese Speicherung ermöglicht die Nutzung der Energie zu einem späteren Zeitpunkt, beispielsweise am Abend oder in der Nacht.",
          excessEnergy: "Überschüssige Energie speichern",
          excessEnergyDescription:
            "Wenn die Solarmodule tagsüber überschüssige Energie erzeugen, wird diese in Batterien gespeichert, um sie zu nutzen, wenn die Sonneneinstrahlung nachlässt oder keine sofortige Energieproduktion stattfindet.",
          nightUsage: "Nutzung der Energie in der Nacht",
          
          nightUsageDescription:
            "Batterien helfen dabei, während der Nachtstunden Strom zu liefern, um sicherzustellen, dass elektrische Geräte ohne Unterbrechung verwendet werden können, auch wenn keine direkte Sonneneinstrahlung vorhanden ist.",
        },
      },
      energyPage: {
        Energie:"Energie",
        description:"Bei MFM Energie sind wir auf die Reparatur und Installation von technischen Anlagen im Innen- und Außenbereich spezialisiert und bieten erstklassige Reparaturdienstleistungen.",
        A:"Wärmepumpe",
        B:"Wärmepumpen sind umweltfreundliche Heizsysteme, die Wärme aus der Umgebungsluft, dem Erdreich oder dem Wasser nutzen, um Ihr Zuhause effizient zu heizen. Sie sind eine nachhaltige Lösung für die Energiewende und reduzieren die Heizkosten.",
        e:"Was ist eine Wärmepumpe?",
        j:"Eine Wärmepumpe ist ein Gerät, das Wärme aus der Umgebung aufnimmt und sie auf ein höheres Temperaturniveau anhebt, um Räume zu beheizen oder Warmwasser bereitzustellen. Sie ist eine effiziente und umweltfreundliche Heizlösung.",  
        h:"Wie funktioniert eine Wärmepumpe?",
        i:"Wärmepumpen arbeiten nach dem Prinzip der Thermodynamik. Sie entziehen der Umwelt (Luft, Wasser oder Erde) Wärme und transportieren diese in Ihr Zuhause, wo sie für Heizung oder Warmwasserbereitung verwendet wird.",
        k:"Vorteile der Wärmepumpe",
        l:"Wärmepumpen bieten zahlreiche Vorteile, darunter hohe Energieeffizienz, geringe Betriebskosten und eine umweltfreundliche Lösung zur Wärmegewinnung. Sie tragen zur Reduzierung der CO2-Emissionen und der Energiekosten bei.",
        d:"Planung",
        H:"Zögern Sie nicht, uns zu kontaktieren. Wir werden Sie rasch mit Informationen betreffend Ihrer Wünsche und Bedürfnisse bedienen.",
        z:"Was bedeutet Planung?",
        x:"Planung ist der Schlüssel für erfolgreiche Projekte. Sie umfasst die sorgfältige Analyse, Strukturierung und Vorbereitung aller notwendigen Schritte, um effiziente und fehlerfreie Ergebnisse zu gewährleisten.",
        c:"Wie läuft die Planung ab?",
        v:"Der Planungsprozess beginnt mit einer klaren Zielsetzung und einer detaillierten Analyse. Anschließend werden Strategien entwickelt, Zeitpläne erstellt und alle Ressourcen effizient koordiniert.", 
        b:"Vorteile einer professionellen Planung",
        n:"Eine professionelle Planung spart Zeit und Kosten, minimiert Risiken und sorgt für reibungslose Abläufe. Sie schafft die Grundlage für langfristigen Erfolg und nachhaltige Ergebnisse.",
        el:"Technische Kontrolle",
        er:"Wir stellen die Kundenzufriedenheit an die erste Stelle. Wir streben eine dauerhafte, transparente und auf Vertrauen basierende Kundenzufriedenheit an.",
        z:"Was ist technische Kontrolle?",
        x:"Technische Kontrolle umfasst die Überprüfung von Anlagen und Geräten, um deren Sicherheit und Funktionstüchtigkeit zu gewährleisten. Sie ist ein wesentlicher Bestandteil moderner Technik.",
        r:"Wie wird technische Kontrolle durchgeführt?",
        t:"Während der technischen Kontrolle werden Systeme auf Mängel, Überlastungen und mögliche Gefahrenquellen untersucht. Messgeräte und Prüfmethoden garantieren eine präzise Analyse.",
        y:"Vorteile der technischen Kontrolle",
        u:"Regelmäßige technische Kontrollen sorgen für maximale Sicherheit, verhindern Ausfälle und minimieren das Risiko von Bränden. Sie tragen auch zur Langlebigkeit der technischen Anlagen bei.",
        or:"Technischesinstallationen",
        op:"Wir erbringen dem neusten Stand der Technik entsprechende Leistungen in einwandfreier Qualität, termingerecht und zu fairen, marktgerechten Preisen.",
        qa:"Was sind technische Installationen?",
        qs:"Technische Installationen beziehen sich auf die Planung, Installation und Wartung von Systemen, die in Gebäuden und Außenbereichen verwendet werden. Sie sind essenziell für eine sichere und effiziente Funktion der Anlagen.",
        qd:"Wie funktionieren technische Installationen?",
        qf:"Technische Installationen umfassen das Verlegen von Leitungen, die Einrichtung von Systemen und den Anschluss von Geräten. Unsere Fachkräfte sorgen für präzise und sichere Ausführung aller Arbeiten.",
        qg:"Vorteile professioneller technischer Installationen",
        qh:"Professionelle technische Installationen bieten höchste Sicherheit, steigern die Effizienz und verlängern die Lebensdauer der Anlagen. Sie sind eine nachhaltige Investition in die Zukunft.",
      },
      companyPage: {
        description: "ist ein führendes Unternehmen in den Bereichen erneuerbare Energien, moderne Technik und innovative Installationen. Wir stehen für Fortschritt, Qualität und eine nachhaltige Zukunft.",
        missionTitle: "Unsere Mission",
        missionP1: "Unser Ziel ist es, nachhaltige Energielösungen bereitzustellen, die die Umwelt schützen und unseren Kunden langfristige Einsparungen ermöglichen. Mit einem starken Fokus auf Kundenzufriedenheit und Umweltbewusstsein arbeiten wir daran, die Lebensqualität unserer Kunden zu verbessern.",
        missionP2: "Wir engagieren uns dafür, die besten Technologien zu nutzen, um innovative Lösungen zu entwickeln, die sowohl effizient als auch umweltfreundlich sind.",
        visionTitle: "Unsere Vision",
        visionP1: "Wir möchten eine grünere Zukunft schaffen, indem wir innovative und effiziente Energielösungen für Haushalte und Unternehmen anbieten. Unser Traum ist es, in einer Welt zu leben, in der saubere Energie für jeden zugänglich ist.",
        visionP2: "Wir glauben daran, dass technologische Fortschritte der Schlüssel zu einer nachhaltigen Welt sind. Deshalb streben wir danach, Vorreiter in der Branche zu bleiben.",
        servicesTitle: "Unsere Dienstleistungen",
        services: 
          {
            title1: "Photovoltaikanlagen",
            description1: "Installation und Wartung moderner Solarsysteme zur nachhaltigen Energiegewinnung. Unsere Experten sorgen für höchste Effizienz und Langlebigkeit Ihrer Solaranlage.",
            title2: "Wärmepumpen",
            description2: "Umweltfreundliche Heizlösungen für Haushalte und Unternehmen. Wir bieten Beratung, Installation und Wartung für die besten Wärmepumpensysteme.",
            title3: "Technische Installationen",
            description3: "Professionelle und sichere technische Installationen für Neubauten und Renovierungen. Unser Team gewährleistet höchste Sicherheitsstandards und erstklassige Qualität.",
            title4: "Speichersysteme",
            description4: "Effiziente Energiespeicherung zur Maximierung der Eigenverbrauchsquote. Unsere Speicherlösungen sind darauf ausgelegt, Ihre Energieunabhängigkeit zu fördern.",
            title5: "Beratung und Planung",
            description5: "Individuelle Beratung und maßgeschneiderte Planung für alle Ihre Energiebedürfnisse. Unser Team entwickelt Lösungen, die perfekt auf Ihre Anforderungen abgestimmt sind.",
          },
          contactTitle: "Kontaktieren Sie uns",
          contactDescription: "Haben Sie Fragen oder möchten Sie eine Beratung? Kontaktieren Sie unser Expertenteam für maßgeschneiderte Lösungen. Wir stehen Ihnen von Montag bis Freitag von 9:00 bis 18:00 Uhr zur Verfügung.",
          contactPhone: "Sie können uns telefonisch unter",
          contactEmail: "oder uns eine E-Mail an senden.",
          contactButton: "Jetzt Kontakt aufnehmen",
      }, 
        contactTitle: "Kontaktieren Sie uns",
        contactSubtitle: "Wir freuen uns auf Ihre Nachricht!",
        namePlaceholder: "Name",
        phonePlaceholder: "Telefonnummer",
        emailPlaceholder: "E-Mail-Adresse",
        messagePlaceholder: "Nachricht",
        submitButton: "Senden",
        successMessage: "Ihre Nachricht wurde erfolgreich gesendet! ",
        errorMessage: "Ein Fehler ist beim Senden aufgetreten, bitte versuchen Sie es erneut.",
    },
  },
  fr: {
    translation: {
      navbar: {
        home: "Accueil",
        solar: "Solaire",
        energy: "Énergie",
        services: "Entreprise",
        contact: "Contact",
        de: "Allemand",
        fr: "Français",
      },
      footer: {
        location: "Lindenstrasse 21, 2552 Orpund",
        phone: "+41 032 508 323",
        email: "info@mfmelektro.ch",
        privacy: "Déclaration de confidentialité",
        terms: "Conditions d'utilisation",
        contactUs: "Contactez-nous",
        followUs: "Suivez-nous",
        copyright: "Tous droits réservés.",
      },
      home: {
        carousel: {
          slides: [
            {
              label: "LES SPÉCIALISTES",
              title: "Photovoltaïque",
              description: "Nous sommes votre partenaire fiable pour les solutions photovoltaïques et les énergies renouvelables.",
              src: "solar-energy-collectors-photovoltaic-system-pv-1.jpg",
            },
            {
              label: "LES SPÉCIALISTES",
              title: "Systèmes de stockage",
              description: "Optimisez votre consommation d'énergie grâce à nos systèmes de stockage intelligents.",
              src: "bg5.jpg",
            },
            {
              label: "LES SPÉCIALISTES",
              title: "Pompe à chaleur",
              description: "Solutions de chauffage efficaces avec les systèmes de pompe à chaleur les plus modernes pour votre maison.",
              src: "4088241_air-to-air-heat-pump-for-cooling-or-heating-the-home-outdoor-un_noscale_1A_8zW_Bf2A2v.jpg",
            },
            {
              label: "LES SPÉCIALISTES",
              title: "Planification",
              description: "Planification professionnelle pour vos projets énergétiques individuels – parfaitement mise en œuvre dès le départ.",
              src: "bg3.jpg",
            },
            {
              label: "LES SPÉCIALISTES",
              title: "Contrôle électrique",
              description: "Sécurisez vos installations électriques grâce à notre contrôle électrique complet.",
              src: "beutler-elektro-einblick-elektrokontrollen.jpg",
            },
            {
              label: "LES SPÉCIALISTES",
              title: "Installations électriques",
              description: "Profitez de notre expertise en installations électriques pour tous types de projets.",
              src: "hon-ab-energy-storage-solar-power.jpg",
            },
          ],
        },
        photovoltaikSection: {
          energie: {
            title: "Énergie",
            description:
              "Chez MFM Energie, nous sommes spécialisés dans la réparation et l'installation de systèmes électriques intérieurs et extérieurs, offrant des services de réparation, de remplacement et d'entretien de premier ordre pour les projets résidentiels et commerciaux.",
            button: "En savoir plus",
          },
          solar: {
            title: "Solaire",
            description:
              "Chez MFM SOLAR, nous sommes spécialisés dans l'installation de panneaux solaires et d'autres composants aidant les entreprises à réduire leur empreinte carbone et à économiser sur leurs coûts énergétiques.",
            button: "En savoir plus",
          },
        },
      },
      solarPage: {
        title: "SOLAIRE",
        description: "Chez MFM SOLAR, nous sommes spécialisés dans l'installation de panneaux solaires et d'autres composants.",
        photovoltaik: {
          title: "Photovoltaïque",
          description:
            "Utilisez votre énergie comme vous le souhaitez : consommez, stockez, injectez dans le réseau. Avec une installation photovoltaïque, vous pouvez optimiser l'énergie solaire. Produisez votre énergie propre, stockez-la pour une utilisation ultérieure et réduisez votre facture d'électricité jusqu'à 80%.",
          whatIsPhotovoltaik: "Qu'est-ce que le photovoltaïque?",
          howPhotovoltaikWorks:
            "Le photovoltaïque fait référence à la conversion de la lumière du soleil en énergie électrique à l'aide de cellules solaires. Cette technologie est utilisée dans le monde entier pour produire une énergie propre et durable.",
          benefitsOfPhotovoltaik: "Avantages du photovoltaïque",
          Vorteile :"Avantages du photovoltaïque.",
          Photovoltaik1 :"Le photovoltaïque est une source d'énergie renouvelable qui ne produit pas d'émissions nocives. Elle aide à réduire l'empreinte carbone et à promouvoir l'indépendance énergétique.",
          benefitsDescription:
            "Le photovoltaïque est une source d'énergie renouvelable qui ne produit pas d'émissions nocives. Il aide à réduire l'empreinte carbone et à promouvoir l'indépendance énergétique.",
        },
        storageSystems: {
          title: "Systèmes de stockage",
          description:
            "Un système de stockage pour une installation photovoltaïque se compose d'un ensemble de batteries qui stockent l'énergie produite par les panneaux solaires et non consommée immédiatement. Ce système permet de stocker l'énergie excédentaire générée pendant la journée et de l'utiliser le soir ou la nuit.",
          storageInPhotovoltaik: "Stockage dans le système photovoltaïque",
          storageDescription:
            "Le système de stockage est composé de batteries qui stockent l'énergie produite par les panneaux solaires et non utilisée immédiatement. Ce stockage permet d'utiliser l'énergie à un moment ultérieur, par exemple le soir ou la nuit.",
          excessEnergy: "Stocker l'énergie excédentaire",
          excessEnergyDescription:
            "Lorsque les panneaux solaires produisent un excès d'énergie pendant la journée, celle-ci est stockée dans des batteries pour être utilisée lorsque l'ensoleillement diminue ou qu'il n'y a pas de production d'énergie immédiate.",
          nightUsage: "Utilisation de l'énergie la nuit",
          
          nightUsageDescription:
            "Les batteries permettent de fournir de l'électricité pendant les heures nocturnes, garantissant que les appareils électriques peuvent être utilisés sans interruption, même en l'absence de lumière solaire directe.",
        },
      },
      energyPage: {
        Energie: "Énergie",
        description: "Chez MFM Énergie, nous sommes spécialisés dans la réparation et l’installation d’installations électriques intérieures et extérieures, offrant un service de réparation de premier ordre.",
        A: "Pompe à chaleur",
        B: "Les pompes à chaleur sont des systèmes de chauffage écologiques qui utilisent la chaleur de l’air ambiant, du sol ou de l’eau pour chauffer votre maison de manière efficace. Elles constituent une solution durable pour la transition énergétique et réduisent les coûts de chauffage.",
        e: "Qu'est-ce qu'une pompe à chaleur ?",
        j: "Une pompe à chaleur est un appareil qui capte la chaleur de l’environnement et l’élève à une température plus élevée pour chauffer des pièces ou fournir de l’eau chaude. C’est une solution de chauffage efficace et respectueuse de l’environnement.",
        h: "Comment fonctionne une pompe à chaleur ?",
        i: "Les pompes à chaleur fonctionnent selon le principe de la thermodynamique. Elles extraient la chaleur de l’environnement (air, eau ou sol) et la transportent dans votre maison, où elle est utilisée pour le chauffage ou la production d’eau chaude.",
        k: "Avantages de la pompe à chaleur",
        l: "Les pompes à chaleur offrent de nombreux avantages, notamment une grande efficacité énergétique, des coûts de fonctionnement réduits et une solution écologique pour la production de chaleur. Elles contribuent à la réduction des émissions de CO2 et des coûts énergétiques.",
        d: "Planification",
        H: "N’hésitez pas à nous contacter. Nous vous fournirons rapidement des informations en fonction de vos souhaits et besoins.",
        z: "Que signifie la planification ?",
        x: "La planification est la clé du succès des projets. Elle comprend une analyse approfondie, une structuration et une préparation minutieuse de toutes les étapes nécessaires pour garantir des résultats efficaces et sans erreur.",
        c: "Comment se déroule la planification ?",
        v: "Le processus de planification commence par une définition claire des objectifs et une analyse détaillée. Ensuite, des stratégies sont élaborées, des calendriers sont établis et toutes les ressources sont coordonnées efficacement.",
        b: "Avantages d'une planification professionnelle",
        n: "Une planification professionnelle permet d’économiser du temps et des coûts, de minimiser les risques et d’assurer des processus fluides. Elle constitue la base du succès à long terme et de résultats durables.",
        el: "Contrôle électrique",
        er: "Nous plaçons la satisfaction du client en priorité. Nous visons une satisfaction durable, transparente et fondée sur la confiance.",
        z: "Qu'est-ce que le contrôle électrique ?",
        x: "Le contrôle électrique comprend l’inspection des installations et appareils électriques afin de garantir leur sécurité et leur bon fonctionnement. C’est un élément essentiel de l’ingénierie électrique moderne.",
        r: "Comment se déroule un contrôle électrique ?",
        t: "Lors du contrôle électrique, les systèmes électriques sont inspectés pour détecter les défauts, les surcharges et les sources potentielles de danger. Des instruments de mesure et des méthodes d’essai garantissent une analyse précise.",
        y: "Avantages du contrôle électrique",
        u: "Des contrôles électriques réguliers garantissent une sécurité maximale, préviennent les pannes de courant et minimisent les risques d’incendie. Ils contribuent également à la longévité des installations électriques.",
        or: "Installations électriques",
        op: "Nous fournissons des services conformes aux dernières normes technologiques, d’une qualité irréprochable, dans les délais impartis et à des prix justes et compétitifs.",
        qa: "Que sont les installations électriques ?",
        qs: "Les installations électriques englobent la planification, l’installation et la maintenance des systèmes électriques utilisés dans les bâtiments et les espaces extérieurs. Elles sont essentielles pour une alimentation électrique sécurisée.",
        qd: "Comment fonctionnent les installations électriques ?",
        qf: "Les installations électriques comprennent la pose de câbles, l’aménagement de circuits et le raccordement des appareils. Nos experts garantissent un travail précis et sécurisé.",
        qg: "Avantages des installations électriques professionnelles",
        qh: "Les installations électriques professionnelles garantissent une sécurité optimale, améliorent l’efficacité énergétique et prolongent la durée de vie des équipements électriques. Elles constituent un investissement pour l’avenir."
      },
      companyPage: {
        description: "est une entreprise leader dans les domaines des énergies renouvelables, de l’ingénierie électrique et des installations modernes. Nous représentons l’innovation, la qualité et un avenir durable.",
        missionTitle: "Notre mission",
        missionP1: "Notre objectif est de fournir des solutions énergétiques durables qui protègent l'environnement et permettent à nos clients de réaliser des économies à long terme. En mettant l'accent sur la satisfaction client et la conscience environnementale, nous travaillons à améliorer la qualité de vie de nos clients.",
        missionP2: "Nous nous engageons à utiliser les meilleures technologies pour développer des solutions innovantes qui sont à la fois efficaces et respectueuses de l'environnement.",
        visionTitle: "Notre vision",
        visionP1: "Nous voulons créer un avenir plus vert en proposant des solutions énergétiques innovantes et efficaces pour les ménages et les entreprises. Notre rêve est de vivre dans un monde où l'énergie propre est accessible à tous.",
        visionP2: "Nous croyons que les avancées technologiques sont la clé d'un monde durable. C'est pourquoi nous nous efforçons de rester des pionniers dans le secteur.",
        servicesTitle: "Nos services",
    services: 
      {
        title1: "Installations photovoltaïques",
        description1: "Installation et maintenance de systèmes solaires modernes pour une production d’énergie durable. Nos experts garantissent une efficacité et une longévité maximales de votre installation solaire.",
        title2: "Pompes à chaleur",
        description2: "Solutions de chauffage écologiques pour les maisons et les entreprises. Nous offrons des conseils, une installation et un entretien pour les meilleurs systèmes de pompes à chaleur.",
        title3: "Installations électriques",
        description3: "Installations électriques professionnelles et sécurisées pour les nouvelles constructions et les rénovations. Notre équipe garantit les normes de sécurité et de qualité les plus élevées.",
        title4: "Systèmes de stockage",
        description4: "Stockage d’énergie efficace pour maximiser l’autoconsommation. Nos solutions de stockage sont conçues pour améliorer votre indépendance énergétique.",
        title5: "Conseil et planification",
        description5: "Conseils personnalisés et planification sur mesure pour tous vos besoins énergétiques. Notre équipe développe des solutions parfaitement adaptées à vos exigences.",
      },
      contactTitle: "Contactez-nous",
      contactDescription: "Vous avez des questions ou souhaitez une consultation ? Contactez notre équipe d'experts pour des solutions sur mesure. Nous sommes disponibles du lundi au vendredi de 9h00 à 18h00.",
      contactPhone: "Vous pouvez nous joindre par téléphone au",
      contactEmail: "ou nous envoyer un e-mail à",
      contactButton: "Prenez contact maintenant",
    
      },
        contactTitle: "Contactez-nous",
        contactSubtitle: "Nous avons hâte de recevoir votre message!",
        namePlaceholder: "Nom",
        phonePlaceholder: "Numéro de téléphone",
        emailPlaceholder: "Adresse e-mail",
        messagePlaceholder: "Message",
        submitButton: "Envoyer",
        successMessage: "Votre message a été envoyé avec succès! ",
        errorMessage: "Une erreur s'est produite lors de l'envoi, veuillez réessayer.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "de", 
  fallbackLng: "de", 
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
