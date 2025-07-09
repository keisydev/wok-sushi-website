import { useState, useEffect } from 'react'
import styles from '../grupos/GruposPage.module.css'
import buttons from '../../../styles/buttons.module.css'
import { Link } from 'react-router-dom'

const groupMenus = [
  {
    id: 'menuGrupo1',
    name: 'Menu Grupo Essencial',
    price: '€59.90',
    description: 'Ideal para grupos que desejam uma introdução aos sabores clássicos do Wok Sushi. Perfeito para pequenas celebrações.',
    dishes: [
      'Entrada: Gyoza de Frango (4un)',
      'Sushi: Combinado de 20 peças (seleção chef)',
      'Prato Quente: Pad Thai de Frango (2un)',
      'Sobremesa: Mochi (2un)',
      'Bebida: Água ou Sumo',
    ],
  },
  {
    id: 'menuGrupo2',
    name: 'Menu Grupo Deluxe',
    price: '€79.90',
    description: 'Uma experiência gastronômica mais completa, com uma variedade rica de pratos. Indicado para eventos especiais.',
    dishes: [
      'Entrada: Harumaki (4un) e Sunomono (2un)',
      'Sushi: Combinado Super Premium (40 peças)',
      'Prato Quente: Udon Clássico com Tempura de Camarão (4un)',
      'Sobremesa: Cheesecake de Chá Verde (4un)',
      'Bebida: Vinho da Casa (1 garrafa) ou Sumo',
    ],
  },
  {
    id: 'menuGrupo3',
    name: 'Menu Grupo Degustação Wok Sushi',
    price: '€99.90',
    description: 'Nosso menu mais exclusivo, com os pratos mais sofisticados e a opção de sashimi fresco. Uma verdadeira jornada culinária.',
    dishes: [
      'Entrada: Tuna Tataki (6un) e Karaage (6un)',
      'Sushi: Seleção de Sashimis, sushis e gunkans Premium (50 un)',
      'Prato Quente: Teppanyaki (3un) e Udon Clássico (3un) ' ,
      'Sobremesa: Pudim de Manga ou Mochi (6un)',
      'Bebida: Vinho Premium (1 garrafa) ou Cerveja Japonesa',
    ],
  },
];

const GruposPage = () => {
    //Estado para controlar qual menu de grupo está aberto 
    const [openMenuId, setOpenMenuId] = useState(null)

    //Rola para o topo da página
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    },[])

    //Função para alterar a visibilidade do menu
    const toggleMenu = (id) => {
        setOpenMenuId(openMenuId === id ? null : id) // Se já estiver aberto, fecha; senão, abre
    }
    
    return(
        <div className={StyleSheet.gruposPage}>
            <div className={styles.container}>
                <h1 className={styles.pageHeading}> Menus Exclusivos para Grupos</h1>
                <p className={styles.pageDescription}>No Wok Sushi, celebramos momentos especiais com a melhor culinária asiática. Nossos menus para grupos foram cuidadosamente elaborados para proporcionar uma experiência inesquecível, com uma variedade de pratos que agradam a todos os paladares. Perfeitos para confraternizações de amigos, eventos familiares ou reuniões corporativas.</p>

                <p className={styles.pageDescription}>Descubra as opções abaixo e prepare-se para uma experiência gastronômica memorável, com a qualidade e o ambiente que só o Wok Sushi oferece. Para mais informações ou para personalizar o seu menu, entre em contato através da nossa página de reservas.</p>

                <div className={styles.groupMenusContainer}>
                    {groupMenus.map(menu => (
                        <div key={menu.id} className={styles.groupMenuCard}>
                            <div className={styles.meuHeader} onClick={() => toggleMenu(menu.id)}>
                                <h2 className={styles.menuName}>{menu.name}</h2>
                                <span className={styles.menuprice}>{menu.price}</span>
                                <span className={styles.toggleIcon}>
                                    {openMenuId === menu.id ?'-' : '+'} {/* Ícone de expandir/contrair */}
                                </span>
                            </div>

                            {/* Conteúdo do menu drop-down (visível se openMenuId === menu.id) */}
                            {openMenuId === menu.id && (
                                <div className={styles.menuContent}>
                                    <p className={styles.menuDescription}>{menu.description}</p>
                                    <h4 className={styles.dishesTitle}>Pratos incluídos:</h4>
                                    <ul className={styles.dishesList}>
                                        {menu.dishes.map((dish,index) =>(
                                            <li key={index}>{dish}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                 </div>
                    {/* Botão de redirecionamento para Reservas */}
                    <div className={styles.reserveCta}>
                        <p className={styles.reserveText}>Pronto para celebrar no Wok Sushi? Faça sua reserva agora!</p>
                        <Link to="/reservas" className={buttons.baseButton}>Faça sua Reserva</Link>
                    </div>
                  </div>  
        </div>
    )
}

export default GruposPage