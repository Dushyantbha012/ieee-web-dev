"use client";
import SideBar from "@/components/chat/sidebar";
import CreateChatModal from "@/components/modals/createChat";
import React, { useState } from "react";
interface Chat {
  id: string; // Ensure this matches your schema
  createdAt: Date;
  name: String;
  // Add any other fields you need from your Chat model
}

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [chats, setChats] = useState<Chat[]>([]);
  return (
    <div>
      <CreateChatModal chats={chats} setChats={setChats} />
      <div className="flex">
        <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
          <SideBar chats={chats} setChats={setChats} />
        </div>
        {/* clientprovider */}
        <div className="bg-[#343541] flex-1">{children}</div>
      </div>
    </div>
  );
}
