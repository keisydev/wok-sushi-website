import  { useState, useEffect } from 'react'
import styles from '../especialidades/EspecialidadesPage.module.css'
import {menuItems} from '../../../data/menuData/menuItems'

const specialtiesItems = menuItems.filter(item => 
  ['sushi1', 'pratoquente1', 'entrada5', 'sobremesa1', 'sushi4', 'pratoquente2', 'entrada1', 'pratoquente4'].includes(item.id)
)

const EspecialidadesPage = () => {

    //Estado para controlar o modal
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState ('')

    //Rolar para o topo da página ao carregar
    useEffect(() =>{
        window.scrollTo({ top: 0, behavior:'smooth'})
    }, [])

    //Funções para abrir/fechar modal
    const openModal = (imageSrc) => {
        setCurrentImage(imageSrc)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setCurrentImage('')
    }

    return(
        <div className={styles.EspecialidadesPage}>
            <div className={styles.container}>
                <h1 className={styles.pageHeading}>Nossas Especialidades: Sabores Inesquecíveis</h1>
                <p className={styles.pageDiscription}>Descubra os pratos que fazem do Wok Sushi um lugar único. Cada especialidade é uma obra de arte, criada com os melhores ingredientes e a paixão dos nossos chefs.</p>

                <div className={styles.specialtiesGrid}>
                    {specialtiesItems.map(item => (
                        <div key={item.id} className={styles.specialtyCard}>
                            <img
                            src={item.image}
                            alt={item.name}
                            className={styles.itemImage}
                            onClick={() => openModal(item.image)}
                            loading='lazy'
                            />
                            <div className={styles.itemDetails}>
                                <h3 className={styles.itemName}>{item.name}</h3>
                                <p className={styles.itemDescription}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Modal para Visualização de Imagem */}
            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e. stopPropagation()}>
                        <button className={styles.closeModalButton} onClick={closeModal} aria-label='Fechar'>
                            &times;
                        </button>
                        <img
                        src={currentImage}
                        alt='Visualização da Especialidade'
                        className={styles.modalImage}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default EspecialidadesPage
