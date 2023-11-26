import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import styles from "../shared/Shared.module.css";
import MenuAccordionContent from "./MenuAccordionContent";

const MenuCategory = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <motion.header
        className="flex flex-wrap items-baseline justify-start md:justify-center text-left md:text-center p-4 cursor-pointer"
        initial={false}
        onClick={() => setIsOpen(!isOpen)}>
        <div className="flex gap-4 items-center justify-between text-xl md:text-2xl md:pointer-events-none w-full md:w-auto">
          <span className="font-oswald font-bold uppercase">Main Courses </span>
          <FontAwesomeIcon
            className={`transition-transform duration-300 md:hidden block ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            icon={faCaretDown}
          />
        </div>
        <span className="block font-light">
          A brief description of whatever is here A brief description of
          whatever is here
        </span>
        <span className={`${styles.dottedTrail} w-full`}></span>
      </motion.header>
      <AnimatePresence>
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
              duration: 0.4,
              bounce: 0,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            className="overflow-hidden">
            <MenuAccordionContent />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MenuCategory;
