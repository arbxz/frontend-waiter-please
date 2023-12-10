import Link from "next/link";
import styles from "../shared/Shared.module.css";
import Image from "next/image";
import logo from "/public/logo.png";

const BottomNavigation = () => {
  return (
    <div className="bg-primary text-white font-mono">
      <div className="flex flex-col gap-4 p-4 md:p-8">
        <div>
          <ul className="flex gap-4 md:flex-row flex-col items-center justify-start md:justify-end">
            <li
              className={`${styles.btn} opacity-70 hover:opacity-100 hover:text-secondary transition-all before:transition-all before:duration-300 relative py-2`}>
              <Link href="/about">About</Link>
            </li>
            <li
              className={`${styles.btn} opacity-70 hover:opacity-100 hover:text-secondary transition-all before:transition-all before:duration-300 relative py-2`}>
              <Link href="/menu">Menu</Link>
            </li>
            <li
              className={`${styles.btn} opacity-70 hover:opacity-100 hover:text-secondary transition-all before:transition-all before:duration-300 relative py-2`}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-start justify-start md:justify-between font-light">
          <div className="w-full md:w-auto text-center md:text-left">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  className="opacity-70 hover:opacity-100 hover:text-secondary"
                  href="https://maps.app.goo.gl/dwaz1YJV9dNVMBFV9"
                  target="_blank">
                  <span className="block">Address lane</span>
                  <span className="block">Address town</span>
                  <span className="block">Address city</span>
                </Link>
              </li>
              <li>
                <span className="font-semibold block">Call us</span>
                <span className="block">
                  <Link
                    href={"tel:230555555"}
                    className="opacity-70 hover:opacity-100 hover:text-secondary">
                    (230) 555 555
                  </Link>
                </span>
              </li>
              <li>
                <span className="block font-semibold">For enquiries</span>
                <span className="block">
                  <Link
                    className="opacity-70 hover:opacity-100 hover:text-secondary"
                    href="mailto:info@tutorialdeep.com">
                    Email@email.com
                  </Link>
                </span>
              </li>
            </ul>
          </div>
          <Image className="rounded-full mx-auto w-60" src={logo} alt="logo" />
          <div className="w-full md:w-auto text-center md:text-right">
            <ul className="flex flex-col gap-4">
              <li>
                <span className="block">Address lane</span>
                <span className="block">Address town</span>
                <span className="block">Address city</span>
              </li>
              <li>
                <span className="block font-semibold">Call us</span>
                <span className="block">(230) 555 555</span>
              </li>
              <li>
                <span className="block font-semibold">For enquiries</span>
                <span className="block">Email@email.com</span>
              </li>
              <li>
                <a href="https://www.freepik.com/free-vector/hand-drawn-mexican-food-drawing-illustration_54998587.htm#page=9&query=food&position=24&from_view=search&track=sph&uuid=57b643b7-e945-48af-8c30-5cf448c7f855">
                  Image by pikisuperstar
                </a>{" "}
                on Freepik
              </li>
            </ul>
          </div>
        </div>
        <div className="opacity-70 text-center md:text-left">
          © 2024 — Restaurant Name
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
