import React, { useEffect, useState } from "react";
import {getAuth,onAuthStateChanged} from "firebase/auth";


const Aboutpage =()=>{
    const auth = getAuth()
    const [userId,setUserId] = useState(null)

    useEffect(() => {
        // monitor user object
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserId(user.uid)
            } else {
                alert("not login !")
            }
          });
    },[]);
    

    return(
        <>
        {
            userId !== null ? (<>로그인 성공</>):(<>로그인 실패</>)
        }
        </>
    )
}

export {Aboutpage};