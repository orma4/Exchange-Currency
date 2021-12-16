import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Picker = ({ endDate, setEndDate, startDate, setStartDate }) => {
  const handleChange = (dates) => {
    console.log("handleChange", dates);
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="date-picker">
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        startDate={startDate}
        endDate={endDate}
        maxDate={new Date()}
        selectsRange
        inline
      />
    </div>
  );
};

export default Picker;
