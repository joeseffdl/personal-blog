type FlowingTextProps = {
  message: string;
};

export default function FlowingText({ message }: FlowingTextProps) {
  return (
    <main className="flex h-20 flex-col items-center justify-between py-24 px-40 bg-white border-y-2 border-black">
      {message}
    </main>
  );
}
