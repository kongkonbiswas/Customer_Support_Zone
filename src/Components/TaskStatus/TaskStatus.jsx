import React from "react";
import { toast } from "react-toastify";

const TaskStatus = ({ issues, completeData }) => {
  // Keep only In-Progress issues and sort by when they entered this state.
  const inProgressData = issues
    .filter((issue) => issue.status === "In-Progress")
    .sort(
      (a, b) =>
        new Date(a.statusChangedAt || 0) - new Date(b.statusChangedAt || 0),
    );

  // Mark a task as completed.
  const handleCompleteBtn = (compData) => {
    completeData(compData);
    toast.success(`"${compData.title}" marked as Completed.`);
    toast.success(`"${compData.title}" moved to Resolved Task.`);
  };

  return (
    <section className="mb-6 px-3 md:px-0">
      {/* Title style like your 2nd screenshot */}
      <h2 className="mb-2 text-4xl font-semibold text-slate-700 md:text-xl">
        Task Status
      </h2>

      {/* Empty state (plain text, no card box) */}
      {inProgressData.length === 0 && (
        <p className="text-sm text-slate-500 md:text-base">
          Select a ticket to add to Task Status
        </p>
      )}

      {/* Task items (kept simple and clean) */}
      {inProgressData.map((item) => (
        <div key={item.id} className="mt-3 rounded-xl bg-[#f8f3b9c4] p-4">
          <p className="mb-2 text-sm font-semibold text-slate-900 md:text-base">
            {item.title}
          </p>
          <button
            onClick={() => handleCompleteBtn(item)}
            className="btn w-full bg-gradient-to-r from-[rgba(84,207,104,1)] to-[rgba(0,130,122,1)] text-sm text-white md:text-base"
          >
            Complete
          </button>
        </div>
      ))}
    </section>
  );
};

export default TaskStatus;
