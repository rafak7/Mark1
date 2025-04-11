'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Paintbrush, Home, Building2, Palette, PaintBucket, Ruler } from 'lucide-react';
import './ServicesSection.scss';

const services = [
  {
    icon: <Paintbrush className="w-12 h-12 text-primary" />,
    title: 'Instalação de Ar Condicionado',
    description: 'Serviço profissional de instalação para garantir o funcionamento eficiente do seu ar condicionado.'
  },
  {
    icon: <Building2 className="w-12 h-12 text-primary" />,
    title: 'Manutenção Preventiva',
    description: 'Evite problemas futuros com manutenções regulares e preventivas.'
  },
  {
    icon: <Palette className="w-12 h-12 text-primary" />,
    title: 'Limpeza de Ar Condicionado',
    description: 'Limpeza completa para melhorar a qualidade do ar e a eficiência do aparelho.'
  },
  {
    icon: <PaintBucket className="w-12 h-12 text-primary" />,
    title: 'Reparos e Consertos',
    description: 'Diagnóstico e reparo de problemas para restaurar o funcionamento do seu ar condicionado.'
  },
  {
    icon: <Home className="w-12 h-12 text-primary" />,
    title: 'Consultoria em Climatização',
    description: 'Ajuda profissional para escolher o melhor sistema de climatização para seu espaço.'
  },
  {
    icon: <Ruler className="w-12 h-12 text-primary" />,
    title: 'Venda de Equipamentos',
    description: 'Oferecemos uma variedade de modelos de ar condicionado para atender suas necessidades.'
  }
];

export function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="services-section__container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="services-section__header"
        >
          <h2>Nossos Serviços</h2>
          <p>
            Oferecemos soluções completas em pintura para todos os tipos de ambientes
          </p>
        </motion.div>

        <div className="services-section__grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="services-section__card">
                <CardHeader className="services-section__card-header">
                  <div className="services-section__icon">
                    {service.icon}
                  </div>
                  <CardTitle className="services-section__title">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="services-section__card-content">
                  <p className="services-section__description">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}