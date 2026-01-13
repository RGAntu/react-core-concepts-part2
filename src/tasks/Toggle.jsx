import { useState } from "react";

function Toggle(){

    const [show, setShow] = useState(false);


    // const handleToggle = () => {
    //    setShow( prevShow => !prevShow);
    // }

    // const handleToggle = () => {
    //     setShow( function(previousShow){
    //         return !previousShow;
    //     })
    // }


    const handleToggle = () => {
        if(show === true){
        setShow(false)
        }
        else{
            setShow(true)
        }
    }



    return(
        <div>
            <button onClick={handleToggle}> 
                {show ? "Hide": "Show"}
            </button>
            {show && <p>Hello, React Learner!</p>}
            
        </div>
    )


}

export default Toggle;