import { Route, Router } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero";
import Products from "./components/products";
import Example from "./components/footer";
import Video from "./components/video";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";
import "./base.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <Header />
      <Hero />
      <Products /> */}
      <Route exact path="/" component={Hero} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/aiza" component={Example} />
      <Route exact path="/video" component={Video} />
      <Route exact path="/subscribe" component={Subscribe} />
      <Route exact path="/footer" component={Footer} />
    </div>
  );
};

export default App;
