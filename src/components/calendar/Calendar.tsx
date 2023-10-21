import React from "react";
import DatePicker, { Calendar } from "react-multi-date-picker";
import thai, { thai_th } from "./thai";
import "./calendar.css";

export function SampleDatePicker() {
  const [calendar, setCalender] = React.useState([""]);
  return (
    <>
      <Calendar
        calendar={thai}
        locale={thai_th}
        onChange={(d) => {
          console.log("ddd", d);
          // setCalender(Date.now());
        }}
      />
      <DatePicker
        value={calendar}
        onChange={(_, { isTyping, validatedValue }) => {
          if (isTyping) {
            return;
          }
          if (isTyping === false && Array.isArray(validatedValue)) {
            const dates = validatedValue.filter((v) => typeof v === "string");
            setCalender(dates);
          }
        }}
        format={"YYYY/MM/DD"}
        multiple
      />
      <div>
        <DatePicker
          inputClass="rmdp-input my-input-class"
          dateSeparator=" to "
          // value={calendar}
          // onChange={(_, { isTyping, validatedValue }) => {
          //   if (isTyping) {
          //     return;
          //   }
          //   if (isTyping === false && Array.isArray(validatedValue)) {
          //     const dates = validatedValue.filter(v => typeof v === 'string');
          //     setCalender(dates);
          //   }
          // }}
          onChange={(...rest) => {
            console.log("sddssd", rest);
          }}
          format={"YYYY/MM/DD"}
          range
        />
      </div>
    </>
  );
}
