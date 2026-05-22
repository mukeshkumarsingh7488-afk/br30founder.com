import React from "react";

export default function LiquidityGrabs() {
  return (
    <>
      <style>{`body{margin:0;font-family:Arial,sans-serif;background:#020617;color:#fff;}.container{width:90%;max-width:1200px;margin:auto;padding:40px 0;}.card{background:#0f172a;border-radius:16px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.5);}.card-header h2{font-size:32px;margin-bottom:10px;}.card-header p{color:#cbd5f5;margin-bottom:30px;}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}.box{background:#020617;border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,.05);transition:.3s;}.box:hover{transform:translateY(-5px);border-color:#38bdf8;}.box h4{margin-bottom:10px;color:#38bdf8;}.box p{font-size:14px;color:#cbd5f5;}.btn-home{display:inline-block;margin-top:40px;padding:12px 20px;border:2px solid #fff;border-radius:8px;text-decoration:none;color:#fff;transition:.3s;}.btn-home:hover{background:#fff;color:#000;transform:translateX(-5px);}@media(max-width:768px){.grid{grid-template-columns:1fr;}}`}</style>
      <main className="page page-liquidity-grabs">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h2>💧 Liquidity Grabs Strategy</h2>
              <p>Understand how smart money hunts liquidity, traps retail traders, and creates real trading opportunities.</p>
            </div>
            <div className="grid">
              <div className="box">
                <h4>🎯 What is Liquidity?</h4>
                <p>Liquidity is where stop-loss orders exist. Market moves toward these zones to fill large orders.</p>
              </div>
              <div className="box">
                <h4>⚡ Liquidity Grab Explained</h4>
                <p>Price breaks a level, triggers stops, and quickly reverses — trapping retail traders.</p>
              </div>
              <div className="box">
                <h4>📉 Stop Hunt Zones</h4>
                <p>Highs & lows, equal highs/lows, and trendline areas are major liquidity zones.</p>
              </div>
              <div className="box">
                <h4>🧠 Smart Money Concept</h4>
                <p>Institutions create fake moves to collect liquidity before the real move begins.</p>
              </div>
              <div className="box">
                <h4>🚫 Avoid Fake Breakouts</h4>
                <p>Don’t chase breakouts. Wait for confirmation after liquidity sweep.</p>
              </div>
              <div className="box">
                <h4>📊 Entry After Grab</h4>
                <p>Enter only after rejection and confirmation of reversal.</p>
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
