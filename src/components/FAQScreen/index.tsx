import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export default function FAQScreen() {
  return (
    <div className="flex flex-col items-center justify-center p-10 md:px-40 lg:px-60 xl:px-80 gap-4">
      <div className="text-center text-2xl lg:text-3xl xl:text-5xl font-bold text-primary-dark ">
        Perguntas Frequentes (FAQs)
      </div>
      <div className="text-sm lg:text-md xl:text-lg text-center">
        Criamos esta seção para esclarecer as dúvidas mais comuns sobre nossos serviços. Nosso
        objetivo é fornecer informações diretas e úteis, caso tenha alguma dúvida específica, entre
        em contato com nossa equipe!
      </div>
      <Accordion type="single" collapsible className="w-full text-primary-dark">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold text-md md:text-lg lg:text-xl hover:cursor-pointer">
            Quanto tempo leva para desenvolver um software sob medida para minha empresa?
          </AccordionTrigger>
          <AccordionContent className="text-black">
            O tempo varia conforme a complexidade do projeto e as expectativas alinhadas em reuniões
            iniciais. Projetos simples levar semanas; os mais complexos, de 2 a 4 meses. Na Raven,
            definimos cronogramas realistas com você. Quer uma estimativa? Fale conosco!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-bold text-md md:text-lg lg:text-xl hover:cursor-pointer">
            Como vocês garantem a segurança e a qualidade do código nos projetos que entregam?
          </AccordionTrigger>
          <AccordionContent className="text-black">
            Na Raven, aplicamos boas práticas no desenvolvimento de software para garantir segurança
            e qualidade do código. Nossa equipe especializada em infraestrutura assegura a
            escalabilidade e robustez das soluções.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-bold text-md md:text-lg lg:text-xl hover:cursor-pointer">
            Vocês oferecem suporte após a entrega do projeto?
          </AccordionTrigger>
          <AccordionContent className="text-black">
            Sim, na Raven, nosso compromisso com você vai além da entrega do projeto. Para todos os
            contratos fechados, oferecemos uma garantia de 1 mês após a entrega da solução, que
            inclui manutenção e suporte para qualquer urgência ou eventualidade que possa surgir.
            Após esse período, oferecemos opções de suporte contínuo para atender às suas
            necessidades a longo prazo.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-bold text-md md:text-lg lg:text-xl hover:cursor-pointer">
            Qual é o custo de uma solução de TI personalizada para minha empresa?
          </AccordionTrigger>
          <AccordionContent className="text-black">
            Na Raven, o custo varia conforme o escopo, complexidade e necessidades da sua empresa,
            incluindo funcionalidades, integrações e personalização. Desenvolvemos soluções sob
            medida com orçamentos a partir de valores acessíveis, ou oferecemos mensalidades para
            soluções adaptadas, garantindo rapidez e economia.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="font-bold text-md md:text-lg lg:text-xl hover:cursor-pointer">
            Como funciona o processo de contrato e acordo para os projetos da Raven?
          </AccordionTrigger>
          <AccordionContent className="text-black">
            Na Raven, priorizamos transparência e segurança nos contratos, feitos com suporte da
            nossa área judicial para garantir clareza a ambas as partes. Iniciamos com reuniões de
            alinhamento para entender suas necessidades e propor soluções, elaborando um contrato
            detalhado que assegura um projeto bem estruturado. Quer iniciar esse processo com a
            gente? Entre em contato pelo Email ou Whatsapp para agendar uma reunião!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
