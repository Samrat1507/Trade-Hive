import React from 'react'

const NewsCard = ({ data }) => {
    console.log(data)
    return (
        <div className='h-fit w-full rounded-lg px-6 py-5 gap-5 widgets flex flex-col md:flex-row '>

            <img src={data.image_url} alt="info" className='h-40 max-h-full w-72 drop-shadow-lg rounded-lg' />
            <div className='flex flex-col gap-2 '>

                <a href={data.url} target="_blank">
                    <span className='text-secondary text-lg font-semibold underline-offset-4 underline'>
                        {data.title}
                    </span>
                </a>
                <span className='text-accent text-justify text-sm'>
                    {data.description}
                </span>
            </div>

        </div>
    )
}

export default NewsCard