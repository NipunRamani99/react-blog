import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import {useState} from "react";
import {signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {auth} from "./firebase-config.js";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const signUserOut = ()=>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    })
  };

  return (
    <Router>
      <nav>
      <Link to="/">Home</Link>
      {isAuth && <Link to="/createpost">Create Post</Link> }
      {!isAuth ? <Link to="/login">Login</Link> : <button onClick={signUserOut}>Log out</button>}
      </nav>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />  
      <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}/>
      <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
