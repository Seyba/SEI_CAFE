import { useState } from "react"
import LoginForm from "../components/logginForm/LoginForm"
import SignUpForm from "../components/signUpForm/SignupForm"
const AuthPage = ({setUser}) => {
    const [showLogin, setShowLogin] = useState(false)

    return(
        <div>
            <h1>Auth Page</h1>
            <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? "Sign up" : "Log in"}</button>

            {
                showLogin ? (
                <LoginForm setUser={setUser} />
                ) : (
                <SignUpForm setUser={setUser} />
                )
            }
        </div>
    )
}

export default AuthPage