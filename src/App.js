
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="text-3xl font-bold underline">This is tailwind</h1>
      <p>this is also same.</p>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
