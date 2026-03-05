import React from "react";
import { toast } from "react-toastify";

const TaskStatus = ({ issues, completeData }) => {
  const inProgressData = issues
    .filter((issue) => issue.status === "In-Progress")
    .sort((a, b) => new Date(a.statusChangedAt) - new Date(b.statusChangedAt));

  const handleCompleteBtn = (compData) => {
    completeData(compData);
    toast.success(`"${compData.title}" marked as Completed. 🎉`);
    toast.success(`“${compData.title}” moved to Resolved Task.`);
  };

  const showText = () => {
    if (inProgressData.length === 0) {
      return (
        <div className="flex flex-col items-center my-8">
          <p className="text-gray-500 font-semibold">No Tasks In Progress!</p>
          <p className="text-gray-400 text-sm md:text-base">
            Select a ticket to add to Task Status
          </p>
        </div>
      );
    } else {
      const progress = inProgressData.map((item) => {
        return (
          <div key={item.id} className="mt-3 p-4 bg-[#f8f3b9c4] rounded-xl">
            <p className="mb-2 font-semibold text-sm md:text-base">
              {item.title}
            </p>
            <button
              onClick={() => handleCompleteBtn(item)}
              class="btn text-sm md:text-base w-full text-white bg-gradient-to-r from-[rgba(84,207,104,1)] to-[rgba(0,130,122,1)]"
            >
              Complete
            </button>
          </div>
        );
      });
      return progress;
    }
  };

  return (
    <>
      <div
        className=" shadow-lg p-4 bg-white rounded-xl mb-5 border border-zinc-200 transition-all duration-500 ease-in-out
        hover:-translate-y-[1px]
        hover:ring-2 hover:ring-cyan-300/60 hover:ring-offset-2 hover:ring-offset-white
        hover:shadow-[0_10px_25px_-10px_rgba(56,189,248,.35),0_12px_30px_-12px_rgba(16,185,129,.25)]"
      >
        <h1 className="text-start font-black mb-4 font-dark text-lg md:text-xl px-3 md:px-0">
          Task Status
        </h1>
        {showText()}
      </div>
    </>
  );
};

export default TaskStatus;
