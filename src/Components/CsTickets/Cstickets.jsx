import React, { use, useState } from "react";
import Container from "../Container/Container";
import TicketsCards from "../TicketsCards/TicketsCards";
import TaskStatus from "../TaskStatus/TaskStatus";
import ResolvedTask from "../ResolvedTask/ResolvedTask";
import OutputBox from "../OutputBox/OutputBox";

const CsTickets = ({ thePromise }) => {
  // Load async ticket data and keep local editable state.
  const issuesData = use(thePromise);
  const [issues, setIssues] = useState(issuesData);

  // Open -> In-Progress
  const handleCardProgress = (clickData) => {
    if (clickData.status !== "Open") return;
    setIssues((prev) =>
      prev.map((issue) =>
        issue.id === clickData.id
          ? { ...issue, status: "In-Progress", statusChangedAt: new Date() }
          : issue,
      ),
    );
  };

  // In-Progress -> Resolved
  const completeData = (compData) => {
    setIssues((prev) =>
      prev.map((issue) =>
        issue.id === compData.id ? { ...compData, status: "Resolved" } : issue,
      ),
    );
  };

  // Remove resolved ticket
  const removeData = (data) => {
    setIssues((prev) => prev.filter((ele) => ele.id !== data.id));
  };

  return (
    <Container>
      {/* Visibility guard: prevents inherited blur/opacity/filter from parents */}
      <section className="relative isolate z-10 opacity-100 blur-0 brightness-100 saturate-100 text-slate-900">
        <OutputBox issues={issues} />

        <h1 className="mb-4 px-3 text-start text-2xl font-extrabold tracking-tight text-slate-900 md:px-0">
          Customer Tickets
        </h1>

        <div className="flex flex-col-reverse gap-6 md:flex-row">
          <div className="px-3 md:w-2/3 md:px-0">
            <div className="grid gap-4 md:grid-cols-2">
              {issues
                .filter((issue) => issue.status !== "Resolved")
                .map((issue) => (
                  <TicketsCards
                    key={issue.id}
                    issue={issue}
                    handleCardProgress={handleCardProgress}
                  />
                ))}
            </div>
          </div>

          <div className="px-3 md:w-1/3 md:px-0">
            <TaskStatus issues={issues} completeData={completeData} />
            <ResolvedTask issues={issues} removeData={removeData} />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CsTickets;
