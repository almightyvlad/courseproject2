import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineShopping } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToBasket } from '../../store/slices/productSlice'
import { Snackbar } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import MuiAlert from '@mui/material/Alert'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './HomePage.module.css'
import { useAuth } from '../../hooks/useAuth'
import sectionImage1 from '../../images/sectionImage1.svg'
import sectionImage2 from '../../images/sectionImage2.svg'
import sectionImage3 from '../../images/sectionImage3.svg'
import sectionImage4 from '../../images/sectionImage4.svg'
import sectionImage5 from '../../images/sectionImage5.svg'

import popularBrand1 from '../../images/popularBrand1.webp'
import popularBrand2 from '../../images/popularBrand2.webp'
import popularBrand3 from '../../images/popularBrand3.webp'
import popularBrand4 from '../../images/popularBrand4.webp'
import popularBrand5 from '../../images/popularBrand5.webp'

export const HomePage = () => {
    const [open, setOpen] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('')

    const { isAuth } = useAuth()

    const products = useSelector(state => state.products.products)
    const userId = useSelector(state => state.user.id)

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
            setOpen(true)
        } else {
            setSnackbarMessage('Авторизуйтесь, чтобы добавить товар в корзину.')
            setOpen(true)
        }
    }

    const handleSelect = productName => {
        const selectedProduct = products.find(product => product.name === productName)
        if (selectedProduct) {
            navigate(`/product/${selectedProduct.id}`)
        }
    }

    return (
        <>
        <Swiper
            className={styles.swiper}
            spaceBetween={0}
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            
            autoplay={{ delay: 7000, disableOnInteraction: false }}
        >
            <SwiperSlide className={`${styles.swiperSlide} ${styles.slide1}`}>
                <div className={styles.swiperSlideInfo}>
                    <div className={styles.swiperSlideTitle}>ESP Guitars</div>

                    <div className={styles.swiperSlideDescription}>
                        <div>
                            Electric Sound Products — японская компания.
                        </div>

                        <div>
                            К ESP пришла известность, когда их продукцию начали приобретать гитаристы, впоследствии прославившиеся как исполнители в стилях трэш- и дэт-метал, а также других направлений экстремальной музыки.
                        </div>
                    </div>
                </div>
          
            </SwiperSlide>
            <SwiperSlide className={`${styles.swiperSlide} ${styles.slide2}`}>
                <div className={styles.swiperSlideInfo}>
                    <div className={styles.swiperSlideTitle}>Jackson Guitars</div>

                    <div className={styles.swiperSlideDescription}>
                        <div>
                            Jackson — гитары, продаваемые корпорацией Fender Musical Instruments Corporation.
                        </div>

                        <div>
                            С момента основания и до наших дней компания Jackson славится своими тонкими, элегантными дизайнами и агрессивными мотивами, которые популярны среди исполнителей хард-рока и металла.
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className={`${styles.swiperSlide} ${styles.slide3}`}>
                <div className={styles.swiperSlideInfo}>
                    <div className={styles.swiperSlideTitle}>Ibanez</div>

                    <div className={styles.swiperSlideDescription}>
                        <div>
                            Ibanez — гитарный бренд, расположенная в городе Нагоя (Япония).
                        </div>

                        <div>
                            В 1935 году она начала производить собственные струнные инструменты. Компания имела незначительное присутствие на Западе вплоть до середины 1960-х годов.
                        </div>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide className={`${styles.swiperSlide} ${styles.slide4}`}>
                <div className={styles.swiperSlideInfo}>
                    <div className={styles.swiperSlideTitle}>Gibson</div>

                    <div className={styles.swiperSlideDescription}>
                        <div>
                            Gibson — американская компания, производитель гитар.
                        </div>

                        <div>
                           Продукцию фирмы можно также увидеть под брендами Epiphone, Kramer Guitars, Valley Arts, Tobias, Steinberger и Kalamazoo. Помимо гитар Gibson изготавливает фортепиано, барабаны и дополнительное оборудование.
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

        <div className='container' style={{margin: '0 1.5em'}}>

            <div className={styles.informationSections}>
                <div className={styles.section}>
                    <div className={styles.sectionImage}>
                        <img src={sectionImage1} alt='sectionImage' />
                    </div>

                    <div className={styles.sectionTitle}>
                        Быстрая доставка
                    </div>

                    <div className={styles.sectionDescription}>
                        Большинство заказов отправляются в тот же день
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.sectionImage}>
                        <img src={sectionImage2} alt='sectionImage' />
                    </div>

                    <div className={styles.sectionTitle}>
                        Оплата частями
                    </div>

                    <div className={styles.sectionDescription}>
                        Забирайте сейчас – платите потом!
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.sectionImage}>
                        <img src={sectionImage3} alt='sectionImage'/>
                    </div>

                    <div className={styles.sectionTitle}>
                        Предпродажная подготовка
                    </div>

                    <div className={styles.sectionDescription}>
                        Инструменты в магазине сразу готовы к игре
                    </div>
                </div>
                
                <div className={styles.section}>
                    <div className={styles.sectionImage}>
                        <img src={sectionImage4} alt='sectionImage' />
                    </div>

                    <div className={styles.sectionTitle}>
                        Бесплатная тех. поддержка
                    </div>

                    <div className={styles.sectionDescription}>
                        Есть вопрос? Мы готовы помочь
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.sectionImage}>
                        <img src={sectionImage5} alt='sectionImage' />
                    </div>

                    <div className={styles.sectionTitle}>
                       Расширенная гарантия
                    </div>

                    <div className={styles.sectionDescription}>
                        Покупайте с уверенностью
                    </div>
                </div>
            </div>
            
            <div className={styles.titleCenter}>
                <span className={styles.titleCenterRow}></span>
                    <span className={styles.titleCenterFirstWord}>Популярные </span>
                    <span className={styles.titleCenterOtherWords}>товары</span>
                <span className={styles.titleCenterRow}></span>
            </div>

            <div className={styles.hitsContainer}>
                {products.filter(product => product.label === 'popular').map(product => (
                    <div key={product.id} className={styles.product}>
                        <div className={styles.productInfo}>
                            <div className={styles.imgProduct} onClick={() => handleSelect(product.name)} style={{ backgroundImage: `url(${product.image})` }} />
                            <div className={styles.nameProduct}>
                                {product.name}
                            </div>
                            {product.presence
                                ? <div className={styles.presenceProduct} style={{ color: '#3c9149' }}>В наличии в магазине</div>
                                : <div className={styles.presenceProduct}  style={{ color: '#4a4a4a' }}>Нет в наличии</div>
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

            <div className='title' style={{margin: '2em 0 0 0.5em'}}>Популярные бренды</div>

            <div className={styles.popularBrandsContainer}>
                <div className={styles.popularBrand} onClick={() => navigate('brands/alhambra')}>
                    <img src={popularBrand1} alt='popularBrand' />
                </div>

                <div className={styles.popularBrand} onClick={() => navigate('brands/elixir')}>
                    <img src={popularBrand2} alt='popularBrand' />
                </div>

                <div className={styles.popularBrand} onClick={() => navigate('brands/dunlop')}>
                    <img src={popularBrand3} alt='popularBrand' />
                </div>

                <div className={styles.popularBrand} onClick={() => navigate('brands/ernieball')}>
                    <img src={popularBrand4} alt='popularBrand' />
                </div>

                <div className={styles.popularBrand} onClick={() => navigate('brands/casio')}>
                    <img src={popularBrand5} alt='popularBrand' />
                </div>
            </div>

            <div className={styles.titleCenter}>
                <span className={styles.titleCenterRow}></span>
                    <span className={styles.titleCenterFirstWord}>Новые </span>
                    <span className={styles.titleCenterOtherWords}>товары</span>
                <span className={styles.titleCenterRow}></span>
            </div>

            <div className={styles.newContainer}>
                {products.filter(product => product.label === 'new').map(product => (
                    <div key={product.id} className={styles.product}>
                        <div className={styles.productInfo}>
                            <div className={styles.imgProduct} onClick={() => handleSelect(product.name)} style={{ backgroundImage: `url(${product.image})` }} />
                            <div className={styles.nameProduct}>
                                {product.name}
                            </div>
                            {product.presence
                                ? <div className={styles.presenceProduct} style={{ color: '#3c9149' }}>В наличии в магазине</div>
                                : <div className={styles.presenceProduct}  style={{ color: '#4a4a4a' }}>Нет в наличии</div>
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

            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <MuiAlert onClose={handleClose} severity='warning' sx={{ width: '100%' }}>
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
        </div>
    </>
    )
}
