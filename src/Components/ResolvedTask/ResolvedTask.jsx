import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { toast } from "react-toastify";

const ResolvedTask = ({ issues, removeData }) => {
  // Keep only resolved tickets and sort by completion time.
  const resolvedData = issues
    .filter((issue) => issue.status === "Resolved")
    .sort(
      (a, b) =>
        new Date(a.statusChangedAt || 0) - new Date(b.statusChangedAt || 0),
    );

  // Remove a resolved task and show confirmation.
  const handleRemoveBtn = (item) => {
    removeData(item);
    toast.success(`"${item.title}" deleted successfully.`);
  };

  return (
    <section className="px-3 md:px-0">
      {/* Plain heading style like your 2nd screenshot */}
      <h2 className="mb-2 text-4xl font-semibold text-slate-700 md:text-xl">
        Resolved Task
      </h2>

      {/* Empty state (plain text, no card wrapper) */}
      {resolvedData.length === 0 && (
        <p className="text-sm text-slate-500 md:text-base">
          No resolved tasks yet.
        </p>
      )}

      {/* Resolved list (only shows when there are items) */}
      {resolvedData.map((item) => (
        <div key={item.id} className="mt-3 rounded-xl bg-[#bbdce568] p-4">
          <p className="mb-2 text-sm font-semibold text-slate-900 md:text-base">
            {item.title}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FcCheckmark size={20} />
              <p className="text-sm font-medium text-slate-700 md:text-base">
                Completed
              </p>
            </div>

            <button
              onClick={() => handleRemoveBtn(item)}
              className="btn bg-[linear-gradient(125deg,rgba(99,46,227,1),rgba(159,98,242,1))] text-sm text-white md:text-base"
            >
              Click To Remove
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ResolvedTask;
