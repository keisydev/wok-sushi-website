import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import CookieConsentBanner from './components/CookieConsentBanner/CookieConsentBanner'

//Páginas
import HomePage from './components/pages/home/HomePage'
import MenuPage from './components/pages/menu/MenuPage'
import EspecialidadesPage from './components/pages/especialidades/EspecialidadesPage'
import GruposPage from './components/pages/grupos/GruposPage'
import ReservasPage from './components/pages/reservas/ReservasPage'
import PoliticaPrivacidadePage from './components/pages/PoliticaPrivacidade/PoliticaPrivacidadePage'
import AvisoLegalPage from './components/pages/AvisoLegal/AvisoLegalPage'
import PoliticaCookiesPage from './components/pages/PoliticaCookies/PoliticaCookiesPage'

function App() {

  return (
    <Router>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar/>
      <main>
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/menu' element={<MenuPage/>}/>
        <Route path='/especialidades' element={<EspecialidadesPage/>}/>
        <Route path='/grupos' element={<GruposPage/>}/>
        <Route path='/reservas' element={<ReservasPage/>}/>
        <Route path="/politica-privacidade" element={<PoliticaPrivacidadePage />} />
        <Route path="/aviso-legal" element={<AvisoLegalPage />} />
        *<Route path="/politica-cookies" element={<PoliticaCookiesPage />} />
        </Routes>
      </main>
      <Footer/>
      <CookieConsentBanner />
    </div>
    </Router>
  )
}

export default App
