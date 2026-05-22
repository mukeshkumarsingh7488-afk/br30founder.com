import { Link } from "react-router-dom";

export default function Customlogo() {
  return (
    <>
      <style>{`*{margin:0;padding:0;box-sizing:border-box;font-family:"Poppins",sans-serif;}body{background:#0f172a;color:#fff;}.logo-page{min-height:100vh;padding:50px 6%;background:linear-gradient(180deg,#0f172a,#020617);}.back-btn{display:inline-block;margin-bottom:30px;color:#22ff88;text-decoration:none;font-weight:700;transition:.3s;}.back-btn:hover{transform:translateX(-6px);color:#fff;}.logo-hero{text-align:center;margin-bottom:50px;}.logo-hero h1{font-size:clamp(2rem,5vw,4rem);color:#22ff88;margin-bottom:15px;}.logo-hero p{max-width:850px;margin:auto;color:#cbd5e1;font-size:1.05rem;line-height:1.8;}.logo-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:24px;max-width:1200px;margin:0 auto 60px;}.logo-card{background:#111827;border:1px solid #263241;border-radius:24px;padding:25px;transition:.35s;box-shadow:0 20px 40px rgba(0,0,0,.25);}.logo-card:hover{transform:translateY(-8px);border-color:#22ff88;box-shadow:0 0 30px rgba(34,255,136,.15);}.logo-icon{font-size:42px;margin-bottom:18px;}.logo-card h3{font-size:1.25rem;margin-bottom:12px;color:#fff;}.logo-card p{color:#9ca3af;line-height:1.6;font-size:.95rem;}.process{max-width:1100px;margin:0 auto 60px;background:#0b111b;border:1px solid #263241;border-radius:28px;padding:35px;}.process h2{text-align:center;color:#22ff88;margin-bottom:25px;font-size:2rem;}.steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:18px;}.step{background:#111827;border-radius:18px;padding:22px;border:1px solid #263241;}.step span{color:#22ff88;font-size:1.5rem;font-weight:800;}.step h4{margin:10px 0;color:#fff;}.step p{color:#9ca3af;font-size:.9rem;line-height:1.6;}.cta{text-align:center;background:linear-gradient(135deg,#16a34a,#22ff88);max-width:900px;margin:auto;padding:40px 25px;border-radius:30px;color:#020617;}.cta h2{font-size:2rem;margin-bottom:12px;}.cta p{font-weight:600;margin-bottom:25px;}.cta a{display:inline-block;background:#020617;color:#fff;text-decoration:none;padding:14px 35px;border-radius:50px;font-weight:800;transition:.3s;}.cta a:hover{transform:scale(1.06);box-shadow:0 10px 25px rgba(0,0,0,.3);}@media(max-width:768px){.logo-page{padding:35px 5%;}.process{padding:25px 18px;}.cta h2{font-size:1.5rem;}}`}</style>

      <main className="logo-page">
        <Link to="/" className="back-btn">
          ← Back To Home
        </Link>

        <section className="logo-hero">
          <h1>🎨 Custom Logo & Brand Identity</h1>
          <p>हम आपके business, trading brand, startup, YouTube channel और digital platform के लिए unique, premium और memorable logo design करते हैं — ताकि आपकी brand identity strong, professional और trusted लगे।</p>
        </section>

        <section className="logo-grid">
          <div className="logo-card">
            <div className="logo-icon">✨</div>
            <h3>Minimalist Logo</h3>
            <p>Clean, modern और professional logo जो long-term brand value create करे।</p>
          </div>
          <div className="logo-card">
            <div className="logo-icon">🦊</div>
            <h3>Mascot Logo</h3>
            <p>Trading community, gaming, YouTube और creator brand के लिए bold mascot logo।</p>
          </div>
          <div className="logo-card">
            <div className="logo-icon">✒️</div>
            <h3>Typography Logo</h3>
            <p>Premium text-based logo, lettermark और luxury brand identity design।</p>
          </div>
          <div className="logo-card">
            <div className="logo-icon">💠</div>
            <h3>3D & Abstract Logo</h3>
            <p>Tech, crypto, startup और futuristic brands के लिए 3D/abstract design।</p>
          </div>
        </section>

        <section className="process">
          <h2>Our Logo Design Process</h2>
          <div className="steps">
            <div className="step">
              <span>01</span>
              <h4>Brand Understanding</h4>
              <p>पहले हम आपके business, audience और brand vision को समझते हैं।</p>
            </div>
            <div className="step">
              <span>02</span>
              <h4>Concept Design</h4>
              <p>आपके brand के हिसाब से multiple creative logo concepts तैयार होते हैं।</p>
            </div>
            <div className="step">
              <span>03</span>
              <h4>Revision & Polish</h4>
              <p>Feedback के बाद logo को clean, premium और final look दिया जाता है।</p>
            </div>
            <div className="step">
              <span>04</span>
              <h4>Final Delivery</h4>
              <p>Final logo PNG, JPG और transparent format में deliver किया जाता है।</p>
            </div>
          </div>
        </section>

        <section className="cta">
          <h2>Ready to Build Your Brand Identity?</h2>
          <p>BR30 team आपके brand के लिए professional custom logo ready कर सकती है।</p>
          <a href="mailto:br30service.contact@gmail.com?subject=Custom Logo Design Request">Get Custom Logo</a>
        </section>
      </main>
    </>
  );
}
