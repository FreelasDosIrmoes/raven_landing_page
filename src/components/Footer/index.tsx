import { useState } from "react";
import logo from "../../assets/RAVEN-LOGO-BRANCO.png";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/api";

const Footer = () => (
  <footer className="bg-primary-dark text-white py-8 px-8">
    <div className="flex items-center flex-col md:flex-row justify-center gap-8 px-0 xs:px-0 md:px-0 lg:px-20 xl:px-40">
      <div className="flex flex-col items-center justify-center text-center">
        <img
          src={logo}
          alt="Raven Logo"
          className="max-w-[200px] md:max-w-[100px] lg:max-w-[180px] mb-4"
        />
        <div className="text-white text-xs max-w-[300px] text-center">
          A Raven nasceu para transformar a forma como criamos e utilizamos tecnologia.
          Desenvolvemos softwares inovadores e bem projetados, levando soluções inteligentes para o
          mundo.
        </div>
      </div>
      <div className="mx-auto flex items-center justify-between gap-8 justify-items-center">
        <FooterColumn title="Empresa" links={["Benefícios", "Projetos", "Feedback", "FAQ"]} />
      </div>

      <div className="mx-auto mt-8 flex flex-col items-center justify-center text-center md:mt-0">
        <div>
          <p className="font-semibold">Entre em contato também pelo E-mail</p>
          <p>Mande seu email para marcarmos uma reunião!!</p>
        </div>
        <NewsletterForm />
      </div>
    </div>

    <div className="container mx-auto mt-8 border-t border-white pt-4 flex flex-col md:flex-row items-center justify-center text-center">
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-sm">
        <p className="text-xs md:text-sm mb-4 md:mb-0">
          © 2025 Raven. Todos os direitos reservados.
        </p>
        <a href="#" className="hover:underline">
          Política de Privacidade
        </a>
        <a href="#" className="hover:underline">
          Termos e Condições
        </a>
        <a href="#" className="hover:underline">
          Política de Cookies
        </a>
      </div>
    </div>
  </footer>
);

interface FooterColumnProps {
  title: string;
  links: string[];
}
const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div className="text-center">
    <h3 className="font-semibold mb-2">{title}</h3>
    <ul>
      {links.map((link, index) => (
        <li key={index} className="text-sm hover:underline cursor-pointer mb-2">
          {link}
        </li>
      ))}
    </ul>
  </div>
);

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mutation = useMutation({
    mutationFn: async () => api.post("/message/", { email, texto: message }),
    onSuccess: () => {
      setEmail("");
      setMessage("");
    },
    onError: (error) => {
      console.error("Erro ao enviar mensagem:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    mutation.mutate();
  };

  return (
    <form className="flex flex-col gap-2 mt-4 w-full max-w-md" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="O seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="p-2 border border-gray-400 w-full text-primary-light rounded-md"
      />
      <textarea
        placeholder="Digite sua mensagem"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="p-2 border border-gray-400 w-full text-primary-light rounded-md"
        rows={3}
      />
      <button
        type="submit"
        className="bg-primary-normal text-white text-md px-4 py-2 rounded-md hover:bg-opacity-30 hover:cursor-pointer"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
};

export default Footer;
