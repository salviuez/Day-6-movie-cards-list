
import React from "react";
import "./App.css";
import logo from "./logo.svg";
import { useState } from "react";


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
const MOVIE_LIST = [
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

  const moviesAll = MOVIE_LIST

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
      ))}

      <Counter /> */}
      <div className="movie-list">
        {moviesAll.map((mv) => (
          <Movie movie={mv} />
        ))}
      </div>
    </div>
  );
}

function Movie({ movie }) {
  // const movie = {
  //   name: "Vikram",
  //   poster:
  //     "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
  //   rating: 8.4,
  //   summary:
  //     "Members of a black ops team must track and eliminate a gang of masked murderers."
  // }
  return (
    <div className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster"></img>
      <div className="movie-specs">
        <h3 className="movie-name">{movie.name}</h3>
        <p className="movie-rating">{movie.rating}</p>
      </div>
      <p className="movie-summary">{movie.summary}</p>
    </div>
  );
}

function Counter() {
  //let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>{like}</button>
      <button onClick={() => setdisLike(dislike + 1)}>{dislike}</button>
    </div>
  );
}


function Welcome({ name }) {
  // console.log(props);
  // const { pic, name } = props;  // ES6 Feature -Object destructuring
  return (
    <div>
      <h1>Hello, {name}</h1>
    </div>
  );
}

function Msg({ pic, name }) {
  // console.log(props);
  // const { pic, name } = props;  // ES6 Feature -Object destructuring
  return (
    <div className="user-container">
      <img className="profile-pic" src={pic} alt={name}></img>
      <h1>{name}</h1>
      <Counter />
    </div>
  );
}


export default App;



