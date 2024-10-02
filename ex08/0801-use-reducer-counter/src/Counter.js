import React, { useReducer, useState } from 'react'

// useRecucer : 복잡한 상태
// - state : 상태값
// - dispatch : 상태 변경을 요청하는 메서드
// - action : 변경할 내용, {type, payload}
// - reducer : 상태를 변경하는 함수

function reducer(state, action) {
    // if (action.type === "INCREMENT") {
    //     return state + action.payload;
    // }
    // if (action.type === "DECREMENT") {
    //     return state - action.payload;
    // }

    switch (action.type) {
        case "INCREMENT":
            return state + action.payload;
        case "DECREMENT":
            return state - action.payload;
        default:
            return state;
    }
}

function Counter() {
    // const [number, setNumber] = useState(0);
    const [number, dispatch] = useReducer(reducer, 0);

    const payload = 10;

    const onIncrease = () => dispatch({ type: "INCREMENT", payload });
    const onDencrease = () => dispatch({ type: "DECREMENT", payload });
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+{payload}</button>
            <button onClick={onDencrease}>-{payload}</button>
        </div>
    )
}

export default Counter