import { useState } from 'react';
import './Products.css';

function Products() {
  const [products] = useState([
    {
      id: 1,
      name: 'Fresh Vegetables',
      category: 'Vegetables',
      price: 0.50,
      unit: 'kg',
      image: '/layout.jpeg.png',
      description: 'Fresh organic vegetables directly from our farm'
    },
    {
      id: 2,
      name: 'Organic Fruits',
      category: 'Fruits',
      price: 1.00,
      unit: 'kg',
      image: '/livestock.png',
      description: 'Juicy, ripe fruits grown naturally'
    },
    {
      id: 3,
      name: 'Farm Eggs',
      category: 'Livestock',
      price: 5.00,
      unit: 'dozen',
      image: '/drone.jpeg.png',
      description: 'Fresh eggs from free-range hens'
    },
    {
      id: 4,
      name: 'Raw Honey',
      category: 'Products',
      price: 15.00,
      unit: 'jar',
      image: '/layout.jpeg.png',
      description: 'Pure, raw honey from our apiaries'
    },
    {
      id: 5,
      name: 'Fresh Milk',
      category: 'Dairy',
      price: 3.00,
      unit: 'liter',
      image: '/livestock.png',
      description: 'Fresh, unpasteurized milk from our cows'
    },
    {
      id: 6,
      name: 'Organic Grains',
      category: 'Grains',
      price: 2.00,
      unit: 'kg',
      image: '/mainiamge.jpg.png',
      description: 'Premium quality wheat and rice'
    }
  ]);

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
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} className="product-img" />
                <span className="product-category">{product.category}</span>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <div className="product-price">
                    <span className="price-value">π {product.price}</span>
                    <span className="price-unit">/ {product.unit}</span>
                  </div>
                  <button className="btn-add-cart" onClick={() => alert(`${product.name} added to cart!`)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;

