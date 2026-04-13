import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        about: 'Sobre Nosotros',
        services: 'Servicios',
        properties: 'Propiedades',
        goldenVisa: 'Golden Visa',
        blog: 'Blog',
        contact: 'Contacto',
        contactUs: 'Contáctanos',
      },
      home: {
        hero: {
          title: 'Inversión Inmobiliaria con Alta Rentabilidad en Dubái',
          subtitle:
            'Descubre propiedades estratégicas con cero impuestos y oportunidades de alto valor para inversores globales exigentes.',
        },
        about: {
          title: 'Maestros de la Inversión de Alto Valor',
          content:
            'Con sede en Dubái, seleccionamos oportunidades de inversión inmobiliaria de grado institucional en Dubái exclusivamente para inversores de alto patrimonio que buscan rendimientos superiores en el mercado más dinámico del mundo.',
        },
        services: {
          title: 'Nuestros Servicios',
          viewAll: 'Ver Todos los Servicios',
        },
        blog: {
          title: 'Perspectivas del Mercado',
          readMore: 'Leer Más',
          viewAll: 'Ver Todos los Artículos',
        },
        cta: {
          title: 'Asegure Su Posición en el Mercado Premium de Dubái',
          subtitle:
            'Cero impuestos. Rendimientos máximos. Únase a los inversores más sofisticados del mundo.',
          button: 'Hablar por WhatsApp',
        },
      },
      about: {
        hero: {
          title: 'Sobre Nosotros',
          subtitle: 'Expertos en inversiones inmobiliarias de lujo en Dubái',
        },
        mission: {
          title: 'Nuestra Misión',
          content:
            'Desde la adquisición hasta la optimización de carteras, ofrecemos gestión integral de inversiones inmobiliarias en Dubái. Nuestro enfoque estratégico, combinado con análisis de mercado, nos permite identificar proyectos de alto potencial y acompañamiento experto que permite a nuestros clientes tomar decisiones seguras con buenos fundamentos.',
        },
        whyUs: {
          title: 'Por Qué Elegirnos',
          experience: {
            title: 'Experiencia Comprobada',
            description: 'Respuesta en menos de 24 horas',
          },
          trust: {
            title: 'Confianza Absoluta',
            description: 'Inteligencia de Mercado Completa',
          },
          service: {
            title: 'Servicio 360°',
            description: 'De la búsqueda hasta la rentabilidad',
          },
          spanish: {
            title: 'Atención en Diferentes Idiomas',
            description: 'Inglés, Árabe, Francés y Español',
          },
        },
        stats: {
          experience: '12+ Años de Excelencia',
          properties: '500+ Activos Premium Entregados',
          clients: '250+ Inversores Elite Atendidos',
          countries: '15+ Mercados Globales Representados',
        },
      },
      services: {
        hero: {
          title: 'Nuestros Servicios',
          subtitle: 'Soluciones integrales de creación de riqueza para capital global',
        },
        categories: {
          sales: 'Ventas e Inversión',
          leasing: 'Arrendamiento y Gestión',
          lifestyle: 'Servicios de Estilo de Vida',
        },
        list: {
          residentialSales: {
            title: 'Venta de Propiedades Residenciales',
            description:
              'Acceso exclusivo a las propiedades residenciales más lujosas de Dubái, desde apartamentos de lujo hasta villas impresionantes.',
          },
          commercialSales: {
            title: 'Venta de Bienes Raíces Comerciales',
            description:
              'Oportunidades de inversión comercial premium en oficinas, retail y espacios mixtos en ubicaciones estratégicas.',
          },
          offPlan: {
            title: 'Inversiones sobre Plano',
            description:
              'Invierte en desarrollos futuros con los mejores precios y condiciones de pago flexibles.',
          },
          leasing: {
            title: 'Arrendamiento Residencial y Comercial',
            description:
              'Servicios completos de arrendamiento para propiedades residenciales y comerciales de alta gama.',
          },
          management: {
            title: 'Gestión de Propiedades',
            description:
              'Gestión profesional integral de tu cartera inmobiliaria con máxima rentabilidad.',
          },
          advisory: {
            title: 'Asesoría de Inversión',
            description:
              'Estrategias personalizadas de inversión basadas en análisis profundo del mercado y tus objetivos.',
          },
          relocation: {
            title: 'Asistencia en Reubicación',
            description:
              'Servicio completo para tu mudanza a Dubái, desde búsqueda de hogar hasta trámites legales.',
          },
          goldenVisa: {
            title: 'Orientación para la Golden Visa',
            description:
              'Asesoramiento experto para obtener tu Golden Visa de los EAU a través de inversión inmobiliaria.',
          },
          renovation: {
            title: 'Renovación y Remodelación',
            description:
              'Servicios de renovación de lujo para maximizar el valor y el atractivo de tu propiedad.',
          },
          holidayHomes: {
            title: 'Gestión de Viviendas Vacacionales',
            description:
              'Maximiza los ingresos de tu propiedad vacacional con nuestra gestión profesional completa.',
          },
          furnishing: {
            title: 'Amueblamiento de Propiedades',
            description:
              'Diseño de interiores y amueblamiento de lujo para hacer tu propiedad verdaderamente especial.',
          },
        },
      },
      properties: {
        hero: {
          title: 'Propiedades de Lujo',
          subtitle: 'Oportunidades de Inversión de Alto Valor Seleccionadas',
        },
        filters: {
          type: 'Tipo',
          location: 'Ubicación',
          price: 'Precio',
          all: 'Todos',
        },
        cta: {
          title: 'Buscas Algo Específico?',
          subtitle:
            'Contáctanos para acceder a nuestro portafolio completo de propiedades exclusivas',
          button: 'Ver Portafolio Completo',
        },
      },
      goldenVisa: {
        hero: {
          title: 'Golden Visa de los EAU',
          subtitle: 'Obtén tu residencia de larga duración a través de inversión inmobiliaria',
        },
        investment: {
          title: 'Umbrales de Inversión',
          property: 'Propiedad de USD 545,000 (AED 2M) = Visa de 10 años',
          fund: 'Fondo de inversión de USD 545,000 (AED 2M) = Visa de 10 años',
          company: 'Empresa con capital de USD 136,000 (AED 500K) = Visa de 5 años',
        },
        benefits: {
          title: 'Beneficios de la Golden Visa',
          items: [
            'Residencia de larga duración de 10 años en Dubái, con visa renovable mientras se mantenga la inversión',
            'Renovación automática y sencilla, manteniendo la inversión en activo inmobiliario',
            'Patrocinio familiar, incluyendo miembros de primer grado, permitiéndote establecerte con tu familia',
            'Sin patrocinador local, independencia total para vivir y gestionar tus activos en Dubái',
            'Movilidad internacional sin restricciones de entrada y salida',
            'Acceso a educación, salud y calidad de vida de primer nivel en una de las ciudades más innovadoras',
          ],
        },
        process: {
          title: 'Proceso Simple en 4 Pasos',
          subtitle:
            'Te guiamos paso a paso hacia tu nueva residencia en los Emiratos Árabes Unidos',
          step1: {
            title: 'Consulta Inicial',
            description: 'Evaluamos tu elegibilidad y objetivos',
          },
          step2: {
            title: 'Selección de Inversión',
            description: 'Elegimos la propiedad perfecta para ti',
          },
          step3: {
            title: 'Trámites Legales',
            description: 'Completamos toda la documentación',
          },
          step4: {
            title: 'Obtención de Visa',
            description: 'Recibes tu Golden Visa aprobada',
          },
        },
        cta: {
          title: 'Listo para tu Golden Visa?',
          subtitle: 'Nuestros expertos te guiarán en cada paso del proceso',
          button: 'Solicitar Asesoramiento',
        },
      },
      blog: {
        hero: {
          title: 'Blog e Insights',
          subtitle:
            'Las últimas tendencias y oportunidades del mercado inmobiliario de Dubái',
        },
        readTime: 'min de lectura',
        shareArticle: 'Compartir artículo',
      },
      contact: {
        hero: {
          title: 'Contacto',
          subtitle: 'Conéctese con los Especialistas en Inversión Premier de Dubái',
        },
        form: {
          title: 'Envíanos un Mensaje',
          name: 'Nombre completo',
          email: 'Correo electrónico',
          phone: 'Número de teléfono',
          message: 'Mensaje',
          send: 'Enviar Mensaje',
        },
        info: {
          title: 'Información de Contacto',
          phone: 'Teléfono',
          email: 'Correo',
          whatsapp: 'WhatsApp',
          address: 'Oficina',
        },
        social: {
          title: 'Síguenos',
          facebook: 'Facebook',
          instagram: 'Instagram',
        },
      },
      footer: {
        company: 'Puerta del Sol Real Estate',
        description:
          'Excelencia en inversiones inmobiliarias de grado institucional en Dubái',
        quickLinks: 'Enlaces Rápidos',
        services: 'Servicios',
        contact: 'Contacto',
        followUs: 'Síguenos',
        rights: 'Todos los derechos reservados',
        poweredBy: 'Desarrollado por',
      },
      whatsapp: {
        message:
          '¡Hola! Estoy interesado en conocer más sobre sus oportunidades de inversión inmobiliaria premium en Dubái y rendimientos con 0% de impuestos.',
        hc: {
          viewProps: 'Ver Propiedades',
          learnMore: 'Conocer Más',
          featuredProps: 'Propiedades Destacadas',
          featuredPropsDesc:
            'Selección exclusiva de propiedades de lujo en las ubicaciones más prestigiosas de Dubai',
          viewAllProps: 'Ver Todas las Propiedades',
          dubaiDest: 'Dubai — Tu Próximo Destino',
          dubaiDestDesc:
            'La ciudad más dinámica del mundo, donde el lujo y la innovación se encuentran',
          luxInvTitle: 'Inversiones Inmobiliarias de Lujo en Dubai',
          dubaiOffer:
            'Dubai ofrece una combinación única de rentabilidad, seguridad y estilo de vida que ninguna otra ciudad puede igualar. Con rendimientos de alquiler del 6-10%, impuestos cero sobre la renta y un mercado en constante crecimiento.',
          teamAccompany:
            'Nuestro equipo te acompaña en cada paso — desde la selección de la propiedad ideal hasta la gestión completa de tu inversión, todo en español.',
          incomeTax: 'Impuesto sobre Renta',
          aboutLong:
            'Con más de 12 años de experiencia en el mercado inmobiliario de Dubái, ofrecemos un servicio personalizado para inversores internacionales que buscan oportunidades sólidas de alto valor, revalorización y proyección de futuro.',
          ourTeam: 'Nuestro Equipo',
          teamDesc:
            'Profesionales con amplia experiencia en mercados inmobiliarios globales',
          personalService: 'Atención Personalizada',
          personalServiceDesc:
            'Servicio adaptado a las necesidades de inversores internacionales',
          transparency: 'Transparencia y honestidad en cada transacción',
          readyInvest: 'Listo para Invertir con Nosotros?',
          readyInvestDesc:
            'Únete a más de 250 inversores satisfechos que han confiado en nosotros para sus inversiones en Dubai',
          moreInfo: 'Más Información',
          ourProcess: 'Nuestro Proceso',
          ourProcessDesc:
            'Un enfoque sistemático para garantizar el éxito de tu inversión inmobiliaria',
          readyStart: 'Listo para Comenzar tu Inversión?',
          readyStartDesc:
            'Nuestro equipo de expertos está aquí para guiarte en cada paso de tu inversión inmobiliaria en Dubai',
          viewDetails: 'Ver Detalles',
          noProps: 'No se encontraron propiedades',
          adjustFilters: 'Prueba ajustar los filtros para ver más opciones',
          knowReqs: 'Conocer Requisitos',
          investRoutes:
            'Diferentes rutas de inversión para obtener tu residencia de larga duración',
          visaAdvantages:
            'Ventajas exclusivas que transformarán tu estilo de vida y oportunidades de negocio',
          visaGuide:
            'Te guiamos paso a paso hacia tu nueva residencia en los Emiratos Árabes Unidos',
          featuredArticle: 'Artículo Destacado',
          readArticle: 'Leer Artículo',
          readMore: 'Leer Más',
          newsletter:
            'Recibe las últimas tendencias del mercado inmobiliario de Dubai directamente en tu correo',
          articleNotFound: 'Artículo no encontrado',
          backToBlog: 'Volver al Blog',
          interestedInvest: 'Interesado en Invertir en Dubai?',
          expertHelp:
            'Nuestros expertos están aquí para ayudarte a encontrar la inversión perfecta',
          relatedArticles: 'Artículos Relacionados',
          thankYou:
            'Gracias por contactarnos. Responderemos en las próximas 24 horas.',
          officeHours: 'Horarios de Atención',
          ourLocation: 'Nuestra Ubicación',
          uae: 'Emiratos Árabes Unidos',
          locationDesc:
            'Estamos ubicados en el corazón de Business Bay, una de las zonas más exclusivas de la ciudad. Nuestras oficinas ofrecen fácil acceso a las principales atracciones y desarrollos inmobiliarios de Dubai.',
          viewMaps: 'Ver en Google Maps',
          needImmediate: 'Necesitas Atención Inmediata?',
          urgentDesc:
            'Para consultas urgentes o asistencia inmediata, contáctanos directamente por WhatsApp',
          contactWhatsApp: 'Contactar por WhatsApp',
          annualReturn: 'Rendimiento Anual',
          intlExperience: 'Experiencia Internacional',
          totalTrust: 'Confianza Total',
          filters: 'Filtros:',
          featuredBadge: 'Destacada',
          clearFilters: 'Limpiar Filtros',
          reqDocs: 'Documentos Requeridos',
          gvDocTitle: 'Documentos Requeridos',
          personalDocs: 'Documentos Personales',
          financialDocs: 'Documentos Financieros',
          featuredTag: 'Destacado',
          stayInformed: 'Mantente Informado',
          subscribe: 'Suscribirse',
          contactExperts: 'Contactar Expertos',
          msgSent: '¡Mensaje Enviado!',
          blog1: 'Cómo las viviendas de lujo de Dubái garantizan un alto retorno',
          blog2: 'Por qué los inversores extranjeros eligen el mercado inmobiliario de Dubai',
          blog3: 'Por qué Dubái es la mejor ciudad para invertir en 2025',
          blog4: 'Comprar una vivienda de lujo en Dubái es más que una inversión',
          blog5: 'Tendencias del mercado inmobiliario 2026',
          searchSelect: 'Búsqueda y Selección',
          realEstateProp: 'Propiedad Inmobiliaria',
          investFund: 'Fondo de Inversión',
          catSales:
            'Oportunidades de inversión exclusivas en el mercado inmobiliario de lujo de Dubai',
          catLeasing:
            'Gestión profesional y servicios de arrendamiento para maximizar tu inversión',
          catLifestyle:
            'Servicios especializados para una experiencia de vida de lujo completa',
          procAnalyse: 'Analizamos tus objetivos y necesidades específicas',
          procPlan: 'Desarrollamos un plan de inversión adaptado a tu perfil',
          procSearch: 'Identificamos las mejores oportunidades del mercado',
          procClose:
            'Completamos la transacción y ofrecemos soporte continuo',
          propVilla1:
            'Espectacular villa frente al mar con vistas panorámicas al Golfo Pérsico.',
          propVilla2: 'Villa exclusiva en la zona más prestigiosa de Dubai.',
          propCommercial:
            'Espacio comercial premium en el corazón financiero de Dubai.',
          visaProp: 'Inversión en propiedades residenciales o comerciales',
          visaFund: 'Inversión en fondos aprobados por el gobierno',
          visaSimple: 'Proceso simplificado sin complicaciones',
          visaFamily: 'Incluye cónyuge e hijos menores de 18 años',
          visaLifestyle: 'Educación, salud y servicios de primera clase',
          gvEntrepreneur: 'Emprendedor',
          gvEntrepreneurAmt: 'AED 500,000+',
          gvEntrepreneurDesc:
            'Proyecto innovador o técnico con aprobación de incubadora acreditada',
          gvVisaPrefix: 'Visa de ',
          gvRealEstateNote:
            'Desde febrero 2026: ya no se requiere el 50% de pago inicial. Hipotecas aceptadas.',
          gvBenefitFreedom:
            'Independencia total en tus movimientos dentro y fuera de EAU',
          gvBenefitTravel:
            'Viaja sin restricciones de tiempo fuera de EAU sin perder tu residencia',
          gvDocPassport: 'Pasaporte válido (mínimo 6 meses)',
          gvDocPhotos:
            'Fotografías recientes tamaño pasaporte (fondo blanco)',
          gvDocMedical: 'Certificado de aptitud médica',
          gvDocPolice: 'Antecedentes penales apostillados',
          gvDocInvestment:
            'Título de propiedad o carta del DLD (Departamento de Tierras de Dubai)',
          gvDocBank: 'Estados financieros bancarios',
          gvDocInsurance: 'Seguro médico válido en EAU',
          gvDocForms:
            'Formularios de solicitud completados y Emirates ID',
          gvFamilyTitle: 'Cobertura Familiar Completa',
          gvFamilySubtitle:
            'La Golden Visa ofrece la cobertura familiar más generosa de todos los programas de residencia de EAU',
          gvFamilyChildren: 'Hijos Sin Límite de Edad',
          gvFamilyChildrenDesc:
            'A diferencia de las visas normales (límite de 25 años para hijos), la Golden Visa patrocina hijos e hijas de cualquier edad, sin restricciones',
          gvFamilySpouse: 'Cónyuge',
          gvFamilySpouseDesc:
            'Tu esposo/a recibe la misma duración de residencia. Se requiere certificado de matrimonio atestiguado',
          gvFamilyParents: 'Padres',
          gvFamilyParentsDesc:
            'Patrocina a tus padres para que residan contigo en EAU con permisos de residencia a largo plazo',
          gvFamilyHelpers: 'Personal Doméstico',
          gvFamilyHelpersDesc:
            'Patrocina niñeras, conductores y personal del hogar bajo tu Golden Visa',
          gvFamilyProtection: 'Protección Familiar',
          gvFamilyProtectionDesc:
            'Si el titular fallece, los familiares pueden permanecer en EAU hasta el vencimiento de sus permisos',
          gvFamilyNoSalary: 'Sin Requisito de Salario',
          gvFamilyNoSalaryDesc:
            'El patrocinio familiar no depende de un umbral salarial. Tu Golden Visa demuestra estabilidad financiera',
          gvContactTitle: 'Contactos Oficiales y Verificación',
          gvContactSubtitle:
            'Canales oficiales del gobierno para consultas sobre Golden Visa',
          gvContactGDRFA: 'GDRFA Dubai',
          gvContactGDRFADesc:
            'Dirección General de Identidad y Asuntos de Extranjeros',
          gvContactTollFree: 'Línea gratuita (dentro de EAU)',
          gvContactIntl: 'Desde el exterior',
          gvContactICP: 'ICP Federal',
          gvContactICPDesc:
            'Autoridad Federal de Identidad, Ciudadanía, Aduanas y Seguridad Portuaria',
          gvContactWebsite: 'Portal Oficial',
          gvContactWebsiteDesc:
            'Plataforma oficial del gobierno de EAU para información de Golden Visa',
          gvContact247: 'Disponible 24/7',
          yearsExcellence: 'Años de Excelencia',
          aedValue: 'Más de USD 6M',
          emailPlaceholder: 'Tu correo electrónico',
          statAssets: 'Activos Premium Entregados',
          statInvestors: 'Inversores Elite Atendidos',
          statTransactions: 'En Transacciones',
          blogExcerpt1:
            'Descubre por qué Dubai sigue siendo el destino de inversión preferido para inversores de alto patrimonio.',
          blogExcerpt2:
            'Un estudio completo de las ventajas fiscales, el crecimiento sostenido y la estabilidad política que convierte a Dubai en el destino preferido.',
          blogExcerpt3:
            'Guía completa de las ubicaciones más prometedoras: desde Downtown Dubai hasta las nuevas zonas emergentes que están redefiniendo el lujo urbano.',
          blogExcerpt4:
            'Descubre cómo la inversión inmobiliaria en Dubai trasciende los números, ofreciendo un estilo de vida único y oportunidades excepcionales para inversores latinoamericanos.',
          blogExcerpt5:
            'Análisis detallado de los factores que hacen de Dubai el destino de inversión inmobiliaria más rentable para inversores de alto patrimonio en 2026.',
          blogExcerpt6:
            'Análisis completo de las ventajas fiscales y de crecimiento que ofrece el mercado dubaití.',
          blogExcerpt7:
            'Las reformas económicas, la expo legacy y los mega-proyectos continúan impulsando el crecimiento exponencial del sector inmobiliario dubaitíl.',
          blogExcerpt8:
            'Guía completa de las ubicaciones más prometedoras para inversión inmobiliaria este año.',
          catInversion: 'Inversión',
          catMercado: 'Mercado',
          catUbicaciones: 'Ubicaciones',
          blogAuthor: 'Equipo Puerta del Sol Real Estate',
          blogDate1: '15 Marzo 2026',
          blogDate2: '15 Febrero 2026',
          blogDate3: '10 Enero 2026',
          blogDate4: '5 Diciembre 2025',
          blogDate5: '20 Noviembre 2025',
          priceUnder5: 'Hasta USD 2M',
          price5to15: 'USD 2M - 6M',
          price15plus: 'Más de USD 6M',
          visaAmount2m: 'USD 545,000 (AED 2M)',
          visaDuration10: '10 años',
          visaDuration5: '5 años',
          visaAmount500k: 'USD 136,000 (AED 500K)',
          visaNoRenewal: 'Sin necesidad de renovaciones frecuentes',
          contactNow: 'Contactar Ahora',
          popupTitle: 'Buscas invertir en Dubái?',
          popupDesc:
            'Habla con nuestros expertos y descubre las mejores oportunidades de inversión inmobiliaria con 0% de impuestos.',
          popupCta: 'Hablar por WhatsApp',
          popupClose: 'Ahora no',
          catEntry: 'Inversión de Entrada',
          catEntryDesc:
            'Studios y apartamentos en zonas de alto rendimiento como JVC, Dubai South y Al Furjan. Rendimientos del 7-9%. Punto de entrada ideal para inversores primerizos.',
          catEntryAreas: 'JVC • Dubai South • Al Furjan • Sports City',
          catPremium: 'Inversión Premium',
          catPremiumDesc:
            'Apartamentos premium y penthouses en Downtown Dubai, Dubai Marina y Business Bay. Alto potencial de revalorización con rendimientos del 5-7%.',
          catPremiumAreas:
            'Downtown • Marina • Business Bay • Creek Harbour',
          catLuxury: 'Inversión de Lujo',
          catLuxuryDesc:
            'Villas de lujo y penthouses exclusivos en Dubai Hills, Jumeirah Golf Estates y MBR City. Activos patrimoniales con rendimientos estables del 4-6%.',
          catLuxuryAreas: 'Dubai Hills • MBR City • JGE • District One',
          catUltra: 'Ultra Premium',
          catUltraDesc:
            'Mansiones frente al mar en Palm Jumeirah, Emirates Hills y Jumeirah Bay Island. Propiedades exclusivas para el inversor más exigente.',
          catUltraAreas: 'Palm Jumeirah • Emirates Hills • Jumeirah Bay',
          catFrom: 'Desde',
          catCta: 'Explorar Categoría',
          catWhatsApp: 'Consultar por WhatsApp',
          carSlide1H: 'Cero Impuestos, Máximo Retorno',
          carSlide1S:
            'Dubai ofrece 0% impuesto sobre la renta, 0% sobre ganancias de capital y 0% sobre patrimonio. Tu inversión trabaja al máximo.',
          carStat1: 'Impuesto sobre la renta',
          carSlide2H: 'Golden Visa: Tu Puerta a la Residencia',
          carSlide2S:
            'Invierte desde USD 545,000 y obtén una visa de residencia de 10 años para ti y toda tu familia.',
          carStat2: 'Residencia',
          carSlide3H: 'Rendimientos que Superan al Mercado',
          carSlide3S:
            'Las zonas premium de Dubai generan rendimientos de alquiler del 7-10%, superando a Londres, Nueva York y Miami.',
          carStat3: 'Rendimiento de alquiler',
          carSlide4H: 'La Ciudad Más Segura para Invertir',
          carSlide4S:
            'Clasificada #1 en seguridad global, con un marco legal transparente que protege a los inversores extranjeros.',
          carStat4: 'En seguridad global',
          carSlide5H: 'Estilo de Vida de Lujo, Todo el Año',
          carSlide5S:
            '325 días de sol, playas de clase mundial, gastronomía Michelin y una comunidad cosmopolita de 200 nacionalidades.',
          carStat5: 'Días de sol al año',
          carSlide6H: 'Una Economía de USD 2 Trillones',
          carSlide6S:
            'La economía más diversificada del Golfo, con infraestructura de clase mundial y un crecimiento sostenido del PIB.',
          carStat6: 'Economía del PIB',
          ourValues: 'Nuestros Valores',
          valExperience: 'Experiencia Internacional',
          valExperienceDesc:
            'Más de 12 años asesorando a inversores de América Latina, Europa y Oriente Medio en el mercado inmobiliario de Dubai. Conocemos cada comunidad, cada desarrollador, cada oportunidad.',
          valService: 'Servicio Personalizado',
          valServiceDesc:
            'Cada inversor es único. Ofrecemos asesoramiento dedicado en español, acompañándote en cada paso desde la búsqueda hasta la entrega de llaves y más allá.',
          valTrust: 'Transparencia Total',
          valTrustDesc:
            'Sin comisiones ocultas, sin sorpresas. Operamos con total transparencia, proporcionando datos reales del mercado para que tomes decisiones informadas.',
          aboutStat1: 'Idiomas (ES/EN/AR)',
          aboutStat2: 'Disponibilidad',
          aboutStat3: 'Satisfacción del Cliente',
          aboutStat4: 'Primera Respuesta',
          nbTitle1: '¿Por qué invertir en Dubai en 2026?',
          nbExcerpt1:
            'Dubai combina crecimiento económico, seguridad jurídica y demanda internacional sostenida. Para el inversor latinoamericano, 2026 ofrece una ventana clara para entrar en un mercado dolarizado con fundamentos sólidos.',
          nbCat1: 'Inversión',
          nbDate1: '15 Marzo 2026',
          nbTitle2: 'Golden Visa Dubai: Guía Completa para Inversores',
          nbExcerpt2:
            'La residencia por inversión en Dubai es directa, clara y competitiva frente a Europa o Norteamérica. Con el umbral correcto de inversión, una familia puede asegurar estabilidad migratoria por años.',
          nbCat2: 'Golden Visa',
          nbDate2: '15 Febrero 2026',
          nbTitle3: 'Las 5 Mejores Zonas para Invertir en Dubai',
          nbExcerpt3:
            'No todas las zonas de Dubai sirven para el mismo perfil de inversor. Elegir bien entre rentabilidad, liquidez y apreciación de capital cambia por completo el resultado.',
          nbCat3: 'Ubicaciones',
          nbDate3: '10 Enero 2026',
          nbTitle4: '0% Impuestos: Las Ventajas Fiscales de Dubai',
          nbExcerpt4:
            'Dubai ofrece uno de los entornos fiscales más eficientes del mundo para el inversor inmobiliario. Entender cómo funciona esa ventaja cambia por completo el retorno neto de la inversión.',
          nbCat4: 'Fiscalidad',
          nbDate4: '5 Diciembre 2025',
          nbTitle5: 'Rendimientos de Alquiler: Dubai vs el Mundo',
          nbExcerpt5:
            'Dubai sigue superando a las grandes capitales globales en rentabilidad bruta residencial. Pero el dato importante no es solo el porcentaje, sino qué queda limpio después de costes.',
          nbCat5: 'Rentabilidad',
          nbDate5: '20 Noviembre 2025',
          nbTitle6:
            'Cómo Comprar una Propiedad en Dubai Siendo Extranjero',
          nbExcerpt6:
            'Comprar en Dubai como extranjero es más simple de lo que muchos creen, siempre que se conozca el proceso y los costes reales. La clave está en estructurar bien la operación desde el primer día.',
          nbCat6: 'Guía',
          nbDate6: '15 Octubre 2025',
        },
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About Us',
        services: 'Services',
        properties: 'Properties',
        goldenVisa: 'Golden Visa',
        blog: 'Blog',
        contact: 'Contact',
        contactUs: 'Contact Us',
      },
      home: {
        hero: {
          title: 'High-Return Real Estate Investment in Dubai',
          subtitle:
            'Discover strategic properties with zero tax and high-value opportunities for discerning global investors.',
        },
        about: {
          title: 'Masters of High-Value Investment',
          content:
            'Based in Dubai, we curate institutional-grade Dubai real estate investment opportunities exclusively for high-net-worth investors seeking superior returns in the world\'s most dynamic market.',
        },
        services: {
          title: 'Our Services',
          viewAll: 'View All Services',
        },
        blog: {
          title: 'Market Insights',
          readMore: 'Read More',
          viewAll: 'View All Articles',
        },
        cta: {
          title: 'Secure Your Position in Dubai\'s Premium Market',
          subtitle:
            'Zero tax. Maximum returns. Join the world\'s most sophisticated investors.',
          button: 'Chat on WhatsApp',
        },
      },
      about: {
        hero: {
          title: 'About Us',
          subtitle:
            'Experts in high quality, high return real estate investment in Dubai — 0% tax on returns',
        },
        mission: {
          title: 'Our Mission',
          content:
            'From acquisition to portfolio optimisation, we deliver comprehensive real estate investment management in Dubai. Our strategic focus, combined with market analysis, allows us to identify high-potential projects with expert guidance that enables our clients to make sound, well-founded decisions.',
        },
        whyUs: {
          title: 'Why Choose Us',
          experience: {
            title: 'Proven Experience',
            description: 'Response in less than 24 hours',
          },
          trust: {
            title: 'Absolute Trust',
            description: 'Complete Market Intelligence',
          },
          service: {
            title: '360° Service',
            description: 'From search to profitability',
          },
          spanish: {
            title: 'Multilingual Service',
            description: 'English, Arabic, French and Spanish',
          },
        },
        stats: {
          experience: '12+ Years of Excellence',
          properties: '500+ Premium Assets Delivered',
          clients: '250+ Elite Investors Served',
          countries: '15+ Global Markets Represented',
        },
      },
      services: {
        hero: {
          title: 'Our Services',
          subtitle: 'Comprehensive wealth-building solutions for global capital',
        },
        categories: {
          sales: 'Sales & Investment',
          leasing: 'Leasing & Management',
          lifestyle: 'Lifestyle Services',
        },
        list: {
          residentialSales: {
            title: 'Residential Property Sales',
            description:
              'Exclusive access to Dubai\'s most luxurious residential properties, from high-end flats to stunning villas.',
          },
          commercialSales: {
            title: 'Commercial Real Estate Sales',
            description:
              'Premium commercial investment opportunities in offices, retail, and mixed-use spaces in strategic locations.',
          },
          offPlan: {
            title: 'Off-Plan Investments',
            description:
              'Invest in future developments with the best prices and flexible payment terms.',
          },
          leasing: {
            title: 'Residential & Commercial Leasing',
            description:
              'Complete leasing services for high-end residential and commercial properties.',
          },
          management: {
            title: 'Property Management',
            description:
              'Comprehensive professional management of your property portfolio for maximum profitability.',
          },
          advisory: {
            title: 'Investment Advisory',
            description:
              'Personalised investment strategies based on deep market analysis and your objectives.',
          },
          relocation: {
            title: 'Relocation Assistance',
            description:
              'Complete service for your move to Dubai, from home search to legal procedures.',
          },
          goldenVisa: {
            title: 'Golden Visa Guidance',
            description:
              'Expert advice to obtain your UAE Golden Visa through real estate investment.',
          },
          renovation: {
            title: 'Renovation & Refurbishment',
            description:
              'Luxury renovation services to maximise your property\'s value and appeal.',
          },
          holidayHomes: {
            title: 'Holiday Homes Management',
            description:
              'Maximise your holiday property income with our complete professional management.',
          },
          furnishing: {
            title: 'Property Furnishing',
            description:
              'Luxury interior design and furnishing to make your property truly special.',
          },
        },
      },
      properties: {
        hero: {
          title: 'Luxury Properties',
          subtitle: 'Curated High-Value Investment Opportunities',
        },
        filters: {
          type: 'Type',
          location: 'Location',
          price: 'Price',
          all: 'All',
        },
        cta: {
          title: 'Looking for Something Specific?',
          subtitle:
            'Contact us to access our complete portfolio of exclusive properties',
          button: 'View Complete Portfolio',
        },
      },
      goldenVisa: {
        hero: {
          title: 'UAE Golden Visa',
          subtitle:
            'Obtain your long-term residency through real estate investment',
        },
        investment: {
          title: 'Investment Thresholds',
          property: 'USD 545,000 (AED 2M) property = 10-year visa',
          fund: 'USD 545,000 (AED 2M) investment fund = 10-year visa',
          company: 'USD 136,000 (AED 500K) company capital = 5-year visa',
        },
        benefits: {
          title: 'Golden Visa Benefits',
          items: [
            '10-year long-duration residency in Dubai, with a renewable visa while maintaining your investment',
            'Simple automatic renewal, keeping your investment in active real estate',
            'Family sponsorship including first-degree family members, allowing you to settle with your family',
            'No local sponsor required — complete independence to live and manage your assets in Dubai',
            'International mobility with no entry or exit restrictions',
            'Access to first-class education, healthcare and quality of life in one of the world\'s most innovative cities',
          ],
        },
        process: {
          title: 'Simple 4-Step Process',
          subtitle:
            'We guide you step by step to your new residency in the United Arab Emirates',
          step1: {
            title: 'Initial Consultation',
            description: 'We assess your eligibility and objectives',
          },
          step2: {
            title: 'Investment Selection',
            description: 'We choose the perfect property for you',
          },
          step3: {
            title: 'Legal Procedures',
            description: 'We complete all documentation',
          },
          step4: {
            title: 'Visa Approval',
            description: 'You receive your approved Golden Visa',
          },
        },
        cta: {
          title: 'Ready for Your Golden Visa?',
          subtitle:
            'Our experts will guide you through every step of the process',
          button: 'Request Advisory',
        },
      },
      blog: {
        hero: {
          title: 'Blog & Insights',
          subtitle:
            'Latest trends and opportunities in Dubai\'s real estate market',
        },
        readTime: 'min read',
        shareArticle: 'Share article',
      },
      contact: {
        hero: {
          title: 'Contact',
          subtitle: 'Connect with Dubai\'s Premier Investment Specialists',
        },
        form: {
          title: 'Send Us a Message',
          name: 'Full name',
          email: 'Email address',
          phone: 'Phone number',
          message: 'Message',
          send: 'Send Message',
        },
        info: {
          title: 'Contact Information',
          phone: 'Phone',
          email: 'Email',
          whatsapp: 'WhatsApp',
          address: 'Office',
        },
        social: {
          title: 'Follow Us',
          facebook: 'Facebook',
          instagram: 'Instagram',
        },
      },
      footer: {
        company: 'Puerta del Sol Real Estate',
        description:
          'Institutional-grade property investment with guaranteed 0% tax on returns. High-value assets for discerning global investors.',
        quickLinks: 'Quick Links',
        services: 'Services',
        contact: 'Contact',
        followUs: 'Follow Us',
        rights: 'All rights reserved',
        poweredBy: 'Powered by',
      },
      whatsapp: {
        message:
          'Hello! I\'m interested in learning more about your premium Dubai real estate investment opportunities and 0% tax returns.',
        hc: {
          viewProps: 'View Properties',
          learnMore: 'Learn More',
          featuredProps: 'Featured Properties',
          featuredPropsDesc:
            'Exclusive selection of premium properties in Dubai\'s most prestigious locations',
          viewAllProps: 'View All Properties',
          dubaiDest: 'Dubai — Your Next Destination',
          dubaiDestDesc:
            'The world\'s most dynamic city, where premium meets innovation',
          luxInvTitle: 'Premium Real Estate Investment in Dubai',
          dubaiOffer:
            'Dubai offers a unique combination of profitability, security and lifestyle unmatched by any other city. With rental yields of 6-10%, zero income tax and a constantly growing market.',
          teamAccompany:
            'Our team accompanies you every step — from selecting the ideal property to complete management of your investment.',
          incomeTax: 'Income Tax',
          aboutLong:
            'With over 12 years of experience in the Dubai real estate market, we offer a personalised service for international investors seeking solid high-value opportunities with strong appreciation and future growth potential.',
          ourTeam: 'Our Team',
          teamDesc:
            'Professionals with extensive experience in global real estate markets',
          personalService: 'Personalised Service',
          personalServiceDesc:
            'Tailored service adapted to international investor needs',
          transparency: 'Transparency and integrity in every transaction',
          readyInvest: 'Ready to Invest With Us?',
          readyInvestDesc:
            'Join over 250 satisfied investors who have trusted us with their Dubai investments',
          moreInfo: 'More Information',
          ourProcess: 'Our Process',
          ourProcessDesc:
            'A systematic approach to ensure the success of your real estate investment',
          readyStart: 'Ready to Begin Your Investment?',
          readyStartDesc:
            'Our expert team is here to guide you through every step of your Dubai real estate investment',
          viewDetails: 'View Details',
          noProps: 'No properties found',
          adjustFilters: 'Try adjusting filters to see more options',
          knowReqs: 'Learn Requirements',
          investRoutes:
            'Different investment routes to obtain your long-term residency',
          visaAdvantages:
            'Exclusive advantages that will transform your lifestyle and business opportunities',
          visaGuide:
            'We guide you step by step towards your new residency in the UAE',
          featuredArticle: 'Featured Article',
          readArticle: 'Read Article',
          readMore: 'Read More',
          newsletter:
            'Receive the latest Dubai real estate trends directly to your inbox',
          articleNotFound: 'Article not found',
          backToBlog: 'Back to Blog',
          interestedInvest: 'Interested in Investing in Dubai?',
          expertHelp:
            'Our experts are here to help you find the perfect investment',
          relatedArticles: 'Related Articles',
          thankYou:
            'Thank you for contacting us. We will respond within the next 24 hours.',
          officeHours: 'Office Hours',
          ourLocation: 'Our Location',
          uae: 'United Arab Emirates',
          locationDesc:
            'We are located in the heart of Business Bay, one of the most exclusive areas of the city. Our offices offer easy access to Dubai\'s key attractions and real estate developments.',
          viewMaps: 'View on Google Maps',
          needImmediate: 'Need Immediate Assistance?',
          urgentDesc:
            'For urgent enquiries or immediate assistance, contact us directly on WhatsApp',
          contactWhatsApp: 'Contact via WhatsApp',
          annualReturn: 'Annual Return',
          intlExperience: 'International Experience',
          totalTrust: 'Complete Trust',
          filters: 'Filters:',
          featuredBadge: 'Featured',
          clearFilters: 'Clear Filters',
          reqDocs: 'Required Documents',
          gvDocTitle: 'Required Documents',
          personalDocs: 'Personal Documents',
          financialDocs: 'Financial Documents',
          featuredTag: 'Featured',
          stayInformed: 'Stay Informed',
          subscribe: 'Subscribe',
          contactExperts: 'Contact Experts',
          msgSent: 'Message Sent!',
          blog1: 'How Dubai\'s premium properties guarantee high returns',
          blog2: 'Why international investors choose Dubai\'s real estate market',
          blog3: 'Why Dubai is the best city to invest in 2025',
          blog4: 'Buying a luxury property in Dubai is more than an investment',
          blog5: 'Real estate market trends 2026',
          searchSelect: 'Search & Selection',
          realEstateProp: 'Real Estate Property',
          investFund: 'Investment Fund',
          catSales:
            'Exclusive investment opportunities in Dubai\'s premium real estate market',
          catLeasing:
            'Professional management and leasing services to maximise your investment',
          catLifestyle:
            'Specialised services for a complete luxury living experience',
          procAnalyse: 'We analyse your specific goals and requirements',
          procPlan:
            'We develop an investment plan tailored to your profile',
          procSearch:
            'We identify the best opportunities in the market',
          procClose:
            'We complete the transaction and offer ongoing support',
          propVilla1:
            'Spectacular beachfront villa with panoramic views of the Arabian Gulf.',
          propVilla2: 'Exclusive villa in Dubai\'s most prestigious area.',
          propCommercial:
            'Premium commercial space in the financial heart of Dubai.',
          visaProp: 'Investment in residential or commercial properties',
          visaFund: 'Investment in government-approved funds',
          visaSimple: 'Streamlined process without complications',
          visaFamily: 'Includes spouse and children under 18',
          visaLifestyle: 'World-class education, healthcare and services',
          gvEntrepreneur: 'Entrepreneur',
          gvEntrepreneurAmt: 'AED 500,000+',
          gvEntrepreneurDesc:
            'Innovative or technical project with accredited business incubator approval',
          gvVisaPrefix: '',
          gvRealEstateNote:
            'From February 2026: 50% down payment requirement removed. Mortgaged properties accepted.',
          gvBenefitFreedom:
            'Complete independence of movement in and out of the UAE',
          gvBenefitTravel:
            'Stay outside the UAE without time restrictions and keep your residency',
          gvDocPassport: 'Valid passport (minimum 6 months)',
          gvDocPhotos:
            'Recent passport-size photographs (white background)',
          gvDocMedical: 'Medical fitness certificate',
          gvDocPolice: 'Apostilled criminal background check',
          gvDocInvestment:
            'Title deed or DLD (Dubai Land Department) confirmation letter',
          gvDocBank: 'Bank financial statements',
          gvDocInsurance: 'Valid UAE health insurance',
          gvDocForms: 'Completed application forms and Emirates ID',
          gvFamilyTitle: 'Complete Family Coverage',
          gvFamilySubtitle:
            'The Golden Visa offers the most generous family coverage of any UAE residency programme',
          gvFamilyChildren: 'Children With No Age Limit',
          gvFamilyChildrenDesc:
            'Unlike standard visas (which cap sons at 25), the Golden Visa sponsors sons and daughters of any age, with no restrictions',
          gvFamilySpouse: 'Spouse',
          gvFamilySpouseDesc:
            'Your husband or wife receives the same residency duration. Attested marriage certificate required',
          gvFamilyParents: 'Parents',
          gvFamilyParentsDesc:
            'Sponsor your parents to reside with you in the UAE with long-term residence permits',
          gvFamilyHelpers: 'Domestic Staff',
          gvFamilyHelpersDesc:
            'Sponsor nannies, drivers, and household staff under your Golden Visa',
          gvFamilyProtection: 'Family Protection',
          gvFamilyProtectionDesc:
            'If the visa holder passes away, family members can remain in the UAE until their permits expire',
          gvFamilyNoSalary: 'No Salary Requirement',
          gvFamilyNoSalaryDesc:
            'Family sponsorship does not depend on a salary threshold. Your Golden Visa demonstrates financial stability',
          gvContactTitle: 'Official Contacts & Verification',
          gvContactSubtitle:
            'Official government channels for Golden Visa enquiries',
          gvContactGDRFA: 'GDRFA Dubai',
          gvContactGDRFADesc:
            'General Directorate of Identity and Foreigners Affairs',
          gvContactTollFree: 'Toll-free (inside UAE)',
          gvContactIntl: 'From outside UAE',
          gvContactICP: 'ICP Federal',
          gvContactICPDesc:
            'Federal Authority for Identity, Citizenship, Customs & Port Security',
          gvContactWebsite: 'Official Portal',
          gvContactWebsiteDesc:
            'Official UAE Government platform for Golden Visa information',
          gvContact247: 'Available 24/7',
          yearsExcellence: 'Years of Excellence',
          aedValue: 'Over USD 6M',
          emailPlaceholder: 'Your email address',
          statAssets: 'Premium Assets Delivered',
          statInvestors: 'Elite Investors Served',
          statTransactions: 'In Transactions',
          blogExcerpt1:
            'Discover why Dubai remains the preferred investment destination for high-net-worth investors.',
          blogExcerpt2:
            'A comprehensive study of the tax advantages, sustained growth and political stability that make Dubai the preferred destination.',
          blogExcerpt3:
            'Complete guide to the most promising locations: from Downtown Dubai to emerging areas redefining urban luxury.',
          blogExcerpt4:
            'Discover how Dubai real estate investment transcends the numbers, offering a unique lifestyle and exceptional opportunities for international investors.',
          blogExcerpt5:
            'Detailed analysis of the factors that make Dubai the most profitable real estate investment destination for high-net-worth investors in 2026.',
          blogExcerpt6:
            'Comprehensive analysis of the tax and growth advantages offered by Dubai\'s real estate market.',
          blogExcerpt7:
            'Economic reforms, the expo legacy and mega-projects continue to drive exponential growth in Dubai\'s real estate sector.',
          blogExcerpt8:
            'Complete guide to the most promising locations for real estate investment this year.',
          catInversion: 'Investment',
          catMercado: 'Market',
          catUbicaciones: 'Locations',
          blogAuthor: 'Puerta del Sol Real Estate Team',
          blogDate1: '15 March 2026',
          blogDate2: '15 February 2026',
          blogDate3: '10 January 2026',
          blogDate4: '5 December 2025',
          blogDate5: '20 November 2025',
          priceUnder5: 'Under USD 2M',
          price5to15: 'USD 2M - 6M',
          price15plus: 'Over USD 6M',
          visaAmount2m: 'USD 545,000 (AED 2M)',
          visaDuration10: '10 years',
          visaDuration5: '5 years',
          visaAmount500k: 'USD 136,000 (AED 500K)',
          visaNoRenewal: 'No need for frequent renewals',
          contactNow: 'Contact Now',
          popupTitle: 'Looking to invest in Dubai?',
          popupDesc:
            'Speak with our experts and discover the best real estate investment opportunities with 0% tax.',
          popupCta: 'Chat on WhatsApp',
          popupClose: 'Not now',
          catEntry: 'Entry-Level Investment',
          catEntryDesc:
            'Studios and 1-bedroom apartments in emerging areas like JVC, Dubai South and Al Furjan. Rental yields of 7-9%. Ideal entry point for first-time investors.',
          catEntryAreas: 'JVC • Dubai South • Al Furjan • Sports City',
          catPremium: 'Premium Investment',
          catPremiumDesc:
            'Premium apartments and penthouses in Downtown Dubai, Dubai Marina and Business Bay. High capital appreciation potential with 5-7% yields.',
          catPremiumAreas:
            'Downtown • Marina • Business Bay • Creek Harbour',
          catLuxury: 'Luxury Investment',
          catLuxuryDesc:
            'Luxury villas and exclusive penthouses in Dubai Hills, Jumeirah Golf Estates and Mohammed Bin Rashid City. Heritage assets with stable returns.',
          catLuxuryAreas: 'Dubai Hills • MBR City • JGE • District One',
          catUltra: 'Ultra Premium',
          catUltraDesc:
            'Beachfront mansions on Palm Jumeirah, Emirates Hills and Jumeirah Bay Island. Signature properties for the most discerning investor.',
          catUltraAreas: 'Palm Jumeirah • Emirates Hills • Jumeirah Bay',
          catFrom: 'From',
          catCta: 'Explore Category',
          catWhatsApp: 'Enquire via WhatsApp',
          carSlide1H: 'Zero Tax, Maximum Returns',
          carSlide1S:
            'Dubai offers 0% income tax, 0% capital gains tax and 0% wealth tax. Your investment works harder here.',
          carStat1: 'Income tax',
          carSlide2H: 'Golden Visa: Your Gateway to Residency',
          carSlide2S:
            'Invest from USD 545,000 and secure a 10-year residency visa for you and your entire family.',
          carStat2: 'Residency',
          carSlide3H: 'Yields That Outperform the Market',
          carSlide3S:
            'Dubai\'s prime areas deliver 7-10% rental yields, outperforming London, New York and Miami.',
          carStat3: 'Rental yield',
          carSlide4H: 'The World\'s Safest City to Invest',
          carSlide4S:
            'Ranked #1 for global safety, with a transparent legal framework that protects foreign investors.',
          carStat4: 'In global safety',
          carSlide5H: 'Luxury Lifestyle, Year Round',
          carSlide5S:
            '325 days of sunshine, world-class beaches, Michelin dining and a cosmopolitan community of 200 nationalities.',
          carStat5: 'Days of sunshine',
          carSlide6H: 'A USD 2 Trillion Economy',
          carSlide6S:
            'The Gulf\'s most diversified economy, with world-class infrastructure and sustained GDP growth.',
          carStat6: 'GDP economy',
          ourValues: 'Our Values',
          valExperience: 'International Experience',
          valExperienceDesc:
            'Over 12 years advising investors from Latin America, Europe and the Middle East in Dubai\'s property market. We know every community, every developer, every opportunity.',
          valService: 'Personalised Service',
          valServiceDesc:
            'Every investor is unique. We provide dedicated advisory in Spanish, guiding you every step from search to key handover and beyond.',
          valTrust: 'Total Transparency',
          valTrustDesc:
            'No hidden fees, no surprises. We operate with complete transparency, providing real market data so you can make informed decisions.',
          aboutStat1: 'Languages (ES/EN/AR)',
          aboutStat2: 'Availability',
          aboutStat3: 'Client Satisfaction',
          aboutStat4: 'First Response',
          nbTitle1: 'Why Invest in Dubai in 2026?',
          nbExcerpt1:
            'Dubai combines economic growth, legal certainty, and sustained international demand. For Latin American investors, 2026 offers a clear entry window into a dollar-linked market with solid fundamentals.',
          nbCat1: 'Investment',
          nbDate1: '15 March 2026',
          nbTitle2: 'Dubai Golden Visa: Complete Guide for Investors',
          nbExcerpt2:
            'Dubai residency by investment is direct, clear, and competitive versus Europe or North America. With the right investment threshold, a family can secure long-term immigration stability.',
          nbCat2: 'Golden Visa',
          nbDate2: '15 February 2026',
          nbTitle3: 'Top 5 Areas to Invest in Dubai',
          nbExcerpt3:
            'Not every Dubai district suits the same investor profile. Getting the balance right between yield, liquidity, and capital growth changes the outcome completely.',
          nbCat3: 'Locations',
          nbDate3: '10 January 2026',
          nbTitle4: '0% Tax: Dubai\'s Fiscal Advantages Explained',
          nbExcerpt4:
            'Dubai offers one of the most efficient tax environments in the world for property investors. Understanding how that advantage works changes the net return equation completely.',
          nbCat4: 'Tax',
          nbDate4: '5 December 2025',
          nbTitle5: 'Rental Yields: Dubai vs Global Markets',
          nbExcerpt5:
            'Dubai continues to outperform major global cities on gross residential yield. But the important figure is not only the percentage, it is what remains after costs.',
          nbCat5: 'Returns',
          nbDate5: '20 November 2025',
          nbTitle6:
            'How to Buy Property in Dubai as a Foreign Investor',
          nbExcerpt6:
            'Buying in Dubai as a foreign investor is simpler than many assume, provided the process and the true costs are understood. The key is to structure the transaction properly from day one.',
          nbCat6: 'Guide',
          nbDate6: '15 October 2025',
          filterAll: 'All',
        },
      },
    },
  },
};

const browserLang = navigator.language?.startsWith('es') ? 'es' : 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: browserLang,
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
