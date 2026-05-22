import React from "react";

export default function BosChoch() {
  return (
    <>
      <style>{`body{margin:0;font-family:Arial,sans-serif;background:#020617;color:#fff;}.container{width:90%;max-width:1200px;margin:auto;padding:40px 0;}.card{background:#0f172a;border-radius:16px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.5);}.card-header h2{font-size:32px;margin-bottom:10px;}.card-header p{color:#cbd5f5;margin-bottom:30px;}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}.box{background:#020617;border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,.05);transition:.3s;}.box:hover{transform:translateY(-5px);border-color:#22c55e;}.box h4{margin-bottom:10px;color:#22c55e;}.box p{font-size:14px;color:#cbd5f5;}.btn-home{display:inline-block;margin-top:40px;padding:12px 20px;border:2px solid #fff;border-radius:8px;text-decoration:none;color:#fff;transition:.3s;}.btn-home:hover{background:#fff;color:#000;transform:translateX(-5px);}@media(max-width:768px){.grid{grid-template-columns:1fr;}}`}</style>
      <main className="page page-BOS-CHoCH">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h2>📊 Market Structure (BOS & CHoCH)</h2>
              <p>Understand trend direction, identify reversals, and trade with structure using smart money concepts.</p>
            </div>
            <div className="grid">
              <div className="box">
                <h4>📌 What is Market Structure?</h4>
                <p>The sequence of highs and lows that defines trend direction (uptrend, downtrend, sideways).</p>
              </div>
              <div className="box">
                <h4>📈 Higher High & Higher Low</h4>
                <p>Uptrend is formed when price keeps making higher highs and higher lows.</p>
              </div>
              <div className="box">
                <h4>📉 Lower High & Lower Low</h4>
                <p>Downtrend is formed when price keeps making lower highs and lower lows.</p>
              </div>
              <div className="box">
                <h4>🚀 Break of Structure (BOS)</h4>
                <p>When price breaks previous high or low, confirming trend continuation.</p>
              </div>
              <div className="box">
                <h4>🔄 Change of Character (CHoCH)</h4>
                <p>First sign of trend reversal when structure shifts direction.</p>
              </div>
              <div className="box">
                <h4>🎯 Trading with Structure</h4>
                <p>Use BOS for continuation trades and CHoCH for early reversal entries.</p>
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
