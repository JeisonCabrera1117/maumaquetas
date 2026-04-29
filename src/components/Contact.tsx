import { motion } from 'framer-motion';

const WA_URL =
  'https://wa.me/3147446053?text=Hola%2C%20estoy%20interesado%20en%20una%20maqueta%20personalizada';

const reasons = [
  'Cotización sin compromiso',
  'Respuesta rápida',
  'Materiales de calidad',
  'Entrega a todo Colombia',
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-amber-600 text-xs font-semibold tracking-[0.2em] uppercase">
            Hablemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 mt-2 tracking-tight">
            ¿Listo para tu maqueta?
          </h2>
          <p className="text-stone-500 mt-4 max-w-lg mx-auto">
            Cuéntame tu proyecto y te doy una cotización personalizada sin compromiso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
          {/* WhatsApp card */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center shrink-0">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.004.006l-1.355 4.953 5.048-1.322-.006-.004z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-stone-800 text-lg">WhatsApp directo</p>
                <p className="text-stone-500 text-sm">314 744 6053</p>
              </div>
            </div>

            <p className="text-stone-600 text-sm mb-6 leading-relaxed">
              Escríbeme directamente con tu idea — qué tipo de maqueta necesitas,
              tamaño aproximado y cualquier referencia que tengas.
            </p>

            <motion.a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-2xl transition-colors duration-200 shadow-lg shadow-green-100"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.004.006l-1.355 4.953 5.048-1.322-.006-.004z" />
              </svg>
              Chatear por WhatsApp
            </motion.a>
          </motion.div>

          {/* Reasons */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-bold text-stone-800 mb-6">
              ¿Por qué elegir Maumaquetas?
            </h3>
            <ul className="space-y-4">
              {reasons.map((r) => (
                <li key={r} className="flex items-center gap-3 text-stone-600">
                  <span className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {r}
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 bg-amber-50 border border-amber-100 rounded-2xl">
              <p className="text-amber-800 font-semibold text-sm mb-1">Tiempo de respuesta</p>
              <p className="text-amber-700 text-sm">
                Generalmente respondo en menos de 2 horas en horario hábil.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
