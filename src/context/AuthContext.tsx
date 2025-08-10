import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect, useContext, createContext } from 'react'
import { auth } from '../../firebase'

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider(props: any) {
    const { children } = props
    const [globalUser, setGlobalUser] = useState(null)
    const [globalData, setGlobalData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


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

    const value = {globalUser, globalData, setGlobalData, isLoading, signUp, login, logOut}

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // if there's no user, empty the
        })
        return unsubscribe
    }, [])

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}