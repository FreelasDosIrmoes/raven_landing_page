/* eslint-disable max-len */
import AdvantageScreen from "../components/AdvantagesScreen";
import FAQScreen from "../components/FAQScreen";
import { Feedback } from "../components/Feedback";
import Footer from "../components/Footer";
import Header, { headerLinks } from "../components/Header";
import HomeScreen from "../components/HomeScreen";
import { Projetos } from "../components/Projetos";
import { Toaster } from "../components/ui/sonner";
import WorkWithUsScreen from "../components/WorkWithUsScreen";
import "../App.css";
import SEO from "@/components/SEO";

const redirectContactUs =
  "https://wa.me/5585989338909?text=Olá,%20queria%20saber%20melhor%20sobre%20os%20produtos%20e%20serviços%20da%20Raven.";

function Home() {
  return (
    <>
      <SEO
        description="Descubra os melhores produtos e serviços da Raven."
        image="https://raventech.com.br/images/logo-raven.png"
        keywords="Raven, Raventech, Raven Tech, soluções de software, software sob medida, desenvolvimento de software, tecnologia para empresas"
        title="Raven - Soluções De Software"
        type="website"
      />

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

export default Home;
