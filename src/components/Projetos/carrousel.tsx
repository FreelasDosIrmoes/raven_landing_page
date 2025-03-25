/* eslint-disable */
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
  crm1,
  crm2,
  crm3,
  crm4,
  crm5,
  imei1,
  imei2,
  imei3,
  imei4,
  imei5,
  imoveis1,
  imoveis2,
  imoveis3,
  imoveis4,
  MARKETPLACEX1,
  MARKETPLACEX2,
  MARKETPLACEX3,
  MARKETPLACEX4,
  MARKETPLACEX5,
  MARKETPLACEX6,
  MARKETPLACEX7,
  projeto1,
  projeto2,
  projeto3,
  projeto4,
  projeto5,
  projeto6,
  projeto7,
  responder1,
  responder2,
  responder3,
  responder4,
  tkinter1,
  tkinter2,
  tkinter3,
  tkinter4,
  tvmetropole1,
  tvmetropole2,
  tvmetropole3,
  tvmetropole4,
  tvmetropole5,
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
    duration: string;
  } | null>(null);
  const projetos = [
    {
      nome: "Sistema de Consulta IMEI",
      descricao:
        "Projeto para consulta de dados de celulares via IMEI, com informações detalhadas por plano e suporte a marcas famosas. Desenvolvido para uso on-demand.",
      tipo: "Desenvolvimento",
      imagem: projeto1,
      images: [imei1, imei2, imei3, imei4, imei5],
      duration: '4 meses'
    },
    {
      nome: "Sistema de Gestão Distribuidora de Água",
      descricao:
        "Plataforma para controle de estoque, produtos, vendas e histórico, com relatórios e acesso restrito. Desenvolvida para otimizar a gestão de distribuidora de água.",
      tipo: "Desenvolvimento",
      imagem: aguavitoria3,
      images: [aguavitoria1, aguavitoria2, aguavitoria3, aguavitoria4, aguavitoria5, aguavitoria6],
      duration: '4 meses'
    },
    {
      nome: "Sistema Interno de Gestão Imobiliária",
      descricao:
        "Plataforma interna para corretores, exibindo imóveis com dados detalhados. Informações    estruturadas para facilitar anúncios e contratos.",
      tipo: "Desenvolvimento",
      imagem: projeto3,
      images: [imoveis1, imoveis2, imoveis3, imoveis4],
      duration: '3 meses'
    },
    {
      nome: "Sistema de Cobranças com ASAAS",
      descricao:
        "Aplicativo desktop para gestão de cobranças de clientes, integrado à plataforma ASAAS para emissão de boletos. Solução simples e eficaz para controle financeiro.",
      tipo: "App Desktop",
      imagem: projeto5,
      images: [tkinter1, tkinter2, tkinter3, tkinter4],
      duration: '2 meses'
    },
    {
      nome: "Guia de Programação TV",
      descricao:
        "Sistema para rede emissora de TV que exibe a programação semanal, com dias e horários dos programas. Solução simples para consulta rápida.",
      tipo: "Desenvolvimento",
      imagem: projeto6,
      images: [tvmetropole1, tvmetropole2, tvmetropole3, tvmetropole4, tvmetropole5],
      duration: '2 meses'
    },
    {
      nome: "Plataforma de marketplace",
      descricao:
        "Plataforma de marketplace focada em simplicidade e praticidade define o propósito e os valores principais.",
      tipo: "Desenvolvimento",
      imagem: projeto7,
      images: [MARKETPLACEX1, MARKETPLACEX2, MARKETPLACEX3, MARKETPLACEX4, MARKETPLACEX5, MARKETPLACEX6, MARKETPLACEX7],
      duration: '3 meses'
    },
    {
      nome: "Sistema de Artigos com IA",
      tipo: "Desenvolvimento/IA",
      descricao:
        "Site de blog com artigos gerados por IA, explorando temas e títulos interessantes. Oferece tópicos detalhados e respostas curiosas sobre cada assunto.",
      imagem: projeto4,
      images: [responder1, responder2, responder3, responder4],
      duration: '4 meses'
    },
    {
      nome: "Sistema de Controle CRM de Depósito",
      tipo: "Desenvolvimento",
      descricao:
        "CRM para gestão de vendas, clientes e relatórios em PDF. Inclui sistema de mensagens em massa para envio de promoções aos clientes.",
      imagem: projeto2,
      images: [crm1, crm2, crm3, crm4, crm5],
      duration: '2 meses'
    },
  ];

  const handleOpenModal = (project: { title: string; description: string; images: string[]; duration: string }) => {
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
                    className="bg-primary-dark hover:bg-primary-normal opacity-1 transition-all duration-200 text-white px-4 py-2 rounded-xl flex items-center gap-2 xl:opacity-0 xl:group-hover:opacity-100"
                    onClick={() =>
                      handleOpenModal({
                        title: projeto.nome,
                        description: projeto.descricao,
                        images: projeto.images,
                        duration: projeto.duration
                      })
                    }
                  >
                    Veja mais
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
          duration={selectedProject.duration}
        />
      )}
    </div>
  );
}

export default Carrousel;
