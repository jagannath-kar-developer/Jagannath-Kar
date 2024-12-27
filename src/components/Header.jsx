import { useState, useEffect } from 'react';
import './Header.css'; // Import external CSS for custom styles

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home'); // Default section
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu on mobile

    // Handle scroll event to toggle shadow and background color based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setIsScrolled(true); // When scrolled, apply the larger shadow and change bg color
            } else {
                setIsScrolled(false); // Reset when scrolled back to top
            }

            // Check which section is in view and set active section
            const sections = ['home', 'about', 'experience', 'contact']; // Adjust this to your section IDs
            sections.forEach(section => {
                const element = document.getElementById(section);
                const rect = element.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 10) {
                    setActiveSection(section);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='w-full'>
            <header
                className={`text-white p-6 h-20 shadow-md transition-all duration-300 fixed top-0 left-0 w-full z-10 ${isScrolled ? 'bg-[#121212] shadow-xl' : 'bg-[#1E1E1F] shadow-md'}`}
            >
                <div className="flex justify-between items-center pr-10">
                    {/* Left Side: Name */}
                    <div className="text-[#FFDB6E] text-2xl font-bold pl-10">
                        Jagan
                    </div>

                    {/* Middle: Navigation Links (Visible on desktop) */}
                    <nav className="hidden md:flex space-x-8">
                        <a
                            href="#home"
                            className={`text-white-500 hover:text-blue-500 ${activeSection === 'home' ? 'text-blue-500' : ''}`}
                        >
                            <i className="fa-solid fa-house"></i> Home
                        </a>
                        <a
                            href="#about"
                            className={`text-white-500 hover:text-blue-500 ${activeSection === 'about' ? 'text-blue-500' : ''}`}
                        >
                            <i className="fa-solid fa-address-card"></i> About
                        </a>
                        <a
                            href="#experience"
                            className={`text-white-500 hover:text-blue-500 ${activeSection === 'experience' ? 'text-blue-500' : ''}`}
                        >
                            <i className="fa-solid fa-bolt"></i> Experience
                        </a>
                        <a
                            href="#contact"
                            className={`text-white-500 hover:text-blue-500 ${activeSection === 'contact' ? 'text-blue-500' : ''}`}
                        >
                            <i className="fa-solid fa-id-badge"></i> Contact
                        </a>
                    </nav>

                    {/* Right Side: CV Download Button (Visible on desktop only) */}
                    <div className="hidden md:block">
                        <a
                            href="JagannathPrasadKar.pdf" // Replace with your actual CV file path
                            download
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                        >
                            Download CV <i className="text-sm fa-solid fa-file-arrow-down"></i>
                        </a>
                    </div>

                    {/* Mobile Hamburger Menu (Visible on mobile) */}
                    <div className="md:hidden flex items-center ml-auto">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white text-2xl"
                        >
                            <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu (Visible on mobile when hamburger is clicked) */}
                <div
                    className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#1E1E1F] absolute top-20 left-0 right-0 p-4 space-y-4`}
                >
                    <a
                        href="#home"
                        className={`block text-white-500 hover:text-blue-500 ${activeSection === 'home' ? 'text-blue-500' : ''}`}
                    >
                        <i className="fa-solid fa-house"></i> Home
                    </a>
                    <a
                        href="#about"
                        className={`block text-white-500 hover:text-blue-500 ${activeSection === 'about' ? 'text-blue-500' : ''}`}
                    >
                        <i className="fa-solid fa-address-card"></i> About
                    </a>
                    <a
                        href="#experience"
                        className={`block text-white-500 hover:text-blue-500 ${activeSection === 'experience' ? 'text-blue-500' : ''}`}
                    >
                        <i className="fa-solid fa-bolt"></i> Experience
                    </a>
                    <a
                        href="#contact"
                        className={`block text-white-500 hover:text-blue-500 ${activeSection === 'contact' ? 'text-blue-500' : ''}`}
                    >
                        <i className="fa-solid fa-id-badge"></i> Contact
                    </a>
                </div>
            </header>
        </div>
    );
};

export default Header;
