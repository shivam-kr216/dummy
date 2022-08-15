import React, { useState } from "react";

const HOC = (WrappedComponent) => {
    function HOC(props) {
        const [count, setCount] = useState(0);
        function increment() {
            setCount(count + 1);
        }
        return (
            <div className="HOC">
                <WrappedComponent count={count} increment={increment} />
            </div>
        )
    }
    return HOC;
}

export default HOC;