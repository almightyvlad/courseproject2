import styles from './Brands.module.css'
import popularBrandImage from '../../images/popularBrand1.webp'

export const AlhambraPage = () => {
    return (
        <div className='container'>
            <div className='title'>Alhambra</div>

            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <img src={popularBrandImage} />
                </div>

                <div className={styles.description}>
                    Alhambra – это одна из самых крупных и известных гитарных фабрик, создающая классические испанские гитары с 1965 года.
                    При производстве гитар используются только лучшие породы дерева, привлекаются лучшие испанские мастера, а новые технологии комбинируются с классическим методом изготовления. При этом компания выступает за сохранение окружающей среды, причем данная стратегия выбрана с момента создания фабрики: Alhambra постоянно отчисляет средства на лесовосстановление.
                    Классические и акустические гитары Alhambra продаются в 40 странах мира и пользуются большой популярностью у профессиональных гитаристов за их непревзойденное звучание.
                </div>
    
            </div>
        </div>
    )
}