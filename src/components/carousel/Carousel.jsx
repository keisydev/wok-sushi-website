import { useState } from "react"
import styles from './Carousel.module.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Carousel = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    
    const goToPrev = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1)
    }

    return(
        <div className={styles.carousel}>
            <div className={styles.carouselInner} style={{transform: `translateX(${-currentIndex * 100}%)`}}>
                {images.map((image, index) => (
                    <div className={styles.carouselItem} 
                    key={index} 
                    style={{backgroundImage: `url(${image})`}} aria-label={`Imagem do ambiente do restaurante ${index + 1}`}>
                    </div>
                ))}
            </div>

            {/* Botões de navegação */}
            <button className={styles.carouselControlPrev} onClick={goToPrev} aria-label="Imagem anterior"><FaChevronLeft /></button> {/* Seta esquerda */}
            <button className={styles.carouselControlNext} onClick={goToNext} aria-label="Próxima imagem"><FaChevronRight /> 
            </button> {/* Seta direita */}

            <div className={styles.carouselIndicators}>
                {images.map((_,index) =>(
                    <span key={index} 
                    className={`${styles.indicator} ${currentIndex === index ? styles.active : ''}`} onClick={() => setCurrentIndex(index)} aria-label={`Ir para a imaegm ${index + 1}`}>
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Carousel
    