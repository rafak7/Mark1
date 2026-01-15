'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom, Keyboard, A11y } from 'swiper/modules';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

// Importações de estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

import './GallerySection.scss';

// Organizar todas as imagens em uma única categoria
const allImages = [
  { src: "/images/image-1.jpeg" },
  { src: "/images/image-2.jpeg" },
  { src: "/images/image-3.jpeg" },
  { src: "/images/image-4.jpeg" },
  { src: "/images/image-5.jpeg" },
  { src: "/images/image-6.jpeg" },
  { src: "/images/image-7.jpeg" },
  { src: "/images/image-8.jpeg" },
  { src: "/images/image-9.jpeg" },
  { src: "/images/image-10.jpeg" },
  { src: "/images/image-11.jpeg" },
  { src: "/images/image-12.jpeg" },
  { src: "/images/image-14.jpeg" },
  { src: "/images/image-15.jpeg" },
  { src: "/images/image-16.jpeg" },
];

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const isOpenRef = useRef(false);
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

  // Bloquear rolagem do corpo quando o lightbox estiver aberto
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedIndex]);

  // Fechar com ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        isOpenRef.current = false;
        setSelectedIndex(null);
      }
    };

    if (selectedIndex !== null) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [selectedIndex]);

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
                isOpenRef.current = true;
                setSelectedIndex(index);
              }}
            >
              <img
                src={image.src}
                alt={`Projeto ${index + 1}`}
                className="gallery-section__image"
                loading="lazy"
              />
              <div className="gallery-section__overlay">
                <ZoomIn className="w-8 h-8 text-white mb-2" />
                <h3>Ver Ampliado</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox / Fullscreen Gallery */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              key="gallery-lightbox"
              className="gallery-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}

            >
              <Swiper
                modules={[Navigation, Pagination, Zoom, Keyboard, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                initialSlide={selectedIndex}
                navigation={{
                  prevEl: '.gallery-prev',
                  nextEl: '.gallery-next',
                }}
                pagination={{
                  type: 'progressbar',
                }}
                zoom={{
                  maxRatio: 3,
                }}
                keyboard={{
                  enabled: true,
                }}
                loop={true}
                className="gallery-swiper"
                onSlideChange={(swiper) => {
                  // Guard: Only update if the gallery is explicitly open
                  if (isOpenRef.current) {
                    setSelectedIndex(swiper.realIndex);
                  }
                }}
                onClick={(swiper, e) => {
                  // Close gallery when clicking the backdrop (void area in swiper)
                  // The image has stopPropagation, so this only fires on empty space
                  isOpenRef.current = false;
                  setSelectedIndex(null);
                }}
              >
                {allImages.map((image, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="swiper-zoom-container">
                      <img
                        src={image.src}
                        alt={`Projeto ${idx + 1}`}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div
                className="gallery-lightbox__counter"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedIndex + 1} / {allImages.length}
              </div>

              <button
                className="gallery-lightbox__close-button"
                onClick={(e) => {
                  e.stopPropagation();
                  isOpenRef.current = false;
                  setSelectedIndex(null);
                }}
                aria-label="Fechar galeria"
              >
                <X />
              </button>

              <button
                className="gallery-prev"
                onClick={(e) => e.stopPropagation()}
                aria-label="Imagem anterior"
              >
                <ChevronLeft />
              </button>
              <button
                className="gallery-next"
                onClick={(e) => e.stopPropagation()}
                aria-label="Próxima imagem"
              >
                <ChevronRight />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}