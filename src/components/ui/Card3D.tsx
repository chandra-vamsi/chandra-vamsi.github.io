"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  glareOpacity?: number;
  borderGlow?: boolean;
}

export function Card3D({
  children,
  className = "",
  depth = 20,
  glareOpacity = 0.2,
  borderGlow = true,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation (-depth to +depth deg)
    const rX = ((mouseY - height / 2) / (height / 2)) * -depth;
    const rY = ((mouseX - width / 2) / (width / 2)) * depth;

    setRotateX(rX);
    setRotateY(rY);

    // Calculate glare percentage (0% to 100%)
    setGlarePosition({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1200px" }}
      className="relative w-full"
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.02 : 1,
          z: isHovered ? 30 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 25,
          mass: 0.8,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className={`relative rounded-[2.5rem] transition-shadow duration-500 ${
          borderGlow && isHovered
            ? "shadow-[0_0_45px_rgba(0,240,255,0.15),0_10px_35px_rgba(0,0,0,0.8)] border border-cyan-500/30"
            : "shadow-2xl border border-white/5"
        } ${className}`}
      >
        {/* Dynamic Holographic Glare Layer */}
        <div
          className="absolute inset-0 rounded-[2.5rem] pointer-events-none transition-opacity duration-300 z-30"
          style={{
            opacity: isHovered ? glareOpacity : 0,
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.35) 0%, rgba(0, 240, 255, 0.1) 40%, transparent 70%)`,
          }}
        />

        {/* Content with 3D Depth */}
        <div
          style={{
            transform: "translateZ(20px)",
            transformStyle: "preserve-3d",
          }}
          className="relative z-10 w-full h-full"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
