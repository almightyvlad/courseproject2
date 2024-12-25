import { useDispatch, useSelector } from 'react-redux'
import { GoTrash } from 'react-icons/go'
import { fetchUserProducts, removeProductFromBasket, updateProductQuantity, updateQuantity } from '../../store/slices/productSlice'
import { useAuth } from '../../hooks/useAuth'
import { useEffect, useState } from 'react'
import styles from './BasketPage.module.css'
import { CircularProgress } from '@mui/material'
import { Link } from 'react-router-dom'

export const BasketPage = () => {
    const [isLoading, setIsLoading] = useState(false)

    const { isAuth } = useAuth()

    const userId = useSelector(state => state.user.id)
    const basketProducts = useSelector(state => state.products.basket[userId] || [])

    const dispatch = useDispatch()

    useEffect(() => {
        if (isAuth && userId) {
            dispatch(fetchUserProducts({ userId }))
        }
    }, [isAuth, userId, basketProducts])

    const handleDecrement = async (product) => {
        if (product.quantity > 1) {
            setIsLoading(true)

            const updatedBasket = basketProducts.map(p =>
                p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
            )

            try {
                await dispatch(updateQuantity({ userId, updatedBasket }))
                await dispatch(updateProductQuantity({ userId, productId: product.id, quantity: product.quantity - 1 }))
            } catch (e) {
                console.error('Error updating quantity:', e);
            } finally {
                setIsLoading(false)
            }

        }
    }

    const handleIncrement = async (product) => {
        if (product.quantity < 10) {
            setIsLoading(true)
            
            const updatedBasket = basketProducts.map(p => 
                p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
            )

            try {
                await dispatch(updateQuantity({ userId, updatedBasket }));
                await dispatch(updateProductQuantity({ userId, productId: product.id, quantity: product.quantity + 1 }));
            } catch (e) {
                console.error('Error updating quantity:', e);
            } finally {
                setIsLoading(false)
            }
        }
    }

    const totalPrice = basketProducts.reduce((total, product) => total + product.price * product.quantity, 0)

    return (
        <div className='container'>
            <div className='title'>
                Содержимое корзины
            </div>

            {isAuth && <>

                <table>
                    <thead>
                        <tr>
                            <th>Товар</th>
                            <th></th>
                            <th>Цена за ед.</th>
                            <th>Кол-во</th>
                            <th>Итого</th>
                            <th></th>
                        </tr>
                    </thead>


                    <tbody>
                        {!isLoading ? basketProducts.length > 0 && basketProducts.map(product => (
                            <tr key={product.id}>
                                <td className={styles.productImg}>
                                    <div className={styles.imageContainer}>
                                        <div className={styles.mobileTable}>Товар</div>
                                        <div>
                                            <img src={product.image} alt={product.name} />
                                        </div>
                                    </div>
                                    <div className={`${styles.mobileTable} ${styles.mobileName}`}>
                                        <div>{product.name}</div>
                                        <div className={styles.productDeleteMobile}> 
                                            <GoTrash onClick={() => dispatch(removeProductFromBasket({ userId, productId: product.id }))} />
                                        </div>
                                    </div>
                                </td>
                                <td className={styles.productName}>
                                    <div className={styles.mobileTable}>Товар</div>
                                    <div>{product.name}</div>
                                </td>
                                <td className={styles.productPrice}>
                                    <div className={styles.mobileTable}>Цена</div>
                                    <div>{product.price} BYN</div>
                                </td>
                                <td className={styles.productQuantity}>
                                    <div className={styles.mobileTable}>Количество</div>
                                    <div className={styles.counterContainer}>
                                        <button onClick={() => handleDecrement(product)}>-</button>
                                        <input
                                            className={styles.counter}
                                            value={product.quantity}
                                            disabled
                                        />
                                        <button onClick={() => handleIncrement(product)}>+</button>
                                    </div>
                                </td>
                                <td className={styles.productTotalPrice}>

                                    <div className={styles.mobileTable}>Итого</div>
                                    <div>
                                        {product.quantity * product.price} BYN
                                    </div>

                                </td>
                                <td className={styles.productDelete}>
                                    <GoTrash onClick={() => dispatch(removeProductFromBasket({ userId, productId: product.id }))} />
                                </td>
                            </tr>
                        )) : <div className={styles.downloading}><CircularProgress /></div>}
                    </tbody>
                </table>

                {basketProducts.length === 0 && <div className={styles.productEmpty}>Корзина товаров пуста</div>}

                {basketProducts.length !== 0 &&

                    <div className={styles.checkoutContainer}>
                        <div className={styles.totalPrice}>Общая стоимость: {totalPrice} BYN</div>
                        <Link to='/order'>
                            <div className={styles.nextPageButton}>
                                Перейти к оформлению
                            </div>
                        </Link>
                    </div>}
            </>
            }

            {!isAuth && <div>Авторизуйтесь, чтобы воспользоваться корзиной.</div>}

        </div>
    )
}
