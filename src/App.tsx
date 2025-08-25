import "./App.css";
import { Toaster } from "./components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Shop from "./pages/Shop";
import ShopDetail from "./pages/ShopDetail";

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:slug" element={<ShopDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
