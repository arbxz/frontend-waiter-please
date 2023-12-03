import { useState } from "react";
import Image from "next/image";
import { faEnvira } from "@fortawesome/free-brands-svg-icons/faEnvira";
import { faEye } from "@fortawesome/free-regular-svg-icons/faEye";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons/faEyeSlash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconHalal from "/public/icon-halal.png";
import styles from "../shared/Shared.module.css";
import { motion, AnimatePresence } from "framer-motion";
import MenuItemContent from "./MenuItemContent";

const MenuItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasWeightParam, setHasWeightParam] = useState(false);
  const [isItemUnavailable, setIsItemUnavailable] = useState(false);
  return (
    <div className="w-full">
      <motion.header
        initial={false}
        animate={{ opacity: isOpen ? "0.7" : "1" }}
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer`}>
        <div className="flex flex-row items-end gap-4 text-lg font-regular mb-2">
          <div className="relative flex w-full items-end">
            <span>Dish name name name poopee</span>
            <span className={`${styles.dottedTrail}`}></span>
          </div>

          <span className="font-bold">
            <span data-curr="RS" className="mr-1">
              Rs
            </span>
            2500
          </span>
        </div>
        <div className="flex flex-row items-center justify-between text-lg">
          <div className="flex flex-row items-center gap-2">
            <span className="flex items-center justify-center p-1 h-6 w-6 text-sm bg-emerald-800 text-white rounded-full overflow-hidden">
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

            <span className="px-4 py-1 font-bold rounded-3xl bg-newtag text-white uppercase">
              New
            </span>

            <span className="flex items-center gap-2 px-2 py-1 text-md rounded-3xl text-zinc-700 border-solid border-zinc-900 border hover:text-white hover:bg-zinc-700 duration-300 transition-colors">
              <FontAwesomeIcon icon={isOpen ? faEyeSlash : faEye} />
              {isOpen ? "Less" : "More"}
            </span>
          </div>
        </div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{
              type: "spring",
              duration: 0.5,
              bounce: 0,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            className="overflow-hidden">
            <MenuItemContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuItem;
