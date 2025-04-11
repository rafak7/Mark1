'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import './HeroSection.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const text = "MARK1";
  
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Pré-carrega a imagem
    const imgLoader = new window.Image();
    imgLoader.src = '/images/capa_mark1.jpeg';
    imgLoader.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section className="hero-section">
      {/* Placeholder enquanto a imagem carrega */}
      <div 
        className={`hero-section__placeholder ${imageLoaded ? 'hero-section__placeholder--hidden' : ''}`}
      />
      
      <Image 
        src="/images/capa_mark1.jpeg"
        alt="Fundo da seção hero"
        fill
        sizes="100vw"
        quality={90}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAAgAEAMBIgACEQEDEQH/xAAVAAEBAAAAAAAAAAAAAAAAAAAFBv/EACMQAAEDAwMFAAAAAAAAAAAAAAECAwQABREGEiEHEzFRcf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCTpvUzeoNUrVa3XIilxhEhoJKVKUVBJIOPAUCSfYFTXqHJa1BLefZUUtvYabKvBG0H+nFFFQf/2Q=="
        className={`hero-section__background ${imageLoaded ? 'hero-section__background--loaded' : ''}`}
        priority
        onLoadingComplete={() => setImageLoaded(true)}
      />
      <div className="hero-section__content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-section__title">
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                style={{ display: 'inline-block' }}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
          <p className="hero-section__subtitle">
            Serviços profissionais para dar vida aos seus ambientes
          </p>
          <Button
            onClick={scrollToContact}
            className="hero-section__cta"
          >
            Solicitar Orçamento
          </Button>
        </motion.div>
        
        <motion.div
          className="hero-section__scroll-icon"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown />
        </motion.div>
      </div>
    </section>
  );
}