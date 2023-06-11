import React from "react";
import { useRouter } from "next/router";

const Holdings = ({ holdings }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-3">
      {Object.entries(holdings).map(([key, value]) => (
        <div className="flex justify-between">
          <div key={key} className="text-accent flex gap-16 items-center">
            <span>{key} </span>
            <span>{value}</span>
          </div>
          <button
            className="button-bg text-primary px-3 py-1 rounded-lg"
            onClick={(e) => {
              e.preventDefault();
              router.push("/protected/Payment");
            }}
          >
            Sell
          </button>
        </div>
      ))}
    </div>
  );
};

export default Holdings;
