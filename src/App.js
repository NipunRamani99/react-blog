import './styles/App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Navbar  from './components/header/Navbar';
import Project from './components/portfolio/Project';
import PostList from './components/posts/PostList';
import NotFound from './components/notfound/notfound';
import Post from './components/posts/Post';
import AboutMe from './components/aboutme/AboutMe';
import TimeComponent from './TimeComponent';

function App() {
 
  return (
    <Router>
      <TimeComponent/>
      <img class="background-media" src="firewatch.jpg"></img>
      <Navbar/>
      <Routes>
      <Route path="/" element={<AboutMe/>} />
      <Route path="/about" element={<AboutMe/>} />  
      <Route path="/project" element={<Project/>} />  
      <Route path="/posts" element={<PostList/>} />
      <Route path="/posts/:id" element={<Post/>}/>
      <Route path="/404" element={<NotFound/>} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
