import React from "react";
import StreamVideoProvider from "@/providers/stream-client-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YOOM — One platform to connect",
  description:
    "Yoom is the leader in modern enterprise video communications, with an easy, reliable cloud platform for video and audio conferencing, chat, and webinars across mobile, desktop, and room systems.",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
}
