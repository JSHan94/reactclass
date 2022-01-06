import React, { useState } from "react";
import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    deleteUser,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
const Signinpage = () =>{
    const auth = getAuth();
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user,setUser] = useState(null)
    const onChangeEmail =(e)=>{
        setEmail(e.target.value)
    }
    const onChangePassword =(e)=>{
        setPassword(e.target.value)
    }

    const onClickSignUp = () =>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                setUser(userCredential.user)
                window.location.reload();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }
    const onClickSignIn = () =>{
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user)
                window.location.reload();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }

    const onClickDelete = () =>{
        const user = auth.currentUser;

        deleteUser(user).then(() => {
            window.location.reload();
        }).catch((error) => {
            alert(error)
        });
    }
    
    const onClickSignOut = () =>{
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            window.location.reload();
          }).catch((error) => {
            // An error happened.
            alert(error)
          });
          
    }
    
    const onClickGoogle = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                alert(errorMessage)
            });
    }
    
    return (
        <div>
            <div>
                email : {email} <br/>
                password : {password}
            </div>
            <div>
                <input type="text" onChange={onChangeEmail}></input>
                <input type="password" onChange={onChangePassword}></input>
                <button style={{width:100, height:20}} onClick={onClickSignUp}>SignUp</button>
            </div>
            <div>
                <input type="text" onChange={onChangeEmail}></input>
                <input type="password" onChange={onChangePassword}></input>
                <button style={{width:100, height:20}} onClick={onClickSignIn}>SignIn</button>
            </div>
            <div>
                <button style={{width:100, height:20}} onClick={onClickDelete}>Withdrawal</button>
                <button style={{width:100, height:20}} onClick={onClickSignOut}>SignOut</button>
                <button style={{width:100, height:20}} onClick={onClickGoogle}>Google</button>
            </div>
                
        </div>


    )
}

export {Signinpage}