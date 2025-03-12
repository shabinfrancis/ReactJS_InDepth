import React from 'react'
import { useParams } from 'react-router'

const User = () => {
    const { id } = useParams();
  return (
    <div className='text-center text-3xl text-white bg-gray-700 p-4'>User: {id}</div>
  )
}

export default User