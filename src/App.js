import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from "react";
import moviesArray from "./data/movies.json";
import './App.css';

function App() {

  const [listOfMovies, setListOfMovies] = useState(moviesArray);

  const deleteMovie = (movieId) => {
    const newList = listOfMovies.filter((movie) => {
      return movie.id !== movieId;
    });

    setListOfMovies(newList);
  };

  const sortArray = () => {
    setListOfMovies( (prevs) => {
      const newSortArr = [...listOfMovies];
      newSortArr.sort( (a,b) => {
        return (a.rating < b.rating) ? 1 : -1
      })
      return newSortArr;
    })

  }

  return (
    <div className="App">
      <Header numberOfMovies={listOfMovies.length} />
      <button onClick={ () => {sortArray()}}>Sort</button>
      <Main listOfMovies={listOfMovies} deleteMovie={deleteMovie}/>
      <Footer />
    </div>
  );
}

export default App;
