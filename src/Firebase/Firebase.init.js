import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;


/*  Steps for authentication
----------------------------
# Step-1 (Initial Setup)
1. firebase : create project
2. Crete web app
3. get configuration
4. Initialize Firebase
5. Enable Auth method

# Step-2 (Setup component)
1. Create Login Component
2. Create Register Component
3. Create Route For Login and Registration

# Step-3 (Auth System)
1. Set up sign in method
2. Set up sign out method
3. use State
4. special firebase Observer
5. return necessary mehtods and states form useFirebase

# Step-4 (Create Auth Context hook)
1. create a auth context
2. create a context provider
3. use Auth Provider
4. create useAuth Hook
5. set context provider context value

# Step-5 (Private Route)
1. Create Private Route
2. Set Private Route

# Step-6 (Redirect after Login)
1. after login redirect user to their desired destination
*/
