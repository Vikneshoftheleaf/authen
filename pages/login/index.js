import { useEffect, useState } from 'react';
import { signInWithRedirect, signInWithEmailAndPassword, GoogleAuthProvider, getRedirectResult } from "firebase/auth";
import { auth } from "../../firebase"

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function logInUser(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user.uid)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // ..
            });
    }
    //google sing in
    const provider = new GoogleAuthProvider();

    function googleSignIn() {
        signInWithRedirect(auth, provider);
    }

    useEffect(() => {
        const handleRedirectResult = async () => {
          try {
            const result = await getRedirectResult(auth);
    
            if (result.credential) {
              // This means the user signed in with a redirect-based method
              const credential = result.credential;
              const user = result.user;
    
              // You can perform actions with the user and credential here
              console.log('User signed in with redirect:', user);
              console.log('Credential:', credential);
              console.log('user',user.uid)
            }
          } catch (error) {
            // Handle errors here
            console.error('Error handling redirect result:', error.message);
          }
        };
    
        handleRedirectResult();
      }, []);
    
    return (
        <div>
            <form onSubmit={(e) => logInUser(e)}>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' >Login</button>
            </form>
            <br />
            <button onClick={() => googleSignIn()}>Sign Up with Google!</button>
        </div>
    )
}
