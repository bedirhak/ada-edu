import { FaInstagram, FaYoutube } from 'react-icons/fa';

const SocialIcons = () => {
    return (
        <div style={{ position: 'fixed', right: '20px', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          
            <a href="https://www.instagram.com/adaeduitaly/" target="_blank" rel="noopener noreferrer" style={{ padding: '10px', backgroundColor: '#E1306C', color: 'white', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FaInstagram size={18} />
            </a>
            <a href="https://www.youtube.com/@adaeduitaly" target="_blank" rel="noopener noreferrer" style={{ padding: '10px', backgroundColor: '#FF0000', color: 'white', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FaYoutube size={18} />
            </a>
        </div>
    );
};

export default SocialIcons;
