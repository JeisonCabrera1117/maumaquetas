import { motion } from 'framer-motion';

const WA_URL =
  'https://wa.me/3147446053?text=Hola%2C%20estoy%20interesado%20en%20una%20maqueta%20personalizada';

const WhatsAppButton = () => {
  return (
    <motion.a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1.2, type: 'spring', stiffness: 200 }}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25" />
      <div className="relative bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-xl shadow-green-900/30 flex items-center justify-center transition-colors duration-200">
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.004.006l-1.355 4.953 5.048-1.322-.006-.004z" />
        </svg>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;