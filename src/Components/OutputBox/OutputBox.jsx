import React from "react";

const OutputBox = ({ issues }) => {
  const inProgressData = issues.filter(
    (issue) => issue.status === "In-Progress",
  );
  const resolvedData = issues.filter((issue) => issue.status === "Resolved");

  return (
    <>
      <div className="my-8 md:my-20 grid md:grid-cols-2 gap-3 md:gap-6 md:h-64 px-3">
        <div className=" flex flex-col justify-center items-center text-white py-10 md:py-16 rounded-xl bg-[linear-gradient(125deg,rgba(99,46,227,1),rgba(159,98,242,1))] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/vector1.png')] bg-contain bg-no-repeat opacity-70 pointer-events-none"></div>
          <div className="absolute inset-0 bg-[url('/vector1.png')] bg-contain bg-no-repeat bg-left rotate-y-180  opacity-70 pointer-events-none"></div>
          <h2 className="text-xl md:text-2xl text-white mb-3">In-Progress</h2>
          <p className="text-4xl md:text-6xl text-white">
            {inProgressData.length}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center py-10 md:py-16 rounded-xl bg-gradient-to-r from-[rgba(84,207,104,1)] to-[rgba(0,130,122,1)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/vector1.png')] bg-contain bg-no-repeat opacity-70 pointer-events-none"></div>
          <div className="absolute inset-0 bg-[url('/vector1.png')] bg-contain bg-no-repeat bg-left rotate-y-180  opacity-70 pointer-events-none"></div>
          <h2 className="text-xl md:text-2xl mb-3 text-white">Resolved</h2>
          <p className="text-4xl md:text-6xl text-white">
            {resolvedData.length}
          </p>
        </div>
      </div>
    </>
  );
};

export default OutputBox;
