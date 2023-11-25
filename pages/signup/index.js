import { useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase"
export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function signInUser(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // ..
            });
    }

    //signin with google
    const provider = new GoogleAuthProvider();
    function googleSignIn() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                console.log(token)

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log(errorMessage)
            });
    }


    return (
        <div>
            <form onSubmit={(e) => signInUser(e)}>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Signup</button>
            </form>
            <br />
            <button onClick={()=>googleSignIn()}>Sign Up with Google!</button>
        </div>
    )
}