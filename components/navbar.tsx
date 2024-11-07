import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    // Navbar should be fixed on the 0 left/top with an opacity of 80%.
    // It should also take up the full width of the screen. 
    <nav className="flex justify-between min-h-24 text-center items-center bg-opacity-80 bg-blue-400 left-0 top-0 fixed min-w-full">
      {/* Logo  */}
      <div className="">
        <a className="flex items-center min-h-24 p-4">Vikram Singh</a>
      </div>
      {/* Navbar elements. */}
      <div className="mr-4">
        <ol className="flex justify-center text-center gap-4 [&>*]:min-h-24 [&>*]:items-center [&>*]:flex [&>*]:p-4">
          <a className=""><li>About</li></a>
          <a className=""><li>Projects</li></a>
          <a className=""><li>Contact</li></a>
          <a className=""><li>Resume</li></a>
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;
