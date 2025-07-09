import { useEffect } from 'react'
import styles from '../PoliticaCookies/PoliticaCookiesPage.module.css'
const PoliticaCookies = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <h1 className={styles.pageHeading}>Política de Cookies</h1>
        <p className={styles.lastUpdated}>Última atualização: 1 de Julho de 2025</p>

        <section className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>1. O que são Cookies?</h2>
          <p>
            Cookies são pequenos ficheiros de texto que são armazenados no seu dispositivo (computador, tablet, smartphone) quando visita certos websites. Estes ficheiros contêm informações que podem ser lidas posteriormente pelo website ou por terceiros (como serviços de análise ou publicidade), permitindo que o website o "lembre" e personalize a sua experiência.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>2. Como Usamos os Cookies</h2>
          <p>Utilizamos cookies para:</p>
          <ul>
            <li>**Cookies Essenciais:** São necessários para o funcionamento básico do website, como a navegação e o acesso a áreas seguras. Sem estes cookies, o website não funcionaria corretamente.</li>
            <li>**Cookies de Preferência:** Permitem que o website se lembre de informações que mudam a forma como o website se comporta ou parece, como o seu idioma preferido ou a região em que se encontra.</li>
            <li>**Cookies Estatísticos/Analíticos:** Ajudam-nos a compreender como os visitantes interagem com o website, recolhendo e comunicando informações de forma anónima. Isto ajuda-nos a melhorar a funcionalidade e o conteúdo do site.</li>
            <li>**Cookies de Marketing:** Utilizados para rastrear visitantes em websites com o objetivo de exibir anúncios relevantes e apelativos para o utilizador individual e, portanto, mais valiosos para editores e anunciantes terceiros.</li>
          </ul>
        </section>

        <section className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>3. Cookies de Terceiros</h2>
          <p>
            O nosso website pode utilizar serviços de terceiros que também instalam cookies no seu dispositivo, como o Google Analytics para recolha de dados estatísticos ou o Google Maps para exibir a nossa localização. Não temos controlo sobre estes cookies de terceiros.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>4. Gestão de Cookies</h2>
          <p>
            Pode gerir as suas preferências de cookies a qualquer momento através das definições do seu navegador. A maioria dos navegadores permite-lhe recusar todos os cookies ou aceitar apenas certos tipos. No entanto, desativar os cookies essenciais pode afetar a funcionalidade do website.
          </p>
          <ul>
            <li>
              <strong>Chrome:</strong> <a href="https://support.google.com/chrome/answer/95647?hl=pt-PT" target="_blank" rel="noopener noreferrer" className={styles.browserLink}>Como gerir cookies no Chrome</a>
            </li>
            <li>
              <strong>Firefox:</strong> <a href="https://support.mozilla.org/pt-PT/kb/ativar-desativar-cookies-websites-utilizam-monitorizar-preferencias?redirectslug=ativar-e-desativar-cookies-que-os-websites-utiliza&redirectlocale=pt-PT" target="_blank" rel="noopener noreferrer" className={styles.browserLink}>Como gerir cookies no Firefox</a>
            </li>
            <li>
              <strong>Edge:</strong> <a href="https://support.microsoft.com/pt-pt/windows/gerir-cookies-no-microsoft-edge-ver-permitir-bloquear-eliminar-e-utilizar-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className={styles.browserLink}>Como gerir cookies no Edge</a>
            </li>
            <li>
              <strong>Safari:</strong> <a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className={styles.browserLink}>Como gerir cookies no Safari</a>
            </li>
          </ul>
          <p>
            A sua aceitação do nosso banner de cookies registará a sua preferência. Para revogar o consentimento, pode limpar os dados de navegação do seu navegador.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>5. Alterações a Esta Política</h2>
          <p>Reservamo-nos o direito de atualizar esta Política de Cookies periodicamente. Quaisquer alterações serão publicadas nesta página com uma data de "Última atualização" revista.</p>
        </section>

      </div>
    </div>
  )
}

export default PoliticaCookies