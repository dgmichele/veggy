import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Gestione pagine con il routing
import Home from './pages/Home';
import RecipePage from './pages/RecipePage';
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
  <Router>
    <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Rotta dinamica ("/recipe/:id") che renderizza la pagina dei dettagli della ricetta */}
            <Route path="/recipe/:id" element={<RecipePage />} />
          </Routes>
        </main>
      <Footer />
  </Router>
   </>
  );
};

export default App;