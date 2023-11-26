import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.png";

const NavigationMenu = () => {
  return (
    <nav className="flex flex-col justify-center items-center gap-3 md:mb-4 mb-2">
      <Image src={Logo} height={200} width={200} alt="restaurant logo" />
      <div className="flex gap-4 justify-center items-center font-semibold text-md">
        <span>Opening time : 12:00 - 23:00</span>
        {/* Todo: Add link from admin panel */}
        <span>Trou aux biches, Royal Rd</span>
      </div>
      <Link href="tel:+05890000111">Tel : 0-589-0000111</Link>
    </nav>
  );
};

export default NavigationMenu;
