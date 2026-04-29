import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const CATEGORIES = ['Todos', 'Edificios', 'Iglesias', 'Casas', 'Vehículos'];

const projects: Project[] = [
  {
    id: 1,
    title: 'Catedral Gótica',
    category: 'Iglesias',
    image: 'https://picsum.photos/seed/catedral-gotica/800/600',
    description:
      'Maqueta detallada de una catedral gótica con vitrales, contrafuertes y campanarios elaborados en cartón y porcelanicron. Trabajo de más de 3 semanas.',
  },
  {
    id: 2,
    title: 'Edificio Corporativo',
    category: 'Edificios',
    image: 'https://picsum.photos/seed/edificio-corp/800/600',
    description:
      'Edificio corporativo contemporáneo a escala 1:100 con fachada de cartulina y detalles de ventanería en acrílico transparente.',
  },
  {
    id: 3,
    title: 'Casa Colonial',
    category: 'Casas',
    image: 'https://picsum.photos/seed/casa-colonial/800/600',
    description:
      'Casa tradicional colonial con patio interior, arcos y tejas rojas. Cada detalle arquitectónico recreado con materiales artesanales.',
  },
  {
    id: 4,
    title: 'Camión de Carga',
    category: 'Vehículos',
    image: 'https://picsum.photos/seed/camion-carga/800/600',
    description:
      'Camión de carga pesado a escala con detalle en llantas, cabina y carrocería. Elaborado en cartón grueso pintado con acrílicos.',
  },
  {
    id: 5,
    title: 'Iglesia Barroca',
    category: 'Iglesias',
    image: 'https://picsum.photos/seed/iglesia-barroca/800/600',
    description:
      'Réplica de iglesia de estilo barroco con ornamentación elaborada en porcelanicron. Fiel recreación de la arquitectura colonial.',
  },
  {
    id: 6,
    title: 'Volqueta Industrial',
    category: 'Vehículos',
    image: 'https://picsum.photos/seed/volqueta-ind/800/600',
    description:
      'Volqueta para operaciones industriales con caja basculante funcional. Detalles en ejes, ruedas y cabina a escala.',
  },
  {
    id: 7,
    title: 'Casa Moderna',
    category: 'Casas',
    image: 'https://picsum.photos/seed/casa-moderna-2/800/600',
    description:
      'Casa minimalista de arquitectura moderna con líneas limpias, vegetación a escala y acabados en pintura acrílica mate.',
  },
  {
    id: 8,
    title: 'Torre de Oficinas',
    category: 'Edificios',
    image: 'https://picsum.photos/seed/torre-oficinas/800/600',
    description:
      'Torre de oficinas de 20 pisos en escala 1:150, con detalle en fachada, planta baja y entorno urbanístico.',
  },
  {
    id: 9,
    title: 'Tractomula',
    category: 'Vehículos',
    image: 'https://picsum.photos/seed/tractomula-col/800/600',
    description:
      'Tractomula de transporte pesado con cabina detallada, remolque y sistema de ejes a escala, hecha en cartón y porcelanicron.',
  },
];

const WA_URL =
  'https://wa.me/3147446053?text=Hola%2C%20estoy%20interesado%20en%20una%20maqueta%20personalizada';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    activeCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-amber-600 text-xs font-semibold tracking-[0.2em] uppercase">
            Nuestro trabajo
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mt-2 tracking-tight">
            Galería de Proyectos
          </h2>
          <p className="text-stone-500 mt-4 max-w-xl mx-auto">
            Maquetas artesanales personalizadas — cada pieza cuenta una historia única
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-amber-500 text-white shadow-md shadow-amber-200'
                  : 'bg-white text-stone-600 hover:text-amber-600 border border-stone-200 hover:border-amber-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                onClick={() => setSelected(project)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={project.image}
                    alt={`Maqueta artesanal de ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xs font-semibold bg-amber-500 px-2.5 py-1 rounded-full">
                      Ver detalle
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-bold text-stone-800 mt-1 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA below gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-stone-500 mb-4">¿Tienes un proyecto en mente?</p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3.5 rounded-full transition-colors duration-200 shadow-lg shadow-amber-100"
          >
            Solicitar maqueta personalizada
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl"
            >
              <div className="relative">
                <img
                  src={selected.image}
                  alt={`Maqueta artesanal ${selected.title}`}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Cerrar"
                  className="absolute top-3 right-3 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <span className="absolute bottom-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {selected.category}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-black text-stone-900 mb-3">{selected.title}</h2>
                <p className="text-stone-600 leading-relaxed mb-6">{selected.description}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
                  >
                    Pedir maqueta similar
                  </a>
                  <button
                    onClick={() => setSelected(null)}
                    className="flex-1 text-center bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold py-3 px-6 rounded-full transition-colors"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
