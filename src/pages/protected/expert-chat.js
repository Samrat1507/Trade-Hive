import React, { useEffect } from "react";
import state from "../state";
import { useSnapshot } from "valtio";
import ProtectedNav from "../../../components/ProtectedNav";
import ProtectedSidebar from "../../../components/ProtectedSidebar";
import Image from "next/image";
import stock4 from "../../../public/stock4.jpg";
import { ChatEngine } from "react-chat-engine";
import { clerkClient, getAuth, buildClerkProps } from "@clerk/nextjs/server";

const ExpertChat = (props) => {
  const snap = useSnapshot(state);
  state.username = props.__clerk_ssr_state.user.firstName
  state.secret = props.__clerk_ssr_state.user.id
  useEffect(() => {
    const fun = async () => {
      const body = {
        "username": state.username,
        "secret": state.secret
      }
      console.log(body)
      const response = await fetch(`https://api.chatengine.io/users/`, {
        method: "PUT",
        headers: {
          'PRIVATE-KEY': process.env.NEXT_PUBLIC_CHAT_EXPERT_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
      })
      const data = await response.json()
    }
    if (state.user.expertBought === true)
      fun()
  }, [])
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
        <div className={`${state.sidebar ? "md:pl-[32vw] xl:pl-[30vw]" : "pl-10"
      } pr-10`}>
          <ChatEngine
            projectID="aa629215-3c17-4eb8-b506-7f07b4ca0d6e"
            userName={state.username}
            userSecret={state.secret}
          />
        </div>
      ) : (
        <div
          className={`${state.sidebar ? "md:pl-[32vw] xl:pl-[30vw]" : "pl-10"
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
          <p className="text-white font-bold text-sm mt-4">Ps: If the chat doesnot load after payment. Go to your holdings in dashboard and click expert chat again.</p>
        </div>
      )}
    </div>
  );
};

export const getServerSideProps = async ctx => {
  const { userId } = getAuth(ctx.req)
  if (!userId) {
    return
  }
  const user = userId ? await clerkClient.users.getUser(userId) : undefined;


  return { props: { ...buildClerkProps(ctx.req, { user }) } }
}
export default ExpertChat;
