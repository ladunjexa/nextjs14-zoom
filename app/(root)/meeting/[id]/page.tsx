"use client";

import useGetCallById from "@/hooks/use-get-call-by-id";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import Loader from "@/components/loader";
import { useState } from "react";
import MeetingSetup from "@/components/meeting-setup";

export default function Meeting({ params: { id } }: { params: { id: string } }) {
  const { user, isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(id);

  if (!isLoaded || isCallLoading) return <Loader />;

  return (
    <div className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <h1>Meeting Room</h1>
          )}
        </StreamTheme>
      </StreamCall>
    </div>
  );
}
