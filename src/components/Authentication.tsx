import {useState} from 'react'
import { useAuth } from '../context/AuthContext'


type AuthenticationProp = {
    handleCloseModal: () => void
} 

export default function Authentication(props:AuthenticationProp) {
    const { handleCloseModal } = props
    const [isRegistration, setIsRegistration] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthenticating, setIsAuthenticating] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const { signUp, login } = useAuth()


    async function handleAuthenticate() {
        if (!email || !email.includes('@')) {
            setError("Please enter a valid email address.");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }

        try {
            setIsAuthenticating(true)
            setError(null)

            if (isRegistration) {
                // register a user
                await signUp(email, password)
            } else {
                // login a user
                await login(email, password)
            }
            handleCloseModal()

        } catch (err) {
            if (err instanceof Error) {
                console.log(err.message);
                setError(err.message);
            } else {
                setError("An unexpected error occurred. Please try again.");
            }
        } finally {
            setIsAuthenticating(false)
        }

        

    }


    return (
        <>
            <h2 className="sign-up-text">{isRegistration ? 'Sign Up' : 'Login'}</h2>
            <p>{isRegistration ? 'Create an account!' : 'Sign in to your account!'} </p>
            {error && (
                <p>❌ {error}</p>
            )}
            <input value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"/>
            <input value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="*****" type="password"/>
            <button onClick={handleAuthenticate}><p>{isAuthenticating ? 'Authenticating...' : ' Submit'}</p></button>
            <hr />
            <div className="register-content">
                <p>{ isRegistration ? 'Already have an account' : 'Don\'t have an account?' }</p>
                <button onClick={() => {setIsRegistration(!isRegistration)}}><p>{isRegistration ? 'Login' : 'Sign Up'}</p></button>
            </div>
        </>
    )
}