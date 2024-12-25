import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToBasket } from '../../store/slices/productSlice'
import { Snackbar } from '@mui/base'
import MuiAlert from '@mui/material/Alert'
import { AiOutlineShopping } from 'react-icons/ai'
import styles from './ProductPage.module.css'
import { useAuth } from '../../hooks/useAuth'

export const ProductPage = () => {
    const [open, setOpen] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    const { id } = useParams()
    const { isAuth } = useAuth()
    const userId = useSelector(state => state.user.id)
    const products = useSelector(state => state.products.products)
    const product = products.find(product => product.id == id)


    const getRandomProducts = (arr, numberOfProducts) => {
        const shuffled = [...arr].sort(() => 0.5 - Math.random())
        return shuffled.slice(0, numberOfProducts)
    }
    const randomProducts = getRandomProducts(products, 6)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }

    const addProductHandler = product => {
        if (product.presence && isAuth) {
            dispatch(addProductToBasket({ product, userId }))
        } else if (!product.presence) {
            setSnackbarMessage('Товара нет в наличии')
            console.log('pisua')
            setOpen(true)
        } else {
            setSnackbarMessage('Авторизуйтесь, чтобы добавить товар в корзину.')
            setOpen(true)
        }
    }

   const description = product.description.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph.trim()}</p>
    ))

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % 2) 
        }, 10000)

        return () => clearInterval(intervalId) 
    }, [])

    const handleSelect = productName => {
        const selectedProduct = products.find(product => product.name === productName)
        if (selectedProduct) {
            navigate(`/product/${selectedProduct.id}`)
        }
    }

    const displayedProducts = randomProducts.slice(currentIndex * 3, (currentIndex + 1) * 3)

    return (
        <div className='container'>
            <div className='title'>{product.name}</div>
            
            <div className={styles.mainContainer}>
                <div className={styles.mainImageContainer}>
                    <img src={product.image} />
                </div>

                <div className={styles.mainInfoContainer}>

                    <div className={styles.price}>{product.price} BYN за шт.</div>

                    <div className={styles.presence}>
                        {product.presence
                                ? <div className={styles.presenceProduct} style={{ color: '#3c9149' }}>В наличии в магазине</div>
                                : <div className={styles.presenceProduct}  style={{ color: '#4a4a4a' }}>Нет в наличии</div>
                        }
                    </div>

                    <div
                        className={styles.buyButton}
                        onClick={() => addProductHandler(product)}
                        style={!product.presence ? { backgroundColor: '#666' } : {}}
                    >
                        <AiOutlineShopping />
                        <div className={styles.buyButtonText}>В корзину</div>
                    </div>
                </div>
            </div>

            <div className={styles.recommendationsContainer}>
                <div className={styles.recommendationsTitle}>
                    Рекомендуемые товары
                </div>

                <div className={styles.recommendationsList}>
                    {displayedProducts.map(randomProduct => (
                        <div key={randomProduct.id} className={styles.recommendationItem} onClick={() => handleSelect(randomProduct.name)}>
                            <img src={randomProduct.image} alt={randomProduct.name} />
                            <div className={styles.recommendationName}>{randomProduct.name}</div>
                            <div className={styles.recommendationPrice}>{randomProduct.price} BYN</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.descriptionContainer}>
                <div className={styles.descriptionTitle}>
                    Описание и характеристики
                    <div className={styles.descriptionName}>
                        {product.name}
                    </div>
                </div>

                <div className={styles.description}>
                    {description}
                </div>
            </div>

           <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} style={{position: 'fixed', bottom: 20, left: 15,}}>
                <MuiAlert onClose={handleClose} severity='warning' sx={{ width: '100%' }}>
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
            
        </div>
    )
}
