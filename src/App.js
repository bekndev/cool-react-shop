import { useEffect } from "react";
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom";
import About from "./components/About";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { getCategories, getProducts } from "./store/actions/shopActions";

function App() {
  useEffect(() => {
      getProducts();
      getCategories();
  }, []);

  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;