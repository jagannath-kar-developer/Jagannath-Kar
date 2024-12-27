import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import SlidingText from './AnimatedText';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
            once: true, // Animation will only happen once
        });
    }, []);

    return (
        <section id="home" className="w-full min-h-screen py-1">
            <div className="w-full px-6 md:px-12 flex flex-col md:flex-row justify-evenly items-center mt-24 space-y-12 md:space-y-0">
                {/* Left Side: My Details */}
                <div
                    className="w-full md:w-2/5 p-6 sm:p-8 shadow-lg space-y-6 overflow-hidden"
                    data-aos="fade-up" // All screens will use bottom-to-top animation
                >
                    <button
                        disabled
                        className="bg-[#c0a632] text-white h-8 rounded-lg px-4 text-xs font-semibold"
                    >
                        Jagannath Prasad Kar
                    </button>
                    <div className="text-2xl sm:text-3xl text-white font-semibold space-y-4">
                        <span>
                            I'm <br />
                            <span className="text-[#FFDB6E]">
                                <SlidingText />
                            </span>
                        </span>
                    </div>
                    <p className="text-sm sm:text-base text-[#54b0b9] font-medium">
                        Experienced developer with a passion for creating visually stunning and user-friendly websites.
                    </p>

                    {/* Buttons: Hire Me & Download CV */}
                    <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 space-y-4 md:space-y-0 items-center">
                        <button
                            onClick={() => window.open('https://www.linkedin.com/messaging/compose/?recipient=jagannathkar44', '_blank')}
                            className="bg-[#2563EB] text-white py-3 px-8 w-full md:w-auto rounded-full font-semibold text-lg hover:bg-[#564fd8] transition"
                        >
                            Hire Me
                        </button>
                        <a
                            href="JagannathPrasadKar.pdf"
                            download
                            className="bg-[#10B981] text-center text-white py-3 px-8 w-full md:w-auto rounded-full font-semibold text-lg hover:bg-[#059669] transition"
                        >
                            Download CV <i className="text-sm fa-solid fa-file-arrow-down"></i>
                        </a>
                    </div>

                    {/* Social Media: Circular Buttons */}
                    <div className="flex space-x-6 justify-start pl-1">
                        <a
                            href="https://www.linkedin.com/in/jagannathkar44/"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white text-black p-5 rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#54b0b9] transition shadow-md"
                        >
                            <i className="fab fa-linkedin-in text-black"></i>
                        </a>
                        <a
                            href="mailto:jagannathkar44@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white text-black p-5 rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#54b0b9] transition shadow-md"
                        >
                            <i className="fas fa-envelope text-black"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/jagannath_kar__"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white text-black p-5 rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#54b0b9] transition shadow-md"
                        >
                            <i className="fab fa-instagram text-black"></i>
                        </a>
                        <a
                            href="tel:+919348808785"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white text-black p-5 rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#54b0b9] transition shadow-md"
                        >
                            <i className="fas fa-phone-alt text-black"></i>
                        </a>
                    </div>
                </div>

                {/* Right Side: Profile Image */}
                <div
                    className="w-full md:w-2/5 flex justify-center items-center py-6"
                    data-aos="fade-up" // All screens will use bottom-to-top animation
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl animate-ellipse-border">
                        <img
                            src="profileImg.jpg"
                            alt="Your Name"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
