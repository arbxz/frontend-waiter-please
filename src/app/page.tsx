import Image from "next/image";

import MenuItem from "./components/menuItem/MenuItem";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center md:p-24 p-4 select-none">
      <MenuItem />
    </main>
  );
}
