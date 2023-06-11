import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import { useSnapshot } from 'valtio'
import state from '../state'
import { useEffect } from 'react'
import { clerkClient, getAuth, buildClerkProps } from "@clerk/nextjs/server";
import ProtectedNav from '../../../components/ProtectedNav'
import ProtectedSidebar from '../../../components/ProtectedSidebar'

const GlobalChat = (props) => {
  
  const snap = useSnapshot(state)
  state.username = props.__clerk_ssr_state.user.firstName
  state.secret = props.__clerk_ssr_state.user.id
  useEffect(()=>{
    const fun=async()=>{
      const body={
        "username":state.username,
        "secret":state.secret
      }
      const response=await fetch(`https://api.chatengine.io/users/`,{
        method:"PUT",
        headers:{
          'PRIVATE-KEY':process.env.NEXT_PUBLIC_CHAT_PRIVATE_KEY,
          'Content-Type':'application/json'
        },
        body:JSON.stringify(body),
      })
      const data=await response.json()
    }
    fun()
  },[])
  return (
    
    <div className='bg-black h-screen'>
      <ProtectedNav/>
      <ProtectedSidebar active="Global Chat"/>
      <div className='xl:pl-[30vw] md:pl-[32vw] md:pr-10 ' style={{
        fontFamily: 'sans-serif'
      }}>
      <ChatEngine
			projectID='29505e95-f9f5-4bf6-86ab-c8a3b3758406'
			userName={state.username}
			userSecret={state.secret}
		  />
      </div>
    </div>
  )
}

export const getServerSideProps = async ctx => {
  const { userId } = getAuth(ctx.req)
  if (!userId) {
    return
  }
  const user = userId ? await clerkClient.users.getUser(userId) : undefined;

  
  return { props: { ...buildClerkProps(ctx.req, { user }) } }
}


export default GlobalChat