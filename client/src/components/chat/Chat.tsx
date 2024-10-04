import React, { useContext, useEffect, useRef } from "react";
import { ChatBubble } from "./ChatBubble";
import { ChatInput } from "./ChatInput";
import { IMessage } from "../../type/chat";
import { RoomContext } from "../../context/RoomContext";

export const Chat: React.FC = ({}) => {
  const { chat } = useContext(RoomContext);
  const chatScrollUp = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatScrollUp.current) {
      chatScrollUp.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat.messages]);

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        {chat.messages.map((message: IMessage) => (
          <ChatBubble message={message} />
        ))}
        <div ref={chatScrollUp}></div>
      </div>
      <div className="pb-10">
        <ChatInput />
      </div>
    </div>
  );
};
