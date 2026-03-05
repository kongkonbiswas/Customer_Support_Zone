import React from "react";
import { BiBold } from "react-icons/bi";
import { FaBold } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
import { toast } from "react-toastify";

const ResolvedTask = ({ issues, removeData }) => {
  const resolvedData = issues
    .filter((issue) => issue.status === "Resolved")
    .sort((a, b) => new Date(a.statusChangedAt) - new Date(b.statusChangedAt));

  const showResolvedTask = () => {
    if (resolvedData.length > 0) {
      return `hidden`;
    }
  };

  const handleRemoveBtn = (data) => {
    removeData(data);
    toast.success(`"${data.title}" deleted successfully.`);
  };

  return (
    <>
      <div
        className="shadow-lg p-4 bg-white rounded-xl border border-zinc-200 transition-all duration-500 ease-in-out
        hover:-translate-y-[1px]
        hover:ring-2 hover:ring-cyan-300/60 hover:ring-offset-2 hover:ring-offset-white
        hover:shadow-[0_10px_25px_-10px_rgba(56,189,248,.35),0_12px_30px_-12px_rgba(16,185,129,.25)]"
      >
        <h1 className="text-start mb-4 font-semibold text-lg md:text-xl px-3 md:px-0">
          Resolved Task
        </h1>
        <div
          className={`flex flex-col items-center my-8 ${showResolvedTask()}`}
        >
          <p className="text-gray-500 font-semibold ">
            No Completed Tasks Found!
          </p>
          <p className="text-gray-400 text-sm md:text-base">
            Tasks you finish will appear in this list 😇
          </p>
        </div>
        {resolvedData.map((item) => (
          <div key={item.id} className="mt-3 p-4 bg-[#bbdce568] rounded-xl">
            <p className="mb-2 font-semibold text-sm md:text-base">
              {item.title}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FcCheckmark size={20} />
                <p>Completed</p>
              </div>
              <button
                onClick={() => handleRemoveBtn(item)}
                class="btn text-sm md:text-base text-white bg-[linear-gradient(125deg,rgba(99,46,227,1),rgba(159,98,242,1))]"
              >
                Click To Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResolvedTask;
