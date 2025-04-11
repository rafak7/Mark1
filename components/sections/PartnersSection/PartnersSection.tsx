'use client';

import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Importações de estilos do Swiper
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import './PartnersSection.scss';

interface Partner {
    id: number;
    name: string;
    logo: string;
    destaque?: boolean;
}

const partners: Partner[] = [
    { id: 1, name: 'BRINKS Segurança e Transporte de Valores', logo: '/images/parceiros/brinks-logo.png', destaque: true },
    { id: 2, name: 'Nobile - Rio de Janeiro', logo: '/images/parceiros/dutra-logo.jpeg' },
    { id: 3, name: 'Linx Galeão', logo: '/images/parceiros/galeao-logo.webp' },
    { id: 4, name: 'Gucci - Copacabana Palace', logo: '/images/parceiros/Gucci-logo.png', destaque: true },
    { id: 5, name: 'Copacabana IBIS posto 5', logo: '/images/parceiros/ibis-posto5.jpeg' },
    { id: 6, name: 'Prodigy Hoteis', logo: '/images/parceiros/images.png' },
    { id: 7, name: 'Mercado de Carnes São Thiago', logo: '/images/parceiros/logo-mercado.jpeg', destaque: true },
    { id: 8, name: 'Mercure - Barra da Tijuca', logo: '/images/parceiros/prod-logo.png' },
    { id: 9, name: 'Xian - Rio De Janeiro', logo: '/images/parceiros/xian-logo.jpeg' },
];

export const PartnersSection = () => {
    return (
        <section className="partners-section">
            <div className="container">
                <h2>Nossos Parceiros</h2>
                <p className="section-subtitle">Empresas que confiam em nossos serviços</p>
                
                <div className="partners-container">
                    <div className="partners-slider">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={30}
                            slidesPerView={4}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                                el: '.partners-pagination',
                            }}
                            navigation={false}
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 30
                                }
                            }}
                        >
                            {partners.map((partner) => (
                                <SwiperSlide key={partner.id}>
                                    <div className={`partner-logo ${partner.destaque ? 'destaque' : ''}`}>
                                        <img 
                                            src={partner.logo} 
                                            alt={partner.name}
                                            loading="lazy"
                                        />
                                        <div className="partner-overlay">
                                            <span>{partner.name}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    
                    <div className="pagination-wrapper">
                        <div className="pagination-spacer"></div>
                        <div className="partners-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
