import { useState } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const [noChatSelected, setNoChatSelected] = useState(false);
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <>
        {/* Header */}
        {noChatSelected ? (
          <NoChatSelected />
        ) : (
          <>
            <div className="bg-primary bg-opacity-70 px-4 py-2 mb-2">
              <span className="label-text text-primary-content">To:</span>{" "}
              <span className="text-primary-content font-bold">John doe</span>
            </div>

            <Messages />
            <MessageInput />
          </>
        )}
        {/* <NoChatSelected /> */}
      </>
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 John Doe ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
