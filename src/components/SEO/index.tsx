import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url?: string;
  type: string;
}
const SEO = ({
  title,
  description,
  keywords,
  image = "https://raventech.com.br/images/logo-raven.png",
  url,
  type = "website",
}: SEOProps) => {
  const baseUrl = "https://raventech.com.br";
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
