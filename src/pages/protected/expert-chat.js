import React from "react";
import state from "../state";
import { useSnapshot } from "valtio";
import ProtectedNav from "../../../components/ProtectedNav";
import ProtectedSidebar from "../../../components/ProtectedSidebar";
import Image from "next/image";
import stock4 from "../../../public/stock4.jpg";
import { ChatEngine } from "react-chat-engine";

const ExpertChat = () => {
  const snap = useSnapshot(state);

  const handleBuy = async () => {
    if (state.user.credits < 50) {
      alert(
        "Insufficient Credits! Kindly go to Your Holdings to add more credits"
      );
    } else {
      const response = await fetch(
        "http://localhost:3000/api/mongoDB/buyExpert",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: state.user.email,
          }),
        }
      );

      const data = await response.json();
      alert(data.message);
    }
  };

  return (
    <div className="h-fit min-h-screen primary-bg">
      <ProtectedNav />
      <ProtectedSidebar active="Chat with Expert" />
      {state.user.expertBought ? (
        <div className="widgets">
          <ChatEngine
            projectID="29505e95-f9f5-4bf6-86ab-c8a3b3758406"
            userName={state.user.email}
            userSecret={state.user._id}
          />
        </div>
      ) : (
        <div
          className={`${
            state.sidebar ? "md:pl-[32vw] xl:pl-[30vw]" : "pl-10"
          } pr-10`}
        >
          <div className="widgets px-5 rounded-lg py-5 flex flex-col gap-10 mt-20 ">
            <h1 className="text-secondary text-2xl font-bold">Buy a Session</h1>
            <div className="flex xl:justify-between">
              <div className="flex flex-col gap-5">
                <span className="max-w-sm text-accent text-lg">
                  Chat with an expert and gain valuable insights now!
                </span>
                <div className="glassmorphism flex flex-col w-full pr-20 pl-5 py-6 rounded-lg gap-5">
                  <ul className="text-accent font-bold flex flex-col gap-1">
                    <li>Amount: 50 credits</li>
                    <li>Validity: 1 month</li>
                    <li>Sessions: Unlimited</li>
                  </ul>
                  <button
                    className="button-bg rounded-xl px-10 w-fit py-2"
                    onClick={(e) => {
                      e.preventDefault();
                      handleBuy();
                    }}
                  >
                    Pay
                  </button>
                </div>
              </div>
              <Image
                src={stock4}
                alt="Expert Chat"
                className="h-64 object-cover hidden md:block md:ml-5 w-48 xl:w-96 rounded-lg drop-shadow-md"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpertChat;
