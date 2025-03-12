import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'


const Github = () => {
const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/shabinfrancis')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // }, [])
    return (
        <div className='text-center text-3xl text-white bg-gray-700 p-4'>
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/shabinfrancis')
    return res.json()
    
}