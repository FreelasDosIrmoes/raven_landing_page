import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./carrousel.css";

import slide_image_1 from "../../assets/image-1.png";
import slide_image_2 from "../../assets/image-2.png";
import slide_image_3 from "../../assets/image-3.png";

function App() {
  const projetos = [
    {
      nome: "Projeto 1",
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
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {projetos.map((projeto, index) => (
          <SwiperSlide key={index}>
            <div className="slide-container">
              <img src={projeto.imagem} alt={projeto.nome} />
              <div className="overlay">
                <div>
                  <h2>{projeto.nome}</h2>
                </div>
                <div>
                  <span>{projeto.tipo}</span>
                  <p>{projeto.descricao}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <div className="slider-controler">
          <div className="swiper-button-prev">
            <img src={Seta} />
          </div>
          <div className="swiper-button-next">
            <img src={Seta} />
          </div>
          <div className="swiper-pagination">
          </div>
        </div> */}
      </Swiper>
    </div>
  );
}

export default App;
