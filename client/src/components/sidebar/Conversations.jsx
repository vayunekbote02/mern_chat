import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="flex flex-col h-full gap-2 py-2 overflow-auto">
      {conversations?.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading ? (
        <span className="mx-auto loading loading-spinner"></span>
      ) : null}
    </div>
  );
};
export default Conversations;
