import React from "react";

const Rules = () => {
  return (
    <div class="bg-black w-full grid grid-cols-12 gap-1 text-white">
      <div className="col-span-12">
        <h1 class="self-center text-center text-5xl font-bold m-2">
          Rules & Regulations
        </h1>
      </div>
      <div className="col-span-12 grid grid-cols-12 gap-3 border m-3 rounded">
        <div className="col-span-6 m-2">
          <img src={"/assets/RulesNRegulations/RulesRegImg.jpg"} class="filter grayscale rounded" />
        </div>
        <div className="col-span-6 m-3">
            <ul class="list-disc text-gray-500">
                <li class="text-left">A competing team can consist of 1 to 4 members.</li>
                <li class="text-left" >The competition will be an online contest where teams compete within a given set of task-based challenges in a timed setting.</li>
                <li class="text-left" >Each team must register through the competition platform by entering team details and necessary information about its members.</li>
                <li class="text-left" >The challenges will be available on the competition platform once the competition begins.</li>
                <li class="text-left">All team members must login with the same credentials provided during team registration.</li>
                <li class="text-left">Points will be assigned according to challenges and sub-tasks of each challenge.</li>
                <li class="text-left">The highest scoring team will be considered the winner and a score board will be updated periodically (not in real time). The rate will depend on the registered team count and will be informed later.</li>
                <li class="text-left">Extra points will be awarded based on the number of lines of code and the level of optimization (this score will be calculated by a predefined formula).</li>
                <li class="text-left">A team can submit multiple submissions to a single challenge, but only the latest submission will be considered when marking.</li>
                <li class="text-left">When competition ended, we will publish public repository under SLIIT FOSS Community github profile. We will include latest uploads of each teams, hope this will help to share your knowledge and show our transparency.</li>
                <li class="text-left">The judges’ decision will be final. ***</li>
            </ul>
        </div>
      </div>
      <div className="col-span-12 text-gray-400">
        <span>Get the rules and regulations booklet.</span>
      </div>
      <div className="col-span-12"><button class="bg-white/40 rounded px-7 py-2 m-2">Download</button></div>
    </div>
  );
};

export default Rules;
