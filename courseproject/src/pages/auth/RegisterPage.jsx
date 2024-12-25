import { useDispatch } from 'react-redux'
import { AuthForm } from '../../UI/AuthForm'
import { createUser, setUser } from '../../store/slices/userSlice'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export const RegisterPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister = (email, password, username, surname, phone) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    id: user.uid,
                    email: user.email,
                    token: user.accessToken
                }))

                dispatch(
                    createUser({
                        userId: user.uid,
                        email: user.email,
                        username,
                        surname,
                        phone
                    })
                )

                navigate('/home')
            })
            .catch((error) => {
                console.error('Registration error:', error)
                alert('Invalid user!')
            })
    }

    return (
        <AuthForm 
            title='Регистрация'
            isLogin={false}
            handleClick={handleRegister}
        />
    )
}
