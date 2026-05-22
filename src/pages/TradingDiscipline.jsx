import React from "react";

export default function TradingDiscipline() {
  return (
    <>
      <style>{`body{margin:0;font-family:Arial,sans-serif;background:#020617;color:#fff;}.container{width:90%;max-width:1200px;margin:auto;padding:40px 0;}.card{background:#0f172a;border-radius:16px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.5);}.card-header h2{font-size:32px;margin-bottom:10px;}.card-header p{color:#cbd5f5;margin-bottom:30px;}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}.box{background:#020617;border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,.05);transition:.3s;}.box:hover{transform:translateY(-5px);border-color:#22c55e;}.box h4{margin-bottom:10px;color:#22c55e;}.box p{font-size:14px;color:#cbd5f5;}.btn-home{display:inline-block;margin-top:40px;padding:12px 20px;border:2px solid #fff;border-radius:8px;text-decoration:none;color:#fff;transition:.3s;}.btn-home:hover{background:#fff;color:#000;transform:translateX(-5px);}@media(max-width:768px){.grid{grid-template-columns:1fr;}}`}</style>
      <main className="page page-trading-discipline">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h2>🧠 Discipline Trader System</h2>
              <p>Discipline is the real edge in trading. Build habits, follow rules, and achieve consistent profits.</p>
            </div>
            <div className="grid">
              <div className="box">
                <h4>📅 Follow Daily Routine</h4>
                <p>Fixed trading time, chart analysis, and review process create consistency and control.</p>
              </div>
              <div className="box">
                <h4>📌 Stick to One Strategy</h4>
                <p>Avoid jumping between strategies. Master one setup and build confidence.</p>
              </div>
              <div className="box">
                <h4>🛑 Strict Stop-Loss Rule</h4>
                <p>Never ignore stop-loss. Protecting capital is more important than profit.</p>
              </div>
              <div className="box">
                <h4>📊 Maintain Trading Journal</h4>
                <p>Record every trade. Learn from mistakes and improve your decision-making.</p>
              </div>
              <div className="box">
                <h4>⚖️ Control Overtrading</h4>
                <p>Quality over quantity. Only take high-probability trades.</p>
              </div>
              <div className="box">
                <h4>🧘 Emotional Stability</h4>
                <p>Stay calm after wins and losses. Emotional control defines a disciplined trader.</p>
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
