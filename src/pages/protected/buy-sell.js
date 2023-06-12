import React from 'react'
import ProtectedNav from '../../../components/ProtectedNav'
import ProtectedSidebar from '../../../components/ProtectedSidebar'
import { useSnapshot } from 'valtio'
import state from '../state'
import Holdings from '../../../components/Holdings'
import ToBuy from '../../../components/ToBuy'

const BuySell = () => {
  const snap = useSnapshot(state)
  console.log(state)

  return (
    <div className='primary-bg h-fit min-h-screen '>
      <ProtectedNav/>
      <ProtectedSidebar active="Buy and Sell" />

      <div className={`${state.sidebar ? 'md:pl-[32vw] xl:pl-[30vw]' : 'md:pl-[5vw]'} pl-5 mt-10`}>
        <h1 className='text-5xl text-secondary font-semibold '>
          Buy and Sell
        </h1>

        <div className='mt-20 pr-5 flex gap-10'>
          <div className='h-fit widgets w-fit md:min-w-[35vw] min-w-full flex flex-col gap-5 pr-10 pl-4 rounded-xl py-5'>
            <h2 className='text-2xl text-accent font-medium'>Current Holdings</h2>
            <div>
              <div className='flex gap-10 text-accent'>
                <span>Company</span>
                <span>Quantity</span>
              </div>
              <div className='w-full h-[1px] bg-secondary mt-2'>
              </div>

              <div className='mt-4'>
                {
                  state.user.holdings ? (
                    <Holdings holdings={state.user.holdings}/>
                  ) : (<span className='text-accent'>No Holdings were Found</span>)
                }
              </div>
            </div>
          </div>
          <ToBuy/>
        </div>
      </div>
    </div>
  )
}

export default BuySell