import React from "react";

export default function TradingAnalysis() {
  return (
    <>
      <style>{`:root{--bg-color:#0b0118;--card-bg:#160a2c;--accent-purple:#a020f0;--text-white:#ffffff;--text-dim:#b2bec3;--border-color:rgba(160,32,240,.2);}*{margin:0;padding:0;box-sizing:border-box;font-family:"Inter",sans-serif;}body{background-color:var(--bg-color);color:var(--text-white);line-height:1.6;padding:20px;}.container{max-width:1000px;margin:0 auto;}.btn-home{display:inline-block;padding:14px 40px;background:var(--accent-purple);color:white;text-decoration:none;border-radius:50px;font-weight:bold;transition:all .4s cubic-bezier(.175,.885,.32,1.275);box-shadow:0 5px 15px rgba(160,32,240,.3);border:2px solid transparent;}.btn-home:hover{background:transparent;color:white;border-color:var(--accent-purple);box-shadow:0 0 25px rgba(160,32,240,.6);transform:scale(1.05) translateY(-2px);}.back-btn:hover{color:white;text-shadow:0 0 10px var(--accent-purple);transform:translateX(-5px);transition:.3s ease;}.card:hover{border-color:var(--accent-purple);background:rgba(160,32,240,.12);transform:translateY(-5px);box-shadow:0 10px 20px rgba(0,0,0,.3);}header{margin-bottom:40px;}header h1{font-size:clamp(1.8rem,5vw,2.8rem);margin-bottom:10px;}.purple{color:var(--accent-purple);}header p{color:var(--text-dim);font-size:1.1rem;}.section-box{background:var(--card-bg);border:1px solid var(--border-color);border-radius:20px;padding:clamp(20px,4vw,40px);margin-bottom:35px;}h2{font-size:clamp(1.4rem,3vw,1.8rem);margin-bottom:25px;color:var(--text-white);}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;}.card{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.05);border-radius:15px;padding:25px;transition:.3s;}.card:hover{border-color:var(--accent-purple);transform:translateY(-5px);background:rgba(255,255,255,.06);}.card h3{color:var(--accent-purple);margin-bottom:12px;font-size:1.2rem;}.card p{color:var(--text-dim);font-size:.95rem;}.indicator-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:15px;}.indicator-item{background:rgba(160,32,240,.1);padding:15px;border-radius:12px;border-left:4px solid var(--accent-purple);font-weight:500;color:#efefef;}.badge{display:inline-block;padding:5px 12px;border-radius:6px;font-size:.7rem;font-weight:700;text-transform:uppercase;margin-bottom:15px;color:#fff;}.badge-purple{background:var(--accent-purple);}.badge-cyan{background:#a020f0;color:white;}.badge-red{background:#a020f0;}.btn-home{display:inline-block;padding:14px 35px;background:var(--accent-purple);color:white;text-decoration:none;border-radius:50px;font-weight:bold;transition:.3s;box-shadow:0 5px 15px rgba(160,32,240,.3);}@media(min-width:768px){body{padding:50px;}}`}</style>
      <main className="page page-trading-analysis">
        <div className="container">
          <a href="/" className="back-btn">
            ← Back to Home
          </a>
          <header>
            <h1>
              Trading
              <span className="purple"> Analysis </span>
              Deep Dive 💹
            </h1>
            <p>मार्केट को गहराई से समझने के लिए एक कम्प्लीट गाइड।</p>
          </header>
          <section className="section-box">
            <span className="badge badge-purple">Types of Analysis</span>
            <h2>Market Analysis के प्रकार</h2>
            <div className="grid">
              <div className="card">
                <h3>Fundamental Analysis</h3>
                <p>कंपनी के बिजनेस मॉडल, बैलेंस शीट और मैनेजमेंट का विश्लेषण। यह Long-term इन्वेस्टिंग के लिए बेस्ट है।</p>
              </div>
              <div className="card">
                <h3>Technical Analysis</h3>
                <p>प्राइस चार्ट और ऐतिहासिक डेटा का उपयोग करके भविष्य के मूव्स का अंदाजा लगाना। ट्रेडिंग के लिए सबसे जरूरी।</p>
              </div>
              <div className="card">
                <h3>Sentiment Analysis</h3>
                <p>बाजार के 'डर' (Fear) और 'लालच' (Greed) को समझना। सोशल मीडिया और न्यूज से डेटा लिया जाता है।</p>
              </div>
            </div>
          </section>
          <section className="section-box">
            <span className="badge badge-cyan">Tools & Indicators</span>
            <h2>Top 10 Trading Indicators</h2>
            <div className="indicator-list">
              <div className="indicator-item">1. RSI (Momentum)</div>
              <div className="indicator-item">2. Moving Average (EMA 20/50/200)</div>
              <div className="indicator-item">3. MACD (Trend Reversal)</div>
              <div className="indicator-item">4. Bollinger Bands (Volatility)</div>
              <div className="indicator-item">5. VWAP (Intraday Volume)</div>
              <div className="indicator-item">6. Supertrend (Buy/Sell Signals)</div>
              <div className="indicator-item">7. Fibonacci (Key Levels)</div>
              <div className="indicator-item">8. Stochastic (Overbought)</div>
              <div className="indicator-item">9. ATR (Stop Loss Guide)</div>
              <div className="indicator-item">10. Volume (Strength)</div>
            </div>
          </section>
          <section className="section-box">
            <span className="badge badge-purple">Visual Patterns</span>
            <h2>Candlestick Patterns</h2>
            <div className="grid">
              <div className="card">
                <h3>Single Patterns</h3>
                <p>Hammer, Shooting Star, Inverted Hammer, और Doji। ये तुरंत ट्रेंड पलटने का संकेत देते हैं।</p>
              </div>
              <div className="card">
                <h3>Double Patterns</h3>
                <p>Bullish/Bearish Engulfing और Piercing Line। दो कैंडल्स के मेल से बनने वाले शक्तिशाली संकेत।</p>
              </div>
              <div className="card">
                <h3>Triple Patterns</h3>
                <p>Morning Star और Evening Star। ये ट्रेंड कन्फर्मेशन के लिए सबसे भरोसेमंद होते हैं।</p>
              </div>
            </div>
          </section>
          <section className="section-box">
            <span className="badge badge-red">Success Secret</span>
            <h2>Risk Management & Reward</h2>
            <div className="grid">
              <div className="card" style={{ borderLeft: "4px solid #ff7675" }}>
                <h3>1:2 Ratio Rule</h3>
                <p>अगर आपका नुकसान ₹1000 है, तो प्रॉफिट ₹2000 होना चाहिए। तभी आप प्रॉफिटेबल बनेंगे।</p>
              </div>
              <div className="card" style={{ borderLeft: "4px solid #ff7675" }}>
                <h3>Position Sizing</h3>
                <p>कभी भी एक ट्रेड में अपनी पूरी कैपिटल का 2% से ज्यादा रिस्क न लें।</p>
              </div>
            </div>
          </section>
          <div
            style={{
              textAlign: "center",
              marginTop: "40px",
              paddingBottom: "40px",
            }}
          >
            <a href="/" className="btn-home">
              Back to Home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
