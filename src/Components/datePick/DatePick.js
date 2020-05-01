import React from "react";
import { useState, useEffect } from "react";

import DatePicker from "react-date-picker";
import { format, subDays } from "date-fns";
import * as Icon from "react-feather";
import "./DatePicker.css";

export default function DatePick() {
  const [filterDate, setFilterDate] = useState(subDays(new Date(), 1));
const[date,setdate]=useState(new Date())
const onChange = date => setdate({ date })

  return (
    <DatePicker
      onChange={onChange}
      value={date}

     
      format="dd/MM/yy"
      className="datePicker"
      calendarIcon={<Icon.Calendar style={{width:20}}/>}
      // inputProps={
      //   (onkeydown = (e) => {
      //     e.preventDefault();
      //   })
      // }
      clearIcon={<Icon.XCircle  style={{width:20}}/>}
    
    />
  );
}
