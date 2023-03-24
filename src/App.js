import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import CocktailPage from "./Pages/CocktailPage/CocktailPage";
import Footer from "./Components/Footer/Footer";
import DynamicDrinkDetails from "./Components/DynamicDrinkDetails/DynamicDrinkDetails";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/cocktails" element={<CocktailPage></CocktailPage>}></Route>
          <Route path="/drinkdetails/:id" element={<DynamicDrinkDetails></DynamicDrinkDetails>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
