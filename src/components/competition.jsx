const Competition = () => {

    return <div className="flex flex-col items-center">
        <h1 className="text-white font-bold text-[64px]">competition</h1>

        <div className="flex flex-row mt-[60px]">
            <div className="max-w-[480px] text-right mx-2">
                <h1 className="text-white mb-[18px]">Why?</h1>
                
                <p className="text-[#888888]"><span className="text-[#0070F3]">./bashaway</span> 2022 aims to sharpen a participant's 
                <span className="text-[#0070F3]">analytical thinking, problem-solving,</span> and <span className="text-[#0070F3]">scripting skills </span>
                through its challenges. Also, participants get to test their skills against other skilled 
                participants and improve their own timing in a competitive environment.
                <br></br>You will <span className="text-[#0070F3]">gain massive knowledge </span>that related to 
                <span className="text-[#0070F3]"> computer process automation.</span> Same time you will get broad idea about tools, technologies and methods that coupling with 
                <span className="text-[#0070F3]"> process automation.</span> Winner or not , We hope you all <span className="text-[#0070F3]"> leave without empty hands.</span></p>
            </div>
            <div className="w-[480px] mx-2"></div>  
        </div>
        <div className="flex flex-row mb-[30px] ">
        <div className="w-[480px] mx-2"></div>  
            <div className="max-w-[480px] text-left mx-2">
                <h1 className="text-white mb-[18px]">What?</h1>
                
                <p className="text-[#888888]"> <span className="text-[#0070F3]">./bashaway</span> 2022 is a challenge driven competition, 
                where you have to <span className="text-[#0070F3]"> develop automation scripts </span>in bash, Python or any suitable language for a specific 
                scenario within a given duration.
                You can navigate into our competition portal, within that you can register your team and manage 
                them as you need. When competition begin, problems will appear in your portal then you can start attempt.</p>
            </div>         
        </div>


        <h1 className="text-xl text-white font-bold mt-[30px]">How it works?</h1>
        <span className="text-sm text-[#888888] font-normal my-[10px]">Find the attachment here.</span>
        <a href="">
            <div className="flex w-[165px] h-[42px] bg-[#D9D9D9] rounded-sm justify-center items-center text-sm font-normal mb-[80px]">Download</div>
        </a>
        
    </div>
}

export default Competition