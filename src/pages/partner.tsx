import React from "react";
import Promotion from "./promotion";

const Partner = () => {
  const products = [
    {
      imgSrc: "images/Partner/p1.png",
      alt: "Artisanal Chocolates & Stuffed Dates",
      text: "𝙰𝚛𝚝𝚒𝚜𝚊𝚗𝚊𝚕 𝙲𝚑𝚘𝚌𝚘𝚕𝚊𝚝𝚎𝚜 & 𝚂𝚝𝚞𝚏𝚏𝚎𝚍 𝙳𝚊𝚝𝚎𝚜",
    },
    {
      imgSrc: "images/Partner/p2.png",
      alt: "Signature Milkshakes",
      text: "𝚂𝚒𝚐𝚗𝚊𝚝𝚞𝚛𝚎 𝙼𝚒𝚕𝚔𝚜𝚑𝚊𝚔𝚎𝚜",
    },
    {
      imgSrc: "images/Partner/p3.png",
      alt: "Customizable Hampers for Premium Gifting",
      text: "𝙲𝚞𝚜𝚝𝚘𝚖𝚒𝚣𝚊𝚋𝚕𝚎 𝙷𝚊𝚖𝚙𝚎𝚛𝚜 𝚏𝚘𝚛 𝙿𝚛𝚎𝚖𝚒𝚞𝚖 𝙶𝚒𝚏𝚝𝚒𝚗𝚐",
    },
  ];

  return (
    <div className="flex flex-col justify-center w-full lg:w-4/5 mx-auto">
      {/* Our Sponsors */}
      <div>
        <h1 className="text-4xl md:text-5xl text-center p-8 md:p-16">
          Our Sponsors
        </h1>
      </div>

      {/* Main section 1 */}
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-10" style={{width:"110%"}}>
        {/* Right Section */} 
        <div className="right flex flex-col md:w-2/4 px-4 md:px-8">
          {/* Logos */}
          <div className="flex flex-col">
            <div className="flex items-center justify-center md:justify-start">
              <img
                src="images/Partner/p0.png"
                alt="FIVIAN Logo"
                className="w-24 h-24 md:w-32 md:h-32"
              />
              <div>
                <img
                  className="mt-4 scale-75"
                  src="images/Partner/p11.png"
                  alt="Product"
                />
                <img
                  className="h-6 w-36 md:w-52 mb-4 ml-4 md:ml-16 mt-4"
                  src="images/Partner/p10.png"
                  alt="Product"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="mt-4 text-lg space-y-2 text-center md:text-left">
            <p className="leading-relaxed text-2xl text-slate-700 text-center">
              Premium, high-end, gourmet desserts,
              <br /> chocolates, and artisanal products. <br />
              Perfect for corporate gifting and bulk orders.
            </p>
            <h2 className="mt-4 text-2xl md:text-3xl text-red-800 p-2 md:p-4 font-semibold">
              Nationwide delivery available.
            </h2>
          </div>

          {/* Contact Section */}
          <div className="mt-4 md:mt-8 flex justify-center md:justify-start items-center flex-col space-y-4">
            <button className="bg-red-500 w-2/4 md:w-2/5 text-white py-2 md:py-1 px-4 font-semibold text-lg rounded-3xl hover:bg-red-600">
              <a href="https://linkbio.co/fivian">Connect With Us</a>
            </button>
            <p className="text-gray-700 text-lg">
              Call/WhatsApp: +919088055818
            </p>
            <a
              href="https://www.instagram.com/@fivian.in"
              className="flex items-center space-x-2 hover:underline"
            >
              <img
                src="images/Partner/p4.png"
                alt="Instagram Icon"
                className="w-6 h-6"
              />
              <span className="text-lg text-gray-700">
                Follow us on Instagram
              </span>
            </a>
          </div>
        </div>

        {/* Left Section */}
        <div className="left md:w-2/4 p-8 md:p-16">
          <img
            className="scale-110 md:scale-125"
            src="images/Partner/p9.png"
            alt="Additional Products"
          />
        </div>
      </div>
<div className="mt-12"></div>
      <Promotion></Promotion>

      {/* About US */}
      <div>
        <h1 className="text-3xl text-center p-8 font-semibold">About Us</h1>
      </div>

      <div className="text-center mx-auto px-4 md:px-0">
        <p className="text-slate-700 text-lg md:text-2xl mb-8 md:mb-12">
          Fivian is a family-run confectionery brand known for its premium,
          handmade chocolates, stuffed dates, and milkshakes. Inspired by the
          number "five," symbolizing family collaboration, Fivian delivers
          high-quality, artisanal sweets perfect for both personal and corporate
          needs.
        </p>
      </div>

      {/* Product Section */}
      {/* Product Section */}
      <div className="text-center py-6 md:py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-12">
          Fivian's Unique Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-semibold">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="h-full w-full">
                <img
                  src={product.imgSrc}
                  alt={product.alt}
                  className="h-full w-full object-contain mb-4"
                />
              </div>
              <p className="text-xl md:text-2xl">{product.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Fivian */}
      <div>
        <h1 className="text-3xl text-center p-8 font-semibold">Why Fivian?</h1>
      </div>

      <div className="text-center mx-auto px-4 md:px-0">
        <p className="text-slate-700 text-lg md:text-2xl mb-8 md:mb-12">
          Fivian’s dedication to quality and customizable treats makes them the
          perfect partner for Skill De 2024. Their gourmet confections will
          elevate our event, offering participants a memorable experience of
          luxury and indulgence. We are excited to collaborate with Fivian to
          ensure our attendees enjoy the finest sweets while engaging in
          transformative learning.
        </p>
      </div>
    </div>
  );
};

export default Partner;