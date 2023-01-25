import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import Pokedex from './screens/Pokedex';
import PokemonScreen from './screens/PokemonScreen';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<PokemonScreen />} />
      </Routes>
    </div>
  );
}

export default App;
