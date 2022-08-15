import React from "react";
// import {Suspense, lazy}  from "react";
import HOC from "./HOC";
// const BigFile = lazy(() => import('./Jumbo'));


function BlackBox({count, increment}){
    return(
        <div className="black-box">
            <h1>Black Box</h1>
            <button onClick={() => increment()}>{count} Black Box</button>
            {/* <Suspense fallback={<div>Please Wait...</div>}>
                <BigFile />
            </Suspense> */}
        </div>
    )
}

const Box1 = HOC(BlackBox);
export default Box1;
