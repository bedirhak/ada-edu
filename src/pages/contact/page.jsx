import { useState } from 'react';
import { Mail } from 'lucide-react';
import { FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';
import Breadcrump from '../../components/Breadcrump';
import '../../styles/contact.scss';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form gönderme işlemi burada yapılacak
        console.log('Form Data:', formData);
        alert('Mesajınız alındı! En kısa sürede sizinle iletişime geçeceğiz.');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
    };

    return (
        <>
            <Breadcrump 
                title="İletişim"
                subtitle="Ada Edu ile Italya egitim yolculugunuza birlikte baslayalim"
            />
            <div className="contact-page">
                <div className="contact-content">
                    <div className="contact-grid">
                        {/* Sol Taraf - İletişim Bilgileri */}
                        <div className="contact-info-section">
                            <h1 className="main-title">İletişimde Kalalım</h1>
                            <p className="subtitle">Sorularinizi birlikte netlestirelim</p>
                            <p className="description">
                                Basvuru, vize, bolum secimi veya ders destek kurslari hakkinda bilgi almak icin bize yazin.
                            </p>

                            <div className="contact-details">
                                <a href="mailto:info@adaedu.com" className="contact-item email-item">
                                    <Mail size={18} />
                                    <span>info@adaedu.com</span>
                                </a>

                                <div className="social-icons">
                                    <a href="https://www.instagram.com/adaeduitaly/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <FaInstagram size={16} />
                                    </a>
                                    <a href="https://wa.me/393295694227" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <FaWhatsapp size={16} />
                                    </a>
                                    <a href="tel:+393295694227" className="social-icon">
                                        <FaPhone size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Sağ Taraf - İletişim Formu */}
                        <div className="contact-form-wrapper">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="firstName">İsim</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Soyisim</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">E-Posta *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Mesaj</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <div className="form-actions">
                                    <button type="submit" className="submit-btn">
                                        Gönder
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Google Maps */}
            <div className="contact-map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48963.64511617232!2d32.817386250000005!3d39.9207706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f4f77f8f95f%3A0x8f9f6ecf0f3fbe86!2sK%C4%B1z%C4%B1lay%2C%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1770133360264!5m2!1str!2str" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ada Edu Ankara Ofis Konumu"
                ></iframe>
            </div>
        </>
    );
};


export default ContactPage;
