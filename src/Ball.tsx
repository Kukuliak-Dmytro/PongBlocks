import './App.css';
import React, { useState, useImperativeHandle, forwardRef, Ref } from 'react';

const INITIAL_VELOCITY = 0.025;
const VELOCITY_INCREASE = 0.000001;

function randomNumberBetween(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

export type BallHandle = {
    BallUpdate: (delta: number) => void;
};

const Ball = forwardRef<BallHandle>((_, ref: Ref<BallHandle>) => {
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const [direction, setDirection] = useState({ x: 0, y: 0 });
    const [velocity, setVelocity] = useState(INITIAL_VELOCITY);

    useImperativeHandle(ref, () => ({
        BallUpdate(delta: number) {
            const newVelocity = velocity + VELOCITY_INCREASE * delta;
            const newPosition = {
                x: position.x + direction.x * newVelocity * delta,
                y: position.y + direction.y * newVelocity * delta,
            };
            setVelocity(newVelocity);
            setPosition(newPosition);
            console.log('Update function called!', newPosition, newVelocity);
        },
    }));

    React.useEffect(() => {
        const heading = randomNumberBetween(0, 2 * Math.PI);
        setDirection({ x: Math.cos(heading), y: Math.sin(heading) });
    }, []);

    return <div className="ball" style={{ left: `${position.x}%`, top: `${position.y}%` }}></div>;
});

export default Ball;
