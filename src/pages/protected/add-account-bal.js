import React, { useState } from "react";
import { BiWifi } from "react-icons/bi";
import { FaCcMastercard } from "react-icons/fa";
import { BsSim } from "react-icons/bs";
import state from "../../../state";
import { useSnapshot } from "valtio";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";

const AddAccountBalance = () => {
  const [amt, setamt] = useState("");
  const snap = useSnapshot(state);
  const router = useRouter();

  console.log(state.user.email);
  const handleBalanceUpdate = async () => {
    const response = await fetch(
      "/api/mongoDB/updateBalance",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: state.user.email,
          credit: amt,
        }),
      }
    );

    const data = await response.json();
    alert(data.message);
  };
  return (
    <div className="h-fit md:min-h-screen w-full primary-bg flex flex-col items-center">
      <Image
        src={logo}
        alt="logo"
        className="absolute top-5 left-5 h-8 w-8 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          router.push("/protected");
        }}
      />
      <h3 className="md:absolute relative uppercase top-12 cursor-default tracking-[24px] text-secondary text-2xl">
        Payment
      </h3>
      <div className="flex flex-col md:flex-row">
        <div className="h-screen w-full md:w-[70vw] primary-bg-mobile md:primary-bg px-5 md:px-0 flex flex-col items-center justify-center">
          <div className='h-fit flex flex-col items-center gap-4 md:px-5  md:mt-24'>
            <div className='w-full widgets rounded-lg pt-12 pb-16 px-3 md:px-8 flex flex-col gap-4 h-full'>
            <div className=' text-center uppercase text-xl mb-2 tracking-[12px] drop-shadow-md text-secondary'>Enter Card Details</div>
              <input
                type="text"
                className="input-field px-2"
                placeholder="Card Number"
                maxLength={19}
                onChange={(e) => {
                  const value = e.target.value;
                  const formattedValue = value
                    .replace(/\s+/g, "") // Remove existing spaces
                    .replace(/(\d{4})/g, "$1 ") // Add space after every 4 digits
                    .trim(); // Remove leading/trailing spaces
                  e.target.value = formattedValue;
                }}
              />
              <div className="flex gap-4 flex-col md:flex-row">
                <div className="flex flex-col gap-1">
                  <label className="text-accent month">CVV</label>
                  <input
                    type="text"
                    className="py-2 rounded-md px-2"
                    placeholder="669"
                    maxLength={4}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="expiryMonth" className="month text-accent">
                    Expiry Month
                  </label>
                  <input
                    type="number"
                    id="expiryMonth"
                    className="py-2 rounded-md px-2"
                    placeholder="MM"
                    min={1}
                    max={12}
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="expiryYear" className="month text-accent">
                    Expiry Year
                  </label>
                  <input
                    type="text"
                    id="expiryYear"
                    className="py-2 rounded-md px-2"
                    placeholder="YYYY"
                    maxLength={4}
                    required
                  />
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleBalanceUpdate();
                }}
                className="bg-yellow-200 hover:bg-yellow-100 mt-6 py-3 font-medium text-primary rounded-xl"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
        <div className="h-screen w-[100vw] mt-7 px-4 md:px-0 md:w-[30vw] md:pr-16 pb-12 relative flex flex-col-reverse">
          <div className="primary-bg-rev h-[70vh] flex flex-col-reverse relative gap-10 px-5 pb-10 items-center">
            <div className="absolute px-4  md:px-0 text-accent h-[60%] rounded-lg w-[70%] glassmorphism -top-32 flex flex-col pt-10 pb-5 gap-5 items-center">
              <div className="flex text-[#929292] justify-between w-full px-10">
                <BsSim className="text-2xl" />
                <FaCcMastercard className="text-2xl" />
              </div>
              <div className="flex flex-col justify-between h-full items-center">
                <div className="text-white mt-5">XXXX-XXXX-XXXX-9028</div>
                <div className="w-full text-center py-2 rounded-full font-bold text-black bg-yellow-200">
                  Trade Hive
                </div>
              </div>
            </div>
            <p className="text-accent">Total: {amt}</p>
            <div className="w-full dotted-line"></div>
            <span className="text-[#919191] font-medium">
              1 credit is equivalent to Rs. 1.00/-
            </span>
            <div className="flex gap-2">
              <ul className="list-none text-accent grid gap-2">
                <li>Company</li>
                <li>Credits</li>
              </ul>
              <ul className="list-none text-accent grid gap-2">
                <li>:</li>
                <li>:</li>
              </ul>
              <ul className="list-none text-accent grid gap-2">
                <li>Trade Hive</li>
                <li>
                  <input
                    type="text"
                    className="bg-[#292a2d] outline-none px-2 py-1 rounded-xl w-32"
                    onChange={(e) => {
                      setamt(e.target.value);
                    }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAccountBalance;
