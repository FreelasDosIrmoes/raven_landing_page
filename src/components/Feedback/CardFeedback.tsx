import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Aspas from "../../assets/acessorios/aspas.svg";
import Estrela from "../../assets/acessorios/estrela.svg";

interface ICardFeedback {
  descricao: string;
  nome: string;
  profissao: string;
  estrelas: number;
}

export const CardFeedback = ({ descricao, estrelas, nome, profissao }: ICardFeedback) => (
  <Card className="max-w-[472px] min-h-[475px] rounded-xl p-4 md:p-8 justify-between lg:flex-1">
    <CardHeader>
      <CardTitle>
        <img src={Aspas} alt="aspas" />
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <p>{descricao}</p>
      <div className="h-[1px] w-full bg-primary-normal"></div>
    </CardContent>
    <div className="space-y-2">
      <CardFooter className="space-x-1">
        {Array(estrelas)
          .fill(0)
          .map(() => (
            <img src={Estrela} alt="" />
          ))}
      </CardFooter>
      <CardFooter>
        <h2 className="text-2xl font-semibold">{nome}</h2>
      </CardFooter>
      <CardFooter>
        <span className="text-primary-normal font-semibold">{profissao}</span>
      </CardFooter>
    </div>
  </Card>
);
