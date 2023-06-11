import React from 'react'
import ProtectedNav from '../../../components/ProtectedNav'
import ProtectedSidebar from '../../../components/ProtectedSidebar'
import { useSnapshot } from 'valtio'
import state from '../state'
import Holdings from '../../../components/Holdings'

const BuySell = () => {
  const snap = useSnapshot(state)

  return (
    <div className='primary-bg h-fit min-h-screen '>
      <ProtectedNav/>
      <ProtectedSidebar active="Buy and Sell" />

      <div className={`${state.sidebar ? 'md:pl-[30vw]' : 'md:pl-[5vw]'}`}>
        <h1 className='text-5xl text-secondary font-semibold '>
          Buy and Sell
        </h1>

        <div className='mt-20'>
          <div className='h-fit widgets w-fit flex flex-col gap-5 pr-10 pl-4 rounded-xl py-5'>
            <h2 className='text-2xl text-accent font-medium'>Current Holdings</h2>
            <div>
              <div className='flex gap-10 text-accent'>
                <span>Company</span>
                <span>Quantity</span>
              </div>
              <div className='w-full h-[1px] bg-secondary'>
              </div>

              <div>
                {
                  state.user.holdings ? (
                    <Holdings />
                  ) : (<span className='text-accent'>No Holdings were Found</span>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuySell