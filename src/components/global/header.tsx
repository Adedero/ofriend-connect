import Link from "next/link";
import Logo from "../app/logo";
import { ThemeToggler } from "../theme/theme-toggler";
import HeaderNavigation from "./header-navigation";
import HeaderActions from "./header-actions";
import HeaderNavigationMobile from "./header-navigation-mobile";

export default function Header() {
  return (
    <header className="top-0 z-50 fixed bg-background w-screen">
      <div className="flex justify-between items-center p-5">
        <Link href="/">
          <Logo width={32} />
        </Link>

        <div className="flex items-center gap-2">
          <HeaderNavigation />
          <ThemeToggler />
          <HeaderActions />
          <HeaderNavigationMobile />
        </div>
      </div>
    </header>
  );
}
