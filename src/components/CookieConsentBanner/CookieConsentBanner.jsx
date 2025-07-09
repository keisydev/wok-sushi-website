import { useState, useEffect } from 'react'
import styles from '../CookieConsentBanner/CookieConsentBanner.module.css'
import { Link } from 'react-router-dom'

const COOKIE_CONSENT_KEY = 'wok_sushi_cookie_consent'

const CookieConsentBanner = () => {
  // Estado para controlar a visibilidade do banner
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o consentimento já foi dado no localStorage
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      // Se não houver consentimento, mostra o banner após um pequeno atraso
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500); 
      return () => clearTimeout(timer); // Limpa o timer se o componente desmontar
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined'); // Ou 'rejected'
    setIsVisible(false);
    alert('Você optou por não aceitar todos os cookies. Algumas funcionalidades podem ser limitadas.');
  };

  if (!isVisible) {
    return null; // Não renderiza nada se o banner não for visível
  }

  return (
    <div className={styles.cookieBanner}>
      <div className={styles.bannerContent}>
        <p className={styles.bannerText}>
          Este website utiliza cookies para garantir que você tenha a melhor experiência. Ao continuar a navegar, você concorda com o uso de cookies.
          <Link to="/politica-cookies" className={styles.cookiePolicyLink}> Saiba mais.</Link>
        </p>
        <div className={styles.bannerActions}>
          <button onClick={handleAccept} className={styles.acceptButton}>Aceitar</button>
          <button onClick={handleDecline} className={styles.declineButton}>Recusar</button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsentBanner