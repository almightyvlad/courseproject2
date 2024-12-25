import { FaFacebookF, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa'
import styles from './Footer.module.css'
import { IoLogoTiktok } from 'react-icons/io5'

export const Footer = () => {
    return(
        <div className={styles.footerContainer}>
            <div className={styles.footerMain}>
                <div className={styles.logo}>
                    <div></div>
                </div>

                <div className={styles.socialNetworks}>
                    <a target='_blank' href='https://www.instagram.com'>
                        <FaInstagram />
                    </a>

                    <a target='_blank' href='https://www.youtube.com'>
                        <FaYoutube />
                    </a>

                    <a target='_blank' href='https://www.telegram.com'>
                        <FaTelegram />
                    </a>

                    <a target='_blank' href='https://www.facebook.com'>
                        <FaFacebookF />
                    </a>

                    <a target='_blank' href='https://www.tiktok.com'>
                        <IoLogoTiktok />
                    </a>

                </div>

            </div>
            
        </div>
    )
}