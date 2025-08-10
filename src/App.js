import "./styles/main.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import React from "react";


function App() {
  return (
    <div className="App">
      
      <Navbar />

      <Header />

      <Main />

      <Footer />

    </div>
  );
}

export default App;
