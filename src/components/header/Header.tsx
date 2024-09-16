import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

//icons
import { IoExitOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

type NavItem = {
    label: string;
    width: string;
    link: string;
};

const navItems: NavItem[] = [
    { label: "Home", width: "w-[100px]", link: "/" },
    { label: "About", width: "w-[100px]", link: "/about" },
    { label: "Course", width: "w-[100px]", link: "/course" },
    { label: "Recruitment", width: "w-[130px]", link: "/career" },
    { label: "Vls team", width: "w-[100px]", link: "/" },
    { label: "Vls life", width: "w-[100px]", link: "/" },
    { label: "Contact", width: "w-[100px]", link: "/contact" },
];

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(() => {
        const storedIsOpenNav = sessionStorage.getItem("isOpenNav");
        return storedIsOpenNav === "true";
    });

    const navigate = useNavigate();

    const handleOpen = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
        sessionStorage.setItem("isOpenNav", (!isOpen).toString());
    };
    const handleLogout = () => {
        localStorage.removeItem("access_token");
        navigate("/");
    };

    useEffect(() => {
        sessionStorage.setItem("isOpenNav", isOpen.toString());
    }, [isOpen]);

    return (
        <div className="fixed top-0 left-0 z-40 h-[70px] flex items-center w-full bg-white ud-header shadow-md text-black">
            <div className="container">
                <div className="relative flex items-center justify-between -mx-4">
                    <div className="max-w-full px-4 w-60">
                        <a href="/" className="block w-full py-5 navbar-logo">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd01741af0d7d10fe52dd79bad621aeca9a5afa12a2e6b50ebd1b2d28e2c40d5?apiKey=e34b0bbc442149bfa463a424862e236a&"
                                alt="logo"
                                className="object-cover h-[50px] w-[70px]"
                            />
                        </a>
                    </div>
                    <div className="flex items-center justify-between w-full px-4">
                        <div>
                            <button
                                onClick={handleOpen}
                                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                            >
                                <GiHamburgerMenu size={24} />
                            </button>
                            <nav
                                className={`${
                                    isOpen ? "block" : "hidden"
                                } absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white text-black py-5 shadow-lg lg:static lg:block lg:w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6`}
                            >
                                <ul className="block lg:flex 2xl:ml-20">
                                    {navItems.map((navItem, i) => (
                                        <li
                                            key={i}
                                            className={`${
                                                i === 0 ? "mt-0" : "mt-4"
                                            } lg:mt-0 cursor-pointer`}
                                        >
                                            <div
                                                onClick={() =>
                                                    navigate(navItem.link)
                                                }
                                                className={`block text-base font-medium text-black hover:text-orange-700 hover:opacity-70 ${navItem.width}`}
                                            >
                                                {navItem.label}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="hidden lg:flex">
                            <div className="hidden sm:flex items-center justify-center gap-5">
                                {localStorage.getItem("access_token") ? (
                                    <>
                                        <FaRegUser
                                            onClick={() => navigate("/profile")}
                                            className="cursor-pointer text-[25px] hover:text-orange-400"
                                        />
                                        <IoExitOutline
                                            onClick={handleLogout}
                                            className="cursor-pointer text-[30px] hover:text-orange-400"
                                        />
                                    </>
                                ) : (
                                    <>
                                        <div
                                            onClick={() => navigate("/login")}
                                            className="loginBtn py-2 px-4 text-base font-medium text-black hover:opacity-70 cursor-pointer"
                                        >
                                            Sign In
                                        </div>
                                        <div
                                            onClick={() =>
                                                navigate("/register")
                                            }
                                            className=" cursor-pointer px-4 w-auto py-2 text-base font-medium text-white duration-300 ease-in-out rounded-md signUpBtn bg-primary hover:bg-blue-dark"
                                        >
                                            Sign Up
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
