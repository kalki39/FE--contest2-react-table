import logo from './logo.svg';
import './App.css';
import GenreFilter from "./components/GenreFilter";
import MovieList from './components/MovieList';




function App() {
  const movies = [{ title: 'The Shawshank Redemption', genre: 'Drama', year: 1994 }, { title: 'The Godfather', genre: 'Crime', year: 1972 }, { title: 'The Dark Knight', genre: 'Action', year: 2008 }, { title: '12 Angry Men', genre: 'Drama', year: 1957 }, { title: 'Schindlers List', genre: 'Drama', year: 1993 }, { title: 'The Lord of the Rings The Return of the King', genre: 'Fantasy', year: 2003 }, { title: 'The Good, the Bad and the Ugly', genre: 'Western', year: 1966 }, { title: 'Forrest Gump', genre: 'Drama', year: 1994 }, { title: 'Inception', genre: 'Science Fiction', year: 2010 }, { title: 'The Matrix', genre: 'Science Fiction', year: 1999 }, { title: 'The Silence of the Lambs', genre: 'Thriller', year: 1991 }, { title: 'Saving Private Ryan', genre: 'War', year: 1998 }, { title: 'Jurassic Park', genre: 'Science Fiction', year: 1993 }, { title: 'Terminator 2: Judgment Day', genre: 'Science Fiction', year: 1991 }, { title: 'The Lion King', genre: 'Animation', year: 1994 }];
  const genres = ["Drama", "Crime", "Action", "Fantasy", "Western", "Science Fiction", "Thriller", "War", "Animation"];

  // let allGenre=document.querySelectorAll('.genres div');
  document.addEventListener("DOMContentLoaded", () => {
    let allGenre=document.querySelectorAll('.genres div');
    console.log(allGenre)
  });
 
  return (
    <div className="App">
      <h1 className="App-header">
        TOP 15 Movies of All Time
      </h1>
      <div className='genre-Section'>
        <h3>Filter by Genre</h3>
        <div className='genres'>
          {genres.map((item) => (
            <GenreFilter gns={item} />                      //GenreFilter functional component
          ))}
        </div>
      </div>
      <table className='table'>
        <tr className='tbHead'>
          <th>Title</th>
          <th>Genre</th>
          <th>Year</th>
        </tr>
        {movies.map((item) => (
          <MovieList tittle={item.title} genre={item.genre} year={item.year} />
        ))}
      </table>
    </div>
  );
}

export default App;
