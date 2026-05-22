import React from "react";

export default function PositionSizing() {
  return (
    <>
      <style>{`body{margin:0;font-family:Arial,sans-serif;background:#020617;color:#fff;}.container{width:90%;max-width:1200px;margin:auto;padding:40px 0;}.card{background:#0f172a;border-radius:16px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.5);}.card-header h2{font-size:32px;margin-bottom:10px;}.card-header p{color:#cbd5f5;margin-bottom:30px;}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}.box{background:#020617;border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,.05);transition:.3s;}.box:hover{transform:translateY(-5px);border-color:#38bdf8;}.box h4{margin-bottom:10px;color:#38bdf8;}.box p{font-size:14px;color:#cbd5f5;}.btn-home{display:inline-block;margin-top:40px;padding:12px 20px;border:2px solid #fff;border-radius:8px;text-decoration:none;color:#fff;transition:.3s;}.btn-home:hover{background:#fff;color:#000;transform:translateX(-5px);}@media(max-width:768px){.grid{grid-template-columns:1fr;}}`}</style>
      <main className="page page-position-sizing">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h2>⚖️ Position Sizing Strategy</h2>
              <p>Learn how to calculate your trade size correctly to protect your capital and manage risk like a pro.</p>
            </div>
            <div className="grid">
              <div className="box">
                <h4>📏 What is Position Sizing?</h4>
                <p>It determines how many units/lots you should trade based on your account size and the risk per trade.</p>
              </div>
              <div className="box">
                <h4>🛡️ The 1% Rule</h4>
                <p>Never risk more than 1-2% of your total account balance on a single trade to avoid big drawdowns.</p>
              </div>
              <div className="box">
                <h4>📉 Fixed Fractional Sizing</h4>
                <p>Adjusting your lot size according to the distance of your Stop Loss while keeping the dollar risk constant.</p>
              </div>
              <div className="box">
                <h4>⚙️ Lot Size Calculation</h4>
                <p>Lot Size = (Amount to Risk) / (Stop Loss in Pips * Pip Value). Accuracy here is key to survival.</p>
              </div>
              <div className="box">
                <h4>🚫 Avoid Over-Leveraging</h4>
                <p>High leverage can blow accounts. Position sizing helps you stay in the game even after a series of losses.</p>
              </div>
              <div className="box">
                <h4>📊 Compounding Effect</h4>
                <p>Proper sizing allows your account to grow exponentially as your balance increases over time.</p>
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
