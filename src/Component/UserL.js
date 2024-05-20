import React from 'react'
import UserCard from './UserCard'
import axios from 'axios'
import  { useEffect, useState } from 'react'

const UserL = () => {
    const [users , setUsers] = useState ([])
    useEffect(() => {
      axios 
      .get("https://jsonplaceholder.typicode.com/users")
      .then( (res) => setUsers(res.data))
      .catch((err)=> console.log(err)) 
    
    }, [])
    
   
     return (
       <div>
         <h2>Our Developer List </h2>
         <div  style={{ 
            display : "flex" , 
            flexWrap : "wrap" , 
            justifyContent : "space-around"
         }}>

         {
           users.map ((el) => (  
               <UserCard user={el} key={el.id}  />
   
         )
           )
         }
   
   </div>
    </div>
  )
}

export default UserL
