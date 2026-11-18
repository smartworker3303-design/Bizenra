"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const markVideoActive = useCallback(() => {
    setIsVideoLoaded(true);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const video = videoRef.current;
    if (!video) return;

    // Explicitly guarantee muted is set so browsers permit instant autoplay
    video.muted = true;

    // Check if video is already ready or playing
    if (video.readyState >= 2 || (!video.paused && !video.ended)) {
      markVideoActive();
    }

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          markVideoActive();
        })
        .catch(() => {
          // Fallback silently if power-saving prevents autoplay; poster image remains seamless
        });
    }
  }, [isMounted, markVideoActive]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-screen h-screen -z-20 overflow-hidden pointer-events-none select-none"
    >
      {/* 1. Instant Poster Fallback Image (Prevents any flash while video initializes) */}
      <Image
        src="/forest-bg.jpg"
        alt="Dark Evergreen Forest Canopy"
        fill
        priority
        sizes="100vw"
        className={`object-cover object-center scale-[1.01] transition-opacity duration-1000 ease-out ${
          isVideoLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* 2. Responsive Forest Video Background with Instant FastStart Streaming */}
      {/* Rendered on mount with suppressHydrationWarning to insulate from browser extensions */}
      {isMounted && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/forest-bg.jpg"
          suppressHydrationWarning
          onCanPlay={markVideoActive}
          onPlaying={markVideoActive}
          onLoadedData={markVideoActive}
          onTimeUpdate={() => {
            if (!isVideoLoaded) markVideoActive();
          }}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-out ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/forest-video.webm" type="video/webm" />
          <source src="/forest-video.mp4" type="video/mp4" />
        </video>
      )}

      {/* 3. Theme & Contrast Overlay Layers */}
      <div className="absolute inset-0 bg-[#020A05]/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020704]/80 via-transparent to-[#020704]/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(2,8,5,0.65)_100%)]" />
    </div>
  );
}
