import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Experience = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
            once: true, // Animation will only happen once
        });
    }, []);

    return (
        <section id="experience" className="py-16 scroll-mt-12 bg-[#121212]">

            <h2 className="text-4xl font-bold text-blue-600 text-center">Experience</h2>

            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-evenly items-center space-y-12 md:space-y-0 min-h-screen">

                {/* Left Side: CRM System Development Experience */}
                <div
                    className="w-full md:w-2/5 p-8 shadow-2xl space-y-6 flex flex-col justify-center bg-[#1E1E1F]"
                    data-aos="fade-right"
                >
                    <h2 className="text-3xl font-semibold text-[#47989f] text-center">CRM System Development</h2>
                    <p className="text-sm font-medium text-[#54b0b9]">
                        Interned at Aptech Learning, where I contributed to developing a CRM system that improved customer relationships and assisted in organizing web development workshops.
                    </p>
                    <p className="text-sm font-medium text-[#54b0b9]">
                        Duration: August 2023 – January 2024
                    </p>
                    <ul className="list-disc pl-5 text-sm font-medium text-[#54b0b9]">
                        <li>Contributed to CRM system features and improvements based on user feedback.</li>
                        <li>Assisted in the organization and conduct of workshops, fostering collaboration.</li>
                        <li>Collaborated with a team to enhance CRM functionalities and streamline business processes.</li>
                    </ul>
                    <div className="flex flex-wrap text-sm font-medium text-white">
                        <span className="bg-[#2463EB] text-white py-1 px-3 rounded-md m-1">CRM Systems</span>
                        <span className="bg-[#2463EB] text-white py-1 px-3 rounded-md m-1">JavaScript</span>
                        <span className="bg-[#2463EB] text-white py-1 px-3 rounded-md m-1">PHP</span>
                        <span className="bg-[#2463EB] text-white py-1 px-3 rounded-md m-1">MySQL</span>
                    </div>
                </div>

                {/* Right Side: ERP Systems Internship Experience */}
                <div
                    className="w-full md:w-2/5 p-8 shadow-2xl space-y-6 flex flex-col justify-center bg-[#1E1E1F]"
                    data-aos="fade-left"
                >
                    <h2 className="text-3xl font-semibold text-[#47989f] text-center">ERP Systems Internship</h2>
                    <p className="text-sm font-medium text-[#54b0b9]">
                        Worked on full-stack web development for ERP systems in collaboration with AICTE and SlashMark IT Startup, enhancing business processes with user-friendly interfaces.
                    </p>
                    <p className="text-sm font-medium text-[#54b0b9]">
                        Duration: February 2024 – May 2024
                    </p>
                    <ul className="list-disc pl-5 text-sm font-medium text-[#54b0b9]">
                        <li>Collaborated with cross-functional teams to design and implement ERP modules.</li>
                        <li>Enhanced ERP interfaces, improving efficiency and business workflow.</li>
                        <li>Worked on user feedback integration and refining the ERP system functionalities.</li>
                    </ul>
                    <div className="flex flex-wrap text-sm font-medium text-white-500">
                        <span className="bg-[#2463EB] text-white py-1 px-3 rounded-md m-1">Node.js</span>
                        <span className="bg-[#2463EB] text-white py-1 px-3 rounded-md m-1">Express.js</span>
                        <span className="bg-[#2463EB] text-white py-1 px-3 rounded-md m-1">MySQL</span>
                        <span className="bg-[#2463EB] text-white py-1 px-3 rounded-md m-1">PHP</span>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Experience;
