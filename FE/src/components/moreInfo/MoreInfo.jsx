import Duck from "./DuckSvg";
import DeadDuck from "./DeadDuckSvg"
import { useState } from "react";

function MoreInfo() {
    const [theDuckDied, setTheDuckDied]= useState(false)
  return (
    <div className="w-full h-[90vh] bg-pink-400 flex flex-col justify-evenly items-center p-4">
      {theDuckDied==false && <div className="text-3xl font-bold italic flex flex-col justify-start items-center">
              <span>No many infos to share... enjoy this pic of a duck</span>
              <span className="text-xl underline">(...DO NOT TAP ON THE DUCK)</span>
          </div>}
          {theDuckDied==true && <div className="text-3xl font-bold italic flex flex-col justify-start items-center">
              What have you done??? :(
          </div>}
      <button className="w-1/3 h-3/6" onClick={()=>{setTheDuckDied(true)}}>
              {theDuckDied == false && <Duck />}
              {theDuckDied== true && <DeadDuck/>}
      </button>
    </div>
  );
}

export default MoreInfo;
