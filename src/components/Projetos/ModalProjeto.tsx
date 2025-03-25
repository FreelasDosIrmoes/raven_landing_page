import { ChevronLeft, ChevronRight, Timer } from "lucide-react";
import { useState, useEffect } from "react";

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
  title,
  description,
  duration,
}: IModalProjeto) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  if (!isOpen) return null;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative w-[95%] md:max-w-8xl max-h-[100vh] bg-primary-dark p-8 rounded-xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-white hover:text-gray-300 text-lg font-bold"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3 relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <div className="min-w-full" key={index}>
                  <img
                    src={image}
                    alt={`${title} - Slide ${index + 1}`}
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                </div>
              ))}
            </div>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 text-xl"
              onClick={prevSlide}
            >
              <ChevronLeft />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 text-xl"
              onClick={nextSlide}
            >
              <ChevronRight />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    currentSlide === index ? "bg-primary-normal" : "bg-slate-400"
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/3 text-white flex flex-col space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
            <p>{description}</p>
            <div className="flex space-x-1">
              <span className="flex items-center font-semibold">Duração:</span>
              <span>{duration}</span>
              <span>
                <Timer />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
