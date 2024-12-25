import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, removeUser } from '../../store/slices/userSlice'
import { useEffect, useState } from 'react'
import { ImExit } from 'react-icons/im'
import styles from './AccountPage.module.css'
import { getAuth, signOut } from 'firebase/auth'
import firebaseApp from '../../firebase'
import { CircularProgress } from '@mui/material'

export const AccountPage = () => {
    const dispatch = useDispatch()
    const { users, id } = useSelector(state => state.user)
    
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    useEffect(() => {
        if (users.length > 0 && id) {
            const foundUser = users.find(user => user.userId === id)
            setUser(foundUser)
        }
    }, [users, id])

    const handleLogout = async () => {
        try {
            await signOut(getAuth(firebaseApp))
            dispatch(removeUser())
        } catch (error) {
            console.error('Ошибка при выходе из аккаунта:', error)
        }
    }

    if (!user) {
        return <div className={styles.downloading}><CircularProgress /></div>
    }

    return (
        <div className='container'>
            <div className='title'>Аккаунт </div>
            <div className={styles.mainContainer}>
                <div className={styles.name}>
                    Имя: {user.username} 
                </div>
                <div className={styles.surname}>
                    Фамилия: {user.surname.length > 1 ? user.surname : '-'}
                </div>
                <div className={styles.email}>
                    E-mail: {user.email}
                </div>
                <div className={styles.phone}>
                    Телефон: {user.phone}
                </div>
                
                <div className={styles.logoutButton} onClick={handleLogout}>
                    <ImExit />
                    <span>Выйти</span>
                </div>
            </div>
        </div>
    )
}