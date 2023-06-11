import React from 'react';
import { BiWifi } from 'react-icons/bi';
import { FaCcMastercard } from 'react-icons/fa';
import { BsSim } from 'react-icons/bs';

const Payment = (props) => {
  return (
    <div className="h-fit md:h-screen w-full primary-bg flex flex-col items-center">
      <h3 className='absolute uppercase top-12 cursor-default tracking-[24px] text-secondary text-2xl'>
        Payment
      </h3>
      <div className='flex flex-col md:flex-row'>
        <div className="h-screen md:w-[70vw] primary-bg flex flex-col items-center justify-center">
          <div className='h-[70vh] flex flex-col items-center gap-4 px-5 pb-10'>
            <div className='w-full text-center text-white text-2xl mb-2'>Enter Card Details</div>
            <div className='w-fit glassmorphism rounded-lg py-5 px-8 flex flex-col gap-4'>
              <input
                type='text'
                className='input-field'
                placeholder='Card Number'
                maxLength={19}
                onChange={(e) => {
                  const value = e.target.value;
                  const formattedValue = value
                    .replace(/\s+/g, '') // Remove existing spaces
                    .replace(/(\d{4})/g, '$1 ') // Add space after every 4 digits
                    .trim(); // Remove leading/trailing spaces
                  e.target.value = formattedValue;
                }}
              />
              <div className='flex gap-4'>
                <div className='flex flex-col'>
                  <label>CVV</label>
                  <input
                    type='text'
                    className='py-1'
                    placeholder='669'
                    maxLength={4}
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor='expiryMonth' className='month'>Expiry Month</label>
                  <input
                    type='number'
                    id='expiryMonth'
                    className='py-1'
                    placeholder='MM'
                    min={1}
                    max={12}
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <label htmlFor='expiryYear' className='month'>Expiry Year</label>
                  <input
                    type='text'
                    id='expiryYear'
                    className='py-1'
                    placeholder='YYYY'
                    maxLength={4}
                  />
                </div>
              </div>
              <button className='pay-button hover:bg-green-700'>Pay Now</button>
              <button className='pay-button hover:bg-green-700'>Pay with Account Creds</button>
            </div>
          </div>
        </div>
        <div className="h-screen w-[100vw] px-4 md:px-0 md:w-[30vw] md:pr-16 pb-12 relative flex flex-col-reverse">
          <div className='primary-bg-rev h-[70vh] flex flex-col-reverse relative gap-10 px-5 pb-10 items-center'>
            <div className='absolute px-4 md:px-0 text-accent h-[60%] rounded-lg w-[70%] glassmorphism -top-32 flex flex-col pt-10 pb-5 gap-5 items-center'>
              <div className='flex text-[#929292] justify-between w-full px-10'>
                <BsSim className='text-2xl' />
                <FaCcMastercard className='text-2xl' />
              </div>
              <div className='flex flex-col justify-between h-full items-center'>
                <div className='text-white mt-5'>XXXX-XXXX-XXXX-9028</div>
                <div className='w-full text-center py-2 rounded-full font-bold text-black bg-yellow-200'>Trade Hive</div>
              </div>
            </div>
            <p className='text-accent'>Total: </p>
            <div className='w-full dotted-line'></div>
            <div className='flex gap-2'>
              <ul className='list-none text-accent grid gap-2'>
                <li>Company</li>
                <li>Order Number</li>
                <li>Number of stocks</li>
                <li>Price Per Stock</li>
              </ul>
              <ul className='list-none text-accent grid gap-2'>
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
              </ul>
              <ul className='list-none text-accent grid gap-2'>
                <li>-</li>
                <li>-</li>
                <li>-</li>
                <li>-</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;







