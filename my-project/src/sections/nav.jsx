import { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='padding-x py-8 absolute z-20 w-full'> {/* Increased z-index */}
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="Nike's logo" width={130} height={29} />
        </a>

        {/* Desktop Navigation */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray hover:text-white hover:bg-slate-600 p-2 rounded-3xl'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className='hidden max-lg:block'>
          <img
            src={hamburger}
            alt="hamburger"
            height={25}
            width={25}
            onClick={toggleMenu}
            className='cursor-pointer'
          />
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-black text-white p-4 flex flex-col gap-4 z-50"> {/* Increased z-index */}
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className='font-montserrat leading-normal text-lg p-2 hover:bg-slate-600 rounded-md z-20 text-center'
                  onClick={toggleMenu} // Close menu when link is clicked
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Nav;
