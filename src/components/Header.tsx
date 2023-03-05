import { tw } from '@/utils/tw';
import { List, X } from 'phosphor-react';
import { useState } from 'react';
import colors from 'tailwindcss/colors';
import { HeaderLink } from './HeaderLink';

const LINKS = [
  {
    title: `_hello`,
    path: `/`,
  },
  {
    title: `_about-me`,
    path: `/about`,
  },
  {
    title: `_projects`,
    path: `/projects`,
  },
  {
    title: `_contact-me`,
    path: `/contact`,
  },
];

type MobileMenuProps = {
  isMenuOpen: boolean;
};

export function MobileMenu({ isMenuOpen }: MobileMenuProps) {
  return (
    <nav
      className={tw(`w-full z-[9999] lg:hidden bg-omni-background`, {
        hidden: !isMenuOpen,
      })}
    >
      <ul className="flex flex-col">
        {LINKS.map((link, index) => (
          <li
            key={link.title}
            className={tw(`w-full p-[18px] border-t border-omni-current-line`, {
              'bg-omni-selection': index === 0,
            })}
          >
            <a href={link.path} className="text-white leading-5">
              {link.title}.tsx
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function DesktopMenu() {
  return (
    <nav className=" h-full hidden lg:flex lg:flex-1 lg:justify-between">
      <ul className="flex">
        {LINKS.map((link, index) => (
          <HeaderLink
            key={index}
            path={link.path}
            title={link.title}
            isActive={index === 0}
          />
        ))}
      </ul>
    </nav>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleShowMenuVisibility() {
    // setIsMenuOpen((oldState) => !oldState);
  }

  return (
    <div
      className={tw(
        `flex w-full flex-col border border-omni-current-line lg:flex-row`,
        {
          'fixed bg-omni-background': isMenuOpen,
        },
      )}
    >
      <header className="h-14 w-full flex items-center justify-between px-[18px] max-w-[1802px] lg:px-[22px]">
        <div className="lg:pr-[148px] lg:border-r lg:border-r-omni-current-line lg:h-full lg:flex lg:items-center">
          <p className="text-purple-500">rennand</p>
        </div>

        <DesktopMenu />

        <button className="lg:hidden" onClick={handleShowMenuVisibility}>
          {isMenuOpen ? (
            <X size={24} color={colors.purple[`500`]} />
          ) : (
            <List size={24} color={colors.purple[`500`]} />
          )}
        </button>
      </header>
      <MobileMenu isMenuOpen={isMenuOpen} />
    </div>
  );
}
