import React, {useState} from 'react';
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export default function Navbar() { 

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className='w-full sm:px-3'>
      <nav className="relative sm:px-2 py-4 z-10">
        <DesktopMenu
          onDropdownToggle={() => setIsDropdownOpen(!isDropdownOpen)}
          isDropdownOpen={isDropdownOpen}
        />

        <MobileMenu
          isMenuOpen={isMenuOpen}
          onDropdownToggle={() => setIsDropdownOpen(!isDropdownOpen)}
          onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
          isDropdownOpen={isDropdownOpen}
        />
      </nav>
    </div>
  );
}
