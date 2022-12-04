import React from "react";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, ErrorMessage } from "formik";
import PopupForm from "./PopupForm";

const DatePicker = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className={popup.control}>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {/* Add function as children */}
        {({ form, field }) => {
          const { setFieldValue } = form; //This allows to set a form field value in the formik state
          const { value } = field; //This gives the value of the datepicker at any given time
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          ); 
        }}
      </Field>
    </div>
  );
};

export default DatePicker;


//Notes
// The Dateview component being returned on line 18 is imported from the datepicker library, it is a default export which means it could be imported with any name
// It accepts some props which are;
// 1. id which is equal to the name prop specified on line 12
// 2. all the field props which are being spread
// 3. all the rest props which are being spread
// 4. selected prop which is equal to the value of the field specified in line 16
// 5. onChange..which is an arrow function that receives two arguements..
        // the first arguement is the name prop from line 12
        // the second arguement is a changed value..
        // The changed value is then passed on to the setFieldValue which we have destructured from the form

