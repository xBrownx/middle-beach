import { Navigation, Pagination } from 'swiper/modules';import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';import 'swiper/css';import 'swiper/css/navigation';import 'swiper/css/pagination';import { IMAGES, SwiperImage } from '@/features/gallery/assets';export function Gallery() {    return (        <div            className={`mb-32 box-border h-full max-h-full max-w-full overflow-hidden`}        >            <Swiper                id={'swiper'}                modules={[Navigation, Pagination]}                spaceBetween={32}                slidesPerView={1.4}                loop={true}                navigation                pagination={{ clickable: true }}                centeredSlides={true}                style={{                    height: '100%',                    width: '100%',                }}            >                {IMAGES.map((image, i) => (                    <SwiperSlide className={`h-fit`} key={i}>                        <img                            src={image.src}                            alt={image.alt}                            className={`size-full rounded-lg object-cover`}                        />                    </SwiperSlide>                ))}            </Swiper>        </div>    );}