export default function Meeting({ params: { id } }: { params: { id: string } }) {
  return (
    <div className="h-screen w-full">
      <h1>Meeting Room: #{id}</h1>
    </div>
  );
}
