import Navbar from "./components/Navbar";
import { Main } from "./components/Main";
import { About } from "./components/About";
import { Feature } from "./components/Feature";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="sections">
          <section
            id="main"
            className="min-h-screen flex items-center justify-center bg-gray-100"
          >
            <Main />
          </section>
          <section
            id="about"
            className="min-h-screen flex items-center justify-center bg-gray-200"
          >
            <About />
          </section>
          <section
            id="feature"
            className="min-h-screen flex items-center justify-center bg-gray-300"
          >
            <Feature />
          </section>
          <section
            id="contact"
            className="min-h-screen flex items-center justify-center bg-gray-400"
          >
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
