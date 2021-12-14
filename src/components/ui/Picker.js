import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Picker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setIsOpen(!isOpen);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="date-picker">
      {/* {console.log(startDate, endDate)} */}
      <button className="button-picker" onClick={handleClick}>
        {/* {format(startDate, "dd-MM-yyyy")} */}
        {"dd-MM-yyyy"}
      </button>
      {isOpen && (
        <DatePicker
          selected={startDate}
          onChange={handleChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
        />
      )}
    </div>
  );
};

export default Picker;
