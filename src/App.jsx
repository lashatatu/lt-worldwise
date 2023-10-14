import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Product from './pages/Product.jsx';
import Pricing from './pages/Pricing.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import AppLayout from './pages/AppLayout.jsx';
import Homepage from './pages/Homepage.jsx';
import Login from './pages/Login.jsx';
import CityList from './Components/CityList.jsx';
import CountryList from './Components/CountryList.jsx';

const BASE_URL = 'http://localhost:9000';
const App = () => {

  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert('there was an error');
      } finally {
        setIsLoading(false);
      }
    };
    fetchCities();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path={'product'} element={<Product />} />
          <Route path={'pricing'} element={<Pricing />} />
          <Route path={'login'} element={<Login />} />
          <Route path={'app'} element={<AppLayout />}>
            <Route index element={<CityList cities={cities} isLoading={isLoading}/>} />
            <Route path={'cities'} element={<CityList cities={cities} isLoading={isLoading}/>} />
            <Route path={'countries'} element={<CountryList cities={cities} isLoading={isLoading}/>} />
            <Route path={'form'} element={<p>form</p>} />
          </Route>
          <Route path={'*'} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
