import React, { useState } from "react";
import { useRouter } from "next/router";

const Holdings = ({ holdings }) => {
  const router = useRouter();
  const [selectedShares, setSelectedShares] = useState(1);

  const handleSell = (e) => {
    e.preventDefault();
    const confirmed = window.confirm(
      `Are you sure you want to sell ${selectedShares} shares?`
    );
    if (confirmed) {
      // Perform the necessary logic to update the value in MongoDB user schema here
      // You can use an API call or any other method to communicate with your backend

      // After the update is successful, you can redirect the user to the Payment page
      router.push("/protected");
    }
  };

  const handleDecrease = () => {
    setSelectedShares((prevShares) => Math.max(prevShares - 1, 1));
  };

  const handleIncrease = (maxShares) => {
    setSelectedShares((prevShares) => Math.min(prevShares + 1, maxShares));
  };

  return (
    <div className="flex flex-col gap-3">
      {Object.entries(holdings).map(([key, value]) => (
        <div className="flex justify-between" key={key}>
          <div className="text-accent flex gap-16 items-center">
            <span>{key}</span>
            <span>{value}</span>
          </div>
          <div>
            <button
              className="button-bg text-primary px-3 py-1 rounded-lg"
              onClick={handleDecrease}
              disabled={selectedShares === 1}
            >
              -
            </button>
            <span className="px-2 text-white">{selectedShares}</span>
            <button
              className="button-bg text-primary px-3 py-1 rounded-lg"
              onClick={() => handleIncrease(value)}
              disabled={selectedShares === value}
            >
              +
            </button>
          </div>
          <button
            className="button-bg text-primary px-3 py-1 rounded-lg"
            onClick={handleSell}
          >
            Sell
          </button>
        </div>
      ))}
    </div>
  );
};

export default Holdings;