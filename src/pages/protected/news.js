import React, { useEffect,useState } from 'react'
import ProtectedNav from '../../../components/ProtectedNav'
import ProtectedSidebar from '../../../components/ProtectedSidebar'
import NewsCard from '../../../components/NewsCard'

const News = ({newsData}) => {
  const data=newsData.data
  return (
    <div className='primary-bg h-fit min-h-screen pl-10 md:pl-0 relative z-0 pr-10 pb-10 w-full'>
      <ProtectedNav />
      <ProtectedSidebar active="News" />
      <div className='md:ml-[32vw] xl:ml-[30vw]'>

        <h2 className='text-tertiary relative text-[48px] cursor-default tracking-[2px] font-bold'>Latest Updates</h2>
        <div className='flex flex-col gap-10 mt-10'>
          {
            data.map((d,index)=>(
              <NewsCard data={d} key={index}/>
            ))
          }
          
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const response = await fetch(`https://api.marketaux.com/v1/news/all?exchanges=NSE,BSE&countries=in&filter_entities=true&language=en&api_token=${process.env.NEXT_PUBLIC_NEWS_KEY}`)
    const newsData = await response.json();
    
    return {
      props: {
        newsData,
      },
    };
  } catch (error) {
    console.error('Error fetching news data:', error);
    return {
      props: {
        newsData: [],
      },
    };
  }
}
export default News