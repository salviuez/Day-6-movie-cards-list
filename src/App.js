
import React from "react";
import "./App.css";
import logo from "./logo.svg";
import { useState } from "react";
import { Msg } from "./Msg";
import { Welcome, Double } from "./Welcome.js";
import { Movie } from "./Movie";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';




console.log(Double(10));
console.log(Double(10));
console.log(Double(10));
console.log(Double(10));


// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <div>
//         <button onClick={() => setCount(count + 1)}>Click on increment</button>
//         <button onClick={() => setCount(count - 1)}>Click on decrement</button>
//       </div>
//     </div>
//   );
// }
const INITIAL_MOVIE_LIST = [
  {
    name: "Vikram",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    rating: 8.4,
    summary:
      "Members of a black ops team must track and eliminate a gang of masked murderers."
  },
  {
    name: "RRR",
    poster:
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    rating: 8.8,
    summary:
      "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
  },
  {
    name: "Iron man 2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 7,
    summary:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
  },
  {
    name: "No Country for Old Men",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    rating: 8.1,
    summary:
      "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
  },
  {
    name: "Jai Bhim",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    summary:
      "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    rating: 8.8
  },
  {
    name: "The Avengers",
    rating: 8,
    summary:
      "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    poster:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
  },
  {
    name: "Interstellar",
    poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    rating: 8.6,
    summary:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
  },
  {
    name: "Baahubali",
    poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    rating: 8,
    summary:
      "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
  },
  {
    name: "Ratatouille",
    poster:
      "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    rating: 8,
    summary:
      "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
  }
];
function App() {
  const names = ["Jesus", "Moses", "Abraham", "Job"];
  const users = [
    {

      name: "Jesus",
      pic: "https://thumbs.dreamstime.com/b/jesus-christ-heaven-religion-concept-sky-clouds-76873221.jpg"
    },
    {

      name: "Moses",
      pic: "https://www.worldhistory.org/img/r/p/500x600/5739.jpg?v=1653375911"
    },
    {

      name: "Abraham",
      pic: "https://s35422.pcdn.co/wp-content/uploads/2020/11/1.11.21_Abraham-1024x683-1.jpg"
    },
    {

      name: "Job",
      pic: "https://assetsnffrgf-a.akamaihd.net/assets/m/502019375/univ/wpub/502019375_univ_lsr_xl.jpg"
    },
  ]

  const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);

  return (
    <div className="App">

      {/* {names.map((nm) => (
        <Welcome name={nm} />
      ))} */}

      {/* {users.map((usr) => (
        <Msg
          name={usr.name}
          pic={usr.pic}
        />
      ))} */}


      {/* <AddColor /> */}

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/colorgame">Color Game</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Navigate replace to="/movies" />} />
        <Route path="/movies" element={<MovieList movieList={movieList} setMovieList={setMovieList} />} />
        <Route path="/colorgame" element={<AddColor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>


    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 NOT FOUND</h1>
    </div>
  )
}

function Home() {
  return <h1>Welcome to the movie App</h1>
}

function MovieList({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const addMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
    };
    console.log(newMovie);

    setMovieList([...movieList, newMovie])
  };

  return (
    <div>
      <div className="add-movie-container">

        <TextField label="Name" variant="outlined" onChange={(event) => setName(event.target.value)}
          value={name} />

        {/* check whether its working */}
        {/* {name} */}


        <TextField label="Poster" variant="outlined" onChange={(event) => setPoster(event.target.value)}
          value={poster} />

        <TextField label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)}
          value={rating} />

        <TextField label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)}
          value={summary} />


        {/* <p>
          {name}
          {poster}
          {rating}
          {summary}
        </p> */}

        <button >Add Movie</button>
        <Button onClick={addMovie} variant="contained">ADD MOVIE</Button>
      </div>
      <div className="movie-list">
        {movieList.map((mv) => (
          <Movie movie={mv} />
        ))}
      </div>
    </div>
  );
}



function AddColor() {
  const [color, setColor] = useState("orange");
  const styles = {
    background: color,
  };
  const [colorList, setColorList] = useState(["orange", "yellow", "pink"]);
  return (
    <div>
      <input style={styles} type="text" onChange={(event) => setColor(event.target.value)}
        value={color} />
      <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      {colorList.map((clr) => (<ColorBox clr={clr} />))

      }
    </div>
  );
}

function ColorBox({ clr }) {
  const styles = {
    height: "25px",
    width: "250px",
    background: clr,
    marginTop: "10px",


  };
  return <div style={styles}></div>;
}





export default App;



