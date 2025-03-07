import Carrousel from "./carrousel";

export const Projetos = () => (
  <section className="p-4 md:p-32 bg-primary-dark flex justify-center z-10 items-center flex-col">
    <div className="relative w-full">
      <h2 className="font-bold w-full text-3xl md:text-4xl lg:text-6xl text-white text-left z-10 relative whitespace-nowrap">
        Nossos Projetos
      </h2>
    </div>
    <Carrousel />
  </section>
);
