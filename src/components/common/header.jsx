import { TiThMenu } from "react-icons/ti";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();

const Header = () => {
    const [show, setShow] = useState(false);
    const [burgerNav, setBurgerNav] = useState(false);

    function burgerNavController() {
        setBurgerNav(!burgerNav);
    }

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
            <div className="flex flex-row md:flex-row justify-between bg-black p-2 md:p-2">

                <div>
                    <nav className='flex items-center z-50'>
                        <TiThMenu
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-offset="100"
                            className="absolute h-8 w-8 text-[#ffffff] right-3 md:hidden mt-5"
                            onClick={burgerNavController}
                        />

                        <ul
                            data-aos="fade-down"
                            data-aos-duration="1000"
                            data-aos-offset="100"
                            className="hidden md:flex "
                        >
                        </ul>

                    </nav>
                </div>

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
                <div className="col col-span-20 md:pt-2 pr-10 ">
                    <button class=" py-1 px-4 bg-white hover:text-primary mb-3 transition duration-300 font-semibold rounded-lg" href="" target="_blank">
                        Register
                    </button>
                </div>

            </div>
            <div className="w-full h-[0.25px] bg bg-nav-links-unselected opacity-20"></div>
        </div>

    )
}

export default Header