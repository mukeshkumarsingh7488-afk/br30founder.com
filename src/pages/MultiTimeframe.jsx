import React from "react";

export default function MultiTimeframe() {
  return (
    <>
      <style>{`body{margin:0;font-family:Arial,sans-serif;background:#020617;color:#fff;}.container{width:90%;max-width:1200px;margin:auto;padding:40px 0;}.card{background:#0f172a;border-radius:16px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.5);}.card-header h2{font-size:32px;margin-bottom:10px;}.card-header p{color:#cbd5f5;margin-bottom:30px;}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}.box{background:#020617;border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,.05);transition:.3s;}.box:hover{transform:translateY(-5px);border-color:#ffffff;box-shadow:0 0 15px rgba(255,255,255,.1);}.box h4{margin-bottom:10px;color:#38bdf8;}.box p{font-size:14px;color:#cbd5f5;}.btn-home{display:inline-block;margin-top:40px;padding:12px 20px;border:2px solid #fff;border-radius:8px;text-decoration:none;color:#fff;transition:.3s;}.btn-home:hover{background:#fff;color:#000;transform:translateX(-5px);}@media(max-width:768px){.grid{grid-template-columns:1fr;}}`}</style>
      <main className="page page-multi-timeframe">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h2>⏳ Multi-Timeframe Analysis</h2>
              <p>The secret to high probability trading is aligning the narrative of higher timeframes with the execution of lower timeframes.</p>
            </div>
            <div className="grid">
              <div className="box">
                <h4>🗺️ Top-Down Approach</h4>
                <p>Always start with Daily/Weekly charts to understand the overall market bias before looking for trades.</p>
              </div>
              <div className="box">
                <h4>📈 HTF Structure (Daily)</h4>
                <p>Identify the main direction. If the daily trend is bullish, only look for long setups on lower timeframes.</p>
              </div>
              <div className="box">
                <h4>📍 Point of Interest (4H/1H)</h4>
                <p>Find Order Blocks or Gaps on the 4-Hour or 1-Hour chart within the Daily trend for potential entries.</p>
              </div>
              <div className="box">
                <h4>⚡ LTF Execution (15m/5m)</h4>
                <p>Refine your entry. Use the 15-minute or 5-minute chart to find CHoCH or BOS for a tighter stop-loss.</p>
              </div>
              <div className="box">
                <h4>🌀 Timeframe Fractal Nature</h4>
                <p>Market structure works the same on every timeframe. What happens on Daily eventually happens on 1-minute.</p>
              </div>
              <div className="box">
                <h4>🚫 Avoid Timeframe Mismatch</h4>
                <p>Never trade against the higher timeframe trend. Going against the HTF flow is the fastest way to lose capital.</p>
              </div>
            </div>
            <a href="/#confluence-card" className="btn-home" title="Go back to Confluence section">
              ⬅ Back to Home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
