import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import MenuAccordionContent from "./MenuAccordionContent";
import { imagePosition } from "../shared/utils";
import Image from "next/image";

interface MenuCategoryProps {
  categoryName: string;
  description: string;
  imageURL?: string;
  imagePlacement?: imagePosition | "";
}

const MenuCategory = ({
  categoryName,
  description,
  imageURL,
  imagePlacement,
}: MenuCategoryProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const isImgPositionedUp = () => {
    if (imagePlacement === "up") {
      return true;
    }
    return false;
  };

  return (
    <div>
      <motion.header
        className="flex flex-col items-baseline justify-start text-left md:text-left p-4 md:pointer-events-none cursor-pointer"
        initial={false}
        onClick={() => setIsOpen(!isOpen)}>
        {isImgPositionedUp() && imageURL && (
          <Image
            className="mx-auto"
            height={100}
            width={100}
            src={imageURL}
            alt={categoryName}
          />
        )}
        <div className="flex gap-4 items-center justify-between md:text-xl w-full md:w-auto">
          <span className="font-extrabold uppercase font-yantramanav">
            {categoryName}
          </span>
          <FontAwesomeIcon
            className={`transition-transform duration-300 md:hidden block ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            icon={faCaretDown}
          />
        </div>
        <span className="block px-2 bg-foreground font-semibold text-background text-base">
          {description}
        </span>
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
            {!isImgPositionedUp() && imageURL && (
              <Image
                className="mx-auto"
                src={imageURL}
                alt={categoryName}
                height={100}
                width={100}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuCategory;
