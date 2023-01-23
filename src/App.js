import './App.css';
import Nav from "./components/nav/Nav";
import Footer from "./footer/Footer";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import AboutBible from "./pages/aboutBible/AboutBible";
import AboutJubilee from "./pages/aboutJubilee/AboutJubilee";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Favorite from "./pages/favorite/Favorite";
import NotFound from "./pages/notFound/NotFound";

function App() {

    const auth = false;

    return (
    <>
      <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/about-Bible" element={<AboutBible/>}></Route>
            <Route path="/about-Jubilee" element={<AboutJubilee/>}></Route>
            <Route path="/signup" element={<Register/>}></Route>
            <Route path="/signin" element={<Login/>}></Route>
            <Route path="/favorite" element={<Favorite/>}></Route>
            <Route path="/profile" element={auth === true ? <Profile/> : <Navigate to="/signup"/>}></Route>
            <Route path="/favorite-auth" element={auth === true ? <Favorite/> : <Navigate to="/search"/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
