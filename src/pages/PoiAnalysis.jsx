import React from "react";

export default function PoiAnalysis() {
  return (
    <>
      <style>{`body{margin:0;font-family:Arial,sans-serif;background:#020617;color:#fff;}.container{width:90%;max-width:1200px;margin:auto;padding:40px 0;}.card{background:#0f172a;border-radius:16px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.5);}.card-header h2{font-size:32px;margin-bottom:10px;}.card-header p{color:#cbd5f5;margin-bottom:30px;}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}.box{background:#020617;border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,.05);transition:.3s;}.box:hover{transform:translateY(-5px);border-color:#06b6d4;box-shadow:0 0 15px rgba(6,182,212,.2);}.box h4{margin-bottom:10px;color:#06b6d4;}.box p{font-size:14px;color:#cbd5f5;}.btn-home{display:inline-block;margin-top:40px;padding:12px 20px;border:2px solid #fff;border-radius:8px;text-decoration:none;color:#fff;transition:.3s;}.btn-home:hover{background:#06b6d4;border-color:#06b6d4;color:#fff;transform:translateX(-5px);}@media(max-width:768px){.grid{grid-template-columns:1fr;}}`}</style>
      <main className="page page-poi-analysis">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h2>📍 High Probability POI</h2>
              <p>Identifying the Point of Interest (POI) where institutional buyers and sellers are waiting to execute large orders.</p>
            </div>
            <div className="grid">
              <div className="box">
                <h4>📌 Fresh Order Blocks</h4>
                <p>Focus on zones that have not been touched yet. Fresh zones have the highest probability of a strong reaction.</p>
              </div>
              <div className="box">
                <h4>⚡ Imbalance / FVG</h4>
                <p>A high probability POI always has a Fair Value Gap (FVG) or imbalance just before it, acting as a magnet for price.</p>
              </div>
              <div className="box">
                <h4>🛡️ Protected Highs & Lows</h4>
                <p>Strong POIs are often located behind protected market structure levels that institutions want to defend.</p>
              </div>
              <div className="box">
                <h4>📉 Liquidity Clearance</h4>
                <p>Best POIs are formed after a major liquidity sweep. This ensures that retail stops are already out of the way.</p>
              </div>
              <div className="box">
                <h4>🎯 Confluence of Zones</h4>
                <p>Look for zones that align with HTF levels or Fib levels (like 0.705 OTE) for an added layer of confirmation.</p>
              </div>
              <div className="box">
                <h4>🚫 Avoid Filled Zones</h4>
                <p>If a POI has been mitigated (touched) multiple times, it becomes weak. Avoid taking trades from "old" levels.</p>
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
