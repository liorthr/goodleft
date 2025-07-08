
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Target, Users, BarChart3, Zap, MessageCircle, Heart, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const Emailing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-purple-600/10 to-primary/10">
        <div className="container text-center">
          <div className="inline-block animate-fade-in">
            <span className="bg-purple-100 text-purple-600 text-sm font-medium px-4 py-1.5 rounded-full">
              Emailing Marketing
            </span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Transformez vos emails en 
            <span className="text-purple-600"> machine à leads</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Retargeting email intelligent et prospection B2B/B2C performante. Reconnectez avec vos prospects et convertissez vos visiteurs en clients fidèles.
          </p>
          <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" asChild>
              <Link to="/contact">
                Lancer ma stratégie emailing
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Notre fonctionnement */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Notre Approche Emailing Complète</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              De la segmentation à la conversion, nous optimisons chaque étape de votre stratégie emailing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 p-3 rounded-xl w-fit mb-6">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Retargeting Email</h3>
              <p className="text-muted-foreground">
                Récupération des visiteurs non-convertis via des campagnes de retargeting personnalisées. Relance automatique et séquences optimisées.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-3 rounded-xl w-fit mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Prospection B2B/B2C</h3>
              <p className="text-muted-foreground">
                Démarchage ciblé avec bases de données qualifiées. Séquences de prospection personnalisées pour le secteur du bâtiment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 p-3 rounded-xl w-fit mb-6">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Création de Templates</h3>
              <p className="text-muted-foreground">
                Design d'emails responsive et attractifs. Templates optimisés pour mobile et desktop avec taux d'ouverture maximisé.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 p-3 rounded-xl w-fit mb-6">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Segmentation Avancée</h3>
              <p className="text-muted-foreground">
                Division de vos listes selon le comportement, localisation et intérêts. Personnalisation poussée pour chaque segment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-100 p-3 rounded-xl w-fit mb-6">
                <BarChart3 className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Automation & A/B Testing</h3>
              <p className="text-muted-foreground">
                Mise en place de séquences automatisées et tests A/B continus pour optimiser les performances de vos campagnes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-xl w-fit mb-6">
                <Eye className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Tracking & Analytics</h3>
              <p className="text-muted-foreground">
                Suivi détaillé des ouvertures, clics et conversions. Rapports complets avec recommandations d'optimisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Spécialisés */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Nos Spécialités Emailing</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <Target className="h-12 w-12 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Retargeting B2C</h3>
                <p className="text-muted-foreground mb-4">
                  Récupération des particuliers intéressés par vos services de rénovation, construction ou aménagement.
                </p>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Abandon de devis</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Visiteurs non-convertis</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Nurturing long terme</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <Users className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Prospection B2B</h3>
                <p className="text-muted-foreground mb-4">
                  Démarchage ciblé des professionnels, syndics, promoteurs et collectivités du secteur du bâtiment.
                </p>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Bases qualifiées</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Cold emailing</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Suivi personnalisé</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suivi Client */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Suivi Client Dédié</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Un accompagnement personnalisé avec reporting détaillé et optimisation continue de vos campagnes emailing.
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <MessageCircle className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Groupe WhatsApp Dédié</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Communication directe avec votre expert emailing. Suivi en temps réel des performances et conseils personnalisés.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Support réactif</h4>
                    <p className="text-sm text-muted-foreground">Réponse sous 1h</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Reporting hebdo</h4>
                    <p className="text-sm text-muted-foreground">Analyses détaillées</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Optimisation continue</h4>
                    <p className="text-sm text-muted-foreground">Amélioration des résultats</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Prêt à booster vos conversions par email ?"
        description="Contactez-nous pour une analyse gratuite de votre potentiel emailing et découvrez comment transformer vos emails en véritable outil de croissance."
        buttonText="Démarrer ma stratégie emailing"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default Emailing;
