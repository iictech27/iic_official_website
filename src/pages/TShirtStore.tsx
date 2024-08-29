import React, { useState, useEffect } from 'react';
import Link from "next/link";
import FadeIn from "@/components/animation/FadeIn";

const ProductCard = ({ product }) => {
  const sizePriceMapping = {
    Regular: 169,
    Oversize: 169,
    
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState("Regular");
  const [price, setPrice] = useState(sizePriceMapping.Regular);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setPrice(sizePriceMapping[size]);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 mt-4 mb-4 flex flex-col md:flex-row bg-white shadow-[4px_4px_20px_rgba(0,0,0,0.25)] rounded-lg">
      <div className="grid grid-cols-2 gap-2 mr-4 md:mb-0 mb-4 md:flex md:flex-col">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index}`}
            className={`w-20 h-15 rounded-md object-cover cursor-pointer ml-5 mr-5 border-2 ${
              selectedImage === image
                ? "border-blue-500"
                : "border-gray-300"
            }`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      <div className="flex-grow">
        <img
          src={selectedImage}
          alt="Selected Product"
          className="w-full md:w-80 h-96 rounded-lg object-cover"
        />
      </div>
      <div className="flex-grow flex flex-col mr-4 justify-between">
        <div>
          <h2 className="text-xl md:text-2xl mt-2 font-bold dark:text-black">
            {product.company}
          </h2>
          <div className="text-gray-950 mt-1 text-sm md:text-base dark:text-black">
            {product.name}
          </div>
          <div className="mt-3 flex items-center">
            <span className="text-xl md:text-2xl ml-5 font-semibold dark:text-black">
              ₹{price}
            </span>
          </div>
          {/* <p className="text-gray-500 text-sm md:text-base">MRP</p> */}

          <div className="mt-3">
            <div className="flex w-full">
              {["Regular", "Oversize"].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeChange(size)}
                  className={`flex mr-2 justify-center items-center rounded-lg text-sm md:text-lg w-1/3 p-2 ${
                    selectedSize === size
                      ? "bg-black text-gray-50"
                      : "bg-gray-100 text-black hover:bg-black hover:text-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfgXGlv28_5J9vKW51_zTpII2onBoj9rQvLLXQjOw3aDPPE-Q/viewform?usp=sf_link">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Pre Book
              </button>
            </Link>
          </div>

          <div className="mt-5">
            <h4 className="text-lg font-semibold dark:text-black">
              Features:
            </h4>
            <ul className="ml-5 text-gray-700 mt-2 text-sm md:text-base">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};



const TShirtStore = () => {
  const products = [
    {
      company: "IIC Merchendise",
      name: "Code to Buy : #101",
      price: 169.00,
      features: [
        "100% original Products",
        "Access Early Bird offer",
        
      ],
      images: [
        "/images/merch/1.png",
        "/images/merch/2.png",
        "/images/merch/3.png",
        "/images/merch/4.png",
      ]
    },
    {
      company: "IIC Merchendise",
      name: "Code to Buy : #202",
      price: 169.00,
      features: [
        "100% original Products",
        "Access Early Bird offer",
      ],
      images: [
        "/images/merch/5.png",
        "/images/merch/6.png",
        "/images/merch/7.png",
        "/images/merch/8.png",
      ]
    },
    {
      company: "IIC-Merchendise",
      name: "Code to Buy : #303",
      price: 169.00,
      features: [
        "100% original Products",
        "Access Early Bird offer",
      ],
      images: [
        "/images/merch/9.png",
        "/images/merch/10.png",
        "/images/merch/11.png",
        "/images/merch/12.png",
        

      ]
    },
  ];

  const extendedProducts = [products[products.length - 1], ...products, products[0]];
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === extendedProducts.length - 1) {
          return 1;
        }
        return prevIndex + 1;
      });
    }, 20000); // Slowing down the slide change to every 5 seconds

    return () => clearInterval(intervalId);
  }, [extendedProducts.length]);

  return (
    <>
      <FadeIn delay={0.15}>
        <h1 className="flex flex-col justify-center text-center text-5xl font-[800] tracking-tighter sm:gap-x-3 sm:text-[60px] lg:flex-row">
          <span className="text-black dark:text-white">Explore &nbsp; Our &nbsp;</span>
          <span className="bg-gradient-to-r from-violet-600 to-rose-500 bg-clip-text text-transparent">
            Merchandise
          </span>
        </h1>
      </FadeIn>

      <div className="container mx-auto p-4 mt-7"> 
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform ease-in-out duration-700"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {extendedProducts.map((product, index) => (
              <div key={index} className="min-w-full">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + extendedProducts.length) % extendedProducts.length)}
          >
            &#10094;
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % extendedProducts.length)}
          >
            &#10095;
          </button>
        </div>
      </div>
    </>
  );
};

export default TShirtStore;
