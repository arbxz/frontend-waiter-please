import sampleImg from "/public/sample.jpg";
import Image from "next/image";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../shared/Shared.module.css";

const MenuItemContent = () => {
  const [isLiked, setIsLiked] = useState(false);
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
            <button
              title="add to favorites"
              name="add to favorites"
              className="relative bg-zinc-700 text-white flex items-center gap-2 py-1 px-2 rounded-3xl text-xs overflow-hidden"
              onClick={() => {
                setIsLiked(!isLiked);
              }}>
              <FontAwesomeIcon
                className={`${isLiked ? "text-red-600" : "text-white"} text-lg`}
                icon={faHeart}
              />
              <span
                className={`absolute left-[30px] ${
                  isLiked ? "translate-y-12" : "translate-y-0"
                } transition-transform duration-300`}>
                Add to favorites
              </span>
              <span
                className={`absolute left-[30px] ${
                  isLiked ? "translate-y-0" : "-translate-y-12"
                } transition-transform duration-300`}>
                Favourited
              </span>

              <span className="opacity-0">
                {isLiked ? "favourited" : "add to favorites"}
              </span>
            </button>
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
