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
          <AccordionTrigger className="font-bold">
            Quanto tempo leva para desenvolver um software sob medida para minha empresa?
          </AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-bold">
            Como vocês garantem a segurança e a qualidade do código nos projetos que entregam?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-bold">
            Vocês oferecem suporte após a entrega do projeto?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-bold">
            Qual é o custo de uma solução de TI personalizada para minha empresa?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="font-bold">
            Como funciona o processo de contrato e acordo para os projetos da Raven?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
