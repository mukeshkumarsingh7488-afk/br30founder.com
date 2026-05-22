import React from "react";

export default function KillZones() {
  return (
    <>
      <style>{`body{margin:0;font-family:Arial,sans-serif;background:#020617;color:#fff;}.container{width:90%;max-width:1200px;margin:auto;padding:40px 0;}.card{background:#0f172a;border-radius:16px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.5);}.card-header h2{font-size:32px;margin-bottom:10px;}.card-header p{color:#cbd5f5;margin-bottom:30px;}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;}.box{background:#020617;border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,.05);transition:.3s;}.box:hover{transform:translateY(-5px);border-color:#f59e0b;}.box h4{margin-bottom:10px;color:#f59e0b;}.box p{font-size:14px;color:#cbd5f5;}.btn-home{display:inline-block;margin-top:40px;padding:12px 20px;border:2px solid #fff;border-radius:8px;text-decoration:none;color:#fff;transition:.3s;}.btn-home:hover{background:#f59e0b;border-color:#f59e0b;color:#000;transform:translateX(-5px);}@media(max-width:768px){.grid{grid-template-columns:1fr;}}`}</style>
      <main className="page page-kill-zones">
        <div className="container">
          <div className="card">
            <div className="card-header">
              <h2>🏙️ Session Kill Zones</h2>
              <p>Trading is all about timing. Learn the specific hours when big institutions inject massive liquidity into the market.</p>
            </div>
            <div className="grid">
              <div className="box">
                <h4>🏮 Asia Session</h4>
                <p>Often creates the initial range or "accumulation" of the day. Good for identifying liquidity above/below Asia High-Low.</p>
              </div>
              <div className="box">
                <h4>🇬🇧 London Kill Zone</h4>
                <p>Starts around 12:30 PM (IST). Known for creating the daily high or low through a "Judas Swing" (false move).</p>
              </div>
              <div className="box">
                <h4>🇺🇸 New York Kill Zone</h4>
                <p>Starts around 5:30 PM (IST). High volatility period where big trends continue or major reversals happen.</p>
              </div>
              <div className="box">
                <h4>🏹 Silver Bullet</h4>
                <p>A specific 1-hour window (3-4 PM and 7-8 PM IST) where price often targets a specific FVG or Liquidity zone.</p>
              </div>
              <div className="box">
                <h4>📉 Session Overlap</h4>
                <p>When London and New York sessions are both open—this is the time of maximum volume and trading speed.</p>
              </div>
              <div className="box">
                <h4>⏰ ICT Midnight Open</h4>
                <p>The starting point for the daily price delivery. Understanding price relative to Midnight Open is crucial.</p>
              </div>
            </div>
            <a href="/#confluence-card" className="btn-home" title="Go back to Confluence section">
              ⬅ Back to Home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
