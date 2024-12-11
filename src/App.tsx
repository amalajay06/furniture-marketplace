import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import Categories from './components/home/Categories';
import FeaturedProducts from './components/home/FeaturedProducts';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
}

export default App;