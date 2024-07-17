"use client";

import Image from "next/image";

import { v4 as uuid } from "uuid";

import Slider, { Settings } from "react-slick";
import { map } from "lodash";

export interface CenterImagesDisplayProps {
  images: string[];
}

const CenterImagesDisplay = ({ images }: CenterImagesDisplayProps) => {
  const settings: Settings = {
    arrows: true,
    dots: true,
    autoplay: true,
    slidesToShow: 3,
    slidesPerRow: 1,
    adaptiveHeight: true,
    draggable: true,
  };

  return (
    <div className="w-full p-4 h-72">
      <Slider {...settings}>
        {map(images, (url) => {
          return (
            <div className="w-80 h-96 rounded-md p-2 relative" key={uuid()}>
              <Image
                className="w-full h-full !bg-contain"
                fill
                alt="Center's Image"
                src={url}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CenterImagesDisplay;
