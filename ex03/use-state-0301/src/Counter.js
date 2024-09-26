import React, { useState } from 'react'

function Counter() {
    // let number = 1;
    const [number, setNumber] = useState(10);
    // const useStateArr = useState(10);
    // const number = useStateArr[0];
    // const setNumber = useStateArr[1];

    function onIncrease() {
        // setNumber(number + 1);
        setNumber((prev) => ++prev);
        console.log(number)
        // number += 1;
    }

    const onDecrease = () => setNumber(number - 1);

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter