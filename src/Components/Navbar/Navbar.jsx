import React from "react";
// import "./Navbar.css";
import "./Navbar.css";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    return (
        <div>
            <div className="flex items-center justify-between py-5 px-5 font-medium">
                <Link to="/">
                    <h1 className="caveat">NexaCart</h1>
                </Link>
                <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
                    <NavLink to="/" className="flex flex-col items-center gap-1">
                        <p>HOME</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                    <NavLink to="/men" className="flex flex-col items-center gap-1">
                        <p>MEN</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                    <NavLink to="" className="flex flex-col items-center gap-1">
                        <p>ABOUT</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                    <NavLink to="" className="flex flex-col items-center gap-1">
                        <p>CONTACT</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                </ul>
                <div>
                    <a href="">
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                />
                            </svg>
                        </button>
                    </a>
                    <a href="">
                        {" "}
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                />
                            </svg>
                        </button>
                    </a>
                </div>
                {/* sidebar menu for sm screen */}
                {/* <div
                    className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
                        visible ? "w-full" : "w-0"
                    }`}
                >
                    <div className="flex flex-col text-gray-600">
                        <div
                            onClick={() => setVisible(false)}
                            className="flex items-center gap-4 p-3 cursor-pointer"
                        >
                            <img
                                className="h-4 rotate-180"
                                src={assets.dropdown_icon}
                                alt=""
                            />
                            <p>Back</p>
                        </div>
                        <NavLink
                            onClick={() => setVisible(false)}
                            className="py-2 pl-6 border"
                            to="/"
                        >
                            HOME
                        </NavLink>
                        <NavLink
                            onClick={() => setVisible(false)}
                            className="py-2 pl-6 border"
                            to="/collection"
                        >
                            COLLECTION
                        </NavLink>
                        <NavLink
                            onClick={() => setVisible(false)}
                            className="py-2 pl-6 border"
                            to="/about"
                        >
                            ABOUT
                        </NavLink>
                        <NavLink
                            onClick={() => setVisible(false)}
                            className="py-2 pl-6 border"
                            to="/contact"
                        >
                            CONTACT
                        </NavLink>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;
