import { Mail, Phone, MapPin } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-grid">
                    {/* Sol - Hakkında */}
                    <div className="footer-section">
                        <h3 className="footer-title">Ada Edu</h3>
                        <p className="footer-tagline">Uluslararası Eğitim Danışmanlığı</p>
                        <p className="footer-description">
                            İtalya'da üniversite hedefleyen öğrenciler için başvuru, vize, yerleşim ve
                            akademik destek süreçlerini tek merkezden planlı, şeffaf ve sonuç odaklı
                            şekilde yönetiyoruz.
                        </p>
                    </div>

                    {/* Orta - Hızlı Linkler */}
                    <div className="footer-section">
                        <h3 className="footer-title">Hızlı Linkler</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Ana Sayfa</Link></li>
                            <li><Link to="/about">Hakkımızda</Link></li>
                            <li><Link to="/services">Hizmetlerimiz</Link></li>
                            <li><Link to="/contact">İletişim</Link></li>
                        </ul>
                    </div>

                    {/* Sağ - İletişim */}
                    <div className="footer-section">
                        <h3 className="footer-title">İletişim</h3>
                        <ul className="footer-contact">
                            <li>
                                <Phone size={16} />
                                <a href="tel:+393295694227">+39 329 569 4227</a>
                            </li>
                            <li>
                                <Mail size={16} />
                                <a href="mailto:info@adaedu.com">info@adaedu.com</a>
                            </li>
                            <li>
                                <MapPin size={16} />
                                <span>Ankara Ofis / İtalya Temsilcilik Ağı</span>
                            </li>
                        </ul>
                        <div className="footer-social">
                            <a href="https://www.instagram.com/adaedu" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://wa.me/393295694227" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <FaWhatsapp size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Ada Edu. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
