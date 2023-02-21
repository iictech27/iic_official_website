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
    src: "/imagegallery/ead1.jpg",
  },
  {
    id: 2,
    src: "/imagegallery/ead2.jpg",
  },
  {
    id: 3,
    src: "/imagegallery/ead3.jpg",
  },
  {
    id: 4,
    src: "/imagegallery/ead4.jpg",
  },
  {
    id: 5,
    src: "/imagegallery/ead5.jpg",
  },
  {
    id: 6,
    src: "/imagegallery/ead6.jpg",
  },
  {
    id: 7,
    src: "/imagegallery/ead7.jpg",
  },
  {
    id: 8,
    src: "/imagegallery/ead8.jpg",
  },
  {
    id: 9,
    src: "/imagegallery/ead9.jpg",
  },
  {
    id: 10,
    src: "/imagegallery/ead10.jpg",
  },
  {
    id: 11,
    src: "/imagegallery/ead11.jpg",
  },
  {
    id: 12,
    src: "/imagegallery/ead12.jpg",
  },
  {
    id: 13,
    src: "/imagegallery/ead13.jpg",
  },
  {
    id: 14,
    src: "/imagegallery/ead14.jpg",
  },
  {
    id: 15,
    src: "/imagegallery/ead15.jpg",
  },
  {
    id: 16,
    src: "/imagegallery/ead16.jpg",
  },
  {
    id: 17,
    src: "/imagegallery/ead17.jpg",
  },
  {
    id: 18,
    src: "/imagegallery/ead18.jpg",
  },
  {
    id: 19,
    src: "/imagegallery/ead19.jpg",
  },
  {
    id: 20,
    src: "/imagegallery/ead20.jpg",
  },
  {
    id: 21,
    src: "/imagegallery/ead21.jpg",
  },
  {
    id: 22,
    src: "/imagegallery/ead22.jpg",
  },
  {
    id: 23,
    src: "/imagegallery/ead23.jpg",
  },
  {
    id: 24,
    src: "/imagegallery/ead24.jpg",
  },
  {
    id: 25,
    src: "/imagegallery/ead25.jpg",
  },
];

const EStartPhotos = [
  {
    id: 1,
    src: "/imagegallery/estart1.jpg",
  },
  {
    id: 2,
    src: "/imagegallery/estart2.jpg",
  },
  {
    id: 3,
    src: "/imagegallery/estart3.jpg",
  },
  {
    id: 4,
    src: "/imagegallery/estart4.jpg",
  },
  {
    id: 5,
    src: "/imagegallery/estart5.jpg",
  },
  {
    id: 6,
    src: "/imagegallery/estart6.jpg",
  },
  {
    id: 7,
    src: "/imagegallery/estart7.jpg",
  },
  {
    id: 8,
    src: "/imagegallery/estart8.jpg",
  },
  {
    id: 9,
    src: "/imagegallery/estart9.jpg",
  },
  {
    id: 10,
    src: "/imagegallery/estart10.jpg",
  },
  {
    id: 11,
    src: "/imagegallery/estart11.jpg",
  },
  {
    id: 12,
    src: "/imagegallery/estart12.jpg",
  },
  {
    id: 13,
    src: "/imagegallery/estart13.jpg",
  },
  {
    id: 14,
    src: "/imagegallery/estart14.jpg",
  },
  {
    id: 15,
    src: "/imagegallery/estart15.jpg",
  },
  {
    id: 16,
    src: "/imagegallery/estart16.jpg",
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
