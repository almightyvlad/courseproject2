import styles from './Brands.module.css'
import popularBrandImage from '../../images/popularBrand2.webp'

export const ElixirPage = () => {
    return (
        <div className='container'>
            <div className='title'>Elixir</div>

            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <img src={popularBrandImage} />
                </div>

                <div className={styles.description}>
                   Струны Elixir продаются с 1997 года американским производителем тканей WL Gore & Associates. Это дочерний бренд струнных инструментов.
Благодаря нанесению тонкого покрытия, предотвращающего загрязнение почти всех струнных изделий, был устранен недостаток склонности обычных металлических струн к ржавчине, что сделало эту марку струн любимой многими музыкантами и артистами по всему миру.
                </div>
    
            </div>
        </div>
    )
}