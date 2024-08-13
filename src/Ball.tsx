import './App.css';
import React, { forwardRef, Ref } from 'react';

interface Position {
    x: number;
    y: number;
}

// Define the props interface
interface BallProps {
    position: Position;
}

// Wrap the component with forwardRef
const Ball = forwardRef<HTMLDivElement, BallProps>(({ position }, ref: Ref<HTMLDivElement>) => {
    return <div className="ball" style={{ left: `${position.x}%`, top: `${position.y}%` }} ref={ref}></div>;
});

export default Ball;
