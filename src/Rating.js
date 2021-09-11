import React, { useState } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

function Rating(props) {
    /*
    "useState returns an array with two values: the current state value
    and a function that lets you update it.

    On Line 16,  we assign the current state rating value to rating 
    and the function to update it to setRating.

    We initialize our initial state in useState(props.rating). Our 
    current state is a single attribute rating which is assigned the 
    value from props.rating."
    */
    const [rating, setRating] = useState(props.rating)


    return (
        <div style={styles.starStyle}>
            <h1>Rating:{rating}</h1>
            {rating >= 1 ? (<IoIosStar onClick={() => setRating(1)}/>)
                : (<IoIosStarOutline onClick={() => setRating(1)}/>)}
            {rating >= 2 ? (<IoIosStar onClick={() => setRating(2)}/>)
                : (<IoIosStarOutline onClick={() => setRating(2)}/>)}
            {rating >= 3 ? (<IoIosStar onClick={() => setRating(3)}/>)
                : (<IoIosStarOutline onClick={() => setRating(3)}/>)}
            {rating >= 4 ? (<IoIosStar onClick={() => setRating(4)}/>)
                : (<IoIosStarOutline onClick={() => setRating(4)}/>)}
            {rating >= 5 ? (<IoIosStar onClick={() => setRating(5)}/>)
                : (<IoIosStarOutline onClick={() => setRating(5)}/>)}
        </div>
    );
}

export default Rating;

const styles={
    starStyle:{
        color:'orange'
    }
}