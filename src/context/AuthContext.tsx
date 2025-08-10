import { createUserWithEmailAndPassword,
        signInWithEmailAndPassword, 
        signOut,
        sendPasswordResetEmail, 
        onAuthStateChanged ,
        type User,
        type UserCredential
    } from 'firebase/auth'
import { useState, useEffect, useContext, createContext } from 'react'
import { auth, db } from '../../firebase'
import { doc, getDoc } from 'firebase/firestore';



interface AuthContextType {
    globalUser: User | null;
    globalData: any | null;
    setGlobalData: React.Dispatch<React.SetStateAction<any | null>>;
    isLoading: boolean;
    signUp: (email: string, password: string) => Promise<UserCredential>;
    login: (email: string, password: string) => Promise<UserCredential>;
    logOut: () => Promise<void>;
    resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)


export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [globalUser, setGlobalUser] = useState<User | null>(null)
    const [globalData, setGlobalData] = useState<any | null>(null)
    const [isLoading, setIsLoading] = useState(true)


    function signUp(email:string, password:string) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    function login(email: string, password:string) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function resetPassword(email:string) {
        return sendPasswordResetEmail(auth, email)
    }

    function logOut() {
        setGlobalUser(null)
        setGlobalData(null)
        return signOut(auth)
    }

    const value = {globalUser, globalData, setGlobalData, isLoading, signUp, login, logOut, resetPassword}

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            console.log('CURRENT USER: ', user)
            setGlobalUser(user);
            if (user) {
                // if there is a user, then check if the user has data in the database, and if they do, then fetch said data and update the global state
                try {
                    const docRef = doc(db, 'users', user.uid);
                    const docSnap = await getDoc(docRef);
    
                    if (docSnap.exists()) {
                        console.log('Found user data');
                        setGlobalData(docSnap.data());
                    } else {
                        // Handle case where user exists in auth but not in firestore
                        setGlobalData(null);
                    }
                } catch (err) {
                    console.error("Error fetching user data:", err);
                    setGlobalData(null);
                }
            } else {
                // if there's no user, empty the user state
                setGlobalData(null);
            }
            setIsLoading(false);
        });
        return unsubscribe;
    }, [])

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}