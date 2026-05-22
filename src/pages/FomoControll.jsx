import React from "react";

export default function FomoControll() {
  return (
    <>
      <style>{`body{margin:0;font-family:Arial,sans-serif;background:#020617;color:#fff;}.container{width:90%;max-width:1200px;margin:auto;padding:40px 0;}.card{background:#0f172a;border-radius:16px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.5);}.card-header h2{font-size:32px;margin-bottom:10px;}.card-header p{color:#cbd5f5;margin-bottom:30px;}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}.box{background:#020617;border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,.05);transition:.3s;}.box:hover{transform:translateY(-5px);border-color:#38bdf8;}.box h4{margin-bottom:10px;color:#38bdf8;}.box p{font-size:14px;color:#cbd5f5;}.btn-home{display:inline-block;margin-top:40px;padding:12px 20px;border:2px solid #fff;border-radius:8px;text-decoration:none;color:#fff;transition:.3s;}.btn-home:hover{background:#fff;color:#000;transform:translateX(-5px);}@media(max-width:768px){.grid{grid-template-columns:1fr;}}`}</style>
      <main className="page page-fomo-controll">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h2>🚫 FOMO Control System</h2>
              <p>Master your emotions, eliminate impulsive trades, and build discipline for consistent trading success.</p>
            </div>
            <div className="grid">
              <div className="box">
                <h4>⏳ Wait for Confirmation</h4>
                <p>Never enter a trade just because price is moving fast. Always wait for proper breakout and confirmation.</p>
              </div>
              <div className="box">
                <h4>🎯 Pre-defined Setup</h4>
                <p>Trade only your tested setups. If it’s not in your strategy, it’s not your trade.</p>
              </div>
              <div className="box">
                <h4>🧠 Control Emotional Triggers</h4>
                <p>Fear and greed lead to losses. Stay calm and follow your trading plan strictly.</p>
              </div>
              <div className="box">
                <h4>📉 Accept Missed Trades</h4>
                <p>Missing a trade is better than taking a wrong trade. Market gives opportunities daily.</p>
              </div>
              <div className="box">
                <h4>⚖️ Risk First Mindset</h4>
                <p>Focus on protecting capital, not chasing profits. Discipline builds long-term success.</p>
              </div>
              <div className="box">
                <h4>📊 Follow Process, Not Outcome</h4>
                <p>Winning or losing doesn’t matter. Consistency in process is what makes you profitable.</p>
              </div>
            </div>
            <a href="/#psychology-card" className="btn-home" title="Go back to BR30 Trader homepage">
              ⬅ Back to Home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
