import './App.scss';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import {useState} from "react";
import {signOut} from "firebase/auth";
import {auth} from "./firebase-config.js";
import Navbar  from './components/header/Navbar';
import Project from './components/portfolio/Project';
import PostList from './components/posts/PostList';
import NotFound from './components/notfound/notfound';
import Post from './components/posts/Post';
import AboutMe from './components/aboutme/AboutMe';
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
      <Navbar/>
      <Routes>
      <Route path="/" element={<AboutMe/>} />
      <Route path="/about" element={<AboutMe/>} />  
      <Route path="/project" element={<Project/>} />  
      <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}/>
      <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
      <Route path="/posts" element={<PostList/>} />
      <Route path="/posts/:id" element={<Post/>}/>
      <Route path="/404" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
