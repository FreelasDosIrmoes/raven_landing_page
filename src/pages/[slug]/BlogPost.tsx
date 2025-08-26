"use client";

import { Clock, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Navigate, useParams } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    slug: "como-integrar-apis-rest-5-minutos",
    title: "Como Integrar APIs REST em 5 Minutos",
    excerpt:
      "Guia completo e prático para integração rápida e eficiente de APIs REST em seus projetos. " +
      "Aprenda as melhores práticas e evite erros comuns.",
    coverImage: "/api-integration-coding-tutorial.png",
    content: `
# Como Integrar APIs REST em 5 Minutos

Integrar APIs REST em seus projetos não precisa ser complicado. 
Neste guia prático, você aprenderá como fazer isso de forma rápida e eficiente.

## O que são APIs REST?

REST (Representational State Transfer) é um estilo arquitetural para sistemas distribuídos, 
especialmente para serviços web. 
Uma API REST utiliza métodos HTTP padrão como GET, POST, PUT e DELETE para realizar operações.

## Passo 1: Entendendo a Estrutura

Antes de começar a integração, é importante entender a estrutura básica de uma API REST:

- **Endpoint**: A URL onde a API está disponível
- **Métodos HTTP**: GET (buscar), POST (criar), PUT (atualizar), DELETE (remover)
- **Headers**: Informações adicionais sobre a requisição
- **Body**: Dados enviados na requisição (principalmente em POST e PUT)

## Passo 2: Fazendo sua Primeira Requisição

Aqui está um exemplo simples usando JavaScript:

\`\`\`javascript
// Exemplo de requisição GET
fetch('https://api.exemplo.com/usuarios')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));
\`\`\`

## Passo 3: Tratamento de Erros

Sempre implemente tratamento de erros adequado:

\`\`\`javascript
async function buscarUsuarios() {
  try {
    const response = await fetch('https://api.exemplo.com/usuarios');
    
    if (!response.ok) {
      throw new Error(\`Erro HTTP: \${response.status}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error;
  }
}
\`\`\`

## Conclusão

Integrar APIs REST é uma habilidade essencial para qualquer desenvolvedor moderno. 
Com essas técnicas básicas, você já pode começar a integrar APIs em seus projetos de forma eficiente
e segura.

Lembre-se sempre de ler a documentação da API que você está integrando 
e seguir suas diretrizes específicas.
    `,
    author: "Carlos Silva",
    authorBio:
      "Desenvolvedor Full Stack com mais de 8 anos de experiência em APIs e arquitetura de " +
      "software. Apaixonado por ensinar e compartilhar conhecimento.",
    authorAvatar: "/developer-avatar.png",
    publishedAt: "2024-01-15",
    readTime: "8 min",
    category: "Tutorial",
    tags: ["api", "rest", "integração", "desenvolvimento", "tutorial"],
    featured: true,
    likes: 142,
    comments: 23,
  },
  {
    id: 2,
    slug: "seguranca-apis-melhores-praticas",
    title: "Segurança em APIs: Melhores Práticas para 2024",
    excerpt:
      "Aprenda a proteger suas APIs contra as principais vulnerabilidades e ataques. " +
      "Guia completo de segurança para desenvolvedores.",
    coverImage: "/cybersecurity-shield-lock.png",
    content: `
# Segurança em APIs: Melhores Práticas para 2024

A segurança em APIs é fundamental para proteger dados sensíveis e manter a confiança dos usuários. 
Neste guia completo, abordaremos as principais práticas de segurança que todo desenvolvedor 
deve conhecer.

## Por que a Segurança em APIs é Crítica?

APIs são frequentemente o alvo principal de ataques cibernéticos porque:

- Expõem dados e funcionalidades críticas
- São acessíveis pela internet
- Muitas vezes não têm proteções adequadas
- Podem ser exploradas para acessar sistemas internos

## 1. Autenticação e Autorização

### JWT (JSON Web Tokens)

\`\`\`javascript
// Exemplo de verificação de JWT
const jwt = require('jsonwebtoken');

function verificarToken(req, res, next) {
  const token = req.headers['authorization'];
  
  if (!token) {
    return res.status(401).json({ erro: 'Token não fornecido' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ erro: 'Token inválido' });
  }
}
\`\`\`

## Conclusão

A segurança em APIs é um processo contínuo que requer atenção constante. Implemente essas práticas 
desde o início do desenvolvimento e mantenha-se atualizado com as últimas ameaças e soluções de 
segurança.

Lembre-se: a segurança não é um recurso, é um requisito fundamental.
    `,
    author: "Ana Costa",
    authorBio:
      "Especialista em Cybersecurity com foco em APIs e sistemas distribuídos. " +
      "Consultora de segurança para empresas de tecnologia.",
    authorAvatar: "/security-expert-avatar.png",
    publishedAt: "2024-01-12",
    readTime: "12 min",
    category: "Segurança",
    tags: ["segurança", "api", "autenticação", "criptografia", "vulnerabilidades"],
    featured: true,
    likes: 89,
    comments: 15,
  },
  {
    id: 3,
    slug: "otimizacao-performance-aplicacoes-web",
    title: "Otimização de Performance em Aplicações Web",
    excerpt:
      "Técnicas avançadas para melhorar a performance de suas aplicações web " +
      "e proporcionar uma melhor experiência ao usuário.",
    coverImage: "/performance-optimization-speed-dashboard.png",
    content: `# Otimização de Performance em Aplicações Web...`,
    author: "Pedro Santos",
    authorBio:
      "Engenheiro de Performance especializado em otimização de aplicações web " +
      "de alta escala.",
    authorAvatar: "/performance-engineer-avatar.png",
    publishedAt: "2024-01-10",
    readTime: "10 min",
    category: "Performance",
    tags: ["performance", "otimização", "web", "velocidade"],
    featured: false,
    likes: 67,
    comments: 12,
  },
];

export function BlogPostPageClient() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" />;
  }

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "short",
    });

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <a href="/blog">Voltar</a>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">{post.excerpt}</p>

          <div className="flex items-center gap-6 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <div className="font-medium text-black">{post.author}</div>
                <div className="text-sm text-gray-500">{formatDate(post.publishedAt)}</div>
              </div>
            </div>

            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
          </div>
        </header>

        {/* Article content */}
        <article className="prose prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold mt-12 mb-6 text-black first:mt-0">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-semibold mt-10 mb-5 text-black">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-medium mt-8 mb-4 text-black">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="mb-6 text-lg leading-relaxed text-gray-800">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4 text-gray-800">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside space-y-2 mb-6 ml-4 text-gray-800">
                  {children}
                </ol>
              ),
              li: ({ children }) => <li className="mb-2 text-lg text-gray-800">{children}</li>,
              code: (props: any) => {
                const { inline, className, children, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <div className="my-8">
                    <pre className="bg-gray-50 border border-gray-200 rounded-lg p-6 overflow-x-auto">
                      <code className="text-sm font-mono text-gray-800 leading-relaxed block">
                        {String(children).replace(/\n$/, "")}
                      </code>
                    </pre>
                  </div>
                ) : (
                  <code
                    className="bg-gray-100 px-2 py-1 rounded text-sm font-mono border text-gray-800"
                    {...rest}
                  >
                    {children}
                  </code>
                );
              },
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-gray-300 pl-6 my-8 italic text-gray-700 text-lg">
                  {children}
                </blockquote>
              ),
              a: ({ children, href }) => (
                <a
                  href={href}
                  className="text-blue-600 hover:text-blue-800 underline transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        {/* Tags */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
