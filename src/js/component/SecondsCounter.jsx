import React, { useState, useEffect } from "react";

function SecondsCounter(){

    const [count, setCount] = useState(0);
    const [stop, setStop] = useState(true)

    useEffect(() => {
        if (!stop) return
        let interval = setInterval(() => {
            setCount(count + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [count, stop])

    return (
            <div className="container  d-flex justify-content-center">
                <div className="card" style={{ width: "25rem" }}>
                    <div className="card-body">
                        <h1 className="title"><i class="far fa-clock"></i>
                        {Math.floor(count / 10000) % 10}
                        {Math.floor(count / 1000) % 10}
                        {Math.floor(count / 100) % 10}
                        {Math.floor(count / 10) % 10}
                        {Math.floor(count / 1) % 10}
                        </h1>
                        <button onClick={() => setStop(!stop)}>{stop ? "Pausar" : "Arrancar"}</button>
                    </div>
                </div>
            </div>
    );
}

export default SecondsCounter;
