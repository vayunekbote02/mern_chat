import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useContext(AuthContext);
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassname = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const messageColor = fromMe
    ? "bg-primary text-primary-content"
    : "bg-accent text-primary-content";
  const formattedTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassname}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble text-base-content pb-2 ${messageColor} ${shakeClass}`}
      >
        {message.message}
      </div>
      <div className="flex items-center gap-1 text-xs opacity-50 chat-footer text-base-content">
        {formattedTime}
      </div>
    </div>
  );
};
export default Message;
