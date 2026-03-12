import { useState, useEffect } from 'react';
import Container from '../../components/Container';
import '../../styles/hero-slider.scss';
import slider1 from '../../assets/images/home/slider1.png';
import slider2 from '../../assets/images/home/slider2.jpg';
import slider3 from '../../assets/images/home/slider3.jpeg';
import slider4 from '../../assets/images/home/slider4.jpeg';
import whyImage from '../../assets/images/home/why.jpg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [typedText, setTypedText] = useState('');
    const [typedSubtext, setTypedSubtext] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    
    const mainText = 'İtalya üniversite hayalini birlikte gerçekleştirelim.';
    const subText = 'Ada Edu ile başvuru, vize ve akademik destek tek platformda';
    
    const slides = [
        { id: 1, image: slider1 },
        { id: 2, image: slider2 },
        // { id: 3, image: slider3 },
        // { id: 4, image: slider4 }
    ];

    // Typewriter effect
    useEffect(() => {
        let currentIndex = 0;
        setTypedText('');
        setTypedSubtext('');
        
        const typeMainText = setInterval(() => {
            if (currentIndex < mainText.length) {
                setTypedText(mainText.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(typeMainText);
                // Ana metin bitince alt metni başlat
                setTimeout(() => {
                    let subIndex = 0;
                    const typeSubText = setInterval(() => {
                        if (subIndex < subText.length) {
                            setTypedSubtext(subText.slice(0, subIndex + 1));
                            subIndex++;
                        } else {
                            clearInterval(typeSubText);
                            setShowCursor(false);
                        }
                    }, 50);
                }, 300);
            }
        }, 80);

        return () => {
            clearInterval(typeMainText);
            setShowCursor(true);
        };
    }, []);

    // Slider auto-play
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Her 5 saniyede bir değişir

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <>
            <div className="hero-slider">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`hero-slider__slide ${
                            index === currentSlide ? 'hero-slider__slide--active' : ''
                        }`}
                    >
                        <img src={slide.image} alt={`Slider ${slide.id}`} />
                    </div>
                ))}

                <div className="hero-slider__content">
                    <h1 className="typewriter">
                        {typedText}
                        {showCursor && typedText.length < mainText.length && <span className="cursor">|</span>}
                    </h1>
                    <p className="typewriter">
                        {typedSubtext}
                        {showCursor && typedSubtext.length < subText.length && typedText.length === mainText.length && <span className="cursor">|</span>}
                    </p>
                </div>

                <button className="hero-slider__nav hero-slider__nav--prev" onClick={prevSlide}>
                    <ChevronLeft />
                </button>
                <button className="hero-slider__nav hero-slider__nav--next" onClick={nextSlide}>
                    <ChevronRight />
                </button>

                <div className="hero-slider__dots">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={index === currentSlide ? 'active' : ''}
                            onClick={() => goToSlide(index)}
                            aria-label={`Slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <Container>
                <div className="home-intro">
                    <h2 className="home-intro__title">
                        Ada Edu'ya Hoş Geldiniz
                    </h2>
                    <p className="home-intro__text">
                        İtalya'da lisans veya yüksek lisans okumak isteyen öğrenciler için
                        okul seçimi, başvuru dosyası, vize süreci, konaklama planlaması ve
                        ders destek kursları ile uçtan uca yol arkadaşlığı sunuyoruz.
                    </p>
                </div>

                <section className="why-choose">
                    <div className="why-choose__content">
                        <h2>Neden Bizi Tercih Etmelisiniz?</h2>
                        <p>
                            Ada Edu olarak öğrencilerimiz için son derece titiz çalışan profesyonel bir ekibe sahibiz.
                            Ekibimiz İtalya'da eğitim tecrübesine sahip, alanında uzman kişilerden oluşuyor.
                        </p>
                        <p>
                            Öğrencilerimizin memnuniyeti birinci önceliğimiz olduğundan tüm süreç planlı ve sorunsuz
                            şekilde ilerler. Şimdiye dek yüzlerce öğrencimiz İtalya'daki üniversitelerden kabul aldı
                            ve eğitim hayatlarına güvenle devam etti.
                        </p>
                        <p>
                            Roma, Milano, Torino, Bologna, Napoli, Venedik, Genova, Pavia ve Perugia gibi şehirlerdeki
                            yerel ağımızla resmi işlemler, adaptasyon ve akademik destek konularında yıl boyu aktif
                            danışmanlık veriyoruz.
                        </p>
                    </div>

                    <div className="why-choose__image-wrap">
                        <img src={whyImage} alt="Ada Edu neden bizi tercih etmelisiniz görseli" className="why-choose__image" />
                    </div>
                </section>
            </Container>
        </>
    );
};

export default HomePage;
