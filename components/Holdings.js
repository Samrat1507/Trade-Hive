import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSnapshot } from "valtio";
import state from "@/pages/state";

const Holdings = ({ holdings }) => {
  const router = useRouter();
  const [selectedShares, setSelectedShares] = useState(1);
  const [prices, setPrices] = useState({});
  const snap = useSnapshot(state)
  useEffect(() => {
    Object.entries(holdings).map(async ([key, value]) => {
      const response = await fetch(
        "http://localhost:3000/api/getCurrentPrice",
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

  const handleSell = async(e, key, value) => {
    e.preventDefault();
    const confirmed = window.confirm(
      `Are you sure you want to sell ${selectedShares} shares?`
    );
    if (confirmed) {
      const price = parseFloat(prices[key]) * parseFloat(value)
      const response = await fetch('/api/mongoDB/updateBalance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: state.user.email,
          credit: 200,
          stock: key,
          qty: value,
        })
      })
      const data = await response.json()
      alert(data.message)
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
            onClick={(e)=>{handleSell(e, key, selectedShares)}}
          >
            Sell
          </button>
        </div>
      ))}
    </div>
  );
};

export default Holdings;