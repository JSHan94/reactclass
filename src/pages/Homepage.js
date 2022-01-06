import React, {useState} from "react";
import Paypal from "./Paypal"
import db from "../fbase"
import { collection, addDoc } from "firebase/firestore";

const Homepage = () => {
    const [name, setName] = useState("")
    const [userId,setUserId] = useState("1")
    const onChangeTest = (e) =>{
        setName(e.target.value)
    }
    const onClickTest = async (e) =>{
        try {
            const docRef = await addDoc(collection(db, "users"), {
              name: name,
            });
            console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Hello Error adding document: ", e);
          }
    }

    return (
        <div> 
            <input type="text" onChange={onChangeTest}></input>
            <button style={{width:50, height:20}} onClick={onClickTest}>제출</button>
            {/* <Paypal></Paypal> */}
        </div>
    )
}

export {Homepage};

// const HomeLayout = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-evenly;
//   position: relative;
//   height: 100vh;
// `