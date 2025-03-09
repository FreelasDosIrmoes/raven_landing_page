import { useState } from "react";
import logo from "../../assets/RAVEN-LOGO-BRANCO.png";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/api";
import { toast } from "sonner";
import DialogFooter from "../DialogBase/DialogFooter";

export type FooterLink = {
  title: string;
  links: { label: string; url?: string }[];
};

const footerLinks: FooterLink[] = [
  {
    title: "Empresa",
    links: [
      { label: "Benefícios" },
      { label: "Projetos" },
      { label: "Feedback" },
      { label: "FAQ" },
    ],
  },
  {
    title: "Suporte",
    links: [{ label: "Contato" }, { label: "Ajuda" }, { label: "Documentação" }],
  },
  {
    title: "Contato",
    links: [
      {
        label: "WhatsApp",
        url: "https://wa.me/5585989338909?text=Olá,%20queria%20saber%20melhor%20sobre%20os%20produtos%20e%20serviços%20da%20Raven.",
      },
      { label: "Instagram", url: "https://instagram.com/raventechsolutions" },
      { label: "Email", url: "mailto:contato.raventech@gmail.com" },
    ],
  },
];

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
        {footerLinks.map((column, index) => (
          <FooterColumn key={index} title={column.title} links={column.links} />
        ))}
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
  links: { label: string; url?: string }[];
}

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-center">
      <h3 className="font-semibold mb-2">{title}</h3>
      <ul>
        {links.map((link, index) =>
          title === "Suporte" ? (
            <DialogFooter link={link} key={index} />
          ) : (
            <li
              key={index}
              className="text-sm hover:underline cursor-pointer mb-2"
              onClick={() =>
                link.url
                  ? window.open(link.url, "_blank")
                  : scrollToSection(link.label.toLowerCase())
              }
            >
              {link.label}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mutation = useMutation({
    mutationFn: async () => api.post("/message/", { email, texto: message }),
    onSuccess: () => {
      setEmail("");
      setMessage("");
      toast.success("Mensagem enviada com sucesso. Em breve iremos entrar em contato!");
    },
    onError: (error) => {
      console.error("Erro ao enviar mensagem:", error);
      toast.error("Erro ao enviar mensagem. Tente novamente mais tarde.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) {
      toast.warning("Por favor, preencha todos os campos.");
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
