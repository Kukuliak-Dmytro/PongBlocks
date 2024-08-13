import './App.css'
import { useEffect, useState } from 'react'

const Paddle: React.FC = () => {
    const [position, setPosition] = useState(0);

    const handleMouseMove = (event: MouseEvent) => {
        let positionPercentage=(event.clientX / window.innerWidth) * 100
        setPosition(Math.min(Math.max(positionPercentage, 2.5),97.5))
    }
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <div className="paddle" style={{ left: `${position}%` }}></div>
    )


}
export default Paddle