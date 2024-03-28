import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect } from "react";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      <>
        {/* Header */}
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <div className="px-4 py-2 mb-2 bg-primary bg-opacity-70">
              <span className="label-text text-primary-content">To:</span>{" "}
              <span className="font-bold text-primary-content">
                {selectedConversation.fullName}
              </span>
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
  const { authUser } = useContext(AuthContext);
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex flex-col items-center gap-2 px-4 font-semibold text-center text-base-content sm:text-lg md:text-xl">
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl text-center md:text-6xl" />
      </div>
    </div>
  );
};
