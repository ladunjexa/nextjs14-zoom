import React from "react";
import StreamVideoProvider from "@/providers/stream-client-provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
}
