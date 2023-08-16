export default function TableDescription({ totalSum }: { totalSum: number }) {
  return (
    <div className="w-full flex items-center justify-center">
      {((totalSum / 16250) * 100).toFixed(2)}%
    </div>
  );
}
