import { FC } from "react";
import  * as moment from "moment";
import CalendarDate from '../models/calendar-date';
//const moment = require("moment");

interface props {
  month: string,
  year:string
}
var getStartOfMonth = (month: string, year: string) =>{
  return moment({ year: year, month: month}).startOf("month");
}
var getEndOfMonth = (month: string, year: string) =>{
  return moment({ year: year, month: month}).endOf("month");
}
var getCalendarDates = (startDate, endDate) => {
  let calendarDates = [];
  let gapsNeeded = moment(startDate).weekday();
  for(let i = 0; i < gapsNeeded; i++){
    calendarDates.push(new CalendarDate());
  }
  
  while (startDate.toDate() <= endDate.toDate()) {
    console.log('begin',startDate.toDate())
    var date = new CalendarDate(startDate.toDate());
    calendarDates.push(date);
    startDate = startDate.add(1, 'days');
  }
  return calendarDates;
}
 
const Calendar: FC<props> = ({month, year}) => {
  const startOfMonth = getStartOfMonth(month, year);
  const endOfMonth = getEndOfMonth(month, year);
  const calendarDates = getCalendarDates(startOfMonth, endOfMonth);
  console.log(calendarDates);
  return ( 
    <div className='w-100'>
      <div className='calendar'>
        <ul className='days-list p-0'>
          <li className='day-item font-weight-bold text-uppercase'>Mon</li>
          <li className='day-item font-weight-bold text-uppercase'>Tue</li>
          <li className='day-item font-weight-bold text-uppercase'>Wed</li>
          <li className='day-item font-weight-bold text-uppercase'>Thu</li>
          <li className='day-item font-weight-bold text-uppercase'>Fri</li>
          <li className='day-item font-weight-bold text-uppercase'>Sat</li>
          <li className='day-item font-weight-bold text-uppercase'>Sun</li>
        </ul>
      </div>
    </div>
     );
}



 
export default Calendar;