'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Snowflake, Wrench, Wind, Thermometer, Fan, ShoppingBag } from 'lucide-react';
import './ServicesSection.scss';
import { useState, useEffect } from 'react';

const services = [
  {
    icon: <Snowflake className="w-12 h-12 text-secondary" />,
    title: 'Instalação de Ar Condicionado',
    description: 'Serviço profissional de instalação para garantir o funcionamento eficiente do seu ar condicionado.',
    details: 'Equipe técnica especializada para instalação de qualquer modelo de ar condicionado. Atendemos residências, comércios e indústrias com garantia de serviço e satisfação do cliente.'
  },
  {
    icon: <Wrench className="w-12 h-12 text-secondary" />,
    title: 'Manutenção Preventiva',
    description: 'Evite problemas futuros com manutenções regulares e preventivas em seu sistema de climatização.',
    details: 'Planos de manutenção periódica que incluem limpeza de filtros, verificação do gás refrigerante, inspeção de componentes elétricos e mecânicos para evitar falhas e aumentar a vida útil do equipamento.'
  },
  {
    icon: <Wind className="w-12 h-12 text-secondary" />,
    title: 'Limpeza de Ar Condicionado',
    description: 'Limpeza completa para melhorar a qualidade do ar e a eficiência do aparelho.',
    details: 'Higienização completa que elimina fungos, bactérias e ácaros do sistema de ar condicionado, melhorando a qualidade do ar e prevenindo problemas respiratórios.'
  },
  {
    icon: <Thermometer className="w-12 h-12 text-secondary" />,
    title: 'Manutenção de Refrigeradores',
    description: 'Serviços especializados para refrigeradores comerciais e industriais, garantindo seu funcionamento ideal.',
    details: 'Manutenção de refrigeradores comerciais, câmaras frigoríficas e equipamentos de refrigeração industrial com técnicos capacitados e peças originais.'
  },
  {
    icon: <Fan className="w-12 h-12 text-secondary" />,
    title: 'Consultoria em Climatização',
    description: 'Ajuda profissional para escolher o melhor sistema de climatização para seu espaço.',
    details: 'Análise detalhada do ambiente para recomendação do sistema de climatização mais eficiente e econômico para sua necessidade, considerando fatores como tamanho, exposição solar e utilização.'
  },
  {
    icon: <ShoppingBag className="w-12 h-12 text-secondary" />,
    title: 'Venda de Equipamentos',
    description: 'Oferecemos uma variedade de modelos de ar condicionado e refrigeração para atender suas necessidades.',
    details: 'Comercialização das melhores marcas de ar condicionado, com opções de split, janela, cassete, piso-teto e VRF, além de refrigeradores comerciais e industriais com garantia estendida.'
  }
];

export function ServicesSection() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    if (flippedCard === index) {
      setFlippedCard(null);
    } else {
      setFlippedCard(index);
    }
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setFlippedCard(null);
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

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
            Oferecemos soluções completas em climatização e refrigeração para todos os tipos de ambientes
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
              <div 
                className={`services-section__card-container ${flippedCard === index ? 'flipped' : ''}`}
                onClick={() => handleCardClick(index)}
              >
                <div className="services-section__card-inner">
                  <div className="services-section__card-front">
                    <div className="services-section__card-header">
                      <div className="services-section__icon">
                        {service.icon}
                      </div>
                      <CardTitle className="services-section__title">
                        {service.title}
                      </CardTitle>
                    </div>
                    <div className="services-section__card-content">
                      <p className="services-section__description">
                        {service.description}
                      </p>
                      <div className="services-section__click-info">
                        Clique para mais detalhes
                      </div>
                    </div>
                  </div>
                  <div className="services-section__card-back">
                    <div className="services-section__card-content">
                      <CardTitle className="services-section__title">
                        {service.title}
                      </CardTitle>
                      <p className="services-section__details">
                        {service.details}
                      </p>
                      <div className="services-section__click-info">
                        Toque para voltar
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}