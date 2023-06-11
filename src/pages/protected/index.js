import React, { useEffect, useState } from "react";
import ProtectedNav from "../../../components/ProtectedNav";
import ProtectedSidebar from "../../../components/ProtectedSidebar";
import { clerkClient, getAuth, buildClerkProps } from "@clerk/nextjs/server";
import Link from "next/link";
import { useSnapshot } from "valtio";
import state from "../state";

const Protected = (props) => {
  const userEmail = props.__clerk_ssr_state.user.emailAddresses[0].emailAddress
  const snap = useSnapshot(state)
  useEffect(() => {
    const fun = async () => {
      const response = await fetch('http://localhost:3000/api/mongoDB/putUser', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: userEmail
        })
      })
      const data = await response.json()
      console.log(data)
    }
    fun()
  },[])

  useEffect(() => {
    const getUserDetails = async () => {
      const response = await fetch("http://localhost:3000/api/mongoDB/fetchUser", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
        })
      })
      const data = await response.json();
      console.log(data)
      state.user = data
    }
    getUserDetails()
  }, [])

  return (
    <div className="primary-bg h-screen">
      <ProtectedNav />
      <ProtectedSidebar active="Your Holdings" />
      <div className="md:ml-[32vw] ml-5">
        <div className="portfolio-bg rounded-xl px-10 py-5 mr-5 drop-shadow-md">
          <div className="flex justify-between">
            <div className="py-5">
              <h2 className="text-accent font-medium">Your Net Profit</h2>
              <span className="text-[#FBF5A5] md:text-5xl text-xl font-semibold">Rs. 43,300.50</span>
            </div>
            <div className="py-5">
              <h2 className="text-accent font-medium">Account Balance</h2>
              {state.user ? (
                <span className="text-[#9DE796] md:text-5xl text-xl font-semibold">{state.user.credits} creds</span>
              ) : (
                <span></span>
              )}
            </div>
          </div>
        </div>
      </div>
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
export default Protected;