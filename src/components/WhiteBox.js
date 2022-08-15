import React from "react";
import HOC from "./HOC";

function WhiteBox({count, increment}){
    return(
        <div className="white-box">
            <h1>White Box</h1>
            <button onMouseOver={() => increment()}>{count} White Box</button>
        </div>
    )
}

const Box2 = HOC(WhiteBox);
export default Box2;