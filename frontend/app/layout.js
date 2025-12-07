import Header from './components/Header';
import './globals.css';

export const metadata = {
  title: 'GEECY',
  description: 'Your favorite online shopping destination'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={bodyStyle}>
        <Header />
        <main style={mainStyle}>
          {children}
        </main>
        <footer style={footerStyle}>
          <div style={footerContentStyle}>
            <p>© 2025 GEECY. All rights reserved.</p>
            <div style={footerLinksStyle}>
              <a href="#" style={footerLinkStyle}>Privaatsuspoliitika</a>
              <a href="#" style={footerLinkStyle}>Reeglid</a>
              <a href="#" style={footerLinkStyle}>Kontakt</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

const bodyStyle = {
  margin: 0,
  padding: 0,
  backgroundColor: '#ffffff',
  minHeight: '100vh',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
};

const mainStyle = {
  minHeight: 'calc(100vh - 200px)',
  backgroundColor: '#ffffff'
};

const footerStyle = {
  backgroundColor: '#f8f8f8',
  borderTop: '1px solid #e0e0e0',
  padding: '40px 0',
  marginTop: '60px'
};

const footerContentStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '20px'
};

const footerLinksStyle = {
  display: 'flex',
  gap: '20px'
};

const footerLinkStyle = {
  color: '#666',
  textDecoration: 'none',
  fontSize: '14px'
};
  