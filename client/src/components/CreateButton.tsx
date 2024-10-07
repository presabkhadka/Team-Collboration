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
        className="bg-custom-gradient p-2 rounded-lg text-xl border-2 text-white hover:border-red-500"
      >
        Start new meeting
      </button>
    </div>
  );
};
