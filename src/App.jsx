import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import Home from "./pages/Home.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import PageNav from './Components/PageNav.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <PageNav/>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"product"} element={<Product />} />
          <Route path={"pricing"} element={<Pricing />} />
          <Route path={"*"} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
