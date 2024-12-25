import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './useAuth'

export const useAuthRedirect = () => {
    const { isAuth } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const [prevAuth, setPrevAuth] = useState(isAuth)

    const pathsToRedirect = ['/signup', '/login']

    useEffect(() => {
        if (isAuth && pathsToRedirect.includes(location.pathname)) {
            navigate('/account')
        }

        if (prevAuth && !isAuth) {
            navigate('/signup')
        }

        setPrevAuth(isAuth)
    }, [isAuth, location.pathname, prevAuth])
}
