'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import './AboutSection.scss';

export function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-section__container">
        <div className="about-section__content">
          <motion.div
            className="about-section__text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Sobre Nós</h2>
            <p>
              Com anos de experiência no mercado, a Mark1 oferece soluções completas em instalação e manutenção de ar condicionado e sistemas frigoríficos. Unimos tecnologia de ponta e uma equipe altamente qualificada para garantir a máxima eficiência técnica e o conforto que o seu negócio ou residência merece.
            </p>
          </motion.div>

          <motion.div
            className="about-section__image"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/logo-mark1.jpeg"
              alt="Equipe de pintores profissionais"
              width={600}
              height={400}
              objectFit="cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}