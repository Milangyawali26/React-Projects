import { Routes , Route} from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route  path='/cart' element={<Cart/>}></Route>
      </Routes>
    </>
  );
}

export default App;
