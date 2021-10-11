import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.init";

// initalize Firebase
initializeAuthentication();

const useFirebase = () => {
    // #User State
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    // #Auth and Providers
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // #Google Sign In
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

        /* ********** PechaPechi ********** just delete return and uncomment it */

        /*  .then((result) => {
             console.log(result.user)
             // ...
         }).catch((error) => {
             // Handle Errors here.
             setError(error.message);
         }); */
    }

    // #Login Status
    useEffect(() => {
        // Observer
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])

    // #Sign Out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                setError(error.message)
            });
    }

    return { user, error, signInUsingGoogle, logOut }
}

export default useFirebase;