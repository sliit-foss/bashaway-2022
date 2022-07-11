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
                    <nav className='flex items-center z-50'>
                        <TiThMenu
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-offset="100"
                            className="absolute h-8 w-8 text-[#ffffff] right-3 md:hidden mt-3"
                            onClick={burgerNavController}
                        />

                        <ul
                            className={
                                burgerNav
                                    ? "navbar-nav mr-auto flex-col flex items-center fixed inset-0 bottom-1/2 uppercase bg-[#58dfc3]/10 backdrop-blur-lg gap-4 justify-center p-8 md:hidden  "
                                    : "hidden"
                            }
                        >
                            <AiOutlineClose
                                onClick={burgerNavController}
                                className=" h-8 w-8 text-[#ffffff] font-extrabold z-30"
                            />
                            <li>
                                <div className="w-full md:w-5/12 pl-0 md:pl-12 md:pt-3">
                                    <img src='/assets/bashaway-logo.svg' className="w-30 h-30" />
                                </div>
                                {
                                    navItems.map((item) => {
                                        return <div className="col col-span-20 md:pt-3">
                                            <a className="text-nav-links-unselected hover:text-primary mb-3 transition duration-300" href="" target="_blank">{item.name}</a>
                                        </div>
                                    })
                                }
                            </li>

                        </ul>
                    </nav>
                </div>

                {/* <div className="hidden md:flex "> */}
                    <div className=" w-full md:w-5/12 pl-0 md:pl-12 md:pt-3">
                        <img src='/assets/bashaway-logo.svg' className="hidden md:flex w-30 h-30" />
                    </div>
                    {
                        navItems.map((item) => {
                            return <div className="col col-span-20 md:pt-3">
                                <a className="hidden md:flex text-nav-links-unselected hover:text-primary mb-3 transition duration-300" href="" target="_blank">{item.name}</a>
                            </div>
                        })
                    }
                    <div className="col col-span-20 md:pt-2 pr-10 ">
                        <button class="hidden md:flex py-1 px-4 bg-white hover:text-primary mb-3 transition duration-300 font-semibold rounded-lg" href="" target="_blank">
                            Register
                        </button>
                    </div>
                </div>
                <div className="hidden md:flex w-full h-[0.25px] bg bg-nav-links-unselected opacity-20"></div>
            {/* </div> */}
        </div>
    )
}

export default Header