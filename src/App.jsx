import { Gift, Heart, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import ImageOne from "./assets/Image_1.jpeg";
import ImageTwo from "./assets/Image_2.jpeg";
import ImageThree from "./assets/Image_3.jpeg";
import ImageFour from "./assets/Image_4.jpeg";
import ImageFive from "./assets/Image_5.jpeg";
import ImageSix from "./assets/Image_6.jpeg";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    setShowConfetti(true);

    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, [activeTab]);

  const tabs = [
    { id: "home", label: "Home" },
    { id: "balloons", label: "Balloons" },
    { id: "message", label: "Message" },
  ];

  return (
    <div style={styles.page}>
      {showConfetti && <Confetti recycle={false} numberOfPieces={250} />}

      {/* Glow Background */}
      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      {/* Navbar */}
      <div style={styles.navbar}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            style={{
              ...styles.tabButton,
              ...(activeTab === tab.id ? styles.activeTab : {}),
            }}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={styles.container}>
        {activeTab === "home" && <Home />}
        {activeTab === "balloons" && <Balloons />}
        {activeTab === "message" && <Message />}
      </div>
    </div>
  );
}

/* ---------------- HOME ---------------- */

function Home() {
  return (
    <div style={styles.card}>
      <Sparkles size={42} color="#fff" />

      <h1 style={styles.heading}>Happy Mother's Day 💖</h1>

      <p style={styles.subText}>
        The world becomes beautiful because mothers exist ✨
      </p>

      <div style={styles.imageWrapper}>
        <img src={ImageFive} alt="Mom" style={styles.image} />
      </div>

      <div style={styles.floatingHearts}>
        <Heart fill="#ff4d88" color="#ff4d88" size={28} />
        <Heart fill="#ff85a2" color="#ff85a2" size={20} />
        <Heart fill="#ffc2d1" color="#ffc2d1" size={24} />
      </div>
    </div>
  );
}

/* ---------------- BALLOONS ---------------- */

function Balloons() {
  const [selectedBalloon, setSelectedBalloon] = useState(null);

  const balloons = [
    {
      id: 1,
      color: "linear-gradient(135deg,#ff4d6d,#ff8fa3)",
      emoji: "💖",
      text: "My World",
      image: ImageOne,
      message: "Mummy aap meri duniya ho ❤️",
      subMessage: "Aapke bina sab adhura lagta hai ✨",
    },
    {
      id: 2,
      color: "linear-gradient(135deg,#c77dff,#9d4edd)",
      emoji: "🌸",
      text: "Best Mom",
      image: ImageTwo,
      message: "Aapki smile meri jaan hai 🌸",
      subMessage: "Bas aap haste raho hamesha 💖",
    },
    {
      id: 3,
      color: "linear-gradient(135deg,#38bdf8,#0ea5e9)",
      emoji: "✨",
      text: "My Heart",
      image: ImageThree,
      message: "Sabse pyari meri mummy 🥺",
      subMessage: "Rab se pehle aapka naam aata hai ❤️",
    },
    {
      id: 4,
      color: "linear-gradient(135deg,#ffd60a,#ffb703)",
      emoji: "🥺",
      text: "Forever",
      image: ImageFour,
      message: "Maa ka pyaar sabse pure hota hai ✨",
      subMessage: "Aap meri strength ho mummy 💕",
    },
  ];

  return (
    <>
      <div style={styles.balloonContainer}>
        <h1 style={styles.heading}>Tap The Balloons 🎈</h1>

        <p style={styles.subText}>
          Har balloon me mummy ke liye ek surprise hidden hai 💖
        </p>

        <div style={styles.balloonsArea}>
          {balloons.map((balloon, index) => (
            <div
              key={balloon.id}
              onClick={() => setSelectedBalloon(balloon)}
              style={{
                ...styles.balloon,
                background: balloon.color,
                animationDelay: `${index * 0.4}s`,
              }}
            >
              {/* Shine */}
              <div style={styles.balloonShine}></div>

              {/* Content */}
              <div style={styles.balloonContent}>
                <span style={styles.balloonEmoji}>{balloon.emoji}</span>

                <span style={styles.balloonText}>{balloon.text}</span>
              </div>

              {/* Knot */}
              <div style={styles.balloonKnot}></div>

              {/* String */}
              <div style={styles.balloonString}></div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP */}

      {selectedBalloon && (
        <div
          style={styles.modalOverlay}
          onClick={() => setSelectedBalloon(null)}
        >
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedBalloon.image}
              alt="mom"
              style={styles.modalImage}
            />

            <h2 style={styles.modalTitle}>{selectedBalloon.message}</h2>

            {/* REMOVE THIS */}
            {/* 
      <p style={styles.modalText}>
        {selectedBalloon.subMessage}
      </p> 
      */}

            <button
              style={styles.closeButton}
              onClick={() => setSelectedBalloon(null)}
            >
              Close 💖
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* ---------------- MESSAGE ---------------- */

function Message() {
  return (
    <div style={styles.messageCard}>
      <Gift size={42} color="#fff" />

      <h1 style={styles.heading}>Dear Mummy ❤️</h1>

      <p style={styles.message}>
        Mummy,
        {"\n\n"}
        Shayad main kabhi aapko properly bata nahi paaya ki aap mere liye kya
        ho…
        {"\n\n"}
        Jab bhi life me thak jaata hu, haar jaata hu, ya tootne lagta hu… toh
        sirf ek cheez yaad aati hai — aapka pyaar ❤️
        {"\n\n"}
        Aapne apni khushiyan sacrifice karke meri har khushi poori ki…
        {"\n\n"}
        Agar duniya me saccha pyaar exist karta hai… toh wo sirf maa ka hota hai
        ✨{"\n\n"}
        Main shayad perfect beta nahi hu… par meri duniya ki sabse perfect
        insaan aap ho 💖
        {"\n\n"}
        Thank you mummy… har dua ke liye, har sacrifice ke liye, aur har uss pal
        ke liye jahan aap mere saath khadi rahi.
        {"\n\n"}
        Happy Mother’s Day Mummy 🌸
      </p>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  page: {
    minHeight: "100vh",
    overflow: "hidden",
    background:
      "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #3b0764 100%)",
    position: "relative",
    padding: "20px",
    color: "white",
    fontFamily: "Poppins, sans-serif",
  },

  glow1: {
    position: "absolute",
    width: "350px",
    height: "350px",
    background: "#ff4d88",
    filter: "blur(120px)",
    top: "-120px",
    left: "-120px",
    opacity: 0.35,
  },

  glow2: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "#7b2cbf",
    filter: "blur(120px)",
    bottom: "-100px",
    right: "-100px",
    opacity: 0.4,
  },

  navbar: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    flexWrap: "wrap",
    marginBottom: "30px",
    position: "relative",
    zIndex: 2,
  },

  tabButton: {
    padding: "12px 24px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.08)",
    color: "white",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: 600,
    backdropFilter: "blur(12px)",
    transition: "0.4s ease",
  },

  activeTab: {
    background: "linear-gradient(135deg,#ff4d88,#7b2cbf)",
    transform: "scale(1.05)",
  },

  container: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    zIndex: 2,
  },

  card: {
    width: "100%",
    maxWidth: "720px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "28px",
    padding: "40px 25px",
    textAlign: "center",
    backdropFilter: "blur(18px)",
  },

  heading: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    marginTop: "18px",
    marginBottom: "15px",
    fontWeight: 800,
    background: "linear-gradient(90deg,#fff,#ffb3d1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subText: {
    fontSize: "clamp(14px,3vw,18px)",
    opacity: 0.9,
    marginBottom: "35px",
    lineHeight: "1.7",
  },

  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "25px",
  },

  image: {
    width: "min(70vw,260px)",
    height: "min(70vw,260px)",
    borderRadius: "50%",
    objectFit: "cover",
    border: "5px solid rgba(255,255,255,0.25)",
    boxShadow: "0 20px 50px rgba(255,77,136,0.45)",
  },

  floatingHearts: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },

  balloonContainer: {
    width: "100%",
    textAlign: "center",
  },

  balloonsArea: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "50px",
    marginTop: "70px",
    paddingBottom: "80px",
  },

  balloon: {
    width: "95px",
    height: "120px",
    borderRadius: "50% 50% 45% 45%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    animation: "float 4s ease-in-out infinite",
    boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
    cursor: "pointer",
  },

  balloonShine: {
    position: "absolute",
    top: "18px",
    left: "18px",
    width: "18px",
    height: "35px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.35)",
    transform: "rotate(25deg)",
  },

  balloonKnot: {
    position: "absolute",
    bottom: "-8px",
    width: "18px",
    height: "18px",
    background: "inherit",
    clipPath: "polygon(50% 100%, 0 0, 100% 0)",
  },

  balloonString: {
    position: "absolute",
    bottom: "-70px",
    width: "2px",
    height: "70px",
    background: "rgba(255,255,255,0.7)",
  },

  balloonContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "6px",
    zIndex: 2,
  },

  balloonEmoji: {
    fontSize: "28px",
  },

  balloonText: {
    fontSize: "13px",
    fontWeight: 700,
    color: "white",
    textShadow: "0 3px 10px rgba(0,0,0,0.35)",
  },

  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    padding: "20px",
    backdropFilter: "blur(10px)",
  },

  modal: {
    width: "100%",
    maxWidth: "380px",
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "30px",
    padding: "25px",
    textAlign: "center",
    backdropFilter: "blur(20px)",
  },

  modalImage: {
    width: "100%",
    height: "clamp(280px, 50vh, 420px)",
    objectFit: "cover",
    borderRadius: "22px",
    marginBottom: "20px",
    boxShadow: "0 10px 40px rgba(255,77,136,0.4)",
  },

  modalTitle: {
    fontSize: "24px",
    fontWeight: 700,
    marginBottom: "10px",
  },

  modalText: {
    fontSize: "16px",
    lineHeight: "1.8",
    marginBottom: "22px",
  },

  closeButton: {
    border: "none",
    background: "linear-gradient(135deg,#ff4d88,#7b2cbf)",
    color: "white",
    padding: "12px 24px",
    borderRadius: "999px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: 600,
  },

  messageCard: {
    width: "100%",
    maxWidth: "850px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "28px",
    padding: "35px 22px",
    textAlign: "center",
    backdropFilter: "blur(18px)",
  },

  message: {
    fontSize: "clamp(15px,3vw,20px)",
    lineHeight: "2",
    marginTop: "25px",
    whiteSpace: "pre-line",
    textAlign: "left",
  },
};
