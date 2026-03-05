import { IoCalendar } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { toast } from "react-toastify";

const TicketsCards = ({ issue, handleCardProgress }) => {
  const { title, status, description, id, priority, customer, createdAt } =
    issue;

  const handleCard = (data) => {
    handleCardProgress(data);
    toast(`"${data.title}" is now In-Progress.`);
  };

  const getPriorityColor = (priority) => {
    if (priority === "HIGH PRIORITY") {
      return `text-red-600`;
    } else if (priority === "MEDIUM PRIORITY") {
      return `text-yellow-500`;
    } else {
      return `text-green-600`;
    }
  };

  return (
    <>
      <div
        onClick={() => handleCard(issue)}
        className="h-full flex flex-col p-3 md:p-4 shadow-md rounded-xl bg-white border border-zinc-200 transition-all duration-500 ease-in-out
        hover:-translate-y-[1px]
        hover:ring-2 hover:ring-cyan-300/60 hover:ring-offset-2 hover:ring-offset-white
        hover:shadow-[0_10px_25px_-10px_rgba(56,189,248,.35),0_12px_30px_-12px_rgba(16,185,129,.25)]
        "
      >
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-sm md:text-base">{title}</h2>
          <p
            className={`py-1 px-2 md:px-3 text-nowrap rounded-2xl text-sm flex items-center gap-1 ${
              status === "Open"
                ? "bg-[#B9F8CF]"
                : status === "In-Progress"
                  ? "bg-[#F8F3B9]"
                  : "bg-teal-100"
            }`}
          >
            <span
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full inline-block ${
                status === "Open"
                  ? "bg-[#02A53B]"
                  : status === "In-Progress"
                    ? "bg-[#FEBB0C]"
                    : "bg-teal-500"
              }`}
            ></span>
            {status}
          </p>
        </div>
        <p className="text-sm text-[#627382] flex-1 my-3 line-clamp-3">
          {description}
        </p>
        <div className="mt-1.5 space-y-2 md:flex justify-between">
          <div className="flex items-center justify-between md:justify-baseline gap-4">
            <p className="text-sm text-[#627382]">#{id}</p>
            <p className={`text-sm  ${getPriorityColor(priority)}`}>
              {priority}
            </p>
          </div>
          <div className="flex justify-between md:justify-baseline">
            <div className="flex items-center gap-1">
              <CgProfile color="#627382" size={18} />
              <p className="text-sm text-[#627382] mr-4">{customer}</p>
            </div>
            <div className="flex">
              <IoCalendar color="#627382" size={18} />
              <span className="text-sm text-[#627382] ml-1">{createdAt}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketsCards;
