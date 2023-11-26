"use client";

import { useState } from "react";
import { faEnvira } from "@fortawesome/free-brands-svg-icons/faEnvira";
import { faEye } from "@fortawesome/free-regular-svg-icons/faEye";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons/faEyeSlash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sampleImg from "/public/sample.jpg";
import iconHalal from "/public/icon-halal.png";
import Image from "next/image";
import styles from "../shared/Shared.module.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const MenuItem = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [hasWeightParam, setHasWeightParam] = useState(false);
  const [isItemUnavailable, setIsItemUnavailable] = useState(false);
  return (
    <div className="w-full px-4 py-1">
      <div className="flex flex-row items-end gap-4 text-lg font-semibold mb-2">
        <div className="relative flex w-full items-end">
          <span>Dish name name name poopee</span>
          <span className={`${styles.dottedTrail}`}></span>
        </div>

        <span>
          <span data-curr="RS">Rs</span>250
        </span>
      </div>
      <div className="flex flex-row items-center justify-between text-lg">
        <div className="flex flex-row items-center gap-2">
          <span className="flex items-center justify-center p-1 h-6 w-6 text-sm bg-zinc-700 text-white rounded-full overflow-hidden">
            <FontAwesomeIcon icon={faEnvira} />
          </span>
          <span>
            <Image height={24} width={24} src={iconHalal} alt="halal icon" />
          </span>
          {hasWeightParam && <span className="font-regular">(350g)</span>}
        </div>
        <div className="flex gap-4 items-center justify-end text-sm">
          {isItemUnavailable && (
            <span className="px-4 py-1 rounded-3xl bg-zinc-700 text-white border-2 border-zinc-700">
              Unavailable
            </span>
          )}

          <button
            title="expand menu item"
            onClick={() => {
              setIsMenuExpanded(!isMenuExpanded);
            }}
            className="flex items-center gap-2 px-2 py-1 text-md rounded-3xl text-zinc-700 border-solid border-zinc-900 border-2 hover:text-white hover:bg-zinc-700 duration-300 transition-colors">
            <FontAwesomeIcon icon={isMenuExpanded ? faEyeSlash : faEye} />
            {isMenuExpanded ? "Less" : "More"}
          </button>
        </div>
      </div>
      <div
        className={`${
          isMenuExpanded ? "max-h-min" : "max-h-0"
        } transition-all duration-300 h-full overflow-hidden`}>
        <div className="flex flex-col py-4">
          <div className="flex flex-row gap-4">
            <Image
              className="rounded-lg w-40 h-40 object-cover object-center"
              src={sampleImg}
              alt="food sample image"
            />
            <div className="flex flex-col justify-between items-end w-4/6">
              <span className="font-semibold text-md">
                A general description of this dish and how its cooked etc. This
                can also serve as a description of flavours.
              </span>
              <div className="flex gap-2 items-center">
                <span className="bg-zinc-700 text-white py-1 px-2 rounded-3xl text-xs">
                  Add to favorites
                </span>
                <button
                  title="add to favorites"
                  name="add to favorites"
                  className={`${
                    isLiked ? "text-red-600" : "text-black"
                  } text-xl`}
                  onClick={() => {
                    setIsLiked(!isLiked);
                  }}>
                  <span className="hidden">add to favorites</span>
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
            </div>
          </div>

          <div>
            <span className="block mt-4 font-bold text-lg">Ingredients :</span>
            <div className={`text-sm ${styles.commaTrail}`}>
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
            <div className={`text-sm ${styles.commaTrail}`}>
              <span>Seafood</span>
              <span>Parsley</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
