// import React, { useEffect, useRef } from 'react';

// export const NebulaBackground = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const mouse = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let animationFrameId: number;
    
//     // Create persistent star data
//     const stars = Array.from({ length: 200 }, () => ({
//       x: Math.random(),
//       y: Math.random(),
//       size: Math.random() * 1.5,
//       speed: Math.random() * 0.05 + 0.01, // Individual star drift speed
//     }));

//     const handleMouseMove = (e: MouseEvent) => {
//       // Normalize mouse coordinates to -1 to 1
//       mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
//       mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
//     };

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     const draw = (time: number) => {
//       // Clear with a slight trail effect (change 1 to 0.1 for motion blur)
//       ctx.fillStyle = 'rgb(5, 5, 10)'; 
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       const elapsed = time * 0.0007; // Control global speed here

//       // 1. ANIMATED CLOUDS
//       // Use Sine and Cosine to create a circular "floating" motion
//       const cloud1X = canvas.width * 0.5 + Math.cos(elapsed * 0.8) * 100 + (mouse.current.x * 20);
//       const cloud1Y = canvas.height * 0.5 + Math.sin(elapsed * 0.5) * 100 + (mouse.current.y * 20);
      
//       const cloud2X = canvas.width * 0.5 + Math.sin(elapsed * 0.4) * 150 - (mouse.current.x * 30);
//       const cloud2Y = canvas.height * 0.5 + Math.cos(elapsed * 0.7) * 150 - (mouse.current.y * 30);

//       // Violet Glow
//       const g1 = ctx.createRadialGradient(cloud1X, cloud1Y, 0, cloud1X, cloud1Y, 600);
//       g1.addColorStop(0, 'rgba(139, 92, 246, 0.15)');
//       g1.addColorStop(1, 'rgba(0, 0, 0, 0)');
//       ctx.fillStyle = g1;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Pink Glow
//       const g2 = ctx.createRadialGradient(cloud2X, cloud2Y, 0, cloud2X, cloud2Y, 700);
//       g2.addColorStop(0, 'rgba(236, 72, 153, 0.12)');
//       g2.addColorStop(1, 'rgba(0, 0, 0, 0)');
//       ctx.fillStyle = g2;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // 2. ANIMATED STARS
//       stars.forEach((star) => {
//         // Subtle drift + mouse parallax
//         const x = (star.x * canvas.width) + (mouse.current.x * 10);
//         const y = (star.y * canvas.height) + (mouse.current.y * 10);
        
//         // Twinkle factor
//         const opacity = 0.2 + Math.abs(Math.sin(elapsed + star.x * 10)) * 0.8;

//         ctx.beginPath();
//         ctx.arc(x, y, star.size, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
//         ctx.fill();
//       });

//       animationFrameId = requestAnimationFrame(draw);
//     };

//     window.addEventListener('resize', resize);
//     window.addEventListener('mousemove', handleMouseMove);
//     resize();
//     requestAnimationFrame(draw);

//     return () => {
//       window.removeEventListener('resize', resize);
//       window.removeEventListener('mousemove', handleMouseMove);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
// };

import React, { useEffect, useRef } from 'react';

export const NebulaBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    // 1. Define Nebula Configs (Add as many as you like)
    const nebulas = [
      { color: '139, 92, 246', scale: 600, speed: 0.0005, offset: 0, opacity: 0.15 }, // Violet
      { color: '236, 72, 153', scale: 700, speed: 0.0003, offset: 2, opacity: 0.12 }, // Pink
      { color: '6, 182, 212', scale: 500, speed: 0.0007, offset: 4, opacity: 0.10 }, // Cyan
      { color: '245, 158, 11', scale: 800, speed: 0.0002, offset: 1, opacity: 0.08 }, // Amber
    ];

    const stars = Array.from({ length: 250 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.2,
      twinkleSpeed: Math.random() * 0.002 + 0.001,
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = (time: number) => {
      // Background color
      ctx.fillStyle = '#05050a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Draw Multi-Layered Nebulas
      nebulas.forEach((neb, i) => {
        const elapsed = time * neb.speed + neb.offset;
        
        // Complex movement: circular path + mouse influence
        const x = canvas.width * 0.5 + Math.cos(elapsed) * (150 + i * 20) + (mouse.current.x * (20 + i * 10));
        const y = canvas.height * 0.5 + Math.sin(elapsed * 0.8) * (100 + i * 15) + (mouse.current.y * (20 + i * 10));

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, neb.scale);
        gradient.addColorStop(0, `rgba(${neb.color}, ${neb.opacity})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.globalCompositeOperation = 'screen'; // Blends colors where they overlap
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // 3. Draw Stars
      ctx.globalCompositeOperation = 'source-over';
      stars.forEach((star) => {
        const opacity = 0.3 + Math.abs(Math.sin(time * star.twinkleSpeed)) * 0.7;
        const x = (star.x * canvas.width) + (mouse.current.x * 15);
        const y = (star.y * canvas.height) + (mouse.current.y * 15);

        ctx.beginPath();
        ctx.arc(x, y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5);
      mouse.current.y = (e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();
    requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-[#05050a]" />;
};