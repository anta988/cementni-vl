import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Header/Layout';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Default from './Pages/Default';
import NotFound from './Pages/NotFound';
import Products from './Pages/Products';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='' element={<Default />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
