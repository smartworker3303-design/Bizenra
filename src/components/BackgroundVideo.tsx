"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly guarantee muted is set so browsers permit autoplay
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsVideoLoaded(true);
        })
        .catch(() => {
          // Autoplay was prevented or device is in low-power mode; poster will display seamlessly
        });
    }
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-screen h-screen -z-20 overflow-hidden pointer-events-none select-none"
    >
      {/* 1. Instant Poster Fallback Image (Prevents any flash of black/empty space while video buffers) */}
      <Image
        src="/forest-bg.jpg"
        alt="Dark Evergreen Forest Canopy"
        fill
        priority
        sizes="100vw"
        className={`object-cover object-center scale-[1.01] transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* 2. Responsive 4K Forest Video Background */}
      {/* object-cover and object-center guarantee the video fills 100% of the viewport on all screen sizes (mobile, tablet, desktop, ultrawide) without stretching or bars */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/forest-bg.jpg"
        onLoadedData={() => setIsVideoLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source src="/forest-video.mp4" type="video/mp4" />
        <source
          src="/Dark%20Green%20Forest%20(GIF)%20background%20__%204k%2B60%20fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* 3. Theme & Contrast Overlay Layers */}
      {/* Base forest tint ensuring deep emerald tone and subduing harsh tree highlights */}
      <div className="absolute inset-0 bg-[#020A05]/45" />

      {/* Vertical gradient: Protects readability for Navbar (top) and content flow (bottom) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020704]/80 via-transparent to-[#020704]/85" />

      {/* Radial ambient vignette: Centers visual focus onto the typography and cards */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(2,8,5,0.65)_100%)]" />
    </div>
  );
}
