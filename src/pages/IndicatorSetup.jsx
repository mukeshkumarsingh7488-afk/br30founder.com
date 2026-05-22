import React from "react";

export default function IndicatorSetup() {
  return (
    <>
      <style>{`body{margin:0;font-family:Arial,sans-serif;background:#020617;color:#fff;}.container{width:90%;max-width:1200px;margin:auto;padding:40px 0;}.card{background:#0f172a;border-radius:16px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.5);}.card-header h2{font-size:32px;margin-bottom:10px;}.card-header p{color:#cbd5f5;margin-bottom:30px;}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}.box{background:#020617;border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,.05);transition:.3s;}.box:hover{transform:translateY(-5px);border-color:#a855f7;box-shadow:0 0 15px rgba(168,85,247,.2);}.box h4{margin-bottom:10px;color:#a855f7;}.box p{font-size:14px;color:#cbd5f5;}.btn-home{display:inline-block;margin-top:40px;padding:12px 20px;border:2px solid #fff;border-radius:8px;text-decoration:none;color:#fff;transition:.3s;}.btn-home:hover{background:#a855f7;border-color:#a855f7;color:#fff;transform:translateX(-5px);}@media(max-width:768px){.grid{grid-template-columns:1fr;}}`}</style>
      <main className="page page-indicator-setup">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h2>🕯️ Multi-Indicator Logic</h2>
              <p>Indicators should be used for confluence, not as a primary signal. Learn how to filter market noise using smart technical tools.</p>
            </div>
            <div className="grid">
              <div className="box">
                <h4>📊 Volume Profile (Fixed/Visible)</h4>
                <p>Find the "Point of Control" (POC). Identify exactly where institutional buying and selling volume is highest.</p>
              </div>
              <div className="box">
                <h4>📈 Multi-Timeframe EMA</h4>
                <p>Use 200 EMA and 50 EMA to quickly identify the major trend direction without cluttering your lower timeframe charts.</p>
              </div>
              <div className="box">
                <h4>⚡ ADR & Average Range</h4>
                <p>Track Average Daily Range to avoid over-extending targets. Know when the market has exhausted its move for the day.</p>
              </div>
              <div className="box">
                <h4>📉 Relative Strength Index (RSI)</h4>
                <p>Use RSI divergence at POIs to confirm institutional exhaustion before a Change of Character (CHoCH).</p>
              </div>
              <div className="box">
                <h4>🌀 Custom Pine Scripts</h4>
                <p>Introduction to creating simple TradingView scripts that combine multiple rules into one single clean indicator.</p>
              </div>
              <div className="box">
                <h4>🚫 The 3-Indicator Limit</h4>
                <p>Avoid "Analysis Paralysis". Never use more than 3 indicators at once. Keep the price action clear and visible.</p>
              </div>
            </div>
            <a href="/#tools-card" className="btn-home" title="Go back to BR30 Trader homepage">
              ⬅ Back to Home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
