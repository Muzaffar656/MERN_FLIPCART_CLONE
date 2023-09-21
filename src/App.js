
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Layouts/Header/Header'
import Home from "./components/Home/Home";
import Footer from "./components/Layouts/Footer/Footer";
import Login from './components/User/Login'
import Cart from './components/Cart/Cart';
import Register from './components/User/Register';
function App() {
  return (
<div>
<Router>

  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path='/register' element={<Register/>}/>
  </Routes>
</Router>
  <Footer/>

</div>
  );
}

export default App;
