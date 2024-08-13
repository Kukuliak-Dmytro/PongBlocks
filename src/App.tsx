import  { useRef, useEffect } from 'react';
import './App.css';
import Ball from './Ball';
import Paddle from './Paddle';
import Block from './Block';
function randomNumberBetween(min:number, max:number) {
  return Math.random() * (max - min) + min;
}
function App() {
  const INITIAL_VELOCITY = 0.025;
  const VELOCITY_INCREASE = .000001;
    let lastTime: number;
    let ballPosition={x:50,y:50}
    let direction={x:0,y:0}
    let velocity=0;
    function resetBall(){
      ballPosition.x = 50;
      ballPosition.y = 50;
      direction = { x: 0, y: 0 };
      velocity = INITIAL_VELOCITY;
      while (
          Math.abs(direction.x) <= .2 ||
          Math.abs(direction.x) >= .9
      ) {
          const heading = randomNumberBetween(0, 2 * Math.PI);
          direction = { x: Math.cos(heading), y: Math.sin(heading) };
      }
    }
    function updateBall(delta:number){
      ballPosition.x += direction.x * velocity * delta;
      ballPosition.y += direction.y * velocity * delta;
      velocity += VELOCITY_INCREASE * delta;
  }
    function update(time: number) {
        if (lastTime != null) {
            const delta = time - lastTime;
            updateBall(delta)
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
               <Block></Block>
               <Block></Block>
               <Block></Block>
               <Block></Block>
               <Block></Block>
               <Block></Block>
               <Block></Block>
               <Block></Block>
               <Block></Block>
               <Block></Block>
            </div>
            <Paddle />
            <Ball position={ballPosition} />
        </>
    );
}

export default App;
