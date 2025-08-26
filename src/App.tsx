import "./App.css";
import { Toaster } from "./components/ui/sonner";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "../src/pages/Home";
import Shop from "./pages/Shop";
import ShopDetail from "./pages/ShopDetail";
import Blog from "./pages/Blog";
import { BlogPostPageClient } from "./pages/[slug]/BlogPost";
import Header, { headerLinks } from "./components/Header";
export const redirectContactUs =
  "https://wa.me/5585989338909?text=Olá,%20queria%20saber%20melhor%20sobre%20os%20produtos%20e%20serviços%20da%20Raven.";

function Layout() {
  return (
    <>
      <Header headerLinks={headerLinks} redirectContactUs={redirectContactUs} />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:slug" element={<ShopDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostPageClient />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
