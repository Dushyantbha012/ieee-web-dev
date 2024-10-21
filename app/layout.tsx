import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import CreateChatModal from "@/components/modals/createChat";
import ShowCitations from "@/components/modals/showCitations";
const font = Urbanist({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "AIQueryHub",
  description: "Your AI law assistant",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${font.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
        >
          <ShowCitations />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
