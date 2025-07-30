import { motion } from 'framer-motion';
import { Building, Ruler, Users, Clock } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Building className="w-12 h-12 text-primary" />,
      title: 'Projetos Personalizados',
      description:
        'Desenvolvemos soluções únicas que atendem às necessidades específicas de cada cliente.',
    },
    {
      icon: <Ruler className="w-12 h-12 text-primary" />,
      title: 'Planejamento Detalhado',
      description:
        'Análise minuciosa e planejamento estratégico para garantir a execução perfeita.',
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: 'Equipe Especializada',
      description:
        'Profissionais altamente qualificados e comprometidos com a excelência.',
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: 'Gestão de Prazos',
      description:
        'Compromisso com cronogramas e entregas dentro do prazo estabelecido.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Nossos Diferenciais</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos um conjunto completo de soluções para tornar seu projeto
            realidade, com foco em qualidade e satisfação do cliente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all"
            >
              <div className="mb-6 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
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
            Solicite um orçamento
          </a>
        </motion.div>
      </div>
    </section>
  );
}
