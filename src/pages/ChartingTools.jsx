import React from "react";

export default function ChartingTools() {
  return (
    <>
      <style>{`body{margin:0;font-family:Arial,sans-serif;background:#020617;color:#fff;}.container{width:90%;max-width:1200px;margin:auto;padding:40px 0;}.card{background:#0f172a;border-radius:16px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.5);}.card-header h2{font-size:32px;margin-bottom:10px;}.card-header p{color:#cbd5f5;margin-bottom:30px;}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}.box{background:#020617;border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,.05);transition:.3s;}.box:hover{transform:translateY(-5px);border-color:#0ea5e9;box-shadow:0 0 15px rgba(14,165,233,.2);}.box h4{margin-bottom:10px;color:#0ea5e9;}.box p{font-size:14px;color:#cbd5f5;}.btn-home{display:inline-block;margin-top:40px;padding:12px 20px;border:2px solid #fff;border-radius:8px;text-decoration:none;color:#fff;transition:.3s;}.btn-home:hover{background:#0ea5e9;border-color:#0ea5e9;color:#fff;transform:translateX(-5px);}@media(max-width:768px){.grid{grid-template-columns:1fr;}}`}</style>
      <main className="page page-charting-tools">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h2>📈 Advanced Charting Platforms</h2>
              <p>The foundation of every successful trade is a clean, data-driven chart. Master the setups of TradingView and MT5 like a pro.</p>
            </div>
            <div className="grid">
              <div className="box">
                <h4>🌐 TradingView Mastery</h4>
                <p>The industry standard for charting. Learn to use shortcuts, drawing tools, and multi-chart layouts for better analysis.</p>
              </div>
              <div className="box">
                <h4>🖥️ MetaTrader 5 (MT5)</h4>
                <p>The powerhouse for execution. How to optimize MT5 for fast performance and institutional-grade data accuracy.</p>
              </div>
              <div className="box">
                <h4>🎨 Custom Layouts</h4>
                <p>Organize your workspace. Set up specific templates for SMC, scalping, and swing trading to avoid mental clutter.</p>
              </div>
              <div className="box">
                <h4>🔔 Alert Management</h4>
                <p>Don't stare at charts all day. Set smart price alerts at your POIs and Liquidity zones to trade with a calm mind.</p>
              </div>
              <div className="box">
                <h4>🔍 Data Feed Accuracy</h4>
                <p>Understand the difference between various brokers' feeds and choose the one with the highest volume accuracy.</p>
              </div>
              <div className="box">
                <h4>📊 Paper Trading</h4>
                <p>Test your strategies without risk. Use TradingView's built-in paper trading to master your execution skills first.</p>
              </div>
            </div>
            <a href="/#tools-card" className="btn-home" title="Go back to BR30 Trader homepage">
              ⬅ Back to Home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
