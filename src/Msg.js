
import { Counter } from "./Counter";

export function Msg({ pic, name }) {
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
