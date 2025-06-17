
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary/10 to-blue-500/10">
        <div className="container text-center">
          <div className="inline-block animate-fade-in">
            <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full">
              Contactez-nous
            </span>
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight animate-fade-in md:leading-snug" style={{ animationDelay: "0.2s", wordBreak: "keep-all", hyphens: "auto" }}>
            Parlons de votre projet
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Nous sommes là pour répondre à vos questions et vous aider à développer votre entreprise grâce à nos solutions marketing.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* WhatsApp Priority Section */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-8 mb-12 text-center animate-fade-in">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Contactez-nous sur WhatsApp</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Pour une réponse rapide et personnalisée, contactez-nous directement sur WhatsApp. 
                Nous vous répondons généralement dans les 30 minutes pendant nos heures d'ouverture.
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=972586841001&text=Bonjour, je vous contacte depuis votre site web Goodleft.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Démarrer une conversation
                </Button>
              </a>
            </div>

            {/* Contact Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center bg-white rounded-xl p-6 border border-gray-100 shadow-sm animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="bg-primary/10 p-4 rounded-lg text-primary mx-auto w-fit mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Téléphone</h3>
                <a
                  href="tel:+33782979479"
                  className="text-primary hover:underline text-lg font-medium"
                >
                  +33 7 82 97 94 79
                </a>
              </div>

              <div className="text-center bg-white rounded-xl p-6 border border-gray-100 shadow-sm animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="bg-primary/10 p-4 rounded-lg text-primary mx-auto w-fit mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <a
                  href="mailto:contact@goodleft.com"
                  className="text-primary hover:underline text-lg font-medium"
                >
                  contact@goodleft.com
                </a>
              </div>

              <div className="text-center bg-white rounded-xl p-6 border border-gray-100 shadow-sm animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="bg-primary/10 p-4 rounded-lg text-primary mx-auto w-fit mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Adresse</h3>
                <p className="text-muted-foreground">
                  60 rue François 1er<br />
                  75008 Paris
                </p>
              </div>
            </div>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Opening Hours */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <h3 className="font-semibold text-xl mb-6">Horaires d'ouverture</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Lundi - Vendredi</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Samedi</span>
                    <span className="font-medium">Sur rendez-vous</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Dimanche</span>
                    <span className="font-medium">Fermé</span>
                  </div>
                </div>
              </div>

              {/* Quick Response */}
              <div className="bg-gradient-to-br from-primary/10 to-blue-500/5 rounded-xl p-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <h3 className="font-semibold text-xl mb-4">Réponse rapide garantie</h3>
                <p className="text-muted-foreground mb-6">
                  Nous nous engageons à vous répondre dans les 24 heures ouvrées suivant votre demande, et souvent beaucoup plus rapidement sur WhatsApp.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MessageCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm">WhatsApp: 30 minutes</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <span className="text-sm">Email: 24 heures</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <span className="text-sm">Téléphone: Immédiat</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <h3 className="text-2xl font-bold mb-4">Prêt à développer votre entreprise ?</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contactez-nous dès maintenant pour discuter de vos objectifs et découvrir comment nous pouvons vous aider.
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=972586841001&text=Bonjour, je souhaite discuter de mes objectifs marketing avec votre équipe.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Commencer maintenant
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
