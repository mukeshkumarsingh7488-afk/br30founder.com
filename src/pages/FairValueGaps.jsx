import React from "react";

export default function FairValueGaps() {
  return (
    <>
      <style>{`body{margin:0;font-family:Arial,sans-serif;background:#020617;color:#fff;}.container{width:90%;max-width:1200px;margin:auto;padding:40px 0;}.card{background:#0f172a;border-radius:16px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.5);}.card-header h2{font-size:32px;margin-bottom:10px;}.card-header p{color:#cbd5f5;margin-bottom:30px;}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}.box{background:#020617;border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,.05);transition:.3s;}.box:hover{transform:translateY(-5px);border-color:#f59e0b;}.box h4{margin-bottom:10px;color:#f59e0b;}.box p{font-size:14px;color:#cbd5f5;}.btn-home{display:inline-block;margin-top:40px;padding:12px 20px;border:2px solid #fff;border-radius:8px;text-decoration:none;color:#fff;transition:.3s;}.btn-home:hover{background:#fff;color:#000;transform:translateX(-5px);}@media(max-width:768px){.grid{grid-template-columns:1fr;}}`}</style>
      <main className="page page-fair-value-gaps">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h2>📊 Fair Value Gaps (FVG)</h2>
              <p>Identify imbalances in price movement and use them for high-probability trade entries.</p>
            </div>
            <div className="grid">
              <div className="box">
                <h4>📌 What is FVG?</h4>
                <p>A gap between candles where price moves quickly, leaving an imbalance in the market.</p>
              </div>
              <div className="box">
                <h4>⚡ Imbalance Concept</h4>
                <p>When buyers or sellers dominate, price leaves gaps that often get filled later.</p>
              </div>
              <div className="box">
                <h4>📈 Bullish FVG</h4>
                <p>Formed during strong upward moves — acts as support when price returns.</p>
              </div>
              <div className="box">
                <h4>📉 Bearish FVG</h4>
                <p>Formed during strong downward moves — acts as resistance when price returns.</p>
              </div>
              <div className="box">
                <h4>🎯 Entry Strategy</h4>
                <p>Wait for price to return into FVG and look for confirmation before entry.</p>
              </div>
              <div className="box">
                <h4>🚫 Avoid Weak FVG</h4>
                <p>Ignore small or messy gaps. Focus on clean, strong imbalance zones.</p>
              </div>
            </div>
            <a href="/#smc-card" className="btn-home" title="Go back to BR30 Trader homepage">
              ⬅ Back to Home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
