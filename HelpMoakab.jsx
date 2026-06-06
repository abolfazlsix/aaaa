import { useState, useEffect, useRef } from "react";
import "../style/HelpMoakab.css";

export default function HelpMoakab() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [copied, setCopied] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    
    const cardNumber = "6219861831772099";
    const bankName = "بلو بانک";
    const moakabName = "موکب عشاق الرقیه (س)";
    
    // انیمیشن اسکرول
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
    
    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };
    
    const handleCopy = async (e) => {
        e.stopPropagation();
        try {
            await navigator.clipboard.writeText(cardNumber);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            const textArea = document.createElement("textarea");
            textArea.value = cardNumber;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };
    
    return (
        <div 
            ref={sectionRef}
            className="help-container" 
            id="help"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(50px)",
                transition: "opacity 0.8s ease-out, transform 0.8s ease-out"
            }}
        >
            <div className="help-header">
                <p className="help-title">کمک رسانی به موکب</p>
             
            </div>
            
            <div className="help-card-wrapper">
                <div 
                    className={`help-card ${isFlipped ? "flipped" : ""}`}
                    onClick={handleCardClick}
                >
                    <div className="help-card-front">
                        <div className="card-bank-name">
                            <span>{bankName}</span>
                        </div>
                        <div className="card-icon-left">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                                <path d="M2 10h20" stroke="currentColor" strokeWidth="1.5"/>
                                <circle cx="17" cy="15" r="1.5" fill="currentColor"/>
                                <circle cx="13" cy="15" r="1.5" fill="currentColor"/>
                            </svg>
                        </div>
                        <div className="card-number">
                            <span className="card-number-label">شماره کارت</span>
                            <span className="card-number-value">{cardNumber}</span>
                        </div>
                        <div className="card-moakab-name">
                            <span>{moakabName}</span>
                        </div>
                        <div className="card-copy-icon" onClick={handleCopy}>
                            {copied ? (
                                <>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                        <path d="M20 6L9 17L4 12" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span className="copy-text copied">کپی شد!</span>
                                </>
                            ) : (
                                <>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                        <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="1.5"/>
                                    </svg>
                                    <span className="copy-text">کپی</span>
                                </>
                            )}
                        </div>
                        
                        <div className="card-flip-hint">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                
                                <path d="M7 10l5 5 5-5" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span> کلیک کنید</span>

                        </div>
                    </div>
                    
                    <div className="help-card-back">
                        <div className="back-moakab-name">
                            <span>{moakabName}</span>
                        </div>
                        <div className="back-description">
                            <p>هزینه های اهدایی شما عزیزان صرف بازسازی موکب و خرید اقلام ضروری برای پخش نذورات میباشد</p>
                            <p className="back-note">موکب عشاق الرقیه(س) موکب کاملا خصوصی میباشد و وابسته به شخصی یا ارگان خاصی نیست</p>
                        </div>
                        <div className="back-flip-hint">
                            <span>برای بازگشت کلیک کنید</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}