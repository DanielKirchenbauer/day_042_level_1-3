import {useState} from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    const countUp = (event) => {
        event.preventDefault();
        setCount((prevCount) => prevCount +1);
    }

    const countDown = (event) => {
        event.preventDefault();
        setCount((prevCount) => prevCount -1);
    }



    return (
        <>
        <button onClick={countUp} type="submit">+ 1</button>
        <p>{count}</p>
        <button onClick={countDown} type="submit">- 1</button>
        </>


      );
}
 
export default Counter;



    <button type="submit"></button>

