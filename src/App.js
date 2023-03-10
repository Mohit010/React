// import logo from './logo.svg';
// import './App.css';

import Header from "./Components/Header/Header";
import Hero from "./Components/Product/Hero";
import Similar_Product from "./Components/Similar_Product";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <hr style={{margin:"70px"}}/>
      <Similar_Product />

    </div>
  );
}

export default App;
