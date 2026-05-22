import React from "react";

export default function LossRecovery() {
  return (
    <>
      <style>{`body{margin:0;font-family:Arial,sans-serif;background:#020617;color:#fff;}.container{width:90%;max-width:1200px;margin:auto;padding:40px 0;}.card{background:#0f172a;border-radius:16px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.5);}.card-header h2{font-size:32px;margin-bottom:10px;}.card-header p{color:#cbd5f5;margin-bottom:30px;}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}.box{background:#020617;border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,.05);transition:.3s;}.box:hover{transform:translateY(-5px);border-color:#ef4444;}.box h4{margin-bottom:10px;color:#ef4444;}.box p{font-size:14px;color:#cbd5f5;}.btn-home{display:inline-block;margin-top:40px;padding:12px 20px;border:2px solid #fff;border-radius:8px;text-decoration:none;color:#fff;transition:.3s;}.btn-home:hover{background:#fff;color:#000;transform:translateX(-5px);}@media(max-width:768px){.grid{grid-template-columns:1fr;}}`}</style>
      <main className="page page-loss-recovery">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h2>🔻 Loss Recovery Strategy</h2>
              <p>Recovering losses is not about revenge trading. It’s about control, patience, and smart execution.</p>
            </div>
            <div className="grid">
              <div className="box">
                <h4>🛑 Stop After Big Loss</h4>
                <p>Don’t jump into another trade immediately. Take a break and reset your mind.</p>
              </div>
              <div className="box">
                <h4>🎯 Reduce Position Size</h4>
                <p>Trade smaller after a loss. Focus on consistency, not quick recovery.</p>
              </div>
              <div className="box">
                <h4>🧠 Avoid Revenge Trading</h4>
                <p>Emotional trades increase losses. Stay calm and follow your setup.</p>
              </div>
              <div className="box">
                <h4>📊 Follow High-Probability Setup</h4>
                <p>Only take strong, confirmed trades. No random entries to recover loss.</p>
              </div>
              <div className="box">
                <h4>⚖️ Accept Loss as Cost</h4>
                <p>Loss is part of trading. Accept it instead of fighting the market.</p>
              </div>
              <div className="box">
                <h4>📈 Recover Slowly & Safely</h4>
                <p>Small consistent gains will recover losses faster than risky trades.</p>
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
