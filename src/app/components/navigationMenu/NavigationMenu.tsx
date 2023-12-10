import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.png";
import { faBicycle } from "@fortawesome/free-solid-svg-icons/faBicycle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationMenu = () => {
  return (
    // Add patterned top or transparent gradient top
    <nav className="font-yantramanav flex justify-between items-center py-2 gap-4 border-b-4 border-primary">
      <Link className="flex flex-col" href="/">
        <h1 className="font-extrabold text-xl lg:text-4xl uppercase">
          Ristorante
        </h1>
        <span className="hidden lg:block">Lorem ipsum picsum ipsum picsum</span>
      </Link>

      <span className="gap-4 items-center text-xl text-foreground font-bold ml-auto hidden lg:flex">
        <Image
          src={"/backgroundProps/lemon.png"}
          width={50}
          height={50}
          alt={"Lemon"}
        />
        Discover our specials grill food!
      </span>
      <span className="flex items-center text-center justify-center text-sm font-bold rounded-full border-2 border-primary w-8 h-8">
        EN
      </span>
    </nav>
  );
};

export default NavigationMenu;
