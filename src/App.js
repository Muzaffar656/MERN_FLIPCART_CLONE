
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Layouts/Header/Header'
import Home from "./components/Home/Home";
import Footer from "./components/Layouts/Footer/Footer";
function App() {
  return (
    <Router>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
  </Routes>
  <Footer/>
 </Router>
  );
}

export default App;
