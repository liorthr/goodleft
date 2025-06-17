import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import StatsCard from "@/components/StatsCard";
import ServiceCard from "@/components/ServiceCard";
import IndustryCard from "@/components/IndustryCard";
import TestimonialCard from "@/components/TestimonialCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const Index = () => {
  const [stats, setStats] = useState([
    { label: "Clients satisfaits", value: "100+" },
    { label: "Campagnes réussies", value: "250+" },
    { label: "Leads qualifiés générés", value: "10K+" },
  ]);

  const [services, setServices] = useState([
    {
      title: "Meta Ads",
      description:
        "Campagnes Facebook et Instagram optimisées pour générer des leads qualifiés et augmenter votre visibilité.",
      link: "/services#metaads",
    },
    {
      title: "TikTok Ads",
      description:
        "Stratégies innovantes sur TikTok pour atteindre de nouvelles audiences et renforcer votre image de marque.",
      link: "/services#tiktokads",
    },
    {
      title: "Google Ads",
      description:
        "Campagnes AdWords pour capturer l'intention d'achat et maximiser votre visibilité auprès de prospects qualifiés.",
      link: "/services#googleads",
    },
  ]);

  const [industries, setIndustries] = useState([
    {
      title: "Bâtiment",
      description:
        "Solutions marketing sur mesure pour les entreprises du bâtiment, de la construction à la rénovation.",
    },
    {
      title: "Santé",
      description:
        "Stratégies digitales pour les professionnels de la santé, des cliniques aux praticiens indépendants.",
    },
    {
      title: "Finance",
      description:
        "Marketing de pointe pour les institutions financières, des banques aux assurances.",
    },
  ]);

  const [testimonials, setTestimonials] = useState([
    {
      name: "Jean Dupont",
      company: "Entreprise Bâtiment+",
      testimonial:
        "Goodleft a transformé notre approche marketing. Nos leads ont augmenté de 40% en seulement trois mois !",
    },
    {
      name: "Sophie Martin",
      company: "Clinique Bien-Être",
      testimonial:
        "Grâce à Goodleft, nous avons attiré de nouveaux patients et amélioré notre image de marque en ligne.",
    },
  ]);

  useEffect(() => {
    // Update stats dynamically (for demonstration purposes)
    const intervalId = setInterval(() => {
      setStats((prevStats) =>
        prevStats.map((stat) => ({
          ...stat,
          value: String(Number(stat.value.replace(/[^\d.-]/g, "")) + 10) + "+",
        }))
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-blue-50 to-white overflow-hidden">
        <div className="container text-center">
          <div className="inline-block animate-fade-in">
            <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full">
              Marketing digital
            </span>
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Boostez votre croissance avec des stratégies marketing innovantes
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Des solutions personnalisées pour les entreprises du bâtiment, de la santé et de la finance.
          </p>
          <div className="mt-10 space-x-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" asChild>
              <Link to="/services">Découvrir nos services</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Prendre contact</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Découvrez Goodleft en vidéo</h2>
              <p className="text-xl text-muted-foreground">
                Apprenez-en plus sur notre approche et nos services marketing spécialisés
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div style={{padding:"56.25% 0 0 0", position:"relative"}}>
                <iframe 
                  src="https://player.vimeo.com/video/1094103975?h=f4a439f1f7&badge=0&autopause=0&player_id=0&app_id=58479" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} 
                  title="Agence Goodleft"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <SectionHeading title="Nos chiffres clés" description="Des résultats concrets pour nos clients." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {stats.map((stat, index) => (
              <StatsCard key={index} label={stat.label} value={stat.value} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeading title="Nos services" description="Des solutions marketing adaptées à vos besoins." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <SectionHeading title="Nos secteurs d'expertise" description="Nous accompagnons les entreprises de divers secteurs." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {industries.map((industry, index) => (
              <IndustryCard
                key={index}
                title={industry.title}
                description={industry.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeading title="Témoignages clients" description="Ce que nos clients disent de nous." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                company={testimonial.company}
                testimonial={testimonial.testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Prêt à développer votre activité ?"
        description="Contactez-nous dès maintenant pour discuter de vos besoins et découvrir comment nous pouvons vous aider."
        buttonText="Demander un devis"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default Index;
