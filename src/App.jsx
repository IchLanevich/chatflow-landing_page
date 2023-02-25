import { useState } from "react";
import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <section id="hero" className="mx-auto">
        <div className="hero h-[1100px] md:h-[777px]">
          <div className="backdrop-blur-md h-full w-full">
            <div className="container mx-auto px-4 md:px-0">
              <Navbar />
              <Hero />
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="container mx-auto py-[100px] px-4 md:px-0"
      >
        <Features />
      </section>

      <section id="product" className="mx-auto py-[50px] product-section-bg">
        <div className="container mx-auto px-4 md:px-0">
          <Product />
        </div>
      </section>

      <section id="plan" className="container mx-auto py-[100px] px-4 md:px-0">
        <Pricing />
      </section>

      <footer id="footer" className="mx-auto">
        <div className="container mx-auto px-4 md:px-0">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
