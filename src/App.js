import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleCityPage from "./pages/SingleCityPage";
import AboutPage from "./pages/AboutPage";
import OverviewPage from "./pages/OverviewPage";
import ComparisonPage from "./pages/ComparisonPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="body">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/city/:name" component={SingleCityPage} />
          <Route path="/overview" component={OverviewPage} />
          <Route
            path="/compare/:cityname1/:cityname2"
            component={ComparisonPage}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
