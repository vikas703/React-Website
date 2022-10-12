import './App.css';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
//import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Certificates from './Components/Certificates/Certificates';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Portfolio />
    <Certificates />
     <Contact />
     <Footer />
        
    </>
  );
}

export default App;
