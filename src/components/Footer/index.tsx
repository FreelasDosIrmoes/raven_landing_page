import { useState } from "react";
import logo from "/images/logo-raven.png";

const Footer = () => (
  <footer className="bg-primary-dark text-white py-12 px-8">
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex md:gap-2 flex-col justify-center items-center md:justify-start">
          <img
            src={logo}
            alt="Raven Logo"
            className="max-w-[200px] md:max-w-[100px] lg:max-w-[180px]"
          />
          <div className="text-white text-xs max-w-[300px] text-center md:text-start">
            A Raven nasceu para transformar a forma como criamos e utilizamos tecnologia.
            Desenvolvemos softwares inovadores e bem projetados, levando soluções inteligentes para
            o mundo.
          </div>
        </div>

        <FooterColumn
          title="Empresa"
          links={[
            "Sobre a Raven",
            "Nossos Serviços",
            "Projetos",
            "Fale Conosco",
            "Solicite um Orçamento",
          ]}
        />
        <FooterColumn
          title="Recursos"
          links={["Centro de Ajuda", "Guias e Tutoriais", "Blog", "Instagram", "Email"]}
        />
      </div>

      <div className="container mx-auto mt-8 text-center flex flex-col items-center justify-center md:text-left md:flex md:flex-col md:gap-4 md:justify-between md:items-center">
        <div>
          <p className="font-semibold">Entre em contato também pelo E-mail</p>
          <p>Mande seu email para marcarmos uma reunião!!</p>
        </div>
        <NewsletterForm />
      </div>
    </div>

    <div className="container mx-auto mt-8 border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
      <p className="text-xs md:text-sm">&copy; 2025 Raven. Todos os direitos reservados.</p>
      <div className="flex space-x-4 text-sm">
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
  <div className="md:text-left text-center">
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line max-len
    const mailtoLink = `mailto:contato.raventech@gmail.com?subject=Newsletter&body=${encodeURIComponent(message)}%0A%0AEmail: ${encodeURIComponent(email)}`;
    window.location.href = mailtoLink;
  };

  return (
    <form className="flex flex-col gap-2 mt-4 md:mt-0 w-full max-w-md" onSubmit={handleSubmit}>
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
      >
        Enviar
      </button>
    </form>
  );
};

export default Footer;
