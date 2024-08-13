import './App.css';


interface Position {
    x: number;
    y: number;
}

const Ball = ({ position }: { position: Position }) => {
    return <div className="ball" style={{ left: `${position.x}%`, top: `${position.y}%` }}></div>;
};


export default Ball;
