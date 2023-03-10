// import logo from './logo.svg';
// import './App.css';

import Header from "./Components/Header/Header";
import Hero from "./Components/Product/Hero";
import Recently_viewed from "./Components/Recently_viewed";
import Similar_Product from "./Components/Similar_Product";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <hr style={{margin:"70px"}}/>
      <Similar_Product />
      <Recently_viewed />
      <Footer />

    </div>
  );
}

export default App;
