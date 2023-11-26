import MasonryGrid from "./components/masonryGrid/MasonryGrid";
import NavigationMenu from "./components/navigationMenu/NavigationMenu";

export default function Home() {
  return (
    <main className="md:p-2 p-3 select-none">
      <div className="border-2 md:p-4 p-2 border-black">
        {/* Todo : Use gettime to display if resto is open rn depending on time resto owner added */}
        {/* Todo : Add options to add patterned bg by className */}
        {/* Todo: Add featured carousel which will lead user to menu item when clicked on */}
        {/* Todo: add main cat/sub cat view */}
        {/* Todo: add admin router page*/}
        {/* Todo: Pin drinks and desert to the side*/}
        <NavigationMenu />
        <MasonryGrid />
      </div>
    </main>
  );
}
