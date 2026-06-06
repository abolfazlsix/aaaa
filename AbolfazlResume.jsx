import { useState, useEffect, useRef } from "react";
import abolfazl from "../icons/abolfazl.webp";
import {
  SiHtml5, SiJavascript, SiReact, SiNextdotjs,
  SiMongodb, SiTailwindcss, SiGithub, SiInstagram, SiTelegram
} from "react-icons/si";
import { FiMoon, FiSun, FiPhone, FiMail, FiMapPin, FiExternalLink, FiMenu, FiX } from "react-icons/fi";
import { FaNodeJs, FaCss3Alt, FaLinkedinIn } from "react-icons/fa";

const darkTheme = {
  bg: "#030712", surface: "#0d1117", surfaceAlt: "#161b22", border: "#21262d",
  accent: "#00ff88", accentDim: "#00ff8820", accentGlow: "0 0 20px #00ff8860",
  accentGlow2: "0 0 40px #00ff8830", text: "#e6edf3", textMuted: "#7d8590",
  cyan: "#79c0ff", purple: "#d2a8ff", orange: "#ffa657",
  cardBg: "linear-gradient(135deg,#0d1117 0%,#161b22 100%)", gridColor: "#00ff8808",
};
const lightTheme = {
  bg: "#f0f6ff", surface: "#ffffff", surfaceAlt: "#f6f8fa", border: "#d0d7de",
  accent: "#0969da", accentDim: "#0969da20", accentGlow: "0 0 20px #0969da40",
  accentGlow2: "0 0 40px #0969da20", text: "#1f2328", textMuted: "#636c76",
  cyan: "#0550ae", purple: "#7c3aed", orange: "#bc4c00",
  cardBg: "linear-gradient(135deg,#ffffff 0%,#f6f8fa 100%)", gridColor: "#0969da08",
};

export default function AbolfazlResume() {
  const [dark, setDark] = useState(true);
  const [glitch, setGlitch] = useState(false);
  const [typed, setTyped] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const canvasRef = useRef(null);
  const t = dark ? darkTheme : lightTheme;
  const fullText = "Front-End Developer";
  const isMobile = windowWidth < 768;

  // ریست اسکرول به بالای صفحه هنگام لود
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let i = 0; setTyped("");
    const iv = setInterval(() => {
      if (i < fullText.length) { setTyped(fullText.slice(0, i + 1)); i++; }
      else clearInterval(iv);
    }, 80);
    return () => clearInterval(iv);
  }, [dark]);

  useEffect(() => {
    const iv = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const cols = Math.floor(canvas.width / 18);
    const drops = Array(cols).fill(1);
    const chars = "アイウエオカキクケコ01サシスセソタチナニヌハヒフヘホ";
    const draw = () => {
      ctx.fillStyle = dark ? "rgba(3,7,18,0.05)" : "rgba(240,246,255,0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = dark ? "#00ff8826" : "#0969da16";
      ctx.font = "13px monospace";
      drops.forEach((y, i) => {
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * 18, y * 18);
        if (y * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };
    const id = setInterval(draw, 55);
    return () => { clearInterval(id); window.removeEventListener("resize", resize); };
  }, [dark]);

  const toggleTheme = () => { setGlitch(true); setTimeout(() => { setDark(d => !d); setGlitch(false); }, 280); };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 70;
      const elementPosition = section.offsetTop;
      const scrollPosition = elementPosition - offset;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const skills = [
    { icon: <SiHtml5 />, name: "HTML5", color: "#e34f26", level: 95 },
    { icon: <FaCss3Alt />, name: "CSS3", color: "#1572b6", level: 92 },
    { icon: <SiJavascript />, name: "JavaScript", color: "#f7df1e", level: 88 },
    { icon: <SiReact />, name: "React", color: "#61dafb", level: 85 },
    { icon: <SiNextdotjs />, name: "Next.js", color: dark ? "#fff" : "#000", level: 82 },
    { icon: <FaNodeJs />, name: "Node.js", color: "#339933", level: 70 },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47a248", level: 65 },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "#06b6d4", level: 90 },
  ];

  const experiences = [
    {
      role: "Front-End Developer", company: "Fanavaran Sepehr Fardad", location: "Tehran",
      period: "Dec 2025 – Present", color: t.accent,
      items: [
        "ساخت وب‌اپلیکیشن‌های ریسپانسیو با HTML، JS، Next.js، React و Tailwind CSS",
        "همکاری با تیم‌های cross-functional برای پیاده‌سازی فیچرهای جدید",
        "نوشتن کد تمیز، قابل نگهداری و reusable طبق best practice‌ها",
      ],
    },
    {
      role: "Front-End Developer", company: "luko", location: "Tehran",
      period: "2025 – 2026", color: t.accent,
      items: [
        "طراحی و توسعه لندینگ‌پیج‌های high-converting با HTML، CSS و JS",
        "یادگیری سریع تکنولوژی‌های جدید و تطبیق با نیازهای پروژه",
        "بهینه‌سازی پرفورمنس وب و پیاده‌سازی بهبودهای طراحی",
      ],
    },
    {
      role: "Front-End Developer", company: "IranGard", location: "Tehran",
      period: "2024 – 2025", color: t.cyan,
      items: [
        "طراحی و توسعه لندینگ‌پیج‌های high-converting با HTML، CSS و JS",
        "یادگیری سریع تکنولوژی‌های جدید و تطبیق با نیازهای پروژه",
        "بهینه‌سازی پرفورمنس وب و پیاده‌سازی بهبودهای طراحی",
      ],
    },
  ];

  const socials = [
    { icon: <SiGithub />, href: "https://github.com/abolfazlebrahiminext" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/abolfazlebrahiminext" },
    { icon: <SiInstagram />, href: "https://instagram.com/abolfazl.ebrahimi23" },
    { icon: <SiTelegram />, href: "https://t.me/abolfazlebrahiminext" },
  ];

  const contacts = [
    { icon: <FiMail />, label: "ایمیل", value: "abolfazlebrahimi.next@gmail.com", href: "mailto:abolfazlebrahimi.next@gmail.com" },
    { icon: <FiPhone />, label: "تلفن / روبیکا", value: "09935377426", href: "tel:09935377426" },
    { icon: <SiInstagram />, label: "اینستاگرام", value: "@abolfazl.ebrahimi23", href: "https://instagram.com/abolfazl.ebrahimi23" },
    { icon: <SiGithub />, label: "گیت‌هاب", value: "abolfazlebrahiminext", href: "https://github.com/abolfazlebrahiminext" },
    { icon: <FaLinkedinIn />, label: "لینکدین", value: "abolfazlebrahiminext", href: "https://linkedin.com/in/abolfazlebrahiminext" },
    { icon: <SiTelegram />, label: "تلگرام", value: "abolfazlebrahiminext", href: "https://t.me/abolfazlebrahiminext" },
  ];

  const navItems = [
    { id: "about", label: "درباره" },
    { id: "skills", label: "مهارت‌ها" },
    { id: "experience", label: "تجربیات" },
    { id: "projects", label: "پروژه‌ها" },
    { id: "contact", label: "تماس" },
  ];

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Syne:wght@400;700;800&display=swap');
    
    /* فونت شور برای متن‌های فارسی */
    @font-face {
      font-family: 'Shoor';
      src: url('/fonts/Shoor-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: 'Shoor';
      src: url('/fonts/Shoor-Black.ttf') format('truetype');
      font-weight: 900;
      font-style: normal;
    }
    @font-face {
      font-family: 'Shoor';
      src: url('/fonts/Shoor-Medium.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
    }

    *{margin:0;padding:0;box-sizing:border-box;}
    
    body {
      margin: 0;
      padding: 0;
    }
    
    /* متن‌های فارسی با فونت شور */
    .persian-text, p, h1, h2, h3, h4, .nav-link, .tag, .sec-title, .contact-row div, .timeline-dot, .skill-fill, .card {
      font-family: 'Shoor', 'JetBrains Mono', monospace !important;
    }
    
    /* متن‌های انگلیسی با فونت JetBrains */
    .english-text, code, pre, .skill-bar-track, .theme-toggle, .social-btn {
      font-family: 'JetBrains Mono', monospace !important;
    }

    ::-webkit-scrollbar{width:4px;}
    ::-webkit-scrollbar-track{background:${t.bg};}
    ::-webkit-scrollbar-thumb{background:${t.accent};border-radius:2px;}
    
    @keyframes pulse-ring{0%{transform:scale(0.85);opacity:1;}100%{transform:scale(2.2);opacity:0;}}
    @keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-7px);}}
    @keyframes scanline{0%{top:-4px;}100%{top:100%;}}
    @keyframes fadeUp{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);}}
    @keyframes slideInRight{from{opacity:0;transform:translateX(100%);}to{opacity:1;transform:translateX(0);}}
    
    .glitch{animation:glitchFlash 0.28s steps(1) forwards;}
    .card{background:${t.cardBg};border:1px solid ${t.border};border-radius:12px;transition:border-color 0.3s,box-shadow 0.3s;}
    .card:hover{border-color:${t.accent}50;box-shadow:0 0 24px ${t.accent}12;}
    .tag{display:inline-flex;align-items:center;gap:5px;padding:4px 10px;border-radius:20px;font-size:11px;border:1px solid ${t.border};color:${t.textMuted};background:${t.surfaceAlt};transition:all 0.2s;}
    .tag:hover{border-color:${t.accent};color:${t.accent};}
    .social-btn{display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:10px;border:1px solid ${t.border};color:${t.textMuted};cursor:pointer;transition:all 0.2s;text-decoration:none;font-size:18px;background:${t.surfaceAlt};}
    .social-btn:hover{border-color:${t.accent};color:${t.accent};box-shadow:${t.accentGlow};transform:translateY(-2px);}
    .sec-title{font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:${t.accent};margin-bottom:20px;display:flex;align-items:center;gap:10px;}
    .sec-title::before{content:'//';color:${t.accent}60;font-size:13px;}
    .sec-title::after{content:'';flex:1;height:1px;background:linear-gradient(to right,${t.accent}40,transparent);}
    .theme-toggle{background:${t.surfaceAlt};border:1px solid ${t.border};border-radius:8px;padding:9px;cursor:pointer;color:${t.accent};display:flex;align-items:center;justify-content:center;transition:all 0.2s;font-size:16px;}
    .theme-toggle:hover{border-color:${t.accent};box-shadow:${t.accentGlow};}
    .skill-track{width:100%;height:3px;background:${t.border};border-radius:2px;overflow:hidden;}
    .skill-fill{height:100%;border-radius:2px;transition:width 1.2s cubic-bezier(0.4,0,0.2,1);}
    .contact-row{display:flex;align-items:center;gap:12px;padding:12px 16px;border-radius:10px;border:1px solid ${t.border};background:${t.surfaceAlt};text-decoration:none;color:inherit;transition:all 0.2s;}
    .contact-row:hover{border-color:${t.accent};box-shadow:${t.accentGlow};transform:translateX(4px);}
    .timeline-dot{width:16px;height:16px;border-radius:50%;border:2px solid ${t.accent};background:${t.bg};box-shadow:0 0 10px ${t.accent}80;flex-shrink:0;}
    
    @media (max-width: 768px) {
      .social-btn { width: 38px; height: 38px; font-size: 16px; }
      .contact-row { padding: 10px 12px; }
      .sec-title { font-size: 9px; }
    }
    @media (max-width: 480px) {
      .social-btn { width: 34px; height: 34px; font-size: 14px; }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className={glitch ? "glitch" : ""} style={{
        minHeight: "100vh", background: t.bg, color: t.text,
        fontFamily: "'Shoor', 'JetBrains Mono', monospace",
        position: "relative", overflow: "hidden",
        transition: "background 0.4s,color 0.4s",
      }}>
        <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0, opacity: 0.5 }} />
        <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", backgroundImage: `linear-gradient(${t.gridColor} 1px,transparent 1px),linear-gradient(90deg,${t.gridColor} 1px,transparent 1px)`, backgroundSize: "50px 50px" }} />
        <div style={{ position: "fixed", left: 0, right: 0, height: "2px", zIndex: 1, pointerEvents: "none", background: `linear-gradient(to right,transparent,${t.accent}18,transparent)`, animation: "scanline 5s linear infinite" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 960, margin: "0 auto", padding: "0 20px 80px", paddingTop: "20px" }}>

          {/* ========== NAVBAR ========== */}
          <nav style={{
            position: "sticky", top: 0, zIndex: 100,
            backgroundColor: dark ? "rgba(3,7,18,0.95)" : "rgba(240,246,255,0.95)",
            backdropFilter: "blur(20px)",
            borderBottom: `1px solid ${t.border}`,
            padding: "12px 0",
            margin: "0 -20px 40px",
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 20px",
            }}>
              {/* لوگو */}
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: t.accent, boxShadow: t.accentGlow,
                  animation: "float 2.5s ease-in-out infinite"
                }} />
                <span style={{
                  fontFamily: "'Syne',sans-serif", fontWeight: 800,
                  fontSize: "clamp(11px, 4vw, 13px)",
                  color: t.accent, letterSpacing: 1
                }}>ABOLFAZL.DEV</span>
              </div>

              {/* دکمه منو همبرگری - فقط در موبایل */}
              {isMobile ? (
                <div
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  style={{
                    cursor: "pointer",
                    padding: "8px",
                    borderRadius: "8px",
                    background: t.surfaceAlt,
                    border: `1px solid ${t.border}`,
                    color: t.accent,
                  }}
                >
                  {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                </div>
              ) : (
                /* دکمه‌های دسکتاپ */
                <div style={{ display: "flex", gap: "8px" }}>
                  {navItems.map(item => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: t.textMuted,
                        fontSize: "11px",
                        fontWeight: 500,
                        padding: "6px 14px",
                        borderRadius: "4px",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        fontFamily: "'Shoor', 'JetBrains Mono', monospace",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = t.accent; e.currentTarget.style.background = t.accentDim; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = t.textMuted; e.currentTarget.style.background = "transparent"; }}
                    >
                      {item.label}
                    </button>
                  ))}
                  <button className="theme-toggle" onClick={toggleTheme} style={{ padding: "6px 10px", fontSize: "14px" }}>
                    {dark ? <FiSun /> : <FiMoon />}
                  </button>
                </div>
              )}
            </div>

            {/* منوی موبایل - اسلاید از راست */}
            {isMobile && mobileMenuOpen && (
              <div style={{
                position: "absolute",
                top: "100%",
                right: 0,
                left: 0,
                background: dark ? "rgba(3,7,18,0.98)" : "rgba(240,246,255,0.98)",
                backdropFilter: "blur(20px)",
                borderBottom: `1px solid ${t.border}`,
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                animation: "slideInRight 0.3s ease",
              }}>
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: t.textMuted,
                      fontSize: "14px",
                      fontWeight: 500,
                      padding: "10px 16px",
                      borderRadius: "8px",
                      cursor: "pointer",
                      textAlign: "right",
                      transition: "all 0.2s",
                      fontFamily: "'Shoor', 'JetBrains Mono', monospace",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = t.accent; e.currentTarget.style.background = t.accentDim; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = t.textMuted; e.currentTarget.style.background = "transparent"; }}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  className="theme-toggle"
                  onClick={toggleTheme}
                  style={{
                    padding: "10px 16px",
                    fontSize: "14px",
                    width: "100%",
                    justifyContent: "center",
                    marginTop: "8px",
                  }}
                >
                  {dark ? <FiSun style={{ marginLeft: "8px" }} /> : <FiMoon style={{ marginLeft: "8px" }} />}
                  {dark ? "حالت روشن" : "حالت تاریک"}
                </button>
              </div>
            )}
          </nav>

          {/* دکمه بازگشت به سایت اصلی */}
          <button
            onClick={() => window.location.href = "/"}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: 101,
              background: t.accent,
              border: "none",
              color: dark ? "#030712" : "#fff",
              padding: "8px 14px",
              borderRadius: "30px",
              cursor: "pointer",
              fontSize: "11px",
              fontWeight: "bold",
              fontFamily: "'Shoor', 'JetBrains Mono', monospace",
              boxShadow: t.accentGlow,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
          >
            ← بازگشت به سایت
          </button>

          {/* بقیه کد به همان صورت */}
          {/* HERO */}
          <header id="about" style={{ paddingBottom: 52, animation: "fadeUp 0.7s ease" }}>
            {/* محتوای هیرو */}
            <div style={{ display: "flex", gap: 36, alignItems: "flex-start", flexWrap: "wrap" }}>
              {/* عکس */}
              <div style={{ position: "relative", flexShrink: 0 }}>
                <div style={{ position: "absolute", inset: -10, borderRadius: 22, border: `1px solid ${t.accent}30`, animation: "pulse-ring 3s ease-out infinite" }} />
                <div style={{
                  width: 120, height: 160, borderRadius: 16,
                  border: `2px solid ${t.accent}`, boxShadow: t.accentGlow2,
                  background: t.surfaceAlt, display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center", gap: 6,
                  position: "relative", overflow: "hidden", animation: "float 4s ease-in-out infinite",
                }}>
                  <img src={abolfazl} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 14 }} alt="abolfazl" />
                  {[
                    { top: 6, left: 6, bt: true, bl: true },
                    { top: 6, right: 6, bt: true, br: true },
                    { bottom: 6, left: 6, bb: true, bl: true },
                    { bottom: 6, right: 6, bb: true, br: true },
                  ].map((c, i) => (
                    <div key={i} style={{
                      position: "absolute", top: c.top, left: c.left, bottom: c.bottom, right: c.right,
                      width: 10, height: 10,
                      borderTop: c.bt ? `2px solid ${t.accent}` : "none",
                      borderBottom: c.bb ? `2px solid ${t.accent}` : "none",
                      borderLeft: c.bl ? `2px solid ${t.accent}` : "none",
                      borderRight: c.br ? `2px solid ${t.accent}` : "none",
                    }} />
                  ))}
                </div>
              </div>

              {/* متن */}
              <div style={{ flex: 1, minWidth: 240 }}>
                <div style={{ fontSize: 10, color: t.accent, letterSpacing: 3, marginBottom: 8 }}>&gt;_ INITIALIZED</div>
                <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(34px,7vw,62px)", lineHeight: 1, color: t.text, marginBottom: 2 }}>Abolfazl</h1>
                <h1 style={{
                  fontFamily: "'Syne',sans-serif", fontWeight: 800,
                  fontSize: "clamp(34px,7vw,62px)", lineHeight: 1, marginBottom: 14,
                  background: `linear-gradient(90deg,${t.accent},${t.cyan})`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>Ebrahimi</h1>
                <div style={{ fontSize: 14, color: t.textMuted, marginBottom: 18, minHeight: 22 }}>
                  <span style={{ color: t.cyan }}>const</span>{" "}
                  <span style={{ color: t.accent }}>role</span>{" "}
                  <span style={{ color: t.text }}>=</span>{" "}
                  <span style={{ color: t.orange }}>"{typed}"</span>
                  <span style={{ opacity: cursorVisible ? 1 : 0, color: t.accent }}>|</span>
                </div>
                <p style={{ color: t.textMuted, lineHeight: 1.8, maxWidth: 460, fontSize: 12, marginBottom: 22, fontFamily: "'Shoor', 'JetBrains Mono', monospace" }}>
                  توسعه‌دهنده فرانت‌اند در ابتدای مسیر حرفه‌ای با پایه قوی در HTML، CSS و JavaScript.
                  متخصص در یادگیری سریع و پیاده‌سازی در پروژه‌های واقعی.
                </p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                  {socials.map((s, i) => <a key={i} href={s.href} target="_blank" rel="noopener" className="social-btn">{s.icon}</a>)}
                  <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "0 14px", height: 44, borderRadius: 10, border: `1px solid ${t.border}`, background: t.surfaceAlt, fontSize: 11, color: t.textMuted }}>
                    <FiMapPin size={13} style={{ color: t.accent }} /> البرز، ایران
                  </div>
                </div>
              </div>

              {/* چیپس اطلاعات */}
              <div style={{ display: "flex", flexDirection: "column", gap: 7, minWidth: 155 }}>
                {[
                  { label: "تولد", value: "آذر 1386" },
                  { label: "وضعیت", value: "آماده همکاری", hi: true },
                  { label: "انگلیسی", value: "A2" },
                  { label: "ترکی", value: "زبان مادری" },
                  { label: "ایتالیایی", value: "A1" },
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: "8px 12px", borderRadius: 8, background: t.surfaceAlt,
                    border: `1px solid ${item.hi ? t.accent : t.border}`,
                    boxShadow: item.hi ? t.accentGlow : "none",
                    display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10,
                  }}>
                    <span style={{ fontSize: 9, color: t.textMuted, letterSpacing: 1, fontFamily: "'Shoor', monospace" }}>{item.label}</span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: item.hi ? t.accent : t.text, fontFamily: "'Shoor', monospace" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </header>

          {/* SKILLS */}
          <section id="skills" style={{ marginBottom: 48, animation: "fadeUp 0.6s ease 0.1s both" }}>
            <div className="sec-title">مهارت‌ها و تکنولوژی‌ها</div>
            <div className="card" style={{ padding: 26 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(195px,1fr))", gap: 18 }}>
                {skills.map((sk, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontSize: 17, color: sk.color }}>{sk.icon}</span>
                        <span style={{ fontSize: 12, fontWeight: 500, color: t.text }}>{sk.name}</span>
                      </div>
                      <span style={{ fontSize: 10, color: t.accent, fontWeight: 700 }}>{sk.level}%</span>
                    </div>
                    <div className="skill-track">
                      <div className="skill-fill" style={{ width: `${sk.level}%`, background: `linear-gradient(to right,${sk.color}99,${sk.color})` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 22, paddingTop: 18, borderTop: `1px solid ${t.border}` }}>
                <div style={{ fontSize: 9, color: t.textMuted, letterSpacing: 2, marginBottom: 10 }}>مهارت‌های نرم</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {["یادگیرنده سریع", "کار تیمی", "حل مسئله", "انعطاف‌پذیری", "انضباط کاری", "مدیریت زمان", "توجه به جزییات"].map(s => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" style={{ marginBottom: 48, animation: "fadeUp 0.6s ease 0.2s both" }}>
            <div className="sec-title">سابقه کاری</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {experiences.map((exp, i) => (
                <div key={i} className="card" style={{ padding: 22 }}>
                  <div style={{ display: "flex", gap: 14 }}>
                    <div style={{ position: "relative", paddingTop: 3 }}>
                      <div className="timeline-dot" style={{ borderColor: exp.color }} />
                      {i < experiences.length - 1 && (
                        <div style={{ position: "absolute", left: "50%", top: 18, bottom: -38, width: 1, background: `linear-gradient(to bottom,${exp.color}50,transparent)`, transform: "translateX(-50%)" }} />
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                        <div>
                          <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 15, color: t.text }}>{exp.role}</div>
                          <div style={{ fontSize: 11, color: exp.color, marginTop: 2 }}>{exp.company} · {exp.location === "Tehran" ? "تهران" : exp.location}</div>
                        </div>
                        <span style={{ fontSize: 9, padding: "4px 10px", borderRadius: 20, border: `1px solid ${exp.color}40`, color: exp.color, background: `${exp.color}10` }}>{exp.period}</span>
                      </div>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 5 }}>
                        {exp.items.map((item, j) => (
                          <li key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 12, color: t.textMuted, lineHeight: 1.7, fontFamily: "'Shoor', monospace" }}>
                            <span style={{ color: exp.color, marginTop: 2 }}>▸</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" style={{ marginBottom: 48, animation: "fadeUp 0.6s ease 0.28s both" }}>
            <div className="sec-title">پروژه‌ها</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* پروژه SabzLearn */}
              <div className="card" style={{ padding: 26 }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 14 }}>
                  <div>
                    <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 17, color: t.text, marginBottom: 6 }}>SabzLearn Website</h3>
                    <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                      <span className="tag"><SiReact style={{ color: "#61dafb" }} /> React</span>
                      <span className="tag" style={{ color: t.accent, borderColor: t.accent }}>شخصی · ۱۴۰۴</span>
                    </div>
                  </div>
                  <a href="https://sabzlearnee.onrender.com" target="_blank" rel="noopener" style={{
                    display: "flex", alignItems: "center", gap: 7, padding: "10px 16px",
                    borderRadius: 10, border: `1px solid ${t.accent}`, color: t.accent,
                    background: t.accentDim, fontSize: 12, textDecoration: "none", fontWeight: 600,
                  }}>
                    <FiExternalLink size={13} /> مشاهده دمو
                  </a>
                </div>
                <p style={{ fontSize: 12, color: t.textMuted, lineHeight: 1.85, fontFamily: "'Shoor', monospace" }}>
                  طراحی مجدد و توسعه یک نمونه عملکردی از پلتفرم آموزشی SabzLearn از صفر با React —
                  تجزیه UI پیچیده به کامپوننت‌های reusable، مدیریت state و طراحی ریسپانسیو.
                </p>
              </div>

              {/* پروژه landing luko */}
              <div className="card" style={{ padding: 26 }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 14 }}>
                  <div>
                    <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 17, color: t.text, marginBottom: 6 }}>لندینگ لوکو</h3>
                    <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                      <span className="tag"><SiReact style={{ color: "#61dafb" }} /> React</span>
                      <span className="tag" style={{ color: t.accent, borderColor: t.accent }}>شخصی · ۱۴۰۵</span>
                    </div>
                  </div>
                  <a href="http://klnc.ir/l/jd7m4n6j" target="_blank" rel="noopener" style={{
                    display: "flex", alignItems: "center", gap: 7, padding: "10px 16px",
                    borderRadius: 10, border: `1px solid ${t.accent}`, color: t.accent,
                    background: t.accentDim, fontSize: 12, textDecoration: "none", fontWeight: 600,
                  }}>
                    <FiExternalLink size={13} /> مشاهده دمو
                  </a>
                </div>
                <p style={{ fontSize: 12, color: t.textMuted, lineHeight: 1.85, fontFamily: "'Shoor', monospace" }}>
                  طراحی و پیاده سازی لندینگ پیج لوکو - در این طرح سعی کردم که با فضای سفید اجازه بدم طرح نفس بکشه و طرح با مشتری صحبت کنه نه صرفا زیبایی
                </p>
              </div>

              {/* پروژه luko heals */}
              <div className="card" style={{ padding: 26 }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 14 }}>
                  <div>
                    <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 17, color: t.text, marginBottom: 6 }}>لوکو سلامت</h3>
                    <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                      <span className="tag"><SiReact style={{ color: "#61dafb" }} /> React</span>
                      <span className="tag" style={{ color: t.accent, borderColor: t.accent }}>شخصی · ۱۴۰۵</span>
                    </div>
                  </div>
                  <a href="http://klnc.ir/l/jd7m4n6j" target="_blank" rel="noopener" style={{
                    display: "flex", alignItems: "center", gap: 7, padding: "10px 16px",
                    borderRadius: 10, border: `1px solid ${t.accent}`, color: t.accent,
                    background: t.accentDim, fontSize: 12, textDecoration: "none", fontWeight: 600,
                  }}>
                    <FiExternalLink size={13} /> مشاهده دمو
                  </a>
                </div>
                <p style={{ fontSize: 12, color: t.textMuted, lineHeight: 1.85, fontFamily: "'Shoor', monospace" }}>
                  طراحی و پیاده سازی لوکو سلامت - لوکو سلامت یکی از فیچر های پلتفرم لوکو میباشد
                </p>
              </div>

              {/* پروژه luko club */}
              <div className="card" style={{ padding: 26 }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 14 }}>
                  <div>
                    <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 17, color: t.text, marginBottom: 6 }}>لوکو کلاب</h3>
                    <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                      <span className="tag"><SiReact style={{ color: "#61dafb" }} /> React</span>
                      <span className="tag" style={{ color: t.accent, borderColor: t.accent }}>شخصی · ۱۴۰۵</span>
                    </div>
                  </div>
                  <a href="https://klnc.ir/l/jgo259gq" target="_blank" rel="noopener" style={{
                    display: "flex", alignItems: "center", gap: 7, padding: "10px 16px",
                    borderRadius: 10, border: `1px solid ${t.accent}`, color: t.accent,
                    background: t.accentDim, fontSize: 12, textDecoration: "none", fontWeight: 600,
                  }}>
                    <FiExternalLink size={13} /> مشاهده دمو
                  </a>
                </div>
                <p style={{ fontSize: 12, color: t.textMuted, lineHeight: 1.85, fontFamily: "'Shoor', monospace" }}>
                  طراحی و پیاده سازی لوکو کلاب - لوکو کلاب یکی از فیچر های پلتفرم لوکو میباشد
                </p>
              </div>
            </div>
          </section>

          {/* EDUCATION */}
          <section id="education" style={{ marginBottom: 48, animation: "fadeUp 0.6s ease 0.34s both" }}>
            <div className="sec-title">تحصیلات و دوره‌ها</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(265px,1fr))", gap: 14 }}>
              <div className="card" style={{ padding: 20 }}>
                <div style={{ fontSize: 9, color: t.accent, letterSpacing: 2, marginBottom: 7 }}>تحصیلات</div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 14, color: t.text, marginBottom: 3 }}>دیپلم دبیرستان</div>
                <div style={{ fontSize: 11, color: t.cyan }}>علوم کامپیوتر · توحید</div>
                <div style={{ fontSize: 10, color: t.textMuted, marginTop: 3 }}>۱۴۰۲ – ۱۴۰۵</div>
              </div>
              {[
                { name: "دوره Next.js", ins: "سالار حقیقت دوست", year: "۱۴۰۵" },
                { name: "React پروژه محور", ins: "Serving Style Coding", year: "۱۴۰۴" },
                { name: "جاوااسکریپت (مقدماتی تا پیشرفته)", ins: "Master Programmer", year: "۱۴۰۴" },
                { name: "CSS از صفر تا صد", ins: "Neon Learn", year: "۱۴۰۳" },
                { name: "HTML از صفر تا صد", ins: "Neon Learn", year: "۱۴۰۳" },
              ].map((c, i) => (
                <div key={i} className="card" style={{ padding: 20 }}>
                  <div style={{ fontSize: 9, color: t.purple, letterSpacing: 2, marginBottom: 7 }}>دوره · یوتیوب</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: t.text, marginBottom: 3 }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: t.textMuted }}>{c.ins}</div>
                  <div style={{ fontSize: 9, color: t.textMuted, marginTop: 3 }}>{c.year}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" style={{ animation: "fadeUp 0.6s ease 0.4s both" }}>
            <div className="sec-title">ارتباط با من</div>
            <div className="card" style={{ padding: 26 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 12 }}>
                {contacts.map((c, i) => (
                  <a key={i} href={c.href} target="_blank" rel="noopener" className="contact-row">
                    <span style={{ fontSize: 18, color: t.accent }}>{c.icon}</span>
                    <div>
                      <div style={{ fontSize: 9, color: t.textMuted, letterSpacing: 1, marginBottom: 2, fontFamily: "'Shoor', monospace" }}>{c.label}</div>
                      <div style={{ fontSize: 11, color: t.text, fontWeight: 500 }}>{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          <div style={{ textAlign: "center", marginTop: 48, paddingTop: 20, borderTop: `1px solid ${t.border}` }}>
            <span style={{ fontSize: 9, color: t.textMuted, letterSpacing: 2 }}>
              &lt;/ ابوالفضل ابراهیمی · {new Date().getFullYear()} · ساخته شده با React /&gt;
            </span>
          </div>
        </div>
      </div>
    </>
  );
}