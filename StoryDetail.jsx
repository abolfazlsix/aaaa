import { useState, useEffect } from "react";
import "../style/StoryDetail.css";

export default function StoryDetail({ story, onBack }) {
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
    
    if (!story) return null;
    
    return (
        <div className="story-detail-container">
            <button className="story-detail-back" onClick={onBack}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                بازگشت
            </button>
            
            <div className="story-detail-content">
                <div className="story-detail-header">
                    <div className="story-detail-avatar">
                        <img src={story.img} alt={story.name} />
                    </div>
                    <div className="story-detail-info">
                        <h1 className="story-detail-name">{story.name}</h1>
                        <p className="story-detail-title">{story.title}</p>
                    </div>
                </div>
                <div className="story-detail-text">
                    <p>{story.fullText || "متن زندگی‌نامه در حال تکمیل است..."}</p>
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