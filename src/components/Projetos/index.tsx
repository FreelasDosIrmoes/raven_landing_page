import Carrousel from "./carrousel";
import Rabisco from "../../assets/acessorios/image(1).png";

export const Projetos = () => {
  return (
    <section className="p-4 md:p-32 bg-primary-dark flex justify-center z-10 items-center flex-col">
      <div className="relative w-full">
        <h2 className="font-bold w-full text-3xl md:text-4xl lg:text-6xl text-white text-left z-10 relative whitespace-nowrap">
          Nossos Projetos
        </h2>
        {/* <div
          className="
            absolute z-0
            top-full left-0 w-[20%] h-[50%] 
            transform translate-y-2
          "
        >
          <img src={Rabisco} className="w-full h-full" />
        </div> */}
      </div>
      <Carrousel />
    </section>
  );
};