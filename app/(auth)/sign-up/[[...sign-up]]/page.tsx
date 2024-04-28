import { SignUp as ClerkSignUp } from "@clerk/nextjs";

export default function SignUp() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <ClerkSignUp />
    </main>
  );
}
