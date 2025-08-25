/* eslint-disable max-len */
import SEO from "@/components/SEO";
import { products } from "../../mocks/products";
import { useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { HeaderLink } from "@/components/Header";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ExternalLink, Search, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { SchemaMarkup } from "@/components/SchemaMarkup";

function fuzzySearch(items: typeof products, query: string) {
  if (!query) return items;

  const searchQuery = query.toLowerCase();

  return items
    .filter((item) => {
      const searchableText = [item.title, item.description, item.category, ...item.tags]
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

const headerLinks: HeaderLink[] = [
  { link: "#benefícios", name: "Serviços" },
  { link: "#contact", name: "Contato" },
  { link: "#faq", name: "Dúvidas" },
];

const redirectContactUs =
  "https://wa.me/5585989338909?text=Olá,%20queria%20saber%20melhor%20sobre%20os%20produtos%20e%20serviços%20da%20Raven.";

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts = useMemo(() => {
    let filtered = fuzzySearch(products, searchQuery);

    if (selectedCategory !== "Todos") {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <SEO
        title="Loja Raven - Soluções e Produtos de Software"
        description="Descubra nossa loja de APIs, sistemas prontos, microserviços e soluções digitais da Raven Tech. Tecnologia sob medida para impulsionar sua empresa."
        keywords="Raven, Raventech, Raven Tech, loja de software, API CEP, API CPF CNPJ, gateway pagamento, API SMS, microserviços Brasil, APIs para desenvolvedores, software fortaleza"
        image="https://raventech.com.br/images/logo-raven.png"
        url="/shop"
        type="website"
      />

      <div className="w-full font-sans min-h-screen">
        <Header headerLinks={headerLinks} redirectContactUs={redirectContactUs} />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-dark mb-3 sm:mb-4 px-2">
              Loja de APIs e Recursos
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto px-4">
              Descubra APIs poderosas e recursos que vão acelerar o desenvolvimento do seu projeto
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-6 sm:mb-8 space-y-4 sm:space-y-6">
            {/* Search Input */}
            <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Buscar APIs, recursos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background border-border h-10 sm:h-11 text-sm sm:text-base"
                aria-label="Buscar APIs e recursos"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 px-2 sm:px-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-9 whitespace-nowrap
                    ${
                      selectedCategory === category
                        ? "bg-primary-dark hover:bg-primary-dark/90 text-primary-foreground"
                        : "border-border hover:bg-accent hover:text-accent-foreground hover:cursor-pointer"
                    }
                  `}
                  aria-label={`Filtrar por categoria ${category}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-4 sm:mb-6 px-2">
            <p className="text-sm sm:text-base text-muted-foreground">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "resultado encontrado" : "resultados encontrados"}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="border-border bg-card hover:shadow-lg transition-all duration-200 flex flex-col h-full"
              >
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-start justify-between mb-2 gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-secondary/10 text-primary-dark text-xs flex-shrink-0"
                    >
                      {product.category}
                    </Badge>
                    <div className="flex items-center text-xs sm:text-sm text-muted-foreground flex-shrink-0">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="whitespace-nowrap">{product.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-card-foreground leading-tight">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-muted-foreground line-clamp-3">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-end">
                  <div className="space-y-3 sm:space-y-4">
                    {/* Features */}
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs border-border px-2 py-0.5"
                        >
                          {feature}
                        </Badge>
                      ))}
                      {product.features.length > 2 && (
                        <Badge variant="outline" className="text-xs border-border px-2 py-0.5">
                          +{product.features.length - 2} mais
                        </Badge>
                      )}
                    </div>

                    {/* Price and Actions */}
                    <div className="space-y-3">
                      <div className="text-center sm:text-left">
                        <span className="text-lg sm:text-xl font-semibold text-primary-dark">
                          {product.price}
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col min-h-18 sm:flex-row gap-2">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1 border-border hover:bg-accent hover:text-accent-foreground bg-transparent text-xs sm:text-sm h-8 sm:h-9"
                        >
                          <a
                            href={`/shop/${product.slug}`}
                            aria-label={`Ver detalhes da ${product.title}`}
                          >
                            Ver Detalhes
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-primary-dark hover:bg-primary-dark/90 text-primary-foreground text-xs sm:text-sm h-8 sm:h-9"
                          onClick={() => {
                            const message = `Olá! Tenho interesse na ${product.title}. Gostaria de mais informações.`;
                            window.open(
                              `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`,
                              "_blank"
                            );
                          }}
                          aria-label={`Entrar em contato via WhatsApp sobre ${product.title}`}
                        >
                          <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                          <span className="whitespace-nowrap">WhatsApp</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-8 sm:py-12 px-4">
              <p className="text-muted-foreground text-base sm:text-lg mb-4">
                Nenhum resultado encontrado para "{searchQuery}"
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Todos");
                }}
                className="border-border hover:bg-accent hover:text-accent-foreground"
              >
                Limpar Filtros
              </Button>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
