import styles from '../home/HomePage.module.css'
import buttons from '../../../styles/buttons.module.css'
import Carousel from '../../carousel/Carousel'
import {Link} from 'react-router-dom'
import {menuItems} from '../../../data/menuData/menuItems'

//Imagens restaurante
import wok from '../../../assets/images/wok.jpg'
import bar from '../../../assets/images/bar.jpg'
import mesas from '../../../assets/images/mesas.jpg'
import area_kids from '../../../assets/images/area_kids.jpg'

const carouselImages = [wok, bar, mesas, area_kids]

const homeHighlights = menuItems.filter(item => 
  ['sushi3', 'pratoquente1', 'sobremesa1', 'pratoquente2'].includes(item.id)
)

const HomePage = () => {
    return(
        <div className={styles.homePage}>
            {/* Seção 1: Carrossel */}
            <section className={styles.carouselSection}>
                <h1 className={styles.visuallyHidden}>Wok Sushi - Seu Destino da Culinária Asiática</h1>
                <Carousel images={carouselImages} interval ={5000}/>
            </section>

            {/* Seção 2: Sobre o Restaurante (História e Ecologia) */}
            <section className={styles.aboutSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeading}>Nossa História: Tradição e Compromisso com o Futuro</h2>
                    <div className={styles.aboutContent}>
                        <div className={styles.aboutText}>
                            <p>O Wok Sushi nasceu da paixão em trazer a autêntica e inovadora culinária asiática para Guimarães, Portugal. Fundado em 2020 por um grupo de entusiastas da gastronomia oriental, nosso restaurante rapidamente se tornou um ponto de referência para quem busca uma experiência única, combinando o frescor dos ingredientes com a maestria de técnicas milenares e toques contemporâneos.</p>

                            <p>Nossa jornada é guiada pelo respeito à tradição, mas também pelo compromisso com o futuro. No Wok Sushi, acreditamos que a boa comida deve andar de mãos dadas com a responsabilidade ambiental. Por isso, somos um restaurante <strong>ecologicamente consciente</strong>. Investimos em práticas sustentáveis, desde a seleção de fornecedores locais e sustentáveis, minimizando nossa pegada de carbono, até a gestão inteligente de resíduos e a utilização de embalagens biodegradáveis para nosso serviço de Takeaway.</p>

                            <p>Cada prato servido no Wok Sushi é uma celebração do sabor, da cultura e do nosso profundo respeito pelo planeta. Convidamos você a fazer parte dessa história.</p>
                            <Link to="/reservas" className={styles.aboutButton}>Faça sua Reserva</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção 3: Especialidades Destaque (Pratos Mais Pedidos) */}
            <section className={styles.specialtiesSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeading}>Pratos Mais Pedidos: Nossas Especialidades em Destaque</h2>
                    <div className={styles.spacialtiesGrid}>
                        {homeHighlights.map(item =>(
                            <div className={styles.specialtyCard}>
                           <img src={item.image} alt={item.name} className={styles.cardImage}/>
                           <h3 className={styles.cardTitle}>{item.name}</h3>
                           <p className={styles.cardDescription}>{item.description}</p>
                        </div>
                        ))}
                    </div>
                    <Link to="/menu" className={buttons.baseButton}>Ver Menu Completo</Link>
                </div>
            </section>
        </div>
    )
}

export default HomePage