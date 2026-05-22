import React from "react";

export default function BrokerSetup() {
  return (
    <>
      <style>{`body{margin:0;font-family:Arial,sans-serif;background:#020617;color:#fff;}.container{width:90%;max-width:1200px;margin:auto;padding:40px 0;}.card{background:#0f172a;border-radius:16px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.5);}.card-header h2{font-size:32px;margin-bottom:10px;}.card-header p{color:#cbd5f5;margin-bottom:30px;}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}.box{background:#020617;border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,.05);transition:.3s;}.box:hover{transform:translateY(-5px);border-color:#1e40af;box-shadow:0 0 15px rgba(30,64,175,.3);}.box h4{margin-bottom:10px;color:#f59e0b;}.box p{font-size:14px;color:#cbd5f5;}.btn-home{display:inline-block;margin-top:40px;padding:12px 20px;border:2px solid #fff;border-radius:8px;text-decoration:none;color:#fff;transition:.3s;}.btn-home:hover{background:#1e40af;border-color:#1e40af;color:#fff;transform:translateX(-5px);}@media(max-width:768px){.grid{grid-template-columns:1fr;}}`}</style>
      <main className="page page-broker-setup">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h2>🏦 Smart Execution Brokers</h2>
              <p>Your broker is your partner in the market. Choose platforms that offer fast execution, low slippage, and professional charting.</p>
            </div>
            <div className="grid">
              <div className="box">
                <h4>📈 TradingView Direct (Dhan)</h4>
                <p>Connect your Dhan account directly with TradingView. Execute trades without switching tabs for maximum speed.</p>
              </div>
              <div className="box">
                <h4>🖱️ Drag & Drop Execution (Fyers)</h4>
                <p>Modify Stop Loss and Take Profit levels by simply dragging them on the chart. Best for intraday traders.</p>
              </div>
              <div className="box">
                <h4>💸 Zero Brokerage Advantage</h4>
                <p>Understand the impact of brokerage on your PnL. Choose plans that minimize your transaction costs.</p>
              </div>
              <div className="box">
                <h4>⚡ Low Latency Server</h4>
                <p>Trade with brokers having high-speed servers to avoid slippage during high-volatility events like NFP or Expiry.</p>
              </div>
              <div className="box">
                <h4>🛠️ API & Algorithmic Trading</h4>
                <p>Explore brokers that provide free API access to build your own custom trading bots or data dashboards.</p>
              </div>
              <div className="box">
                <h4>🛡️ Account Security (2FA)</h4>
                <p>Enable advanced security features like TOTP and Biometric login to keep your trading capital safe from hackers.</p>
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
