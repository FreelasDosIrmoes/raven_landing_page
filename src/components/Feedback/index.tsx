import { CardFeedback } from "./CardFeedback";

export const Feedback = () => {
  const feedbacks = [
    {
      descricao:
        // eslint-disable-next-line max-len
        "Profissionais muito atenciosos e prestativos. Superou a expectativa no prazo de entrega e na qualidade do serviço",
      estrelas: 5,
      nome: "Arismar Amorim",
      profissao: "Advogado",
    },
    {
      descricao:
        // eslint-disable-next-line max-len
        "A equipe fez um trabalho de forma única, alinhou comigo antes com muito respeito, eles são muito objetivos e organizados, entrega além do solicitado. Super recomendo o trabalho da Raven.",
      estrelas: 5,
      nome: "Bruna Souza",
      profissao: "Psicóloga",
    },
    {
      descricao: "A equipe realizou o trabalho com qualidade e presteza!",
      estrelas: 5,
      nome: "Luiz Fabiano",
      profissao: "Estudante",
    },
  ];

  return (
    <section className="bg-primary-normal p-4 md:p-20 flex-col">
      <div className="w-full space-y-6 py-8 text-center">
        <h2 className="text-6xl font-bold text-white">Feedback</h2>
        <p className="text-white text-lg">Alguns feedbacks de nossos clientes</p>
      </div>
      <div className="flex flex-col xl:flex-row xl:space-x-6 md:justify-center items-center space-y-4 xl:space-y-0">
        {feedbacks.map((feed) => (
          <CardFeedback
            descricao={feed.descricao}
            estrelas={feed.estrelas}
            nome={feed.nome}
            profissao={feed.profissao}
          />
        ))}
      </div>
    </section>
  );
};
