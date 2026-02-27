import { useState } from "react";

const profiles = [
  {
    id: "neon-terminal",
    name: "Neon Terminal",
    description: "Dark, developer-coded, electric. Like a terminal window that came alive.",
    bg: "#0a0a0f",
    bgSecondary: "#111118",
    accent: "#39ff14",
    accentSecondary: "#00e5ff",
    accentTertiary: "#ff2d7b",
    textPrimary: "#e8e8e8",
    textSecondary: "#7a7a8a",
    fontDisplay: "'JetBrains Mono', 'Fira Code', monospace",
    fontBody: "'DM Sans', sans-serif",
    tagline: "ship it or it doesn't exist",
    logoStyle: "terminal",
    mood: "Hacker energy. Late-night builds. Green on black. The cursor blinks, you ship.",
    useCase: "Best for: X/Twitter presence, GitHub profile, dev-heavy content. Appeals to technical vibe coders who respect the craft.",
  },
  {
    id: "electric-pop",
    name: "Electric Pop",
    description: "Bold, loud, unapologetic. Neon signs in a dark alley.",
    bg: "#0d0d12",
    bgSecondary: "#16161f",
    accent: "#ff2d7b",
    accentSecondary: "#39ff14",
    accentTertiary: "#5b5bff",
    textPrimary: "#ffffff",
    textSecondary: "#9090a0",
    fontDisplay: "'Space Mono', monospace",
    fontBody: "'DM Sans', sans-serif",
    tagline: "apps that hit different",
    logoStyle: "neon",
    mood: "Main character energy. Confident but not corporate. The kind of brand that drops an app and it trends.",
    useCase: "Best for: YouTube thumbnails, Product Hunt launches, app landing pages. Appeals to the broader vibe coder audience and non-technical followers.",
  },
  {
    id: "midnight-minimal",
    name: "Midnight Minimal",
    description: "Clean, confident, restrained. Let the work speak.",
    bg: "#08080c",
    bgSecondary: "#101016",
    accent: "#00e5ff",
    accentSecondary: "#39ff14",
    accentTertiary: "#ff2d7b",
    textPrimary: "#d4d4d8",
    textSecondary: "#6b6b78",
    fontDisplay: "'IBM Plex Mono', monospace",
    fontBody: "'IBM Plex Sans', sans-serif",
    tagline: "building in the open",
    logoStyle: "minimal",
    mood: "Quiet confidence. Premium feel without pretension. Dark mode default. Spacing matters.",
    useCase: "Best for: App Store presence, professional contexts, blog/newsletter. Appeals to more design-conscious audience who appreciate restraint.",
  },
];

function Logo({ style, accent, accentSecondary, accentTertiary, size = 80 }) {
  if (style === "terminal") {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect x="4" y="4" width="92" height="92" rx="16" fill="#111118" stroke={accent} strokeWidth="2" />
        <rect x="4" y="4" width="92" height="24" rx="16" fill={accent + "18"} />
        <circle cx="20" cy="16" r="4" fill={accentTertiary} opacity="0.9" />
        <circle cx="32" cy="16" r="4" fill={accentSecondary + "cc"} opacity="0.9" />
        <circle cx="44" cy="16" r="4" fill={accent} opacity="0.9" />
        <text x="16" y="48" fontFamily="monospace" fontSize="13" fill={accent} fontWeight="bold">
          {">"} app
        </text>
        <text x="16" y="65" fontFamily="monospace" fontSize="13" fill={accent} fontWeight="bold">
          {"  "}mog
        </text>
        <rect x="16" y="74" width="8" height="14" fill={accent} opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.2s" repeatCount="indefinite" />
        </rect>
        <text x="26" y="86" fontFamily="monospace" fontSize="11" fill={accentSecondary} opacity="0.5">
          shipping...
        </text>
      </svg>
    );
  }

  if (style === "neon") {
    return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glowStrong">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="100" height="100" rx="20" fill="#0d0d12" />
        <text x="50" y="42" textAnchor="middle" fontFamily="monospace" fontSize="28" fontWeight="900" fill={accent} filter="url(#glowStrong)" letterSpacing="-1">
          APP
        </text>
        <text x="50" y="72" textAnchor="middle" fontFamily="monospace" fontSize="28" fontWeight="900" fill={accentSecondary} filter="url(#glowStrong)" letterSpacing="-1">
          MOG
        </text>
        <line x1="18" y1="50" x2="82" y2="50" stroke={accentTertiary} strokeWidth="1" opacity="0.4" />
        <circle cx="15" cy="15" r="3" fill={accent} opacity="0.3" />
        <circle cx="85" cy="85" r="3" fill={accentSecondary} opacity="0.3" />
      </svg>
    );
  }

  // minimal
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" rx="20" fill="#101016" />
      <text x="50" y="38" textAnchor="middle" fontFamily="monospace" fontSize="11" fill={accent} letterSpacing="6" fontWeight="300">
        APP
      </text>
      <line x1="25" y1="46" x2="75" y2="46" stroke={accent} strokeWidth="0.5" opacity="0.4" />
      <text x="50" y="68" textAnchor="middle" fontFamily="monospace" fontSize="22" fontWeight="700" fill="#d4d4d8" letterSpacing="2">
        MOG
      </text>
      <circle cx="50" cy="82" r="2" fill={accent} opacity="0.6" />
    </svg>
  );
}

function ColorSwatch({ color, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: color,
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: `0 0 12px ${color}33`,
        }}
      />
      <div>
        <div style={{ fontSize: 12, fontFamily: "monospace", color: "#ccc" }}>{color}</div>
        <div style={{ fontSize: 11, color: "#777" }}>{label}</div>
      </div>
    </div>
  );
}

function MockAppIcon({ profile }) {
  return (
    <div
      style={{
        width: 64,
        height: 64,
        borderRadius: 14,
        background: `linear-gradient(135deg, ${profile.accent}22, ${profile.accentSecondary}22)`,
        border: `1px solid ${profile.accent}33`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
        fontSize: 10,
        color: profile.accent,
        fontWeight: "bold",
        letterSpacing: 1,
      }}
    >
      AM
    </div>
  );
}

function MockTwitterBanner({ profile }) {
  return (
    <div
      style={{
        width: "100%",
        height: 100,
        borderRadius: 10,
        background: profile.bg,
        border: `1px solid ${profile.accent}22`,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(ellipse at 80% 50%, ${profile.accent}15, transparent 60%), radial-gradient(ellipse at 20% 50%, ${profile.accentTertiary}10, transparent 60%)`,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ fontFamily: profile.fontDisplay, fontSize: 18, fontWeight: 700, color: profile.textPrimary, letterSpacing: -0.5 }}>
          App Mog
        </div>
        <div style={{ fontFamily: profile.fontBody, fontSize: 11, color: profile.accent, marginTop: 2 }}>{profile.tagline}</div>
      </div>
      <div
        style={{
          position: "absolute",
          right: 24,
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "monospace",
          fontSize: 9,
          color: profile.textSecondary,
          textAlign: "right",
          lineHeight: 1.6,
        }}
      >
        <span style={{ color: profile.accent }}>●</span> Photo Blitz
        <br />
        <span style={{ color: profile.accentSecondary }}>●</span> Thronglet
        <br />
        <span style={{ color: profile.accentTertiary }}>●</span> More soon
      </div>
    </div>
  );
}

export default function AppMogBranding() {
  const [activeProfile, setActiveProfile] = useState(0);
  const profile = profiles[activeProfile];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#07070b",
        color: "#e0e0e0",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      }}
    >
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&family=Space+Mono:wght@400;700&family=IBM+Plex+Mono:wght@300;400;700&family=IBM+Plex+Sans:wght@300;400;600&family=DM+Sans:wght@300;400;500;700&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{ padding: "40px 32px 0", maxWidth: 800, margin: "0 auto" }}>
        <div style={{ fontFamily: "monospace", fontSize: 11, color: "#555", letterSpacing: 3, textTransform: "uppercase", marginBottom: 8 }}>
          Brand Identity System
        </div>
        <h1
          style={{
            fontSize: 42,
            fontWeight: 700,
            margin: 0,
            background: `linear-gradient(135deg, #39ff14, #00e5ff, #ff2d7b)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: -1.5,
          }}
        >
          App Mog
        </h1>
        <p style={{ color: "#777", fontSize: 15, marginTop: 8, lineHeight: 1.6, maxWidth: 600 }}>
          Three brand profile directions. Each uses the electric/neon-on-dark palette with different energy levels and personality.
        </p>
      </div>

      {/* Profile Selector */}
      <div style={{ padding: "24px 32px", maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {profiles.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveProfile(i)}
              style={{
                padding: "10px 20px",
                borderRadius: 10,
                border: activeProfile === i ? `2px solid ${p.accent}` : "2px solid #222",
                background: activeProfile === i ? p.accent + "15" : "#111",
                color: activeProfile === i ? p.accent : "#666",
                fontFamily: "monospace",
                fontSize: 13,
                fontWeight: activeProfile === i ? 700 : 400,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Active Profile */}
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "0 32px 60px",
          transition: "all 0.3s ease",
        }}
        key={profile.id}
      >
        {/* Profile Header */}
        <div
          style={{
            background: profile.bgSecondary,
            borderRadius: 16,
            padding: 32,
            border: `1px solid ${profile.accent}22`,
            marginBottom: 20,
          }}
        >
          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            <span
              style={{
                padding: "4px 12px",
                borderRadius: 20,
                background: profile.accent + "20",
                color: profile.accent,
                fontSize: 11,
                fontFamily: "monospace",
                fontWeight: 700,
              }}
            >
              PROFILE {activeProfile + 1}
            </span>
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: profile.textPrimary, margin: "0 0 8px", fontFamily: profile.fontDisplay }}>
            {profile.name}
          </h2>
          <p style={{ color: profile.textSecondary, fontSize: 15, margin: "0 0 16px", lineHeight: 1.5 }}>{profile.description}</p>
          <div
            style={{
              padding: 16,
              borderRadius: 10,
              background: profile.bg,
              border: `1px solid ${profile.accent}11`,
              fontFamily: "monospace",
              fontSize: 12,
              color: profile.textSecondary,
              lineHeight: 1.8,
            }}
          >
            <span style={{ color: profile.accent }}>mood:</span> {profile.mood}
            <br />
            <span style={{ color: profile.accentSecondary }}>target:</span> {profile.useCase}
          </div>
        </div>

        {/* Logo + Colours Row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
          {/* Logo */}
          <div
            style={{
              background: profile.bgSecondary,
              borderRadius: 16,
              padding: 32,
              border: `1px solid ${profile.accent}22`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ fontFamily: "monospace", fontSize: 10, color: profile.textSecondary, letterSpacing: 2, marginBottom: 20, textTransform: "uppercase" }}>Logo Mark</div>
            <Logo style={profile.logoStyle} accent={profile.accent} accentSecondary={profile.accentSecondary} accentTertiary={profile.accentTertiary} size={120} />
          </div>

          {/* Colours */}
          <div
            style={{
              background: profile.bgSecondary,
              borderRadius: 16,
              padding: 32,
              border: `1px solid ${profile.accent}22`,
            }}
          >
            <div style={{ fontFamily: "monospace", fontSize: 10, color: profile.textSecondary, letterSpacing: 2, marginBottom: 16, textTransform: "uppercase" }}>
              Colour Palette
            </div>
            <ColorSwatch color={profile.bg} label="Background" />
            <ColorSwatch color={profile.accent} label="Primary accent" />
            <ColorSwatch color={profile.accentSecondary} label="Secondary accent" />
            <ColorSwatch color={profile.accentTertiary} label="Tertiary accent" />
            <ColorSwatch color={profile.textPrimary} label="Text primary" />
          </div>
        </div>

        {/* Typography */}
        <div
          style={{
            background: profile.bgSecondary,
            borderRadius: 16,
            padding: 32,
            border: `1px solid ${profile.accent}22`,
            marginBottom: 20,
          }}
        >
          <div style={{ fontFamily: "monospace", fontSize: 10, color: profile.textSecondary, letterSpacing: 2, marginBottom: 20, textTransform: "uppercase" }}>Typography</div>
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 10, fontFamily: "monospace", color: profile.textSecondary, marginBottom: 6 }}>Display — {profile.fontDisplay.split(",")[0].replace(/'/g, "")}</div>
            <div style={{ fontFamily: profile.fontDisplay, fontSize: 32, fontWeight: 700, color: profile.textPrimary, letterSpacing: -0.5 }}>App Mog</div>
            <div style={{ fontFamily: profile.fontDisplay, fontSize: 18, fontWeight: 400, color: profile.accent, marginTop: 4 }}>{profile.tagline}</div>
          </div>
          <div>
            <div style={{ fontSize: 10, fontFamily: "monospace", color: profile.textSecondary, marginBottom: 6 }}>Body — {profile.fontBody.split(",")[0].replace(/'/g, "")}</div>
            <div style={{ fontFamily: profile.fontBody, fontSize: 15, color: profile.textSecondary, lineHeight: 1.6 }}>
              We build apps in the open. Follow along as we ship Photo Blitz, Thronglet, and whatever comes next. Real code, real progress, no fluff.
            </div>
          </div>
        </div>

        {/* Tagline Options */}
        <div
          style={{
            background: profile.bgSecondary,
            borderRadius: 16,
            padding: 32,
            border: `1px solid ${profile.accent}22`,
            marginBottom: 20,
          }}
        >
          <div style={{ fontFamily: "monospace", fontSize: 10, color: profile.textSecondary, letterSpacing: 2, marginBottom: 16, textTransform: "uppercase" }}>
            Tagline Options
          </div>
          {[profile.tagline, "we build. you watch.", "apps from the void", "one dev, infinite apps", "building weird stuff that works"].map((t, i) => (
            <div
              key={i}
              style={{
                padding: "12px 16px",
                borderRadius: 8,
                background: i === 0 ? profile.accent + "15" : "transparent",
                border: i === 0 ? `1px solid ${profile.accent}33` : "1px solid transparent",
                fontFamily: profile.fontDisplay,
                fontSize: 16,
                color: i === 0 ? profile.accent : profile.textSecondary,
                fontWeight: i === 0 ? 700 : 400,
                marginBottom: 4,
              }}
            >
              {t}
              {i === 0 && (
                <span style={{ fontSize: 10, marginLeft: 12, color: profile.accent, opacity: 0.6 }}>← recommended</span>
              )}
            </div>
          ))}
        </div>

        {/* Mockups */}
        <div
          style={{
            background: profile.bgSecondary,
            borderRadius: 16,
            padding: 32,
            border: `1px solid ${profile.accent}22`,
            marginBottom: 20,
          }}
        >
          <div style={{ fontFamily: "monospace", fontSize: 10, color: profile.textSecondary, letterSpacing: 2, marginBottom: 20, textTransform: "uppercase" }}>
            Usage Mockups
          </div>

          {/* Twitter/X Banner Mock */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 11, color: profile.textSecondary, marginBottom: 8, fontFamily: "monospace" }}>X/Twitter Banner</div>
            <MockTwitterBanner profile={profile} />
          </div>

          {/* App Icon Mock */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 11, color: profile.textSecondary, marginBottom: 8, fontFamily: "monospace" }}>App Store Developer Icon</div>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <MockAppIcon profile={profile} />
              <div>
                <div style={{ fontFamily: profile.fontDisplay, fontSize: 14, fontWeight: 700, color: profile.textPrimary }}>App Mog</div>
                <div style={{ fontFamily: profile.fontBody, fontSize: 12, color: profile.textSecondary }}>Developer</div>
              </div>
            </div>
          </div>

          {/* Bio Mock */}
          <div>
            <div style={{ fontSize: 11, color: profile.textSecondary, marginBottom: 8, fontFamily: "monospace" }}>X/Twitter Bio</div>
            <div
              style={{
                padding: 16,
                borderRadius: 10,
                background: profile.bg,
                border: `1px solid ${profile.accent}11`,
                fontFamily: profile.fontBody,
                fontSize: 14,
                color: profile.textPrimary,
                lineHeight: 1.6,
              }}
            >
              <strong style={{ color: profile.accent }}>App Mog</strong> — {profile.tagline}
              <br />
              <span style={{ color: profile.textSecondary }}>
                Building apps in public. Currently shipping: Photo Blitz {String.fromCodePoint(0x1f4f8)} Thronglet {String.fromCodePoint(0x1f47e)}
              </span>
              <br />
              <span style={{ color: profile.accentSecondary, fontSize: 13 }}>appmog.dev</span>
            </div>
          </div>
        </div>

        {/* Content Style Guide */}
        <div
          style={{
            background: profile.bgSecondary,
            borderRadius: 16,
            padding: 32,
            border: `1px solid ${profile.accent}22`,
          }}
        >
          <div style={{ fontFamily: "monospace", fontSize: 10, color: profile.textSecondary, letterSpacing: 2, marginBottom: 16, textTransform: "uppercase" }}>
            Voice & Tone
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <div style={{ fontFamily: "monospace", fontSize: 12, color: profile.accent, marginBottom: 8 }}>DO</div>
              {["Casual, like talking to a mate", "Show the messy reality", "Celebrate small wins loudly", "Use dev humour naturally", "Be honest about failures"].map((item, i) => (
                <div key={i} style={{ fontSize: 13, color: profile.textSecondary, marginBottom: 6, paddingLeft: 16, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: profile.accent }}>+</span>
                  {item}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "monospace", fontSize: 12, color: profile.accentTertiary, marginBottom: 8 }}>DON'T</div>
              {["Corporate speak or buzzwords", "Fake humility or fake confidence", "Overproduce content", "Pretend to be a big team", "Ignore your audience's replies"].map((item, i) => (
                <div key={i} style={{ fontSize: 13, color: profile.textSecondary, marginBottom: 6, paddingLeft: 16, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: profile.accentTertiary }}>-</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
