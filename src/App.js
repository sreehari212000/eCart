import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import CategoryProducts from "./pages/CategoryProducts";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/:id" element={<SingleProduct />}/>
        <Route path="/categories/:category" element={<CategoryProducts />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
