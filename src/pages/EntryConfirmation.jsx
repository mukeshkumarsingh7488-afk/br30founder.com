import React from "react";

export default function EntryConfirmation() {
  return (
    <>
      <style>{`body{margin:0;font-family:Arial,sans-serif;background:#020617;color:#fff;}.container{width:90%;max-width:1200px;margin:auto;padding:40px 0;}.card{background:#0f172a;border-radius:16px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.5);}.card-header h2{font-size:32px;margin-bottom:10px;}.card-header p{color:#cbd5f5;margin-bottom:30px;}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}.box{background:#020617;border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,.05);transition:.3s;}.box:hover{transform:translateY(-5px);border-color:#22c55e;}.box h4{margin-bottom:10px;color:#22c55e;}.box p{font-size:14px;color:#cbd5f5;}.btn-home{display:inline-block;margin-top:40px;padding:12px 20px;border:2px solid #fff;border-radius:8px;text-decoration:none;color:#fff;transition:.3s;}.btn-home:hover{background:#22c55e;border-color:#22c55e;color:#fff;transform:translateX(-5px);}@media(max-width:768px){.grid{grid-template-columns:1fr;}}`}</style>
      <main className="page page-entry-confirmation">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h2>✅ Entry Confirmation Checklist</h2>
              <p>Don't just jump in. Wait for these specific signals to confirm that smart money is ready to move.</p>
            </div>
            <div className="grid">
              <div className="box">
                <h4>📌 POI Mitigation</h4>
                <p>Ensure price has actually touched your Point of Interest (Order Block or FVG) before looking for an entry.</p>
              </div>
              <div className="box">
                <h4>🔄 CHoCH / BOS</h4>
                <p>Wait for a Change of Character (CHoCH) on lower timeframes (1m/5m) to confirm a trend shift.</p>
              </div>
              <div className="box">
                <h4>⚡ Liquidity Sweep</h4>
                <p>High-quality entries often happen after price sweeps retail stop-losses just before the real move.</p>
              </div>
              <div className="box">
                <h4>📊 Displacement</h4>
                <p>Look for strong, energetic candles leaving the zone. Weak moves often lead to fakeouts.</p>
              </div>
              <div className="box">
                <h4>🎯 Optimal Trade Entry (OTE)</h4>
                <p>Use Fibonacci retracement to find entries in the 62%-79% zone for a better risk-reward ratio.</p>
              </div>
              <div className="box">
                <h4>🧠 Discipline Check</h4>
                <p>If the setup doesn't meet all your criteria, skip it. No trade is better than a bad trade.</p>
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
