import overlayImg from '../assets/images/home/slider1.png';
import '../styles/breadcrump.scss';

const Breadcrump = ({ 
    title = 'Sayfa Başlığı', 
    subtitle = 'Sayfa açıklaması',
    backgroundImage = overlayImg 
}) => {
    return (
        <div 
            className="breadcrump"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
            }}
        >
            <div className="breadcrump__content">
                <h1 className="breadcrump__title">{title}</h1>
                <p className="breadcrump__subtitle">{subtitle}</p>
            </div>
        </div>
    );
};

export default Breadcrump;
