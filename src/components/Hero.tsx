import { motion } from 'framer-motion';

const WA_URL =
  'https://wa.me/3147446053?text=Hola%2C%20estoy%20interesado%20en%20una%20maqueta%20personalizada';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Inicio">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80&fit=crop&crop=center"
          alt="Maqueta arquitectónica artesanal"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950/90 via-stone-900/75 to-stone-800/55" />
      </div>

      {/* Decorative grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-block text-amber-400 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-5 px-4 py-1.5 border border-amber-400/40 rounded-full"
          >
            Arte en Maquetas Artesanales · Colombia
          </motion.span>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight mb-6 text-balance">
            Donde el Arte<br />
            <span className="text-amber-400">Cobra Forma</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg lg:text-xl text-stone-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Maquetas personalizadas de edificios, iglesias, casas y vehículos —
            cada pieza hecha a mano con cartón, porcelanicron y pasión artesanal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#gallery"
              className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-3.5 px-8 rounded-full transition-colors duration-200 text-sm sm:text-base shadow-lg shadow-amber-900/30"
            >
              Ver Galería
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/50 hover:border-amber-400 text-white hover:text-amber-400 font-bold py-3.5 px-8 rounded-full transition-colors duration-200 text-sm sm:text-base"
            >
              Solicitar Cotización
            </a>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-xl mx-auto"
        >
          {[
            { n: '10+', label: 'Años de oficio' },
            { n: '200+', label: 'Maquetas creadas' },
            { n: '100%', label: 'Hechas a mano' },
          ].map(({ n, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl sm:text-3xl font-black text-amber-400">{n}</p>
              <p className="text-stone-400 text-xs sm:text-sm mt-0.5">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            className="w-5 h-5 text-white/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
