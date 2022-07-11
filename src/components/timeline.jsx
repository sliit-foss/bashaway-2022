const Timeline = () => {

    const timelineList = [
        {
            title : "Registration Open",
            dateTime : "02 Aug 2022 12:00 IST",
            isSmallText : true,
            gradiantColor1 : "#F9CB28",
            gradiantColor2 : "#00DFD8"
        },
        {
            title : "Start awareness session series",
            dateTime : "02 Aug 2022 12:00 IST",
            isSmallText : false,
            gradiantColor1 : "#007CF0",
            gradiantColor2 : "#00DFD8"
        },
        {
            title : "End of awareness session series",
            dateTime : "02 Aug 2022 12:00 IST",
            isSmallText : false,
            show : true,
            gradiantColor1 : "#7928CA",
            gradiantColor2 : "#4700DE"
        },
        {
            title : "Close Registration",
            dateTime : "02 Aug 2022 12:00 IST",
            isSmallText : true,
            show : true,
            gradiantColor1 : "#7928CA",
            gradiantColor2 : "#4700DE"
        },
        {
            title : "./bashway Opneing Ceremony",
            dateTime : "02 Aug 2022 12:00 IST",
            isSmallText : false,
            show : true,
            gradiantColor1 : "#7928CA",
            gradiantColor2 : "#FF0080"
        },
        {
            title : "./bashway contest begin",
            dateTime : "02 Aug 2022 12:00 IST",
            isSmallText : false,
            show : true,
            gradiantColor1 : "#7928CA",
            gradiantColor2 : "#FF0080"
        },
        {
            title : "Contest End",
            dateTime : "02 Aug 2022 12:00 IST",
            isSmallText : true,
            show : true,
            gradiantColor1 : "#FF4D4D",
            gradiantColor2 : "#F9CB28"
        },
        {
            title : "Announce winner and award ceremony",
            dateTime : "02 Aug 2022 12:00 IST",
            isSmallText : false,
            show : true,
            gradiantColor1 : "#FF4D4D",
            gradiantColor2 : "#F9CB28"
        },
        {
            title : "Conclude the event",
            dateTime : "02 Aug 2022 12:00 IST",
            isSmallText : true,
            show : false
        }
    ]

    return <div className="flex flex-col bg-black h-full justify-center items-center">
        <h1 className="text-white text-6xl font-bold pt-[80px]">Timeline</h1>

        {
            timelineList.map((list) => {
                return (
                    <>
                        <span className={`${list.isSmallText ? "text-[20px]" : "text-[32px]"} mt-[30px] text-white font-semibold leading-6"`}>{list.title}</span>
                        <span className="text-gray-500 font-normal text-sm mt-2">{list.dateTime}</span>

                        <div className="mt-5">
                            <div className={`"relative flex justify-center h-[60px] w-0.5 bg-gradient-to-t from-[${list.gradiantColor1}] to-transparent"`}>
                                <div className="absolute w-6 h-6 bg-gradient-to-r from-[#657a8d] to-[#00DFD8] rounded-full bottom-0">
                                </div>
                            </div>
                        </div>
                    </>
                
                )
            })
        }
        
    </div>
}

export default Timeline