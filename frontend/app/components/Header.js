'use client';

import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);
  const [currentCategory, setCurrentCategory] = useState('IBM');
  const [sortOption, setSortOption] = useState('Newest');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const categories = [
    'All',
    'Apple',
    'IBM',
    'Hot Prices',
  ];

  const sortOptions = [
    'Newest',
    'Oldest',
    'High Price',
    'Low Price'
  ];

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    if (!isSearchVisible) {
      // Focus the input when it becomes visible
      setTimeout(() => {
        const input = document.getElementById('search-input');
        if (input) input.focus();
      }, 100);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const sortDropdownRef = useRef(null);
  const accountDropdownRef = useRef(null);

  // Close sort dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
      if (accountDropdownRef.current && !accountDropdownRef.current.contains(event.target)) {
        setIsAccountOpen(false);
      }
    };

    if (isSortOpen || isAccountOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSortOpen, isAccountOpen]);

  return (
    <>
      {/* Top Bar - Language and Contacts */}
      <div style={topBarStyle}>
        <div style={topBarContentStyle}>
          <div style={topBarLeftStyle}>
            <a href="#" style={topBarLinkStyle}>Contacts</a>
          </div>
          <div style={topBarRightStyle}>
            <select 
              style={topBarLanguageSelectStyle}
              value={currentLanguage}
              onChange={(e) => setCurrentLanguage(e.target.value)}
            >
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="ee">EE</option>
            </select>
          </div>
        </div>
      </div>

      <header style={headerStyle}>
        <div style={headerContentStyle}>

        <div></div>

          {/* Logo - Center */}
          <div style={logoContainerStyle}>
            <a href="/" style={logoLinkStyle}>
              <div style={logoStyle}>G E E C Y</div>
            </a>
          </div>

          {/* Right Side - Search and Cart */}
          <div style={rightSideStyle}>
            {/* Search Button/Input */}
            <div style={searchWrapperStyle}>
              {isSearchVisible ? (
                <div style={searchContainerStyle}>
                  <input
                    id="search-input"
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onBlur={() => {
                      // Keep search visible if there's text
                      if (!searchQuery) {
                        setTimeout(() => setIsSearchVisible(false), 200);
                      }
                    }}
                    style={searchInputStyle}
                  />
                  <button 
                    style={closeSearchButtonStyle}
                    onClick={() => {
                      setIsSearchVisible(false);
                      setSearchQuery('');
                    }}
                    aria-label="Close search"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <button 
                  style={searchButtonStyle}
                  onClick={toggleSearch}
                  aria-label="Search"
                >
                  <span style={searchIconStyle}>🔍</span>
                </button>
              )}
            </div>

            {/* Cart Button */}
            <button style={cartButtonStyle} aria-label="Shopping cart">
              <span style={cartIconStyle}>🛒</span>
              {cartCount > 0 && (
                <span style={cartCountStyle}>{cartCount}</span>
              )}
            </button>

            {/* Account Button */}
            <div style={accountSectionStyle} ref={accountDropdownRef}>
              <button 
                style={accountButtonStyle}
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                aria-label="Account"
              >
                <span style={accountIconStyle}>👤</span>
              </button>
              {isAccountOpen && (
                <div style={accountDropdownStyle}>
                  <button
                    className="account-option"
                    style={accountOptionStyle}
                    onClick={() => {
                      setIsAccountOpen(false);
                      // Handle sign in
                    }}
                  >
                    Sign in
                  </button>
                  <button
                    className="account-option"
                    style={accountOptionStyle}
                    onClick={() => {
                      setIsAccountOpen(false);
                      // Handle my orders
                    }}
                  >
                    My Orders
                  </button>
                  <button
                    className="account-option"
                    style={accountOptionStyle}
                    onClick={() => {
                      setIsAccountOpen(false);
                      // Handle account settings
                    }}
                  >
                    Account Settings
                  </button>
                </div>
              )}
            </div>

          {/* Menu Button - Left */}
            <button 
            style={menuButtonStyle}
            onClick={toggleMenu}
            aria-label="Menu">
            <span style={hamburgerStyle}>
              <span style={hamburgerLineStyle}></span>
              <span style={hamburgerLineStyle}></span>
              <span style={hamburgerLineStyle}></span>
            </span>
          </button>
          </div>
        </div>

        {/* Bottom Section - Category and Sort */}
        <div style={bottomSectionStyle}>
          <div style={bottomContentStyle}>
            <div style={categorySectionStyle}>
              <span style={categoryNameStyle}>{currentCategory}</span>
              <span style={itemsCountStyle}>{itemsCount} items</span>

            </div>
            <div style={sortSectionStyle} ref={sortDropdownRef}>
              <button 
                style={sortButtonStyle}
                onClick={() => setIsSortOpen(!isSortOpen)}
                aria-label="Sort"
              >
                <span style={sortButtonTextStyle}>Sort: {sortOption}</span>
                <span style={sortIconStyle}>{isSortOpen ? '▲' : '▼'}</span>
              </button>
              {isSortOpen && (
                <div style={sortDropdownStyle}>
                  {sortOptions.map((option, index) => (
                    <button
                      key={index}
                      style={{
                        ...sortOptionStyle,
                        fontWeight: sortOption === option ? '600' : '400',
                        backgroundColor: sortOption === option ? '#f8f8f8' : 'transparent'
                      }}
                      onClick={() => {
                        setSortOption(option);
                        setIsSortOpen(false);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Side Menu Overlay */}
      {isMenuOpen && (
        <>
          <div style={overlayStyle} onClick={closeMenu}></div>
          <div style={sideMenuStyle}>
            <div style={menuHeaderStyle}>
              <h2 style={menuTitleStyle}>Menüü</h2>
              <button 
                style={closeMenuButtonStyle}
                onClick={closeMenu}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <nav style={menuNavStyle}>
              {categories.map((category, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="menu-category-link"
                  style={menuCategoryLinkStyle}
                  onClick={closeMenu}
                >
                  {category}
                </a>
              ))}
            </nav>
            <div style={menuFooterStyle}>
              <a href="#" style={menuFooterLinkStyle}>Logi sisse</a>
              <span style={menuSeparatorStyle}>|</span>
              <a href="#" style={menuFooterLinkStyle}>Registreeru</a>
            </div>
          </div>
        </>
      )}
    </>
  );
}

// Top Bar Styles
const topBarStyle = {
  padding: '8px 0 0 0',
  fontSize: '12px'
};

const topBarContentStyle = {
  margin: '0 20px',
  padding: '0 20px',
  display: 'flex',
  justifyContent: 'end',
  gap: '10px',
};

const topBarLeftStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
};

const topBarRightStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px'
};

const topBarLinkStyle = {
  color: '#333',
  textDecoration: 'none',
  fontSize: '12px',
  transition: 'opacity 0.2s'
};

const topBarLanguageSelectStyle = {
  padding: '4px 8px',
  border: '0px solid #ddd',
  borderRadius: '4px',
  backgroundColor: '#fff',
  cursor: 'pointer',
  fontSize: '12px',
  color: '#333'
};

const headerStyle = {
  backgroundColor: '#fff',
  borderBottom: '1px solid #e0e0e0',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

const bottomSectionStyle = {
  padding: '12px 0'
};

const bottomContentStyle = {
  maxWidth: '1400px',
  margin: '0 auto',
  padding: '0 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const categorySectionStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px'
};

const categoryNameStyle = {
  fontSize: '14px',
  fontWeight: '500',
  color: '#333',
  letterSpacing: '0.5px',
  textTransform: 'uppercase'
};


const itemsCountStyle = {
    fontSize: '14px',
    fontWeight: '200',
    color: '#333',
    letterSpacing: '0.5px',
  };

const delimiterStyle = {
  fontSize: '14px',
  color: '#999',
  margin: '0 4px'
};

const sortSectionStyle = {
  position: 'relative'
};

const sortButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '8px 16px',
  backgroundColor: 'transparent',
  border: '0px solid #ddd',
  borderRadius: '0',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '400',
  color: '#333',
  letterSpacing: '0.5px',
  transition: 'border-color 0.2s',
  fontFamily: 'inherit'
};

const sortButtonTextStyle = {
  fontSize: '14px'
};

const sortIconStyle = {
  fontSize: '10px',
  transition: 'transform 0.2s'
};

const sortDropdownStyle = {
  position: 'absolute',
  top: '100%',
  right: 0,
  marginTop: '4px',
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  minWidth: '180px',
  zIndex: 1002,
  animation: 'fadeIn 0.2s ease'
};

const sortOptionStyle = {
  display: 'block',
  width: '100%',
  padding: '12px 16px',
  backgroundColor: 'transparent',
  border: 'none',
  textAlign: 'left',
  cursor: 'pointer',
  fontSize: '14px',
  color: '#333',
  transition: 'background-color 0.2s',
  textTransform: 'none',
  letterSpacing: 'normal'
};

const headerContentStyle = {
  maxWidth: '1400px',
  margin: '0 auto',
  padding: '16px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative'
};

const menuButtonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1001
};

const hamburgerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  width: '24px',
  height: '18px',
  justifyContent: 'center'
};

const hamburgerLineStyle = {
  width: '24px',
  height: '2px',
  backgroundColor: '#333',
  transition: 'all 0.3s ease'
};

const logoContainerStyle = {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1000
};

const logoLinkStyle = {
  textDecoration: 'none',
  color: 'inherit'
};

const logoStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#333',
  letterSpacing: '1px'
};

const rightSideStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  zIndex: 1001
};

const searchWrapperStyle = {
  position: 'relative'
};

const searchContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #ddd',
  borderRadius: '4px',
  overflow: 'hidden',
  backgroundColor: '#fff',
  animation: 'slideIn 0.3s ease'
};

const searchInputStyle = {
  padding: '10px 16px',
  border: 'none',
  outline: 'none',
  fontSize: '14px',
  width: '300px'
};

const closeSearchButtonStyle = {
  padding: '10px 12px',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  fontSize: '18px',
  color: '#666',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const searchButtonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px'
};

const searchIconStyle = {
  fontSize: '20px'
};

const cartButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  padding: '8px 16px',
  border: '0px solid #ddd',
  backgroundColor: '#fff',
  cursor: 'pointer',
  fontSize: '16px',
  position: 'relative'
};

const cartIconStyle = {
  fontSize: '20px'
};

const cartCountStyle = {
  position: 'absolute',
  top: '-4px',
  right: '-4px',
  backgroundColor: '#e74c3c',
  color: '#fff',
  borderRadius: '50%',
  width: '20px',
  height: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '11px',
  fontWeight: 'bold'
};

// Account Button Styles
const accountSectionStyle = {
  position: 'relative'
};

const accountButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  fontSize: '20px'
};

const accountIconStyle = {
  fontSize: '20px'
};

const accountDropdownStyle = {
  position: 'absolute',
  top: '100%',
  right: 0,
  marginTop: '8px',
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  minWidth: '180px',
  zIndex: 1002,
  animation: 'fadeIn 0.2s ease',
  display: 'flex',
  flexDirection: 'column'
};

const accountOptionStyle = {
  display: 'block',
  width: '100%',
  padding: '12px 16px',
  backgroundColor: 'transparent',
  border: 'none',
  textAlign: 'left',
  cursor: 'pointer',
  fontSize: '14px',
  color: '#333',
  transition: 'background-color 0.2s',
  borderBottom: '1px solid #f0f0f0'
};

// Side Menu Styles
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1000,
  animation: 'fadeIn 0.3s ease'
};

const sideMenuStyle = {
  position: 'fixed',
  top: 0,
  right: 0,
  width: '320px',
  height: '100vh',
  backgroundColor: '#fff',
  boxShadow: '-2px 0 8px rgba(0,0,0,0.15)',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  animation: 'slideInRight 0.3s ease',
  overflowY: 'auto'
};

const menuHeaderStyle = {
  padding: '20px',
  borderBottom: '1px solid #e0e0e0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const menuTitleStyle = {
  fontSize: '20px',
  fontWeight: '600',
  color: '#333',
  margin: 0
};

const closeMenuButtonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '24px',
  color: '#666',
  padding: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px'
};

const menuNavStyle = {
  flex: 1,
  padding: '20px 0',
  display: 'flex',
  flexDirection: 'column'
};

const menuCategoryLinkStyle = {
  padding: '16px 20px',
  color: '#333',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: '500',
  borderBottom: '1px solid #f0f0f0',
  transition: 'background-color 0.2s, padding-left 0.2s',
  display: 'block'
};

const menuFooterStyle = {
  padding: '20px',
  borderTop: '1px solid #e0e0e0',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px'
};

const menuFooterLinkStyle = {
  color: '#333',
  textDecoration: 'none',
  fontSize: '14px'
};

const menuSeparatorStyle = {
  color: '#ccc',
  margin: '0 8px'
};

const languageSelectContainerStyle = {
  marginTop: '8px'
};

const languageSelectStyle = {
  padding: '8px 12px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  backgroundColor: '#fff',
  cursor: 'pointer',
  width: '100%',
  fontSize: '14px'
};
