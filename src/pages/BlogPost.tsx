
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { blogPosts, BlogPost as BlogPostType } from "@/data/blogData";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the post based on slug
    const foundPost = blogPosts.find((article) => article.slug === slug);
    setPost(foundPost || null);
    setLoading(false);

    // Scroll to top when post loads
    window.scrollTo(0, 0);

    // Update page title for SEO
    if (foundPost) {
      document.title = `${foundPost.title} | Goodleft Blog`;
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <h1 className="text-3xl font-bold mb-4">Article introuvable</h1>
          <p className="text-muted-foreground mb-8">
            L'article que vous recherchez n'existe pas ou a été déplacé.
          </p>
          <Button asChild>
            <Link to="/blog">Retour au blog</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary/10 to-blue-500/10">
        <div className="container text-center">
          <div className="inline-block animate-fade-in">
            <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full">
              {post.category}
            </span>
          </div>
          <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight animate-fade-in">
            {post.title}
          </h1>
          <div className="flex items-center justify-center mt-6 text-sm text-muted-foreground animate-fade-in">
            <Clock className="h-4 w-4 mr-2" />
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container max-w-4xl -mt-8 mb-12">
        <div className="relative rounded-xl overflow-hidden shadow-xl aspect-video">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="container max-w-3xl py-8">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl font-medium text-muted-foreground mb-8">
            {post.excerpt}
          </p>
          
          <div className="article-content" dangerouslySetInnerHTML={{ __html: post.content || '' }} />
          
          {!post.content && (
            <div>
              <h2>Introduction</h2>
              <p>
                Cet article explore en détail la question des <strong>{post.category.toLowerCase()}</strong> dans le secteur
                du bâtiment et des <strong>énergies renouvelables</strong>. Notre analyse
                approfondie vous permettra de comprendre les enjeux essentiels liés à ce sujet.
              </p>

              <h2>Pourquoi ce sujet est important</h2>
              <p>
                Dans le contexte actuel de <strong>transition énergétique en France</strong>,
                comprendre les différentes options et stratégies concernant
                les <strong>leads {post.category.toLowerCase()}</strong> est essentiel pour
                les professionnels du secteur. Ce sujet affecte directement la rentabilité
                et l'efficacité des entreprises du BTP.
              </p>

              <h2>Analyse détaillée</h2>
              <p>
                Les <strong>leads {post.category.toLowerCase()}</strong> représentent un enjeu
                stratégique majeur pour les installateurs et autres professionnels
                du bâtiment. Notre expertise dans ce domaine nous permet de vous
                offrir une vision claire et précise des meilleures pratiques.
              </p>

              <h2>L'expertise Goodleft</h2>
              <p>
                Avec plus de <strong>7 ans d'expérience</strong> dans la génération de leads
                qualifiés pour le secteur du bâtiment, <strong>Goodleft</strong> s'impose comme
                le partenaire de référence pour les professionnels souhaitant développer leur
                activité de manière efficace et rentable.
              </p>

              <h2>Conclusion</h2>
              <p>
                Pour rester compétitif dans le secteur du bâtiment et des
                <strong> énergies renouvelables</strong>, il est essentiel de
                s'appuyer sur des partenaires fiables pour l'acquisition de
                <strong> leads qualifiés</strong>. N'hésitez pas à nous contacter
                pour discuter de vos besoins spécifiques.
              </p>
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12 mb-8">
          <Tag className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground mr-2">Tags:</span>
          <span className="bg-muted px-2 py-1 rounded text-xs">
            {post.category}
          </span>
          <span className="bg-muted px-2 py-1 rounded text-xs">leads</span>
          <span className="bg-muted px-2 py-1 rounded text-xs">bâtiment</span>
          <span className="bg-muted px-2 py-1 rounded text-xs">énergies renouvelables</span>
        </div>

        {/* Back button */}
        <div className="mt-12 mb-16">
          <Button variant="outline" asChild>
            <Link to="/blog" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux articles
            </Link>
          </Button>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Articles similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts
              .filter(
                (relatedPost) =>
                  relatedPost.id !== post.id &&
                  (relatedPost.category === post.category ||
                    relatedPost.title.includes(post.category))
              )
              .slice(0, 3)
              .map((relatedPost) => (
                <div
                  key={relatedPost.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <Link
                      to={`/blog/${relatedPost.slug}`}
                      className="text-primary font-medium text-sm inline-flex items-center mt-2"
                    >
                      Lire l'article
                      <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Besoin d'une stratégie de génération de leads sur mesure ?"
        description="Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment Goodleft peut vous aider à développer votre activité."
        buttonText="Contactez-nous"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default BlogPost;
