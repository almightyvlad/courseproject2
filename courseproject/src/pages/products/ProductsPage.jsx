import { useDispatch, useSelector } from 'react-redux'
import styles from './ProductsPage.module.css'
import MuiAlert from '@mui/material/Alert'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { addProductToBasket } from '../../store/slices/productSlice'
import { AiOutlineShopping } from 'react-icons/ai'
import { Snackbar } from '@mui/base'
import Slider from '@mui/material/Slider';

export const ProductsPage = () => {
    const [open, setOpen] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('')

    const products = useSelector(state => state.products.products)

    const [priceRange, setPriceRange] = useState([0, 25000])
    const [isPresence, setIsPresence] = useState(false)
    const [filteredProducts, setFilteredProducts] = useState([])

    const { isAuth } = useAuth()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const productsResult = products.filter(product => product.type === window.location.pathname.split('/')[1])

    const handleSelect = productName => {
        const selectedProduct = products.find(product => product.name === productName)
        if (selectedProduct) {
            navigate(`/product/${selectedProduct.id}`)
        }
    }

    const userId = useSelector(state => state.user.id)

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
            setOpen(true)
        } else {
            setSnackbarMessage('Авторизуйтесь, чтобы добавить товар в корзину.')
            setOpen(true)
        }
    }
    
    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue)
    }

    useEffect(() => {
        const filtered = productsResult.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1])
        setFilteredProducts(filtered)
    }, [priceRange, window.location.pathname])

    useEffect(() => {
        const filtered = productsResult.filter(product => isPresence ? product.presence === true : true)
        setFilteredProducts(filtered)
    }, [isPresence])

    const handleCheckboxChange = () => {
        setIsPresence(prev => !prev)
    }

    const handleInputChange = (index, value) => {
        const newPriceRange = [...priceRange]
        newPriceRange[index] = value === '' ? '' : Number(value);
        setPriceRange(newPriceRange)
    }

    return (
        <div className='container'>
            <div className='title'>Гитары</div>
            <div className={styles.productsContainer}>
                <div className={styles.filterContainer}>
                    <div className={styles.priceContainer}>Цена</div>
                    <div className={styles.sliderContainer}>
                        <div>
                            <Slider
                                value={priceRange}
                                onChange={handlePriceChange}
                                valueLabelDisplay='auto'
                                min={0}
                                max={25000}
                                step={1}
                                style={{color: '#000'}}
                            />
                        </div>
                        <div className={styles.priceRangeInputs}>
                            <div>
                                <input 
                                    type='number'
                                    value={priceRange[0]}
                                    min={0}
                                    onChange={e => handleInputChange(0, e.target.value)}
                                />
                            </div>
                            <div>
                                <input 
                                    type='number'
                                    value={priceRange[1]}
                                    min={0}
                                    onChange={e => handleInputChange(1, e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.availability}>
                        <div><input type='checkbox' checked={isPresence} onChange={handleCheckboxChange}/></div>
                        <div>В наличии</div>
                    </div>
                </div>
                <div className={styles.products}>
                    {filteredProducts.map(product => (
                        <div key={product.id} className={styles.product}>
                            <div className={styles.productInfo}>
                                <div 
                                    className={styles.imgProduct} 
                                    onClick={() => handleSelect(product.name)} 
                                    style={{ backgroundImage: `url(${product.image})` }} 
                                />
                                <div className={styles.nameProduct}>
                                    {product.name}
                                </div>
                                {product.presence
                                    ? <div className={styles.presenceProduct} style={{ color: '#3c9149' }}>В наличии в магазине</div>
                                    : <div className={styles.presenceProduct} style={{ color: '#4a4a4a' }}>Нет в наличии</div>
                                }
                                <div className={styles.buyContainer}>
                                    <div className={styles.priceProduct}>
                                        {product.price} BYN
                                    </div>
                                    <div
                                        className={styles.buyButton}
                                        onClick={() => addProductHandler(product)}
                                        style={!product.presence ? { backgroundColor: '#666' } : {}}
                                    >
                                        <AiOutlineShopping />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
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
