
import './App.css';
import Assignments from './components/Assignments/Assignments';
import NavBar from './components/NavBar/NavBar';
import PhoneBar from './components/PhoneBar/PhoneBar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="text-3xl font-bold underline">This is tailwind</h1>
      <p>this is also same.</p>
      <Pricing></Pricing>
      <Assignments></Assignments>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
