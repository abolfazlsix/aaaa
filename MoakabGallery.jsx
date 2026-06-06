import { useState, useEffect, useRef } from "react";
import "../style/MoakabGallery.css";

// ایمپورت تصاویر 1:1
import img1 from "../icons/img1.png";
import img2 from "../icons/img2.png";
import img3 from "../icons/img3.png";
import img4 from "../icons/img4.png";
import img5 from "../icons/img5.png";
import img6 from "../icons/img6.png";
import img7 from "../icons/img7.png";
import img8 from "../icons/img8.png";

export default function MoakabGallery() {
    const [showAll, setShowAll] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    
    const images = [
        { id: 1, src: img1, alt: "موکب عشاق الرقیه ۱" },
        { id: 2, src: img8, alt: "موکب عشاق الرقیه ۲" },
        { id: 3, src: img3, alt: "موکب عشاق الرقیه ۳" },
        { id: 4, src: img7, alt: "موکب عشاق الرقیه ۴" },
        { id: 5, src: img5, alt: "موکب عشاق الرقیه ۵" },
        { id: 6, src: img6, alt: "موکب عشاق الرقیه ۶" },
        { id: 7, src: img4, alt: "موکب عشاق الرقیه ۷" },
        { id: 8, src: img2, alt: "موکب عشاق الرقیه ۸" }
    ];
    
    const visibleImages = showAll ? images : images.slice(0, 2);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    
    return (
        <div 
            ref={sectionRef}
            className="gallery-container"
            id="gallery"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(50px)",
                transition: "opacity 0.8s ease-out, transform 0.8s ease-out"
            }}
        >
            <div className="gallery-header">
                <p className="gallery-title">عکس هایی از موکب</p>
            
            </div>
            
            <div className="gallery-grid">
                {visibleImages.map((image, index) => (
                    <div 
                        key={image.id}
                        className="gallery-item"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? "scale(1)" : "scale(0.95)",
                            transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`
                        }}
                    >
                        <img src={image.src} alt={image.alt} />
                        <div className="gallery-overlay">
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5"/>
                                <path d="M12 8v8M8 12h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="gallery-more">
                {!showAll ? (
                    <button 
                        className="gallery-more-btn"
                        onClick={() => setShowAll(true)}
                    >
                        <span>مشاهده بیشتر</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                ) : (
                    <button 
                        className="gallery-more-btn close"
                        onClick={() => setShowAll(false)}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M5 15L12 8L19 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>مشاهده کمتر</span>
                    </button>
                )}
            </div>
        </div>
    );
}