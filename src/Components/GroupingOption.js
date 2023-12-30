import React from "react";

function GroupingOption({
  groupingOption,
  setGroupingOption,
  sortingOption,
  setSortingOption,
}) {
  const groupingOptions = ["Status", "User", "Priority"];
  const sortingOptions = ["Priority", "Title"];

  const handleGroupingChange = (event) => {
    setGroupingOption(event.target.value);
  };

  const handleSortingChange = (event) => {
    setSortingOption(event.target.value);
  };

  return (
    <div className="grouping-options">
      <div>
        <label htmlFor="grouping">Group by:</label>
        <select
          id="grouping"
          value={groupingOption}
          onChange={handleGroupingChange}
        >
          {groupingOptions.map((option) => (
            <option key={option} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="sorting">Sort by:</label>
        <select
          id="sorting"
          value={sortingOption}
          onChange={handleSortingChange}
        >
          {sortingOptions.map((option) => (
            <option key={option} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default GroupingOption;
