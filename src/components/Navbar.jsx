import React, { useEffect } from "react";
import { useState } from "react";

function Navbar() {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = (
        <>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/educate">Educate Yourself</a>
            </li>
            <li>
                <a href="/ai">Chat Buddy </a>
            </li>
            <li>
                <a href='/events'>Events</a>
            </li>
            <li>
                <a href="/about">Government Resources</a>
            </li>
        </>
    );

    return (
        <>
            <div
                className={`max-w-screen-2xl rounded-[22px] container mx-auto md:px-30 px-4 bg-white text-gray-800 fixed top-0 left-0 right-0 z-50 ${
                    sticky
                        ? "sticky-navbar rounded-[22px] shadow-md bg-white duration-300 transition-all ease-in-out"
                        : ""
                }`}
            >
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                {navItems}
                            </ul>
                        </div>
                        <a className="flex items-center text-2xl font-bold cursor-pointer">
                            <img src="/man.png" alt="Logo" className="h-6 w-6 mr-2" />
                            Belong.
                        </a>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">{navItems}</ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
