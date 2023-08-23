import React from "react";
import AutocompleteAddress from "./AutocompleteAddress";
import Cars from "./Cars";

function Booking() {
  return (
    <div className="p-5">
      <h2 className="text-[20px] font-semibold">Booking</h2>
      <div className="border-[1px] p-3 rounded-md h-[70vh]">
        <AutocompleteAddress />
        <Cars />
      </div>
    </div>
  );
}

export default Booking;
