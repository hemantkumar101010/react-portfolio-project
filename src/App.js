import './App.css';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Particles from 'react-particles-js';

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

    </>
  );
}
export default App;