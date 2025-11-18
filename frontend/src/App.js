import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Voluntarios from "./pages/Voluntarios";
import Doacoes from "./pages/Doacoes";
import Contato from "./pages/Contato";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/voluntarios" element={<Voluntarios />} />
            <Route path="/doacoes" element={<Doacoes />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
          <Footer />
          <Toaster />
          <ThemeToggle />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
