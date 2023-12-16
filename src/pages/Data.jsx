import React,{useEffect, useState} from 'react'

export default function Data() {
    const [user, setUser]=useState("sandeep")
    const [age,setAge]=useState(24)
    const [count, setCount]=useState(0)
    
    useEffect(()=>{
        console.log("Changes")
        setCount(count + 1)
    })

  return (
    <div>
        <div className="text-5xl font-bold underline">
            {/* Count: {count} */}
        </div>
        <br />
        <div className="text-5xl font-bold underline">
        {user} {age}
        </div>
        <br />
        <button onClick={()=>setUser("Kumar")}>Update name</button>
        <button onClick={()=>setAge(25)}>Change age</button>
    </div>
  )
}
