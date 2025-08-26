"use client";

import { useState, useMemo } from "react";
import { Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    slug: "como-integrar-apis-rest-5-minutos",
    title: "Como Integrar APIs REST em 5 Minutos",
    excerpt:
      "Guia completo e prático para integração rápida e eficiente de APIs REST em seus projetos." +
      " Aprenda as melhores práticas e evite erros comuns.",
    author: "Carlos Silva",
    publishedAt: "2024-01-15",
    readTime: "8 min",
    category: "Tutorial",
    tags: ["api", "rest", "integração", "desenvolvimento", "tutorial"],
    featured: true,
  },
  {
    id: 2,
    slug: "seguranca-apis-melhores-praticas",
    title: "Segurança em APIs: Melhores Práticas para 2024",
    excerpt:
      "Aprenda a proteger suas APIs contra as principais vulnerabilidades e ataques." +
      " Guia completo de segurança para desenvolvedores.",
    author: "Ana Costa",
    publishedAt: "2024-01-12",
    readTime: "12 min",
    category: "Segurança",
    tags: ["segurança", "api", "autenticação", "criptografia", "vulnerabilidades"],
    featured: true,
  },
  {
    id: 3,
    slug: "otimizacao-performance-aplicacoes-web",
    title: "Otimização de Performance: Dicas Avançadas",
    excerpt:
      "Técnicas profissionais para melhorar drasticamente a performance de suas aplicações" +
      " e APIs. Casos reais e resultados mensuráveis.",
    author: "Roberto Santos",
    publishedAt: "2024-01-10",
    readTime: "15 min",
    category: "Performance",
    tags: ["performance", "otimização", "cache", "database", "scaling"],
    featured: false,
  },
];

function fuzzySearch(items: typeof blogPosts, query: string) {
  if (!query) return items;

  const searchQuery = query.toLowerCase();

  return items
    .filter((item) => {
      const searchableText = [item.title, item.excerpt, item.author, item.category, ...item.tags]
        .join(" ")
        .toLowerCase();

      return (
        searchableText.includes(searchQuery) ||
        item.tags.some((tag) => tag.includes(searchQuery)) ||
        item.title.toLowerCase().includes(searchQuery)
      );
    })
    .sort((a, b) => {
      // Prioritize exact matches in title
      const aExact = a.title.toLowerCase().includes(searchQuery) ? 1 : 0;
      const bExact = b.title.toLowerCase().includes(searchQuery) ? 1 : 0;
      return bExact - aExact;
    });
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const filtered = fuzzySearch(blogPosts, searchQuery);
    return filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
  }, [searchQuery]);

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "short",
    });

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary-dark mb-4 leading-tight">
            Insights que Transformam
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conteúdo especializado sobre desenvolvimento, APIs e tecnologia
          </p>
        </div>

        <div className="space-y-12">
          {filteredPosts.map((post) => (
            <article key={post.id} className="group">
              <a href={`/blog/${post.slug}`} className="block">
                <div className="flex items-start gap-8">
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                          <User className="h-3 w-3 text-gray-600" />
                        </div>
                        <span className="text-sm text-gray-700 font-medium">{post.author}</span>
                      </div>
                      <span className="text-gray-400">·</span>
                      <span className="text-sm text-gray-500">{formatDate(post.publishedAt)}</span>
                    </div>

                    <h2 className="text-2xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors leading-tight">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Placeholder image area - keeping it minimal */}
                  <div className="w-32 h-32 bg-gray-100 rounded flex-shrink-0 hidden md:block">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center">
                      <span className="text-gray-400 text-xs">IMG</span>
                    </div>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>

        {/* No results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg mb-4">
              Nenhum artigo encontrado para "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-gray-700 hover:text-black font-medium"
            >
              Limpar busca
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
