import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Recommend from "@/components/Recommend";
import Partner from "@/components/Partner";
import CompanyInfo from "@/components/CompanyInfo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Recommend />
        <Partner />
        <CompanyInfo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
