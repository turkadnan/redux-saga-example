import React from "react";
import './styles.css';

const Stats = ({ stats }) => {
  if (!stats) {
    //loading not yet statrted
    return <span className="stats">Loading...</span>;
  }
  return (
    <span className="stats">
      {stats.error && "Error!"}
      {stats.isLoading && "Loading!"}
      {stats.downloads !== null && `Stat Download ${stats.downloads}`}
    </span>
  );
};

export default Stats;
