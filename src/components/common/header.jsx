import Divider from "./divider"

const Header = () => {
    return (
        <div>
            <div className="flex flex-row md:flex-row justify-between bg-black/70 p-2 md:p-2 w-full fixed top-0 z-50 backdrop-blur-[5px]">
                <div className="w-full md:w-5/12 pl-0 md:pl-12 md:pt-3">
                    <img src='/assets/bashaway-logo.svg' className="w-30 h-30" />
                </div>
                <div className="row-span-2">
                    <div className="col col-span-10 md:pt-3">
                        <a className="text-nav-links-unselected hover:text-primary mb-3 transition duration-300 " href="" target="_blank">Timeline</a>
                    </div>
                </div>

                <div className="col col-span-20 md:pt-3">
                    <a className="text-nav-links-unselected hover:text-primary mb-3 transition duration-300" href="" target="_blank">Competition</a>
                </div>
                <div className="col col-span-20 md:pt-3">
                    <a className="text-nav-links-unselected hover:text-primary mb-3 transition duration-300" href="" target="_blank">Rules</a>
                </div>
                <div className="col col-span-20 md:pt-3">
                    <a className="text-nav-links-unselected hover:text-primary mb-3 transition duration-300" href="" target="_blank">Prizes</a>
                </div>
                <div className="col col-span-20 md:pt-3">
                    <a className="text-nav-links-unselected hover:text-primary mb-3 transition duration-300" href="" target="_blank">Sponsors</a>
                </div>
                <div className="col col-span-20 md:pt-3">
                    <a className="text-nav-links-unselected hover:text-primary mb-3 transition duration-300" href="" target="_blank">Speakers</a>
                </div>
                <div className="col col-span-20 md:pt-3">
                    <a className="text-nav-links-unselected hover:text-primary mb-3 transition duration-300" href="" target="_blank">Contact</a>
                </div>
                <div className="col col-span-20 md:pt-2 pr-10 ">
                    <button class=" py-1 px-3 bg-white hover:text-primary mb-3 transition duration-300 font-semibold rounded-lg" href="" target="_blank">
                    Register
                    </button>
                </div>

            </div>
            <div className="w-full h-[0.25px] bg bg-nav-links-unselected opacity-20"></div>
        </div>

    )
}

export default Header