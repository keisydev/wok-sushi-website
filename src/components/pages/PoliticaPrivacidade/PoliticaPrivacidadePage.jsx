import { useEffect } from 'react'
import styles from '../PoliticaPrivacidade/PoliticaPrivacidadePage.module.css'

const PoliticaPrivacidade = () => {
  // Rola para o topo da página ao carregar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <h1 className={styles.pageHeading}>Política de Privacidade</h1>
        <p className={styles.lastUpdated}>Última atualização: 1 de Julho de 2025</p>

        <section className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>1. Introdução</h2>
          <p>
            No Wok Sushi, valorizamos a sua privacidade e estamos comprometidos em proteger os seus dados pessoais. Esta Política de Privacidade explica como recolhemos, usamos, divulgamos e protegemos as informações que obtemos de si através do nosso website e serviços. Ao utilizar o nosso website, concorda com as práticas descritas nesta política.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>2. Informações que Recolhemos</h2>
          <p>Podemos recolher os seguintes tipos de informações:</p>
          <ul>
            <li>**Informações Pessoais:** Nome, endereço de e-mail, número de telefone, data e hora da reserva, número de pessoas, e quaisquer outras informações que nos forneça através dos formulários de reserva ou contacto.</li>
            <li>**Dados de Utilização:** Informações sobre como acede e utiliza o nosso website, incluindo o seu endereço IP, tipo de navegador, páginas visitadas, tempo gasto em páginas, e dados de navegação.</li>
            <li>**Dados de Cookies:** Conforme detalhado na nossa Política de Cookies, utilizamos cookies e tecnologias semelhantes para melhorar a sua experiência no nosso website.</li>
          </ul>
        </section>

        <section className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>3. Como Usamos as Suas Informações</h2>
          <p>Utilizamos as informações recolhidas para:</p>
          <ul>
            <li>Processar e confirmar as suas reservas.</li>
            <li>Comunicar consigo sobre as suas reservas, ofertas e notícias (com o seu consentimento).</li>
            <li>Melhorar e personalizar a sua experiência no nosso website.</li>
            <li>Analisar o uso do website para otimizar os nossos serviços.</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
          </ul>
        </section>

        <section className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>4. Partilha de Informações</h2>
          <p>
            Não partilhamos as suas informações pessoais com terceiros, exceto quando necessário para processar a sua reserva (por exemplo, com um sistema de gestão de reservas, se aplicável), para cumprir a lei, ou com o seu consentimento explícito.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>5. Os Seus Direitos</h2>
          <p>Tem o direito de aceder, retificar, apagar, limitar o tratamento ou opor-se ao tratamento dos seus dados pessoais. Para exercer estes direitos, por favor, contacte-nos através do email reservas@woksushi.com.</p>
        </section>

        <section className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>6. Segurança dos Dados</h2>
          <p>Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger os seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição.</p>
        </section>

        <section className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>7. Alterações a Esta Política</h2>
          <p>Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. Quaisquer alterações serão publicadas nesta página com uma data de "Última atualização" revista.</p>
        </section>
        
        <section className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>8. Contacto</h2>
          <p>Se tiver alguma questão sobre esta Política de Privacidade, por favor, contacte-nos em: reservas@woksushi.com</p>
        </section>

      </div>
    </div>
  )
}

export default PoliticaPrivacidade