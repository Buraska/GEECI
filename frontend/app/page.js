import ProductCard from './components/ProductCard';

export default function HomePage() {
  // Sample product data - in a real app, this would come from an API
  const products = [
    {
      id: 1,
      name: 'Kosmeetikatoodete komplekt',
      price: 29.99,
      originalPrice: 49.99,
      description: 'Luxury cosmetic set with premium skincare products. Perfect for daily beauty routine.',
      image: 'https://via.placeholder.com/300x300/FFB6C1/FFFFFF?text=Cosmetics'
    },
    {
      id: 2,
      name: 'Talvised lasterõivad',
      price: 24.99,
      originalPrice: 39.99,
      description: 'Warm and comfortable winter clothing for children. High quality materials.',
      image: 'https://via.placeholder.com/300x300/87CEEB/FFFFFF?text=Kids+Clothes'
    },
    {
      id: 3,
      name: 'Luksustooted kehale',
      price: 34.99,
      originalPrice: 54.99,
      description: 'Premium body care products. Nourishing and hydrating formulas for all skin types.',
      image: 'https://via.placeholder.com/300x300/DDA0DD/FFFFFF?text=Body+Care'
    },
    {
      id: 4,
      name: 'Didriksons rõivad',
      price: 59.99,
      originalPrice: 89.99,
      description: 'Quality clothing for everyone. Durable and stylish designs for all occasions.',
      image: 'https://via.placeholder.com/300x300/98D8C8/FFFFFF?text=Clothing'
    },
    {
      id: 5,
      name: 'Ehtsast nahast poolsaapad',
      price: 39.99,
      originalPrice: 69.99,
      description: 'Genuine leather boots. Comfortable and durable footwear for everyday wear.',
      image: 'https://via.placeholder.com/300x300/F4A460/FFFFFF?text=Boots'
    },
    {
      id: 6,
      name: 'Meeste aluspeskomplektid',
      price: 19.99,
      originalPrice: 29.99,
      description: 'Comfortable men\'s underwear sets. Soft materials and perfect fit.',
      image: 'https://via.placeholder.com/300x300/B0C4DE/FFFFFF?text=Underwear'
    },
    {
      id: 7,
      name: 'Laste poolsaapad',
      price: 22.99,
      originalPrice: 34.99,
      description: 'Children\'s boots for winter. Warm and waterproof design.',
      image: 'https://via.placeholder.com/300x300/FFE4B5/FFFFFF?text=Kids+Boots'
    },
    {
      id: 8,
      name: 'Talvejoped',
      price: 79.99,
      originalPrice: 119.99,
      description: 'Winter jackets with excellent insulation. Stay warm in cold weather.',
      image: 'https://via.placeholder.com/300x300/E0E0E0/FFFFFF?text=Winter+Jacket'
    },
    {
      id: 9,
      name: 'Kodulõhnastajad ja küünlad',
      price: 14.99,
      originalPrice: 24.99,
      description: 'Home fragrances and candles. Create a cozy atmosphere in your home.',
      image: 'https://via.placeholder.com/300x300/FFF8DC/FFFFFF?text=Candles'
    },
    {
      id: 10,
      name: 'Rõivad naistele ja meestele',
      price: 44.99,
      originalPrice: 69.99,
      description: 'Fashionable clothing for women and men. Modern designs and quality fabrics.',
      image: 'https://via.placeholder.com/300x300/F0F8FF/FFFFFF?text=Fashion'
    },
    {
      id: 11,
      name: 'Jalatsid ja aksessuaarid',
      price: 49.99,
      originalPrice: 79.99,
      description: 'Stylish shoes and accessories. Complete your look with our collection.',
      image: 'https://via.placeholder.com/300x300/FFE4E1/FFFFFF?text=Shoes'
    },
    {
      id: 12,
      name: 'Kodutarbed',
      price: 29.99,
      originalPrice: 44.99,
      description: 'Home essentials and household items. Everything you need for your home.',
      image: 'https://via.placeholder.com/300x300/E6E6FA/FFFFFF?text=Home+Goods'
    }
  ];

  return (
    <div style={containerStyle}>
      <div style={bannerStyle}>
        <h1 style={bannerTitleStyle}>Kosmeetikatoodete komplektid kuni 40% allahindlusega!</h1>
      </div>
      
      <div style={productsContainerStyle}>
        <div style={productsGridStyle}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#ffffff'
};

const bannerStyle = {
  backgroundColor: '#f8f8f8',
  padding: '40px 20px',
  textAlign: 'center',
  marginBottom: '40px',
  borderRadius: '8px'
};

const bannerTitleStyle = {
  fontSize: '28px',
  fontWeight: '600',
  color: '#333',
  margin: 0
};

const productsContainerStyle = {
  width: '100%'
};

const productsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: '24px',
  padding: '20px 0'
};
