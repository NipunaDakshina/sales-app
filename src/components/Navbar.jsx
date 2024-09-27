import { useState } from "react";
import { Button } from "./Button";
import Logo from "../assets/xmm-logo.png";


const Navbar = () => {
  let Links = [
    { name: "HOME", link: "#main" },
    { name: "ABOUT", link: "#about" },
    { name: "FEATURE", link: "#feature" },
    { name: "CONTACT", link: "#contact" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-custom-light-blue py-4 md:px-10 px-7">
          <div
            className="px-10 cursor-pointer flex items-center font-[helvetica] 
      text-gray-800"
          >
            <img src={Logo} alt="Logo"></img>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static text-white bg-custom-light-blue md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-white-400 hover:text-white-800 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <Button>Buy Token</Button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
