
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, TrendingUp, Users, Zap, MessageCircle, BarChart3, Globe, Smartphone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

const Israel = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600/10 to-primary/10">
        <div className="container text-center">
          <div className="inline-block animate-fade-in">
            <span className="bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-full">
              🇮🇱 Agence Digitale Israël
            </span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Goodleft : Expert en 
            <span className="text-primary"> Génération de Leads</span> en Israël
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Spécialistes en publicité digitale multi-plateformes : Taboola, Google Ads, Meta, TikTok Ads et automatisations marketing. Générez plus de leads qualifiés pour votre business israélien.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" asChild>
              <Link to="/contact">
                Générer plus de leads
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+972586841001" className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                +972 58 68 41 001
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Nos Plateformes d'Expertise */}
      <section className="py-20">
        <div className="container">
          <SectionHeading
            title="Nos Plateformes d'Expertise"
            subtitle="Maîtrise complète des canaux publicitaires les plus performants du marché israélien"
            centered
            chip="Multi-Plateformes"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-500">
              <div className="bg-orange-100 p-3 rounded-xl w-fit mb-6">
                <Globe className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Taboola Ads</h3>
              <p className="text-muted-foreground">
                Publicité native premium sur les plus grands sites d'actualités et médias israéliens. Engagement maximal avec du contenu natif.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500">
              <div className="bg-blue-100 p-3 rounded-xl w-fit mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Google Ads</h3>
              <p className="text-muted-foreground">
                Dominez les recherches Google en hébreu et anglais. Campagnes SEA optimisées pour le marché local israélien.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
              <div className="bg-blue-100 p-3 rounded-xl w-fit mb-6">
                <Users className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Meta Ads</h3>
              <p className="text-muted-foreground">
                Facebook et Instagram Ads ciblés sur les audiences israéliennes. Créatifs adaptés aux codes culturels locaux.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-pink-500">
              <div className="bg-pink-100 p-3 rounded-xl w-fit mb-6">
                <Smartphone className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">TikTok Ads</h3>
              <p className="text-muted-foreground">
                Touchez la jeune génération israélienne avec des campagnes TikTok créatives et engageantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Services Complémentaires */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container">
          <SectionHeading
            title="Services Complémentaires"
            subtitle="Une approche 360° pour maximiser vos conversions"
            centered
          />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 p-3 rounded-xl w-fit mb-6">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Marketing Automation</h3>
              <p className="text-muted-foreground">
                Séquences automatisées de nurturing et retargeting pour convertir vos prospects en clients fidèles.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 p-3 rounded-xl w-fit mb-6">
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Analytics & Tracking</h3>
              <p className="text-muted-foreground">
                Suivi précis des performances avec des tableaux de bord personnalisés et reporting détaillé.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-xl w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Optimisation Continue</h3>
              <p className="text-muted-foreground">
                Tests A/B permanents et optimisations basées sur les données pour améliorer votre ROI constamment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi Choisir Goodleft */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <SectionHeading
              title="Pourquoi Choisir Goodleft pour Israël ?"
              subtitle="Une expertise unique du marché israélien et des plateformes digitales"
              centered
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <span className="text-primary font-bold text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expertise Multi-Plateformes</h3>
                  <p className="text-muted-foreground">Maîtrise technique avancée de Taboola, Google, Meta et TikTok avec stratégies adaptées à chaque canal.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <span className="text-primary font-bold text-xl">🇮🇱</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Connaissance du Marché Local</h3>
                  <p className="text-muted-foreground">Compréhension approfondie des spécificités culturelles et comportementales du marché israélien.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <span className="text-primary font-bold text-xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Résultats Mesurables</h3>
                  <p className="text-muted-foreground">Approche data-driven avec KPIs clairs et reporting transparent pour un ROI optimisé.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-blue-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Contact Direct Israël</h3>
              <div className="text-center space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="font-semibold text-lg">📞 Ligne Directe</p>
                  <a href="tel:+972586841001" className="text-2xl font-bold text-primary hover:underline">
                    +972 58 68 41 001
                  </a>
                </div>
                <p className="text-muted-foreground">
                  Disponible en hébreu, anglais et français
                </p>
                <Button size="lg" className="w-full" asChild>
                  <a href="tel:+972586841001">
                    Appeler maintenant
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Prêt à Booster vos Leads en Israël ?"
        description="Contactez nos experts dès aujourd'hui pour une stratégie personnalisée multi-plateformes et générez plus de leads qualifiés pour votre business."
        buttonText="Démarrer ma stratégie"
        buttonLink="/contact"
        className="bg-gradient-to-r from-primary/5 to-blue-50"
      />

      <Footer />
    </div>
  );
};

export default Israel;
