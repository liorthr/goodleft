
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Mentions légales</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Informations légales</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Éditeur du site</h3>
                <p className="text-muted-foreground mb-2"><strong>Raison sociale :</strong> Goodleft</p>
                <p className="text-muted-foreground mb-2"><strong>Adresse :</strong> 60 rue François 1er, 75008 Paris</p>
                <p className="text-muted-foreground mb-2"><strong>Email :</strong> contact@goodleft.com</p>
                <p className="text-muted-foreground mb-2"><strong>Téléphone :</strong> +33 7 82 97 94 79</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Hébergement</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ce site est hébergé par un prestataire d'hébergement web professionnel, garantissant la disponibilité et la sécurité des données.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Propriété intellectuelle</h2>
              <p className="text-muted-foreground leading-relaxed">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Responsabilité</h2>
              <p className="text-muted-foreground leading-relaxed">
                Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions. Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de bien vouloir le signaler par email, à l'adresse contact@goodleft.com, en décrivant le problème de la manière la plus précise possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Liens hypertextes</h2>
              <p className="text-muted-foreground leading-relaxed">
                Les liens hypertextes mis en place dans le cadre du présent site web en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Goodleft.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Collecte et traitement des données</h2>
              <p className="text-muted-foreground leading-relaxed">
                Conformément aux dispositions de la loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, tout utilisateur dispose d'un droit d'accès, de rectification et d'opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d'une preuve d'identité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Droit applicable</h2>
              <p className="text-muted-foreground leading-relaxed">
                Tant le présent site que les modalités et conditions de son utilisation sont régies par le droit français, quel que soit le lieu d'utilisation. En cas de contestation éventuelle, et après l'échec de toute tentative de recherche d'une solution amiable, les tribunaux français seront seuls compétents pour connaître de ce litige.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à :
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="font-medium">Goodleft</p>
                <p>60 rue François 1er, 75008 Paris</p>
                <p>Email : contact@goodleft.com</p>
                <p>Téléphone : +33 7 82 97 94 79</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
