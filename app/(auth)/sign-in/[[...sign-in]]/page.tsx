import { SignIn as ClerkSignIn } from "@clerk/nextjs";

export default function SignIn() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <ClerkSignIn />
    </main>
  );
}
