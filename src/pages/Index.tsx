import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  MousePointerClick, 
  Target, 
  BarChart, 
  MessageSquare,
  Zap, 
  Building, 
  Home, 
  Sun, 
  Stethoscope, 
  Wrench, 
  ShoppingBag, 
  ShoppingCart,
  Facebook, 
  TrendingUp, 
  Gauge, 
  Users,
  Monitor
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import StatCard from "@/components/StatCard";
import TestimonialCard from "@/components/TestimonialCard";
import ServiceCard from "@/components/ServiceCard";
import IndustryCard from "@/components/IndustryCard";
import CTASection from "@/components/CTASection";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const textElements = useRef<(HTMLElement | null)[]>([]);

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

    // Animation for hero text - more fluid and modern version
    const animateText = (el: HTMLElement, index: number) => {
      if (!el) return;
      
      const originalText = el.dataset.value || el.innerText;
      el.innerHTML = '';
      
      // Create spans for each character for individual animation
      originalText.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = '0';
        span.style.display = 'inline-block';
        span.style.transform = 'translateY(20px)';
        span.style.transition = `opacity 0.8s ease, transform 0.8s ease`;
        span.style.transitionDelay = `${index * 0.3 + i * 0.03}s`;
        
        // Handle spaces
        if (char === ' ') {
          span.innerHTML = '&nbsp;';
        }
        
        el.appendChild(span);
        
        // Trigger animation after a small delay
        setTimeout(() => {
          span.style.opacity = '1';
          span.style.transform = 'translateY(0)';
        }, 10);
      });
    };

    // Apply to hero text elements with a delay
    textElements.current.forEach((el, index) => {
      if (el) {
        el.dataset.value = el.innerText;
        // Start animation with a staggered delay
        setTimeout(() => animateText(el, index), index * 300);
      }
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

      {/* Hero Section - Updated with the requested gradient colors */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-gradient-to-br from-[#03173B] to-[#093383] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.2] [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.7),transparent)]"></div>
            <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] bg-blue-500/20 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] bg-indigo-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute top-[20%] right-[20%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="container relative z-10 px-4 text-center">
          <div className="inline-block animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="bg-white/10 backdrop-blur-md text-white text-sm font-medium px-4 py-1.5 rounded-full border border-white/20">
              Agence Marketing à Paris
            </span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight">
            <span ref={el => textElements.current[0] = el} className="block mb-2">
              Marketing Digital Expert
            </span>
            <span ref={el => textElements.current[1] = el} className="block">
              pour le Secteur du Bâtiment
            </span>
          </h1>
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.8s" }}>
            Nous générons des leads qualifiés et augmentons vos ventes grâce à des stratégies marketing digitales sur mesure.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "1s" }}>
            <Button asChild size="lg" className="px-8 py-7 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cta-pulse">
              <Link to="/contact">
                Démarrer un projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-7 text-base rounded-full bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 transition-all duration-300">
              <Link to="/services">
                Nos services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Découvrez notre approche
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Une présentation de notre méthode pour générer des leads qualifiés et développer votre entreprise.
              </p>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe 
                src="https://player.vimeo.com/video/1094103975?h=f4a439f1f7&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                className="w-full h-full"
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                title="Agence Goodleft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Des résultats concrets"
            subtitle="Nous aidons les entreprises du bâtiment à se développer grâce à des stratégies marketing performantes."
            centered
            chip="Nos chiffres"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard
              icon={<BarChart className="h-6 w-6" />}
              value="2M€+"
              label="Budget d'ads sous gestion"
            />
            <StatCard
              icon={<Users className="h-6 w-6" />}
              value="22"
              label="Clients satisfaits"
            />
            <StatCard
              icon={<MousePointerClick className="h-6 w-6" />}
              value="300 000+"
              label="Leads générés"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            title="Nos domaines d'expertise"
            subtitle="Nous offrons une gamme complète de services marketing digital adaptés au secteur du bâtiment."
            centered
            chip="Services"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Facebook className="h-6 w-6" />}
              title="Meta Ads"
              description="Campagnes Facebook et Instagram optimisées pour générer des leads qualifiés."
              link="/services#metaads"
              delay={100}
            />
            <ServiceCard
              icon={<Monitor className="h-6 w-6" />}
              title="Native Ads"
              description="Campagnes Taboola et Outbrain pour scaler votre acquisition avec des budgets jusqu'à 10K€/jour."
              link="/services#nativeads"
              delay={150}
            />
            <ServiceCard
              icon={<Zap className="h-6 w-6" />}
              title="TikTok Ads"
              description="Stratégies innovantes sur TikTok pour atteindre de nouvelles audiences."
              link="/services#tiktokads"
              delay={200}
            />
            <ServiceCard
              icon={<Target className="h-6 w-6" />}
              title="Google Ads"
              description="Campagnes AdWords pour capturer l'intention d'achat et maximiser le ROI."
              link="/services#googleads"
              delay={300}
            />
            <ServiceCard
              icon={<MessageSquare className="h-6 w-6" />}
              title="SMS & Mailing"
              description="Communication directe et personnalisée pour convertir et fidéliser."
              link="/services#messaging"
              delay={400}
            />
            <ServiceCard
              icon={<MousePointerClick className="h-6 w-6" />}
              title="Lead Generation"
              description="Stratégies complètes pour capturer des contacts qualifiés et prêts à convertir."
              link="/services#leadgen"
              delay={500}
            />
            <ServiceCard
              icon={<Gauge className="h-6 w-6" />}
              title="Automatisation"
              description="Optimisation des processus et du parcours client pour un meilleur taux de conversion."
              link="/services#automation"
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Industries que nous servons"
            subtitle="Notre expertise s'étend à plusieurs secteurs avec une spécialisation dans le bâtiment."
            centered
            chip="Expertises sectorielles"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <IndustryCard
              name="BTP"
              icon={<Building className="h-5 w-5" />}
              delay={100}
            />
            <IndustryCard
              name="Solaire"
              icon={<Sun className="h-5 w-5" />}
              delay={150}
            />
            <IndustryCard
              name="Immobilier"
              icon={<Home className="h-5 w-5" />}
              delay={200}
            />
            <IndustryCard
              name="Santé"
              icon={<Stethoscope className="h-5 w-5" />}
              delay={250}
            />
            <IndustryCard
              name="Dépannage"
              icon={<Wrench className="h-5 w-5" />}
              delay={300}
            />
            <IndustryCard
              name="Vêtements"
              icon={<ShoppingBag className="h-5 w-5" />}
              delay={350}
            />
            <IndustryCard
              name="E-commerce"
              icon={<ShoppingCart className="h-5 w-5" />}
              delay={400}
            />
            <IndustryCard
              name="Croissance"
              icon={<TrendingUp className="h-5 w-5" />}
              delay={450}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            title="Notre approche"
            subtitle="Un processus structuré pour assurer les meilleurs résultats pour votre entreprise."
            centered
            chip="Méthodologie"
          />

          <div className="relative mt-16">
            {/* Progress Line */}
            <div className="absolute left-[26px] top-0 bottom-0 w-[2px] bg-primary/20 md:left-1/2 md:-ml-[1px]"></div>

            {/* Steps */}
            <div className="space-y-12 md:space-y-0">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative ${
                    index % 2 === 0 
                      ? "md:pl-12 md:pr-0 md:ml-auto md:mr-[50%]" 
                      : "md:pr-12 md:pl-0 md:mr-auto md:ml-[50%]"
                  } pl-16 reveal`}
                >
                  <div className="absolute left-0 top-0 bg-primary text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold z-10 shadow-md md:left-[calc(0%-6px)] md:right-auto md:translate-x-0">
                    {index + 1}
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 md:max-w-md">
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Ce que nos clients disent"
            subtitle="Découvrez les retours de nos clients satisfaits par notre approche et nos résultats."
            centered
            chip="Témoignages"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TestimonialCard
              quote="Toujours au top. Les leads sont qualifiés."
              author="David T."
              delay={100}
            />
            <TestimonialCard
              quote="Sérieux et disponible."
              author="John L."
              delay={200}
            />
            <TestimonialCard
              quote="Je recommande fortement."
              author="David S."
              delay={300}
            />
            <TestimonialCard
              quote="Très bon investissement !"
              author="Jerome"
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Prêt à booster votre présence en ligne ?"
        description="Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à générer plus de leads et développer votre entreprise."
        buttonText="Démarrer votre projet"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
};

// Process steps data
const processSteps = [
  {
    title: "Analyse & Stratégie",
    description: "Nous analysons votre marché, votre concurrence et vos besoins pour élaborer une stratégie marketing adaptée.",
  },
  {
    title: "Création & Configuration",
    description: "Mise en place des campagnes, création de contenus impactants et configuration des outils d'automatisation.",
  },
  {
    title: "Lancement & Optimisation",
    description: "Démarrage des campagnes suivi d'une optimisation continue basée sur l'analyse des données.",
  },
  {
    title: "Analyses & Reporting",
    description: "Suivi détaillé des performances et reporting régulier pour mesurer l'efficacité et ajuster la stratégie.",
  },
];

export default Index;
