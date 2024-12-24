import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/User'; // Import the Layout component
import HomePage from './Pages/home';  // Import Product page component
import Shop from './Pages/shop';
import FarmDetail from './Pages/Farm Detail';
import ScrollToTop from './utils/scrollTop';
import ProductDetail from './Pages/Product Detail';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Main layout with nested routes */}
        <Route path="/" element={<Layout />}>
          <Route path='/products' element={<HomePage />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/farm/:id' element={<FarmDetail />} />
          <Route path='/product/:id' element={<ProductDetail />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;