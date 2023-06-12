import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
const WatchList = () => {
  const [symbol, setSymbol] = useState("");
  const [price, setprice] = useState("");

  const findPrice = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/getCurrentPrice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        symbol: symbol,
      }),
    });
    const data = await response.json();
    console.log(data);
    setprice(data.price);
  };
  return (
    <div className="widgets w-full h-fit min-h-[35vh] px-10 pb-10 rounded-xl">
      <div className="flex flex-col gap-5">
        <h2 className="text-secondary text-2xl mt-5 font-semibold">
          Watch List
        </h2>
        <div >
          <form action="" className="flex text-secondary text-xl gap-3 items-center">
            <input
              type="text"
              placeholder="Enter a symbol"
              className="bg-[#313638] px-2 py-1 rounded-md outline-none text-accent w-full"
              onChange={(e) => {
                setSymbol(e.target.value);
              }}
            />
            <button
              type="submit"
              onClick={(e) => {
                findPrice(e);
              }}
            >
              <BiSearchAlt className="cursor-pointer" />
            </button>
          </form>
        </div>
        <div className="text-accent">
          <span className="font-medium">Price: </span>
          {price === "" ? (
            <span>Enter a symbol to see price</span>
          ) : (
            <span>${price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchList;
