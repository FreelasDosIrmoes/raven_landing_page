import { A11y, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./carrousel.css";
import {
  aguavitoria1,
  aguavitoria2,
  aguavitoria3,
  aguavitoria4,
  aguavitoria5,
  aguavitoria6,
  projeto1,
  projeto2,
  projeto3,
  projeto4,
  projeto5,
  projeto6,
} from "./cdn-image";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { ModalProjeto } from "./ModalProjeto";
import { useState } from "react";

function Carrousel() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    description: string;
    images: string[];
  } | null>(null);
  const projetos = [
    {
      nome: "Sistema de Consulta IMEI",
      descricao: "Descrição do Projeto 1. Este é um projeto incrível!",
      tipo: "Design",
      imagem: projeto1,
      images: [aguavitoria1, aguavitoria2, aguavitoria3, aguavitoria4, aguavitoria5, aguavitoria6],
    },
    {
      nome: "Projeto 0",
      descricao: "Descrição do Projeto 1. Este é um projeto incrível!",
      tipo: "Design",
      imagem: projeto2,
      images: [aguavitoria1, aguavitoria2, aguavitoria3, aguavitoria4, aguavitoria5, aguavitoria6],
    },
    {
      nome: "Projeto 2",
      descricao: "Descrição do Projeto 2. Este projeto é focado em desenvolvimento.",
      tipo: "Desenvolvimento",
      imagem: projeto3,
      images: [aguavitoria1, aguavitoria2, aguavitoria3, aguavitoria4, aguavitoria5, aguavitoria6],
    },
    {
      nome: "Projeto 3",
      descricao: "Descrição do Projeto 3. Um projeto de marketing digital.",
      tipo: "Marketing",
      imagem: projeto4,
      images: [aguavitoria1, aguavitoria2, aguavitoria3, aguavitoria4, aguavitoria5, aguavitoria6],
    },
    {
      nome: "Projeto 7",
      descricao: "Descrição do Projeto 3. Um projeto de marketing digital.",
      tipo: "Marketing",
      imagem: projeto5,
      images: [aguavitoria1, aguavitoria2, aguavitoria3, aguavitoria4, aguavitoria5, aguavitoria6],
    },
  ];

  const ButtonOpenModal = (
    <Button className="bg-primary-dark hover:bg-primary-normal transition-all duration-200 text-white px-4 py-2 rounded-xl flex justify-between">
      <span>Veja mais</span>
      <Plus />
    </Button>
  );

  const handleOpenModal = (project: { title: string; description: string; images: string[] }) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

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
                <div className="flex w-full justify-between">
                  <div>
                    <span>{projeto.tipo}</span>
                    <p>{projeto.descricao}</p>
                  </div>
                  <Button
                    className="bg-primary-dark hover:bg-primary-normal transition-all duration-200 text-white px-4 py-2 rounded-xl flex justify-between"
                    onClick={() =>
                      handleOpenModal({
                        title: projeto.nome,
                        description: projeto.descricao,
                        images: projeto.images,
                      })
                    }
                  >
                    <span>Veja mais</span>
                    <Plus />
                  </Button>
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

      {selectedProject && (
        <ModalProjeto
          isOpen={modalOpen}
          onClose={handleCloseModal}
          images={selectedProject.images}
          title={selectedProject.title}
          description={selectedProject.description}
        />
      )}
    </div>
  );
}

export default Carrousel;
