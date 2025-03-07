import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

interface WorkWithUsScreenProps {
  redirectContactUs: string;
}

export default function WorkWithUsScreen({ redirectContactUs }: WorkWithUsScreenProps) {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center xl:h-[805px] gap-10 md:gap-x-[100px] p-10">
      <img
        src="/images/logo-with-balls.png"
        alt="Imagem ilustrativa"
        className="w-full md:w-[70%] md:max-w-[260px] lg:max-w-[460px] xl:max-w-[660px]"
      />
      <div className="w-full md:w-[30%] flex flex-col items-center md:items-start justify-center text-start gap-y-[24px]">
        <div className="font-bold text-3xl md:text-xl lg:text-4xl xl:text-6xl text-primary-dark">
          Trabalhe Conosco
        </div>
        <div className="text-center md:text-start text-lg md:text-sm lg:text-lg lg:mb-[60px]">
          Ofereçemos soluções personalizadas que atendem às suas necessidades. Desde o planejamento
          até a entrega, trabalho com foco na qualidade e no prazo combinado.
        </div>
        <a href={redirectContactUs} target="_blank" rel="noopener noreferrer">
          <Button className="bg-primary-normal hover:bg-primary-normal/85 hover:cursor-pointer w-60 h-10 text-lg">
            Fale Conosco
            <ArrowRight size={32} />
          </Button>
        </a>
      </div>
    </div>
  );
}
