import {useState} from 'react'
import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'

function Navbar() {
    //Estado para controlar o menu responsivo para mobile.
const [isOpen, setIsOpen] = useState(false)

//Função para alterar o estado do menu.
const toggleMenu = () => {
    setIsOpen(!isOpen)
}

return(
    <nav className={styles.navbar}>
        <div className={styles.container}>
            <Link to ='/' className={styles.logo}>
            Wok Sushi
            </Link>

            {/*Botão para mobile*/}
            <button className={styles.hamburger} onClick={toggleMenu}     aria-label='Abrir menu de navegação'>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>

            {/*Links de navegação */}
            <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
                <li>
                    <Link to= '/' className={styles.navItem} onClick={() => setIsOpen(false)}>Restaurante</Link>
                </li>
                 <li>
                    <Link to= '/menu' className={styles.navItem} onClick={() => setIsOpen(false)}>Menu</Link>
                </li>
                 <li>
                    <Link to= '/especialidades' className={styles.navItem} onClick={() => setIsOpen(false)}>Especialidades</Link>
                </li>
                 <li>
                    <Link to= '/grupos' className={styles.navItem} onClick={() => setIsOpen(false)}>Menus de grupos</Link>
                </li>
                 <li>
                    <Link to= '/reservas' className={styles.navItem} onClick={() => setIsOpen(false)}>Reservas</Link>
                </li>
            </ul>
        </div>
    </nav>
)
}

export default Navbar