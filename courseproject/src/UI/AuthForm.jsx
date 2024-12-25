import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import styles from './AuthForm.module.css'

export const AuthForm = ({ title, isLogin, handleClick }) => {
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const onSubmit = data => {
        handleClick(data.email, data.password, data.name, data.surname, data.phone)
        reset()
    }

    return (
        <div className='container'>
            <div className='title'>{title}</div>
            
            <div className={styles.authContainer}>
                <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
                    {!isLogin && <>
                        <div className={styles.inputRow}>
                            <div className={styles.inputContainer}>

                                <label>Имя <span style={{color: '#f80000'}}>*</span></label>

                                <input 
                                    {...register('name', {
                                        required: 'Поле "Имя" обязательно к заполнению!'
                                    })}
                                />

                            </div>

                            <div className={styles.inputContainer}>

                                <label>Фамилия</label>

                                <input 
                                    {...register('surname')}
                                />
                                
                            </div>

                        </div>
                        
                        <div className={styles.inputRow}>
                            <div className={styles.inputContainer}>

                                <label>Телефон <span style={{color: '#f80000'}}>*</span></label>

                                <input 
                                    {...register('phone', {
                                        required: 'Поле "Телефон" обязательно к заполнению!'
                                    })}
                                />
                                
                            </div>

                        </div>
                    </>
                    }
                    
                    <div className={styles.inputRow}>
                        <div className={styles.inputContainer}>

                        <label>E-mail <span style={{color: '#f80000'}}>*</span></label>

                        <input 
                            {...register('email', {
                                required: 'Поле "E-mail" обязательно к заполнению!',
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: 'Некорректный адрес электронной почты!'
                                }
                            })}
                        />
                        
                        </div>
                        
                    </div>

                    <div className={styles.inputRow}>

                        <div className={styles.inputContainer}>

                        <label>Пароль <span style={{color: '#f80000'}}>*</span></label>

                        <input 
                            {...register('password', {
                                required: 'Поле "Пароль" обязательно к заполнению!'
                            })}
                            type='password'
                        />
                        
                        </div>
                        
                    </div>
        
                    {Object.keys(errors).length > 0 && <div className={styles.errorsContainer}>
                        <div>{errors?.name?.message}</div>
                        <div>{errors?.phone?.message}</div>
                        <div>{errors?.email?.message}</div>
                        <div>{errors?.password?.message}</div>
                        <div>{errors?.passwordConfirm?.message}</div>
                    </div>}

                    <div className={styles.link}>
                        {!isLogin ? <>Есть аккаунт? <Link to='/login'>Войти.</Link></>
                        : <>Нет аккаунта? <Link to='/signup'>Зарегистрироваться.</Link></>
                        }
                    </div>
 

                    <button type='submit' className={styles.button}>
                        {isLogin ? 'Войти' : 'Регистрация' }
                    </button>    

            
                </form>

                
                {!isLogin && <div className={styles.infoContainer}>
                    <div className={styles.infoTitle}>Преимущества зарегистрированного пользователя:</div>
                    <ul className={styles.list}>
                        <li className={styles.listElement}>Отслеживание заказов на персональной странице</li>
                        <li className={styles.listElement}>Возможность настроить магазин под себя для более удобных покупок</li>
                        <li className={styles.listElement}>Ускоренное оформление последующих заказов</li>
                    </ul>
                </div>}
                
            </div>

            

        </div>
    )
}