import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import About from "./components/About"
import Contact from "./components/Contact"
import Offers from "./components/Offers"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import Notfound from "./components/NotFound"
import ItemDetailContainer from "./components/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"


//<ItemDetailContainer/>
//<Footer/>
function App() {
  return (
    <div>
      
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Welcome to Coffee Store"/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/offers" element={<Offers/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/category/:categoryId" element={<ItemListContainer />}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
