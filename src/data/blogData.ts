
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  date: string;
  category: string;
  image: string;
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Comment générer des leads qualifiés dans le secteur du bâtiment ?",
    slug: "comment-generer-des-leads-qualifies-dans-le-secteur-du-batiment",
    excerpt:
      "Découvrez les stratégies les plus efficaces pour attirer des prospects qualifiés et développer votre activité dans le secteur du bâtiment.",
    content: `
      <h2>Introduction</h2>
      <p>
        Cet article explore en détail la question des <strong>leads qualifiés</strong> dans le secteur
        du bâtiment. Notre analyse approfondie vous permettra de comprendre les enjeux essentiels liés à ce sujet.
      </p>

      <h2>Pourquoi ce sujet est important</h2>
      <p>
        Dans le contexte actuel de <strong>transition énergétique en France</strong>,
        comprendre les différentes options et stratégies concernant
        les <strong>leads qualifiés</strong> est essentiel pour
        les professionnels du secteur. Ce sujet affecte directement la rentabilité
        et l'efficacité des entreprises du BTP.
      </p>

      <h2>Analyse détaillée</h2>
      <p>
        Les <strong>leads qualifiés</strong> représentent un enjeu
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
        Pour rester compétitif dans le secteur du bâtiment, il est essentiel de
        s'appuyer sur des partenaires fiables pour l'acquisition de
        <strong> leads qualifiés</strong>. N'hésitez pas à nous contacter
        pour discuter de vos besoins spécifiques.
      </p>
    `,
    date: "15 Mai 2024",
    category: "Bâtiment",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop",
    tags: ["leads", "bâtiment", "qualifié"],
  },
  {
    id: "2",
    title:
      "Les meilleures stratégies de marketing digital pour les entreprises du BTP",
    slug:
      "les-meilleures-strategies-de-marketing-digital-pour-les-entreprises-du-btp",
    excerpt:
      "Explorez les techniques de marketing digital les plus performantes pour promouvoir votre entreprise du BTP et gagner de nouveaux clients.",
    content: `
      <h2>Introduction</h2>
      <p>
        Le <strong>marketing digital</strong> est devenu un outil incontournable pour les entreprises du BTP souhaitant se démarquer et attirer de nouveaux clients.
        Cet article vous présente les stratégies les plus efficaces pour booster votre présence en ligne et développer votre activité.
      </p>

      <h2>Pourquoi le marketing digital est essentiel pour le BTP</h2>
      <p>
        Dans un secteur de plus en plus concurrentiel, il est crucial de mettre en place une stratégie de <strong>marketing digital</strong> solide pour atteindre votre public cible et générer des leads qualifiés.
        Les techniques traditionnelles ne suffisent plus, il est temps de passer au numérique.
      </p>

      <h2>Les stratégies clés du marketing digital pour le BTP</h2>
      <p>
        Nous allons explorer ensemble les différentes stratégies de <strong>marketing digital</strong> qui peuvent vous aider à développer votre entreprise du BTP :
        <ul>
          <li><strong>SEO (Search Engine Optimization) :</strong> Optimisation de votre site web pour les moteurs de recherche.</li>
          <li><strong>Publicité en ligne :</strong> Création de campagnes publicitaires ciblées sur Google et les réseaux sociaux.</li>
          <li><strong>Marketing de contenu :</strong> Production de contenu de qualité pour attirer et engager votre audience.</li>
          <li><strong>Réseaux sociaux :</strong> Utilisation des réseaux sociaux pour promouvoir votre entreprise et interagir avec vos clients.</li>
        </ul>
      </p>

      <h2>L'expertise Goodleft en marketing digital pour le BTP</h2>
      <p>
        Avec plus de <strong>7 ans d'expérience</strong> dans le <strong>marketing digital</strong> pour le secteur du BTP, <strong>Goodleft</strong> vous accompagne dans la mise en place de stratégies personnalisées et performantes.
        Notre objectif est de vous aider à atteindre vos objectifs de croissance et à développer votre activité de manière durable.
      </p>

      <h2>Conclusion</h2>
      <p>
        Le <strong>marketing digital</strong> est un levier puissant pour les entreprises du BTP souhaitant se développer et gagner de nouveaux clients.
        N'hésitez pas à nous contacter pour discuter de vos besoins spécifiques et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
      </p>
    `,
    date: "8 Mai 2024",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop",
    tags: ["marketing digital", "BTP", "SEO", "publicité en ligne"],
  },
  {
    id: "3",
    title:
      "Comment exploiter le potentiel des leads en énergies renouvelables pour votre entreprise ?",
    slug:
      "comment-exploiter-le-potentiel-des-leads-en-energies-renouvelables-pour-votre-entreprise",
    excerpt:
      "Apprenez à identifier, qualifier et convertir les leads en énergies renouvelables pour booster votre chiffre d'affaires et contribuer à la transition énergétique.",
    content: `
      <h2>Introduction</h2>
      <p>
        Le secteur des <strong>énergies renouvelables</strong> est en pleine expansion et offre de nombreuses opportunités pour les entreprises du bâtiment.
        Cet article vous explique comment exploiter le potentiel des <strong>leads en énergies renouvelables</strong> pour développer votre activité et contribuer à la transition énergétique.
      </p>

      <h2>Pourquoi les énergies renouvelables sont un secteur porteur</h2>
      <p>
        Avec les objectifs ambitieux de la France en matière de <strong>transition énergétique</strong>, le secteur des <strong>énergies renouvelables</strong> est en pleine croissance.
        Les particuliers et les entreprises sont de plus en plus nombreux à investir dans les <strong>énergies renouvelables</strong>, ce qui crée de nombreuses opportunités pour les entreprises du bâtiment.
      </p>

      <h2>Comment identifier et qualifier les leads en énergies renouvelables</h2>
      <p>
        Il est essentiel de savoir identifier et qualifier les <strong>leads en énergies renouvelables</strong> pour optimiser votre temps et vos ressources.
        Voici quelques conseils pour vous aider :
        <ul>
          <li><strong>Ciblez les bons prospects :</strong> Identifiez les particuliers et les entreprises qui ont un intérêt pour les <strong>énergies renouvelables</strong>.</li>
          <li><strong>Qualifiez les leads :</strong> Vérifiez que les prospects ont un projet concret et un budget réaliste.</li>
          <li><strong>Proposez des solutions adaptées :</strong> Adaptez vos offres aux besoins spécifiques de chaque prospect.</li>
        </ul>
      </p>

      <h2>L'expertise Goodleft en leads pour les énergies renouvelables</h2>
      <p>
        Avec plus de <strong>7 ans d'expérience</strong> dans la génération de <strong>leads qualifiés</strong> pour le secteur des <strong>énergies renouvelables</strong>, <strong>Goodleft</strong> vous accompagne dans la mise en place de stratégies personnalisées et performantes.
        Notre objectif est de vous aider à atteindre vos objectifs de croissance et à développer votre activité de manière durable.
      </p>

      <h2>Conclusion</h2>
      <p>
        Le secteur des <strong>énergies renouvelables</strong> offre de nombreuses opportunités pour les entreprises du bâtiment.
        N'hésitez pas à nous contacter pour discuter de vos besoins spécifiques et découvrir comment nous pouvons vous aider à exploiter le potentiel des <strong>leads en énergies renouvelables</strong>.
      </p>
    `,
    date: "1 Mai 2024",
    category: "Énergies renouvelables",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1172&auto=format&fit=crop",
    tags: ["énergies renouvelables", "leads", "transition énergétique"],
  },
];

export const featuredPost = blogPosts[0];
