"use client";
import { UserButton, useSession } from "@clerk/nextjs";
import NewChat from "./newchat";
import ChatRow from "./chatrow";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

// Define the Chat interface
interface Chat {
  id: string; // Ensure this matches your schema
  createdAt: Date;
  name: String;
  // Add any other fields you need from your Chat model
}
//const [chats, setChats] = useState<Chat[]>([]);
const SideBar = ({ chats, setChats }: { chats: Chat[]; setChats: any }) => {
  // Type the state as an array of Chat
  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: "w-20 h-20", // Custom width and height
      userButtonPopoverCard: "bg-blue-100",
      userButtonPopoverActionButton: "text-black", // Custom text color for action buttons
    },
  };

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get("/api/chat");
        setChats(response.data);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    fetchChats();
  }, []); // Empty dependency array to run only on component mount
  const handleChatDeleted = (id: string) => {
    setChats((prevChats: any) =>
      prevChats.filter((chat: any) => chat.id !== id)
    );
  };
  return (
    <div className="p-2 flex flex-col h-screen ">
      <div className="flex-1">
        <div>
          <NewChat />
          {chats.map((chat) => (
            <ChatRow
              key={chat.id}
              id={chat.id}
              onChatDeleted={handleChatDeleted}
              name={chat.name}
            />
          ))}
        </div>
      </div>
      <div className="mx-auto pb-10 hover:opacity-50">
        <UserButton appearance={userButtonAppearance} />
      </div>
    </div>
  );
};

export default SideBar;
