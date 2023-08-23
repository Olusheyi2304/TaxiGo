import Booking from "@/components/Booking/Booking";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div>
          <Booking />
        </div>
        <div className="col-span-2 order-first md:order-last">Map</div>
      </div>
    </div>
  );
}
