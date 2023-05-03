import React from "react";
import Slider from "react-slick";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
export const Sliders = () => {
  const carouselData = [
    {
      imgSrc:
        "https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/MayART23/KSD_HERO-PC_v2_1X._CB589492450_.jpg",
      altText: "Image 1",
    },
    {
      imgSrc:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/MayART23/GW/PC_Hero_3000x1200_KSD-TOYS._CB591354790_.jpg",
      altText: "Image 2",
    },
    {
      imgSrc:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/MayART/KSD/Unrec_PC_hero_1_2x._CB591000669_.jpg",
      altText: "Image 3",
    },
    {
      imgSrc:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/CEPC/May-ART/Hero/PC_Hero_3000x1200_KSD-unrec._CB589450975_.jpg",
      altText: "Image 4",
    },
    {
      imgSrc:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/ssserene/MayART23/OnePlus/GW/Family/D79612035_IN_WLD_MayART23_OnePlus_Family_PC_Hero_3000x1200._CB591252547_.jpg",
      altText: "Image 5",
    },
    {
      imgSrc:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PCA/MayART/PC_Hero_3000x1200_-TRIMMER_KSD._CB591353159_.jpg",
      altText: "Image 6",
    },
    {
      imgSrc:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Grocery/ARTs/MayART/GW/PC_hero_3000x1200_UNREC_KSD._CB589452798_.jpg",
      altText: "Image 7",
    },
  ];

  return (
    <div className="slide-container">
      <Slide className="sliding">
        {carouselData.map((slide, index) => (
          <div className="each-slide" key={index}>
            <img className="images" src={slide.imgSrc} alt={slide.altText} />
          </div>
        ))}
      </Slide>
    </div>
  );
};
