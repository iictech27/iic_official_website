"use client";

import React, { useEffect, useRef, useState } from "react";

interface CarouselItem {
  id: number;
  src: string;
  alt: string;
}

export default function Promotion() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;
  const cardWidth = 400; // Approximation, adjust if needed

  const originalItems: CarouselItem[] = [
    { id: 1, src: "images/fivian/fivian_1.jpg", alt: "Image 1" },
    { id: 2, src: "images/fivian/fivian_2.jpg", alt: "Image 2" },
    { id: 3, src: "images/fivian/fivian_3.jpg", alt: "Image 3" },
    { id: 4, src: "images/fivian/fivian_4.jpeg", alt: "Image 4" },
    { id: 5, src: "images/fivian/fivian_5.jpeg", alt: "Image 5" },
  ];

  const [carouselItems, setCarouselItems] = useState<CarouselItem[]>([]);

  useEffect(() => {
    // Clone first few items for infinite loop effect
    const clonedItems = [
      ...originalItems,
      ...originalItems.slice(0, visibleCards),
    ];
    setCarouselItems(clonedItems);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const updateCarousel = () => {
    if (carouselRef.current) {
      const offset = -currentIndex * cardWidth;
      carouselRef.current.style.transform = `translateX(${offset}px)`;
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex >= carouselItems.length - visibleCards) {
        newIndex = 0;
        if (carouselRef.current) {
          carouselRef.current.style.transition = "none";
          carouselRef.current.style.transform = "translateX(0)";
          setTimeout(() => {
            if (carouselRef.current) {
              carouselRef.current.style.transition = "transform 0.5s ease";
            }
          }, 0);
        }
      }
      return newIndex;
    });
  };

  useEffect(() => {
    updateCarousel();
  }, [currentIndex]);

  return (
    <div className="bg-[#fff] font-sans  dark:bg-black">
      <div className="mx-auto max-w-[1200px] p-5">
        <div className="mb-[30px] text-center leading-relaxed">
          <h3 className="mb-[10px] text-[1.7em] font-bold dark:text-white" >
            <span className="text-[#AE6642]">FIVIAN:</span > <span>Elevating Skill De
            2024 with Gourmet Elegance and Indulgence</span>
          </h3>
          <p className="mb-[10px] text-[1em]  dark:text-zinc-500">
            We are delighted to announce Fivian as our esteemed confectionery
            partner for Skill De 2024, bringing their signature blend of luxury
            and indulgence to this year&apos;s event. As IIC prepares to host an
            extraordinary week of skill development and innovation at Techno
            Main Salt Lake, Fivian adds a layer of sophisticated sweetness to
            our celebration.
          </p>
        </div>

        <div className="relative w-full overflow-hidden py-10">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
          >
            {carouselItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className={`mx-[10px] flex-[0_0_calc(33.333%-20px)] transition-all duration-500 ease-in-out ${
                  index === (currentIndex + 1) % carouselItems.length
                    ? "z-10 scale-110 opacity-100"
                    : "scale-90 opacity-70"
                } bg-[#fff] overflow-hidden`}
              >
                <img
                  className="h-500 w-full rounded-lg object-cover"
                  src={item.src}
                  alt={item.alt}
                />
              </div>
            ))}
          </div>
          <div className="mt-7 flex justify-center">
            {originalItems.map((_, index) => (
              <span
                key={index}
                className={`mx-[5px] h-3 w-3 cursor-pointer rounded-full bg-[#ccc] transition-colors duration-300 ${
                  index === (currentIndex + 1) % originalItems.length
                    ? "bg-[#4d4d4d]"
                    : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
