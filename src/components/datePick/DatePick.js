import React from "react";
import { useState, useEffect } from "react";

import DatePicker from "react-date-picker";
import { format, subDays } from "date-fns";
import * as Icon from "react-feather";
import "./DatePicker.css";

export default function DatePick() {
  const [filterDate, setFilterDate] = useState(subDays(new Date(), 1));
  // const onChange = (date) => setdate({ date });
  // const [date, setdate] = useState(new Date());

  return (
    <DatePicker
      //   value={filterDate}
      minDate={new Date("30-Jan-2020")}
      maxDate={subDays(new Date(), 1)}
      format="dd/MM/y"
      className="datePicker"
      // onChange={onChange}
      // value={date}
      calendarIcon={<Icon.Calendar />}
      inputProps={
        (onkeydown = (e) => {
          e.preventDefault();
        })
      }
      clearIcon={<Icon.XCircle />}
      // onChange={(date) => {
      //   setFilterDate(date);
      //   const fomattedDate = !!date ? format(date, "dd/MM/yyyy") : "";
      //   handleFilters("dateannounced", fomattedDate);
      // }}
    />
  );
}
