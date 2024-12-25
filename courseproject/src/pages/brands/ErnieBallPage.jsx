import styles from './Brands.module.css'
import popularBrandImage from '../../images/popularBrand4.webp'

export const ErnieBallPage = () => {
    return (
        <div className='container'>
            <div className='title'>Ernie Ball</div>

            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <img src={popularBrandImage} />
                </div>

                <div className={styles.description}>
                    Ernie Ball - американская компания по производству инструментов и аксессуаров для гитар, базирующаяся в Сан-Луис-Обиспо, Калифорния. Бренд был основан Роландом Шервудом Боллом в 1962 году как линия гитарных струн на заказ. Компания производит и продает гитары через Ernie Ball Music Man.
                </div>
    
            </div>
        </div>
    )
}