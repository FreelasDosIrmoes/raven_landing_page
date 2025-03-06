import "./App.css";
import AdvantageScreen from "./components/AdvantagesScreen";
import type { HeaderLink } from "./components/Header";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import { Projetos } from "./components/Projetos";
import WorkWithUsScreen from "./components/WorkWithUsScreen";

const headerLinks: HeaderLink[] = [
  { link: "#services", name: "Serviços" },
  { link: "#contact", name: "Contato" },
  { link: "#about", name: "Sobre" },
];

const redirectContactUs =
  "https://wa.me/5585989427436?text=Ol%C3%A1!%20%F0%9F%91%8B%0A%0AAcabei%20de%20visitar%20sua%20landing%20page%20e%20estou%20muito%20interessado(a)%20em%20saber%20mais%20sobre%20como%20voc%C3%AAs%20podem%20promover%20uma%20solu%C3%A7%C3%A3o%20para%20meu%20problema.";
function App() {
  return (
    <div className="w-full font-sans">
      <Header redirectContactUs={redirectContactUs} headerLinks={headerLinks} />
      <HomeScreen />
      <AdvantageScreen />
      <Projetos />
      <WorkWithUsScreen redirectContactUs={redirectContactUs} />
    </div>
  );
}

export default App;
