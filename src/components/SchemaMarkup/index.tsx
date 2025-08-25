import { Helmet } from "react-helmet";
import type { Product } from "../../../mocks/products";

interface SchemaMarkupProps {
  type: "store" | "product";
  product?: Product;
}

export function SchemaMarkup({ type, product }: SchemaMarkupProps) {
  const getStoreSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Loja Raven Tech",
    description: "APIs, microserviços e soluções digitais para empresas",
    url: "https://www.raventech.com.br/shop",
    logo: "https://raventech.com.br/images/logo-raven.png",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Catálogo de APIs e Soluções",
      numberOfItems: "6",
    },
  });

  const getProductSchema = (product: Product) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.title,
    description: product.description,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    url: `https://www.raventech.com.br/shop/${product.slug}`,
    offers: {
      "@type": "Offer",
      price: product.price.replace(/[^\d,]/g, "").replace(",", "."),
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Raven Tech",
        url: "https://www.raventech.com.br",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating.toString(),
      reviewCount: product.reviews.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    featureList: product.features,
    provider: {
      "@type": "Organization",
      name: "Raven Tech",
      url: "https://www.raventech.com.br",
    },
  });

  const schema = type === "store" ? getStoreSchema() : getProductSchema(product!);

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema, null, 2)}</script>
    </Helmet>
  );
}
