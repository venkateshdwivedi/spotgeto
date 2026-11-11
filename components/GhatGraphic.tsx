import React from "react";

export default function GhatGraphic() {
  return (
    <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-[#e5e0d8] flex items-center justify-center bg-[#f5f1ea] select-none">
      {/* SVG Ghat Architectural Illustration */}
      <svg
        viewBox="0 0 400 500"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FAF4EB" />
            <stop offset="50%" stopColor="#F9E2C6" />
            <stop offset="100%" stopColor="#E9B98A" />
          </linearGradient>
          <linearGradient id="riverGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2A4374" />
            <stop offset="50%" stopColor="#1E2B4D" />
            <stop offset="100%" stopColor="#121B33" />
          </linearGradient>
          <linearGradient id="sandstoneFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C99B73" />
            <stop offset="100%" stopColor="#A87752" />
          </linearGradient>
          <linearGradient id="sandstoneNear" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DFAD82" />
            <stop offset="100%" stopColor="#8F5938" />
          </linearGradient>
        </defs>

        {/* Sky Background */}
        <rect width="400" height="340" fill="url(#skyGrad)" opacity="0.35" />

        {/* Distant Temple Silhouettes */}
        <path d="M 60 260 L 75 180 L 90 260 Z" fill="#9C775E" opacity="0.5" />
        <path d="M 85 260 L 100 140 L 115 260 Z" fill="#846048" opacity="0.6" />
        <path d="M 110 260 L 130 195 L 150 260 Z" fill="#9C775E" opacity="0.5" />

        {/* Middle Ground Palace / Haveli Bastion */}
        <rect x="150" y="210" width="130" height="50" rx="3" fill="url(#sandstoneFar)" />
        {/* Arch Windows */}
        <path d="M 165 235 A 8 8 0 0 1 181 235 Z" fill="#6B462C" />
        <path d="M 195 235 A 8 8 0 0 1 211 235 Z" fill="#6B462C" />
        <path d="M 225 235 A 8 8 0 0 1 241 235 Z" fill="#6B462C" />
        <path d="M 255 235 A 8 8 0 0 1 271 235 Z" fill="#6B462C" />

        {/* Jharokha Balcony Dome */}
        <path d="M 180 210 Q 200 175 220 210 Z" fill="#B7825A" />
        <line x1="200" y1="175" x2="200" y2="160" stroke="#FFE182" strokeWidth="2" />
        <circle cx="200" cy="158" r="3" fill="#FFE182" />

        {/* Stepped Ghat Stairs (Foreground) */}
        <polygon points="0,290 400,290 400,310 0,310" fill="#CCA079" />
        <polygon points="0,310 400,310 400,335 0,335" fill="#BF9168" />
        <polygon points="0,335 400,335 400,365 0,365" fill="#A87752" />
        <polygon points="0,365 400,365 400,400 0,400" fill="#91613E" />

        {/* Stepped Stair Ribs / Geometry */}
        <polygon points="30,290 70,290 90,400 10,400" fill="#815433" opacity="0.4" />
        <polygon points="280,290 330,290 360,400 290,400" fill="#815433" opacity="0.3" />

        {/* Stone Chhatri / Umbrella on the Ghat */}
        <path d="M 45 320 Q 75 270 105 320 Z" fill="#E6BE95" />
        <line x1="75" y1="320" x2="75" y2="360" stroke="#5C3B24" strokeWidth="4" />

        {/* Second Bamboo Chhatri */}
        <path d="M 310 330 Q 335 285 360 330 Z" fill="#E6BE95" />
        <line x1="335" y1="330" x2="335" y2="370" stroke="#5C3B24" strokeWidth="4" />

        {/* Sacred Ganges River at Base */}
        <rect x="0" y="395" width="400" height="105" fill="url(#riverGrad)" />

        {/* Water Ripple Reflections */}
        <ellipse cx="200" cy="405" rx="140" ry="2" fill="#E0B688" opacity="0.4" />
        <ellipse cx="180" cy="415" rx="110" ry="2" fill="#FFC72C" opacity="0.5" />
        <ellipse cx="220" cy="425" rx="90" ry="2" fill="#FFE5A3" opacity="0.6" />
        <ellipse cx="160" cy="440" rx="60" ry="2" fill="#FFC72C" opacity="0.3" />
        <ellipse cx="240" cy="455" rx="40" ry="1.5" fill="#FAF4EB" opacity="0.4" />

        {/* Traditional Wooden Riverboat (Bajra) */}
        <g transform="translate(190, 410)">
          <path d="M 0 10 Q 25 22 55 22 Q 85 22 110 10 Q 60 14 0 10 Z" fill="#422513" />
          <line x1="10" y1="12" x2="-15" y2="25" stroke="#FFE5A3" strokeWidth="1.5" />
          <polygon points="35,11 75,11 70,5 40,5" fill="#FFE5A3" opacity="0.9" />
          <line x1="35" y1="11" x2="35" y2="5" stroke="#422513" strokeWidth="1.5" />
          <line x1="75" y1="11" x2="75" y2="5" stroke="#422513" strokeWidth="1.5" />
          <circle cx="25" cy="5" r="3" fill="#1E2B4D" />
          <path d="M 23 8 L 27 8 L 29 13 L 22 13 Z" fill="#1E2B4D" />
        </g>
      </svg>
    </div>
  );
}
