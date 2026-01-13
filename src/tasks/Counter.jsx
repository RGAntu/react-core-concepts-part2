import { useState } from "react";

export default function Counter(){
    
    const[count, setCount] = useState(0);
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleMinus = () => {
        const countMinus = count - 1;
        setCount(countMinus);
    }

    const handleReset = () => {
        const countReset = 0;
        setCount(countReset);
    }
    return(
        <div>
            <h3>Count:{count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleMinus}>Delete</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}