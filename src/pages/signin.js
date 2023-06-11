import React from 'react'
import { SignIn } from '@clerk/nextjs'
import { useRouter } from 'next/router'

const Login = () => {
    const nav = useRouter()
    return (
        <div className='primary-bg h-fit min-h-screen pb-10 flex items-center xl:justify-between gap-8 pt-24 xl:pt-10 xl:px-32 relative xl:flex-row flex-col w-full px-24'>
            <div className='z-10 absolute top-5 left-5 flex items-center justify-center gap-2 cursor-pointer' onClick={() => nav.push('/')}>
                <img src="logo.svg" alt="logo" onClick={() => nav.push('/')} className=' h-16 w-auto' />
                
            </div>
            <div className='flex justify-start xl:pl-10 z-10'>
                <h1 className='flex flex-col'>
                    <span className='text-5xl text-white xl:text-[#383838] '>Trade</span>
                    <span className='text-9xl text-tertiary xl:text-slate-900 font-bold'>Hive</span>
                </h1>
            </div>
            <div className='xl:ml-64 mt-10 xl:mt-0 min-w-fit w-1/2 z-10'>
                <SignIn
                    appearance={{
                        elements: {
                            formButtonPrimary: 'bg-gradient-to-b from-secondary to-tertiary text-slate-600',
                            footerActionLink: 'text-tertiary',
                        }
                    }}
                    
                />
            </div>
            <div className='auth-bg h-full w-[70vw] absolute left-0 z-0 xl:block hidden'></div>
        </div>
    )
}

export default Login