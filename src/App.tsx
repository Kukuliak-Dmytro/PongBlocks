import { useRef, useEffect, useState } from 'react';
import './App.css';
import Ball from './Ball';
import Paddle from './Paddle';
import Block from './Block';

function randomNumberBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function App() {
  const INITIAL_VELOCITY = 0.025;
  const VELOCITY_INCREASE = 0.000001;

  const ballPosition = useRef({ x: 50, y: 50 });
  const direction = useRef({ x: 0, y: 0 });
  const velocity = useRef(INITIAL_VELOCITY);

  const [_, setDummyState] = useState(0); // A state to force re-renders

  const ballRef = useRef<HTMLDivElement>(null)

  function resetBall() {
    ballPosition.current = { x: 50, y: 50 };
    direction.current = { x: 0, y: 0 };
    velocity.current = INITIAL_VELOCITY;

    while (
      Math.abs(direction.current.x) <= 0.2 ||
      Math.abs(direction.current.x) >= 0.9
    ) {
      const heading = randomNumberBetween(0, 2 * Math.PI);
      direction.current = { x: Math.cos(heading), y: Math.sin(heading) };
    }

    setDummyState(prev => prev + 1); // Force a re-render
  }

  function updateBall(delta: number) {
    ballPosition.current.x += direction.current.x * velocity.current * delta;
    ballPosition.current.y += direction.current.y * velocity.current * delta;
    velocity.current += VELOCITY_INCREASE * delta;

    setDummyState(prev => prev + 1); // Force a re-render
  }
  function checkWallCollision() {
    const rect = ballRef.current!.getBoundingClientRect();
    if (rect.left <= 0 || rect.right >= window.innerWidth) {
      console.log('collision detected');
      direction.current.x *= -1; // Reverse direction on x-axis
    }
  }

  function update(time: number) {
    if (lastTime.current != null) {
      const delta = time - lastTime.current;
      checkWallCollision();
      updateBall(delta);
    }
    lastTime.current = time;
    window.requestAnimationFrame(update);
  }

  const lastTime = useRef<number | null>(null);

  useEffect(() => {
    resetBall();
    window.requestAnimationFrame(update);
  }, []);

  return (
    <>
      <div className="blockWrapper">
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
      </div>
      <Paddle />
      <Ball position={ballPosition.current} ref={ballRef} />
    </>
  );
}

export default App;
