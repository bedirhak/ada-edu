import Container from '../../components/Container';
import Breadcrump from '../../components/Breadcrump';
import '../../styles/services.scss';
import service1 from '../../assets/images/services/sercice1.jpg';
import service2 from '../../assets/images/services/service2.jpg';
import service3 from '../../assets/images/services/service3.png';
import service4 from '../../assets/images/services/service4.jpg';

const ServicesPage = () => {
    const services = [
        {
            title: 'İtalya’da Üniversite Eğitimi Danışmanlık Hizmeti',
            description: 'Öğrencinin hedeflerine, akademik geçmişine ve bütçesine uygun üniversite ve bölüm alternatiflerini birlikte planlıyor; başvurudan kayıt sürecine kadar tüm adımları profesyonel şekilde yönetiyoruz.',
            image: service1,
        },
        {
            title: 'İtalyan Konsolosluğu Eğitim İşlemleri',
            description: 'Vize, konsolosluk başvuru planlaması, evrak kontrolü, resmi başvuru adımları ve eğitim amaçlı oturum işlemleri için gerekli yönlendirmeyi eksiksiz şekilde sağlıyoruz.',
            image: service3,
        },
        {
            title: 'İtalya’da Burslu Eğitim Başvuruları',
            description: 'Burs fırsatlarını analiz ediyor, gerekli belgeleri hazırlıyor ve öğrencinin uygun programlara en güçlü şekilde başvuru yapabilmesi için stratejik destek veriyoruz.',
            image: service2,
        },
        {
            title: 'İtalyan Üniversitelerine Hazırlık Kurslarımız',
            description: 'Akademik uyum, ders takibi ve sınav hazırlığı için sunduğumuz kurslarla öğrencilerin İtalya’daki eğitim hayatına daha güçlü ve özgüvenli başlamasını destekliyoruz.',
            image: service4,
        },
    ];

    return (
        <>
            <Breadcrump 
                title="Hizmetlerimiz"
                subtitle="İtalya eğitim yolculuğunuz için sunduğumuz danışmanlık ve hazırlık çözümleri"
            />

            <Container>
                <div className="services">
                    {/* <div className="services__header">
                        <h1 className="services__title">Hizmetlerimiz</h1>
                        <p className="services__subtitle">
                            Ada Edu olarak İtalya’da eğitim hedefleyen öğrenciler için danışmanlık,
                            resmi süreç yönetimi, burs başvuruları ve hazırlık programları sunuyoruz.
                        </p>
                    </div> */}

                    <div className="services__list">
                        {services.map((service, index) => (
                            <section
                                key={service.title}
                                className={`services__item ${index % 2 === 1 ? 'services__item--reverse' : ''}`}
                            >
                                <div className="services__item-content">
                                    <h2 className="services__item-title">{service.title}</h2>
                                    <p className="services__item-description">{service.description}</p>
                                    <a href="/contact" className="services__item-link">
                                        Bilgi Al
                                    </a>
                                </div>

                                <div className="services__item-image-wrap">
                                    <img src={service.image} alt={service.title} className="services__item-image" />
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ServicesPage;