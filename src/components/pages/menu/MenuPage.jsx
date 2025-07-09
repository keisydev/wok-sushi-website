import { useState, useEffect } from "react"
import styles from '../menu/MenuPage.module.css'
import {menuItems} from '../../../data/menuData/menuItems.js'
import ScrollToTopButton from "../../ScrollToTopButton/ScrollToTopButton"




const MenuPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Todas');


    const openModal = (imageSrc) => {
        setCurrentImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentImage('');
    }

    const categories = ['Todas', ...new Set(menuItems.map(item => item.category))];

    //  Filtro simples
    const handleFilterClick = (category) => {
        setSelectedCategory(category); // Define a categoria selecionada
       
    }

    useEffect(() => {
        // Rola a janela para o topo da página 
        window.scrollTo({ top: 0, behavior: 'smooth' })
         setSelectedCategory('Todas')
    }, [])

    // Filtra por categoraia selecionada
    const filteredItems = selectedCategory === 'Todas'
        ? menuItems
        : menuItems.filter(item => item.category === selectedCategory);

    //  Obter as categorias dos itens que estão sendo exibidos
    const visibleCategories = selectedCategory === 'Todas' 
        ? [...new Set(filteredItems.map(item => item.category))] // Todas as categorias únicas
        : [selectedCategory]; // Apenas a categoria selecionada

    return (
        <div className={styles.menuPage}>
            <div className={styles.container}>
                <h1 className={styles.pageHeading}>Nosso Menu: Sabores do Wok Sushi</h1>
                <p className={styles.pageDescription}>Explore a nossa seleção completa de pratos, preparados com os ingredientes mais frescos e autênticos da culinária asiática. Perfeito para refeições no restaurante ou para levar para casa!</p>

                {/* Seção de Categorias - Botões de Filtro */}
                <div className={styles.categoryNavigation}>
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
                            onClick={() => handleFilterClick(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Renderiza títulos e itens condicionalmente */}
                {visibleCategories.map(cat => (
                    <div key={cat} className={styles.menuCategory}>
                        {cat !== 'Todas' && <h2 className={styles.categoryTitle}>{cat}</h2>}

                        {/* Filtra os itens para a categoria específica */}
                        <div className={styles.menuGrid}>
                            {filteredItems
                                .filter(item => item.category === cat) // Filtra para mostrar apenas itens desta 'cat' específica
                                .map(item => (
                                    <div key={item.id} className={styles.menuItem}>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className={styles.itemImage}
                                            onClick={() => openModal(item.image)}
                                            loading="lazy"
                                        />
                                        <div className={styles.itemDetails}>
                                            <h3 className={styles.itemName}>{item.name}</h3>
                                            <p className={styles.itemDescription}>{item.description}</p>
                                            <p className={styles.itemPrice}>{item.price}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))}

                {/* Mensagem para se não houver itens na categoria */}
                {filteredItems.length === 0 && (
                    <p className={styles.noItemsMessage}>Não há itens nesta categoria ainda.</p>
                )}
            </div>

            {/* Modal para Visualização de Imagem */}
            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeModalButton} onClick={closeModal} aria-label="Fechar">
                            &times;
                        </button>
                        <img src={currentImage} alt="Visualização do Prato" className={styles.modalImage} />
                    </div>
                </div>
            )}
            <ScrollToTopButton />
        </div>
    )
}

export default MenuPage