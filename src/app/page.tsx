import MasonryGrid from "./components/masonryGrid/MasonryGrid";
import NavigationMenu from "./components/navigationMenu/NavigationMenu";

export default function Home() {
  return (
    <main className="md:p-6 p-4 select-none">
      {/* Todo : Use gettime to display if resto is open rn depending on time resto owner added */}
      {/* Todo : Add options to add patterned bg by className */}
      {/* Todo: Add featured carousel which will lead user to menu item when clicked on */}
      {/* Todo: add main cat/sub cat view */}
      {/* Todo: add admin router page*/}
      <NavigationMenu />
      <MasonryGrid />
    </main>
  );
}
