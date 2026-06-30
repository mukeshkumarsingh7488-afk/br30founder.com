import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const words = ["Founder", "Trader", "Developer", "Entrepreneur"];
  const [i, setI] = useState(0);

  // Typing Animation
  useEffect(() => {
    const timer = setInterval(() => {
      setI((v) => (v + 1) % words.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  // Mouse Scroll / Touch Navigate
  useEffect(() => {
    let locked = false;

    const openPortfolio = () => {
      if (locked) return;
      locked = true;
      navigate("/portfolio");
    };

    const handleWheel = (e) => {
      if (e.deltaY > 60) {
        openPortfolio();
      }
    };

    const handleTouchMove = () => {
      openPortfolio();
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [navigate]);

  // Button Click
  const explore = () => {
    navigate("/portfolio");
  };

  return (
    <>
      <section className="mr-hero">
        <div className="bg one"></div>
        <div className="bg two"></div>

        <div className="content">
          <span className="badge">WELCOME TO</span>

          <h1>
            <span className="g">MUKESH</span>
            <br />
            <span>RAJ</span>
          </h1>

          <h2>{words[i]}</h2>

          <p>Building the future of trading, technology and digital innovation through the BR30 ecosystem.</p>

          <button type="button" onClick={explore}>
            Explore Mukesh Raj Portfolio →
          </button>

          <div className="scroll" onClick={explore} role="button" tabIndex={0} style={{ cursor: "pointer" }}>
            ↓ Scroll to Explore
          </div>
        </div>
      </section>

      <style>{`\
.mr-hero{width:100%;min-height:100vh;margin:0;padding:0;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;background:#050505;color:#fff;isolation:isolate;}
.mr-hero .bg{position:absolute;width:550px;height:550px;border-radius:50%;filter:blur(120px);animation:float 12s ease-in-out infinite;pointer-events:none;}
.mr-hero .one{background:#00ff88;top:-150px;left:-120px;opacity:.16;}
.mr-hero .two{background:#7b3ff2;right:-120px;bottom:-120px;opacity:.18;animation-delay:3s;}
.mr-hero .content{position:relative;z-index:2;width:100%;max-width:900px;padding:0 24px;text-align:center;}
.mr-hero .badge{display:inline-block;color:#00ff88;font-size:13px;font-weight:700;letter-spacing:6px;text-transform:uppercase;margin-bottom:14px;}
.mr-hero h1{margin:0;font-size:clamp(64px,10vw,130px);line-height:.9;font-weight:900;}
.mr-hero .g{background:linear-gradient(90deg,#00ff88,#6e8cff,#7b3ff2);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;color:transparent;}
.mr-hero h2{margin:22px 0 0;color:#00ff88;font-size:clamp(26px,3vw,38px);font-weight:700;min-height:44px;}
.mr-hero p{max-width:700px;margin:24px auto 0;color:#bfbfbf;font-size:18px;line-height:1.8;}
.mr-hero button{margin-top:38px;padding:18px 38px;border:none;border-radius:999px;background:linear-gradient(90deg,#00ff88,#7b3ff2);color:#050505;font-size:16px;font-weight:800;cursor:pointer;transition:.35s ease;box-shadow:0 15px 45px rgba(0,255,136,.18);}
.mr-hero button:hover{transform:translateY(-4px) scale(1.03);box-shadow:0 0 40px rgba(0,255,136,.35);}
.mr-hero .scroll{margin-top:48px;color:#888;font-size:15px;cursor:pointer;user-select:none;animation:bounce 2s infinite;transition:.3s;}
.mr-hero .scroll:hover{color:#00ff88;}
@keyframes bounce{0%,100%{transform:translateY(0);}50%{transform:translateY(10px);}}
@keyframes float{0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(40px,30px) scale(1.1);}}
@media(max-width:768px){.mr-hero .bg{width:380px;height:380px;filter:blur(90px);}.mr-hero h1{font-size:clamp(54px,15vw,90px);}.mr-hero p{font-size:16px;padding:0 10px;}.mr-hero button{padding:16px 30px;font-size:15px;}}
`}</style>
    </>
  );
}
