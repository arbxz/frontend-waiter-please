import BottomNavigation from "./components/bottomNavigation/BottomNavigation";
import MasonryGrid from "./components/masonryGrid/MasonryGrid";
import NavigationMenu from "./components/navigationMenu/NavigationMenu";

export default function Home() {
  return (
    <main className="select-none flex gap-4 md:gap-0 flex-col p-4 md:px-8">
      <NavigationMenu />
      <div className="w-full">
        <MasonryGrid />
      </div>
      <BottomNavigation />
    </main>
  );
}
