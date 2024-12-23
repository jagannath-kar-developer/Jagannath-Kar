import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
            once: true, // Animation will only happen once
        });
    }, []);

    return (
        <section id="about" className="py-16 scroll-mt-12">

            <h2 className="text-4xl font-bold text-blue-600 text-center">About</h2>

            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-evenly items-center space-y-12 md:space-y-0  min-h-screen">



                {/* Left Side: About Information */}
                <div
                    className="w-full md:w-2/5 p-8 shadow-2xl space-y-6 flex flex-col justify-center"
                    data-aos="fade-right"
                >
                    <h2 className="text-3xl font-semibold text-[#47989f] text-center">My Introduction</h2>
                    <p className="text-sm font-medium text-[#54b0b9]">
                        I am well-versed in HTML, CSS, JavaScript, MERN Stack, PHP, MySQL, and other cutting-edge frameworks and libraries, which allow me to implement interactive features. Additionally, I have experience working with CRM (Customer Relationship Management) and ERP (Enterprise Resource Planning) systems.
                    </p>
                </div>

                {/* Right Side: Technologies */}
                <div
                    className="w-full md:w-3/5 flex flex-col md:flex-row justify-between items-start py-6 space-y-6 md:space-y-0 p-8 shadow-2xl pl-10 ml-10"
                    data-aos="fade-left"
                >
                    {/* Frontend Technologies */}
                    <div className="w-full md:w-2/3">
                        <h3 className="text-xl font-semibold text-[#47989f]">Frontend</h3>
                        <div className="flex flex-wrap text-sm font-medium text-white-500">
                            <span className="bg-[#2463EB] text-white py-1 px-3 rounded-md m-1">HTML5</span>
                            <span className="bg-[#2463EB] text-white py-1 px-3 rounded-md m-1">CSS3</span>
                            <span className="bg-[#2463EB] text-white py-1 px-3 rounded-md m-1">Bootstrap</span>
                            <span className="bg-[#2463EB] text-white py-1 px-3 rounded-md m-1">JavaScript(ES6)</span>
                            <span className="bg-[#2463EB] text-white py-1 px-3 rounded-md m-1">Tailwind CSS</span>
                            <span className="bg-[#2463EB] text-white py-1 px-3 rounded-md m-1">React</span>
                        </div>
                    </div>

                    {/* Backend Technologies */}
                    <div className="w-full md:w-1/3">
                        <h3 className="text-xl font-semibold text-[#47989f]">Backend</h3>
                        <div className="flex flex-wrap text-sm font-medium text-white-500">
                            <span className="bg-[#2463EB] text-white py-1 px-3 rounded-md m-1">Node.js</span>
                            <span className="bg-[#2463EB] text-white py-1 px-3 rounded-md m-1">Express.js</span>
                            <span className="bg-[#2463EB] text-white py-1 px-3 rounded-md m-1">PHP</span>
                            <span className="bg-[#2463EB] text-white py-1 px-3 rounded-md m-1">Java</span>
                        </div>
                    </div>

                    {/* Database Technologies */}
                    <div className="w-full md:w-1/3">
                        <h3 className="text-xl font-semibold text-[#47989f]">Database</h3>
                        <div className="flex flex-wrap text-sm font-medium text-white-500">
                            <span className="bg-[#2463EB] text-white py-1 px-3 rounded-md m-1">MongoDB</span>
                            <span className="bg-[#2463EB] text-white py-1 px-3 rounded-md m-1">MySQL</span>
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <h3 className="text-xl font-semibold text-[#47989f]">Auxiliary Technologies</h3>
                        <div className="flex flex-wrap text-sm font-medium text-white-500">
                            <span className="bg-[#2463EB] text-white py-1 px-3 rounded-md m-1">Github</span>
                            <span className="bg-[#2463EB] text-white py-1 px-3 rounded-md m-1">phpMyAdmin</span>
                            <span className="bg-[#2463EB] text-white py-1 px-3 rounded-md m-1">Postman</span>
                            <span className="bg-[#2463EB] text-white py-1 px-3 rounded-md m-1">MySQL Workbench</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
