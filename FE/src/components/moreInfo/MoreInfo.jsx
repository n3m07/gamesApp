import Duck from "./DuckSvg";

function MoreInfo() {
  return (
    <div className="w-full h-[90vh] bg-pink-400 flex flex-col justify-evenly items-center p-4">
      <div className="text-3xl font-bold italic">
        No many infos to share... enjoy this pic of a duck
      </div>
      <div className="w-1/3 h-3/6">
        <Duck></Duck>
      </div>
    </div>
  );
}

export default MoreInfo;
