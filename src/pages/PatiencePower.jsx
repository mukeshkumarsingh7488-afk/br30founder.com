import React from "react";

export default function PatiencePower() {
  return (
    <>
      <style>{`body{margin:0;font-family:Arial,sans-serif;background:#020617;color:#fff;}.container{width:90%;max-width:1200px;margin:auto;padding:40px 0;}.card{background:#0f172a;border-radius:16px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.5);}.card-header h2{font-size:32px;margin-bottom:10px;}.card-header p{color:#cbd5f5;margin-bottom:30px;}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}.box{background:#020617;border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,.05);transition:.3s;}.box:hover{transform:translateY(-5px);border-color:#facc15;}.box h4{margin-bottom:10px;color:#facc15;}.box p{font-size:14px;color:#cbd5f5;}.btn-home{display:inline-block;margin-top:40px;padding:12px 20px;border:2px solid #fff;border-radius:8px;text-decoration:none;color:#fff;transition:.3s;}.btn-home:hover{background:#fff;color:#000;transform:translateX(-5px);}@media(max-width:768px){.grid{grid-template-columns:1fr;}}`}</style>
      <main className="page page-patience-power">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h2>⏳ Patience Power in Trading</h2>
              <p>The market rewards patience. Wait for the right setup, the right moment, and the right execution.</p>
            </div>
            <div className="grid">
              <div className="box">
                <h4>⌛ Wait for Perfect Setup</h4>
                <p>Don’t trade every move. Only enter when your setup is fully confirmed.</p>
              </div>
              <div className="box">
                <h4>🚫 Avoid Overtrading</h4>
                <p>More trades ≠ more profit. Smart traders wait, not chase.</p>
              </div>
              <div className="box">
                <h4>📉 Let Trade Play Out</h4>
                <p>Don’t exit early out of fear. Trust your analysis and give time to your trade.</p>
              </div>
              <div className="box">
                <h4>🎯 Quality Over Quantity</h4>
                <p>One good trade is better than five random trades.</p>
              </div>
              <div className="box">
                <h4>🧠 Control Impatience</h4>
                <p>Impulsive decisions destroy accounts. Discipline + patience = profit.</p>
              </div>
              <div className="box">
                <h4>📊 Trust the Process</h4>
                <p>Consistency comes from following your plan, not forcing trades.</p>
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
