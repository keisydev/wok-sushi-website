import { useEffect } from 'react'
import styles from '../AvisoLegal/AvisoLegalPage.module.css'

const AvisoLegal = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  return (
    <div className={styles.legalPage}>
      <div className={styles.container}>
        <h1 className={styles.pageHeading}>Aviso Legal</h1>
        <p className={styles.lastUpdated}>Última atualização: 1 de Julho de 2025</p>

        <section className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>1. Informações Gerais</h2>
          <p>
            Este website é propriedade e operado por [Nome do Restaurante, ex: Wok Sushi Lda.], com sede em [Seu Endereço Real do Restaurante, ex: Rua do Sushi, 123 - Cidade do Sol, CEP 12345-678, Portugal].
            Para qualquer questão ou esclarecimento, pode contactar-nos através do email: reservas@woksushi.com.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>2. Termos de Utilização</h2>
          <p>
            O acesso e utilização deste website está sujeito aos presentes termos e condições. A utilização do website implica a aceitação plena e sem reservas de todas as disposições contidas neste Aviso Legal. Se não concordar com estes termos, por favor, não utilize este website.
          </p>
        </section>
        
        <section className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>3. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo presente neste website (textos, imagens, logótipos, vídeos, etc.) é propriedade do Wok Sushi ou de terceiros que concederam licença de uso. É proibida a reprodução, cópia, distribuição, modificação ou qualquer outra utilização sem o consentimento prévio e por escrito do Wok Sushi.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>4. Limitação de Responsabilidade</h2>
          <p>
            O Wok Sushi esforça-se para garantir que as informações apresentadas no website sejam precisas e atualizadas. No entanto, não garantimos a ausência de erros ou omissões, nem nos responsabilizamos por quaisquer danos diretos, indiretos ou consequenciais resultantes do uso deste website ou da impossibilidade de o utilizar.
          </p>
          <p>
            Não nos responsabilizamos por conteúdos de websites de terceiros para os quais este website possa redirecionar através de links.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2 className={styles.sectionTitle}>5. Legislação Aplicável e Foro</h2>
          <p>
            Este Aviso Legal é regido pela legislação portuguesa. Para a resolução de qualquer litígio emergente da interpretação e aplicação deste Aviso Legal, as partes elegem o foro da comarca de Braga, Portugal, com expressa renúncia a qualquer outro.
          </p>
        </section>

      </div>
    </div>
  );
}

export default AvisoLegal