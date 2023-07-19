export default function LandingPage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24 relative">
      <div className="h-full w-1/5 absolute top-0 left-[20%] -skew-x-12 bg-blue-300" />
      <div className="h-full w-1/5 absolute top-0 right-[20%] -skew-x-12 bg-blue-700" />
      <div className="text-6xl font-bold z-10 text-center uppercase">
        <div>🚲 Biyahe</div>
        <div>ni</div>
        <div>Zeph 🚲</div>
      </div>
    </main>
  );
}
