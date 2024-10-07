import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import { NameInput } from "../common/Name";

export const Join: React.FC = () => {
  const { ws } = useContext(RoomContext);
  const createRoom = () => {
    ws.emit("create-room");
  };
  return (
    <div className="flex flex-col bg-white gap-4">
      <NameInput />
      <button
        onClick={createRoom}
        className="bg-custom-gradient p-2 rounded-lg text-xl text-white hover:animate-pulse"
      >
        Start new meeting
      </button>
    </div>
  );
};
