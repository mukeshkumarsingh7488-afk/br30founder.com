import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    const oldScript = document.getElementById("br30-script");
    if (oldScript) oldScript.remove();

    const script = document.createElement("script");
    script.id = "br30-script";
    script.src = "/js/script.js";
    script.async = false;

    script.onload = () => {
      document.dispatchEvent(new Event("DOMContentLoaded", { bubbles: true, cancelable: true }));
      window.dispatchEvent(new Event("load"));
      console.log("BR30 script loaded successfully");
    };

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <>
      <style>{`
html,body{max-width:100%;overflow-x:hidden;position:relative;padding-top:70px}html{scroll-behavior:smooth}#risk-card{scroll-margin-top:100px}:target{scroll-margin-top:110px}.stack-cards__item{will-change:transform,opacity}*{box-sizing:border-box}#scroll-progress{position:fixed;top:0;left:0;width:0%;height:2px;background:#a020f0 !important;z-index:99999 !important;box-shadow:0 0 15px #a020f0;transition:width 0.15s ease-out}#myBar{position:fixed;top:0;left:0;height:4px;background:#a020f0;width:0%;z-index:10000;box-shadow:0 0 10px #a020f0}.cursor-dot,.cursor-outline{pointer-events:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:50%;z-index:9999}.cursor-dot{width:8px;height:8px;background-color:#a020f0}.cursor-outline{width:40px;height:40px;border:2px solid #a020f0;transition:transform 0.2s ease-out}@media (max-width:768px){.cursor-dot,.cursor-outline,#myBar{display:none}}.cursor-follower{width:20px;height:20px;background-color:rgba(160,32,240,0.3);border:2px solid #a020f0;border-radius:50%;position:fixed;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:transform 0.1s ease-out}*{margin:0;padding:0;box-sizing:border-box;font-family:"Poppins",sans-serif;scroll-behavior:smooth}body{background-color:#0f172a;color:#ffffff;overflow-x:hidden}.purple{color:#a020f0}header{position:fixed;top:0;left:0;width:100%;z-index:10000;background:rgba(11,1,24,0.95);backdrop-filter:blur(10px);padding:15px 5%;display:flex;justify-content:space-between;align-items:center;border-bottom:none}header::after{content:"";position:absolute;bottom:0;left:0;width:100%;height:2.5px;background:linear-gradient(90deg,#a020f0,#00d2ff,#ff00ff,#a020f0);background-size:300% 100%;animation:borderMove 4s linear infinite;box-shadow:0 1px 15px rgba(160,32,240,0.6)}@keyframes borderMove{0%{background-position:0% 50%}100%{background-position:100% 50%}}@media (max-width:768px){body{padding-top:100px}}body{padding-top:80px}nav{display:flex;gap:25px}nav a{color:white;text-decoration:none;font-size:14px;font-weight:600;transition:0.3s ease;opacity:0.8}nav a:hover{color:#a020f0;opacity:1;text-shadow:0 0 10px rgba(160,32,240,0.5)}@media (max-width:768px){header{padding:12px 20px}header h1{font-size:20px}nav{gap:15px}nav a{font-size:12px}}.logo-title{display:flex;align-items:center;gap:10px}.logo{width:50px;height:auto;border-radius:50%}section{padding:60px 5%}.card{background:#1e293b;border:1px solid #334155;border-radius:15px;padding:20px;transition:0.3s}.card:hover{border-color:#a020f0;transform:translateY(-5px)}@media (max-width:900px){header{flex-direction:column;padding:15px}header h1{margin-bottom:15px}nav{flex-wrap:wrap;justify-content:center;gap:10px;width:100%}nav a{font-size:12px;background:#1e293b;padding:5px 12px;border-radius:8px;border:1px solid #334155}.cursor-follower{display:none}}.main-header{position:fixed !important;top:0 !important;left:0;width:100%;z-index:10000;background:#0a0a0a;box-shadow:0 4px 15px rgba(0,0,0,0.5);padding:10px 15px;box-sizing:border-box}.mobile-menu-btn{display:none}@media (max-width:768px){.main-header{display:grid;grid-template-columns:50px 1fr auto;align-items:center;text-align:center;padding:10px 15px;position:fixed !important;top:0 !important;width:100%;z-index:10000;background:#0a0a0a}.main-header h1{margin:0;font-size:1.1rem;grid-column:2}.logo-title{display:contents}.logo{grid-column:1;width:40px}.mobile-menu-btn{display:block;grid-column:3;background:#9b59b6;color:white;padding:6px 12px;border-radius:6px;font-size:14px;cursor:pointer}nav#navLinks{display:none;position:fixed;top:60px;right:15px;width:180px;background:#1a1a1a;border:1px solid #333;border-radius:10px;flex-direction:column;padding:10px 0;box-shadow:0 10px 25px rgba(0,0,0,0.5);z-index:10001}nav#navLinks.show{display:flex}nav a{padding:12px 20px;border-bottom:1px solid #222;width:100%;text-align:left;color:white;text-decoration:none}nav a:last-child{border:none}}@media (max-width:768px){nav#navLinks{position:fixed;top:60px;right:15px}}.progress-container{width:100%;height:4px;background:#1e293b;position:fixed;top:0;z-index:1001}.progress-bar{height:4px;background:#a020f0;width:0%}.hero-main{padding-top:80px !important;margin-top:0 !important;background-color:#0f172a;text-align:center;padding-top:40px;min-height:auto;display:flex;justify-content:center;align-items:center}.video-text{font-size:45px;font-weight:700;color:#ffffff;line-height:1.2}.sub-text{font-size:24px;color:#cbd5e1;margin-top:10px}#element{color:#a020f0;font-weight:bold;font-size:1.5rem;text-shadow:0 0 10px rgba(160,32,240,0.3)}.typed-cursor{color:#a020f0;font-size:1.5rem}.hero-tagline{font-size:16px;color:#94a3b8;max-width:700px;margin:20px auto}.mobile-break{display:none}@media (max-width:768px){.hero-tagline{font-size:14px !important;text-align:center !important;display:block !important;width:100% !important}.mobile-break{display:block !important;content:"";margin-top:5px}}@media (max-width:768px){.hero-tagline{font-size:14px !important;max-width:100% !important;padding-right:10px !important;margin:15px auto !important;text-align:center !important}}.btn-primary{display:inline-block;background-color:#a020f0;color:white;padding:14px 30px;border-radius:50px;text-decoration:none;font-weight:600;transition:0.3s ease;margin-top:20px;border:1px solid #a020f0}.btn-primary:hover{background:transparent;color:#a020f0;box-shadow:0 0 20px rgba(160,32,240,0.4)}.hero-image{position:relative;display:flex;justify-content:center;align-items:center;margin-top:40px}.image-wrapper{position:relative;width:280px;height:280px;border-radius:50%;border:4px solid #a020f0;box-shadow:0 0 30px rgba(160,32,240,0.4)}.image-wrapper img{width:100%;height:100%;object-fit:cover;border-radius:50%}.live-status-bar{position:absolute;top:-20px;left:50%;transform:translateX(-50%);background:#1e293b;padding:5px 15px;border-radius:50px;font-size:12px;white-space:nowrap;border:1px solid #a020f0}.live-dot{height:8px;width:8px;background:#22c55e;border-radius:50%;display:inline-block;margin-right:5px}.photo-name{position:absolute;bottom:-15px;left:50%;transform:translateX(-50%);background:#a020f0;padding:5px 20px;border-radius:50px;font-weight:700;font-size:14px}.flip-section{position:relative !important;z-index:20 !important;padding-top:60px !important;padding:60px 5%;margin-top:0 !important;text-align:center;background-color:#0f172a}.flip-section h2{margin-top:50px !important;padding-top:0 !important}.flip-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:30px;margin-top:40px}.flip-card{height:350px;perspective:1000px}.flip-card-inner{position:relative;width:100%;height:100%;transition:transform 0.8s;transform-style:preserve-3d}.flip-card:hover .flip-card-inner{transform:rotateY(180deg)}.flip-card-front,.flip-card-back{position:absolute;width:100%;height:100%;backface-visibility:hidden;border-radius:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:20px;border:1px solid #334155}.flip-card-front{background:#1e293b;color:white}.flip-card-back{background:#1e293b;color:white;transform:rotateY(180deg);border-color:#a020f0}.flip-card-back ul{list-style:none;font-size:14px;color:#cbd5e1;margin:15px 0;text-align:left}.service-btn{background:#a020f0;color:white;text-decoration:none;padding:8px 20px;border-radius:8px;font-size:13px;font-weight:600;transition:0.3s}@media (max-width:768px){.image-wrapper{width:220px;height:220px}.flip-grid{grid-template-columns:1fr}.flip-card{height:320px}}.slider-section{padding:100px 0;background-color:#0f172a;overflow:hidden}.scroll-track{display:flex;gap:30px;padding:60px 0;width:max-content !important;animation:seamlessLoop 30s linear infinite !important}@keyframes seamlessLoop{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}.scroll-container:hover .scroll-track{animation-play-state:paused}.scroll-container:hover .scroll-track{animation-play-state:paused}.flip-card{width:250px;height:360px;perspective:1000px}.flip-card.up{transform:translateY(-40px)}.flip-card.down{transform:translateY(40px)}.flip-card-inner{position:relative;width:100%;height:100%;transition:transform 0.8s cubic-bezier(0.4,0,0.2,1);transform-style:preserve-3d;border-radius:15px}.flip-card:hover .flip-card-inner{transform:rotateY(180deg);box-shadow:0 0 30px rgba(160,32,240,0.6)}.flip-card-front,.flip-card-back{position:absolute;width:100%;height:100%;backface-visibility:hidden;border-radius:15px;overflow:hidden;border:1px solid rgba(160,32,240,0.2)}.flip-card-front img{width:100%;height:100%;object-fit:cover;filter:grayscale(100%)}.name-tag{position:absolute;bottom:0;left:0;width:100%;background:linear-gradient(transparent,rgba(0,0,0,0.9));padding:25px 15px;text-align:center}.name-tag h3{color:#ffffff;font-size:18px;margin-bottom:2px}.name-tag p{color:#00f2ff;font-size:10px !important;text-transform:lowercase;font-weight:400;letter-spacing:1px;margin-top:4px !important;line-height:1.2}.team-heading h2,h3{text-align:left;padding-left:20px}.team-heading h2,.team-heading h3{margin-left:0}.flip-card-back{background:#a020f0;color:white;transform:rotateY(180deg);display:flex;justify-content:center;align-items:center;padding:25px;text-align:center;font-size:14px;line-height:1.6}@keyframes teamScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}@media (max-width:768px){.flip-card{width:180px;height:280px}.flip-card.up{transform:translateY(-20px)}.flip-card.down{transform:translateY(20px)}.name-tag h3{font-size:15px}}.skills-section,.rules-section,.services-section{padding:80px 5%;background-color:#0f172a;text-align:center}.section-title{font-size:32px;margin-bottom:40px;color:#ffffff}.section-title span{color:#a020f0}.skills-container{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:30px;max-width:1100px;margin:0 auto}.skill-category{background:#1e293b;padding:30px;border-radius:20px;border:1px solid #334155;transition:0.3s}.skill-category:hover{border-color:#a020f0;box-shadow:0 0 20px rgba(160,32,240,0.2)}.skill-category h3{color:#a020f0;margin-bottom:20px;font-size:20px}.skill-items{display:grid;grid-template-columns:1fr 1fr;gap:15px}.skill-card{background:#0f172a;padding:12px;border-radius:10px;font-size:14px;border:1px solid #334155;display:flex;align-items:center;justify-content:center;gap:8px}.rules-grid{display:flex;flex-wrap:wrap;justify-content:center;gap:20px}.rule-box{background:#1e293b;padding:30px;border-radius:20px;min-width:200px;border-bottom:4px solid #a020f0;transition:0.3s}.rule-box h4{font-size:35px;color:#a020f0;margin-bottom:5px}.rule-box p{font-size:14px;color:#cbd5e1}.services-container{display:flex;flex-wrap:wrap;justify-content:center;gap:30px;margin-top:40px}.service-box{background:#1e293b;padding:40px 30px;border-radius:24px;width:100%;max-width:450px;border:1px solid #334155;transition:0.4s ease;position:relative;overflow:hidden}.service-box:hover{transform:translateY(-10px);border-color:#a020f0;box-shadow:0 15px 35px rgba(0,0,0,0.4)}.service-icon{font-size:40px;margin-bottom:20px}.service-box h3{font-size:22px;margin-bottom:15px;color:#ffffff}.service-box p{font-size:15px;color:#94a3b8;line-height:1.6;margin-bottom:25px}.service-btn{display:inline-block;background:#a020f0;color:white;text-decoration:none;padding:10px 25px;border-radius:10px;font-weight:600;transition:0.3s}.service-btn:hover{background:#8219c4;transform:scale(1.05)}@media (max-width:768px){.section-title{font-size:26px}.skill-category{padding:20px}.rule-box{width:100%;min-width:100%}.service-box{padding:30px 20px;max-width:100%}.service-box h3{font-size:20px}}.project-section,.browse-section,.social-section{padding:80px 5%;background-color:#0f172a;text-align:center}.project-title,.section-title{font-size:32px;color:#ffffff;margin-bottom:40px;font-weight:700}.section-title span{color:#a020f0}.project-container{display:flex;flex-wrap:wrap;justify-content:center;gap:30px}.project-box{background:#1e293b;padding:30px;border-radius:20px;width:100%;max-width:500px;border:1px solid #334155;text-align:left;transition:0.3s}.project-box:hover{border-color:#a020f0;transform:translateY(-5px)}.project-box h3{color:#a020f0;margin-bottom:20px;font-size:22px}.project-list{list-style:none;color:#cbd5e1;font-size:15px}.project-list li{padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.05)}.project-list li::before{content:"▹ ";color:#a020f0}.network-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-top:40px}.network-card{background:#1e293b;padding:20px;border-radius:12px;display:flex;align-items:center;gap:12px;border:1px solid #334155;transition:0.3s;position:relative;cursor:pointer}.network-card:hover{background:#a020f0;border-color:#a020f0}.dot-icon{width:10px;height:10px;background:#a020f0;border-radius:50%}.network-card:hover .dot-icon{background:#fff}.network-card a.card-link{position:absolute;inset:0;display:flex;align-items:center;padding-left:40px;color:#fff;text-decoration:none;font-weight:500;font-size:14px;z-index:2}.social-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-top:40px}.social-card{display:flex;align-items:center;background:#1e293b;padding:20px;border-radius:15px;text-decoration:none;border:1px solid #334155;transition:0.3s}.social-card:hover{transform:scale(1.05);border-color:#a020f0}.social-icon{font-size:30px;margin-right:15px;color:#ffffff}.social-info strong{display:block;color:#fff;font-size:16px}.social-info span{color:#94a3b8;font-size:12px}.social-card.yt:hover .social-icon{color:#ff0000}.social-card.ig:hover .social-icon{color:#e1306c}.social-card.x-twitter:hover .social-icon{color:#000}.social-card.fb:hover .social-icon{color:#1877f2}.social-card.telegram:hover .social-icon{color:#229ed9}.social-card.whatsapp:hover .social-icon{color:#25d366}.social-card.threads:hover .social-icon{color:#000}.social-card.linkedin:hover .social-icon{color:#0a66c2}.social-card.gmail:hover .social-icon{color:#ea4335}@media (max-width:768px){.project-box,.network-card,.social-card{max-width:100%}.section-title{font-size:26px}.project-box h3{font-size:20px}.network-grid{grid-template-columns:1fr}}.about-section{padding:80px 5%;background-color:#0f172a;text-align:center}.about-container{max-width:850px;margin:0 auto;background:#1e293b;padding:40px;border-radius:24px;border:1px solid #334155;box-shadow:0 10px 30px rgba(0,0,0,0.4)}.about-label{display:inline-block;background:rgba(160,32,240,0.1);color:#a020f0;padding:8px 20px;border-radius:50px;font-size:13px;font-weight:700;margin-bottom:25px;border:1px solid #a020f0}.about-intro{font-size:28px;line-height:1.4;margin-bottom:30px;color:#ffffff}.about-intro .highlight{color:#a020f0}.about-details p{font-size:16px;color:#cbd5e1;margin-bottom:15px;line-height:1.7}.date{color:#a020f0;font-weight:600}.about-note{background:#0f172a;padding:15px 20px;border-radius:12px;margin-bottom:15px;border-left:4px solid #a020f0;text-align:left}.about-note p{font-size:14px;color:#94a3b8}.about-note strong{color:#ffffff}.about-footer{margin-top:30px;font-size:14px;color:#94a3b8}.email-link{color:#a020f0;text-decoration:none;font-weight:600;word-break:break-all}.footer-section{padding:60px 5% 20px;background:#0f172a;border-top:1px solid #334155}.footer-title{font-size:30px;color:#ffffff;margin-bottom:15px;text-align:center}.footer-desc{color:#94a3b8;text-align:center;max-width:600px;margin:0 auto 40px}.contact-links{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;max-width:1000px;margin:0 auto}.contact-item{display:flex;align-items:center;background:#1e293b;padding:20px;border-radius:15px;text-decoration:none;border:1px solid #334155;transition:0.3s}.contact-item:hover{border-color:#a020f0;transform:translateY(-5px);background:rgba(160,32,240,0.05)}.contact-item .icon{font-size:24px;margin-right:15px}.contact-item .text span{display:block;color:#94a3b8;font-size:12px}.contact-item .text strong{color:#ffffff;font-size:14px;word-break:break-all}.footer-bottom{margin-top:50px;text-align:center;padding-top:20px;border-top:1px solid #1e293b;font-size:13px;color:#64748b}@media (max-width:768px){.about-container{padding:30px 20px}.about-intro{font-size:22px}.footer-title{font-size:24px}.contact-links{grid-template-columns:1fr}}:root{--card-height:550px;--primary-green:#00ff88}#stack-cards{list-style:none;padding:0;margin-bottom:40px;display:flex;flex-direction:column;align-items:center;position:relative;z-index:10;width:100%}.stack-cards__item{width:94%;max-width:1200px;height:var(--card-height);position:relative;border-radius:32px;background:#1a1a1a;margin-bottom:20px}.card__content{background:#0d1117 !important;border:1px solid #30363d;border-radius:32px;display:flex;height:100%;width:100%;overflow:hidden;box-shadow:0 -20px 40px rgba(0,0,0,0.8)}.main-content-area.horizontal-layout{flex:1;width:100%;padding:50px 40px;display:flex;flex-direction:column;overflow-y:auto}.main-content-area::-webkit-scrollbar{width:6px}.main-content-area::-webkit-scrollbar-thumb{background:#30363d;border-radius:10px}.card-header h2{font-size:2.5rem;color:var(--primary-green);margin-bottom:10px}.card-header p{color:#8b949e;font-size:1.1rem;margin-bottom:30px}.sub-card-grid-horizontal{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;width:100%}.sub-box{background:#161b22;border:1px solid #30363d;border-radius:20px;padding:20px;position:relative;overflow:hidden;min-height:310px;transition:border-color 0.3s ease}.sub-box:hover{border-color:var(--primary-green)}.box-image{width:100%;height:110px;margin-bottom:15px;display:flex;align-items:center;justify-content:center;background:#000;border-radius:12px}.box-image img{max-width:80%;max-height:80%;object-fit:contain}.box-content h4{color:#fff;font-size:1.1rem;margin-bottom:6px}.box-content p{color:#8b949e;font-size:0.85rem;line-height:1.4}.hover-btn-link{position:absolute;bottom:-40px;left:20px;color:var(--primary-green);text-decoration:none;font-weight:600;font-size:0.85rem;transition:all 0.4s ease;opacity:0}.sub-box:hover .hover-btn-link{bottom:20px;opacity:1}@media (max-width:1100px){.sub-card-grid-horizontal{grid-template-columns:repeat(2,1fr)}}@media (max-width:768px){.stack-cards__item{height:650px !important}.card__content{flex-direction:column;overflow:hidden}.main-content-area.horizontal-layout{padding:25px 15px;overflow-y:auto;-webkit-overflow-scrolling:touch}.card-header h2{font-size:1.8rem}.sub-card-grid-horizontal{grid-template-columns:1fr !important;gap:15px}.sub-box{height:auto !important;padding-bottom:60px}.hover-btn-link{position:relative !important;bottom:0 !important;left:0 !important;opacity:1 !important;margin-top:15px;display:inline-block}}.main-content-area::-webkit-scrollbar-thumb{background:var(--primary-green)}section,main,.wrapper{overflow:visible !important}.next-section{position:relative !important;z-index:20 !important;background:#0d1117 !important;padding-top:80px !important}

      `}</style>
      <main className="page page-index">
        <div id="scroll-progress"></div>
        <div className="cursor-dot"></div>
        <div className="cursor-outline"></div>
        <div id="myBar"></div>
        <header className="main-header">
          <div className="logo-title">
            <img src="https://res.cloudinary.com/dw4imlekm/image/upload/v1781813427/profile_pics/6a3448ddd7e9095466ce453a.png" alt="BR30 Group Official Logo - Mukesh Raj" className="logo" style={{ width: "45px", height: "45px", borderRadius: "8px" }} />
            <h1>
              <span className="purple">BR30</span>
              founder.com
            </h1>
          </div>
          <div className="mobile-menu-btn" id="pageDropdownBtn">
            Pages
            <i className="fas fa-caret-down"></i>
          </div>
          <nav id="navLinks">
            <a href="#home">Home</a>
            <a href="#service">Service</a>
            <a href="#connect">Connect</a>
            <a href="#team">Our Team</a>
            <a href="#projects">Projects</a>
            <a href="#browse">Browse</a>
            <a href="#highlite">Highlite</a>
            <a href="#about">About</a>
          </nav>
        </header>
        <div className="progress-container">
          <div className="progress-bar" id="myBar"></div>
        </div>
        <section id="home" className="hero-main">
          <div className="hero-content">
            <div className="video-text">
              Hey, My Name is
              <span className="purple">Mukesh</span>
              <div className="sub-text">and I am a passionate.</div>
              <span id="element"></span>
              <p className="hero-tagline">
                Turning market volatility into opportunity
                <br className="mobile-break" />
                with smart strategy and clean mind....
              </p>
              <div className="hero-btns">
                <a href="https://t.me/+F8mDhdfiGaI1NDY1" className="btn-primary" target="_blank">
                  Join Our Community
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-wrapper">
                <div className="live-status-bar">
                  <span className="live-dot"></span>
                  <span className="status-text">
                    BR30
                    <span className="price-up"> Trader</span>
                  </span>
                </div>
                <div className="image-bg-glow"></div>
                <img src="/images/BR30™ LOGO.png" alt="Mukesh Professional Photo" />
                <div className="photo-name">MUKESH RAJ</div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <ul id="stack-cards">
          <li id="card-1" className="stack-cards__item">
            <div className="card__content">
              <div className="main-content-area horizontal-layout">
                <div className="card-header">
                  <h2>🚀 Join the BR30 Trading Community</h2>
                  <p>Learn real price action, decode market structure, and trade with confidence like a pro.</p>
                </div>
                <div className="sub-card-grid-horizontal">
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/YouTube.jpg" alt="Free Trading Education" />
                    </div>
                    <div className="box-content">
                      <h4>🎓 Free Trading Education</h4>
                      <p>Learn supply & demand, breakout logic, and real market psychology step-by-step.</p>
                    </div>
                    <a href="https://www.youtube.com/@br30traderofficial" target="_blank" rel="noopener noreferrer" className="hover-btn-link" title="Watch BR30 Trader YouTube Channel for Free Trading Education" aria-label="BR30 Trader YouTube Channel">
                      ▶ Start Learning
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/Instargram.jpg" alt="Daily Market Insights" />
                    </div>
                    <div className="box-content">
                      <h4>📊 Daily Market Insights</h4>
                      <p>Stay ahead with daily analysis, trade ideas, and live market psychology.</p>
                    </div>
                    <a href="https://www.instagram.com/br30Traderofficial" target="_blank" rel="noopener noreferrer" className="hover-btn-link" title="Follow BR30 Trader Instagram for Daily Market Insights" aria-label="BR30 Trader Instagram Profile">
                      📈 Follow Updates
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/facebook.jpg" alt="5,000+ Traders in BR30 Community" />
                    </div>
                    <div className="box-content">
                      <h4>👥 5,000+ Traders Community</h4>
                      <p>Connect, share, and grow with serious traders focused on consistency.</p>
                    </div>
                    <a href="https://www.facebook.com/share/1DDJYGYYDf/" target="_blank" rel="noopener noreferrer" className="hover-btn-link" title="Join BR30 Trader Facebook Trading Community" aria-label="BR30 Trader Facebook Community">
                      🤝 Join Community
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/telegram.jpg" alt="Real-time Trade Alerts" />
                    </div>
                    <div className="box-content">
                      <h4>⚡ Real-time Trade Alerts</h4>
                      <p>Get instant signals, breakout alerts & high-probability setups.</p>
                    </div>
                    <a href="https://t.me/+hBAT4kWo63A4ZWY1" target="_blank" rel="noopener noreferrer" className="hover-btn-link" title="Join BR30 Trader Telegram Channel for Real-time Trade Alerts" aria-label="BR30 Trader Telegram Channel">
                      🚀 Get Signals
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li id="card-2" className="stack-cards__item">
            <div className="card__content">
              <div className="main-content-area horizontal-layout">
                <div className="card-header">
                  <h2>⚡ Community & Support Access</h2>
                  <p>Get instant support, join our trading network, and solve your queries faster.</p>
                </div>
                <div className="sub-card-grid-horizontal">
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/whatsapp.jpg" alt="WhatsApp Community" />
                    </div>
                    <div className="box-content">
                      <h4>💬 WhatsApp Community</h4>
                      <p>Join our active traders group for instant updates & discussions.</p>
                    </div>
                    <a href="https://chat.whatsapp.com/B4t82SWBcgOIZTeQXp1wDI" target="_blank" rel="noopener noreferrer" className="hover-btn-link" title="Join BR30 Trader WhatsApp Trading Community" aria-label="BR30 Trader WhatsApp Community">
                      🚀 Join Community
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/gmail.jpg" alt="Support Email" />
                    </div>
                    <div className="box-content">
                      <h4>📧 Support Email</h4>
                      <p>Facing any issue? Reach out and get fast professional help.</p>
                    </div>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support.br30trader@gmail.com&su=Support%20Request&body=Hello%20BR30%20Support%20Team,%0A%0AMujhe%20help%20chahiye..." target="_blank" rel="noopener noreferrer" className="hover-btn-link" title="Email BR30 Trader Support Team" aria-label="BR30 Trader Support Email">
                      ✉ Contact Support
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/git-web.jpg" alt="Web Service Support" />
                    </div>
                    <div className="box-content">
                      <h4>🌐 Web Service Support</h4>
                      <p>For website, services, or technical queries contact our dev team.</p>
                    </div>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=br30service.contact@gmail.com&su=Service%20Inquiry&body=Hello%20BR30%20Team,%0A%0AMujhe%20web%20service%20ke%20bare%20mein%20jaankari%20chahiye..." target="_blank" rel="noopener noreferrer" className="hover-btn-link" title="Contact BR30 Trader Web Service Support Team" aria-label="BR30 Trader Web Service Support">
                      🛠 Request Service
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/phone.jpg" alt="Call Support" />
                    </div>
                    <div className="box-content">
                      <h4>📞 Call Support (10AM – 6PM)</h4>
                      <p>Direct call support for course enrollment, technical issues, or web services. (Please call only for urgent queries; avoid unnecessary calls.)</p>
                    </div>
                    <a href="tel:+916200986380" className="hover-btn-link" title="Call BR30 Trader Support Team" aria-label="Call BR30 Trader Support">
                      📲 Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li id="card-3" className="stack-cards__item">
            <div className="card__content">
              <div className="main-content-area horizontal-layout">
                <div className="card-header">
                  <h2>🌐 BR30 Ecosystem</h2>
                  <p>Explore our powerful platforms designed to help you learn, trade, and grow in the financial markets.</p>
                </div>
                <div className="sub-card-grid-horizontal">
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/br30trader.png" alt="BR30 Trader" />
                    </div>
                    <div className="box-content">
                      <h4>📈 BR30 Trader</h4>
                      <p>Master price action, breakout strategies, and real market psychology.</p>
                    </div>
                    <a href="https://my-frontend-eight-roan.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover-btn-link" title="Visit BR30 Trader Official Trading Education Platform" aria-label="BR30 Trader Official Website">
                      🚀 Start Learning
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/br30kart.png" alt="BR30 Kart" />
                    </div>
                    <div className="box-content">
                      <h4>🛒 BR30 Kart</h4>
                      <p>India’s top trading courses & tools from experienced traders.</p>
                    </div>
                    <a href="https://br-30-kart.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover-btn-link" title="Explore BR30 Kart Trading Courses and Tools" aria-label="BR30 Kart Official Website">
                      💰 Explore Courses
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/Coming-soon.jpg" alt="BR30 Upcoming Project" />
                    </div>
                    <div className="box-content">
                      <h4>⚡ ********</h4>
                      <p>(Coming Soon)</p>
                    </div>
                    <a href="https://br-30-kart.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover-btn-link" title="Upcoming BR30 Project Coming Soon" aria-label="Upcoming BR30 Platform">
                      🔒 Coming Soon
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/br30founder.png" alt="BR30 Founder" />
                    </div>
                    <div className="box-content">
                      <h4>👑 BR30 Founder</h4>
                      <p>Build your trading brand, mindset, and long-term wealth system.</p>
                    </div>
                    <a href="https://br30-com.vercel.app//" target="_blank" rel="noopener noreferrer" className="hover-btn-link" title="Visit BR30 Founder Platform to Build Your Trading Brand" aria-label="BR30 Founder Official Website">
                      🏆 Build Authority
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li id="card-4" className="stack-cards__item">
            <div className="card__content">
              <div className="main-content-area horizontal-layout">
                <div className="card-header">
                  <h2>💻 Premium Web Development Services</h2>
                  <p>We build high-performance, scalable, and modern web applications for traders, brands, and startups.</p>
                </div>
                <div className="sub-card-grid-horizontal">
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/React JS.jpg" alt="Frontend Development" />
                    </div>
                    <div className="box-content">
                      <h4>⚛️ Frontend Development</h4>
                      <p>Modern UI/UX with React.js, responsive design, and smooth user experience.</p>
                    </div>
                    <a href="https://br-30-group-com.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover-btn-link" title="Explore BR30 Frontend Development and UI Design Work" aria-label="BR30 Frontend Development Services">
                      ⚛️ View UI Work
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/Node_JS.png" alt="Backend Development" />
                    </div>
                    <div className="box-content">
                      <h4>🛠 Backend Development</h4>
                      <p>Secure APIs, authentication, database handling with Node.js & scalable architecture.</p>
                    </div>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=br30service.contact@gmail.com&su=Backend%20Development%20Service%20Request&body=Hello%20BR30%20Team,%0A%0AMujhe%20backend%20development%20service%20chahiye.%20Please%20project%20details%20aur%20pricing%20share%20kare...%0A%0AThanks." target="_blank" rel="noopener noreferrer" className="hover-btn-link" title="Hire BR30 Backend Development Services" aria-label="BR30 Backend Development Service">
                      🛠 Hire Backend Dev
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/Python.jpg" alt="Automation and Python Scripts" />
                    </div>
                    <div className="box-content">
                      <h4>🐍 Automation & Scripts</h4>
                      <p>Python automation, data scraping, bots, and smart trading tools.</p>
                    </div>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=br30service.contact@gmail.com&su=Automation%20%26%20Python%20Service%20Request&body=Hello%20BR30%20Team,%0A%0AMujhe%20automation%20%26%20Python%20scripts%20service%20chahiye.%20Please%20details%20share%20kare...%0A%0AThanks." target="_blank" rel="noopener noreferrer" className="hover-btn-link" title="Get Python Automation and Trading Bot Services" aria-label="BR30 Python Automation Services">
                      🐍 Automate Now
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/git-web.jpg" alt="Deployment and Hosting" />
                    </div>
                    <div className="box-content">
                      <h4>🚀 Deployment & Hosting</h4>
                      <p>Fast, secure deployment using GitHub, Vercel, and cloud infrastructure.</p>
                    </div>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=br30service.contact@gmail.com&su=Website%20Deployment%20Service&body=Hello%20BR30%20Team,%0A%0AMujhe%20website%20deployment%20%26%20hosting%20service%20chahiye.%20Please%20guide%20me...%0A%0AThanks." target="_blank" rel="noopener noreferrer" className="hover-btn-link" title="Launch Your Website with BR30 Deployment and Hosting Services" aria-label="BR30 Website Deployment and Hosting Services">
                      🚀 Launch My Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li id="logo-design-card" className="stack-cards__item">
            <div className="card__content">
              <div className="main-content-area horizontal-layout">
                <div className="card-header">
                  <h2>🎨 Custom Logo & Brand Identity</h2>
                  <p>We create unique, memorable, and high-impact visual identities that define your brand's authority.</p>
                </div>
                <div className="sub-card-grid-horizontal">
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/minimal-logo.jpg" alt="Minimalist Logo Design" />
                    </div>
                    <div className="box-content">
                      <h4>✨ Minimalist Design</h4>
                      <p>Clean, modern, and professional logos that focus on simplicity and timeless brand value.</p>
                    </div>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=br30service.contact@gmail.com&su=Custom%20Logo%20Request&body=Hello%20BR30%20Team,%0A%0AMujhe%20ek%20custom%20logo%20chahiye.%0A%0APlease%20mujhe%20pricing%20aur%20details%20share%20karein.%0A%0AThanks." className="hover-btn-link blink-btn" target="_blank" rel="noopener noreferrer" title="Custom Minimalist Logo Design Service - BR30 Kart" aria-label="Custom Minimalist Logo Design Service">
                      ✨ Get Custom Logo
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/mascot-logo.jpg" alt="Mascot and Gaming Logo" />
                    </div>
                    <div className="box-content">
                      <h4>🦊 Mascot & Community</h4>
                      <p>Bold and character-based logos perfect for trading communities, YouTube, and gaming brands.</p>
                    </div>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=br30service.contact@gmail.com&su=Mascot%20Logo%20Design%20Request&body=Hello%20BR30%20Team,%0A%0AMujhe%20ek%20custom%20mascot%20logo%20design%20karwana%20hai.%0A%0APlease%20mujhe%20pricing%20aur%20timeline%20share%20karein.%0A%0AThanks." className="hover-btn-link blink-btn" target="_blank" rel="noopener noreferrer" title="Mascot Logo &amp; Community Branding Service - BR30 Kart" aria-label="Mascot Logo Design Service">
                      🦊 Design My Mascot
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/typography-logo.jpg" alt="Typography Logo Design" />
                    </div>
                    <div className="box-content">
                      <h4>✒️ Premium Typography</h4>
                      <p>Custom lettermarks and luxury text-based logos tailored for high-end corporate identity.</p>
                    </div>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=br30service.contact@gmail.com&su=Typography%20Logo%20Request&body=Hello%20BR30%20Team,%0A%0AMujhe%20typography-based%20logo%20design%20chahiye.%0A%0APlease%20mujhe%20pricing%20aur%20font%20styles%20share%20karein.%0A%0AThanks." className="hover-btn-link blink-btn" target="_blank" rel="noopener noreferrer" title="Premium Typography Logo Design Service - BR30 Kart" aria-label="Typography Logo Design Service">
                      ✒️ View Typography
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/3d-abstract.jpg" alt="3D and Abstract Logo" />
                    </div>
                    <div className="box-content">
                      <h4>💠 3D & Abstract Shapes</h4>
                      <p>Futuristic 3D logos and geometric shapes designed for crypto, tech, and innovative startups.</p>
                    </div>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=br30service.contact@gmail.com&su=3D%20Logo%20Design%20Request&body=Hello%20BR30%20Team,%0A%0AMujhe%203D%20logo%20design%20chahiye.%0A%0APlease%20pricing%20aur%20examples%20share%20karein.%0A%0AThanks." className="hover-btn-link blink-btn" target="_blank" rel="noopener noreferrer" title="3D &amp; Abstract Logo Design Service - BR30 Kart" aria-label="3D Logo Design Service">
                      💠 Get 3D Design
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li id="psychology-card" className="stack-cards__item">
            <div className="card__content">
              <div className="main-content-area horizontal-layout">
                <div className="card-header">
                  <h2>🧠 Trading Psychology</h2>
                  <p>Control emotions, overcome FOMO, and build iron discipline for consistent trading success.</p>
                </div>
                <div className="sub-card-grid-horizontal">
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/FOMO Control.jpg" alt="FOMO Control Trading Strategy" />
                    </div>
                    <div className="box-content">
                      <h4>🚫 FOMO Control</h4>
                      <p>Learn to wait for the perfect setup, not every move.</p>
                    </div>
                    <a href="/fomo-controll" className="hover-btn-link" title="Learn FOMO Control in Trading – Stop Overtrading &amp; Improve Discipline" aria-label="FOMO Control Trading Psychology">
                      🚫 Control FOMO →
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/Trading Discipline.jpg" alt="Trading Discipline Strategy" />
                    </div>
                    <div className="box-content">
                      <h4>🧠 Trading Discipline</h4>
                      <p>Follow rules even when the market tests your patience.</p>
                    </div>
                    <a href="/trading-discipline" className="hover-btn-link" title="Master Trading Discipline – Build Consistency &amp; Follow Strategy Properly" aria-label="Trading Discipline Guide">
                      🧠 Build Discipline →
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/Patience Power.jpg" alt="Patience Power in Trading" />
                    </div>
                    <div className="box-content">
                      <h4>⏳ Patience Power</h4>
                      <p>Master the art of waiting for high-probability setups.</p>
                    </div>
                    <a href="/patience-power" className="hover-btn-link" title="Improve Trading Patience – Wait for High Probability Setups" aria-label="Trading Patience Training">
                      ⏳ Improve Patience →
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/loss-recover.jpg" alt="Loss Recovery Trading Strategy" />
                    </div>
                    <div className="box-content">
                      <h4>📉 Loss Recovery</h4>
                      <p>Handle losses professionally without revenge trading.</p>
                    </div>
                    <a href="/loss-recovery" className="hover-btn-link" title="Smart Loss Recovery Strategy – Avoid Revenge Trading &amp; Recover Safely" aria-label="Loss Recovery Trading Strategy">
                      📉 Recover Smartly →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li id="smc-card" className="stack-cards__item">
            <div className="card__content">
              <div className="main-content-area horizontal-layout">
                <div className="card-header">
                  <h2>🚀 Smart Money Concept</h2>
                  <p>Understand liquidity and institutional moves to trade like a pro.</p>
                </div>
                <div className="sub-card-grid-horizontal">
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/Liquidity Grabs.jpg" alt="Liquidity Grab Trading Strategy Stop Hunt Concept" />
                    </div>
                    <div className="box-content">
                      <h4>💧 Liquidity Grabs</h4>
                      <p>Understand stop hunts and how smart money traps retail traders.</p>
                    </div>
                    <a href="/liquidity-grabs" className="hover-btn-link" title="Learn Liquidity Grab Strategy – Smart Money Stop Hunt Trading Concept" aria-label="Liquidity Grab Trading Strategy">
                      💧 Learn Liquidity →
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/Order Blocks.jpg" alt="Order Block Trading Strategy Institutional Zones Support Resistance" />
                    </div>
                    <div className="box-content">
                      <h4>📦 Order Blocks</h4>
                      <p>Identify institutional buying and selling zones for precise entries.</p>
                    </div>
                    <a href="/order-blocks" className="hover-btn-link" title="Master Order Blocks – Institutional Supply &amp; Demand Trading Zones" aria-label="Order Block Trading Strategy">
                      📦 Trade Order Blocks →
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/BOS &amp; CHoCH.jpg" alt="Market Structure BOS CHoCH Break of Structure Change of Character Trading" />
                    </div>
                    <div className="box-content">
                      <h4>📊 BOS & CHoCH</h4>
                      <p>Read market structure to catch trend continuation and reversals early.</p>
                    </div>
                    <a href="/BOS-CHoCH" className="hover-btn-link" title="Learn BOS &amp; CHoCH – Market Structure Trend &amp; Reversal Strategy" aria-label="Market Structure BOS and CHoCH">
                      📊 Understand Structure →
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/Fair Value Gaps.jpg" alt="Fair Value Gap FVG Trading Strategy Market Imbalance Concept" />
                    </div>
                    <div className="box-content">
                      <h4>⚡ Fair Value Gaps</h4>
                      <p>Trade price imbalances and high-probability retracement zones.</p>
                    </div>
                    <a href="/fair-value-gaps" className="hover-btn-link" title="Fair Value Gaps Trading Strategy – Trade Market Imbalance Zones" aria-label="Fair Value Gap Trading Strategy">
                      ⚡ Trade FVG →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li id="risk-card" className="stack-cards__item">
            <div className="card__content">
              <div className="main-content-area horizontal-layout">
                <div className="card-header">
                  <h2>🛡️ Risk Management & Execution</h2>
                  <p>Master risk, control losses, and execute trades with discipline like institutional traders.</p>
                </div>
                <div className="sub-card-grid-horizontal">
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/Position Sizing.jpg" alt="Position Sizing" />
                    </div>
                    <div className="box-content">
                      <h4>⚖️ Position Sizing</h4>
                      <p>Control your risk per trade to protect capital and survive long-term.</p>
                    </div>
                    <a href="/position-sizing" className="hover-btn-link" title="Position Sizing Strategy – Risk Management for Long Term Trading Success" aria-label="Position Sizing Trading Guide">
                      ⚖️ Learn Position Sizing →
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/Risk-Reward Ratio.jpg" alt="Risk Reward" />
                    </div>
                    <div className="box-content">
                      <h4>🎯 Risk-Reward Ratio</h4>
                      <p>Always maintain a positive risk-to-reward ratio to stay profitable.</p>
                    </div>
                    <a href="/risk-reward-ratio" className="hover-btn-link" title="Risk Reward Ratio Strategy – Improve Profitability with Smart Trade Planning" aria-label="Risk Reward Trading Strategy">
                      🎯 Optimize R:R →
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/Stop Loss Rule.jpg" alt="Stop Loss" />
                    </div>
                    <div className="box-content">
                      <h4>🛑 Stop Loss Discipline</h4>
                      <p>Protect your account by respecting stop loss without emotional interference.</p>
                    </div>
                    <a href="/stop-loss-discipline" className="hover-btn-link" title="Stop Loss Discipline – Protect Capital &amp; Avoid Emotional Trading Losses" aria-label="Stop Loss Trading Strategy">
                      🛑 Protect Capital →
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/Trade Journaling.jpg" alt="Trade Journaling" />
                    </div>
                    <div className="box-content">
                      <h4>📓 Trade Journaling</h4>
                      <p>Record every trade to analyze mistakes and improve your strategy over time.</p>
                    </div>
                    <a href="/trade-journaling" className="hover-btn-link" title="Trade Journaling Guide – Track Trades &amp; Improve Trading Performance" aria-label="Trade Journaling System">
                      📓 Track Performance →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li id="confluence-card" className="stack-cards__item">
            <div className="card__content">
              <div className="main-content-area horizontal-layout">
                <div className="card-header">
                  <h2>⚔️ Confluence & Confirmation</h2>
                  <p>Master the art of combining multiple factors to filter out fake moves and execute high-probability trades.</p>
                </div>
                <div className="sub-card-grid-horizontal">
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/Multi-Timeframe.jpg" alt="Multi-Timeframe Analysis" />
                    </div>
                    <div className="box-content">
                      <h4>⏳ Multi-Timeframe</h4>
                      <p>Align High Timeframe trend with Low Timeframe entries for a massive trading edge.</p>
                    </div>
                    <a href="/multi-timeframe" className="hover-btn-link" title="Multi-Timeframe Trading Strategy – Align Trends for High Probability Trades" aria-label="Multi Timeframe Trading Analysis">
                      ⏳ Align Trends →
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/Kill-Zones.jpg" alt="Trading Session Kill Zones" />
                    </div>
                    <div className="box-content">
                      <h4>🏙️ Session Kill Zones</h4>
                      <p>Identify explosive moves during London and New York session opens and silver bullets.</p>
                    </div>
                    <a href="/kill-zones" className="hover-btn-link" title="Trading Kill Zones Strategy – London &amp; New York Session High Volatility Moves" aria-label="Kill Zones Trading Strategy">
                      🏙️ Master Timing →
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/Entry-Confirmation.jpg" alt="Trade Entry Confirmation" />
                    </div>
                    <div className="box-content">
                      <h4>✅ Entry Confirmation</h4>
                      <p>Don't guess. Wait for BOS or CHoCH inside your POI for a precise and safe entry.</p>
                    </div>
                    <a href="/entry-confirmation" className="hover-btn-link" title="Trade Entry Confirmation Strategy – Use BOS &amp; CHoCH for Precise Entries" aria-label="Entry Confirmation Trading Guide">
                      ✅ Perfect Entry →
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/POI.jpg" alt="Point of Interest Trading" />
                    </div>
                    <div className="box-content">
                      <h4>📍 High Probability POI</h4>
                      <p>Filter out weak zones and focus on Order Blocks that have high volume and liquidity.</p>
                    </div>
                    <a href="/poi-analysis" className="hover-btn-link" title="Point of Interest (POI) Trading Strategy – High Probability Order Block Zones" aria-label="POI Trading Strategy">
                      📍 Find Best Zones →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li id="tools-card" className="stack-cards__item">
            <div className="card__content">
              <div className="main-content-area horizontal-layout">
                <div className="card-header">
                  <h2>🛠️ Trading Ecosystem & Infrastructure</h2>
                  <p>Master the professional tools and platforms used by elite traders to analyze, execute, and automate market strategies.</p>
                </div>
                <div className="sub-card-grid-horizontal">
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/tradingview.jpg" alt="TradingView Analysis" />
                    </div>
                    <div className="box-content">
                      <h4>📈 Advanced Charting</h4>
                      <p>Master TradingView and MT5 setup with customized layouts and institutional data feeds.</p>
                    </div>
                    <a href="/charting-tools" className="hover-btn-link" title="Advanced Trading Charting Setup – TradingView &amp; MT5 Professional Tools Guide" aria-label="Advanced Charting Trading Tools">
                      📈 Setup Charts →
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/brokers.jpg" alt="Dhan Fyers Brokers" />
                    </div>
                    <div className="box-content">
                      <h4>🏦 Premium Brokers</h4>
                      <p>Leverage platforms like Dhan & Fyers for lightning-fast execution and direct chart trading.</p>
                    </div>
                    <a href="/broker-setup" className="hover-btn-link" title="Best Trading Brokers Setup – Dhan &amp; Fyers Fast Execution Platforms Guide" aria-label="Best Brokers Trading Setup">
                      🏦 Best Brokers →
                    </a>
                  </div>
                  <div className="sub-box">
                    <div className="box-image">
                      <img src="/images/indicators.jpg" alt="Multi Indicators Strategy" />
                    </div>
                    <div className="box-content">
                      <h4>🕯️ Multi-Indicator Logic</h4>
                      <p>Filter noise using advanced Volume Profile and custom confirmation scripts without clutter.</p>
                    </div>
                    <a href="/indicator-setup" className="hover-btn-link" title="Multi Indicator Trading Strategy – Volume Profile &amp; Smart Confirmation Tools" aria-label="Trading Indicators Setup Guide">
                      🕯️ Smart Tools →
                    </a>
                  </div>
                  <div className="box-image-special sub-box">
                    <div className="box-image">
                      <img src="/images/news-terminal.jpg" alt="Economic News Terminal" />
                    </div>
                    <div className="box-content">
                      <h4>📅 Market Terminals</h4>
                      <p>Access real-time economic calendars and news terminals to avoid high-volatility traps.</p>
                    </div>
                    <a href="/news-terminals" className="hover-btn-link" title="Economic Calendar &amp; Market News Terminals – Avoid Volatility Traps in Trading" aria-label="Market News Trading Terminal">
                      📅 Stay Informed →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <section className="flip-section" id="highlite">
          <h2>
            Whey Best
            <span className="purple"> BR30 Trader!</span>
          </h2>
          <div className="flip-grid">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3>Web Development</h3>
                </div>
                <div className="flip-card-back">
                  <h3>Web.Development</h3>
                  <ul>
                    <li>Modern & Responsive Design</li>
                    <li>Full-Stack Solutions (MERN/PHP)</li>
                    <li>Performance & SEO Optimization</li>
                    <li>Scalable & Clean Codebase</li>
                  </ul>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mukeshkumarsingh7488@gmail.com" className="service-btn" target="_blank" rel="noopener noreferrer">
                    📧 Email Me
                  </a>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3>Trading Analysis</h3>
                </div>
                <div className="flip-card-back">
                  <h3>Trading Analysis</h3>
                  <ul>
                    <li>Technical Chart Patterns</li>
                    <li>Risk Management Rules</li>
                    <li>Daily Market Insights</li>
                  </ul>
                  <Link to="/trading-analysis" className="service-btn" rel="noopener noreferrer">
                    View Trading Analysis
                  </Link>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3>Education Content</h3>
                </div>
                <div className="flip-card-back">
                  <h3>Education Content</h3>
                  <ul>
                    <li>Easy-to-Learn Tutorials</li>
                    <li>Step-by-Step Roadmaps</li>
                    <li>Free Learning Resources</li>
                  </ul>
                  <Link to="/masterclass" className="service-btn" rel="noopener noreferrer">
                    View Masterclass
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="slider-section" id="team">
          <div className="team-heading">
            <h2 style={{ color: "white", fontSize: "2.5rem" }}>
              Meet Our
              <span className="purple"> Expert Team</span>
            </h2>
            <h3 style={{ color: "#666", fontSize: "1.2rem" }}>Dedicated professionals behind BR30 Trader</h3>
          </div>
          <div className="scroll-container">
            <div className="scroll-track">
              <div className="flip-card up">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="/images/founder-photo.png" alt="Profile" />
                    <div className="name-tag">
                      <h3>Mukesh Raj</h3>
                      <p>Founder & Professional Trader at BR30 Trader</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <p>Professional Trader & Founder of BR30 Trader | Building modern trading systems and digital learning platforms.</p>
                  </div>
                </div>
              </div>
              <div className="flip-card down">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="/images/photo2.jpg" alt="Profile" />
                    <div className="name-tag">
                      <h3>Sunny Singh</h3>
                      <p>Project Manager at BR30 Trader</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <p>Project Manager at BR30 Trader | Managing development workflow and building scalable education systems.</p>
                  </div>
                </div>
              </div>
              <div className="flip-card up">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="/images/photo3.jpg" alt="Profile" />
                    <div className="name-tag">
                      <h3>Pritik Jain</h3>
                      <p>Administrator at BR30 Trader</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <p>Platform Administrator at BR30 Trader | Responsible for managing operations, content control, and overall platform performance.</p>
                  </div>
                </div>
              </div>
              <div className="flip-card down">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="/images/photo5.jpg" alt="Profile" />
                    <div className="name-tag">
                      <h3>Aparna S</h3>
                      <p>Admin Team Lead at BR30 Trader</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <p>Admin Team Lead at BR30 Trader | Managing administrative operations and supporting platform execution.</p>
                  </div>
                </div>
              </div>
              <div className="flip-card up">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="/images/photo6.jpg" alt="Profile" />
                    <div className="name-tag">
                      <h3>Nishant Singh</h3>
                      <p>Support Specialist at BR30 Trader</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <p>Support Specialist at BR30 Trader | Handling user queries and providing seamless customer support experience.</p>
                  </div>
                </div>
              </div>
              <div className="flip-card down">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="/images/photo4.jpg" alt="Profile" />
                    <div className="name-tag">
                      <h3>Puja Sharma</h3>
                      <p>Client Service & Development Coordinator at BR30 Trader</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <p>Client Service & Development Coordinator at BR30 Trader | Managing client requirements and coordinating development team execution.</p>
                  </div>
                </div>
              </div>
              <div className="flip-card up">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="/images/founder-photo.png" alt="Profile" />
                    <div className="name-tag">
                      <h3>Mukesh Raj</h3>
                      <p>Founder & Professional Trader at BR30 Trader</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <p>Professional Trader & Founder of BR30 Trader | Building modern trading systems and digital learning platforms.</p>
                  </div>
                </div>
              </div>
              <div className="flip-card down">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="/images/photo2.jpg" alt="Profile" />
                    <div className="name-tag">
                      <h3>Sunny Singh</h3>
                      <p>Project Manager at BR30 Trader</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <p>Project Manager at BR30 Trader | Managing development workflow and building scalable education systems.</p>
                  </div>
                </div>
              </div>
              <div className="flip-card up">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="/images/photo3.jpg" alt="Profile" />
                    <div className="name-tag">
                      <h3>Pritik Jain</h3>
                      <p>Administrator at BR30 Trader</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <p>Platform Administrator at BR30 Trader | Responsible for managing operations, content control, and overall platform performance.</p>
                  </div>
                </div>
              </div>
              <div className="flip-card down">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="/images/photo5.jpg" alt="Profile" />
                    <div className="name-tag">
                      <h3>Aparna S</h3>
                      <p>Admin Team Lead at BR30 Trader</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <p>Admin Team Lead at BR30 Trader | Managing administrative operations and supporting platform execution.</p>
                  </div>
                </div>
              </div>
              <div className="flip-card up">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="/images/photo6.jpg" alt="Profile" />
                    <div className="name-tag">
                      <h3>Nishant Singh</h3>
                      <p>Support Specialist at BR30 Trader</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <p>Support Specialist at BR30 Trader | Handling user queries and providing seamless customer support experience.</p>
                  </div>
                </div>
              </div>
              <div className="flip-card down">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="/images/chart4.jpg" alt="Profile" />
                    <div className="name-tag">
                      <h3>Puja Sharma</h3>
                      <p>Client Service & Development Coordinator at BR30 Trader</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <p>Client Service & Development Coordinator at BR30 Trader | Managing client requirements and coordinating development team execution.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="skills-section">
          <h2 className="section-title">
            My <span className="purple">Tech & Trading Stack</span>
          </h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>📈 Trading Tools</h3>
              <div className="skill-items">
                <div className="skill-card">
                  <span>📊</span>
                  TradingView
                </div>
                <div className="skill-card">
                  <span>📉</span>
                  Fyers/Dhan
                </div>
                <div className="skill-card">
                  <span>🧠</span>
                  Psychology
                </div>
                <div className="skill-card">
                  <span>🛡️</span>
                  Risk Mgmt
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3>💻 Coding Stack</h3>

              <div className="skill-items">
                <div className="skill-card">
                  <span>⚛️</span>
                  React.js
                </div>

                <div className="skill-card">
                  <span>🟨</span>
                  JavaScript
                </div>

                <div className="skill-card">
                  <span>🚀</span>
                  Node.js
                </div>

                <div className="skill-card">
                  <span>🍃</span>
                  MongoDB
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="rules-section">
          <div className="rules-grid">
            <div className="rule-box">
              <h4>90%</h4>
              <p>Psychology Focus</p>
            </div>
            <div className="rule-box">
              <h4>1:2+</h4>
              <p>Risk Reward</p>
            </div>
            <div className="rule-box">
              <h4>Zero</h4>
              <p>Overtrading</p>
            </div>
          </div>
        </section>
        <section className="testi-section">
          <div className="testi-card">
            <p>"Mukesh's strategy simplified my trading journey. His web skills are equally sharp!"</p>
            <span className="purple">By</span>. Happy Client...
          </div>
        </section>
        <section className="services-section" id="service">
          <div className="section-title">
            <h2>
              My
              <span> Services</span>
            </h2>
            <p>What I offer to my clients</p>
          </div>
          <div className="services-container">
            <div className="service-box">
              <div className="service-icon">📊</div>
              <h3>Premium Trading Course</h3>
              <p>बेसिक से लेकर एडवांस तक ऑप्शन ट्रेडिंग और चार्ट एनालिसिस सीखें। लाइव मार्केट सपोर्ट के साथ।</p>
              <Link to="/learn" className="service-btn" rel="noopener noreferrer">
                Start Learning Now
              </Link>
            </div>
            <div className="service-box">
              <div className="service-icon">📈</div>
              <h3>Custom Trading Indicators</h3>
              <p>TradingView के लिए Custom Indicators, Buy/Sell Signal Systems, Scalping Indicators, Smart Money Concepts (SMC), Automated Strategies और Professional Pine Script Development Services।</p>
              <Link to="/custom-indicator" className="service-btn" rel="noopener noreferrer">
                Explore Indicator Services
              </Link>
            </div>
            <div className="service-box">
              <div className="service-icon">💻</div>
              <h3>Web. Services</h3>
              <p>प्रोफेशनल ट्रेडिंग डैशबोर्ड, ई-कॉमर्स और बिज़नेस वेबसाइट्स का कस्टमाइज्ड डेवलपमेंट।</p>
              <Link to="/web-service" className="service-btn" rel="noopener noreferrer">
                Explore Web Services
              </Link>
            </div>
            <div className="service-box">
              <div className="service-icon">🎨</div>
              <h3>Custom Logo Design</h3>
              <p>हम आपके ब्रांड और बिज़नेस के लिए Professional, Modern और Unique Custom Logo Design बनाते हैं जिससे आपकी Brand Identity और Trust दोनों मजबूत हो।</p>
              <Link to="/custom-logo" className="service-btn" rel="noopener noreferrer">
                Explore Logo Services
              </Link>
            </div>
          </div>
        </section>
        <section className="project-section" id="projects">
          <h2 className="project-title">
            My
            <span className="purple"> Trading Strategy & Web Projects</span>
          </h2>
          <div className="project-container">
            <div className="project-box">
              <h3>Trading Strategy</h3>
              <ul className="project-list">
                <li>Advance Option Buying</li>
                <li>Advance Option Selling</li>
                <li>Advance BTST Mastery</li>
                <li>Crypto & Forex Pro</li>
                <li>One Side Momentum</li>
                <li>Scalping Strategy Pro</li>
              </ul>
            </div>
            <div className="project-box">
              <h3>🚀 Web Projects</h3>
              <ul className="project-list">
                <li>Course Selling Website</li>
                <li>Inventory Management System</li>
                <li>Professional Portfolio Site</li>
                <li>Trading Journal Web App</li>
                <li>E-commerce Dashboard</li>
                <li>Custom Web Deployment</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="browse-section" id="browse">
          <div className="section-header">
            <h2 className="section-title">
              Our
              <span className="purple"> Network</span>
            </h2>
            <div className="header-underline"></div>
            <p className="section-subtitle">
              <span className="purple">BR30 </span>
              Group की सभी वेबसाइट्स और सर्विसेज़ को यहाँ एक्सप्लोर करें। <strong>(Currently Under Development)</strong>
            </p>
          </div>
          <div className="network-grid">
            <div className="network-card">
              <span className="dot-icon"></span>
              <a href="https://br-30-group-com.vercel.app/" target="_blank" rel="noopener noreferrer" className="card-link">
                br30group.com
              </a>
            </div>
            <div className="network-card">
              <span className="dot-icon"></span>
              <a href="https://br-30-kart.vercel.app/" target="_blank" rel="noopener noreferrer" className="card-link">
                br30kart.com
              </a>
            </div>
            <div className="network-card">
              <span className="dot-icon"></span>
              <a href="https://my-frontend-eight-roan.vercel.app/" target="_blank" rel="noopener noreferrer" className="card-link">
                br30Trader.com
              </a>
            </div>
            <div className="network-card">
              <span className="dot-icon"></span>
              <a href="https://br30marketscanner-com-frontade.vercel.app/" target="_blank" rel="noopener noreferrer" className="card-link">
                br30marketscanner.com
              </a>
            </div>
            <div className="network-card">
              <span className="dot-icon"></span>
              <a href="https://br30-algo-terminal-f.vercel.app/" target="_blank" rel="noopener noreferrer" className="card-link">
                br30algoterminal.com
              </a>
            </div>
            <div className="network-card">
              <span className="dot-icon"></span>
              <a href="https://br30algo-com.vercel.app/" target="_blank" rel="noopener noreferrer" className="card-link">
                br30algo.com
              </a>
            </div>
            <div className="network-card">
              <span className="dot-icon"></span>
              <a href="https://br-30-food-os-f.vercel.app/" target="_blank" rel="noopener noreferrer" className="card-link">
                br30foodos.com
              </a>
            </div>
            <div className="network-card">
              <span className="dot-icon"></span>
              <a href="https://br-30-qr-studio-xi.vercel.app/" target="_blank" rel="noopener noreferrer" className="card-link">
                br30qrstudio.com
              </a>
            </div>
            <div className="network-card">
              <span className="dot-icon"></span>
              <a href="#home" className="card-link">
                br30founder.com
              </a>
            </div>
          </div>
        </section>
        <section className="social-section" id="connect">
          <div className="section-header">
            <h2 className="section-title">
              SOCIAL
              <span className="purple"> CONNECT</span>
            </h2>
            <div className="header-underline"></div>
            <p className="section-subtitle">
              Mujhse mere niche diye gaye
              <span> SOCIAL MEDIA </span>
              handles par juden.
            </p>
          </div>
          <div className="social-grid">
            <a href="https://www.youtube.com/@br30traderofficial" className="social-card yt" target="_blank" rel="noopener noreferrer" title="BR30 Trader Official YouTube Channel - Trading Videos &amp; Market Analysis" aria-label="Visit BR30 Trader Official YouTube Channel">
              <div className="social-icon">
                <i className="fa-brands fa-youtube"></i>
              </div>
              <div className="social-info">
                <strong>YouTube</strong>
                <span>Subscribe for Trading Content</span>
              </div>
            </a>
            <a href="https://www.instagram.com/br30traderofficial?igsh=MWN5eHBscWY5bXFvMw==" className="social-card ig" target="_blank" rel="noopener noreferrer" title="Follow BR30 Trader on Instagram for Daily Trading Updates" aria-label="BR30 Trader Instagram Profile">
              <div className="social-icon">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="social-info">
                <strong>Instagram</strong>
                <span>Daily Market Updates</span>
              </div>
            </a>
            <a href="https://x.com/MukeshKuma48159" className="social-card x-twitter" target="_blank" rel="noopener noreferrer" title="Follow Mukesh Raj on X for Live Market Insights" aria-label="Mukesh Raj Twitter X Profile">
              <div className="social-icon">
                <i className="fa-brands fa-x-twitter"></i>
              </div>
              <div className="social-info">
                <strong>Twitter / X</strong>
                <span>Live Market Thoughts</span>
              </div>
            </a>
            <a href="https://www.facebook.com/share/1A7eoRq6Me/" className="social-card fb" target="_blank" rel="noopener noreferrer" title="Join BR30 Trader Facebook Trading Community" aria-label="BR30 Trader Facebook Page">
              <div className="social-icon">
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div className="social-info">
                <strong>Facebook</strong>
                <span>Join our Community</span>
              </div>
            </a>
            <a href="https://t.me/+hBAT4kWo63A4ZWY1" className="social-card telegram" target="_blank" rel="noopener noreferrer" title="Join BR30 Trader Telegram Channel for Trading Signals and Updates" aria-label="BR30 Trader Telegram Channel">
              <div className="social-icon">
                <i className="fa-brands fa-telegram"></i>
              </div>
              <div className="social-info">
                <strong>Telegram</strong>
                <span>Join our Channel</span>
              </div>
            </a>
            <a href="https://chat.whatsapp.com/B4t82SWBcgOIZTeQXp1wDI" className="social-card whatsapp" target="_blank" rel="noopener noreferrer" title="Join BR30 Trader WhatsApp Trading Community" aria-label="BR30 Trader WhatsApp Community">
              <div className="social-icon">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div className="social-info">
                <strong>WhatsApp Community</strong>
                <span>Join our Trading Community</span>
              </div>
            </a>
            <a href="https://www.threads.com/@br30traderofficial" className="social-card threads" target="_blank" rel="noopener noreferrer" title="Follow BR30 Trader on Threads" aria-label="BR30 Trader Threads Profile">
              <div className="social-icon">
                <i className="fa-brands fa-threads"></i>
              </div>
              <div className="social-info">
                <strong>Threads</strong>
                <span>Follow us on Threads</span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/mukesh-raj-b75a65253?utm_source=share_via&amp;utm_content=profile&amp;utm_medium=member_android" className="social-card linkedin" target="_blank" rel="noopener noreferrer" title="Connect with Mukesh Raj on LinkedIn" aria-label="Mukesh Raj LinkedIn Profile">
              <div className="social-icon">
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <div className="social-info">
                <strong>LinkedIn</strong>
                <span>Connect with Us</span>
              </div>
            </a>
            <a href="https://wa.me/916200986380?text=Hello%20BR30%20Support%20Team%2C%20mujhe%20aapki%20services%20ke%20baare%20mein%20jaankari%20chahiye." className="social-card whatsapp" target="_blank" rel="noopener noreferrer" title="Chat with BR30 Trader Support Team on WhatsApp" aria-label="BR30 Trader WhatsApp Support">
              <div className="social-icon">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div className="social-info">
                <strong>WhatsApp</strong>
                <span>Chat with Support Team</span>
              </div>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support.br30trader@gmail.com&su=BR30%20Support%20Inquiry&body=Hello%20BR30%20Support%20Team,%0A%0AMujhe%20aapki%20services%20ke%20baare%20mein%20jaankari%20chahiye." className="social-card gmail" target="_blank" rel="noopener noreferrer" title="Email BR30 Trader Support Team" aria-label="BR30 Trader Support Gmail">
              <div className="social-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="social-info">
                <strong>Support team Gmail</strong>
                <span>Contact us Anytime</span>
              </div>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=br30service.contact@gmail.com&su=BR30%20Client%20Service%20Inquiry&body=Hello%20BR30%20Client%20Service%20Team%2C%0A%0AMujhe%20aapki%20services%20ke%20baare%20mein%20jaankari%20chahiye." className="social-card gmail" target="_blank" rel="noopener noreferrer" title="Contact BR30 Trader Client Service Team" aria-label="BR30 Trader Client Service Gmail">
              <div className="social-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="social-info">
                <strong>Client Service Gmail</strong>
                <span>Contact us Anytime</span>
              </div>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mukeshkumarsingh7488@gmail.com&su=Mukesh%20Raj%20Admin%20Inquiry&body=Hello%20Mukesh%20Raj%2C%0A%0AMujhe%20aapki%20services%20aur%20business%20related%20jaankari%20ke%20liye%20aapse%20connect%20karna%20tha." className="social-card gmail" target="_blank" rel="noopener noreferrer" title="Contact Mukesh Raj Admin Personal Gmail" aria-label="Mukesh Raj Personal Gmail">
              <div className="social-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="social-info">
                <strong>Admin Personal Gmail</strong>
                <span>Contact Mukesh Raj</span>
              </div>
            </a>
          </div>
        </section>
        <section className="about-section" id="about">
          <div className="about-container">
            <div className="about-label">
              <span>👤</span>
              ABOUT ME
              <span>👤</span>
            </div>
            <h2 className="about-intro">
              Hey I'm
              <span className="highlight"> Mukesh Raj</span>, a passionate Trader with a strong focus on the financial markets.
            </h2>
            <div className="about-details">
              <p>
                <strong>Options Trading:</strong> I started trading options in
                <span className="date"> March, 2022</span>, exploring strategies, breakouts, and premium behaviors.
              </p>
              <p>
                <strong>Crypto Trading:</strong> I have been involved in crypto trading since
                <span className="date"> February, 2023</span>, analyzing trends and market patterns.
              </p>
            </div>
            <div className="about-note">
              <p>
                <strong>Note1: </strong>
                My goal is to share knowledge, strategies, and market insights to help others understand trading better.
              </p>
            </div>
            <div className="about-note">
              <p>
                <strong>Note2: </strong>
                Looking for a high-performance website? Contact me for custom Web Development services tailored to your business needs.
              </p>
            </div>
            <div className="about-footer">
              Any Query:
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mukeshkumarsingh7488@gmail.com" className="email-link" target="_blank" rel="noopener noreferrer">
                📧 mukeshkumarsingh7488@gmail.com
              </a>
            </div>
          </div>
        </section>
        <footer className="footer-section" id="connect">
          <div className="footer-container">
            <div className="footer-content">
              <h2 className="footer-title">
                Let's
                <span className="purple"> Connect</span>
              </h2>
              <p className="footer-desc">I'm always open to discussing new projects, trading strategies, or creative ideas.</p>
              <div className="contact-links">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support.br30trader@gmail.com" className="contact-item" target="_blank" rel="noopener noreferrer" title="Contact BR30 Trader Support Team via Gmail" aria-label="BR30 Trader Support Team Gmail">
                  <span className="icon">📧</span>
                  <div className="text">
                    <span>Support Team</span>
                    <strong>support.br30trader@gmail.com</strong>
                  </div>
                </a>
                <a href="https://chat.whatsapp.com/ERgQUcY4M3lGU4GNeqhoRb?mode=gi_t" target="_blank" className="contact-item" rel="noopener noreferrer" title="Join BR30Trader Official WhatsApp Community" aria-label="BR30Trader Official WhatsApp Group">
                  <span className="icon">💬</span>
                  <div className="text">
                    <span>WhatsApp Group</span>
                    <strong>BR30Trader Official</strong>
                  </div>
                </a>
                <a href="https://t.me/+F8mDhdfiGaI1NDY1" target="_blank" className="contact-item" rel="noopener noreferrer" title="Join BR30Trader Official Telegram Group" aria-label="BR30Trader Official Telegram Group">
                  <span className="icon">✈️</span>
                  <div className="text">
                    <span>Telegram Group</span>
                    <strong>BR30Trader Official</strong>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© 2024 Mukesh Raj | Built with Passion</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
