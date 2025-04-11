'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";
import './GallerySection.scss';

// Organizar todas as imagens em uma única categoria
const allImages = [
  {
    src: "/images/image-1.jpeg",
  },
  {
    src: "/images/image-2.jpeg",
  },
  {
    src: "/images/image-3.jpeg",
  },
  {
    src: "/images/image-4.jpeg",
  },
  {
    src: "/images/image-5.jpeg",
  },
  {
    src: "/images/image-6.jpeg",
  },
  {
    src: "/images/image-7.jpeg",
  },
  {
    src: "/images/image-8.jpeg",
  },
  {
    src: "/images/image-9.jpeg",
  },
  {
    src: "/images/image-10.jpeg",
  },
  {
    src: "/images/image-11.jpeg",
  },
  {
    src: "/images/image-12.jpeg",
  },
  {
    src: "/images/image-14.jpeg",
  },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é dispositivo móvel
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-section__container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gallery-section__header"
        >
          <h2>Galeria de Trabalhos</h2>
          <p>Projetos Concluídos</p>
        </motion.div>

        <div className="gallery-section__grid">
          {allImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.4, 
                delay: isMobile ? Math.min(0.1 * index, 0.3) : Math.min(0.05 * index, 0.5) 
              }}
              className="gallery-section__item"
              onClick={() => {
                setSelectedImage(image.src);
              }}
            >
              <img
                src={image.src}
                alt={`Projeto ${index + 1}`}
                className="gallery-section__image"
                loading="lazy"
              />
              <div className="gallery-section__overlay">
                <h3>Ver Projeto</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog 
          open={selectedImage !== null} 
          onOpenChange={(open) => {
            if (!open) {
              setSelectedImage(null);
            }
          }}
        >
          <DialogOverlay className="gallery-section__modal-overlay" />
          <DialogContent className="gallery-section__modal-content">
            {selectedImage !== null && (
              <div className="gallery-section__modal-gallery">
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="gallery-section__close-button"
                  aria-label="Fechar"
                >
                  ×
                </button>
                
                <motion.img
                  src={selectedImage}
                  alt="Projeto realizado"
                  className="gallery-section__modal-image"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}