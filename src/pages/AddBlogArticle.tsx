
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import { FileImage, Tag as TagIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { blogPosts } from "@/data/blogData";
import { useForm } from "react-hook-form";
import { BlogPost } from "@/data/blogData";

const AddBlogArticle = () => {
  const navigate = useNavigate();
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const form = useForm({
    defaultValues: {
      title: "",
      content: "",
      category: "",
      imageUrl: "",
    },
  });

  const handleTagAdd = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const handleTagRemove = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    form.setValue("imageUrl", url);
    setPreviewImage(url);
  };

  const onSubmit = (values: any) => {
    try {
      // Create a new blog post
      const slug = values.title
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .replace(/\s+/g, "-");

      const newPost: BlogPost = {
        id: uuidv4(),
        title: values.title,
        slug,
        excerpt: values.content.substring(0, 150) + "...",
        content: values.content,
        date: new Date().toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        category: values.category || tags[0] || "Général",
        image: values.imageUrl || "https://source.unsplash.com/random/800x600/?building",
        tags: tags,
      };

      // Add to blog posts
      blogPosts.unshift(newPost);
      
      toast.success("Article ajouté avec succès !");
      navigate(`/blog/${slug}`);
    } catch (error) {
      console.error("Error adding blog post:", error);
      toast.error("Erreur lors de l'ajout de l'article");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-32 pb-16">
        <div className="container max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Ajouter un nouvel article</h1>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Titre (H1)</FormLabel>
                    <FormControl>
                      <Input placeholder="Titre de l'article" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Image URL */}
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL de l'image</FormLabel>
                    <FormControl>
                      <div className="flex gap-2">
                        <Input 
                          placeholder="https://example.com/image.jpg" 
                          {...field} 
                          onChange={handleImageUrlChange}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="flex-shrink-0"
                          onClick={() => document.getElementById("imageUrlInput")?.focus()}
                        >
                          <FileImage className="h-4 w-4" />
                        </Button>
                      </div>
                    </FormControl>
                    {previewImage && (
                      <div className="mt-2 relative w-full h-48 rounded-md overflow-hidden">
                        <img
                          src={previewImage}
                          alt="Preview"
                          className="w-full h-full object-cover"
                          onError={() => setPreviewImage(null)}
                        />
                      </div>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Content (HTML) */}
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contenu (HTML)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="<h2>Titre</h2><p>Paragraphe</p>" 
                        className="min-h-32 font-mono" 
                        {...field} 
                      />
                    </FormControl>
                    <p className="text-xs text-muted-foreground mt-1">
                      Vous pouvez utiliser des balises HTML comme &lt;h2&gt;, &lt;p&gt;, &lt;strong&gt;, &lt;em&gt;, etc.
                    </p>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Category */}
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Catégorie principale</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Énergies renouvelables" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Tags */}
              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {tags.map((tag) => (
                    <div 
                      key={tag} 
                      className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                    >
                      {tag}
                      <button
                        type="button"
                        className="ml-2 text-primary hover:text-primary/80"
                        onClick={() => handleTagRemove(tag)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    id="tags"
                    placeholder="Ajouter un tag"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleTagAdd();
                      }
                    }}
                  />
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={handleTagAdd}
                    className="flex-shrink-0"
                  >
                    <TagIcon className="h-4 w-4 mr-2" />
                    Ajouter
                  </Button>
                </div>
              </div>
              
              {/* Submit */}
              <div className="flex justify-end">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="mr-2"
                  onClick={() => navigate('/blog')}
                >
                  Annuler
                </Button>
                <Button type="submit">Publier l'article</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AddBlogArticle;
