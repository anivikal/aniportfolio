"use client";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#030303]">
      {/* Deep Space Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-[#030303] to-[#000]"></div>

      {/* Static Premium Glows (No animation, instant loading) */}
      <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] opacity-20 bg-[radial-gradient(circle,rgba(147,51,234,0.4)_0%,transparent_60%)]" />
      <div className="absolute top-[10%] right-[0%] w-[60vw] h-[60vw] opacity-20 bg-[radial-gradient(circle,rgba(37,99,235,0.4)_0%,transparent_60%)]" />
      <div className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[80vw] opacity-15 bg-[radial-gradient(circle,rgba(6,182,212,0.3)_0%,transparent_60%)]" />

      {/* Glass/Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
    </div>
  );
}