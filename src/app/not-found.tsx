"use client";

import { useState, useEffect } from "react";

export default function ComingSoon() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gray-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">

        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            404
          </h1>
        </div>

        {/* Contact Info */}
        <div className="mb-12">
          <a
            href="mailto:team@lostyo.com"
            className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
          >
            team@lostyo.com
          </a>
        </div>

        {/* Discord Link */}
        <div className="flex justify-center">
          <a
            href="https://discord.gg/lostyo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <img 
              src="/assets/discord.png"
              className="w-10 h-10"
              alt="Discord Logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
