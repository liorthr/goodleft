
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Linkedin, Users, TrendingUp, Target, Zap, MessageCircle, Crown, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const LinkedIn = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600/10 to-primary/10">
        <div className="container text-center">
          <div className="inline-block animate-fade-in">
            <span className="bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1.5 rounded-full">
              Stratégie LinkedIn B2B
            </span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Accompagnement LinkedIn pour 
            <span className="text-blue-600"> CEO & Dirigeants</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Stratégie LinkedIn premium pour CEO et PDG du secteur bâtiment. Développez votre personal branding et générez plus de leads B2B qualifiés.
          </p>
          <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" asChild>
              <Link to="/contact">
                Développer ma présence LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pourquoi LinkedIn pour les Dirigeants */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Pourquoi LinkedIn est Essentiel pour les Dirigeants</h2>
            <p className="text-lg text-muted-foreground mb-8">
              LinkedIn est devenu LE réseau de référence pour les décideurs. 89% des dirigeants B2B utilisent LinkedIn pour prendre leurs décisions d'achat.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Crown className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Crédibilité Renforcée</h3>
                <p className="text-muted-foreground text-sm">
                  Établissez votre expertise et renforcez la confiance de vos prospects B2B
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Prospection Ciblée</h3>
                <p className="text-muted-foreground text-sm">
                  Atteignez directement les décideurs de votre secteur d'activité
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">ROI Mesurable</h3>
                <p className="text-muted-foreground text-sm">
                  Génération de leads qualifiés avec un coût d'acquisition optimisé
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Accompagnement */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Notre Accompagnement LinkedIn Premium</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Une stratégie sur-mesure pour propulser votre personal branding et votre génération de leads
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-3 rounded-xl w-fit mb-6">
                <Linkedin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Optimisation de Profil</h3>
              <p className="text-muted-foreground">
                Refonte complète de votre profil LinkedIn avec photo professionnelle, bannière sur-mesure et description impactante.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 p-3 rounded-xl w-fit mb-6">
                <Briefcase className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Stratégie de Contenu</h3>
              <p className="text-muted-foreground">
                Création d'un planning éditorial avec contenus d'expertise, cas clients et actualités secteur bâtiment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 p-3 rounded-xl w-fit mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Développement Réseau</h3>
              <p className="text-muted-foreground">
                Stratégie de connexion ciblée avec les décideurs : promoteurs, syndics, maîtres d'ouvrage, collectivités.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 p-3 rounded-xl w-fit mb-6">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Prospection Personnalisée</h3>
              <p className="text-muted-foreground">
                Messages de prospection sur-mesure et séquences de suivi pour transformer vos connexions en rendez-vous.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-100 p-3 rounded-xl w-fit mb-6">
                <Zap className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Automation Intelligente</h3>
              <p className="text-muted-foreground">
                Mise en place d'outils d'automatisation respectueux des conditions LinkedIn pour maximiser votre portée.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-xl w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Formation & Coaching</h3>
              <p className="text-muted-foreground">
                Sessions de coaching personnalisées pour maîtriser les bonnes pratiques et développer votre influence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Résultats Attendus */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Résultats de nos Accompagnements</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Nos clients dirigeants obtiennent des résultats concrets en quelques mois
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-4">+300%</div>
                <h3 className="text-xl font-semibold mb-2">Visibilité de Profil</h3>
                <p className="text-muted-foreground">Augmentation moyenne des vues de profil et de l'engagement</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold text-green-600 mb-4">15-25</div>
                <h3 className="text-xl font-semibold mb-2">Leads Qualifiés/Mois</h3>
                <p className="text-muted-foreground">Nouveaux prospects B2B générés mensuellement</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Ce que disent nos clients CEO</h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-muted-foreground italic mb-2">
                    "En 6 mois, LinkedIn est devenu notre principal canal d'acquisition B2B. Je génère maintenant 20 RDV qualifiés par mois."
                  </p>
                  <p className="text-sm font-semibold">- PDG, Entreprise de Construction</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-muted-foreground italic mb-2">
                    "L'accompagnement m'a permis de développer mon personal branding. Je suis maintenant reconnu comme expert dans ma région."
                  </p>
                  <p className="text-sm font-semibold">- CEO, Bureau d'études</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suivi Client */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Accompagnement Personnel Dédié</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Un coaching personnalisé avec suivi quotidien et stratégie évolutive adaptée à vos objectifs business.
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <MessageCircle className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Groupe WhatsApp VIP</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Accès direct à votre consultant LinkedIn expert. Conseils stratégiques, validation de contenus et coaching en temps réel.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Coaching quotidien</h4>
                    <p className="text-sm text-muted-foreground">Conseils personnalisés</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Validation contenus</h4>
                    <p className="text-sm text-muted-foreground">Avant publication</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Reporting hebdo</h4>
                    <p className="text-sm text-muted-foreground">KPIs & optimisations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Prêt à développer votre influence LinkedIn ?"
        description="Contactez-nous pour un audit gratuit de votre profil LinkedIn et découvrez comment multiplier vos opportunités B2B."
        buttonText="Démarrer mon coaching LinkedIn"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default LinkedIn;
