import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
      <div className="flex justify-center items-center mt-10">
        <Link href="/" className="m-4 transition duration-500 hover:underline underline-offset-4">Home</Link>
        <Link href="/about" className="m-4">About</Link>
        <Link href="/experience" className="m-4">Experience</Link>
    </div>
  );
};

export default Navbar;
