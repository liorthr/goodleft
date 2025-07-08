
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, FileImage, Video, Target, TrendingUp, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const NativeAds = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-purple-600/10 to-indigo-600/10">
        <div className="container text-center">
          <div className="inline-block animate-fade-in">
            <span className="bg-purple-100 text-purple-600 text-sm font-medium px-4 py-1.5 rounded-full">
              Native Ads Premium
            </span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Scalez votre acquisition avec
            <span className="text-purple-600"> Taboola & Outbrain</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Le levier le plus puissant pour scaler votre acquisition client. Capacité de dépenses jusqu'à 10K€/jour avec des audiences qualifiées dans le bâtiment.
          </p>
          <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" asChild>
              <Link to="/contact">
                Scaler mon acquisition
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pourquoi Native Ads */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Pourquoi les Native Ads ?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Le format publicitaire le plus naturel et efficace pour convertir vos prospects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-purple-600">10K€</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Budget Élevé</h3>
              <p className="text-muted-foreground">
                Capacité de dépenser jusqu'à 10 000€ par jour pour scaler rapidement votre business
              </p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-indigo-600">65+</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Audience Senior</h3>
              <p className="text-muted-foreground">
                Ciblage précis des audiences 65+ ans, parfait pour les secteurs bâtiment, santé et finance
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-blue-600">+300%</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">ROI Supérieur</h3>
              <p className="text-muted-foreground">
                Taux de conversion supérieur grâce au format natif non-intrusif
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Process */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Notre Process Native Ads</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              De la création de contenu à l'optimisation, nous gérons chaque étape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 p-3 rounded-xl w-fit mb-6">
                <FileImage className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Création d'Images</h3>
              <p className="text-muted-foreground">
                Visuels accrocheurs optimisés pour chaque plateforme native. Tests A/B continus pour maximiser le CTR.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-100 p-3 rounded-xl w-fit mb-6">
                <Video className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Vidéos UGC</h3>
              <p className="text-muted-foreground">
                Création de contenus vidéo authentiques type "User Generated Content" pour maximiser l'engagement et la confiance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-3 rounded-xl w-fit mb-6">
                <Monitor className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Landing Pages</h3>
              <p className="text-muted-foreground">
                Pages d'atterrissage haute conversion adaptées au trafic native ads avec parcours utilisateur optimisé.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 p-3 rounded-xl w-fit mb-6">
                <FileImage className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Advertorials</h3>
              <p className="text-muted-foreground">
                Articles publicitaires natifs qui ressemblent à du contenu éditorial pour une approche non-intrusive.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 p-3 rounded-xl w-fit mb-6">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Ciblage Avancé</h3>
              <p className="text-muted-foreground">
                Segmentation précise par âge, intérêts et comportements pour toucher vos prospects idéaux au bon moment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-xl w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Tracking & Optimisation</h3>
              <p className="text-muted-foreground">
                Suivi pixel parfait, attribution multi-touch et optimisation quotidienne des campagnes pour maximiser le ROAS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Suivi Client */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Accompagnement Premium</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Un suivi quotidien de vos campagnes natives pour une performance optimale
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-purple-100 p-4 rounded-full">
                  <MessageCircle className="h-12 w-12 text-purple-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Groupe WhatsApp Dédié</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Communication directe avec votre expert Native Ads. Suivi en temps réel de vos campagnes 
                Taboola et Outbrain avec optimisations immédiates.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg mt-1">
                    <span className="text-purple-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Suivi quotidien</h4>
                    <p className="text-sm text-muted-foreground">Performance & optimisations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg mt-1">
                    <span className="text-purple-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Tests créatifs</h4>
                    <p className="text-sm text-muted-foreground">Nouveaux visuels réguliers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg mt-1">
                    <span className="text-purple-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Scaling intelligent</h4>
                    <p className="text-sm text-muted-foreground">Montée en budget progressive</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Prêt à scaler avec les Native Ads ?"
        description="Découvrez comment multiplier votre acquisition client avec des budgets élevés sur Taboola et Outbrain."
        buttonText="Lancer ma campagne native"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default NativeAds;
