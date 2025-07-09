import { useState, useEffect } from 'react'
import styles from './ReservasPage.module.css'
import buttons from '../../../styles/buttons.module.css'

const FormsPree_EndPoint = 'https://formspree.io/f/xblybvda'

const ReservasPage = () => {
    //Estados para os campos do formulário
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        message: '',
    })

    //Estados para erros de validação
    const [errors, setErrors] = useState({})
    //Estado para mensagem de sucesso/erro
    const [submitMessage, setSubmitMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    //Rola para o topo da página
    useEffect (() => {
        window.scrollTo({top: 0, behavior:'smooth'})
    },[])

    // Gerenciar o desaparecimento da mensagem    
    useEffect(() => {
        if(submitMessage) {
            const timer = setTimeout(() => {
                setSubmitMessage('')
                setErrors({})
            },5000)
            
            return () => clearTimeout(timer)
        }
    }, [submitMessage]) //Dependência: este efeito roda sempre que submitMessage muda

    //Handler para mudanças nos inputs dos formunários
    const handleChange = (e) => {
        const{name, value} = e.target 
        setFormData({...formData,
            [name]: value,
        })
        //Limpa o erro assim que o usuário começa a digitar
        if(errors[name]) {
            setErrors({...errors,
                [name]: null,
            })
        }
    }

    //Validação do formulário
    const validateForm = () => {
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório!'
        if (!formData.email.trim()) {
            newErrors.email = 'Email é obirgatório!'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email inválido'
        }
        if(!formData.phone.trim()) newErrors.phone = 'Telefone é obrigatório!'
        if(!formData.date) newErrors.date = 'Data é obrigatória!'
        if(!formData.time) newErrors.time = 'Hora é obrigatória!'
        if(!formData.guests || formData.guests < 1) newErrors.guests = 'O número de pessoas deve ser no mínimo 1'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0 //Retorna true se não houver erros
    }

    //Hangle para envio de formulário
    const handleSubmit = async (e) => { 
    e.preventDefault();

    if (!validateForm()) {
      setSubmitMessage('Por favor, corrija os erros no formulário.');
      return // Parar se a validação falhar
    }

    setIsSubmitting(true) // Formulário está sendo enviado

    try {
      const response = await fetch(FormsPree_EndPoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // Para o Formspree responder JSON
        },
        body: JSON.stringify(formData) // Converte os dados do formulário para JSON
      });

      if (response.ok) { // Se a resposta for 2xx (sucesso)
        setSubmitMessage('Sua reserva foi enviada com sucesso! Aguarde a confirmação por email.');
        setFormData({ // Reseta o formulário
          name: '', email: '', phone: '', date: '', time: '', guests: '', message: '',
        });
        setErrors({}); // Limpa erros
      } else {
        // Se a resposta não for 2xx, tente ler a mensagem de erro do Formspree
        const data = await response.json()
        setSubmitMessage(data.error || 'Ocorreu um erro ao enviar a reserva. Tente novamente.')
      }
    } catch (error) {
      // Captura erros de rede ou outros problemas
      console.error('Erro ao enviar formulário:', error)
      setSubmitMessage('Ocorreu um erro de rede. Verifique sua conexão e tente novamente.')
    } finally {
      setIsSubmitting(false) // Terminou o envio, libera o botão
    }
    }

    return(
        <div className={styles.ReservasPage}>
            <div className={styles.container}>
                <h1 className={styles.pageHeading}> Faça sua reserva</h1>
                <p className={styles.pageDescription}>Preencha o formulário abaixo para reservar sua mesa no Wok Sushi. Entraremos em contato para confirmar sua reserva o mais breve possível!</p>

                <div className={styles.reservationContent}>
                    {/* Formulário de Reserva */}
                    <div className={styles.formContainer}>
                        <h2 className={styles.formHeading}>Detalhes da reserva</h2>
                        <form onSubmit={handleSubmit} className={styles.reservationForm}>
                            {submitMessage && (
                                <p className={`${styles.submitMessage} ${Object.keys(errors).length <= 0 ? styles.successMessage : styles.errorMessage}`}>{submitMessage}</p>
                            )}

                            <div className={styles.formGroup}>
                                <label htmlFor='name' className={styles.label}>Nome completo *</label>
                                <input
                                type='text'
                                id='name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                                placeholder='Nome completo'
                                />
                                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                            </div>
                            <div className={styles.formGroup}>
                                 <label htmlFor="email" className={styles.label}>Email *</label>
                                <input
                                type="email"
                                 id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                                placeholder="seu.email@exemplo.com"
                                />
                                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="phone" className={styles.label}>Telefone *</label>
                                <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                                placeholder="(XX) XXXXX-XXXX"
                                />
                                {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                            </div>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="date" className={styles.label}>Data *</label>
                                    <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className={`${styles.input} ${errors.date ? styles.inputError : ''}`}
                                    />
                                    {errors.date && <span className={styles.errorText}>{errors.date}</span>}
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="time" className={styles.label}>Hora *</label>
                                    <input
                                    type="time"
                                    id="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    className={`${styles.input} ${errors.time ? styles.inputError : ''}`}
                                    />
                                    {errors.time && <span className={styles.errorText}>{errors.time}</span>}
                                </div>

                                <div className={styles.formGroup}>
                                 <label htmlFor="guests" className={styles.label}>Nº de Pessoas *</label>
                                 <input
                                    type="number"
                                    id="guests"
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    className={`${styles.input} ${errors.guests ? styles.inputError : ''}`}
                                    min="1"
                                    />
                                    {errors.guests && <span className={styles.errorText}>{errors.guests}</span>}
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>Mensagem (Opcional)</label>
                                <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={styles.textarea}
                                rows="4"
                                placeholder="Alguma solicitação especial ou observação?"
                                ></textarea>
                            </div>

                            <div className={styles.button}>
                                <button type="submit" className={buttons.baseButton} disabled={isSubmitting}>
                                {isSubmitting ? 'Enviando...' : 'Enviar Reserva'} </button>
                            </div>
                        </form>
                    </div>
                    {/* Informações de Contato e Localização */}
                    <div className={styles.contactInfoContainer}>
                        <h2 className={styles.contactHeading}>Fale Conosco</h2>
                        <div className={styles.contactDetails}>
                            <p><strong>Telefone:</strong> (555) 555-555-555</p>
                            <p><strong>Email:</strong> reservas@woksushi.com</p>
                            <p><strong>Endereço:</strong> Av. de Diogo Leite, 123 - Gaia, 1234-567 </p>
                            <p><strong>Horário de funcionamento</strong></p>
                            <ul>
                                <li>Terça a Domingo: 12h00 - 15h00 | 19h00 - 23h00</li>
                                <li>Segunda: Fechado</li>
                            </ul>
                        </div>
                        {/* Mapa Placeholder */}
                        <div className={styles.mapPlaceholder}>
                            <p>Localização:</p>
                            <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1502.4221840805674!2d-8.613643161321221!3d41.137923312881746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464de3eaf64ef%3A0xf83f7bdca41b7fab!2sAv.%20de%20Diogo%20Leite%2C%20Vila%20Nova%20de%20Gaia!5e0!3m2!1spt-PT!2spt!4v1751625819025!5m2!1spt-PT!2spt"
                            width="100%" 
                            height="300" 
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade" 
                            title="Localização do Wok Sushi"
                        ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReservasPage