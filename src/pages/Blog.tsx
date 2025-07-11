import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Search, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { blogPosts, featuredPost } from "@/data/blogData";

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
          <div className="flex justify-between items-center mb-12">
            <SectionHeading
              title="Tous les articles"
              subtitle="Explorez nos dernières publications sur le marketing digital et les stratégies de lead generation."
              chip="Articles récents"
              className="mb-0"
            />
          </div>

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

const BlogPostCard = ({ post, index }: { post: import("@/data/blogData").BlogPost; index: number }) => {
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

export default Blog;
