import { Instagram } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export type HeaderLink = {
  name: string;
  link: string;
};

interface HeaderProps {
  headerLinks: Array<HeaderLink>;
  redirectContactUs: string;
}

export const headerLinks: HeaderLink[] = [
  { link: "/#benefícios", name: "Serviços" },
  { link: "/shop", name: "Loja" },
  { link: "/blog", name: "Blog" },
  { link: "/#contact", name: "Contato" },
  { link: "/#faq", name: "Dúvidas" },
];

export default function Header({ headerLinks, redirectContactUs }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleClick = (event: React.MouseEvent, link: string) => {
    event.preventDefault();

    // Link contém hash (#)
    if (link.includes("#")) {
      const [path, hash] = link.split("#");

      if (path === "" || path === "/") {
        // mesma página, só scroll
        const section = document.querySelector(`#${hash}`);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      } else {
        // rota diferente, navega e depois scroll (feito no useEffect)
        navigate(`${path}#${hash}`);
      }
    } else {
      // rota simples
      navigate(link);
    }
  };

  return (
    <div className="w-full h-fit bg-white flex justify-center md:justify-between items-center px-22 py-5">
      <a href="https://raventech.com.br">
        <img alt="Raven logo" src="/images/logo-raven.png" className="w-[144px] md:w-44" />
      </a>
      <div className="md:flex hidden items-center gap-8">
        <Instagram
          size={24}
          className="stroke-primary-dark hover:cursor-pointer hover:stroke-primary-normal transition-colors duration-200"
          onClick={() => window.open("https://instagram.com/raventechsolutions", "_blank")}
        />
        <div className="header-links w-fit h-fit flex justify-center items-center gap-8">
          {headerLinks.map((link, id) => (
            <a
              key={id}
              href={link.link}
              onClick={(e) => handleClick(e, link.link)}
              className="text-primary-dark transition-colors duration-200 hover:text-primary-normal"
            >
              {link.name}
            </a>
          ))}
        </div>
        <a href={redirectContactUs} target="_blank" rel="noopener noreferrer">
          <Button className="bg-primary-normal hover:bg-primary-normal/85 hover:cursor-pointer">
            Fale Conosco
          </Button>
        </a>
      </div>
    </div>
  );
}
