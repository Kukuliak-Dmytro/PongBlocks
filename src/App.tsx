import React, { useRef, useEffect } from 'react';
import './App.css';
import Ball, { BallHandle } from './Ball';
import Paddle from './Paddle';
import Block from './Block';

function App() {
    const ballRef = useRef<BallHandle>(null);
    let lastTime: number;

    function update(time: number) {
        if (lastTime != null) {
            const delta = time - lastTime;
            ballRef.current?.BallUpdate(delta);
        }
        lastTime = time;
        window.requestAnimationFrame(update);
    }

    useEffect(() => {
        window.requestAnimationFrame(update);
    }, []);

    return (
        <>
            <div className="blockWrapper">
                {/* Your blocks here */}
            </div>
            <Paddle />
            <Ball ref={ballRef} />
        </>
    );
}

export default App;
