
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Search, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Filter posts based on search term
    if (searchTerm.trim() === "") {
      setFilteredPosts(blogPosts);
    } else {
      const filtered = blogPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  }, [searchTerm]);

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
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary/10 to-blue-500/10">
        <div className="container text-center">
          <div className="inline-block animate-fade-in">
            <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full">
              Ressources & Actualités
            </span>
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Blog
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Découvrez nos derniers articles, conseils et stratégies pour optimiser votre marketing digital.
          </p>
          
          {/* Search Bar */}
          <div className="mt-10 max-w-md mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Rechercher un article..."
                className="pl-10 py-6 rounded-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 reveal">
              <div className="lg:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <div className="inline-block bg-primary/10 text-primary font-medium text-sm px-3 py-1 rounded-full mb-4">
                  {featuredPost.category}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{featuredPost.date}</span>
                </div>
                <Button asChild className="self-start">
                  <Link to={`/blog/${featuredPost.slug}`}>
                    Lire l'article
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Tous les articles"
            subtitle="Explorez nos dernières publications sur le marketing digital et les stratégies de lead generation."
            chip="Articles récents"
          />

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogPostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Aucun article ne correspond à votre recherche. Essayez avec d'autres termes.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Besoin d'une stratégie marketing sur mesure ?"
        description="Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider à générer plus de leads."
        buttonText="Contactez-nous"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
};

const BlogPostCard = ({ post, index }: { post: BlogPost; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-500 card-hover ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-2" />
            <span>{post.date}</span>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link to={`/blog/${post.slug}`}>
              Lire
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

// Types
interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  date: string;
  image: string;
  category: string;
  author?: string;
}

// Featured post
const featuredPost: BlogPost = {
  id: 1,
  title: "Achat ou génération de leads BTP : quelle stratégie est la plus rentable en 2025 ?",
  slug: "achat-ou-generation-leads-btp",
  excerpt: "Découvrez quelle approche est la plus avantageuse financièrement pour votre entreprise selon sa maturité et sa capacité de trésorerie.",
  date: "15 avril 2025",
  image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&h=800",
  category: "Stratégie Lead"
};

// Updated blog posts with new content
const blogPosts: BlogPost[] = [
  {
    id: 2,
    title: "Informations essentielles d'un lead photovoltaïque : ce que vous devez savoir",
    slug: "informations-essentielles-lead-photovoltaique",
    excerpt: "Quelles données collecter pour qualifier efficacement vos leads panneaux solaires et optimiser votre taux de conversion.",
    date: "10 avril 2025",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&h=800",
    category: "Leads PV"
  },
  {
    id: 3,
    title: "Guide complet des leads disponibles dans le secteur du bâtiment",
    slug: "guide-complet-leads-batiment",
    excerpt: "Panorama des différentes opportunités de leads dans le secteur de la construction, tant pour le B2C que pour le B2B.",
    date: "5 avril 2025",
    image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1200&h=800",
    category: "Leads BTP"
  },
  {
    id: 4,
    title: "Prix d'un lead photovoltaïque en 2025 : analyse des tarifs par région",
    slug: "prix-lead-photovoltaique-2025",
    excerpt: "Combien coûte réellement un lead qualifié dans le secteur du photovoltaïque ? Découvrez les tarifs actuels selon les sources et zones géographiques.",
    date: "28 mars 2025",
    image: "https://images.unsplash.com/photo-1611365892117-00d61431f638?auto=format&fit=crop&w=1200&h=800",
    category: "Tarification"
  },
  {
    id: 5,
    title: "Les meilleurs canaux d'acquisition de leads pour les professionnels du bâtiment",
    slug: "meilleurs-canaux-acquisition-leads-batiment",
    excerpt: "Analyse comparative des performances entre Google, Facebook et le Native Advertising pour la génération de leads qualifiés.",
    date: "20 mars 2025",
    image: "https://images.unsplash.com/photo-1544381751-432ecff04aa1?auto=format&fit=crop&w=1200&h=800",
    category: "Marketing Digital"
  },
  {
    id: 6,
    title: "Panorama des leads produits dans le secteur de la rénovation énergétique",
    slug: "panorama-leads-produits-renovation-energetique",
    excerpt: "Du photovoltaïque à l'isolation thermique : tour d'horizon des types de leads disponibles pour les professionnels du bâtiment.",
    date: "15 mars 2025",
    image: "https://images.unsplash.com/photo-1523878288860-7ad281611901?auto=format&fit=crop&w=1200&h=800",
    category: "Produits BTP"
  },
  {
    id: 7,
    title: "Prix d'un lead pompe à chaleur en 2025 : tendances et perspectives",
    slug: "prix-lead-pompe-chaleur-2025",
    excerpt: "Analyse détaillée des tarifs actuels pour l'acquisition de leads qualifiés dans le secteur des pompes à chaleur.",
    date: "10 mars 2025",
    image: "https://images.unsplash.com/photo-1643725173053-ed68676534e9?auto=format&fit=crop&w=1200&h=800",
    category: "PAC"
  },
  {
    id: 8,
    title: "Coût des leads isolation thermique extérieure selon les régions françaises",
    slug: "cout-leads-isolation-thermique-exterieure-regions",
    excerpt: "Découvrez les variations de prix des leads ITE en fonction des zones géographiques et comment optimiser votre budget.",
    date: "5 mars 2025",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&h=800",
    category: "ITE"
  },
  {
    id: 9,
    title: "Goodleft : N°1 des fournisseurs de leads photovoltaïques en France",
    slug: "goodleft-meilleur-fournisseur-leads-photovoltaiques",
    excerpt: "Pourquoi Goodleft s'impose comme la référence incontournable pour l'acquisition de leads qualifiés dans le secteur du photovoltaïque.",
    date: "28 février 2025",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&h=800",
    category: "Fournisseurs"
  },
  {
    id: 10,
    title: "Les meilleurs fournisseurs de leads PAC pour les installateurs",
    slug: "meilleurs-fournisseurs-leads-pac-installateurs",
    excerpt: "Analyse comparative des principaux acteurs du marché de la génération de leads dans le secteur des pompes à chaleur.",
    date: "20 février 2025",
    image: "https://images.unsplash.com/photo-1616362258595-28a7d3982d95?auto=format&fit=crop&w=1200&h=800",
    category: "PAC"
  },
  {
    id: 11,
    title: "Le leader du marché des leads ITE en France : Goodleft",
    slug: "leader-marche-leads-ite-france-goodleft",
    excerpt: "Pourquoi Goodleft se distingue comme le fournisseur de référence pour les leads d'isolation thermique extérieure.",
    date: "15 février 2025",
    image: "https://images.unsplash.com/photo-1614587396292-8e4bac4fa6eb?auto=format&fit=crop&w=1200&h=800",
    category: "ITE"
  },
  {
    id: 12,
    title: "LinkedIn : la plateforme incontournable pour générer des leads B2B dans le bâtiment",
    slug: "linkedin-plateforme-incontournable-leads-b2b-batiment",
    excerpt: "Comment exploiter efficacement LinkedIn pour développer votre portefeuille clients professionnels dans le secteur de la construction.",
    date: "10 février 2025",
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&w=1200&h=800",
    category: "B2B"
  },
  {
    id: 13,
    title: "Leads pro qualifiés dans le BTP : pourquoi choisir Goodleft ?",
    slug: "leads-pro-qualifies-btp-pourquoi-choisir-goodleft",
    excerpt: "Les atouts qui font de Goodleft le partenaire idéal pour l'acquisition de leads professionnels qualifiés dans le secteur du bâtiment.",
    date: "5 février 2025",
    image: "https://images.unsplash.com/photo-1512187849-463fdb898f21?auto=format&fit=crop&w=1200&h=800",
    category: "B2B"
  },
  {
    id: 14,
    title: "Stratégies nationales vs départementales : quelle approche pour les leads photovoltaïques ?",
    slug: "strategies-nationales-departementales-leads-photovoltaiques",
    excerpt: "Pourquoi une stratégie à l'échelle nationale s'avère plus efficace pour générer des leads qualifiés dans le secteur du photovoltaïque.",
    date: "28 janvier 2025",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&h=800",
    category: "Stratégie"
  },
  {
    id: 15,
    title: "Taux de transformation dans le photovoltaïque : benchmarks et bonnes pratiques",
    slug: "taux-transformation-photovoltaique-benchmarks",
    excerpt: "Quels sont les taux de transformation idéaux pour les leads PV et comment optimiser vos performances commerciales.",
    date: "20 janvier 2025",
    image: "https://images.unsplash.com/photo-1559302995-f54c10772d6f?auto=format&fit=crop&w=1200&h=800",
    category: "Conversion"
  },
  {
    id: 16,
    title: "Optimiser votre taux de conversion pour les leads ITE et PAC",
    slug: "optimiser-taux-conversion-leads-ite-pac",
    excerpt: "Analyse des performances moyennes et conseils pratiques pour maximiser vos taux de transformation dans l'isolation et les pompes à chaleur.",
    date: "15 janvier 2025",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&h=800",
    category: "Conversion"
  },
  {
    id: 17,
    title: "Goodleft : votre source de leads calorifugeage B2B de qualité",
    slug: "goodleft-source-leads-calorifugeage-b2b",
    excerpt: "Découvrez les solutions spécialisées de Goodleft pour acquérir des leads qualifiés dans le secteur du calorifugeage industriel.",
    date: "10 janvier 2025",
    image: "https://images.unsplash.com/photo-1581094788433-4bcd3e11b711?auto=format&fit=crop&w=1200&h=800",
    category: "Calorifugeage"
  },
  {
    id: 18,
    title: "Leads isolation à prix compétitif en Espagne : l'expertise Goodleft",
    slug: "leads-isolation-prix-competitif-espagne",
    excerpt: "Comment Goodleft vous permet d'accéder à des leads qualifiés à partir de 16€ sur le marché espagnol de l'isolation.",
    date: "5 janvier 2025",
    image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=1200&h=800",
    category: "International"
  },
  {
    id: 19,
    title: "Les avantages de collaborer avec une agence spécialisée dans les leads BTP",
    slug: "avantages-collaboration-agence-specialisee-leads-btp",
    excerpt: "Pourquoi faire appel à des experts du secteur avec plus de 7 ans d'expérience fait toute la différence dans votre stratégie d'acquisition.",
    date: "28 décembre 2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&h=800",
    category: "Partenariats"
  },
  {
    id: 20,
    title: "Formats publicitaires les plus performants pour la génération de leads PV",
    slug: "formats-publicitaires-performants-generation-leads-pv",
    excerpt: "Analyse comparative entre les formats vidéo et statiques pour optimiser vos campagnes d'acquisition dans le photovoltaïque.",
    date: "20 décembre 2024",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=1200&h=800",
    category: "Marketing"
  },
  {
    id: 21,
    title: "Téléphone vs Email : quelle approche privilégier pour convertir vos leads bâtiment ?",
    slug: "telephone-email-approche-privilegier-convertir-leads-batiment",
    excerpt: "Pourquoi le contact téléphonique reste l'outil le plus efficace pour transformer vos prospects en clients dans le secteur de la construction.",
    date: "15 décembre 2024",
    image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?auto=format&fit=crop&w=1200&h=800",
    category: "Conversion"
  },
  {
    id: 22,
    title: "Cycle de conversion d'un lead pompe à chaleur : de la prise de contact à l'installation",
    slug: "cycle-conversion-lead-pompe-chaleur",
    excerpt: "Analyse du parcours client type et des délais moyens nécessaires pour concrétiser un projet de pompe à chaleur.",
    date: "10 décembre 2024",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1200&h=800",
    category: "PAC"
  },
  {
    id: 23,
    title: "Comment évaluer la qualité d'un lead photovoltaïque avant achat ?",
    slug: "evaluer-qualite-lead-photovoltaique-avant-achat",
    excerpt: "Les critères essentiels et les bonnes pratiques pour s'assurer de la fiabilité de vos fournisseurs de leads PV.",
    date: "5 décembre 2024",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&h=800",
    category: "Qualité"
  },
  {
    id: 24,
    title: "Données clés pour qualifier efficacement un lead ITE",
    slug: "donnees-cles-qualifier-efficacement-lead-ite",
    excerpt: "Quelles informations collectées font la différence pour maximiser vos chances de conversion dans l'isolation thermique extérieure.",
    date: "28 novembre 2024",
    image: "https://images.unsplash.com/photo-1614587396292-8e4bac4fa6eb?auto=format&fit=crop&w=1200&h=800",
    category: "ITE"
  },
  {
    id: 25,
    title: "Les meilleurs canaux de génération de leads bâtiment en 2025",
    slug: "meilleurs-canaux-generation-leads-batiment-2025",
    excerpt: "Analyse comparative des plateformes et stratégies les plus performantes pour acquérir des clients qualifiés dans le secteur de la construction.",
    date: "20 novembre 2024",
    image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1200&h=800",
    category: "Marketing"
  },
  {
    id: 26,
    title: "Facebook Ads vs Google Ads vs Native Ads : quelle plateforme choisir pour vos leads BTP ?",
    slug: "facebook-google-native-ads-plateforme-leads-btp",
    excerpt: "Comparatif détaillé des performances et spécificités de chaque canal publicitaire pour optimiser votre stratégie d'acquisition.",
    date: "15 novembre 2024",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1200&h=800",
    category: "Publicité"
  },
  {
    id: 27,
    title: "Saisonnalité des leads bâtiment : les produits stars de l'été",
    slug: "saisonnalite-leads-batiment-produits-ete",
    excerpt: "Quels types de projets de rénovation et d'installation sont les plus demandés pendant la période estivale.",
    date: "10 novembre 2024",
    image: "https://images.unsplash.com/photo-1530530824905-661c1b96bed6?auto=format&fit=crop&w=1200&h=800",
    category: "Saisonnalité"
  },
  {
    id: 28,
    title: "Stratégies de financement couplées aux campagnes de leads PAC",
    slug: "strategies-financement-couplees-campagnes-leads-pac",
    excerpt: "Comment intégrer les solutions de financement dans votre approche commerciale pour augmenter vos taux de conversion.",
    date: "5 novembre 2024",
    image: "https://images.unsplash.com/photo-1606189897540-4862b51383e5?auto=format&fit=crop&w=1200&h=800",
    category: "Financement"
  },
  {
    id: 29,
    title: "Quelle est la saison idéale pour lancer une campagne de leads photovoltaïques ?",
    slug: "saison-ideale-campagne-leads-photovoltaiques",
    excerpt: "Analyse des périodes les plus propices pour maximiser le rendement de vos investissements marketing dans le secteur du photovoltaïque.",
    date: "28 octobre 2024",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&h=800",
    category: "PV"
  },
  {
    id: 30,
    title: "Les critères essentiels pour sélectionner une source fiable de leads PV",
    slug: "criteres-essentiels-selection-source-fiable-leads-pv",
    excerpt: "Comment évaluer la qualité et la fiabilité d'un fournisseur de leads dans le secteur du photovoltaïque.",
    date: "20 octobre 2024",
    image: "https://images.unsplash.com/photo-1498354178607-a79df2916198?auto=format&fit=crop&w=1200&h=800",
    category: "PV"
  },
  {
    id: 31,
    title: "Anatomie d'une campagne réussie de génération de leads B2B dans le bâtiment",
    slug: "anatomie-campagne-reussie-generation-leads-b2b-batiment",
    excerpt: "Les étapes clés et les bonnes pratiques pour concevoir et déployer une stratégie d'acquisition efficace auprès des professionnels.",
    date: "15 octobre 2024",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=800",
    category: "B2B"
  }
];

export default Blog;
