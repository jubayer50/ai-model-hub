import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs tabs-box justify-center gap-10 bg-transparent">
      <input
        type="radio"
        name="my_tabs_1"
        className="tab font-semibold text-lg w-40 rounded-full"
        aria-label="Models"
        onClick={() => {
          setActiveTab("models");
        }}
        defaultChecked
      />
      <input
        type="radio"
        name="my_tabs_1"
        className="tab font-semibold text-lg w-40 rounded-full"
        aria-label="Cart"
        onClick={() => {
          setActiveTab("cart");
        }}
      />
    </div>
  );
};

export default Tabs;
