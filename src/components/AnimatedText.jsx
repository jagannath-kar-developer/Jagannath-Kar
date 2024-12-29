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
        }, 1700); // Change text every 1.5 seconds

        return () => clearInterval(interval);
    }, [direction, texts.length]);

    return (
        <div className="relative overflow-hidden h-10 w-full">
            <div
                className="absolute transition-transform duration-1000 ease-in-out"
                style={{
                    transform: `translateY(-${currentTextIndex * 50}%)`, // Adjust text movement
                }}
            >
                {texts.map((text, index) => (
                    <div key={index} className="h-10 flex items-center justify-center">
                        <span className="text-2xl sm:text-3xl text-[#FFDB6E]">{text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SlidingText;
