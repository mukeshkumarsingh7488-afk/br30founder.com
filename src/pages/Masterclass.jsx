import React from "react";

export default function Masterclass() {
  return (
    <>
      <style>{`*{margin:0;padding:0;box-sizing:border-box;font-family:"Poppins",sans-serif;}body{background-color:#0f172a;color:#f8fafc;line-height:1.6;}.header{padding:60px 20px;text-align:center;background:radial-gradient(circle at top,#1e293b 0%,#0f172a 100%);}.header h1{font-size:2.5rem;margin-bottom:10px;font-weight:700;}.header p{font-size:1.1rem;color:#94a3b8;}.container{max-width:1000px;margin:20px auto;padding:0 20px;}.purple{color:#a020f0;}.module{background:#1e293b;border-radius:20px;padding:30px;margin-bottom:30px;border:1px solid #334155;transition:.3s ease;}.module:hover{transform:translateY(-5px);border-color:#a020f0;box-shadow:0 10px 30px rgba(0,0,0,.3);}.module h2{color:#ffffff;margin-bottom:20px;display:flex;flex-wrap:wrap;align-items:center;gap:12px;font-size:1.5rem;}.module h2 span{font-size:.7rem;background:#a020f0;color:white;padding:4px 10px;border-radius:8px;text-transform:uppercase;letter-spacing:1px;}.topics-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-top:10px;}.topic-card{background:#0f172a;padding:20px;border-radius:15px;border-left:4px solid #a020f0;transition:.3s;}.topic-card:hover{background:#161e2e;}.topic-card h3{font-size:1.1rem;margin-bottom:8px;color:#a020f0;}.topic-card p{font-size:.9rem;color:#cbd5e1;}.roadmap-footer{text-align:center;margin:60px 0;padding:40px 20px;border-top:1px solid #334155;}.btn-home{display:inline-block;padding:14px 40px;background:#a020f0;color:white;text-decoration:none;border-radius:12px;font-weight:bold;transition:all .4s cubic-bezier(.175,.885,.32,1.275);box-shadow:0 5px 15px rgba(160,32,240,.3);border:2px solid transparent;}.btn-home:hover{background:transparent!important;color:white!important;border-color:#a020f0!important;box-shadow:0 0 25px rgba(160,32,240,.6)!important;transform:scale(1.05) translateY(-2px)!important;}.back-btn{transition:.3s ease;text-decoration:none;display:inline-block;}.back-btn:hover{color:white!important;text-shadow:0 0 10px #a020f0;transform:translateX(-5px);}.card{transition:all .3s ease;}.card:hover{border-color:#a020f0;background:rgba(160,32,240,.12);transform:translateY(-5px);box-shadow:0 10px 20px rgba(0,0,0,.3);}@media(max-width:768px){.header h1{font-size:1.8rem;}.module{padding:20px;}.module h2{font-size:1.2rem;}.btn-home{width:100%;}}`}</style>
      <main className="page page-masterclass">
        <header className="header">
          <h1>
            Stock Market
            <span className="purple">Masterclass</span>
            📈
          </h1>
          <p>From Basics to Advanced Trading Strategies</p>
        </header>
        <div className="container">
          <div className="module">
            <h2>
              <span>Beginner</span>
              Basics of Market
            </h2>
            <div className="topics-grid">
              <div className="topic-card">
                <h3>Candlestick Basics</h3>
                <p>Wicks, Body, Bullish vs Bearish candles aur Hammer/Doji patterns.</p>
              </div>
              <div className="topic-card">
                <h3>Support & Resistance</h3>
                <p>S&R levels draw karna aur Supply-Demand zones pehchanna.</p>
              </div>
            </div>
          </div>
          <div className="module">
            <h2>
              <span>Intermediate</span>
              Price Action & Tools
            </h2>
            <div className="topics-grid">
              <div className="topic-card">
                <h3>Price Action Strategy</h3>
                <p>Trendlines, Chart Patterns (Double Top, Head & Shoulders) aur Breakouts.</p>
              </div>
              <div className="topic-card">
                <h3>Indicators (RSI & EMA)</h3>
                <p>RSI Divergence aur 20/50/200 EMA Cross-over strategies.</p>
              </div>
            </div>
          </div>
          <div className="module">
            <h2>
              <span>Advanced</span>
              Pro Strategies (SMC)
            </h2>
            <div className="topics-grid">
              <div className="topic-card">
                <h3>FVG (Fair Value Gap)</h3>
                <p>Imbalance find karna aur Smart Money gaps ko trade karna.</p>
              </div>
              <div className="topic-card">
                <h3>Order Blocks & Liquidity</h3>
                <p>Institutions kahan enter karte hain aur stop-loss hunting se bachein.</p>
              </div>
              <div className="topic-card">
                <h3>Risk Management</h3>
                <p>Position sizing aur 1:2 / 1:3 Risk-to-Reward ratio rules.</p>
              </div>
            </div>
          </div>
          <div className="roadmap-footer">
            <h3 style={{ marginBottom: "10px" }}>Tyari shuru karein?</h3>
            <p style={{ marginBottom: "30px", color: "#94a3b8" }}>Ye roadmap aapko ek disciplined Trader banne mein madad karega.</p>
            <a href="/" className="btn-home">
              Back to Home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
