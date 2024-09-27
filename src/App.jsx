import Navbar from "./components/Navbar";
import { Main } from "./components/Main";
import { About } from "./components/About";
import { Feature } from "./components/Feature";


function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="sections">
          <section
            id="main"
            className="min-h-screen flex items-center justify-center bg-custom-light-blue"
          >
            <Main />
          </section>
      
          <section
            id="about"
            className="min-h-screen flex items-center justify-center bg-gradient-to-t from-bgcolor-01 via-custom-dark-blue to-bgcolor-02"
          >
            <About />
          </section>
          <section
            id="feature"
            className="min-h-screen flex items-center justify-center bg-gradient-to-b from-bgcolor-01 via-custom-dark-blue to-bgcolor-02"
          >
            <Feature />
          </section>
          
          </div>
       
      </div>
    </>
  );
}

export default App;
