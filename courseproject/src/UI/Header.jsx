import { AiOutlineHeart, AiOutlineSearch, AiOutlineShopping, AiOutlineUser } from 'react-icons/ai'
import { IoIosMenu } from 'react-icons/io'
import { useEffect, useState } from 'react'
import { Autocomplete, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './Header.module.css'
import { RxCross1 } from 'react-icons/rx'


export const Header = () => {
    const [value, setValue] = useState('')
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [isSearchActive, setIsSearchActive] = useState(true)
    const navigate = useNavigate()

    const products = useSelector(state => state.products.products)

    const handleSelect = (event, newValue) => {
        const selectedProduct = products.find(product => product.name === newValue)

        if (selectedProduct) {
            navigate(`/product/${selectedProduct.id}`)
        }
    }

    const visibleHandler = () => {
        if (window.innerWidth <= 767) {
            setIsVisible(!isVisible)
            setIsSearchActive(!isSearchActive)
        }
    }

    const sideBarHandler = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 767) {
                setIsVisible(true)
                setIsSearchActive(true)
            } else {
                setIsVisible(true)
                setIsSearchActive(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div>
            <div className={styles.headerContainer}>

                <div className={styles.headerElements}>
                    {isVisible && <>

                        <div className={styles.catalogButton} onClick={sideBarHandler}>
                            <IoIosMenu />
                        </div>

                        <div className={`${styles.sidenav} ${isSidebarOpen ? styles.sidenavOpen : ''}`}>
                            <div className={styles.closebtn} onClick={sideBarHandler}>&times;</div>
                            <Link to='/guitars'>Гитары</Link>
                            <Link to='/synthesizers'>Синтезаторы</Link>
                            <Link to='/headphones'>Наушники</Link>
                            <Link to='/drums'>Ударные</Link>
                            <Link to='/audiointerfaces'>Аудиоинтерфейсы</Link>
                            <Link to='/microphones'>Микрофоны</Link>
                        </div>

                        <div className={styles.logoContainer}>
                            <Link to='/home'>
                                <div className={styles.logo}></div>
                            </Link>
                        </div>
                    </>}
                </div>
                

                {isSearchActive && <div>
                    <Autocomplete
                        className={styles.search}
                        value={value}
                        onInputChange={(e, newValue) => {
                            setValue(newValue)
                        }}
                        onChange={handleSelect}
                        options={products.map(product => product.name)}
                        renderInput={params => (
                            <TextField
                                className={styles.searchInput}
                                {...params}
                                placeholder='Искать товары...'
                                size='small'
                            />
                        )}
                        />
                </div>}
                           

                <div className={styles.navContainer}>
                    {isVisible ? <>
                            <div className={`${styles.navElement} ${styles.searchElement}`} onClick={visibleHandler}>
                                <div><AiOutlineSearch /></div>
                            </div>

                            {/* <Link to='/favorites' className={styles.navElement}>
                                <div><AiOutlineHeart /></div>
                            </Link> */}

                            <Link to='/signup' className={styles.navElement}>
                                <div><AiOutlineUser /></div>
                            </Link>
                            
                            <Link to='/basket' className={styles.navElement}>
                                <div><AiOutlineShopping /></div>
                            </Link>
                        </> 
                        : 
                        <div className={styles.navElement} onClick={visibleHandler}>
                            <RxCross1 />
                        </div>

                    }
                </div>
            </div>

        

            <div className={styles.catalogContainer}>
                <Link to='/guitars' className={styles.catalogElement}>
                    <div>Гитары</div>
                </Link>
                <Link to='/synthesizers' className={styles.catalogElement}>
                    <div>Синтезаторы</div>
                </Link>
                <Link to='/headphones' className={styles.catalogElement}>
                    <div>Наушники</div>
                </Link>
                <Link to='/drums' className={styles.catalogElement}>
                    <div>Ударные</div>
                </Link>
                <Link to='/audiointerfaces' className={styles.catalogElement}>
                    <div>Аудиоинтерфейсы</div>
                </Link>
                <Link to='/microphones' className={styles.catalogElement}>
                    <div>Микрофоны</div>
                </Link>
            </div>
        </div>
    )

    
}
