import React from "react";

export default function NewsTerminals() {
  return (
    <>
      <style>{`body{margin:0;font-family:Arial,sans-serif;background:#020617;color:#fff;}.container{width:90%;max-width:1200px;margin:auto;padding:40px 0;}.card{background:#0f172a;border-radius:16px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.5);}.card-header h2{font-size:32px;margin-bottom:10px;}.card-header p{color:#cbd5f5;margin-bottom:30px;}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}.box{background:#020617;border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,.05);transition:.3s;}.box:hover{transform:translateY(-5px);border-color:#ef4444;box-shadow:0 0 15px rgba(239,68,68,.2);}.box h4{margin-bottom:10px;color:#ef4444;}.box p{font-size:14px;color:#cbd5f5;}.btn-home{display:inline-block;margin-top:40px;padding:12px 20px;border:2px solid #fff;border-radius:8px;text-decoration:none;color:#fff;transition:.3s;}.btn-home:hover{background:#ef4444;border-color:#ef4444;color:#fff;transform:translateX(-5px);}@media(max-width:768px){.grid{grid-template-columns:1fr;}}`}</style>
      <main className="page page-news-terminals">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h2>📅 Market Terminals & Global News</h2>
              <p>Stay ahead of the curve. Access real-time global economic data and institutional news terminals to avoid high-volatility traps.</p>
            </div>
            <div className="grid">
              <div className="box">
                <h4>📊 Moneycontrol Pro</h4>
                <p>The powerhouse for Indian markets. Track real-time bulk deals, expert technical ratings, and sharpest opinions on Sensex/Nifty stocks.</p>
              </div>
              <div className="box">
                <h4>🌎 Forex Factory Calendar</h4>
                <p>The gold standard for global macro news. Focus on "Red Folder" events like NFP, CPI, and FOMC meetings for high volatility.</p>
              </div>
              <div className="box">
                <h4>📈 Investing.com Terminal</h4>
                <p>Great for tracking global indices and commodity prices in real-time. Use their advanced economic calendar for secondary data.</p>
              </div>
              <div className="box">
                <h4>⚡ CNBC Awaaz / TV18</h4>
                <p>Essential for tracking management interviews and corporate announcements during the Indian trading session.</p>
              </div>
              <div className="box">
                <h4>🌀 Twitter (X) - FinTwit</h4>
                <p>Follow top traders and institutional news handles for the fastest "unfiltered" updates before they hit mainstream media.</p>
              </div>
              <div className="box">
                <h4>🚫 News Trading Trap</h4>
                <p>Don't trade the news itself; trade the market's reaction to it. High-impact news is a magnet for institutional liquidity sweeps.</p>
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
