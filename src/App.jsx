import "./app.scss"
import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home"
import About from "./components/about/About"
import Project from "./components/project/Project"
import Contact from "./components/contact/Contact"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
         <Home/>
      <About/>
      <Project/>
      <Contact/>
      </div>
     
    </div>
  );
}

export default App;
