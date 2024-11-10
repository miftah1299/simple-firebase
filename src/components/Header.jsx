import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-orange-400 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">Firebase</div>
                <nav
                    className={`lg:flex lg:justify-between ${
                        isOpen ? "block" : "hidden"
                    } w-full lg:w-auto`}
                >
                    <ul className="flex flex-col lg:flex-row lg:space-x-4">
                        <li>
                            <NavLink
                                to="/"
                                className="block px-4 py-2 text-white hover:bg-orange-600 rounded lg:inline-block"
                                activeClassName="bg-orange-600"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className="block px-4 py-2 text-white hover:bg-orange-600 rounded lg:inline-block"
                                activeClassName="bg-orange-600"
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className="block px-4 py-2 text-white hover:bg-orange-600 rounded lg:inline-block"
                                activeClassName="bg-orange-600"
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/login"
                                className="block px-4 py-2 text-white hover:bg-orange-600 rounded lg:inline-block"
                                activeClassName="bg-orange-600"
                            >
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
