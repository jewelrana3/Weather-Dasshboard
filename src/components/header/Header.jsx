import Logo from "./Logo";
import Favouriate from "./Favouriate";
import FavouriateList from "./FavouriateList";
import Search from "./Search";
import { useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <Logo />

        <div className="flex items-center gap-4 relative">
          <Search />
          <Favouriate onShow={() => setShow(!show)} />

          {show && <FavouriateList />}
        </div>
      </nav>
    </header>
  );
}
