import Image from "next/image";
import Link from "next/link";
import Logo from "/public/logo.png";
import { faBicycle } from "@fortawesome/free-solid-svg-icons/faBicycle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationMenu = () => {
  return (
    <nav className="flex flex-col justify-center items-center gap-3 md:mb-4 mb-2">
      <Image src={Logo} height={200} width={200} alt="restaurant logo" />
      <h1 className="font-oswald font-bold text-6xl">Ristorante</h1>
      <div className="flex flex-wrap gap-4 justify-center items-center font-semibold text-center text-md">
        {/* Todo: Opening time should be dynamic given which day we're on and on click should open table sheet for the week*/}

        <span>Opening time: 12:00 - 23:00</span>
        {/* Todo: Add maps link from admin panel */}
        {/* Todo: Add confirmation dialog before switching page*/}

        <Link
          className="underline"
          href="https://maps.app.goo.gl/tQdwwe4QtAiMgmZv5"
          target="_blank">
          Trou aux biches, Royal Rd
        </Link>
        <span className="flex items-center gap-2">
          <FontAwesomeIcon icon={faBicycle} />
          Delivery available
        </span>
      </div>
      <Link href="tel:+05890000111">
        <b>Tel :</b> 0-589-0000111
      </Link>
    </nav>
  );
};

export default NavigationMenu;
