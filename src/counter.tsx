import { useEffect, useState } from "react";

const Counter = ({ name, state}: any) => {
    const [count, setCount] = useState(0);
    console.log(`${name} rendered`)

    useEffect(() => {
        console.log(`${name} mounted`)
        return () => {
            console.log(`${name} unmounted`)
        }
    }, [])

    return (
        <div className="counter">
            Count {name} num is: {count} {state}
            <button onClick={() => setCount((val) => val + 1)}>+</button>
        </div>
    );
};

export default Counter;
