import React, { Component, useState } from 'react';
import DatePicker from "react-datepicker";
import {DateRangePicker, SingleDatePicker,DayPickerRangeController} from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file





export default class MyDatePicker extends Component {
  handleSelect(ranges){
    console.log(ranges);
    {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    }
  }
  render(){
    const selectionRange = {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }

    return (
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={this.handleSelect}
      />
    )
  }
}


// export default function MyDatePicker (){
//     const [selectedDate,setSelectedDate]= useState(null)

//     return(

//         <DatePicker 
//         selected ={selectedDate} 
//         onChange={date => setSelectedDate(date)} 
//         dateFormat="MMMM dd"
//         minDate ={ new Date()}
//         isClearable
//         showYearDropdown
//         scrollableMonthYearDropdown
//         placeholderText='Add Dates'/>
//     )

// }