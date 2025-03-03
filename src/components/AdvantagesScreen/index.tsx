/* eslint-disable max-len */
import type { ContentSectionProps } from "../ContentSection";
import ContentSection from "../ContentSection";
import { Clock4, Package, Sun } from "lucide-react";

export default function AdvantageScreen() {
  const advantageContents: ContentSectionProps[] = [
    {
      icon: <Package size={48} className="stroke-primary-dark" />,
      title: "Soluções Personalizadas",
      description:
        "Software sob medida para resolver seus desafios de TI, com eficiência e escalabilidade para o crescimento da sua empresa",
    },
    {
      icon: <Clock4 size={48} className="stroke-primary-dark" />,
      title: "Desenvolvimento Rápido",
      description:
        "Lance projetos mais rápido com nosso processo ágil e seguro, reduzindo riscos e elevando a qualidade do código.",
    },
    {
      icon: <Sun size={48} className="stroke-primary-dark" />,
      title: "Acompanhamento Contínuo",
      description:
        "Assegure o sucesso a longo prazo com suporte dedicado, atualizações regulares, ajustes estratégicos e reuniões semanais de alinhamento.",
    },
  ];

  return (
    <div className="w-full h-auto flex justify-center items-center flex-col text-center gap-[42px] md:gap-[80px] p-6 relative">
      <div className="title font-bold text-3xl md:text-4xl lg:text-6xl text-primary-dark relative">
        Benefícios dos <br /> Nossos Serviços
      </div>
      <div className="flex items-start justify-center flex-col md:flex-row gap-6 relative">
        {advantageContents.map((content, id) => (
          <ContentSection
            key={id}
            title={content.title}
            description={content.description}
            icon={content.icon}
          />
        ))}
      </div>
    </div>
  );
}
