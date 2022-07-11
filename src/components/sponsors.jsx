import Title from "./common/title"

const Sponsors = () => {
    const Sponsor = ({ logo, classes }) => {
        return (<div className={`relative w-32 h-32 md:w-44 md:h-44 p-3 bg-black outline outline-2 outline-nav-links-unselected ring-4 rounded-full flex justify-center cursor-pointer items-center transform hover:-rotate-45 hover:outline-primary transition duration-300 ${classes}`}>
            <img src={`/assets/sponsors/${logo}.svg`} className="w-3/4 h-3/4" />
        </div>)
    }
    return <>
        <div className="flex flex-col justify-center items-center bg-black p-4 md:p-8">
            <Title title="Sponsors" className="mt-4" />
            <span className="text-xl text-white font-semibold my-12">Platinum</span>
            <Sponsor logo="Vercel" />
            <span className="text-xl text-white font-semibold my-16 mb-12">Gold</span>
            <div className="flex flex-wrap justify-center items-center gap-y-12">
                {
                    ['Star', 'Rectangle', 'Ellipse'].map((logo) => {
                        return <Sponsor key={logo} logo={logo} classes="w-24 h-24 md:w-[8rem] md:h-[8rem] p-10 mx-6"/>
                    })
                }
            </div>
            <span className="text-xl text-white font-semibold my-16 mb-12">Silver</span>
            <div className="flex flex-wrap justify-center items-center gap-y-12  mb-12">
                {
                    ['Triangle', 'Triangle', 'Triangle','Triangle', 'Triangle', 'Triangle', 'Triangle'].map((logo, index) => {
                        return <Sponsor key={index} logo={logo} classes="w-16 h-16 md:w-[6rem] md:h-[6rem] p-5 mx-6"/>
                    })
                }
            </div>
        </div>
    </>
}

export default Sponsors