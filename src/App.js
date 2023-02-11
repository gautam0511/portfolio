import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import About from './components/about/About';
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Service from './components/services/Service';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Service/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
