import { useCallback } from 'react';

const useScrollToNext = (currentSection) => {
    const handleScrollToNext = useCallback(() => {
        const sections = ['home', 'about', 'projects', 'contact']; 
        const currentIndex = sections.indexOf(currentSection);
        const nextSectionId = sections[currentIndex + 1];

        if (nextSectionId) {
            const nextSectionElement = document.getElementById(nextSectionId);
            nextSectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, [currentSection]);

    return handleScrollToNext;
};

export default useScrollToNext;
