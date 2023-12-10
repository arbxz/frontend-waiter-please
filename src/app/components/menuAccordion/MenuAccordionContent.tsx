import { motion } from "framer-motion";
import Image from "next/image";
import MenuItem from "../menuItem/MenuItem";
import sampleImg from "/public/featured.jpg";

const MenuAccordionContent = () => {
  return (
    <motion.div
      variants={{ collapsed: { scale: 0.9 }, open: { scale: 1 } }}
      transition={{ duration: 0.4 }}
      className="content-placeholder p-4">
      <div className="flex gap-4 flex-col">
        {/* <div>
          <div>Discover our new totally new i assure you pizza</div>
          <Image
            className="h-20 lg:h-48 w-full object-cover"
            src={sampleImg}
            height={200}
            width={200}
            alt="Featured item"
          />
        </div> */}

        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </motion.div>
  );
};

export default MenuAccordionContent;
