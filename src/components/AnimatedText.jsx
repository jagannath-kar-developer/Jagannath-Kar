import { useState, useEffect } from 'react';

const SlidingText = () => {
    const texts = ['MERN-Stack Developer', 'PHP/MySQL Developer'];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => {
                if (prevIndex === texts.length - 1 && direction === 1) {
                    setDirection(-1); // Reverse direction at the last element
                    return prevIndex - 1;
                } else if (prevIndex === 0 && direction === -1) {
                    setDirection(1); // Reverse direction at the first element
                    return prevIndex + 1;
                }
                return prevIndex + direction;
            });
        }, 1500); // Change text every 3 seconds

        return () => clearInterval(interval);
    }, [direction, texts.length]);

    return (
        <div className="relative overflow-hidden h-10  text-3xl text-white font-semibold">
            <div
                className="absolute transition-transform duration-1000 ease-in-out"
                style={{
                    transform: `translateY(-${currentTextIndex * 50}%)`,
                }}
            >
                {texts.map((text, index) => (
                    <div key={index} className="h-10 flex items-center">
                        <span className="text-[#FFDB6E]">{text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SlidingText;
