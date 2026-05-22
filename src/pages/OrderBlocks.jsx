import React from "react";

export default function OrderBlocks() {
  return (
    <>
      <style>{`body{margin:0;font-family:Arial,sans-serif;background:#020617;color:#fff;}.container{width:90%;max-width:1200px;margin:auto;padding:40px 0;}.card{background:#0f172a;border-radius:16px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.5);}.card-header h2{font-size:32px;margin-bottom:10px;}.card-header p{color:#cbd5f5;margin-bottom:30px;}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}.box{background:#020617;border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,.05);transition:.3s;}.box:hover{transform:translateY(-5px);border-color:#a855f7;}.box h4{margin-bottom:10px;color:#a855f7;}.box p{font-size:14px;color:#cbd5f5;}.btn-home{display:inline-block;margin-top:40px;padding:12px 20px;border:2px solid #fff;border-radius:8px;text-decoration:none;color:#fff;transition:.3s;}.btn-home:hover{background:#fff;color:#000;transform:translateX(-5px);}@media(max-width:768px){.grid{grid-template-columns:1fr;}}`}</style>
      <main className="page page-order-blocks">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h2>📦 Order Blocks Strategy</h2>
              <p>Identify institutional buying and selling zones to trade with smart money, not against it.</p>
            </div>
            <div className="grid">
              <div className="box">
                <h4>📌 What is Order Block?</h4>
                <p>The last bullish or bearish candle before a strong move, where institutions place large orders.</p>
              </div>
              <div className="box">
                <h4>📈 Bullish Order Block</h4>
                <p>A bearish candle before a strong upward move — acts as support when price returns.</p>
              </div>
              <div className="box">
                <h4>📉 Bearish Order Block</h4>
                <p>A bullish candle before a strong downward move — acts as resistance when price returns.</p>
              </div>
              <div className="box">
                <h4>🎯 High Probability Zones</h4>
                <p>Trade only fresh and untested order blocks for better accuracy.</p>
              </div>
              <div className="box">
                <h4>⚡ Entry Confirmation</h4>
                <p>Combine order blocks with liquidity grab or market structure for confirmation.</p>
              </div>
              <div className="box">
                <h4>🚫 Avoid Weak Zones</h4>
                <p>Ignore order blocks in sideways markets or without strong momentum.</p>
              </div>
            </div>
            <a href="/#smc-card" className="btn-home" title="Go back to BR30 Trader homepage">
              ⬅ Back to Home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
