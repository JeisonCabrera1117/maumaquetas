import { motion } from 'framer-motion';

const services = [
  {
    title: 'Maquetas Arquitectónicas',
    description:
      'Modelos a escala de edificios y estructuras con precisión técnica y detalle estético. Ideal para arquitectos, estudiantes y coleccionistas.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Maquetas de Iglesias',
    description:
      'Réplicas detalladas de templos e iglesias con ornamentación en porcelanicron, capturando la esencia de cada estructura religiosa.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Maquetas de Vehículos',
    description:
      'Carros, camiones, volquetas, mulas y maquinaria pesada a escala con detalles precisos en llantas, cabina y carrocería.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1.5 1.5M13 16H3m10 0l2-6h4.5l1.5 6H13z" />
      </svg>
    ),
  },
  {
    title: 'Maquetas Urbanísticas',
    description:
      'Planos tridimensionales de conjuntos residenciales, barrios y proyectos de infraestructura urbana con vegetación y entorno a escala.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: 'Maquetas Educativas',
    description:
      'Modelos didácticos para colegios, universidades y museos. Ideales para representar historia, geografía y ciencias de forma visual.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Maquetas Personalizadas',
    description:
      'Cualquier diseño que imagines: casas, monumentos, locales, fincas o lo que tengas en mente. Nos adaptamos a tu presupuesto y necesidades.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
];

const card = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-amber-600 text-xs font-semibold tracking-[0.2em] uppercase">
            Lo que hacemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mt-2 tracking-tight">
            Servicios
          </h2>
          <p className="text-stone-500 mt-4 max-w-xl mx-auto">
            Soluciones artesanales personalizadas para todo tipo de maquetas
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group p-6 bg-stone-50 hover:bg-amber-50 rounded-2xl border border-stone-100 hover:border-amber-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-amber-100 group-hover:bg-amber-200 text-amber-600 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-base font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Process steps */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 bg-stone-900 rounded-3xl p-8 lg:p-12"
        >
          <h3 className="text-2xl font-black text-white text-center mb-10">
            ¿Cómo funciona?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Contáctame',
                desc: 'Cuéntame tu idea por WhatsApp. Te doy un presupuesto sin compromiso.',
              },
              {
                step: '02',
                title: 'Diseño y materiales',
                desc: 'Definimos escala, materiales y tiempo de entrega según tu proyecto.',
              },
              {
                step: '03',
                title: 'Recibe tu maqueta',
                desc: 'Elaboro tu maqueta a mano con el máximo detalle y te la entrego lista.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <span className="text-4xl font-black text-amber-500 opacity-80">{step}</span>
                <h4 className="text-white font-bold mt-2 mb-1">{title}</h4>
                <p className="text-stone-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
