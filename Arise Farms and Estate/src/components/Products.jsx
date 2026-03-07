import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import './Products.css';

function Products() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProduct]);

  const categories = ['All', 'Vegetables', 'Fruits', 'Livestock', 'Products', 'Dairy', 'Grains'];

  const [products] = useState([
    {
      id: 1,
      name: 'Fresh Vegetables',
      category: 'Vegetables',
      price: 0.50,
      unit: 'kg',
      image: '/layout.jpeg.png',
      description: 'Fresh organic vegetables directly from our farm. Our vegetables are grown using sustainable farming practices, ensuring maximum nutrition and flavor.',
      features: ['100% Organic', 'Freshly Harvested', 'Chemical Free', 'Locally Grown']
    },
    {
      id: 2,
      name: 'Organic Fruits',
      category: 'Fruits',
      price: 1.00,
      unit: 'kg',
      image: '/livestock.png',
      description: 'Juicy, ripe fruits grown naturally without any synthetic pesticides or fertilizers.',
      features: ['Naturally Ripened', 'Rich in Vitamins', 'No Pesticides', 'Fresh Daily']
    },
    {
      id: 3,
      name: 'Farm Eggs',
      category: 'Livestock',
      price: 5.00,
      unit: 'dozen',
      image: '/drone.jpeg.png',
      description: 'Fresh eggs from free-range hens that roam our farm freely and are fed organic feed.',
      features: ['Free-Range', 'Organic Feed', 'Farm Fresh', 'High Protein']
    },
    {
      id: 4,
      name: 'Raw Honey',
      category: 'Products',
      price: 15.00,
      unit: 'jar',
      image: '/layout.jpeg.png',
      description: 'Pure, raw honey from our own apiaries. Collected from multiple floral sources for unique flavor profiles.',
      features: ['100% Pure', 'Raw & Unfiltered', 'Natural Sweetener', 'Rich in Antioxidants']
    },
    {
      id: 5,
      name: 'Fresh Milk',
      category: 'Dairy',
      price: 3.00,
      unit: 'liter',
      image: '/livestock.png',
      description: 'Fresh, unpasteurized milk from our grass-fed cows. Rich in nutrients and creamy taste.',
      features: ['Grass-Fed Cows', 'No Hormones', 'Fresh Daily', 'Creamy Taste']
    },
    {
      id: 6,
      name: 'Organic Grains',
      category: 'Grains',
      price: 2.00,
      unit: 'kg',
      image: '/mainiamge.jpg.png',
      description: 'Premium quality wheat and rice grown using organic farming methods.',
      features: ['Non-GMO', 'High Fiber', 'Whole Grain', 'Sustainably Grown']
    }
  ]);

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const openQuickView = (product) => {
    setSelectedProduct(product);
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="products">
      <div className="products-container">
        <div className="section-header">
          <span className="section-label">Our Products</span>
          <h2 className="section-title">Fresh From Our Farm</h2>
          <p className="section-description">
            Discover our wide range of fresh, organic farm products delivered directly to you
          </p>
        </div>

        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image" onClick={() => openQuickView(product)}>
                <img src={product.image} alt={product.name} className="product-img" />
                <span className="product-category">{product.category}</span>
                <div className="quick-view-overlay">
                  <span>Quick View</span>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description.substring(0, 60)}...</p>
                <div className="product-footer">
                  <div className="product-price">
                    <span className="price-value">π {product.price}</span>
                    <span className="price-unit">/ {product.unit}</span>
                  </div>
                  <button className="btn-add-cart" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick View Modal */}
        {selectedProduct && (
          <div className="modal-overlay" onClick={closeQuickView}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeQuickView}>✕</button>
              <div className="modal-body">
                <div className="modal-image">
                  <img src={selectedProduct.image} alt={selectedProduct.name} />
                </div>
                <div className="modal-details">
                  <span className="modal-category">{selectedProduct.category}</span>
                  <h3>{selectedProduct.name}</h3>
                  <p className="modal-description">{selectedProduct.description}</p>
                  <ul className="modal-features">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index}>✓ {feature}</li>
                    ))}
                  </ul>
                  <div className="modal-price">
                    <span className="price-value">π {selectedProduct.price}</span>
                    <span className="price-unit">/ {selectedProduct.unit}</span>
                  </div>
                  <button className="btn-add-cart" onClick={() => { addToCart(selectedProduct); closeQuickView(); }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;

