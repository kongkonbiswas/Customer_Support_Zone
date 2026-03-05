import { IoCalendar } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { toast } from "react-toastify";

const TicketsCards = ({ issue, handleCardProgress }) => {
  // Destructure issue fields for cleaner JSX.
  const { title, status, description, id, priority, customer, createdAt } =
    issue;

  // Card click updates status in parent + shows a toast.
  const handleCard = (data) => {
    handleCardProgress(data);
    toast(`"${data.title}" is now In-Progress.`);
  };

  // Priority badge text color helper.
  const getPriorityColor = (priority) => {
    if (priority === "HIGH PRIORITY") return "text-red-600";
    if (priority === "MEDIUM PRIORITY") return "text-amber-600";
    return "text-green-600";
  };

  return (
    <div
      onClick={() => handleCard(issue)}
      className="h-full cursor-pointer select-none rounded-xl border border-zinc-200 bg-white p-3 shadow-md opacity-100 md:p-4"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-900 md:text-base">
          {title}
        </h2>

        {/* Status badge */}
        <p
          className={`flex items-center gap-1 rounded-2xl px-2 py-1 text-sm text-slate-800 md:px-3 ${
            status === "Open"
              ? "bg-[#B9F8CF]"
              : status === "In-Progress"
                ? "bg-[#F8F3B9]"
                : "bg-teal-100"
          }`}
        >
          <span
            className={`inline-block h-3 w-3 rounded-full md:h-4 md:w-4 ${
              status === "Open"
                ? "bg-[#02A53B]"
                : status === "In-Progress"
                  ? "bg-[#FEBB0C]"
                  : "bg-teal-500"
            }`}
          />
          {status}
        </p>
      </div>

      <p className="my-3 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">
        {description}
      </p>

      <div className="mt-1.5 justify-between space-y-2 md:flex">
        <div className="flex items-center justify-between gap-4 md:justify-baseline">
          <p className="text-sm text-slate-500">#{id}</p>
          <p className={`text-sm font-medium ${getPriorityColor(priority)}`}>
            {priority}
          </p>
        </div>

        <div className="flex justify-between md:justify-baseline">
          <div className="mr-4 flex items-center gap-1">
            <CgProfile size={18} className="text-slate-500" />
            <p className="text-sm text-slate-500">{customer}</p>
          </div>
          <div className="flex items-center">
            <IoCalendar size={18} className="text-slate-500" />
            <span className="ml-1 text-sm text-slate-500">{createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsCards;
