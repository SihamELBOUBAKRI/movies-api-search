import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
// api: http://api.themoviedb.org/3/search/tv?query=breaking&api_key=fef55a6754f2f6d00a0038388915039c
function App() {
  const [movieName,setmovieName]=useState("");
  const [search,setsearch]=useState([]);


  function movieFunction(e){
    setmovieName(e.target.value);
  }

  const searchbutton = async (e)=>{
    e.preventDefault();
    const data = await axios.get(`https://api.themoviedb.org/3/search/tv?query=${movieName}&api_key=fef55a6754f2f6d00a0038388915039c`)
    console.log(data.data.results);

  }
  return (
    <div className="App">
      <form action="">
        <input type="text" placeholder='enter the movie name' value={movieName} onChange={movieFunction}/>
        <button onClick={searchbutton}>search</button>
      </form>

      <div >
        {
          search.map((movie)=>{
            return(
              <div key={movie.id}>
                <h1>{movie.name}</h1>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
