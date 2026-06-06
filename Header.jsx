import { useState, useEffect } from "react";
import "../../style/header.css";
import logo from "../../icons/logo-with.png";

export default function Header() {
    const [activeItem, setActiveItem] = useState("vaghaye");
    const [isScrolled, setIsScrolled] = useState(false);
    
    const menuItems = [
        { id: "vaghaye", label: "وقایع محرم" },
        { id: "zendegi", label: "زندگینامه شهدا" },
        { id: "help", label: "کمک رسانی" },
    ];
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
            // تشخیص بخش فعال بر اساس اسکرول
            const sections = menuItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 150;
            
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveItem(menuItems[i].id);
                    break;
                }
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        // اجرای یکبار برای تنظیم اولیه
        handleScroll();
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, [menuItems]);
    
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = 80;
            const elementPosition = section.offsetTop;
            const scrollPosition = elementPosition - offset;
            
            window.scrollTo({
                top: scrollPosition,
                behavior: "smooth"
            });
        } else {
            console.log(`بخش با id ${sectionId} پیدا نشد`);
        }
        setActiveItem(sectionId);
    };
    
    return (
        <header className="header" style={{
            backgroundColor: isScrolled ? '#0d0d1a' : '#0d0d1a',
            backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            transition: 'all 0.3s ease',
        }}>
            <div className="section">
                <img className="logo" src={logo} alt="logo" />
                <nav className="nav-links">
                    {menuItems.map((item) => (
                        <span 
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            style={{
                                color: activeItem === item.id ? '#ffff' : '#ffffff',
                                backgroundColor: activeItem === item.id ? 'rgba(30, 179, 91, 0.15)' : 'transparent',
                                fontWeight: activeItem === item.id ? '500' : '400',
                            }}
                            onMouseEnter={(e) => {
                                if (activeItem !== item.id) {
                                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeItem !== item.id) {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                } else {
                                    e.currentTarget.style.backgroundColor = 'rgba(30, 179, 91, 0.15)';
                                }
                            }}
                        >
                            {item.label}
                        </span>
                    ))}
                </nav>
            </div>
        </header>
    );
}