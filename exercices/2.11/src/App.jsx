import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import Phonebook from './Phonebook'


const App = () => {
  const [persons, setPersons] = useState([]);



  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  }, []);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Phonebook persons={persons} />
    </div>
  );
};

export default App;
