"use client";

import tokenProvider from "@/actions/stream.actions";
import Loader from "@/components/loader";
import { useUser } from "@clerk/nextjs";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

export default function StreamVideoProvider({ children }: { children: React.ReactNode }) {
  const { user, isLoaded } = useUser();
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();

  useEffect(() => {
    if (!isLoaded || !user) return;
    if (!apiKey) throw new Error("Stream API key is not set");

    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user?.id,
        name: user?.username || user?.id,
        image: user?.imageUrl,
      },
      tokenProvider,
    });

    setVideoClient(client);
  }, [user, isLoaded]);

  if (!videoClient) return <Loader />;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
}
