import Gallery from "./Gallery";
import TripDescription from "./TripDescription";

export default function Biyahe() {
  return (
    <main className="flex h-screen items-center justify-around px-40 bg-[#FFEBCD] overflow-hidden">
      <Gallery />
      <TripDescription />
    </main>
  );
}
