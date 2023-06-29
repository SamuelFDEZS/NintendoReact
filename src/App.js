import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Search from './Components/search';
import CharacterCards from './Components/characterCards';
import NavBar from "./Components/navBar"
function App() {

  const [characters, setCharacters] = useState([])
  const [filter, setFilter] = useState("")

  const get = async () => {
    const response = await fetch("http://localhost:5000/mainCharacters");
    const res = await response.json();
    setCharacters(res.filter((character) => character.nombre.toLowerCase().includes(filter.toLowerCase())
    ))
  }

  console.log(characters)
  useEffect(() => {
    get();
  }, [filter])
  return (
    <div className="App-header">
    <NavBar/>
      
      <section 
      className='section-characters'>
      <Search filter={filter} setFilter={setFilter} />
      <CharacterCards characters={characters} /></section>
    </div>
  );
}

export default App;
