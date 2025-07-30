import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-white"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Construindo o futuro</span>
              <br />
              com excelência e inovação
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Transforme suas ideias em realidade com a NTC Brasil.
              Confiabilidade e qualidade em cada projeto.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a
                href="#contact"
                className="btn btn-primary flex items-center justify-center gap-2 group"
              >
                Entre em contato
                <motion.span
                  whileHover={{ x: 5 }}
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <ArrowRight size={20} />
                </motion.span>
              </a>

              <a href="#about" className="btn btn-secondary">
                Saiba mais
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-tr from-primary to-accent p-1">
              <div className="w-full h-full bg-white rounded-2xl p-6 flex items-center justify-center">
                <img
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753837114003_0.png"
                  alt="NTC Brasil"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
