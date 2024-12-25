import { useForm } from 'react-hook-form'
import styles from './OrderPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Snackbar } from '@mui/material';
import { useState } from 'react'
import { removeProductFromBasket } from '../../store/slices/productSlice';
import { useNavigate } from 'react-router-dom';

export const OrderPage = () => {
        
    const [open, setOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('cash')
    const [selectedDelivery, setSelectedDelivery] = useState('courier')

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRemoveAll = () => {
        basketProducts.forEach(product => {
            dispatch(removeProductFromBasket({ userId, productId: product.id }))
        })
    }
    
    const handleClose = () => {
        setOpen(false)
    }

    const onSubmit = async () => {
        reset()

        setOpen(true)

        await new Promise(resolve => setTimeout(resolve, 3000)) 

        handleRemoveAll()


        navigate('/home')
    }

    const handleOptionChange = e => {
        setSelectedOption(e.target.value)
    }

    const handleDeliveryChange = e => {
        setSelectedDelivery(e.target.value)
    }

    const userId = useSelector(state => state.user.id)
    const basketProducts = useSelector(state => state.products.basket[userId] || [])

    const productsQuantity = basketProducts.reduce((total, product) => total + product.quantity, 0)
    const productsPrice = basketProducts.reduce((total, product) => total + product.price * product.quantity, 0)
    const deliveryPrice = selectedDelivery === 'courier' ? 15 : selectedDelivery === 'belpost' ? 8 : 0

    return (
        <div className='container'>
            <div className='title'>Оформить заказ</div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.orderContainer}>
                        <div className={styles.delivery}>
                        
                            <div className={styles.deliveryTitle}>
                                1. Доставка
                            </div>

                            <div className={styles.deliveryInfo}>
                                <div className={styles.inputRow}>

                                    <div className={styles.inputContainer}>

                                        <label>Город доставки <span style={{color: '#f80000'}}>*</span></label>

                                        <input 
                                            {...register('city', {
                                                required: 'Поле "Город доставки" обязательно к заполнению!'
                                            })}
                                            placeholder='Укажите Ваш город'
                                        />
                                    </div>
                                </div>

                                <div className={styles.inputRow}>

                                    <div className={styles.inputContainer}>

                                        <label>Адрес доставки <span style={{color: '#f80000'}}>*</span></label>

                                        <input 
                                            {...register('address', {
                                                required: 'Поле "Адрес" обязательно к заполнению!'
                                            })}
                                            placeholder='Укажите Ваш адрес'
                                        />
                                    </div>
                                </div>

                                {Object.keys(errors).length > 0 && <div className={styles.errorsContainer}>
                                    <div>{errors?.city?.message}</div>
                                    <div>{errors?.address?.message}</div>
                                </div>}

                                <div className={styles.inputContainer}>
                                    <div>Способы доставки</div>
                                    <div
                                        className={`${styles.radioOption} ${selectedDelivery === 'courier' ? styles.selected : ''}`}
                                        onClick={() => setSelectedDelivery('courier')}
                                    >
                                        <span className={styles.radioCircle}></span>
                                        <label>
                                            <input
                                                type='radio'
                                                value='courier'
                                                checked={selectedDelivery === 'courier'}
                                                onChange={handleDeliveryChange}
                                            />
                                            <div className={styles.radioName}>Курьерской службой - 15 BYN</div>
                                            <div className={styles.radioNameDescription}>(2 дня)</div>
                                        </label>
                                    </div>
                                    <div
                                        className={`${styles.radioOption} ${selectedDelivery === 'belpost' ? styles.selected : ''}`}
                                        onClick={() => setSelectedDelivery('belpost')}
                                    >
                                        <span className={styles.radioCircle}></span>
                                        <label>
                                            <input
                                                type='radio'
                                                value='belpost'
                                                checked={selectedDelivery === 'belpost'}
                                                onChange={handleDeliveryChange}
                                            />
                                            <div className={styles.radioName}>Доставка Белпочтой - 8 BYN</div>
                                            <div className={styles.radioNameDescription}>(1 день)</div>
                                        </label>
                                    </div>
                                    <div
                                        className={`${styles.radioOption} ${selectedDelivery === 'manager' ? styles.selected : ''}`}
                                        onClick={() => setSelectedDelivery('manager')}
                                    >
                                        <span className={styles.radioCircle}></span>
                                        <label>
                                            <input
                                                type='radio'
                                                value='manager'
                                                checked={selectedOption === 'manager'}
                                                onChange={handleDeliveryChange}
                                            />
                                            <div className={styles.radioName}>Обсудить с менеджером по телефону</div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div className={styles.horizontalLine}></div>     

                        <div className={styles.payment}>

                            <div className={styles.paymentTitle}>
                                2. Способ оплаты
                            </div>

                            <div className={styles.inputRow}>
                                <div className={styles.inputContainer}>
                                    <div
                                        className={`${styles.radioOption} ${selectedOption === 'cash' ? styles.selected : ''}`}
                                        onClick={() => setSelectedOption('cash')}
                                    >
                                        <span className={styles.radioCircle}></span>
                                        <label>
                                            <input
                                                type='radio'
                                                value='cash'
                                                checked={selectedOption === 'cash'}
                                                onChange={handleOptionChange}
                                            />
                                            
                                            <div className={styles.radioName}>Наличные</div>
                                        </label>
                                        </div>
                                    <div
                                        className={`${styles.radioOption} ${selectedOption === 'card' ? styles.selected : ''}`}
                                        onClick={() => setSelectedOption('card')}
                                    >
                                        <span className={styles.radioCircle}></span>
                                        <label>
                                            <input
                                                type='radio'
                                                value='card'
                                                checked={selectedOption === 'card'}
                                                onChange={handleOptionChange}
                                            />
                                            <div className={styles.radioName}>Безналичные</div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div> 

                        <div className={styles.horizontalLine}></div> 

                        <div className={styles.notes}>
                            <div className={styles.notesTitle}>
                                Примечания покупателя
                            </div>
                            <div className={styles.textareaContainer}>
                                <textarea placeholder='Примечания покупателя'>

                                </textarea>
                            </div>
                        </div>
                    </div>

                    <div className={styles.orderCard}>
                        <div className={styles.orderCardTitle}>
                            Сумма заказа
                        </div>
                        <div className={styles.orderRow}>Количество товаров: <span className={styles.value}>{productsQuantity} шт.</span></div>
                        <div className={styles.orderRow}>Сумма: <span className={styles.value}>{productsPrice} BYN</span></div>
                        <div className={styles.orderRow}>Доставка: <span className={styles.value}>{deliveryPrice} BYN</span></div>

                        <div className={styles.horizontalLine}></div>

                        <div className={styles.total}>
                            Итог: <span className={styles.valueTotal}>{productsPrice + deliveryPrice} BYN</span>
                        </div>
                                            
                        
                        <button type='submit' className={styles.buttonPlacing}>
                            Подтвердить заказ
                        </button>
                    </div>
                    
                </form> 

                <Snackbar
                    open={open}
                    autoHideDuration={3000} 
                    onClose={handleClose}
                    message='Заказ успешно оформлен'
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    
                />
        </div>
    )
}