import React from 'react';
import { GlobalProvider } from './context/GlobalContext';
import Background from './components/ThemeBg';
import Header from './components/Header';
import MainContent from './pages/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <GlobalProvider>
        <>
          <Background />
          <Header />
          <MainContent />
          <Footer />
        </>
      </GlobalProvider>
    </div>
  );
}

export default App;
