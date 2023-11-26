import { motion } from "framer-motion";
import MenuItem from "../menuItem/MenuItem";

const MenuAccordionContent = () => {
  return (
    <motion.div
      variants={{ collapsed: { scale: 0.9 }, open: { scale: 1 } }}
      transition={{ duration: 0.4 }}
      className="content-placeholder">
      <div className="flex gap-1 flex-col">
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
