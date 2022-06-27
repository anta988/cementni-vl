import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductDetails from './Pages/ProductDetails';
import Layout from './Components/Header/Layout';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Default from './Pages/Default';
import NotFound from './Pages/NotFound';
import Products from './Pages/Products';
import Certificates from './Pages/Certificates';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='' element={<Default />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productId' element={<ProductDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/certificates' element={<Certificates />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
