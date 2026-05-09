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
    }, 4000);

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

      {/* Background Glow */}
      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      {/* Navbar */}
      <div style={styles.navbar}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              ...styles.tabButton,
              ...(activeTab === tab.id ? styles.activeTab : {}),
            }}
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
      <Sparkles size={45} color="#fff" />

      <h1 style={styles.heading}>Happy Mother's Day 💖</h1>

      <p style={styles.subText}>
        The world becomes beautiful because mothers exist ✨
      </p>

      {/* Replace image URL with your mummy photo */}
      <div style={styles.imageWrapper}>
        <img src={ImageFive} alt="Mom" style={styles.image} />
      </div>

      <div style={styles.floatingHearts}>
        <Heart fill="#ff4d88" color="#ff4d88" size={28} />
        <Heart fill="#ff85a2" color="#ff85a2" size={18} />
        <Heart fill="#ffc2d1" color="#ffc2d1" size={22} />
      </div>
    </div>
  );
}

function Balloons() {
  const [selectedBalloon, setSelectedBalloon] = useState(null);
  const balloons = [
    {
      id: 1,
      color: "#ff4d6d",
      image: ImageOne,
      message: "Mummy aap meri duniya ho ❤️",
      subMessage: "Aapke bina sab adhura lagta hai ✨",
    },
    {
      id: 2,
      color: "#c77dff",
      image: ImageTwo,
      message: "Aapki smile meri jaan hai 🌸",
      subMessage: "Bas aap haste raho hamesha 💖",
    },
    {
      id: 3,
      color: "#38bdf8",
      image: ImageThree,
      message: "Sabse pyari meri mummy 🥺",
      subMessage: "Rab se pehle aapka naam aata hai ❤️",
    },
    {
      id: 4,
      color: "#ffd60a",
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
              ❤️
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

            <p style={styles.modalText}>{selectedBalloon.subMessage}</p>

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
      <Gift size={45} color="#fff" />

      <h1 style={styles.heading}>Dear Mummy ❤️</h1>

      <p style={styles.message}>
        Mummy, <br />
        <br />
        Shayad main kabhi aapko properly bata nahi paaya ki aap mere liye kya
        ho…
        <br />
        <br />
        Jab bhi life me thak jaata hu, haar jaata hu, ya tootne lagta hu… toh
        sirf ek cheez yaad aati hai — aapka pyaar.
        <br />
        <br />
        Aapne apni khushiyan sacrifice karke meri har khushi poori ki… khud
        takleef me reh kar bhi hamesha mujhe hasaaya.
        <br />
        <br />
        Agar duniya me saccha pyaar exist karta hai… toh wo sirf maa ka hota hai
        ❤️
        <br />
        <br />
        Main shayad perfect beta nahi hu… par meri duniya ki sabse perfect
        insaan aap ho.
        <br />
        <br />
        Thank you mummy… har dua ke liye, har sacrifice ke liye, aur har uss pal
        ke liye jahan aap mere saath khadi rahi.
        <br />
        <br />
        Aap meri strength ho… meri duniya ho… meri jaan ho ❤️
        <br />
        <br />
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
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "12px",
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
    boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
  },

  activeTab: {
    background: "linear-gradient(135deg,#ff4d88,#7b2cbf)",
    transform: "scale(1.06)",
  },

  container: {
    width: "100%",
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
    animation: "fadeIn 1s ease",
  },

  heading: {
    fontSize: "clamp(2rem, 5vw, 3.2rem)",
    lineHeight: "1.2",
    marginTop: "18px",
    marginBottom: "15px",
    fontWeight: 800,
    letterSpacing: "-1px",
    background: "linear-gradient(90deg,#fff,#ffb3d1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subText: {
    fontSize: "clamp(14px, 3vw, 18px)",
    opacity: 0.9,
    marginBottom: "28px",
    lineHeight: "1.7",
    padding: "0 8px",
  },

  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "25px",
  },

  image: {
    width: "min(70vw, 260px)",
    height: "min(70vw, 260px)",
    borderRadius: "50%",
    objectFit: "cover",
    border: "5px solid rgba(255,255,255,0.25)",
    boxShadow: "0 20px 50px rgba(255,77,136,0.45)",
    animation: "pulseGlow 3s infinite",
  },

  floatingHearts: {
    display: "flex",
    justifyContent: "center",
    gap: "18px",
    marginTop: "18px",
    flexWrap: "wrap",
  },

  balloonContainer: {
    width: "100%",
    textAlign: "center",
    padding: "10px",
  },

  balloonsArea: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: "18px",
    flexWrap: "wrap",
    marginTop: "40px",
  },

  balloon: {
    width: "75px",
    height: "100px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    color: "white",
    position: "relative",
    animation: "float 4s ease-in-out infinite",
    boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
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
    boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
    animation: "fadeIn 1s ease",
  },

  message: {
    fontSize: "clamp(15px, 3vw, 21px)",
    lineHeight: "2",
    marginTop: "25px",
    color: "#f8fafc",
    textAlign: "left",
    whiteSpace: "pre-line",
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
    animation: "fadeIn 0.5s ease",
    boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
  },

  modalImage: {
    width: "100%",
    height: "280px",
    objectFit: "cover",
    borderRadius: "22px",
    marginBottom: "20px",
    boxShadow: "0 10px 40px rgba(255,77,136,0.4)",
  },

  modalTitle: {
    fontSize: "26px",
    fontWeight: 700,
    lineHeight: "1.4",
    marginBottom: "10px",
    background: "linear-gradient(90deg,#fff,#ffb3d1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  modalText: {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#f1f5f9",
    marginBottom: "22px",
  },

  closeButton: {
    border: "none",
    outline: "none",
    background: "linear-gradient(135deg,#ff4d88,#7b2cbf)",
    color: "white",
    padding: "12px 24px",
    borderRadius: "999px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: 600,
    boxShadow: "0 10px 30px rgba(255,77,136,0.35)",
  },
};
