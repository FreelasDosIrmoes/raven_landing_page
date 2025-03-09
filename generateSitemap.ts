import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

const sitemap = new SitemapStream({ hostname: "https://www.raventech.com.br" });

sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
sitemap.write({ url: "/#benefícios", changefreq: "monthly", priority: 0.8 });
sitemap.write({ url: "/#contact", changefreq: "monthly", priority: 0.8 });
sitemap.write({ url: "/#faq", changefreq: "monthly", priority: 0.7 });

sitemap.end();

streamToPromise(sitemap).then((data) => writeFileSync("public/sitemap.xml", data));
