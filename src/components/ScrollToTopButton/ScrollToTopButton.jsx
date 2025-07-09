import { useState, useEffect } from 'react'
import styles from './ScrollToTopButton.module.css'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false) //Controla a visibilidade do botão

    //Handle para o evento scroll
    const toggleVisibility = () => {
        //Se a página rolar mais do que 300px mostra o botão
        if(window.scrollY > 300) {
            setIsVisible(true)
        }else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return() => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, []) //O efeito roda apenas uma vez

    return(
        <div className={`${styles.scrollToTop} ${isVisible ? styles.show : ''} `}>
            <button onClick={scrollToTop} aria-label='Rolar para o topo'>
            <FaArrowUp /> 
            </button>
        </div>
    )
}

export default ScrollToTopButton