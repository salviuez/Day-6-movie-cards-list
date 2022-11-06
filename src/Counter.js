import React from "react";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export function Counter() {
    //let like = 10;
    const [like, setLike] = useState(0);
    const [dislike, setdisLike] = useState(0);
    const incrementLike = () => setLike(like + 1);

    return (
        <div>
            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
            </IconButton>
            <button onClick={incrementLike}>👍 {like}</button>
            <button onClick={() => setdisLike(dislike + 1)}>:thumbsdown:{dislike}</button>
        </div>
    );
}
