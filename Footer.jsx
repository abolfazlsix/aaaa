import React from 'react';
import instagramIcon from "../../icons/instagram.SVG";
import telegramIcon from "../../icons/telegram.SVG";
import rubikaIcon from "../../icons/rubika.png";

const Footer = ({ onResumeClick }) => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const styles = {
    footer: {
      width: '90%',
      margin: '3rem auto 1rem auto',
      backgroundColor: '#0f0e0e',
      borderRadius: '12px',
      padding: '1.5rem 2rem',
      direction: 'rtl',
      position: 'relative',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '2rem',
    },
    section: {
      flex: '2',
      minWidth: '200px',
    },
    sectionSmall: {
      flex: '1',
      minWidth: '150px',
    },
    sectionContact: {
      flex: '1.5',
      minWidth: '250px',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#1eb35b',
      marginBottom: '1rem',
    },
    text: {
      fontSize: '14px',
      color: 'rgba(255,255,255,0.6)',
      lineHeight: '1.6',
      marginBottom: '0.5rem',
    },
    smallText: {
      fontSize: '12px',
      color: 'rgba(255,255,255,0.4)',
      lineHeight: '1.5',
    },
    linkList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    linkItem: {
      marginBottom: '0.5rem',
    },
    link: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '14px',
      color: 'rgba(255,255,255,0.6)',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
    },
    dot: {
      width: '6px',
      height: '6px',
      backgroundColor: '#1eb35b',
      borderRadius: '50%',
      display: 'inline-block',
    },
    contactRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginBottom: '0.8rem',
    },
    contactLabel: {
      fontSize: '14px',
      color: 'rgba(255,255,255,0.6)',
    },
    contactValue: {
      fontSize: '14px',
      color: '#1eb35b',
      textDecoration: 'none',
      direction: 'ltr',
    },
    addressValue: {
      fontSize: '13px',
      color: 'rgba(255,255,255,0.6)',
      textAlign: 'right',
    },
    socialContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginTop: '1rem',
    },
    socialLabel: {
      fontSize: '14px',
      color: 'rgba(255,255,255,0.6)',
    },
    socialIcons: {
      display: 'flex',
      gap: '0.8rem',
    },
    socialIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderRadius: '50%',
      transition: 'all 0.3s ease',
      overflow: 'hidden',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    socialIconImg: {
      width: '20px',
      height: '20px',
      objectFit: 'contain',
    },
    copyright: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1rem',
      marginTop: '2rem',
      paddingTop: '1rem',
      borderTop: '1px solid rgba(255,255,255,0.1)',
    },
    copyrightText: {
      fontSize: '12px',
      color: 'rgba(255,255,255,0.5)',
    },
    brand: {
      color: '#1eb35b',
      cursor: 'pointer',
    },
    decorative: {
      position: 'absolute',
      top: '-10px',
      right: '-10px',
      width: '100px',
      height: '100px',
      backgroundColor: '#1eb35b',
      borderRadius: '12px',
      zIndex: -1,
      opacity: 0.1,
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* بخش درباره موکب */}
        <div style={styles.section}>
          <h3 style={styles.title}>موکب عشاق الرقیه (س)</h3>
          <p style={styles.text}>
            خادمی حضرت رقیه(س) در ایام محرم الحرام
          </p>
          <p style={styles.smallText}>
            موکب عشاق الرقیه(س) در 13 شب محرم فعال است
          </p>
        </div>

        {/* بخش دسترسی سریع */}
        <div style={styles.sectionSmall}>
          <h3 style={styles.title}>دسترسی سریع</h3>
          <ul style={styles.linkList}>
            <li style={styles.linkItem}>
              <a style={styles.link} onClick={() => scrollToSection('vaghaye')}>
                <span style={styles.dot}></span>
                وقایع محرم
              </a>
            </li>
            <li style={styles.linkItem}>
              <a style={styles.link} onClick={() => scrollToSection('zendegi')}>
                <span style={styles.dot}></span>
                زندگینامه شهدا
              </a>
            </li>
            <li style={styles.linkItem}>
              <a style={styles.link} onClick={() => scrollToSection('help')}>
                <span style={styles.dot}></span>
                کمک رسانی
              </a>
            </li>
            <li style={styles.linkItem}>
              <a style={styles.link} onClick={() => scrollToSection('gallery')}>
                <span style={styles.dot}></span>
                گالری تصاویر
              </a>
            </li>
          </ul>
        </div>

        {/* بخش ارتباط با ما */}
        <div style={styles.sectionContact}>
          <h3 style={styles.title}>ارتباط با ما</h3>
          
          <div style={styles.contactRow}>
            <span style={styles.contactLabel}>شماره تماس</span>
            <a href="tel:09935377426" style={styles.contactValue}>
              ۰۹۹۳۵۳۷۷۴۲۶
            </a>
          </div>

          <div style={styles.contactRow}>
            <span style={styles.contactLabel}>آدرس</span>
            <span style={styles.addressValue}>
              البرز - نظرآباد - خ آیت الله کاشانی - نبش بهارستان ۵۵
            </span>
          </div>

          {/* شبکه‌های اجتماعی */}
          <div style={styles.socialContainer}>
            <span style={styles.socialLabel}>شبکه های اجتماعی</span>
            <div style={styles.socialIcons}>
              {/* اینستاگرام */}
              <a
                href="https://www.instagram.com/oshagh_r315"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIcon}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#E4405F';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <img src={instagramIcon} alt="اینستاگرام" style={styles.socialIconImg} />
              </a>

              {/* تلگرام */}
              <a
                href="https://t.me/oshagh_r315"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIcon}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#26A5E4';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <img src={telegramIcon} alt="تلگرام" style={styles.socialIconImg} />
              </a>

              {/* روبیکا */}
              <a
                href="https://rubika.ir/oshagh_r315"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIcon}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#7C4DFF';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <img src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/64/1A1A1A/external-rubik-toys-icongeek26-glyph-icongeek26.png" alt="روبیکا" style={styles.socialIconImg} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* کپی رایت */}
      <div style={styles.copyright}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M7.9987 14.6668C4.3187 14.6668 1.33203 11.6802 1.33203 8.00016C1.33203 4.32016 4.3187 1.3335 7.9987 1.3335C11.6787 1.3335 14.6654 4.32016 14.6654 8.00016C14.6654 11.6802 11.6787 14.6668 7.9987 14.6668Z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
            <path d="M9.91886 10.0002C9.44553 10.4135 8.83219 10.6668 8.15885 10.6668C6.68552 10.6668 5.49219 9.4735 5.49219 8.00016C5.49219 6.52683 6.68552 5.3335 8.15885 5.3335C8.83219 5.3335 9.44553 5.58683 9.91886 6.00016" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
          </svg>
          <p style={styles.copyrightText}>
            {currentYear} | کلیه حقوق مادی و معنوی برای <span style={styles.brand}>موکب عشاق الرقیه (س)</span> محفوظ است.
          </p>
        </div>
        
        <p style={styles.copyrightText}>
          ساخته شده توسط <span style={styles.brand} onClick={onResumeClick}>AloneTeam</span>
        </p>
      </div>

      {/* المان تزئینی */}
      <div style={styles.decorative}></div>
    </footer>
  );
};

export default Footer;