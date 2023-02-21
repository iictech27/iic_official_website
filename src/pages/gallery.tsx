/* eslint-disable @next/next/no-img-element */
import Header from "@/components/core/Header";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export default function GalleryPage() {
  return (
    <>
      <Header title="Gallery" description="Gallery of IIC TMSL." />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper rounded-lg py-10 lg:rounded-xl"
      >
        {CarouselPhotos.map((photo) => (
          <SwiperSlide key={photo.id}>
            <div className="relative h-[260px] sm:h-[600px]">
              <img
                src={photo.src}
                alt={`Carousel pic ${photo.id}`}
                width={1600}
                height={400}
                className="rounded-lg object-cover lg:rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {
        // EAD Photos
      }
      <div className="mt-20 mb-10">
        <h2 className="text-center text-4xl font-bold tracking-tight sm:text-7xl">
          EAD
        </h2>
      </div>
      <SlideshowLightbox
        showThumbnails="true"
        className="container mx-auto columns-2 gap-4 space-y-4 md:columns-3 lg:columns-5"
      >
        {EADPhotos.map((photo) => (
          <img
            key={photo.id}
            className="w-full rounded"
            src={photo.src}
            alt={`EAD Pic ${photo.id}`}
          />
        ))}
      </SlideshowLightbox>
      {
        // E-Start Photos
      }
      <div className="mt-20 mb-10">
        <h2 className="text-center text-4xl font-bold tracking-tight sm:text-7xl">
          E-Start
        </h2>
      </div>
      <SlideshowLightbox
        showThumbnails="true"
        className="container mx-auto columns-2 gap-4 space-y-4 md:columns-3 lg:columns-5"
      >
        {EStartPhotos.map((photo) => (
          <img
            key={photo.id}
            className="w-full rounded"
            src={photo.src}
            alt={`E-Start Pic ${photo.id}`}
          />
        ))}
      </SlideshowLightbox>
      {
        // Guest Photos
      }
      <div className="mt-20 mb-10">
        <h2 className="text-center text-4xl font-bold tracking-tight sm:text-7xl">
          Guest
        </h2>
      </div>
      <SlideshowLightbox
        showThumbnails="true"
        className="container mx-auto columns-2 gap-4 space-y-4 md:columns-3 lg:columns-5"
      >
        {GuestPhotos.map((photo) => (
          <img
            key={photo.id}
            className="w-full rounded"
            src={photo.src}
            alt={`Guest Pic ${photo.id}`}
          />
        ))}
      </SlideshowLightbox>
      {
        // Envisage Photos
      }
      <div className="mt-20 mb-10">
        <h2 className="text-center text-4xl font-bold tracking-tight sm:text-7xl">
          Envisage
        </h2>
      </div>
      <SlideshowLightbox
        showThumbnails="true"
        className="container mx-auto columns-2 gap-4 space-y-4 md:columns-3 lg:columns-5"
      >
        {EnvisagePhotos.map((photo) => (
          <img
            key={photo.id}
            className="w-full rounded"
            src={photo.src}
            alt={`Guest Pic ${photo.id}`}
          />
        ))}
      </SlideshowLightbox>
    </>
  );
}

const CarouselPhotos = [
  {
    id: 1,
    src: "/images/ca_im/1.jpg",
  },
  {
    id: 2,
    src: "/images/ca_im/2.jpg",
  },
  {
    id: 3,
    src: "/images/ca_im/3.jpg",
  },
  {
    id: 4,
    src: "/images/ca_im/4.jpg",
  },
  {
    id: 5,
    src: "/images/ca_im/5.jpg",
  },
  {
    id: 6,
    src: "/images/ca_im/6.jpg",
  },
  {
    id: 7,
    src: "/images/ca_im/7.jpg",
  },
  {
    id: 8,
    src: "/images/ca_im/8.jpg",
  },
  {
    id: 9,
    src: "/images/ca_im/9.jpg",
  },
  {
    id: 10,
    src: "/images/ca_im/10.jpg",
  },
  {
    id: 11,
    src: "/images/ca_im/11.jpg",
  },
  {
    id: 12,
    src: "/images/ca_im/13.jpg",
  },
  {
    id: 13,
    src: "/images/ca_im/13.jpg",
  },

];

const EADPhotos = [
  {
    id: 1,
    src: "/images/imagegallery/ead1.jpg",
  },
  {
    id: 2,
    src: "/images/imagegallery/ead2.jpg",
  },
  {
    id: 3,
    src: "/images/imagegallery/ead3.jpg",
  },
  {
    id: 4,
    src: "/images/imagegallery/ead4.jpg",
  },
  {
    id: 5,
    src: "/images/imagegallery/ead5.jpg",
  },
  {
    id: 6,
    src: "/images/imagegallery/ead6.jpg",
  },
  {
    id: 7,
    src: "/images/imagegallery/ead7.jpg",
  },
  {
    id: 8,
    src: "/images/imagegallery/ead8.jpg",
  },
  {
    id: 9,
    src: "/images/imagegallery/ead9.jpg",
  },
  {
    id: 10,
    src: "/images/imagegallery/ead10.jpg",
  },
  {
    id: 11,
    src: "/images/imagegallery/ead11.jpg",
  },
  {
    id: 12,
    src: "/images/imagegallery/ead12.jpg",
  },
  {
    id: 13,
    src: "/images/imagegallery/ead13.jpg",
  },
  {
    id: 14,
    src: "/images/imagegallery/ead14.jpg",
  },
  {
    id: 15,
    src: "/images/imagegallery/ead15.jpg",
  },
  {
    id: 16,
    src: "/images/imagegallery/ead16.jpg",
  },
  {
    id: 17,
    src: "/images/imagegallery/ead17.jpg",
  },
  {
    id: 18,
    src: "/images/imagegallery/ead18.jpg",
  },
  {
    id: 19,
    src: "/images/imagegallery/ead19.jpg",
  },
  {
    id: 20,
    src: "/images/imagegallery/ead20.jpg",
  },
  {
    id: 21,
    src: "/images/imagegallery/ead21.jpg",
  },
  {
    id: 22,
    src: "/images/imagegallery/ead22.jpg",
  },
  {
    id: 23,
    src: "/images/imagegallery/ead23.jpg",
  },
  {
    id: 24,
    src: "/images/imagegallery/ead24.jpg",
  },
  {
    id: 25,
    src: "/images/imagegallery/ead25.jpg",
  },
];

const EStartPhotos = [
  {
    id: 1,
    src: "/images/imagegallery/estart1.jpg",
  },
  {
    id: 2,
    src: "/images/imagegallery/estart2.jpg",
  },
  {
    id: 3,
    src: "/images/imagegallery/estart3.jpg",
  },
  {
    id: 4,
    src: "/images/imagegallery/estart4.jpg",
  },
  {
    id: 5,
    src: "/images/imagegallery/estart5.jpg",
  },
  {
    id: 6,
    src: "/images/imagegallery/estart6.jpg",
  },
  {
    id: 7,
    src: "/images/imagegallery/estart7.jpg",
  },
  {
    id: 8,
    src: "/images/imagegallery/estart8.jpg",
  },
  {
    id: 9,
    src: "/images/imagegallery/estart9.jpg",
  },
  {
    id: 10,
    src: "/images/imagegallery/estart10.jpg",
  },
  {
    id: 11,
    src: "/images/imagegallery/estart11.jpg",
  },
  {
    id: 12,
    src: "/images/imagegallery/estart12.jpg",
  },
  {
    id: 13,
    src: "/images/imagegallery/estart13.jpg",
  },
  {
    id: 14,
    src: "/images/imagegallery/estart14.jpg",
  },
  {
    id: 15,
    src: "/images/imagegallery/estart15.jpg",
  },
  {
    id: 16,
    src: "/images/imagegallery/estart16.jpg",
  },
];

const GuestPhotos = [
  {
    id: 1,
    src: "/images/guests/1.jpg",
  },
  {
    id: 2,
    src: "/images/guests/2.jpg",
  },
  {
    id: 3,
    src: "/images/guests/3.jpg",
  },
  {
    id: 4,
    src: "/images/guests/4.jpg",
  },
  {
    id: 5,
    src: "/images/guests/5.jpg",
  },
  {
    id: 6,
    src: "/images/guests/6.jpg",
  },
  {
    id: 7,
    src: "/images/guests/7.jpg",
  },
  {
    id: 8,
    src: "/images/guests/8.jpg",
  },
  {
    id: 9,
    src: "/images/guests/9.jpg",
  },
  {
    id: 10,
    src: "/images/guests/10.jpg",
  },
  {
    id: 11,
    src: "/images/guests/11.jpg",
  },
  {
    id: 12,
    src: "/images/guests/12.jpg",
  },
  {
    id: 13,
    src: "/images/guests/13.jpg",
  },
  {
    id: 14,
    src: "/images/guests/14.jpg",
  },
  {
    id: 15,
    src: "/images/guests/15.jpg",
  },
  {
    id: 16,
    src: "/images/guests/16.jpg",
  },
  {
    id: 17,
    src: "/images/guests/17.jpg",
  },
  {
    id: 18,
    src: "/images/guests/18.jpg",
  },
];

const EnvisagePhotos = [
  {
    id: 1,
    src: "/images/guests/19.jpg",
  },
  {
    id: 2,
    src: "/images/guests/20.jpg",
  },
  {
    id: 3,
    src: "/images/guests/21.jpg",
  },
  {
    id: 4,
    src: "/images/guests/22.jpg",
  },
  {
    id: 5,
    src: "/images/guests/23.jpg",
  },
  {
    id: 6,
    src: "/images/guests/24.jpg",
  },
  {
    id: 7,
    src: "/images/guests/25.jpg",
  },
  {
    id: 8,
    src: "/images/guests/26.jpg",
  },
  {
    id: 9,
    src: "/images/guests/27.jpg",
  },
  {
    id: 10,
    src: "/images/guests/28.jpg",
  },
  {
    id: 11,
    src: "/images/guests/29.jpg",
  },
  {
    id: 12,
    src: "/images/guests/30.jpg",
  },
  {
    id: 13,
    src: "/images/guests/31.jpg",
  },
  {
    id: 14,
    src: "/images/guests/32.jpg",
  },
  {
    id: 15,
    src: "/images/guests/33.jpg",
  },
  {
    id: 16,
    src: "/images/guests/34.jpg",
  },
  {
    id: 17,
    src: "/images/guests/35.jpg",
  },
  {
    id: 18,
    src: "/images/guests/36.jpg",
  },
  {
    id: 19,
    src: "/images/guests/37.jpg",
  },

];
