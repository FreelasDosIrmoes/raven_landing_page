import "./App.css";
import AdvantageScreen from "./components/AdvantagesScreen";
import FAQScreen from "./components/FAQScreen";
import { Feedback } from "./components/Feedback";
import Footer from "./components/Footer";
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
  "https://wa.me/5585989338909?text=Olá,%20queria%20saber%20melhor%20sobre%20os%20produtos%20e%20serviços%20da%20Raven.";
function App() {
  return (
    <div className="w-full font-sans">
      <Header redirectContactUs={redirectContactUs} headerLinks={headerLinks} />
      <HomeScreen redirectContactUs={redirectContactUs} />
      <AdvantageScreen />
      <Projetos />
      <WorkWithUsScreen redirectContactUs={redirectContactUs} />
      <Feedback />
      <FAQScreen />
      <Footer />
    </div>
  );
}

export default App;
