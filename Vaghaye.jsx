import { useState, useEffect } from "react";
import VaghayeSlider from "./VaghayeSlider";
import VaghayeGrid from "./VaghayeGrid";

export default function Vaghaye({ onCardClick }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    const handleSeeAll = () => {
        console.log("See all clicked");
    };
    
    if (windowWidth < 900) {
        return <VaghayeSlider onCardClick={onCardClick} onSeeAll={handleSeeAll} />;
    }
    
    return <VaghayeGrid onCardClick={onCardClick} onSeeAll={handleSeeAll} />;
}