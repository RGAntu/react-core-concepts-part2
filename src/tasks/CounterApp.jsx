import { useState } from "react";

function CounterApp(){

    const [ add, setAdd] = useState(0);

    const counterAdd = () => {

        const addPlus = add + 1;
        setAdd(addPlus);

    }

    const counterMinus = () => {
        const minus = add - 1;
        setAdd(minus)
    }

    const counterReset = () => {
        const reset = 0;
        setAdd(reset);
    }

    return(
        <>
        <div>
            <h2>{add}</h2>
            <button onClick={counterAdd}> + </button>
            <button onClick={counterMinus}> - </button>
            <button onClick={counterReset}>Reset</button>
        </div>
        </>
    )

}

export default CounterApp;