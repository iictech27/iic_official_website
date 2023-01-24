/* eslint-disable @next/next/no-img-element */
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export default function GalleryPage() {
  return (
    <>
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
    src: "https://www.iictmsl.com/carousel%20images/1%20(1).jpg",
  },
  {
    id: 2,
    src: "https://www.iictmsl.com/carousel%20images/IMG_9466.JPG",
  },
  {
    id: 3,
    src: "https://www.iictmsl.com/carousel%20images/ead17.jpg",
  },
  {
    id: 4,
    src: "https://www.iictmsl.com/carousel%20images/ead2%20(1).jpg",
  },
  {
    id: 5,
    src: "https://www.iictmsl.com/carousel%20images/10.jpg",
  },
  {
    id: 6,
    src: "https://www.iictmsl.com/carousel%20images/6%20(1).jpg",
  },
  {
    id: 7,
    src: "https://www.iictmsl.com/carousel%20images/4.jpg",
  },
  {
    id: 8,
    src: "https://www.iictmsl.com/carousel%20images/3%20(1).jpg",
  },
];

const EADPhotos = [
  {
    id: 1,
    src: "https://www.iictmsl.com/imagegallery/ead1.jpg",
  },
  {
    id: 2,
    src: "https://www.iictmsl.com/imagegallery/ead2.jpg",
  },
  {
    id: 3,
    src: "https://www.iictmsl.com/imagegallery/ead3.jpg",
  },
  {
    id: 4,
    src: "https://www.iictmsl.com/imagegallery/ead4.jpg",
  },
  {
    id: 5,
    src: "https://www.iictmsl.com/imagegallery/ead5.jpg",
  },
  {
    id: 6,
    src: "https://www.iictmsl.com/imagegallery/ead6.jpg",
  },
  {
    id: 7,
    src: "https://www.iictmsl.com/imagegallery/ead7.jpg",
  },
  {
    id: 8,
    src: "https://www.iictmsl.com/imagegallery/ead8.jpg",
  },
  {
    id: 9,
    src: "https://www.iictmsl.com/imagegallery/ead9.jpg",
  },
  {
    id: 10,
    src: "https://www.iictmsl.com/imagegallery/ead10.jpg",
  },
  {
    id: 11,
    src: "https://www.iictmsl.com/imagegallery/ead11.jpg",
  },
  {
    id: 12,
    src: "https://www.iictmsl.com/imagegallery/ead12.jpg",
  },
  {
    id: 13,
    src: "https://www.iictmsl.com/imagegallery/ead13.jpg",
  },
  {
    id: 14,
    src: "https://www.iictmsl.com/imagegallery/ead14.jpg",
  },
  {
    id: 15,
    src: "https://www.iictmsl.com/imagegallery/ead15.jpg",
  },
  {
    id: 16,
    src: "https://www.iictmsl.com/imagegallery/ead16.jpg",
  },
  {
    id: 17,
    src: "https://www.iictmsl.com/imagegallery/ead17.jpg",
  },
  {
    id: 18,
    src: "https://www.iictmsl.com/imagegallery/ead18.jpg",
  },
  {
    id: 19,
    src: "https://www.iictmsl.com/imagegallery/ead19.jpg",
  },
  {
    id: 20,
    src: "https://www.iictmsl.com/imagegallery/ead20.jpg",
  },
];

const EStartPhotos = [
  {
    id: 1,
    src: "https://www.iictmsl.com/imagegallery/estart1.jpg",
  },
  {
    id: 2,
    src: "https://www.iictmsl.com/imagegallery/estart2.jpg",
  },
  {
    id: 3,
    src: "https://www.iictmsl.com/imagegallery/estart3.jpg",
  },
  {
    id: 4,
    src: "https://www.iictmsl.com/imagegallery/estart4.jpg",
  },
  {
    id: 5,
    src: "https://www.iictmsl.com/imagegallery/estart5.jpg",
  },
  {
    id: 6,
    src: "https://www.iictmsl.com/imagegallery/estart6.jpg",
  },
  {
    id: 7,
    src: "https://www.iictmsl.com/imagegallery/estart7.jpg",
  },
  {
    id: 8,
    src: "https://www.iictmsl.com/imagegallery/estart8.jpg",
  },
  {
    id: 9,
    src: "https://www.iictmsl.com/imagegallery/estart9.jpg",
  },
  {
    id: 10,
    src: "https://www.iictmsl.com/imagegallery/estart10.jpg",
  },
  {
    id: 11,
    src: "https://www.iictmsl.com/imagegallery/estart11.jpg",
  },
  {
    id: 12,
    src: "https://www.iictmsl.com/imagegallery/estart12.jpg",
  },
  {
    id: 13,
    src: "https://www.iictmsl.com/imagegallery/estart13.jpg",
  },
  {
    id: 14,
    src: "https://www.iictmsl.com/imagegallery/estart14.jpg",
  },
  {
    id: 15,
    src: "https://www.iictmsl.com/imagegallery/estart15.jpg",
  },
  {
    id: 16,
    src: "https://www.iictmsl.com/imagegallery/estart16.jpg",
  },
];

const GuestPhotos = [
  {
    id: 1,
    src: "https://www.iictmsl.com/Guests/2%20(2).jpg",
  },
  {
    id: 2,
    src: "https://www.iictmsl.com/Guests/4%20(2).jpg",
  },
  {
    id: 3,
    src: "https://www.iictmsl.com/Guests/ead9.jpg",
  },
  {
    id: 4,
    src: "https://www.iictmsl.com/Guests/img_3068.jpg",
  },
  {
    id: 5,
    src: "https://www.iictmsl.com/Guests/IMG_9482.JPG",
  },
  {
    id: 6,
    src: "https://www.iictmsl.com/Guests/ead12.jpg",
  },
  {
    id: 7,
    src: "https://www.iictmsl.com/Guests/IMG_3056%20(1).JPG",
  },
  {
    id: 8,
    src: "https://www.iictmsl.com/Guests/IMG_3080_NEW.jpg",
  },
  {
    id: 9,
    src: "https://www.iictmsl.com/Guests/8%20(1).jpg",
  },
  {
    id: 10,
    src: "https://www.iictmsl.com/Guests/ead16.jpg",
  },
  {
    id: 11,
    src: "https://www.iictmsl.com/Guests/estart10%20(1).jpg",
  },
  {
    id: 12,
    src: "https://www.iictmsl.com/Guests/5.jpg",
  },
  {
    id: 13,
    src: "https://www.iictmsl.com/Guests/IMG_3025.JPG",
  },
  {
    id: 14,
    src: "https://www.iictmsl.com/Guests/estart14%20(1).jpg",
  },
  {
    id: 15,
    src: "https://www.iictmsl.com/Guests/estart16.jpg",
  },
  {
    id: 16,
    src: "https://www.iictmsl.com/Guests/IMG_3017.JPG",
  },
  {
    id: 17,
    src: "https://www.iictmsl.com/Guests/ead13.jpg",
  },
  {
    id: 18,
    src: "https://www.iictmsl.com/Guests/IMG_3031.JPG",
  },
];

const EnvisagePhotos = [
  {
    id: 1,
    src: "https://www.iictmsl.com/envisage/IMG_2845.JPG",
  },
  {
    id: 2,
    src: "https://www.iictmsl.com/envisage/IMG_3034%20(2).JPG",
  },
  {
    id: 3,
    src: "https://www.iictmsl.com/envisage/IMG_3055%20(1).JPG",
  },
  {
    id: 4,
    src: "https://www.iictmsl.com/envisage/IMG_3059%20(1).JPG",
  },
  {
    id: 5,
    src: "https://www.iictmsl.com/envisage/IMG_3063%20(1).JPG",
  },
  {
    id: 6,
    src: "https://www.iictmsl.com/envisage/IMG_3111%20(1).JPG",
  },
  {
    id: 7,
    src: "https://www.iictmsl.com/envisage/IMG_3139%20(1).JPG",
  },
  {
    id: 8,
    src: "https://www.iictmsl.com/envisage/IMG_9484.JPG",
  },
  {
    id: 9,
    src: "https://www.iictmsl.com/envisage/IMG_9466%20(1).JPG",
  },
  {
    id: 10,
    src: "https://www.iictmsl.com/envisage/IMG_9469%20(1).JPG",
  },
  {
    id: 11,
    src: "https://www.iictmsl.com/envisage/_MG_5766.JPG",
  },
  {
    id: 12,
    src: "https://www.iictmsl.com/envisage/2%20(2).jpg",
  },
  {
    id: 13,
    src: "https://www.iictmsl.com/envisage/1.jpg",
  },
  {
    id: 14,
    src: "https://www.iictmsl.com/envisage/IMG_3382%20(1).JPG",
  },
  {
    id: 15,
    src: "https://www.iictmsl.com/envisage/IMG_3126.JPG",
  },
];
