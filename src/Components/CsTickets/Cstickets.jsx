import React, { use, useState } from "react";
import Container from "../Container/Container";
import TicketsCards from "../TicketsCards/TicketsCards";
import TaskStatus from "../TaskStatus/TaskStatus";
import ResolvedTask from "../ResolvedTask/ResolvedTask";
import OutputBox from "../OutputBox/OutputBox";

const CsTickets = ({ thePromise }) => {
  // Read async data (React 19 `use`) and keep a local mutable copy.
  const issuesData = use(thePromise);
  const [issues, setIssues] = useState(issuesData);

  // Move ticket from Open -> In-Progress when card action is clicked.
  const handleCardProgress = (clickData) => {
    if (clickData.status !== "Open") return;

    const progressData = issues.map((issue) =>
      issue.id === clickData.id
        ? { ...issue, status: "In-Progress", statusChangedAt: new Date() }
        : issue,
    );

    setIssues(progressData);
  };

  // Mark selected ticket as Resolved.
  const completeData = (compData) => {
    const resolvedData = issues.map((issue) =>
      issue.id === compData.id ? { ...compData, status: "Resolved" } : issue,
    );

    setIssues(resolvedData);
  };

  // Remove a resolved ticket from the list.
  const removeData = (data) => {
    const otherData = issues.filter((ele) => ele.id !== data.id);
    setIssues(otherData);
  };

  return (
    <Container>
      {/* Top summary/output section */}
      <OutputBox issues={issues} />

      <h1 className="mb-4 px-3 text-start text-xl font-semibold md:px-0 md:text-2xl">
        Customer Tickets
      </h1>

      <div className="flex flex-col-reverse gap-6 md:flex-row">
        {/* Left side: active (non-resolved) ticket cards */}
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

        {/* Right side: status controls + resolved list */}
        <div className="px-3 md:w-1/3 md:px-0">
          <TaskStatus issues={issues} completeData={completeData} />
          <ResolvedTask issues={issues} removeData={removeData} />
        </div>
      </div>
    </Container>
  );
};

export default CsTickets;
