"use client";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#030303]">
      
      {/* Deep Space Base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#111] via-[#030303] to-[#000]"></div>

      {/* GPU-Optimized Radial Gradients (No Blur Filters!) */}
      <div 
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] mix-blend-screen animate-aurora-1"
        style={{ 
          background: 'radial-gradient(circle, rgba(147,51,234,0.12) 0%, rgba(147,51,234,0) 60%)',
          willChange: 'transform'
        }} 
      />
      
      <div 
        className="absolute top-[10%] right-[0%] w-[60vw] h-[60vw] mix-blend-screen animate-aurora-2"
        style={{ 
          background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, rgba(37,99,235,0) 60%)',
          willChange: 'transform'
        }} 
      />
      
      <div 
        className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[80vw] mix-blend-screen animate-aurora-3"
        style={{ 
          background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, rgba(6,182,212,0) 60%)',
          willChange: 'transform'
        }} 
      />

      {/* Glass/Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Pure CSS Animations embedded safely */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes aurora-1 {
          0%, 100% { transform: translate(0%, 0%) scale(1); }
          50% { transform: translate(5%, 5%) scale(1.05); }
        }
        @keyframes aurora-2 {
          0%, 100% { transform: translate(0%, 0%) scale(1); }
          50% { transform: translate(-5%, 10%) scale(1.1); }
        }
        @keyframes aurora-3 {
          0%, 100% { transform: translate(0%, 0%); }
          50% { transform: translate(10%, -10%); }
        }
        .animate-aurora-1 { animation: aurora-1 15s ease-in-out infinite; }
        .animate-aurora-2 { animation: aurora-2 20s ease-in-out infinite; }
        .animate-aurora-3 { animation: aurora-3 18s ease-in-out infinite; }
      `}} />
    </div>
  );
}