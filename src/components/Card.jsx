import React from 'react'

const Card = (props) => {

  return (
    <div className='h-100 w-80 rounded-xl shadow-sm p-5 flex flex-col justify-between hover:shadow-lg transition'>
      <h3 className='flex justify-center text-3xl text-gray-800'>{props.title}</h3>
      <p className='mt-3 text-gray-600'>{props.content}</p>
      <div className='flex justify-center mt-4'>
        <button onClick={props.onDelete} className='bg-blue-600 text-white px-10 py-3 rounded-xl cursor-pointer hover:bg-blue-800 transition'>Delete</button>
      </div>
    </div>
  )
}

export default Card
