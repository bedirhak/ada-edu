import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Breadcrump from '../../components/Breadcrump';
import Container from '../../components/Container';
import '../../styles/about.scss';

const AboutPage = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            // Google Places API çağrısı
            // const response = await fetch(`/api/reviews`);
            // const data = await response.json();
            // setReviews(data.reviews);
            
            // Geçici örnek veriler (API entegrasyonu için hazır)
            const mockReviews = [
                {
                    id: 1,
                    author_name: "Ayse Yilmaz",
                    rating: 5,
                    text: "Ada Edu ile Milano'daki universite basvuru surecimi eksiksiz tamamladim. Vize surecinde de adim adim destek aldigim icin cok rahatti.",
                    time: "2 hafta önce",
                    profile_photo_url: null
                },
                {
                    id: 2,
                    author_name: "Mehmet Kaya",
                    rating: 5,
                    text: "Okul kaydindan konaklamaya kadar tum surec net bir planla ilerledi. Italya'ya gittikten sonra da ders destek kurslari cok isime yaradi.",
                    time: "1 ay önce",
                    profile_photo_url: null
                },
                {
                    id: 3,
                    author_name: "Zeynep Demir",
                    rating: 5,
                    text: "Niyet mektubu ve evrak hazirliginda aldigim profesyonel yonlendirme kabul alma sansimi ciddi sekilde artirdi.",
                    time: "3 hafta önce",
                    profile_photo_url: null
                },
                {
                    id: 4,
                    author_name: "Ahmet Sahin",
                    rating: 5,
                    text: "Bologna'ya tasindigimda adaptasyon surecinde yalniz kalmadim. Ada Edu ekibi her adimda hizli destek verdi.",
                    time: "1 hafta önce",
                    profile_photo_url: null
                },
                {
                    id: 5,
                    author_name: "Fatma Celik",
                    rating: 5,
                    text: "Ailem surecle ilgili endiseliydi, yapilan bilgilendirme gorusmeleri sayesinde hepimiz ne yapacagimizi net sekilde ogrendik.",
                    time: "2 ay önce",
                    profile_photo_url: null
                },
                {
                    id: 6,
                    author_name: "Can Ozdemir",
                    rating: 5,
                    text: "Sinav doneminde aldigim ders destek etutleri sayesinde zorlandigim iki dersi tek donemde gectim.",
                    time: "5 gün önce",
                    profile_photo_url: null
                }
            ];
            
            setReviews(mockReviews);
            setLoading(false);
        } catch (err) {
            setError('Yorumlar yüklenirken bir hata oluştu');
            setLoading(false);
        }
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                size={16}
                fill={index < rating ? '#fbbf24' : 'none'}
                color={index < rating ? '#fbbf24' : '#d1d5db'}
            />
        ));
    };

    return (
        <>
            <Breadcrump
                title="Hakkımızda"
                subtitle="Ada Edu'nun öğrenci odaklı danışmanlık yaklaşımını keşfedin"
            />

            <Container>
                <div className="about-page">
                    {/* <div className="about-header">
                        <h1>Hakkımızda</h1>
                        <p>Ada Edu, Italya'da universite egitimi hedefleyen ogrencilere odaklanan bir danismanlik platformudur.</p>
                        <p>Basvuru, vize, yerlesim ve ders destek asamalarinda ogrencilerin yaninda, sonuc odakli bir ekip ile ilerliyoruz.</p>
                    </div> */}

                    {/* Google Yorumları Bölümü */}
                    <div className="reviews-section">
                        <div className="reviews-header">
                            <h2>Ogrenci Yorumlari</h2>
                            <p>Sureci bizimle yuruten ogrencilerimizin deneyimleri</p>
                        </div>

                        {loading && (
                            <div className="reviews-loading">
                                <p>Yorumlar yükleniyor...</p>
                            </div>
                        )}

                        {error && (
                            <div className="reviews-error">
                                <p>{error}</p>
                            </div>
                        )}

                        {!loading && !error && (
                            <div className="reviews-slider">
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 30,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 30,
                                        },
                                    }}
                                >
                                    {reviews.map((review) => (
                                        <SwiperSlide key={review.id}>
                                            <div className="review-card">
                                                <div className="review-header">
                                                    <div className="review-author">
                                                        <div className="author-avatar">
                                                            {review.profile_photo_url ? (
                                                                <img src={review.profile_photo_url} alt={review.author_name} />
                                                            ) : (
                                                                <span>{review.author_name.charAt(0)}</span>
                                                            )}
                                                        </div>
                                                        <div className="author-info">
                                                            <h3>{review.author_name}</h3>
                                                            <span className="review-time">{review.time}</span>
                                                        </div>
                                                    </div>
                                                    <div className="review-rating">
                                                        {renderStars(review.rating)}
                                                    </div>
                                                </div>
                                                <p className="review-text">{review.text}</p>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default AboutPage;
