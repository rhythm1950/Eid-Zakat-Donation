import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Gallery></Gallery>
      <Blogs></Blogs>
      <Footer></Footer>
    </>
  );
};

export default App;
