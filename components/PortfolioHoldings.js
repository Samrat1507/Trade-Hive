import React from "react";
import { useRouter } from "next/router";

const PortfolioHoldings = ({ holdings }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-3">
      {Object.entries(holdings).map(([key, value]) => (
        <div className="flex justify-between">
          <div key={key} className="text-accent flex gap-16 items-center">
            <span>{key} </span>
            <span>{value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioHoldings;
