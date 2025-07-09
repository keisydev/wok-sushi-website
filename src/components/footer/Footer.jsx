import styles from './Footer.module.css'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerSection}>
                    <h3 className={styles.brandName}>Wok Sushi</h3>
                    <p className={styles.slogan}>Sabores que encantam, momentos que marcam!</p>
                </div>
                <div className={styles.footerSection}>
                    <h4 className={styles.sectionTitle}>Redes sociais</h4>
                    <ul className={styles.list}>
                        <li>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaInstagram/>Instagram</a>
                        </li>
                        <li>
                            <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaFacebook />Facebook</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h4 className={styles.sectionTitle}>Contato</h4>
                    <address className={styles.contactInfo}>
                        <p>Telefone: (351) 555-555-555</p>
                        <p>Endereço: Av. de Diogo Leite, 123 - Gaia</p>
                    </address>
                </div>
                <div className={styles.copyright}>
                    <p>&copy; {new Date(). getFullYear()} Wok Sushi. Todos os direitos reservados.</p>
                    <p>
                        <a href="/politica-privacidade" className={styles.footerLink}>Política de Privacidade</a> | 
                        <a href="/aviso-legal" className={styles.footerLink}>Aviso Legal</a> | 
                        <a href="/politica-cookies" className={styles.footerLink}>Política de Cookies</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer