import './App.css';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Nav } from './Components/Nav/Nav';
import { About } from './Components/About/About';
import { Speakers } from "./Components/Speakers/Speakers"
import { Agenda } from './Components/Agenad/Agenda';
import { Sponsors } from './Components/Sponsors/Sponsors';
import { Tickets } from './Components/TICKETS/TICKETS';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <About/>
      <Agenda/>
      <Speakers/>
      <Sponsors/>
      <Tickets/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
