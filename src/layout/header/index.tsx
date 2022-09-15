import { FullLogo } from "../../components/brand";
import ColorModeSwitcher from "../../components/buttons/color-mode-switcher";
import HamburgerButton from "../../components/buttons/hamburger";
import Search from "../search";

export default function Header() {

  return (
    <header
      id="header"
      className="border-b dark:border-b-0 sm:dark:border-2 sm:dark:border-gray-800 dark:bg-gray-900 md:dark:border-0 md:border-b-0"
    >
      <div
        id="brand"
        className="flex space-x-4 md:border-r-2 md:dark:border-gray-800 p-6"
      >
        <FullLogo />
      </div>

      <div
        id="extras"
        className="flex space-x-4 p-6"
      >
        <div
          id="header-portal-container"
          className="w-full h-full"
        // on larger screens use this via a portal for all your extra content like tabs.
        />
        <div className="flex space-x-3">
          <ColorModeSwitcher />
          <HamburgerButton />
        </div>
      </div>

      <Search />

    </header>
  )

}