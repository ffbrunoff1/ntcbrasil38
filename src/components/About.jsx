import { motion } from 'framer-motion';
import { Building2, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Building2 size={32} className="text-primary" />,
      title: 'Experiência Comprovada',
      description:
        'Anos de expertise no setor de construção, entregando projetos de excelência.',
    },
    {
      icon: <Target size={32} className="text-primary" />,
      title: 'Foco em Resultados',
      description:
        'Comprometimento com prazos e qualidade em cada etapa do projeto.',
    },
    {
      icon: <ShieldCheck size={32} className="text-primary" />,
      title: 'Confiabilidade',
      description:
        'Processos transparentes e comunicação clara com nossos clientes.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Sobre a NTC Brasil</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Somos uma empresa comprometida com a excelência na construção,
            combinando inovação tecnológica com práticas sustentáveis para
            entregar projetos que superam expectativas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6 inline-block p-3 bg-primary/10 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="btn btn-primary inline-block">
            Conheça nossos projetos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
