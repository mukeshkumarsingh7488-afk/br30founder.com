import React from "react";

export default function RiskRewardRatio() {
  return (
    <>
      <style>{`body{margin:0;font-family:Arial,sans-serif;background:#020617;color:#fff;}.container{width:90%;max-width:1200px;margin:auto;padding:40px 0;}.card{background:#0f172a;border-radius:16px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.5);}.card-header h2{font-size:32px;margin-bottom:10px;}.card-header p{color:#cbd5f5;margin-bottom:30px;}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}.box{background:#020617;border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,.05);transition:.3s;}.box:hover{transform:translateY(-5px);border-color:#a855f7;}.box h4{margin-bottom:10px;color:#a855f7;}.box p{font-size:14px;color:#cbd5f5;}.btn-home{display:inline-block;margin-top:40px;padding:12px 20px;border:2px solid #fff;border-radius:8px;text-decoration:none;color:#fff;transition:.3s;}.btn-home:hover{background:#fff;color:#000;transform:translateX(-5px);}@media(max-width:768px){.grid{grid-template-columns:1fr;}}`}</style>
      <main className="page page-risk-reward-ratio">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h2>🎯 Risk-Reward Ratio Strategy</h2>
              <p>The secret to long-term profitability is not winning every trade, but winning big and losing small.</p>
            </div>
            <div className="grid">
              <div className="box">
                <h4>💡 What is R:R Ratio?</h4>
                <p>It measures the potential profit of a trade relative to its potential loss. (e.g., 1:3 means risking $1 to make $3).</p>
              </div>
              <div className="box">
                <h4>📈 High RR vs High Win-Rate</h4>
                <p>A 30% win-rate with a 1:4 RR is more profitable than a 70% win-rate with a 1:0.5 RR. Focus on the math.</p>
              </div>
              <div className="box">
                <h4>⚖️ Minimum 1:2 Rule</h4>
                <p>Professional traders rarely take trades with less than a 1:2 ratio. This ensures survival even after multiple losses.</p>
              </div>
              <div className="box">
                <h4>🎯 Target Selection</h4>
                <p>Set targets based on logical market structure (next liquidity zone) rather than random numbers.</p>
              </div>
              <div className="box">
                <h4>🛑 Risk Management Link</h4>
                <p>Your Stop Loss defines your risk. Never move your SL further to "give the trade room"—that ruins your RR.</p>
              </div>
              <div className="box">
                <h4>📊 Consistent Profitability</h4>
                <p>Mastering R:R allows you to stay calm during losing streaks, knowing one good win can cover several losses.</p>
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
