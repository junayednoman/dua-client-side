"use client";
import { useState, useRef } from "react";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src="sound.mp3" />
      <button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default AudioPlayer;
