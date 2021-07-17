import React, { useEffect } from 'react';

import { Switch, Route } from 'react-router-dom';
import { gsap } from 'gsap';

import { GlobalProvider } from './context/GlobalContext';
import Background from './components/ThemeBg';
import Header from './components/Header';
import HomePage from './pages/Home';
import Footer from './components/Footer';

const tl = gsap.timeline({
  smoothChildTiming: true,
});

function App() {
  useEffect(() => {
    tl.to('.app', {
      delay: 0,
      duration: 0,
      css: {
        visibility: 'visible',
      },
    });
  }, []);

  return (
    <div className="app">
      <GlobalProvider>
        <>
          <Background />
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/about" />
            <Route exact path="/timeline" />
            <Route exact path="/skill" />
          </Switch>
          <Footer />
        </>
      </GlobalProvider>
    </div>
  );
}

export default App;
