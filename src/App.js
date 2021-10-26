import './App.css';
import Navbar from './components/Navbar';
import "bootstrap-4.5.3/dist/css/bootstrap.min.css";
// import "bootstrap-4.0.0/dist/css/bootstrap.min.css";
// import "bootstrap-5.0.0-beta3/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Particles from 'react-particles-js';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contacts from './components/Contacts';

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          "particles": {
            "number": {
              "value": 50
            },
            "size": {
              "value": 3
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }}

      />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contacts />
    </>
  );
}
export default App;