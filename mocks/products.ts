/* eslint-disable max-len */

export interface Product {
  id: number;
  slug: string;
  title: string;
  description: string;
  price: string;
  category: string;
  rating: number;
  reviews: number;
  longDescription: string;
  specifications: Record<string, string>; // ou um objeto mais restrito se quiser tipar chave a chave
  codeExample: string;
  features: string[];
  tags: string[];
}

export const products: Product[] = [
  {
    id: 1,
    slug: "api-cep",
    title: "API de CEP",
    description: "Consulte endereços completos através do CEP com dados atualizados dos Correios",
    price: "R$ 29/mês",
    category: "Localização",
    rating: 4.8,
    reviews: 127,
    longDescription:
      "Valide e consulte CPF e CNPJ com dados oficiais da Receita Federal. Nossa API oferece validação em tempo real, verificação de situação cadastral e histórico de consultas. Essencial para sistemas que precisam validar documentos brasileiros com segurança e confiabilidade.",
    specifications: {
      "Rate Limit": "500 requisições/minuto",
      Formato: "JSON",
      Autenticação: "API Key + OAuth2",
      HTTPS: "Obrigatório",
      Compliance: "LGPD",
    },
    codeExample: `curl -X POST "https://api.softsolutions.com/v1/validate" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"document": "12345678901", "type": "cpf"}'

// Resposta
{
  "valid": true,
  "document": "123.456.789-01",
  "type": "cpf",
  "status": "regular"
}`,
    features: ["99.9% uptime", "Dados dos Correios", "Resposta < 100ms", "Suporte 24/7"],
    tags: ["cep", "endereço", "localização", "correios"],
  },
  {
    id: 2,
    slug: "api-cpf-cnpj",
    title: "API CPF/CNPJ Validator",
    description: "Validação e consulta de CPF e CNPJ com dados da Receita Federal",
    price: "R$ 49/mês",
    category: "Validação",
    rating: 4.9,
    reviews: 127,
    longDescription:
      "Valide e consulte CPF e CNPJ com dados oficiais da Receita Federal. Nossa API oferece validação em tempo real, verificação de situação cadastral e histórico de consultas. Essencial para sistemas que precisam validar documentos brasileiros com segurança e confiabilidade.",
    specifications: {
      "Rate Limit": "500 requisições/minuto",
      Formato: "JSON",
      Autenticação: "API Key + OAuth2",
      HTTPS: "Obrigatório",
      Compliance: "LGPD",
    },
    codeExample: `curl -X POST "https://api.softsolutions.com/v1/validate" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"document": "12345678901", "type": "cpf"}'

// Resposta
{
  "valid": true,
  "document": "123.456.789-01",
  "type": "cpf",
  "status": "regular"
}`,
    features: [
      "Dados Receita Federal",
      "Validação em tempo real",
      "Histórico de consultas",
      "API RESTful",
    ],
    tags: ["cpf", "cnpj", "validação", "receita federal", "documento"],
  },
  {
    id: 3,
    slug: "api-clima",
    title: "API Meteorológica",
    description: "Previsão do tempo precisa para qualquer localidade do Brasil",
    price: "R$ 39/mês",
    category: "Clima",
    rating: 4.7,
    reviews: 127,
    longDescription:
      "Valide e consulte CPF e CNPJ com dados oficiais da Receita Federal. Nossa API oferece validação em tempo real, verificação de situação cadastral e histórico de consultas. Essencial para sistemas que precisam validar documentos brasileiros com segurança e confiabilidade.",
    specifications: {
      "Rate Limit": "500 requisições/minuto",
      Formato: "JSON",
      Autenticação: "API Key + OAuth2",
      HTTPS: "Obrigatório",
      Compliance: "LGPD",
    },
    codeExample: `curl -X POST "https://api.softsolutions.com/v1/validate" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"document": "12345678901", "type": "cpf"}'

// Resposta
{
  "valid": true,
  "document": "123.456.789-01",
  "type": "cpf",
  "status": "regular"
}`,
    features: [
      "Previsão 7 dias",
      "Dados em tempo real",
      "Alertas meteorológicos",
      "Múltiplas cidades",
    ],
    tags: ["clima", "tempo", "previsão", "meteorologia", "temperatura"],
  },
  {
    id: 4,
    slug: "api-sms",
    title: "API de SMS",
    description: "Envio de SMS em massa com alta taxa de entrega e relatórios detalhados",
    price: "R$ 0,12/SMS",
    category: "Comunicação",
    rating: 4.6,
    reviews: 127,
    longDescription:
      "Valide e consulte CPF e CNPJ com dados oficiais da Receita Federal. Nossa API oferece validação em tempo real, verificação de situação cadastral e histórico de consultas. Essencial para sistemas que precisam validar documentos brasileiros com segurança e confiabilidade.",
    specifications: {
      "Rate Limit": "500 requisições/minuto",
      Formato: "JSON",
      Autenticação: "API Key + OAuth2",
      HTTPS: "Obrigatório",
      Compliance: "LGPD",
    },
    codeExample: `curl -X POST "https://api.softsolutions.com/v1/validate" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"document": "12345678901", "type": "cpf"}'

// Resposta
{
  "valid": true,
  "document": "123.456.789-01",
  "type": "cpf",
  "status": "regular"
}`,
    features: ["Alta taxa entrega", "Relatórios detalhados", "Agendamento", "Templates"],
    tags: ["sms", "mensagem", "comunicação", "marketing", "notificação"],
  },
  {
    id: 5,
    slug: "api-pagamento",
    title: "Gateway de Pagamento",
    description: "Processe pagamentos com PIX, cartão e boleto de forma segura",
    price: "2.9% + R$ 0,39",
    category: "Pagamento",
    rating: 4.8,
    reviews: 127,
    longDescription:
      "Valide e consulte CPF e CNPJ com dados oficiais da Receita Federal. Nossa API oferece validação em tempo real, verificação de situação cadastral e histórico de consultas. Essencial para sistemas que precisam validar documentos brasileiros com segurança e confiabilidade.",
    specifications: {
      "Rate Limit": "500 requisições/minuto",
      Formato: "JSON",
      Autenticação: "API Key + OAuth2",
      HTTPS: "Obrigatório",
      Compliance: "LGPD",
    },
    codeExample: `curl -X POST "https://api.softsolutions.com/v1/validate" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"document": "12345678901", "type": "cpf"}'

// Resposta
{
  "valid": true,
  "document": "123.456.789-01",
  "type": "cpf",
  "status": "regular"
}`,
    features: ["PIX instantâneo", "Cartão de crédito", "Boleto bancário", "Antifraude"],
    tags: ["pagamento", "pix", "cartão", "boleto", "gateway", "ecommerce"],
  },
  {
    id: 6,
    slug: "api-email",
    title: "API de Email Marketing",
    description: "Envie emails transacionais e campanhas com alta deliverabilidade",
    price: "R$ 59/mês",
    category: "Marketing",
    rating: 4.5,
    reviews: 127,
    longDescription:
      "Valide e consulte CPF e CNPJ com dados oficiais da Receita Federal. Nossa API oferece validação em tempo real, verificação de situação cadastral e histórico de consultas. Essencial para sistemas que precisam validar documentos brasileiros com segurança e confiabilidade.",
    specifications: {
      "Rate Limit": "500 requisições/minuto",
      Formato: "JSON",
      Autenticação: "API Key + OAuth2",
      HTTPS: "Obrigatório",
      Compliance: "LGPD",
    },
    codeExample: `curl -X POST "https://api.softsolutions.com/v1/validate" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"document": "12345678901", "type": "cpf"}'

// Resposta
{
  "valid": true,
  "document": "123.456.789-01",
  "type": "cpf",
  "status": "regular"
}`,
    features: ["Alta deliverabilidade", "Templates responsivos", "Analytics", "Automação"],
    tags: ["email", "marketing", "newsletter", "transacional", "automação"],
  },
];
