import { LockOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent,  NavbarMenuToggle, NavbarMenu, NavbarMenuItem,   } from "@nextui-org/react";




const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
        <>
            <div className=" hidden  px-20 py-5 bg-[#021217] xl:flex justify-between items-center duration-300 ease-linear">
                <div>
                    <NavLink to="/">
                        <img src="/Logo.png" alt="Logo" />
                    </NavLink>

                </div>
                <nav className="py-3 px-7 bg-[#0F1E23] rounded-2xl">
                    <ul className="flex justify-center gap-5 text-[#FFBA7A] text-[0.9rem] font-medium   ">
                        <NavLink to="/">
                            <li className=" duration-100 ease-linear hover:border-b-2 border-[#FFBA7A] ">Home</li>
                        </NavLink>
                        <NavLink to="/AboutUs">
                            <li className=" duration-100 ease-linear hover:border-b-2 border-[#FFBA7A] ">About Us</li>
                        </NavLink>
                        <NavLink to="/Properties">
                            <li className=" duration-100 ease-linear hover:border-b-2 border-[#FFBA7A] ">Investment and properties</li>
                        </NavLink>
                        <NavLink to="/Faq">
                            <li className=" duration-100 ease-linear hover:border-b-2 border-[#FFBA7A] ">FAQs</li>
                        </NavLink>
                        <NavLink to="/ContactUs">
                            <li className=" duration-100 ease-linear hover:border-b-2 border-[#FFBA7A] ">Contact Us</li>
                        </NavLink>
                    </ul>
                </nav>
                <div className="flex gap-5">
                    <NavLink to="/AmbassadorTeam">
                        <button type="button" className="py-3 px-5 rounded-lg bg-orange text-white">Become an Ambassador</button>
                    </NavLink>
                    <NavLink>

                    </NavLink>
                    <button type="button" className="py-3 px-5 rounded-lg border-1 border-orange text-white"><span className="mr-2"><LockOutlined /></span>Login/SignUp</button>
                </div>
            </div>







            <div className="xl:hidden ">
                <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-blue">
                    <NavbarContent className="flex justify-between item center">
                        <NavbarMenuToggle
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            className="sm:hidden text-white"
                        />
                        <NavbarBrand className="ml-[200px]">
                            <img src="/Logo.png" alt="logo" />
                        </NavbarBrand>
                    </NavbarContent>
                    <NavbarMenu className="bg-blue z-[999999999] text-white font-semibold">
                        <NavbarMenuItem >
                            <Link to="/">
                                <p>Home</p>
                            </Link>
                        </NavbarMenuItem>
                        <NavbarMenuItem >
                            <Link to="/AboutUs">
                                <p>About Us</p>
                            </Link>
                        </NavbarMenuItem>
                        <NavbarMenuItem >
                            <Link to="/Properties">
                                <p>Investment and properties</p>
                            </Link>
                        </NavbarMenuItem>
                        <NavbarMenuItem >
                            <Link to="/FAQ">
                                <p>FAQs</p>
                            </Link>
                        </NavbarMenuItem>
                        <NavbarMenuItem >
                            <Link to="/ContactUs">
                                <p >                        Contact Us
                                </p>
                            </Link>
                        </NavbarMenuItem>

                    </NavbarMenu>
                </Navbar>
            </div>




        </>
    );
}

export default Nav;