/* eslint-disable max-len */
import SEO from "@/components/SEO";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../../mocks/products";
import { products } from "../../mocks/products";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Code, ExternalLink, Shield, Star, Zap } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import type { HeaderLink } from "@/components/Header";
import Header from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { SchemaMarkup } from "@/components/SchemaMarkup";

export default function ShopDetail() {
  const { slug } = useParams();

  // Encontra o produto baseado no slug
  const product = useMemo(() => products.find((p) => p.slug === slug), [slug]);

  // Se produto não existe, retorna 404
  if (!product) {
    return (
      <>
        <SEO
          type="website"
          image="https://raventech.com.br/images/logo-raven.png"
          title="Produto não encontrado - Loja Raven"
          description="O produto que você procura não foi encontrado em nossa loja."
          keywords="Raven, Raventech, produto não encontrado"
          url={`/shop/${slug}`}
        />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold">Produto não encontrado</h1>
          <p>O produto que você procura não existe.</p>
        </div>
      </>
    );
  }

  // Gerar descrição SEO otimizada
  const generateSEODescription = (product: Product) =>
    `${product.description} ${product.price}. ${product.features.slice(0, 2).join(", ")}. Solução da Raven Tech para ${product.category.toLowerCase()}.`;

  // Gerar keywords baseadas no produto
  const generateKeywords = (product: Product) => {
    const baseKeywords = "Raven, Raventech, Raven Tech";
    const productKeywords = [...product.tags, product.category.toLowerCase()].join(", ");
    return `${baseKeywords}, ${productKeywords}, ${product.title}`;
  };

  const headerLinks: HeaderLink[] = [
    { link: "#benefícios", name: "Serviços" },
    { link: "#contact", name: "Contato" },
    { link: "#faq", name: "Dúvidas" },
  ];

  const redirectContactUs =
    "https://wa.me/5585989338909?text=Olá,%20queria%20saber%20melhor%20sobre%20os%20produtos%20e%20serviços%20da%20Raven.";

  const handleWhatsAppContact = () => {
    const message = `Olá! Tenho interesse na ${product.title}. Gostaria de contratar este serviço.`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <SEO
        title={`${product.title} - ${product.price} | Loja Raven`}
        description={generateSEODescription(product)}
        keywords={generateKeywords(product)}
        url={`/shop/${product.slug}`}
        type="product"
        image="https://raventech.com.br/images/logo-raven.png"
      />

      <SchemaMarkup type="product" product={product} />

      <div className="min-h-screen bg-background">
        <Header headerLinks={headerLinks} redirectContactUs={redirectContactUs} />

        <main className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <a
              href="/shop"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para a loja
            </a>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Product Header */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary" className="bg-secondary/10 text-primary-dark-normal">
                    {product.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    {product.rating} ({product.reviews} avaliações)
                  </div>
                </div>

                <h1 className="text-3xl font-bold text-foreground mb-4">{product.title}</h1>

                <p className="text-lg text-muted-foreground mb-6">{product.longDescription}</p>
              </div>

              {/* Features */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary-dark">
                    <Check className="h-5 w-5 mr-2 text-primary-dark" />
                    Recursos Inclusos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-primary-dark mr-2 flex-shrink-0" />
                        <span className="text-primary-dark">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Specifications */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary-dark">
                    <Shield className="h-5 w-5 mr-2 text-primary-dark" />
                    Especificações Técnicas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between py-2 border-b border-border last:border-b-0"
                      >
                        <span className="font-medium text-primary-dark">{key}</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Code Example */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary-dark">
                    <Code className="h-5 w-5 mr-2 text-primary-dark" />
                    Exemplo de Uso
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code className="text-muted-foreground">{product.codeExample}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing Card */}
              <Card className="border-border bg-card top-8">
                <CardHeader>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-dark mb-2">{product.price}</div>
                    <p className="text-muted-foreground">Sem taxa de setup</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full bg-primary-dark hover:bg-primary-dark/90 hover:cursor-pointer text-white"
                    onClick={handleWhatsAppContact}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Contratar via WhatsApp
                  </Button>

                  <Separator />

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Zap className="h-4 w-4 mr-2 text-primary-dark" />
                      Ativação imediata
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Shield className="h-4 w-4 mr-2 text-primary-dark" />
                      Suporte técnico incluso
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Check className="h-4 w-4 mr-2 text-primary-dark" />
                      Documentação completa
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support Card */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-primary-dark">Precisa de Ajuda?</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Nossa equipe está pronta para ajudar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full border-border hover:bg-accent hover:text-accent-foreground bg-transparent"
                    onClick={() => {
                      const message = `Olá! Tenho dúvidas sobre a ${product.title}. Podem me ajudar?`;
                      window.open(
                        `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`,
                        "_blank"
                      );
                    }}
                  >
                    Falar com Suporte
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
