import React from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

function Rating(props) {
    /*
    "useState returns an array with two values: the current state value
    and a function that lets you update it.

    In the below,  we assign the current state rating value to rating 
    and the function to update it to setRating.

    We initialize our initial state in useState(props.rating). Our 
    current state is a single attribute rating which is assigned the 
    value from props.rating."
    */
    const [rating, setRating] = useState(props.rating)


    return (
        <div>
            <h1>Rating:{rating}</h1>
            {rating >= 1 ? (<IoIosStar/>)
                : (<IoIosStarOutline/>)}
            {rating >= 2 ? (<IoIosStar/>)
                : (<IoIosStarOutline/>)}
            {rating >= 3 ? (<IoIosStar/>)
                : (<IoIosStarOutline/>)}
            {rating >= 4 ? (<IoIosStar/>)
                : (<IoIosStarOutline/>)}
            {rating >= 5 ? (<IoIosStar/>)
                : (<IoIosStarOutline/>)}
        </div>
    );
}

export default Rating;