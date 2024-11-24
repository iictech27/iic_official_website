/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FadeIn from "@/components/animation/FadeIn";
import Header from "@/components/core/Header";
import Title from "@/components/core/Title";
import Confetti from "react-confetti";

const NewMembers: NextPage = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}`);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [dimensions, setDimensions] = useState({
    width: 1800,
    height: 1080,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== "undefined") {
        setDimensions({
          width: window.innerWidth - 100,
          height: window.innerHeight * 2,
        });
      }
    };

    if (typeof window !== "undefined") {
      updateDimensions();
      window.addEventListener("resize", updateDimensions);

      return () => {
        window.removeEventListener("resize", updateDimensions);
      };
    }
  }, []);

  return (
    <>
      <Header title="Selected Candidates" description="Tech Wing IIC TMSL." />
      {/* confetti */}

      <Confetti
        width={dimensions.width}
        height={typeof window !== "undefined" ? window.innerHeight * 2 : 0}
      />
      <div>
        <Title title="Selected Candidates" />
        <FadeIn delay={0.15}>
          <h2 className="mx-auto mt-6 max-w-3xl text-center text-base leading-8 text-zinc-600 dark:text-zinc-500 sm:text-xl">
            On behalf of the IIC Tech Wing, we extend our heartfelt
            congratulations to all the selected candidates! We are excited to
            have you join our dynamic team. Your skills, passion, and dedication
            will undoubtedly contribute to the growth and success of our
            initiatives.
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <h2 className="mx-auto mt-2 max-w-3xl text-center text-2xl font-semibold leading-8 text-black dark:text-zinc-500">
            Welcome to IIC Tech Wing
          </h2>
        </FadeIn>
      </div>
      <div className="slider-container" style={styles.sliderContainer}>
        <Slider {...settings}>
          {items.map((item) => (
            <div
              key={item.id}
              className="my-0 mx-3 flex flex-col items-center justify-center transition-transform duration-[0.3s] ease-in-out"
            >
              <div className="mx-auto aspect-square h-48 w-48 overflow-hidden rounded-full border border-zinc-200 shadow-md transition-all duration-150 ease-in-out hover:scale-110 hover:shadow-xl active:scale-95 dark:border-zinc-800">
                <Image
                  alt={item.name}
                  className="h-48 w-48 rounded-full border object-cover object-center"
                  src={item.imageUrl}
                  width={200}
                  height={200}
                  placeholder="blur"
                  blurDataURL={item.imageUrl}
                  loading="lazy"
                />
              </div>
              <h2 className="mt-5 text-center text-base font-bold text-zinc-900 dark:text-zinc-100 sm:text-lg">
                {item.name}
              </h2>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default NewMembers;

const items = [
  {
    id: 1,
    name: "Anirban RoyChowdhury",
    imageUrl: "/images/newmembers/Anirban RoyChowdhury.jpg",
  },
  {
    id: 2,
    name: "Arghya Dutta",
    imageUrl: "/images/newmembers/Arghya Dutta.jpg",
  },
  {
    id: 3,
    name: "Biswayan Mazumder",
    imageUrl: "/images/newmembers/BISWAYAN MAZUMDER.jpg",
  },
  {
    id: 4,
    name: "Masoom Siddiqui",
    imageUrl: "/images/newmembers/Masoom Siddiqui.jpg",
  },
  {
    id: 5,
    name: "Mayank Kumar",
    imageUrl: "/images/newmembers/Mayank Kumar.jpg",
  },
  {
    id: 6,
    name: "Pratik Kalwar",
    imageUrl: "/images/newmembers/Prateek Kalwar.jpg",
  },
  {
    id: 7,
    name: "Pranjal Mishra",
    imageUrl: "/images/newmembers/Pranjal Mishra.jpg",
  },
  {
    id: 8,
    name: "Ranik Ghosh",
    imageUrl: "/images/newmembers/Raunak Ghosh.jpg",
  },
  {
    id: 9,
    name: "Romit Ghosh Dastidar",
    imageUrl: "/images/newmembers/Romit Ghosh Dastidar.jpeg",
  },
  {
    id: 10,
    name: "Rudra Arjun",
    imageUrl: "/images/newmembers/Rudra Arjun.jpg",
  },
  {
    id: 11,
    name: "Ritika Jaiswal",
    imageUrl: "/images/newmembers/Ritika Jaiswal.jpg",
  },
  {
    id: 12,
    name: "Shruti Karna",
    imageUrl: "/images/newmembers/Shruti Karna.jpeg",
  },
  {
    id: 13,
    name: "Sumit Kumar",
    imageUrl: "/images/newmembers/Sumit Kumar.jpg",
  },
];

const styles = {
  sliderContainer: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "4rem",
  },
  imageContainer: {
    borderRadius: "100%",
    overflow: "hidden",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    height: "280px",
    width: "280px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease-in-out",
  },
  name: {
    marginTop: "12px",
    fontSize: "18px",
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    transition: "color 0.3s ease-in-out",
  },
  slickCenterItem: {
    transform: "scale(1.1)",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
  },
};

const sliderStyle = `

  .slick-prev,
  .slick-next {
    z-index: 1; // Ensure the navigation arrows appear above the carousel
    background-color: rgba(0, 0, 0, 0.4); // Darker background for the arrows
    border-radius: 50%;
    padding: 10px;
  }

  .slick-prev:hover,
  .slick-next:hover {
    background-color: rgba(0, 0, 0, 0.6); // Darker on hover
  }

  .slick-slide > div{
    margin : 10px 15px;
  }

  .slick-slider button{
    width:32px;
    height:32px;
    display:flex !important;
    justify-content:center;
    align-items:center;
  }

  .slick-slider button::before{
    background-color:black;
    border-radius:100%;
  }

  .slick-slider button:hover{
    background-color:transparent;
  }

  .slick-slider .slick-prev{
    margin-left:-5px;
  }

  .slick-slider .slick-next{
    margin-right:-5px;
  }
`;

if (typeof window !== "undefined") {
  const styleTag = document.createElement("style");
  styleTag.innerHTML = sliderStyle;
  document.head.appendChild(styleTag);
}
