import {React, useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';

const body = {
  maxWidth: '1200px',
  padding: '0 1rem',
  marginLeft: 'auto',
  marginRight: 'auto',
};

function Home() {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div style={body}>
      <Navbar />
      <Header setIsAdding={setIsAdding} />
      <Footer />
    </div>
  );
}

export default Home;
