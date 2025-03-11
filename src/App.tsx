import "./App.css";
import { Helmet } from "react-helmet";
import AdvantageScreen from "./components/AdvantagesScreen";
import DialogBase from "./components/DialogBase";
import FAQScreen from "./components/FAQScreen";
import { Feedback } from "./components/Feedback";
import Footer from "./components/Footer";
import type { HeaderLink } from "./components/Header";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import { Projetos } from "./components/Projetos";
import { Button } from "./components/ui/button";
import { Toaster } from "./components/ui/sonner";
import WorkWithUsScreen from "./components/WorkWithUsScreen";

const headerLinks: HeaderLink[] = [
  { link: "#benefícios", name: "Serviços" },
  { link: "#contact", name: "Contato" },
  { link: "#faq", name: "Dúvidas" },
];

const redirectContactUs =
  "https://wa.me/5585989338909?text=Olá,%20queria%20saber%20melhor%20sobre%20os%20produtos%20e%20serviços%20da%20Raven.";

function App() {
  return (
    <>
      <Helmet>
        <title>RavenTech - Soluções De Software</title>
        <meta name="description" content="Descubra os melhores produtos e serviços da Raven." />
        <meta property="og:title" content="Raven - Soluções De Software" />
        <meta
          property="og:description"
          content="Conheça nossos serviços e entre em contato agora!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://raventech.com.br" />
      </Helmet>

      <Toaster position="top-right" richColors />
      <div className="w-full font-sans">
        <Header redirectContactUs={redirectContactUs} headerLinks={headerLinks} />
        <HomeScreen redirectContactUs={redirectContactUs} />
        <div id="benefícios">
          <AdvantageScreen />
        </div>
        <div id="projetos">
          <Projetos />
        </div>
        <div id="contact">
          <WorkWithUsScreen redirectContactUs={redirectContactUs} />
        </div>
        <div id="feedback">
          <Feedback />
        </div>
        <div id="faq">
          <FAQScreen />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
