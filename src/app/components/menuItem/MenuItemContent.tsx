import sampleImg from "/public/sample.jpg";
import Image from "next/image";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../shared/Shared.module.css";

const MenuItemContent = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col py-4">
        <div className="flex flex-row justify-between gap-4">
          <Image
            className="rounded-lg w-40 h-40 object-cover object-center"
            src={sampleImg}
            alt="food sample image"
          />
          <div className="flex flex-col justify-between items-end w-4/6">
            <span className="font-regular text-md">
              A general description of this dish and how its cooked etc. This
              can also serve as a description of flavours.
            </span>
          </div>
        </div>

        <div>
          <span className="block mt-4 font-bold text-lg">Ingredients :</span>
          <div className={`text-md ${styles.commaTrail}`}>
            <span>Eggs</span>
            <span>Eggs</span>
            <span>Eggs</span>
            <span>Eggs</span>
            <span>Eggs</span>
            <span>Eggs</span>
            <span>Eggs</span>
            <span>Eggs</span>
          </div>
        </div>

        <div>
          <span className="block mt-4 font-bold text-lg">Allergens :</span>
          <div className={`text-md ${styles.commaTrail}`}>
            <span>Seafood</span>
            <span>Parsley</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemContent;
