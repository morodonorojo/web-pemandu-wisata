import Image from "next/image";
import React, { useState } from "react";
import clsx from "clsx";

import ArrowDown from "../../../assets/arrow-down.svg";

const FasilitasCard = ({
  title,
  icon,
  description,
  color,
  className,
  ...props
}) => {
  const [isDescOpen, setIsDescOpen] = useState(false);

  return (
    <div
      {...props}
      className={`w-full h-min rounded-lg flex flex-col bg-[#F5F5F5] overflow-hidden md:max-w-xs transition-all duration-300 ${className}`}
      style={{
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      }}
    >
      <div className="header flex flex-row justify-center items-center p-5">
        <div className="relative h-12 w-12">
          <Image
            src={icon.url}
            layout="fill"
            objectFit="contain"
            alt={icon.alt}
          />
        </div>
        <p className="font-bold ml-2 text-lg">{title}</p>
      </div>
      <div
        className={clsx(
          "description transition-all duration-300",
          isDescOpen && "max-h-96",
          !isDescOpen && "max-h-0"
        )}
      >
        <hr className="border-t-2" />
        <p
          className={clsx(
            "text-gray-custom font-bold text-sm text-justify transition-all p-4"
          )}
        >
          {description}
        </p>
      </div>
      <div
        className={`control-button w-full p-2 bg-black`}
        onClick={() => setIsDescOpen((prev) => !prev)}
      >
        <ArrowDown
          className={clsx(
            "invert",
            "mx-auto transition-all duration-500",
            isDescOpen && "rotate-180"
          )}
        />
      </div>
    </div>
  );
};

export default FasilitasCard;
