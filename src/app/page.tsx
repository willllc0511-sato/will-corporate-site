import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
import Flow from "@/components/Flow";
import SupportedAI from "@/components/SupportedAI";
import LocalSupport from "@/components/LocalSupport";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Flow />
        <SupportedAI />
        <LocalSupport />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
