
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Layouts/Header/Header'
import Home from "./components/Home/Home";
import Footer from "./components/Layouts/Footer/Footer";
import Login from './components/Login/Login'
import Cart from './components/Cart/Cart';
function App() {
  return (
<div>
<Router>

  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/cart" element={<Cart/>}/>
  </Routes>
</Router>
  <Footer/>

</div>
  );
}

export default App;
