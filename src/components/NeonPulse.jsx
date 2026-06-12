import { useState, useEffect, useRef } from "react";

// ─────────────────────────────────────────────
// NeonPulse — composant React autonome
// Usage : <NeonPulse>Mon texte</NeonPulse>
// ─────────────────────────────────────────────

const PRESETS = {
  cyan:   { color: "#00f5ff", textColor: "#00f5ff" },
  purple: { color: "#bf5af2", textColor: "#d580ff" },
  green:  { color: "#30d158", textColor: "#30d158" },
  pink:   { color: "#ff375f", textColor: "#ff6b8a" },
  gold:   { color: "#ffd60a", textColor: "#ffd60a" },
  white:  { color: "#ffffff", textColor: "#ffffff" },
};

/**
 * NeonPulse
 *
 * @param {React.ReactNode} children   — Texte ou contenu à afficher
 * @param {"cyan"|"purple"|"green"|"pink"|"gold"|"white"} preset — Couleur prédéfinie
 * @param {string}  color      — Couleur custom (hex), override le preset
 * @param {string}  textColor  — Couleur du texte si différente du glow
 * @param {number}  duration   — Durée du cycle en ms (défaut : 2000)
 * @param {number}  minGlow    — Intensité minimale du glow 0-1 (défaut : 0.3)
 * @param {number}  maxGlow    — Intensité maximale du glow 0-1 (défaut : 1.0)
 * @param {string}  fontSize   — Taille du texte (CSS, défaut : "3rem")
 * @param {string}  fontWeight — Graisse (défaut : "700")
 * @param {string}  fontFamily — Police (défaut : "inherit")
 * @param {string}  letterSpacing — Espacement (défaut : "0.08em")
 * @param {boolean} flicker    — Active l'effet de scintillement aléatoire
 * @param {boolean} paused     — Met l'animation en pause
 * @param {string}  className  — Classes CSS additionnelles sur le conteneur
 * @param {object}  style      — Styles inline additionnels
 */
export function NeonPulse({
  children = "NEON",
  preset = "cyan",
  color,
  textColor,
  duration = 2000,
  minGlow = 0.3,
  maxGlow = 1.0,
  fontSize = "3rem",
  fontWeight = "700",
  fontFamily = "inherit",
  letterSpacing = "0.08em",
  flicker = false,
  paused = false,
  className = "",
  style = {},
}) {
  const resolvedColor = color ?? PRESETS[preset]?.color ?? "#00f5ff";
  const resolvedText  = textColor ?? PRESETS[preset]?.textColor ?? resolvedColor;

  const [intensity, setIntensity] = useState(maxGlow);
  const rafRef  = useRef(null);
  const startRef = useRef(null);
  const flickerTimeout = useRef(null);

  // Respect prefers-reduced-motion
  const prefersReduced =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  useEffect(() => {
    if (paused || prefersReduced) {
      setIntensity(maxGlow);
      return;
    }

    // Pulse principal via rAF (+ fluide que CSS pour un contrôle JS)
    function pulse(ts) {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const t = (elapsed % duration) / duration; // 0 → 1, en boucle

      // Sine wave entre minGlow et maxGlow
      const sine = Math.sin(t * Math.PI * 2);
      const mapped = minGlow + ((sine + 1) / 2) * (maxGlow - minGlow);
      setIntensity(mapped);

      rafRef.current = requestAnimationFrame(pulse);
    }

    rafRef.current = requestAnimationFrame(pulse);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [duration, minGlow, maxGlow, paused, prefersReduced]);

  // Flicker : scintillements aléatoires superposés
  const [flickerVal, setFlickerVal] = useState(1);
  useEffect(() => {
    if (!flicker || paused || prefersReduced) { setFlickerVal(1); return; }

    function scheduleFlicker() {
      const delay = Math.random() * 4000 + 500;
      flickerTimeout.current = setTimeout(() => {
        setFlickerVal(0.2);
        setTimeout(() => {
          setFlickerVal(1);
          setTimeout(() => {
            setFlickerVal(0.5);
            setTimeout(() => { setFlickerVal(1); scheduleFlicker(); }, 60);
          }, 80);
        }, 60);
      }, delay);
    }

    scheduleFlicker();
    return () => clearTimeout(flickerTimeout.current);
  }, [flicker, paused, prefersReduced]);

  const glow = intensity * flickerVal;

  // Construction du text-shadow multicouche
  const buildShadow = (g) => `
    0 0 ${4  * g}px ${resolvedColor},
    0 0 ${12 * g}px ${resolvedColor},
    0 0 ${28 * g}px ${resolvedColor},
    0 0 ${55 * g}px ${resolvedColor}80
  `;

  const textStyle = {
    color: resolvedText,
    fontSize,
    fontWeight,
    fontFamily,
    letterSpacing,
    textShadow: prefersReduced ? "none" : buildShadow(glow),
    opacity: prefersReduced ? 1 : 0.6 + 0.4 * glow,
    transition: prefersReduced ? "none" : undefined,
    display: "inline-block",
    lineHeight: 1.2,
    userSelect: "none",
    ...style,
  };

  return (
    <span className={`neon-pulse ${className}`} style={textStyle}>
      {children}
    </span>
  );
}

// ─────────────────────────────────────────────
// DÉMO interactive (à supprimer dans ton projet)
// ─────────────────────────────────────────────
export default function App() {
  const [preset, setPreset]   = useState("cyan");
  const [duration, setDuration] = useState(2000);
  const [flicker, setFlicker] = useState(false);
  const [paused, setPaused]   = useState(false);
  const [text, setText]       = useState("NEON PULSE");
  const [fontSize, setFontSize] = useState(52);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#07070f",
      color: "#dde0f0",
      fontFamily: "'Inter', system-ui, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "48px 20px",
      gap: "40px",
    }}>

      {/* Titre */}
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#5a5a80", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          NeonPulse Component
        </h1>
      </div>

      {/* Démo principale */}
      <div style={{
        width: "100%", maxWidth: 700,
        background: "#0e0e1a",
        border: "1px solid #1c1c30",
        borderRadius: 20,
        padding: "60px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 180,
      }}>
        <NeonPulse
          preset={preset}
          duration={duration}
          flicker={flicker}
          paused={paused}
          fontSize={`${fontSize}px`}
        >
          {text}
        </NeonPulse>
      </div>

      {/* Controls */}
      <div style={{
        width: "100%", maxWidth: 700,
        background: "#0e0e1a",
        border: "1px solid #1c1c30",
        borderRadius: 16,
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}>

        {/* Texte */}
        <Row label="Texte">
          <input
            value={text}
            onChange={e => setText(e.target.value.toUpperCase())}
            style={inputStyle}
          />
        </Row>

        {/* Preset */}
        <Row label="Couleur">
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {Object.entries(PRESETS).map(([key, val]) => (
              <button
                key={key}
                onClick={() => setPreset(key)}
                style={{
                  width: 32, height: 32,
                  borderRadius: "50%",
                  border: preset === key ? `3px solid ${val.color}` : "3px solid transparent",
                  background: val.color,
                  cursor: "pointer",
                  boxShadow: preset === key ? `0 0 10px ${val.color}` : "none",
                  transition: "box-shadow 0.2s",
                }}
              />
            ))}
          </div>
        </Row>

        {/* Durée */}
        <Row label={`Durée : ${(duration/1000).toFixed(1)}s`}>
          <input type="range" min={500} max={5000} step={100}
            value={duration} onChange={e => setDuration(+e.target.value)}
            style={{ flex: 1, accentColor: "#5c7cfa" }}
          />
        </Row>

        {/* Taille */}
        <Row label={`Taille : ${fontSize}px`}>
          <input type="range" min={16} max={96} step={2}
            value={fontSize} onChange={e => setFontSize(+e.target.value)}
            style={{ flex: 1, accentColor: "#5c7cfa" }}
          />
        </Row>

        {/* Toggles */}
        <Row label="Options">
          <div style={{ display: "flex", gap: 12 }}>
            <Toggle active={flicker}  onClick={() => setFlicker(f => !f)}  label="⚡ Flicker" color="#ffd43b" />
            <Toggle active={paused}   onClick={() => setPaused(p => !p)}   label="⏸ Pause"   color="#ff6b8a" />
          </div>
        </Row>
      </div>

      {/* Showcase presets */}
      <div style={{
        width: "100%", maxWidth: 700,
        background: "#0e0e1a",
        border: "1px solid #1c1c30",
        borderRadius: 16,
        padding: "28px 32px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}>
        <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#5a5a80", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Tous les presets
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px 32px", alignItems: "center" }}>
          {Object.keys(PRESETS).map(p => (
            <NeonPulse key={p} preset={p} fontSize="1.6rem" duration={1800 + Math.random()*800}>
              {p.toUpperCase()}
            </NeonPulse>
          ))}
        </div>
      </div>

      {/* Code snippet */}
      <div style={{
        width: "100%", maxWidth: 700,
        background: "#0a0a16",
        border: "1px solid #1c1c30",
        borderRadius: 16,
        overflow: "hidden",
      }}>
        <div style={{ padding: "10px 16px", background: "#0d0d1e", borderBottom: "1px solid #1c1c30", display: "flex", gap: 6, alignItems: "center" }}>
          {["#ff5f57","#febc2e","#28c840"].map(c => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
          ))}
          <span style={{ marginLeft: "auto", fontFamily: "monospace", fontSize: "0.68rem", color: "#5a5a80" }}>usage.jsx</span>
        </div>
        <pre style={{ padding: 20, fontFamily: "JetBrains Mono, monospace", fontSize: "0.8rem", lineHeight: 1.8, overflowX: "auto", color: "#a0a0c0" }}>
{`import { NeonPulse } from './NeonPulse';

// Basique
<NeonPulse>HELLO</NeonPulse>

// Avec preset
<NeonPulse preset="purple" fontSize="4rem">
  VIBE
</NeonPulse>

// Custom avec flicker
<NeonPulse
  color="#ff375f"
  duration={1500}
  flicker
  fontSize="2rem"
>
  DANGER
</NeonPulse>

// En pause
<NeonPulse preset="gold" paused>
  STATIC
</NeonPulse>`}
        </pre>
      </div>
    </div>
  );
}

// Helpers UI de la démo
function Row({ label, children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <span style={{ width: 120, fontSize: "0.82rem", color: "#7070a0", flexShrink: 0 }}>{label}</span>
      {children}
    </div>
  );
}

function Toggle({ active, onClick, label, color }) {
  return (
    <button onClick={onClick} style={{
      padding: "6px 14px",
      borderRadius: 8,
      border: `1px solid ${active ? color : "#1c1c30"}`,
      background: active ? `${color}18` : "transparent",
      color: active ? color : "#5a5a80",
      fontSize: "0.8rem",
      fontWeight: 600,
      cursor: "pointer",
      transition: "all 0.2s",
    }}>
      {label}
    </button>
  );
}

const inputStyle = {
  flex: 1,
  background: "#0a0a16",
  border: "1px solid #1c1c30",
  borderRadius: 8,
  padding: "7px 12px",
  color: "#dde0f0",
  fontFamily: "inherit",
  fontSize: "0.9rem",
  outline: "none",
};
