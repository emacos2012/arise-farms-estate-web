import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Toast from './components/Toast';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <Cart />
        <Toast />
        <main>
          <Hero />
          <About />
          <Products />
          <Services />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;

