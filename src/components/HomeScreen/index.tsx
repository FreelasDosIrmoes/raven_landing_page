import { Button } from "../ui/button";

export default function HomeScreen() {
  return (
    <div className="h-auto lg:h-[784px] w-full px-4 md:px-[100px] py-[40px] relative overflow-x-hidden">
      <div
        className="absolute inset-0 bg-[url('/images/lines-bg.png')] bg-cover bg-center z-0 -top-10 md:top-0 lg:max-h-full max-h-96"
        style={{
          width: "100%",
          height: "auto",
          transform: "scaleX(1.5)",
          transformOrigin: "left",
        }}
      ></div>

      <div className="relative w-full z-10 flex flex-row items-center justify-between h-fit mr-5 text-center md:text-start">
        <div className="col-left w-full md:w-1/2 flex items-center md:items-start flex-col gap-6 px-4 md:px-0">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-primary-dark">
            Transforme Seus Desafios em Soluções Poderosas
          </h1>
          <h3 className="font-normal text-sm md:text-lg lg:text-xl text-primary-dark">
            Na Raven, criamos soluções inteligentes sob medida para empresas que buscam inovação,
            segurança e eficiência. Ajudamos você a crescer com tecnologia de ponta, entregue por
            uma equipe motivada por resultados.
          </h3>
          <Button className="bg-primary-dark text-white w-fit">Fale Conosco</Button>
        </div>

        <div className="col-right w-1/2 md:flex hidden justify-end ml-5">
          <img
            src="/images/home-info-bg.png"
            alt="Imagem ilustrativa"
            className="w-full max-w-[500px]"
          />
        </div>
      </div>
    </div>
  );
}
