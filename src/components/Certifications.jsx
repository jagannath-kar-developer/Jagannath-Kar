import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Certifications = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
            once: true, // Animation will only happen once
        });
    }, []);

    return (
        <section id="certifications" className="py-16 scroll-mt-24 bg-[#121212]">
            <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">Certifications</h2>

            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-evenly items-center space-y-12 md:space-y-0">

                {/* Left Side: Certification 1 */}
                <div
                    className="w-full md:w-2/5 p-8 shadow-2xl space-y-6 flex flex-col justify-center bg-[#1E1E1F]"
                    data-aos="fade-up" // Changed to 'fade-up'
                >
                    <h2 className="text-3xl font-semibold text-[#47989f] text-center">The Complete 2023 Web Development Bootcamp</h2>
                    <p className="text-sm font-medium text-[#54b0b9]">
                        Completed a comprehensive web development course covering HTML, CSS, JavaScript, React, Node.js, MongoDB, and more.
                    </p>
                    <p className="text-sm font-medium text-[#54b0b9]">
                        Gained hands-on experience in building full-stack web applications through practical projects and assignments.
                    </p>
                    <p className="text-sm font-medium text-[#54b0b9] flex justify-between items-center">
                        <span><strong>Platform:</strong> Udemy | <strong>Date:</strong> May 2023</span>
                        <a
                            href="https://www.udemy.com/certificate/UC-54fcbb31-c0a7-445e-9278-23ecfb41a831/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white py-1 px-3 rounded-md hover:bg-blue-700"
                        >
                            View Certificate
                        </a>
                    </p>
                </div>

                {/* Right Side: Certification 2 */}
                <div
                    className="w-full md:w-2/5 p-8 shadow-2xl space-y-6 flex flex-col justify-center bg-[#1E1E1F]"
                    data-aos="fade-up" // Changed to 'fade-up'
                >
                    <h2 className="text-3xl font-semibold text-[#47989f] text-center">Internshala Trainings Web Development</h2>
                    <p className="text-sm font-medium text-[#54b0b9]">
                        Completed training in MERN stack web development, mastering both front-end and back-end development.
                    </p>
                    <p className="text-sm font-medium text-[#54b0b9]">
                        Developed and deployed web applications using MERN stack technologies, gaining proficiency in various tools.
                    </p>
                    <p className="text-sm font-medium text-[#54b0b9] flex flex-col md:flex-row justify-between items-center">
                        <span>
                            <strong>Platform:</strong> Internshala Trainings | <strong>Date:</strong> March 2023
                        </span>
                        <a
                            href="https://trainings.internshala.com/verify-certificate/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white py-1 px-3 rounded-md hover:bg-blue-700"
                        >
                            Verify Certificate
                        </a>
                    </p>
                    <p className="text-xs text-[#54b0b9] text-center mt-2">
                        * Use code <strong>6yxs984hd96</strong> to verify the certificate.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Certifications;
