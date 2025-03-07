import { A11y, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Seta from "../../assets/icones/seta.svg";
import "swiper/swiper-bundle.css";
import "./carrousel.css";

import slide_image_1 from "../../assets/image-1.png";
import slide_image_2 from "../../assets/image-2.png";
import slide_image_3 from "../../assets/image-3.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

function Carrousel() {
  const swiper = useSwiper();
  const projetos = [
    {
      nome: "Sistema de Consulta IMEI",
      descricao: "Descrição do Projeto 1. Este é um projeto incrível!",
      tipo: "Design",
      imagem: slide_image_1,
    },
    {
      nome: "Projeto 0",
      descricao: "Descrição do Projeto 1. Este é um projeto incrível!",
      tipo: "Design",
      imagem: slide_image_1,
    },
    {
      nome: "Projeto 2",
      descricao: "Descrição do Projeto 2. Este projeto é focado em desenvolvimento.",
      tipo: "Desenvolvimento",
      imagem: slide_image_2,
    },
    {
      nome: "Projeto 3",
      descricao: "Descrição do Projeto 3. Um projeto de marketing digital.",
      tipo: "Marketing",
      imagem: slide_image_3,
    },
    {
      nome: "Projeto 7",
      descricao: "Descrição do Projeto 3. Um projeto de marketing digital.",
      tipo: "Marketing",
      imagem: slide_image_3,
    },
  ];

  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 200,
          depth: 400,
          modifier: 2,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
          1280: {
            slidesPerView: "auto",
          },
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation, A11y]}
        className="swiper_container"
      >
        {projetos.map((projeto, index) => (
          <SwiperSlide key={index}>
            <div className="slide-container">
              <img src={projeto.imagem} alt={projeto.nome} />
              <div className="swiper-title">
                <h2>{projeto.nome}</h2>
              </div>
              <div className="overlay">
                <div>
                  <span>{projeto.tipo}</span>
                  <p>{projeto.descricao}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <button className="swiper-button-prev"></button>
          <div className="swiper-pagination"></div>
          <button className="swiper-button-next"></button>
        </div>
      </Swiper>
    </div>
  );
}

export default Carrousel;
