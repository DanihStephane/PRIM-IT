'use client';

import React, { useState, useEffect } from 'react';

// Générer les lignes de connexion une seule fois
const generateLines = () => {
  return [...Array(10)].map(() => ({
    x1: 20 + Math.random() * 180,
    y1: 20 + Math.random() * 180,
    x2: 20 + Math.random() * 180,
    y2: 20 + Math.random() * 180,
  }));
};

export function GeometricBackground() {
  const [lines, setLines] = useState<Array<{x1: number; y1: number; x2: number; y2: number}>>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLines(generateLines());
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100 dark:from-gray-950 dark:via-black dark:to-gray-950" />

      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-cyan-200/30 to-blue-300/30 dark:from-cyan-500/5 dark:to-blue-600/5 rounded-3xl rotate-12 blur-3xl" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-300/30 dark:from-purple-500/5 dark:to-pink-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-cyan-300/30 dark:from-blue-500/5 dark:to-cyan-600/5 rounded-3xl -rotate-12 blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-br from-indigo-200/30 to-blue-300/30 dark:from-indigo-500/5 dark:to-blue-600/5 rounded-full blur-3xl" />

      {/* Network dots pattern */}
      <svg
        className="absolute top-20 right-10 w-64 h-64 opacity-20 dark:opacity-5"
        viewBox="0 0 200 200"
        suppressHydrationWarning
      >
        <defs>
          <radialGradient id="dot-gradient">
            <stop offset="0%" stopColor="currentColor" className="text-primary" />
            <stop offset="100%" stopColor="currentColor" className="text-purple-500" />
          </radialGradient>
        </defs>
        {[...Array(8)].map((_, i) =>
          [...Array(8)].map((_, j) => (
            <circle
              key={`${i}-${j}`}
              cx={20 + i * 25}
              cy={20 + j * 25}
              r="2"
              fill="url(#dot-gradient)"
            />
          ))
        )}
        {/* Connection lines */}
        {mounted && lines.map((line, i) => (
          <line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary/30"
          />
        ))}
      </svg>

      {/* Circuit pattern */}
      <svg
        className="absolute bottom-10 left-10 w-48 h-48 opacity-10 dark:opacity-3"
        viewBox="0 0 100 100"
      >
        <path
          d="M20,20 L80,20 L80,80 L20,80 Z M40,20 L40,80 M60,20 L60,80 M20,40 L80,40 M20,60 L80,60"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-primary"
        />
        <circle cx="40" cy="40" r="3" fill="currentColor" className="text-primary" />
        <circle cx="60" cy="60" r="3" fill="currentColor" className="text-primary" />
        <circle cx="40" cy="60" r="3" fill="currentColor" className="text-cyan-500" />
        <circle cx="60" cy="40" r="3" fill="currentColor" className="text-cyan-500" />
      </svg>
    </div>
  );
}
