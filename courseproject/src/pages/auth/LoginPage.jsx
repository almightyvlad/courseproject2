import { useDispatch } from 'react-redux'
import { AuthForm } from '../../UI/AuthForm'
import { setUser } from '../../store/slices/userSlice'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = (email, password) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {

                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
        
                navigate('/home')
            })
            .catch(() => alert('Invalid user!'))
    }


    return (
        <AuthForm 
            title='Войти в аккаунт'
            isLogin={true}
            handleClick={handleLogin}
        />
    )

}