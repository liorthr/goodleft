
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Users, Target, TrendingUp, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const MetaAds = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="container text-center">
          <div className="inline-block animate-fade-in">
            <span className="bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-full">
              Meta Ads Expert
            </span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Dominez Facebook & Instagram
            <span className="text-blue-600"> dans le bâtiment</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Générez des leads qualifiés avec nos campagnes Meta Ads optimisées pour les entreprises du bâtiment. Ciblage précis et créatifs performants.
          </p>
          <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" asChild>
              <Link to="/contact">
                Lancer mes campagnes Meta
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Plateformes */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Facebook & Instagram Maîtrisés</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Exploitez le potentiel des 2 plateformes sociales les plus puissantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Facebook className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold">Facebook Ads</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1">✓</span>
                  <span>Ciblage des propriétaires immobiliers 45-65 ans</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1">✓</span>
                  <span>Campagnes de génération de leads avec formulaires intégrés</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1">✓</span>
                  <span>Retargeting des visiteurs de votre site web</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-blue-100 text-blue-600 p-1 rounded-full mt-1">✓</span>
                  <span>Audiences similaires basées sur vos meilleurs clients</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Instagram className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold">Instagram Ads</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="bg-purple-100 text-purple-600 p-1 rounded-full mt-1">✓</span>
                  <span>Stories & Reels pour toucher une audience plus jeune</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-purple-100 text-purple-600 p-1 rounded-full mt-1">✓</span>
                  <span>Visuels avant/après de vos réalisations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-purple-100 text-purple-600 p-1 rounded-full mt-1">✓</span>
                  <span>Campagnes de notoriété avec contenu engageant</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-purple-100 text-purple-600 p-1 rounded-full mt-1">✓</span>
                  <span>Shopping ads pour vos produits/services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Process */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Notre Approche Meta Ads</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Chaque étape est optimisée pour maximiser vos conversions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-3 rounded-xl w-fit mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Recherche d'Audience</h3>
              <p className="text-muted-foreground">
                Identification précise de vos personas idéaux dans le secteur du bâtiment avec analyse comportementale approfondie.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 p-3 rounded-xl w-fit mb-6">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Création de Visuels</h3>
              <p className="text-muted-foreground">
                Design de visuels accrocheurs et vidéos engageantes spécialement conçus pour le secteur du bâtiment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 p-3 rounded-xl w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Landing Pages</h3>
              <p className="text-muted-foreground">
                Pages d'atterrissage mobile-first optimisées pour la conversion avec formulaires simplifiés.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 p-3 rounded-xl w-fit mb-6">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Ciblage Multi-Niveaux</h3>
              <p className="text-muted-foreground">
                Stratégie de ciblage en entonnoir : cold audiences, warm audiences, et retargeting pour maximiser le ROI.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-100 p-3 rounded-xl w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Tracking Avancé</h3>
              <p className="text-muted-foreground">
                Pixel Facebook optimisé, événements de conversion personnalisés et attribution multi-appareils.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-xl w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Optimisation Continue</h3>
              <p className="text-muted-foreground">
                Tests A/B permanents sur les créatifs, audiences et landing pages pour améliorer constamment les performances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Suivi Client */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Suivi Personnalisé</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Un accompagnement quotidien pour optimiser vos campagnes Meta
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <MessageCircle className="h-12 w-12 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Groupe WhatsApp Dédié</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Communication directe avec votre expert Meta Ads. Recevez les updates de performance, 
                les nouveaux créatifs testés et les optimisations en temps réel.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Alertes performance</h4>
                    <p className="text-sm text-muted-foreground">Notifications instantanées</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Nouveaux créatifs</h4>
                    <p className="text-sm text-muted-foreground">Tests A/B réguliers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Conseils stratégiques</h4>
                    <p className="text-sm text-muted-foreground">Recommandations personnalisées</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Prêt à exploser sur Facebook & Instagram ?"
        description="Contactez-nous pour une stratégie Meta Ads personnalisée et commencez à générer des leads qualifiés dès demain."
        buttonText="Lancer mes campagnes"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default MetaAds;
