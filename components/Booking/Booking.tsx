import React from "react";
import AutocompleteAddress from "./AutocompleteAddress";
import Cars from "./Cars";
import Cards from "./Cards";

function Booking() {
  return (
    <div className="p-5">
      <h2 className="text-[20px] font-semibold">Booking</h2>
      <div className="border-[1px] p-3 rounded-md lg:h-[78vh] sm:h-[50vh] md:h-[57vh]">
        <AutocompleteAddress />
        <Cars />
        <Cards />

        <button className="w-full bg-yellow-400 p-1 rounded-md mt-4">
          Book
        </button>
      </div>
    </div>
  );
}

export default Booking;
