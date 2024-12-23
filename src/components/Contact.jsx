import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
            once: true, // Animation will only happen once
        });
    }, []);

    return (
        <div className="flex flex-col bg-[#121212]">
            {/* Main Content */}
            <section
                id="contact"
                className="flex flex-col h-[85vh] py-16 scroll-mt-20"
            >
                <div className="container mx-auto flex flex-col items-center text-center text-white">
                    <h2 className="text-4xl font-bold text-blue-600 mb-8">
                        Get In Touch
                    </h2>

                    {/* Social Media Links */}
                    <div
                        className="flex justify-center space-x-8 p-8 rounded-lg shadow-2xl bg-gradient-to-r bg-[#1E1E1F]"
                        data-aos="fade-up"
                    >
                        <a
                            href="mailto:jagannathkar44@gmail.com"
                            className="bg-white text-black p-5 rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#54b0b9] transition shadow-md" target="_blank"
                        >
                            <i className="fas fa-envelope text-black"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jagannathkar44/"
                            className="bg-white text-black p-5 rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#54b0b9] transition shadow-md" target="_blank"
                        >
                            <i className="fab fa-linkedin-in text-black"></i>
                        </a>
                        <a
                            href="https://x.com/jagannathkar05"
                            className="bg-white text-black p-5 rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#54b0b9] transition shadow-md" target="_blank"
                        >
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/jagannath_kar__"
                            className="bg-white text-black p-5 rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#54b0b9] transition shadow-md" target="_blank"
                        >
                            <i className="fab fa-instagram text-black"></i>
                        </a>
                        <a
                            href="tel:+919348808785"
                            className="bg-white text-black p-5 rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#54b0b9] transition shadow-md" target="_blank"
                        >
                            <i className="fas fa-phone-alt text-black"></i>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Contact;
