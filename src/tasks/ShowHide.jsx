import { useState } from "react";

export  default function ShowHideText (){

    const[isVisible, setIsVisible] = useState(false);

    const buttonText = isVisible? "Hide Text":"Show Text";
    const message = "Hidden text";

    

    return(
        
        <div className="design">
            <button onClick={() => setIsVisible(!isVisible)}>{buttonText}</button>

            {
                isVisible && (
                    <p>{message}</p>
                )
            }
        </div>
    )
}