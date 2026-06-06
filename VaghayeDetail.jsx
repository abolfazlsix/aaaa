import { useState, useEffect } from "react";
import "../../style/VaghayeDetail.css";

export default function VaghayeDetail({ day, onBack }) {
    const [showScrollTop, setShowScrollTop] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    if (!day) return null;
    
    return (
        <div className="detail-container">
            <button className="back-btn" onClick={onBack}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ marginLeft: "8px" }}>
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                بازگشت
            </button>
            
            <div className="detail-content">
                <img src={day.img} alt={day.day} className="detail-img" />
                <h1 className="detail-title">{day.day}</h1>
                <div className="detail-text">
                    <p>{day.fullText || "متن کامل وقایع در حال تکمیل است..."}</p>
                </div>
            </div>
            
            {/* دکمه فلش بالا */}
            {showScrollTop && (
                <button className="scroll-top-btn" onClick={scrollToTop}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5L12 19M12 5L18 11M12 5L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            )}
        </div>
    );
}   