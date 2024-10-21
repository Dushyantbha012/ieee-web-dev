"use client";
import Chat from "@/components/chat/chat";
import ChatInput from "@/components/chat/chat-input";
import { useSession } from "@clerk/nextjs";
// import { useChat } from "ai/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { stringify } from "querystring";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import logo from "@/public/logo.png";
import ReactMarkdown from "react-markdown";
type Props = {
  params: {
    id: string;
  };
};

type Message = {
  id: string;
  content: string;
  role: string;
  createdAt: string;
  citations: any[];
};

const ChatPage = ({ params: { id } }: Props) => {
  const { session } = useSession();
  const [messages, setMessages] = useState<Message[]>([]);
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat chatId={id} messages={messages} setMessages={setMessages} />
      <ChatInput pdfId={id} messages={messages} setMessages={setMessages} />
    </div>
  );
};

export default ChatPage;
