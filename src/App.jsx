import gsap from "gsap";
import {Draggable} from "gsap/Draggable";

import {Navbar, Welcome, Dock, Home} from "#components"
import {Terminal, Safari, Resume, Finder, Txtfile, ImgFile, Contact} from "#windows"

gsap.registerPlugin(Draggable);

const App = () => {
    return (
      <main>
          <Navbar/>
          <Welcome/>
          <Dock/>
          <Home/>

          <Terminal/>
          <Safari/>
          <Resume/>
          <Finder/>
          <Txtfile/>
          <ImgFile/>
          <Contact />
      </main>
    );
}
export default App
