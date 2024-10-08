import React, { useState, useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import { BsMic } from "react-icons/bs";
import { BsMicMute } from "react-icons/bs";

export const ToggleButton: React.FC = () => {
  const { stream } = useContext(RoomContext);
  const [isVideoOn, setIsVideoOn] = useState(true); // Video state
  const [isMicOn, setIsMicOn] = useState(true); // Mic state

  const toggleVideo = () => {
    if (stream) {
      const videoTrack = stream
        .getTracks()
        .find((track) => track.kind === "video");
      if (videoTrack) {
        videoTrack.enabled = !videoTrack.enabled;
        setIsVideoOn(videoTrack.enabled);
      }
    }
  };

  const toggleMic = () => {
    if (stream) {
      const audioTrack = stream
        .getTracks()
        .find((track) => track.kind === "audio");
      if (audioTrack) {
        audioTrack.enabled = !audioTrack.enabled;
        setIsMicOn(audioTrack.enabled);
      }
    }
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={toggleVideo}
        className={`p-4 rounded-full text-xl text-white outline-none ${
          isVideoOn ? "bg-blue-400" : "bg-red-600"
        }`}
      >
        {isVideoOn ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 0 1-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 0 0-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409"
            />
          </svg>
        )}
      </button>
      <button
        onClick={toggleMic}
        className={`p-4 rounded-full text-xl text-white outline-none ${
          isMicOn ? "bg-blue-400" : "bg-red-600"
        }`}
      >
        {isMicOn ? (
          <BsMic className="h-6 w-6" />
        ) : (
          <BsMicMute className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};
