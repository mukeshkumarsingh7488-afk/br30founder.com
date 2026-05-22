import React from "react";

export default function Learn() {
  return (
    <>
      <style>{`*{margin:0;padding:0;box-sizing:border-box;font-family:"Poppins",sans-serif;}body{background:#0f172a;color:#ffffff;line-height:1.8;}.learn-container{max-width:900px;margin:0 auto;padding:40px 20px;}.back-link{text-decoration:none;color:#a020f0;font-size:14px;font-weight:600;display:inline-block;margin-bottom:30px;transition:.3s;}.back-link:hover{transform:translateX(-5px);opacity:.8;}.learn-header h1{font-size:36px;text-align:center;margin-bottom:10px;font-weight:700;}.learn-header span{color:#a020f0;}.header-line{width:60px;height:4px;background:#a020f0;margin:0 auto 40px;border-radius:10px;box-shadow:0 0 10px rgba(160,32,240,.5);}.info-card{background:#1e293b;padding:40px;border-radius:24px;border:1px solid #334155;box-shadow:0 20px 40px rgba(0,0,0,.4);}.info-card h2{color:#a020f0;margin-bottom:20px;font-size:24px;font-weight:600;}.info-card p{color:#cbd5e1;margin-bottom:25px;font-size:16px;}.highlight-box{background:rgba(160,32,240,.05);padding:30px;border-radius:16px;margin:30px 0;border-left:5px solid #a020f0;}.highlight-box h3{margin-bottom:20px;color:#ffffff;font-size:20px;}.highlight-box ul{list-style:none;}.highlight-box ul li{margin-bottom:12px;position:relative;padding-left:30px;color:#e2e8f0;font-size:15px;}.highlight-box ul li::before{content:"✔";position:absolute;left:0;color:#a020f0;font-weight:bold;}.cta-section{text-align:center;margin-top:40px;}.enroll-btn{text-decoration:none;background:#a020f0;color:white;padding:16px 45px;border-radius:12px;font-weight:600;font-size:18px;transition:.3s ease;display:inline-block;box-shadow:0 10px 20px rgba(160,32,240,.3);border:1px solid #a020f0;}.enroll-btn:hover{background:transparent;color:#a020f0;transform:translateY(-3px);box-shadow:0 15px 30px rgba(160,32,240,.4);}@media(max-width:600px){.learn-container{padding:30px 15px;}.learn-header h1{font-size:26px;}.info-card{padding:25px;}.info-card h2{font-size:20px;}.enroll-btn{width:100%;padding:14px 20px;}}`}</style>
      <main className="page page-learn">
        <div className="learn-container">
          <a href="/index.html" className="back-link">
            ← Back to Home
          </a>
          <header className="learn-header">
            <h1>
              Mastering the Art of
              <span>Trading</span>
            </h1>
            <div className="header-line"></div>
          </header>
          <section className="content-wrapper">
            <div className="info-card">
              <h2>Our Trading Philosophy</h2>
              <p>Trading is not just about charts; it's about mastering your own mind and understanding market mechanics. Our comprehensive program is designed to take you from a beginner to a consistently profitable Trader. We focus on the core pillars of financial success: Price Action, Risk Management, and Trading Psychology.</p>
              <div className="highlight-box">
                <h3>What You Will Master:</h3>
                <ul>
                  <li>Advanced Price Action & Candlestick Patterns.</li>
                  <li>Dynamic Support and Resistance Levels.</li>
                  <li>Risk-to-Reward Ratio (1:2 and 1:3 Setups).</li>
                  <li>Multiple Time Frame Analysis (MTFA).</li>
                  <li>Professional Option Buying and Selling Strategies.</li>
                  <li>Mastering Emotions: Discipline over Greed.</li>
                  <li>Building a Personal Trading Journal & Rulebook.</li>
                </ul>
              </div>
              <p>The financial markets are constantly evolving. That’s why we provide ongoing mentorship and live market analysis to help you adapt. Whether you are looking for a side income or aiming to become a full-time professional Trader, our structured curriculum provides the roadmap you need.</p>
              <div className="cta-section">
                <a href="https://t.me/+hBAT4kWo63A4ZWY1" className="enroll-btn" target="_blank">
                  Start Your Journey Today
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
