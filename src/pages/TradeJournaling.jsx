import React from "react";

export default function TradeJournaling() {
  return (
    <>
      <style>{`body{margin:0;font-family:Arial,sans-serif;background:#020617;color:#fff;}.container{width:90%;max-width:1200px;margin:auto;padding:40px 0;}.card{background:#0f172a;border-radius:16px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.5);}.card-header h2{font-size:32px;margin-bottom:10px;}.card-header p{color:#cbd5f5;margin-bottom:30px;}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}.box{background:#020617;border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,.05);transition:.3s;}.box:hover{transform:translateY(-5px);border-color:#f59e0b;}.box h4{margin-bottom:10px;color:#f59e0b;}.box p{font-size:14px;color:#cbd5f5;}.btn-home{display:inline-block;margin-top:40px;padding:12px 20px;border:2px solid #fff;border-radius:8px;text-decoration:none;color:#fff;transition:.3s;}.btn-home:hover{background:#fff;color:#000;transform:translateX(-5px);}@media(max-width:768px){.grid{grid-template-columns:1fr;}}`}</style>
      <main className="page page-trade-journaling">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h2>📓 Trade Journaling Strategy</h2>
              <p>The mirror of your trading performance. Record, review, and refine your strategy for consistent growth.</p>
            </div>
            <div className="grid">
              <div className="box">
                <h4>📌 Why Journaling?</h4>
                <p>It helps you identify your strengths and weaknesses by tracking the data behind every trade you take.</p>
              </div>
              <div className="box">
                <h4>⚡ Record the Setup</h4>
                <p>Note down why you entered the trade (SMC, FVG, or Liquidity). Screenshots of charts are highly recommended.</p>
              </div>
              <div className="box">
                <h4>🧠 Emotional State</h4>
                <p>Write down how you felt during the trade. Were you anxious, greedy, or calm? Psychology is 90% of trading.</p>
              </div>
              <div className="box">
                <h4>📈 Win/Loss Analysis</h4>
                <p>Review your losing trades to find mistakes and your winning trades to see what works best for you.</p>
              </div>
              <div className="box">
                <h4>🎯 Strategy Refining</h4>
                <p>Over time, your journal will tell you which sessions or pairs give you the highest probability of success.</p>
              </div>
              <div className="box">
                <h4>📊 Path to Mastery</h4>
                <p>Professional trading is a business. A journal is your business ledger that leads to long-term discipline.</p>
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
