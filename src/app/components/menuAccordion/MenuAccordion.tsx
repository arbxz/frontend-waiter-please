"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "../menuItem/MenuItem";
import styles from "../shared/Shared.module.css";
import { useState } from "react";

const MenuCategory = () => {
  const [isCategoryExpanded, setIsCategoryExpanded] = useState(true);

  return (
    <>
      <div>
        <div className="flex flex-wrap items-baseline justify-start p-4">
          <button
            title="expand category"
            className="flex gap-4 items-center justify-between text-xl md:text-2xl md:pointer-events-none"
            onClick={() => {
              setIsCategoryExpanded(!isCategoryExpanded);
            }}>
            <span className="font-bold">Main Courses </span>
            <FontAwesomeIcon className="md:hidden block" icon={faCaretDown} />
          </button>
          <span className="block font-light">
            A brief description of whatever is here A brief description of
            whatever is here
          </span>
          <span className={`${styles.dottedTrail} w-full`}></span>
        </div>

        {isCategoryExpanded && (
          <div className="flex gap-1 flex-col">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
        )}
      </div>
    </>
  );
};

export default MenuCategory;
