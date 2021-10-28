import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar/Navbar";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import Series from "./components/Series/Series";
import Movies from "./components/Movies/Movies";

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/series">
          <Series  /> 
        </Route>
        <Route path="/movies">
         <Movies/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
