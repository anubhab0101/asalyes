import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

// Card Spotlight Component
export const CardSpotlight = ({
  children,
  className,
  radius = 350,
  color = "#6750A4", // MD3 Primary
}) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border border-md-outline/20 bg-md-surfaceContainer p-8",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(${radius}px circle at ${position.x}px ${position.y}px, ${color}20, transparent 40%)`,
        }}
      />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

// Text Hover Effect Component
export const TextHoverEffect = ({ text, duration = 3 }) => {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 300 100"
        xmlns="http://www.w3.org/2000/svg"
        className="font-sans font-bold"
      >
        <defs>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6750A4" />
            <stop offset="100%" stopColor="#7D5260" />
          </linearGradient>
        </defs>
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-4xl stroke-md-primary fill-transparent"
          strokeWidth="1"
          initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
          animate={{ strokeDashoffset: 0, fill: "url(#textGradient)" }}
          transition={{
            strokeDashoffset: { duration: duration - 1, ease: "easeInOut" },
            fill: { duration: 1, delay: duration - 1.5, ease: "easeIn" }
          }}
        >
          {text}
        </motion.text>
      </svg>
    </div>
  );
};
