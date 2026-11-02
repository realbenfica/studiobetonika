"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./trailer-player.module.css";

export default function TrailerPlayer({ src, poster, alt, startAt = 0, aspectRatio, soundControl = true }: { src: string; poster: string; alt: string; startAt?: number; aspectRatio?: string; soundControl?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const userStarted = useRef(false);
  const userPaused = useRef(false);
  const controlsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(true);
  const [touchControls, setTouchControls] = useState(false);
  const [progress, setProgress] = useState({ time: 0, duration: 0 });
  useEffect(() => () => {
    if (controlsTimer.current) clearTimeout(controlsTimer.current);
  }, []);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let disposed = false;
    userStarted.current = false;
    userPaused.current = false;
    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.autoplay = false;
    const loadVideo = () => {
      video.preload = visible ? "auto" : "metadata";
      if (video.getAttribute("src") === src) return;
      video.src = src;
      video.load();
    };
    const start = () => {
      if (startAt && Number.isFinite(video.duration)) video.currentTime = Math.min(startAt, Math.max(0, video.duration - 0.1));
    };
    const syncPlayback = () => {
      const shouldPlay = !disposed && visible && !userPaused.current && (!preference.matches || userStarted.current) && !document.hidden;
      video.autoplay = shouldPlay;
      if (!shouldPlay) {
        video.preload = "metadata";
        video.pause();
        return;
      }
      loadVideo();
      if (video.paused) {
        // Safari may require a later readiness event or a direct user gesture.
        video.play().catch(() => {});
      }
    };
    video.addEventListener("loadedmetadata", start, { once: true });
    video.addEventListener("loadeddata", syncPlayback);
    video.addEventListener("canplay", syncPlayback);
    if (video.readyState >= 1) start();

    // Read metadata nearby; buffer and play the full video only on screen.
    const preloadObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !preference.matches) loadVideo();
    }, { rootMargin: "150px" });
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    });
    preloadObserver.observe(video);
    observer.observe(video);
    preference.addEventListener("change", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);
    window.addEventListener("pageshow", syncPlayback);
    document.addEventListener("touchend", syncPlayback, { passive: true });
    document.addEventListener("click", syncPlayback, { passive: true });
    document.addEventListener("keydown", syncPlayback);
    return () => {
      disposed = true;
      preloadObserver.disconnect();
      observer.disconnect();
      preference.removeEventListener("change", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
      window.removeEventListener("pageshow", syncPlayback);
      document.removeEventListener("touchend", syncPlayback);
      document.removeEventListener("click", syncPlayback);
      document.removeEventListener("keydown", syncPlayback);
      video.removeEventListener("loadedmetadata", start);
      video.removeEventListener("loadeddata", syncPlayback);
      video.removeEventListener("canplay", syncPlayback);
      video.autoplay = false;
      video.pause();
    };
  }, [src, startAt]);
  const syncProgress = () => {
    const video = ref.current;
    if (video) setProgress({ time: video.currentTime, duration: Number.isFinite(video.duration) ? video.duration : 0 });
  };
  const playFromControl = () => {
    const video = ref.current;
    if (!video) return;
    userStarted.current = true;
    userPaused.current = false;
    if (video.getAttribute("src") !== src) {
      video.src = src;
      video.load();
    }
    void video.play().catch(() => {
      video.muted = true;
      setMuted(true);
    });
  };
  const elapsed = (time: number) => `${Math.floor(time / 60)}:${String(Math.floor(time % 60)).padStart(2, "0")}`;
  return <div
    className={styles.video}
    style={aspectRatio ? { aspectRatio } : undefined}
    role={soundControl ? "group" : undefined}
    aria-label={soundControl ? `${alt} player` : undefined}
    tabIndex={soundControl ? 0 : undefined}
    data-controls-visible={touchControls || (soundControl && paused) || undefined}
    onPointerDown={soundControl ? (event) => {
      if (event.pointerType === "mouse") return;
      if (controlsTimer.current) clearTimeout(controlsTimer.current);
      setTouchControls(true);
    } : undefined}
    onPointerUp={soundControl ? (event) => {
      if (event.pointerType === "mouse") return;
      controlsTimer.current = setTimeout(() => setTouchControls(false), 4000);
    } : undefined}
    onPointerCancel={soundControl ? () => {
      if (controlsTimer.current) clearTimeout(controlsTimer.current);
      setTouchControls(false);
    } : undefined}
  >
    <video ref={ref} poster={poster} autoPlay muted={muted} loop playsInline preload="none" aria-label={alt}
      onPlay={soundControl ? () => setPaused(false) : undefined}
      onPause={soundControl ? () => setPaused(true) : undefined}
      onVolumeChange={soundControl ? () => setMuted(ref.current?.muted ?? true) : undefined}
      onLoadedMetadata={soundControl ? syncProgress : undefined}
      onDurationChange={soundControl ? syncProgress : undefined}
      onTimeUpdate={soundControl ? syncProgress : undefined}
    />
    {soundControl && <div className={styles.videoControls}>
      <div className={styles.videoSecondaryControls}>
        <button className={styles.videoIconButton} type="button" aria-label={`${paused ? "Play" : "Pause"} ${alt}`} title={paused ? "Play film" : "Pause film"} onClick={() => {
          const video = ref.current;
          if (!video) return;
          if (video.paused) {
            playFromControl();
          } else {
            userPaused.current = true;
            video.autoplay = false;
            video.pause();
          }
        }}>
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
            {paused ? <path d="m8 5 11 7-11 7V5Z" /> : <path d="M8 5v14M16 5v14" />}
          </svg>
        </button>
        <div className={styles.videoSeek}>
          <input type="range" min={0} max={progress.duration || 1} step="0.1" value={Math.min(progress.time, progress.duration)} disabled={!progress.duration}
            aria-label={`Seek in ${alt}`} aria-valuetext={`${elapsed(progress.time)} of ${elapsed(progress.duration)}`}
            style={{ "--video-progress": `${progress.duration ? progress.time / progress.duration * 100 : 0}%` } as CSSProperties}
            onChange={(event) => {
              const video = ref.current;
              if (!video) return;
              video.currentTime = Number(event.target.value);
              syncProgress();
            }}
          />
        </div>
        <button className={styles.videoIconButton} type="button" aria-label={`Restart ${alt}`} title="Restart film" onClick={() => {
          if (ref.current) ref.current.currentTime = 0;
          setProgress((previous) => ({ ...previous, time: 0 }));
          playFromControl();
        }}>
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M4 10a8 8 0 1 1 1.6 7.2M4 4v6h6" />
          </svg>
        </button>
      </div>
      <button className={`${styles.videoSound} ${!muted ? styles.videoSoundHidden : ""}`} type="button" aria-label={`${muted ? "Unmute" : "Mute"} ${alt}`} aria-pressed={!muted} onClick={() => {
        const video = ref.current;
        if (!video) return;
        video.muted = !video.muted;
        setMuted(video.muted);
        if (!video.muted && !userPaused.current) playFromControl();
      }}>
        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
          <path d="m11 4-5 4H2v8h4l5 4V4Z" />
          {muted ? <path d="m16 9 6 6m0-6-6 6" /> : <path d="M16 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14" />}
        </svg>
        {muted ? "Unmute" : "Mute"}
      </button>
    </div>}
  </div>;
}
