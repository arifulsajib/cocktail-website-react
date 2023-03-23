import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import CocktailPage from "./Pages/CocktailPage/CocktailPage";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/cocktails" element={<CocktailPage></CocktailPage>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
