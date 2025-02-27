import { Button } from "../ui/button";

export type HeaderLink = {
  name: string;
  link: string;
};

interface HeaderProps {
  headerLinks: Array<HeaderLink>;
  redirectContactUs: string;
}

export default function Header({ headerLinks, redirectContactUs }: HeaderProps) {
  return (
    <div className="w-full h-16 bg-primary-dark flex justify-between items-center px-32 py-9">
      <img alt="Raven logo" src="src/assets/logo-raven.png" width={188} onClick={() => {}} />
      <div className="flex items-center gap-8">
        <div className="header-links w-fit h-fit flex justify-center items-center gap-8">
          {headerLinks.map((link, id) => (
            <a
              key={id}
              href={link.link}
              className="text-white transition-colors duration-200 hover:text-primary-light"
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
