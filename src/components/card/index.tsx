import React from 'react'

interface Data {
   heading: string,
   description: string,
   status: string,
   id: number
}

interface DataItems {
    data : Data[],
    title: string
}

const Card = ({data, title}:DataItems) => {
  const renderData =(item: Data,index: number)=>{
   return(
    <div className='bg-white m-2 flex flex-col '>
    <h1>{item.heading}</h1>
    <p>{item.description}</p>
    <p>{item.status}</p>
    <p>{item.id}</p>
    </div>
   )
  }

  return (
    <div className='flex flex-col'>
    <h1>{title}</h1>
    <div>
       { data.map(renderData)}
    </div>
    </div>
  )
}

export default Card