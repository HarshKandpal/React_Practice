import React,{useEffect,useState} from "react";
import {useLoaderData} from 'react-router-dom'
 function Github(){
    // const data=useLoaderData()
    const [data, setData]= useState([])
    useEffect(()=>{
         fetch('https://api.github.com/users/hiteshchoudhary')
        .then((res)=>(res.json()))
        .then((res)=>setData(res))
    },[])
    console.log(data)
    return(
       
        <>
        <h1>{data.followers}</h1>
        </>
    )
}
export default Github
// export const Githubdata=async ()=>{
//         const res=await fetch('https://api.github.com/users/hiteshchoudhary')
//       return res.json()
// }