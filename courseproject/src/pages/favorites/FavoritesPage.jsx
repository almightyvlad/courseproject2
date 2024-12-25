import { useAuth } from '../../hooks/useAuth'
import styles from './FavoritesPage.module.css'

export const FavoritesPage = () => {

    const { isAuth } = useAuth()


    return (
        <div className='container'>
            <div className='title'>Отложенные товары</div>

            {!isAuth && <div>Авторизуйтесь, чтобы воспользоваться отложенными товарами.</div>}
        </div>
    )
}