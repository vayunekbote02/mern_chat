import { useContext } from "react";
import useConversation from "../../zustand/useConversation";
import { SocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useContext(SocketContext);
  const isSelected = selectedConversation?._id === conversation._id;
  const isOnline = onlineUsers.includes(conversation._id);
  return (
    <>
      <div
        className={`${
          isSelected && "bg-primary"
        } flex items-center gap-2 p-2 py-1 rounded cursor-pointer bg-accent hover:bg-primary`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline && "online"}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-3">
            <p className="font-bold text-accent-content">
              {conversation.fullName}
            </p>
          </div>
        </div>
      </div>

      {lastIdx && <div className="h-1 py-0 my-0 divider" />}
    </>
  );
};
export default Conversation;
