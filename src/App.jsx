import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import Home from "./pages/Home.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"product"} element={<Product />} />
        <Route path={"pricing"} element={<Pricing />} />
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
