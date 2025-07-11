import logo from "../assets/logobg.avif";
import { useState } from "react";
import { navItems } from "./Constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between item-center">
          <div className="flex item-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">
              Prompt<span className="text-purple-400">Pal</span>
            </span>
          </div>
          <ul className="hidden lg:flex  ml-14 space-x-12 ">
            {navItems.map((item, index) => (
              <li key={index}>
                <a className="hover:text-purple-400" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="#"
              className="py-2 px-3 border rounded-md hover:bg-neutral-500"
            >
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-purple-500 to-purple-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className=" lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="py-4 flex flex-col justify-start text-md"
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-3">
              <a href="#" className="py-2 px-2 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-purple-500 to-purple-800"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
