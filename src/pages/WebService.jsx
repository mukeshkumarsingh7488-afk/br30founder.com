import React from "react";

export default function WebService() {
  return (
    <>
      <style>{`:root{--bg-color:#0b0118;--card-bg:#160a2c;--accent-purple:#a020f0;--text-white:#ffffff;--text-dim:#b2bec3;--border-color:rgba(160,32,240,.2);}*{margin:0;padding:0;box-sizing:border-box;font-family:"Poppins",sans-serif;}body{background:var(--bg-color);color:var(--text-white);line-height:1.7;padding:20px;}.container{max-width:900px;margin:0 auto;}.back-link{text-decoration:none;color:var(--accent-purple);font-weight:500;display:inline-block;margin-bottom:25px;transition:.3s ease;}.back-link:hover{color:white;text-shadow:0 0 10px var(--accent-purple);transform:translateX(-5px);}.header{text-align:center;margin-bottom:50px;}.header h1{font-size:clamp(1.8rem,5vw,2.5rem);color:#fff;}.header h1 span{color:var(--accent-purple);}.line{width:60px;height:4px;background:var(--accent-purple);margin:15px auto;border-radius:10px;box-shadow:0 0 10px var(--accent-purple);}.service-card{background:var(--card-bg);padding:clamp(25px,5vw,45px);border-radius:24px;border:1px solid var(--border-color);box-shadow:0 15px 35px rgba(0,0,0,.4);}.service-card h2{color:var(--accent-purple);margin-bottom:20px;font-size:clamp(1.3rem,3vw,1.6rem);}.service-card p{color:var(--text-dim);margin-bottom:25px;font-size:1rem;}.feature-box{background:rgba(160,32,240,.05);padding:25px;border-radius:15px;margin:35px 0;border-left:5px solid var(--accent-purple);border-right:1px solid var(--border-color);border-top:1px solid var(--border-color);border-bottom:1px solid var(--border-color);}.feature-box h3{margin-bottom:15px;font-size:1.1rem;color:var(--text-white);}.feature-box ul{list-style:none;}.feature-box ul li{margin-bottom:12px;padding-left:30px;position:relative;color:#efefef;font-size:.95rem;}.feature-box ul li::before{content:"🚀";position:absolute;left:0;filter:drop-shadow(0 0 5px var(--accent-purple));}.cta-box{text-align:center;margin-top:40px;}.contact-btn{text-decoration:none;background:var(--accent-purple);color:#fff;padding:16px 45px;border-radius:12px;font-weight:700;display:inline-block;transition:all .4s cubic-bezier(.175,.885,.32,1.275);box-shadow:0 10px 20px rgba(160,32,240,.2);border:2px solid transparent;}.contact-btn:hover{background:transparent!important;color:white!important;border-color:var(--accent-purple)!important;box-shadow:0 0 25px rgba(160,32,240,.6)!important;transform:scale(1.05) translateY(-3px)!important;}@media(min-width:768px){body{padding:50px 20px;}}`}</style>
      <main className="page page-web-service">
        <div className="container">
          <a href="/#service" className="back-link">
            ← Back to Home
          </a>
          <header className="header">
            <h1>
              Building Your
              <span> Digital Presence</span>
            </h1>
            <div className="line"></div>
          </header>
          <main className="service-card">
            <h2>Modern Web Solutions</h2>
            <p>In today's digital era, your website is the face of your business. We specialize in creating high-performance, visually stunning, and highly functional websites tailored to your specific needs.</p>
            <div className="feature-box">
              <h3>Our Core Web Expertise:</h3>
              <ul>
                <li>Custom Responsive Design (Desktop, Tablet, Mobile).</li>
                <li>Advanced Trading Dashboards & Admin Panels.</li>
                <li>E-commerce Solutions with Secure Payments.</li>
                <li>SEO Optimized Structure for Google Ranking.</li>
                <li>Blazing Fast Loading Speeds & Performance.</li>
                <li>Modern UI/UX with Smooth Interactivity.</li>
              </ul>
            </div>
            <p>Whether you are a professional Trader or a business owner, we have the right tools to bring your vision to life. Let’s collaborate to build something extraordinary.</p>
            <div className="cta-box">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=br30service.contact@gmail.com&su=Free Quotation Request&body=Hello BR30 Team,%0D%0AI want a free quotation." target="_blank" rel="noopener noreferrer" className="contact-btn">
                Get a Free Quotation
              </a>
            </div>
          </main>
        </div>
      </main>
    </>
  );
}
