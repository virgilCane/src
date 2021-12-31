import { NextPage } from "next";
import  * as moment from "moment";
import CalendarDate from '../resources/models/calendar-date';


const Calendar: NextPage = () => {
    const getStartOfMonth = (month: number, year: number) =>{
        return moment({ year: year, month: month}).startOf("month").add(6,'hours');
      }
      var getEndOfMonth = (month: number, year: number) =>{
        return moment({ year: year, month: month}).endOf("month").add(6,'hours');
      }
      var getCalendarDates = (startDate, endDate) => {
        let calendarDates = [];
        let gapsNeededStart = moment(startDate).weekday();
        let tempStartDate = startDate.subtract(gapsNeededStart, 'days');
        for(let i = 0; i < gapsNeededStart; i++){
          calendarDates.push(new CalendarDate(tempStartDate.toDate(), false));
          tempStartDate.add(1, 'days');
        }
        while (startDate.toDate() <= endDate.toDate()) { //add day so that last day of month included in array
          var date = new CalendarDate(startDate.toDate(), true);
          calendarDates.push(date);
          startDate = startDate.add(1, 'days');
        }
      
        let gapsNeededEnd = 7 - moment(endDate).weekday();
        let tempEndDate = endDate;
        for(let i = 0; i < gapsNeededEnd; i++){
          calendarDates.push(new CalendarDate(tempEndDate.toDate(), false));
          tempEndDate.add(1,'days');
        }
        return calendarDates;
      }
    const currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth(); // months in moment are 0 based.

    const startOfMonth = getStartOfMonth(month, year);
    const endOfMonth = getEndOfMonth(month, year);
    const calendarDates = getCalendarDates(startOfMonth, endOfMonth);
   
    
    return(
        <main className='w-100'>
        <div className='calendar'>
          <ul className='days-list p-0 m-0'>
            <li className='day-item day-label text-uppercase'>Sun</li>
            <li className='day-item day-label text-uppercase'>Mon</li>
            <li className='day-item day-label text-uppercase'>Tue</li>
            <li className='day-item day-label text-uppercase'>Wed</li>
            <li className='day-item day-label text-uppercase'>Thu</li>
            <li className='day-item day-label text-uppercase'>Fri</li>
            <li className='day-item day-label text-uppercase'>Sat</li>
          </ul>
          <ul className='date-list p-0'>
            {calendarDates.map((d, i) => {
              return(
                <li key={i} className={`date-item date ${d.isInMonth ? "active" : ""}`}>
                  <div className={`d-flex justify-content-end`}>
                    {d.date &&  <span>{d.date.getUTCDate()}</span>}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </main>
    );

  
}

export default Calendar;