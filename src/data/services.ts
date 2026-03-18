export interface Service {
  slug: string;
  icon: string;
  title: string;
  desc: string;
  image: string;
  tag?: string;
  longDesc: string;
  features: string[];
  gallery: string[];
}

export const services: Service[] = [
  {
    slug: 'ventanas',
    icon: '🪟',
    title: 'Ventanas de Cristal y Aluminio',
    desc: 'Fabricamos ventanas a medida en diferentes estilos y acabados. Corredizas, batientes, fijas — en aluminio natural, negro o blanco.',
    image: '/imagenes/ventana1.png',
    tag: 'Más Popular',
    longDesc:
      'Nuestras ventanas de cristal y aluminio son fabricadas con los mejores materiales disponibles en el mercado. Trabajamos con aluminio anodizado en múltiples acabados — natural, negro, blanco y bronce — combinados con vidrio claro, tintado o reflectivo según tu necesidad. Cada ventana se fabrica a la medida exacta de tu espacio, garantizando un ajuste perfecto y un acabado profesional. Ofrecemos ventanas corredizas, batientes, fijas, proyectantes y de celosía, adaptándonos al diseño arquitectónico de tu hogar o negocio.',
    features: [
      'Fabricación 100% a medida',
      'Aluminio anodizado de alta resistencia',
      'Vidrio claro, tintado, esmerilado o reflectivo',
      'Estilos: corredizas, batientes, fijas, proyectantes',
      'Acabados: natural, negro, blanco, bronce',
      'Instalación profesional incluida',
      'Sellado hermético contra agua y polvo',
      'Garantía de calidad en materiales',
    ],
    gallery: ['/imagenes/ventana.png', '/imagenes/ventana1.png', '/imagenes/ventana2.png', '/imagenes/ventana3.png'],
  },
  {
    slug: 'puertas',
    icon: '🚪',
    title: 'Puertas de Cristal y Pulimetal',
    desc: 'Puertas de entrada y división en cristal temperado o pulimetal. Elegancia y seguridad para tu hogar o negocio.',
    image: '/imagenes/puerta.png',
    longDesc:
      'Fabricamos puertas de cristal temperado y pulimetal que combinan elegancia con máxima seguridad. Nuestras puertas de cristal son ideales para entradas principales, divisiones internas y locales comerciales, ofreciendo transparencia y luminosidad. Las puertas de pulimetal brindan mayor privacidad y resistencia, perfectas para entradas exteriores. Cada puerta es fabricada a medida con herrajes de calidad y acabados impecables.',
    features: [
      'Cristal temperado de seguridad',
      'Pulimetal resistente y duradero',
      'Herrajes de alta calidad',
      'Diseño a medida según tu espacio',
      'Puertas corredizas y abatibles',
      'Cerraduras de seguridad incluidas',
      'Ideal para hogares y negocios',
      'Instalación profesional garantizada',
    ],
    gallery: ['/imagenes/puerta.png', '/imagenes/puerta1.png', '/imagenes/puerta2.png', '/imagenes/puerta3.png', '/imagenes/puerta4.png'],
  },
  {
    slug: 'chuters',
    icon: '🔄',
    title: 'Chuters',
    desc: 'Puertas enrollables de seguridad para negocios y locales comerciales. Instalación profesional garantizada.',
    image: '/imagenes/shuter.png',
    longDesc:
      'Los chuters o puertas enrollables son la solución ideal para proteger tu negocio o local comercial. Fabricamos chuters en diferentes materiales y acabados, desde modelos económicos hasta opciones de alta seguridad. Nuestros chuters se fabrican a la medida exacta de tu fachada, con mecanismo de enrollado suave y seguro. La instalación incluye todos los componentes necesarios: guías laterales, eje superior, cerradura y acabado final.',
    features: [
      'Fabricación a medida de tu fachada',
      'Acero galvanizado resistente',
      'Mecanismo de enrollado suave',
      'Cerradura de seguridad reforzada',
      'Guías laterales de precisión',
      'Protección contra robo y vandalismo',
      'Mantenimiento mínimo',
      'Instalación completa incluida',
    ],
    gallery: ['/imagenes/shuter.png', '/imagenes/shuter1.png', '/imagenes/shuter3.png'],
  },
  {
    slug: 'vitrinas',
    icon: '🏪',
    title: 'Vitrinas de Cristal',
    desc: 'Vitrinas para exhibición de productos en tiendas y negocios. Diseño a medida, acabados perfectos.',
    image: '/imagenes/vitrina.png',
    longDesc:
      'Diseñamos y fabricamos vitrinas de cristal profesionales para exhibición de productos en tiendas, farmacias, joyerías y todo tipo de negocio. Nuestras vitrinas combinan estructura de aluminio con cristal transparente para una exhibición perfecta de tus productos. Fabricamos vitrinas de mostrador, de pared, tipo torre y a medida según el diseño de tu negocio. Cada vitrina incluye iluminación opcional y estantes ajustables.',
    features: [
      'Cristal transparente de alta claridad',
      'Estructura de aluminio resistente',
      'Diseño personalizado según tu negocio',
      'Vitrinas de mostrador, pared y torre',
      'Estantes ajustables incluidos',
      'Opción de iluminación LED',
      'Cerraduras de seguridad',
      'Acabados perfectos y profesionales',
    ],
    gallery: ['/imagenes/vitrina.png', '/imagenes/vitrina1.png'],
  },
  {
    slug: 'gabinetes',
    icon: '🗄️',
    title: 'Gabinetes con Vidrio',
    desc: 'Gabinetes y muebles con puertas de vidrio para cocinas, baños y espacios de almacenamiento.',
    image: '/imagenes/gabinete.png',
    longDesc:
      'Fabricamos gabinetes con puertas de vidrio para cocinas, baños, oficinas y espacios de almacenamiento. Nuestros gabinetes combinan estructura sólida con puertas de vidrio que permiten ver el contenido mientras lo mantienen protegido. Trabajamos con vidrio claro, esmerilado o tintado según tu preferencia. Los marcos de aluminio garantizan durabilidad y un acabado moderno que complementa cualquier decoración.',
    features: [
      'Puertas de vidrio claro o esmerilado',
      'Marcos de aluminio duradero',
      'Diseño a medida para tu espacio',
      'Ideal para cocinas y baños',
      'Bisagras de cierre suave',
      'Fácil limpieza y mantenimiento',
      'Múltiples acabados disponibles',
      'Instalación profesional',
    ],
    gallery: ['/imagenes/gabinete.png', '/imagenes/gabinete1.png'],
  },
  {
    slug: 'corte-de-vidrio',
    icon: '✂️',
    title: 'Corte de Vidrio a Medida',
    desc: 'Cortamos vidrio en cualquier medida y forma. Vidrio claro, esmerilado, bronce, reflectivo y más.',
    image: '/imagenes/ventana2.png',
    longDesc:
      'Ofrecemos servicio profesional de corte de vidrio a medida para cualquier proyecto. Trabajamos con todo tipo de vidrio: claro, esmerilado, bronce, gris, reflectivo y espejo. Cortamos en cualquier medida y forma que necesites — rectangular, cuadrado, circular o formas especiales. Nuestro equipo cuenta con herramientas de precisión que garantizan cortes limpios y exactos. Ideal para reposiciones, proyectos de decoración, mesas, repisas y más.',
    features: [
      'Corte en cualquier medida y forma',
      'Vidrio claro, esmerilado, bronce, gris',
      'Vidrio reflectivo y espejo',
      'Cortes de precisión garantizados',
      'Bordes pulidos disponibles',
      'Ideal para mesas y repisas',
      'Reposición de vidrios rotos',
      'Atención inmediata',
    ],
    gallery: ['/imagenes/ventana2.png', '/imagenes/ventana3.png'],
  },
  {
    slug: 'repuestos',
    icon: '🔧',
    title: 'Repuestos Generales',
    desc: 'Ruedas, bisagras, seguros, jaladores y todos los repuestos para ventanas y puertas de aluminio.',
    image: '/imagenes/ventana3.png',
    longDesc:
      'Contamos con un amplio inventario de repuestos para ventanas y puertas de aluminio. Si tu ventana no desliza bien, la cerradura no funciona o necesitas reemplazar algún componente, tenemos la pieza que necesitas. Trabajamos con repuestos originales y compatibles de alta calidad. Nuestro equipo puede diagnosticar el problema e instalar el repuesto correcto para que tu ventana o puerta funcione como nueva.',
    features: [
      'Ruedas y rodamientos para ventanas',
      'Bisagras de todo tipo',
      'Cerraduras y seguros',
      'Jaladores y manijas',
      'Felpa y burlete para sellado',
      'Rieles y guías de aluminio',
      'Diagnóstico e instalación',
      'Repuestos originales y compatibles',
    ],
    gallery: ['/imagenes/ventana3.png', '/imagenes/ventana.png'],
  },
];
