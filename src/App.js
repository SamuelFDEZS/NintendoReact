import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useContext} from 'react';
import Search from './Components/Search';
import CharacterCards from './Components/CharacterCards';
import NavBar from "./Components/NavBar";
import {Route, Routes, useNavigate } from 'react-router-dom';
import NotFound from './Components/NotFound';
import { userContext } from './Context/UserContext';
import Login from './Components/Login';
function App() {

  const [characters, setCharacters] = useState([])
  const [filter, setFilter] = useState("")
  const [user, setUser] = useState(useContext(userContext))
  const [arrayUsers, setArrayUsers] = useState([])
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const connectUsers = async () => {
    const response = await fetch("http://localhost:5000/users")
    const res = await response.json()
    await setArrayUsers(res)
  }
  
  
  useEffect(() => connectUsers, [user])

  const loginUser = (formData, prevRoute) => {

    console.log(arrayUsers)
    const userFind = arrayUsers.find((user) => user.email === formData.email && user.password === formData.password)
    console.log(userFind)
    if (userFind) {
      setUser(userFind)
      setError('')
      navigate(prevRoute || "/")
    } else {
      setUser(false)
      setError('User or password incorrect')
    }

  };




  return (
    <div className="App-header">
      <userContext.Provider value={user == "" ? null : user}>
        <Routes>
          <Route path="/" element={
            <>
              <NavBar />
              <section
                className='section-characters'>
                <Search filter={filter} setFilter={setFilter} />
                <CharacterCards characters={characters} setCharacters={setCharacters} filter={filter} />
              </section>
            </>}
          />
          <Route path='login' element={<Login loginUser = {loginUser} error = {error}/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;
