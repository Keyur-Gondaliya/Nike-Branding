import { navLinks } from "@/constants";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src="assets/images/header-logo.svg"
            alt="logo"
            width={130}
            height={29}
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((e) => (
            <li key={e.label}>
              <a
                href={e.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {e.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className="hidden max-lg:block">
          <img
            src="assets/icons/hamburger.svg"
            alt="Menu"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
