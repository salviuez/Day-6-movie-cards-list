import React from "react";
import { useState } from "react";


export function Counter() {
    //let like = 10;
    const [like, setLike] = useState(0);
    const [dislike, setdisLike] = useState(0);
    const incrementLike = () => setLike(like + 1);

    return (
        <div>
            <button onClick={incrementLike}>{like}</button>
            <button onClick={() => setdisLike(dislike + 1)}>{dislike}</button>
        </div>
    );
}
