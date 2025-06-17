
import { useState, useEffect, useRef } from "react";
import { 
  Facebook, 
  Zap, 
  Target, 
  MessageSquare, 
  MousePointerClick, 
  Gauge,
  ArrowRight,
  Monitor
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const Services = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Apply to all elements with 'reveal' class
    document.querySelectorAll(".reveal").forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary/10 to-blue-500/10">
        <div className="container text-center">
          <div className="inline-block animate-fade-in">
            <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full">
              Nos services
            </span>
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Solutions marketing complètes pour votre croissance
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Des stratégies personnalisées qui génèrent des résultats concrets pour votre entreprise du secteur du bâtiment.
          </p>
        </div>
      </section>

      {/* Services Detail Sections */}
      <ServicesDetailSection />

      {/* CTA Section */}
      <CTASection
        title="Prêt à transformer votre marketing digital ?"
        description="Contactez-nous pour discuter de vos besoins et découvrir comment nos services peuvent vous aider à atteindre vos objectifs."
        buttonText="Discuter de votre projet"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
};

// Services Detail Section Component
const ServicesDetailSection = () => {
  const services = [
    {
      id: "metaads",
      icon: <Facebook className="h-10 w-10" />,
      title: "Meta Ads",
      description: "Campagnes Facebook et Instagram optimisées pour générer des leads qualifiés et augmenter votre visibilité.",
      features: [
        "Ciblage précis de votre audience idéale",
        "Création de visuels et messages impactants",
        "Optimisation continue pour maximiser le ROI",
        "Retargeting pour convertir les prospects hésitants",
        "Analyse détaillée des performances"
      ]
    },
    {
      id: "nativeads",
      icon: <Monitor className="h-10 w-10" />,
      title: "Native Ads",
      description: "Campagnes Taboola, Outbrain et autres plateformes natives pour scaler votre acquisition avec des budgets élevés.",
      features: [
        "Le meilleur levier pour scaler votre acquisition",
        "Capacité de dépenses publicitaires jusqu'à 10K€/jour",
        "Ciblage précis des audiences seniors",
        "Parfait pour les secteurs du bâtiment, santé, immobilier et finance",
        "Contenu natif intégré pour une meilleure conversion"
      ]
    },
    {
      id: "tiktokads",
      icon: <Zap className="h-10 w-10" />,
      title: "TikTok Ads",
      description: "Stratégies innovantes sur TikTok pour atteindre de nouvelles audiences et renforcer votre image de marque.",
      features: [
        "Création de contenus engageants adaptés à la plateforme",
        "Ciblage des audiences jeunes et dynamiques",
        "Formats publicitaires innovants",
        "Suivi des tendances et adaptation rapide",
        "Stratégies de viralité"
      ]
    },
    {
      id: "googleads",
      icon: <Target className="h-10 w-10" />,
      title: "Google Ads",
      description: "Campagnes AdWords pour capturer l'intention d'achat et maximiser votre visibilité auprès de prospects qualifiés.",
      features: [
        "Recherche de mots-clés pertinents et rentables",
        "Création d'annonces persuasives",
        "Optimisation du Quality Score",
        "Stratégies d'enchères intelligentes",
        "Suivi précis des conversions"
      ]
    },
    {
      id: "messaging",
      icon: <MessageSquare className="h-10 w-10" />,
      title: "SMS & Mailing",
      description: "Communication directe et personnalisée pour convertir vos prospects et fidéliser vos clients existants.",
      features: [
        "Segmentation précise de vos audiences",
        "Création de messages personnalisés et convaincants",
        "Automatisation des séquences de messages",
        "Tests A/B pour maximiser les taux d'ouverture et de clic",
        "Analyse des performances et optimisation continue"
      ]
    },
    {
      id: "leadgen",
      icon: <MousePointerClick className="h-10 w-10" />,
      title: "Lead Generation",
      description: "Stratégies complètes pour capturer des contacts qualifiés et prêts à convertir pour votre entreprise.",
      features: [
        "Création de tunnels de conversion optimisés",
        "Landing pages à haute performance",
        "Formulaires intelligents",
        "Qualification automatique des leads",
        "Intégration avec votre CRM"
      ]
    },
    {
      id: "automation",
      icon: <Gauge className="h-10 w-10" />,
      title: "Automatisation",
      description: "Optimisation des processus et du parcours client pour un meilleur taux de conversion et une gestion efficace.",
      features: [
        "Automatisation du parcours client",
        "Intégration entre vos différents outils",
        "Réduction des tâches manuelles",
        "Amélioration de l'expérience client",
        "Reporting automatisé"
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={index} id={service.id} className="scroll-mt-32">
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center reveal`}>
                <div className="w-full lg:w-1/2">
                  <div className={`bg-gradient-to-br ${index % 2 === 0 ? 'from-primary/10 to-blue-500/5' : 'from-blue-500/5 to-primary/10'} p-10 rounded-2xl h-full flex items-center justify-center`}>
                    <div className="text-primary bg-white p-6 rounded-xl shadow-lg animate-float">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-block bg-primary/10 text-primary font-medium text-sm px-3 py-1 rounded-full">
                    Service
                  </div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                  <p className="text-muted-foreground text-lg">{service.description}</p>
                  
                  <div className="space-y-3 pt-4">
                    <h3 className="font-semibold">Ce que nous offrons:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="bg-primary/10 text-primary p-1 rounded-full mr-3 mt-0.5">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button asChild className="mt-6">
                    <Link to="/contact">
                      Demander un devis
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
