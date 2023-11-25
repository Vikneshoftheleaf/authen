import { useRouter } from "next/router";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
export default function SessionWrap({children})
{
    const router = useRouter();
    const[user, setUser] = useState();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user);
      });
  
      return () => unsubscribe();
    }, []);
  
    const handleSignOut = async () => {
      try {
        await auth.signOut();
        setUser(null); // Update the user state to trigger a re-render
        console.log('User signed out successfully');
      } catch (error) {
        console.error('Error signing out:', error.message);
      }
    };

  return <>{children}</>;
}