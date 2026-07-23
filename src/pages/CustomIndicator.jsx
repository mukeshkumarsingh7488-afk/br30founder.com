import { Link } from "react-router-dom";

export default function CustomIndicator() {
  return (
    <>
      <style>{`*{margin:0;padding:0;box-sizing:border-box;font-family:"Poppins",sans-serif;}body{background:#0f172a;color:#fff;}.indicator-page{min-height:100vh;padding:50px 6%;background:linear-gradient(180deg,#0f172a,#020617);}.back-btn{display:inline-block;margin-bottom:30px;color:#22ff88;text-decoration:none;font-weight:700;transition:.3s;}.back-btn:hover{transform:translateX(-6px);color:#fff;}.indicator-hero{text-align:center;margin-bottom:50px;}.indicator-hero h1{font-size:clamp(2rem,5vw,4rem);color:#22ff88;margin-bottom:15px;}.indicator-hero p{max-width:900px;margin:auto;color:#cbd5e1;font-size:1.05rem;line-height:1.8;}.indicator-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:24px;max-width:1200px;margin:0 auto 60px;}.indicator-card{background:#111827;border:1px solid #263241;border-radius:24px;padding:25px;transition:.35s;box-shadow:0 20px 40px rgba(0,0,0,.25);}.indicator-card:hover{transform:translateY(-8px);border-color:#22ff88;box-shadow:0 0 30px rgba(34,255,136,.15);}.indicator-icon{font-size:42px;margin-bottom:18px;}.indicator-card h3{font-size:1.25rem;margin-bottom:12px;color:#fff;}.indicator-card p{color:#9ca3af;line-height:1.6;font-size:.95rem;}.process{max-width:1100px;margin:0 auto 60px;background:#0b111b;border:1px solid #263241;border-radius:28px;padding:35px;}.process h2{text-align:center;color:#22ff88;margin-bottom:25px;font-size:2rem;}.steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:18px;}.step{background:#111827;border-radius:18px;padding:22px;border:1px solid #263241;}.step span{color:#22ff88;font-size:1.5rem;font-weight:800;}.step h4{margin:10px 0;color:#fff;}.step p{color:#9ca3af;font-size:.9rem;line-height:1.6;}.cta{text-align:center;background:linear-gradient(135deg,#16a34a,#22ff88);max-width:900px;margin:auto;padding:40px 25px;border-radius:30px;color:#020617;}.cta h2{font-size:2rem;margin-bottom:12px;}.cta p{font-weight:600;margin-bottom:25px;}.cta a{display:inline-block;background:#020617;color:#fff;text-decoration:none;padding:14px 35px;border-radius:50px;font-weight:800;transition:.3s;}.cta a:hover{transform:scale(1.06);box-shadow:0 10px 25px rgba(0,0,0,.3);}@media(max-width:768px){.indicator-page{padding:35px 5%;}.process{padding:25px 18px;}.cta h2{font-size:1.5rem;}}`}</style>

      <main className="indicator-page">
        <Link to="/" className="back-btn">
          ← Back To Home
        </Link>

        <section className="indicator-hero">
          <h1>📈 Custom Trading Indicators</h1>
          <p>हम Traders, Investors और Trading Communities के लिए Professional TradingView Custom Indicators, Buy/Sell Signal Systems, Scalping Tools, Smart Money Concepts और Pine Script based Strategies बनाते हैं।</p>
        </section>

        <section className="indicator-grid">
          <div className="indicator-card">
            <div className="indicator-icon">🚀</div>
            <h3>Buy/Sell Signal Indicator</h3>
            <p>आपके trading logic के हिसाब से clean Buy/Sell signals, alerts, stop-loss और target levels के साथ custom indicator।</p>
          </div>

          <div className="indicator-card">
            <div className="indicator-icon">⚡</div>
            <h3>Scalping Indicator</h3>
            <p>1min, 3min, 5min और 15min timeframe के लिए fast scalping setup, trend filter और momentum confirmation।</p>
          </div>

          <div className="indicator-card">
            <div className="indicator-icon">🏦</div>
            <h3>Smart Money Indicator</h3>
            <p>SMC, Liquidity, Order Blocks, Fair Value Gap, BOS, CHoCH और institutional trading concepts based tools।</p>
          </div>

          <div className="indicator-card">
            <div className="indicator-icon">🤖</div>
            <h3>Strategy & Alerts</h3>
            <p>Pine Script strategy, backtesting logic, alert conditions और automation-ready TradingView setup।</p>
          </div>
        </section>

        <section className="process">
          <h2>Our Indicator Development Process</h2>
          <div className="steps">
            <div className="step">
              <span>01</span>
              <h4>Logic Understanding</h4>
              <p>पहले हम आपके trading setup, entry, exit, SL, target और timeframe को समझते हैं।</p>
            </div>

            <div className="step">
              <span>02</span>
              <h4>Pine Script Development</h4>
              <p>आपके rules के हिसाब से TradingView Pine Script indicator या strategy develop की जाती है।</p>
            </div>

            <div className="step">
              <span>03</span>
              <h4>Testing & Improvement</h4>
              <p>Indicator को chart पर test करके signals, alerts और filters को improve किया जाता है।</p>
            </div>

            <div className="step">
              <span>04</span>
              <h4>Final Delivery</h4>
              <p>Final Pine Script code, setup guide और TradingView usage support provide किया जाता है।</p>
            </div>
          </div>
        </section>

        <section className="cta">
          <h2>Need a Custom Indicator for Your Trading Setup?</h2>
          <p>BR30 team आपके trading logic के हिसाब से professional custom indicator ready कर सकती है।</p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=br30service.contact@gmail.com&su=Custom Trading Indicator Request&body=Hello BR30 Team,%0D%0AI want a custom TradingView indicator quotation." target="_blank" rel="noopener noreferrer">
            Get Custom Indicator
          </a>
        </section>
      </main>
    </>
  );
}
