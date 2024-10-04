import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";
import { VideoPlayer } from "../components/VideoPlayer";
import { ShareScreenButton } from "../components/ShareScreenButton";
import { ChatButton } from "../components/ChatButton";
import { PeerState } from "../reducers/peerReducer";
import { CanvasButton } from "../components/CanvasButton";

export const Room = () => {
  const { id } = useParams();
  const {
    ws,
    me,
    userName,
    stream,
    peers,
    shareScreen,
    screenSharingId,
    setRoomId,
  } = useContext(RoomContext);

  useEffect(() => {
    if (me && stream)
      ws.emit("join-room", { roomId: id, peerId: me._id, userName });
  }, [id, me, ws, stream]);

  useEffect(() => {
    setRoomId(id);
  }, [id, setRoomId]);

  console.log({ screenSharingId });

  const screenSharingVideo =
    screenSharingId === me?.id ? stream : peers[screenSharingId]?.stream;

  const { [screenSharingId]: sharing, ...peersToShow } = peers;

  return (
    <div className="h-screen pb-24 overflow-hidden">
      <div className="bg-blue-500 p-4 text-white">
        <div>Room id :- {id}</div>
      </div>
      <div className="grid grid-cols-12 h-full overflow-hidden">
        <div className="col-span-full h-full flex flex-col overflow-hidden">
          <div className="flex grow h-full w-full overflow-hidden">
            {screenSharingVideo && (
              <div className="w-4/5 pr-4 overflow-hidden">
                <VideoPlayer stream={screenSharingVideo} />
              </div>
            )}
            <div
              className={`grid gap-4 ${
                screenSharingVideo ? "w-1/5 grid-cols-1" : "grid-cols-4"
              } overflow-y-auto`}
            >
              {screenSharingId !== me?.id && (
                <div>
                  <VideoPlayer stream={stream} />
                </div>
              )}

              {Object.values(peersToShow as PeerState)
                .filter((peer) => !!peer.stream)
                .map((peer) => (
                  <div>
                    <VideoPlayer stream={peer.stream} />
                    <div>{peer.userName}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-24 fixed bottom-0 p-4 w-full flex justify-center items-center border-t-2 bg-white gap-2">
        <ShareScreenButton onClick={shareScreen} />
        <ChatButton />
        <CanvasButton />
      </div>
    </div>
  );
};
