import { TiThMenu } from "react-icons/ti";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from 'react-icons/gi'
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();

const Header = () => {
    const [show, setShow] = useState(false);
    const [burgerNav, setBurgerNav] = useState(false);

    const transitionNav = () => {
        if (window.scrollY > 200) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    function burgerNavController() {
        setBurgerNav(!burgerNav);
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNav);

        //remove
        return () => window.removeEventListener("scroll", transitionNav);
    }, []);

    const navItems = [
        {
            name: 'Timeline',
            path: 'timeline-section',
        },
        {
            name: 'Competition',
            path: 'competition-section',
        },
        {
            name: 'Rules',
            path: 'rules-section',
        },
        {
            name: 'Prizes',
            path: 'prizes-section',
        },
        {
            name: 'Sponsors',
            path: 'sponsors-section',
        },
        {
            name: 'Speakers',
            path: 'speakers-section',
        },
        {
            name: 'Contact',
            path: 'contact-section',
        },
    ]

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between bg-black p-2 md:p-2">
                <div>
                    <nav className='flex items-center z-80 px-3 py-3'>
                        <TiThMenu
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-offset="100"
                            className="absolute h-8 w-8 text-[#ffffff] right-3 lg:hidden mt-3 mr-3"
                            onClick={burgerNavController}
                        />

                        <ul
                            className={
                                burgerNav
                                    ? "navbar-nav mr-auto flex-col flex items-center fixed inset-0 lg:bottom-full uppercase bg-black backdrop-blur-3xl gap-4 justify-center p-8 lg:hidden z-50 mt-12"
                                    : "hidden"
                            } 
                        >
                            <li>
                                <div className="w-full">
                                    <img src='/assets/bashaway-logo.svg' className="w-40 h-40" />
                                </div>
                                {
                                    navItems.map((item) => {
                                        return <div className="col col-span-20 pb-10">
                                            <a className="text-white hover:text-primary mb-3 md:py-10 transition duration-300" href="" target="_blank">{item.name}</a>
                                        </div>
                                    })
                                }
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="hidden lg:flex justify-between w-full">
                    <div className=" w-full md:w-5/12 pl-0 md:pl-12 md:pt-3">
                        <img src='/assets/bashaway-logo.svg' className="w-30 h-30" />
                    </div>
                    {
                        navItems.map((item) => {
                            return <div className="col col-span-20 md:pt-3">
                                <a className="px-2 text-nav-links-unselected hover:text-primary mb-3 transition duration-300" href="" target="_blank">{item.name}</a>
                            </div>
                        })
                    }
                    <div className="col col-span-20 md:pt-2 pr-7 pl-2">
                        <button class="py-1 px-3 bg-white hover:text-primary mb-3 transition duration-300 font-semibold rounded-lg" href="" target="_blank">
                            Register
                        </button>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex w-full h-[0.25px] bg bg-nav-links-unselected opacity-20"></div>
        </div>
    )
}

export default Header