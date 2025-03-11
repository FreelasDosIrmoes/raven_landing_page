/* eslint-disable */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./carrousel.css";

interface IModalProjeto {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
  description: string;
  duration?: string;
}

export const ModalProjeto = ({
  isOpen,
  onClose,
  images,
}: IModalProjeto) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade"
        onClick={onClose}
      ></div>

      <div className="relative min-w-[95%] max-h-[500px] max-w-4xl bg-primary-dark p-6 rounded-xl animate-slide-up">
        <button className="absolute top-4 right-4 text-white hover:text-gray-300" onClick={onClose}>
          ✕
        </button>
        <div className="flex space-x-8">
          <div className="w-[50%] p-4 rounded-lg">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="w-full object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="slider-controler">
              <button className="swiper-button-prev"></button>
              <div className="swiper-pagination"></div>
              <button className="swiper-button-next"></button>
            </div>
          </div>
          <div>
            <h2>Texto</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
