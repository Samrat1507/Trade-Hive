import React, { useEffect, useState } from "react";

const PortfolioHoldings = ({ holdings }) => {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    Object.entries(holdings).map(async ([key, value]) => {
      const response = await fetch(
        "/api/getCurrentPrice",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            symbol: key,
          }),
        }
      );
      const data = await response.json();
      if (data.price) {
        setPrices((prevPrices) => ({ ...prevPrices, [key]: data.price }));
      } else {
        // alert('An error occurred while fetching current prices')
      }
    });
  }, []);

  return (
    <div className="flex flex-col gap-3">
      {Object.entries(holdings).map(([key, value]) => (
        <div className="flex justify-between">
          <div key={key} className="text-accent flex gap-16 items-center">
            <span>{key} </span>
            <span>{value}</span>
            <span className="px-4">${prices[key]*value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioHoldings;
