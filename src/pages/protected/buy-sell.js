import React from 'react'

const BuySell = () => {

  const holding = {
    'AAPL': 20,
    'GOOG': 18,
  }
 const handleSubmit=async()=>{
  const response=await fetch('http://localhost:3000/api/mongoDB/putUser',{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      email: "jayanti2919@gmail.com",
      holdings: holding,
    })
  })
  const data=await response.json()
  console.log(data)
 }
  return (
    <div onClick={(e)=>{
      e.preventDefault()
      handleSubmit()
    }}>BuySell</div>
  )
}

export default BuySell