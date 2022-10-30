
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
  return (
    <div className="App">

      {/* {names.map((nm) => (
        <Welcome name={nm} />
      ))} */}

      {users.map((usr) => (
        <Msg
          name={usr.name}
          pic={usr.pic}
        />
      ))}

      <Counter />

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



