import React ,{useContext}from 'react'
import UserContext from '../Context/UserContext'

function Profile(){
    const {name}=useContext(UserContext)
    return(
        <>
          {(!name.username)?  
            <div>please login</div>:
         <div>Welcome {name.username}</div>
          }
        </>
    )
}
export default Profile