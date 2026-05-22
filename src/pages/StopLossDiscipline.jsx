import React from "react";

export default function StopLossDiscipline() {
  return (
    <>
      <style>{`body{margin:0;font-family:Arial,sans-serif;background:#020617;color:#fff;}.container{width:90%;max-width:1200px;margin:auto;padding:40px 0;}.card{background:#0f172a;border-radius:16px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.5);}.card-header h2{font-size:32px;margin-bottom:10px;}.card-header p{color:#cbd5f5;margin-bottom:30px;}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}.box{background:#020617;border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,.05);transition:.3s;}.box:hover{transform:translateY(-5px);border-color:#22c55e;}.box h4{margin-bottom:10px;color:#22c55e;}.box p{font-size:14px;color:#cbd5f5;}.btn-home{display:inline-block;margin-top:40px;padding:12px 20px;border:2px solid #fff;border-radius:8px;text-decoration:none;color:#fff;transition:.3s;}.btn-home:hover{background:#fff;color:#000;transform:translateX(-5px);}@media(max-width:768px){.grid{grid-template-columns:1fr;}}`}</style>
      <main className="page page-stop-loss-discipline">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h2>🛑 Stop Loss Discipline</h2>
              <p>Protect your trading account by mastering the art of exiting losing trades without emotions.</p>
            </div>
            <div className="grid">
              <div className="box">
                <h4>📌 Why Stop Loss?</h4>
                <p>It is your insurance policy. It prevents a single mistake from blowing your entire trading account.</p>
              </div>
              <div className="box">
                <h4>🚫 No "Mental" Stop Loss</h4>
                <p>Always place a hard stop loss in the system. Mental stops often fail when emotions like hope take over.</p>
              </div>
              <div className="box">
                <h4>📉 Respect the SL</h4>
                <p>Once hit, accept the loss and move on. Moving your SL further away is the biggest trap in trading.</p>
              </div>
              <div className="box">
                <h4>🚀 Set Based on Logic</h4>
                <p>Place SL where your trade idea is invalidated (e.g., below a swing low or above a supply zone), not randomly.</p>
              </div>
              <div className="box">
                <h4>🔄 Trailing Stop Loss</h4>
                <p>Use trailing stops to lock in profits as the market moves in your favor, securing your gains.</p>
              </div>
              <div className="box">
                <h4>🎯 Emotional Stability</h4>
                <p>When you know exactly how much you can lose, you trade with a calm mind and better focus.</p>
              </div>
            </div>
            <a href="/#risk-card" className="btn-home" title="Go back to BR30 Trader homepage">
              ⬅ Back to Home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
