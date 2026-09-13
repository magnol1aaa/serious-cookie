import { useRef, useState } from "react";

function Content() {

    const cookieRef = useRef(null);
    const [rotation, setRotation] = useState({x: 0, y: 0});

    const handleMouseMove = (e) => {
        
        if (!cookieRef.current) return;

        const rect = cookieRef.current.getBoundingClientRect()

        // rectangle position from left of screen plus half of width
        const centerX = rect.left + rect.width / 2;
        // rectangle position from top of screen plus half of height
        const centerY = rect.top + rect.height / 2;

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;
        
        setRotation({x: deltaX, y: -deltaY})
    }

    const handleMouseLeave = () => {
        setRotation({x: 0, y: 0})
    }
    return (
        <div className = "content">
            <main>
                <h2 className="medium-text">welcome to serious
                    <span ref={cookieRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <span 
                            className="cookie"
                            style={{
                                display: "inline-block",  
                                cursor: 'default',
                                transform: `rotate3d(${rotation.y}, ${rotation.x}, 0, 40deg)`,
                                transition: 'transform 0.5s ease-out'
                            }}
                        >
                                cookie
                            </span>
                    </span>
                </h2>
            </main>
            <div className="learn-more">
            <h3 className="small-text"> learn more</h3>
            </div>
        </div>
    )
}

export default Content