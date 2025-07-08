
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, TrendingUp, BarChart3, Users, Zap, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const GoogleAds = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600/10 to-primary/10">
        <div className="container text-center">
          <div className="inline-block animate-fade-in">
            <span className="bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-full">
              Google Ads SEA
            </span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Dominez Google avec nos campagnes 
            <span className="text-blue-600"> SEA performantes</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Captez vos prospects au moment exact où ils recherchent vos services. Des campagnes Google Ads optimisées pour maximiser votre ROI dans le secteur du bâtiment.
          </p>
          <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" asChild>
              <Link to="/contact">
                Lancer ma campagne Google Ads
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Notre fonctionnement */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Notre Méthode Google Ads Éprouvée</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Une approche complète pour transformer vos visiteurs en clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-3 rounded-xl w-fit mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Recherche de Mots-Clés</h3>
              <p className="text-muted-foreground">
                Identification des termes les plus recherchés par vos prospects dans le bâtiment. Analyse concurrentielle et opportunités de niche.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 p-3 rounded-xl w-fit mb-6">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Création de Campagnes</h3>
              <p className="text-muted-foreground">
                Structuration optimale de vos campagnes, groupes d'annonces et annonces. Rédaction d'annonces persuasives qui convertissent.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 p-3 rounded-xl w-fit mb-6">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Landing Pages</h3>
              <p className="text-muted-foreground">
                Création de pages d'atterrissage haute conversion spécialement conçues pour vos campagnes Google Ads.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 p-3 rounded-xl w-fit mb-6">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Ciblage Précis</h3>
              <p className="text-muted-foreground">
                Définition d'audiences qualifiées, ciblage géographique optimisé et exclusions stratégiques pour maximiser la performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-100 p-3 rounded-xl w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Tracking & Optimisation</h3>
              <p className="text-muted-foreground">
                Mise en place du tracking complet, suivi des conversions et optimisation continue basée sur les données.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-xl w-fit mb-6">
                <MessageCircle className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Reporting Détaillé</h3>
              <p className="text-muted-foreground">
                Rapports mensuels complets avec analyses des performances, recommandations et plan d'action pour le mois suivant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Suivi Client */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Suivi Client Exceptionnel</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Vous ne serez jamais laissé dans le noir. Un accompagnement personnalisé tout au long de votre campagne.
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <MessageCircle className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Groupe WhatsApp Dédié</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Accès direct à votre expert Google Ads via un groupe WhatsApp privé. 
                Posez vos questions, recevez des updates en temps réel et bénéficiez de conseils personnalisés.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Réponse rapide</h4>
                    <p className="text-sm text-muted-foreground">Réponse sous 2h en moyenne</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Updates quotidiens</h4>
                    <p className="text-sm text-muted-foreground">Suivi des performances</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Conseils personnalisés</h4>
                    <p className="text-sm text-muted-foreground">Stratégies adaptées</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Prêt à dominer Google avec vos annonces ?"
        description="Contactez-nous pour une analyse gratuite de votre potentiel Google Ads et découvrez comment multiplier vos leads qualifiés."
        buttonText="Démarrer ma campagne"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default GoogleAds;
