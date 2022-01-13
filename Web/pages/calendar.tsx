import { NextPage } from "next";
import  * as moment from "moment";
import CalendarDate from '../resources/models/calendar-date';


const Calendar: NextPage = () => {
    const getStartOfMonth = (month: number, year: number) =>{
        return moment({ year: year, month: month}).startOf("month").add(6,'hours');
      }
    const getEndOfMonth = (month: number, year: number) =>{
      return moment({ year: year, month: month}).endOf("month").add(6,'hours');
    }
    const getCalendarDates = (startDate, endDate) => {
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
    const showModal = (id:string) =>{
     
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
                <li key={i} className='date-item date' data-toggle="modal" data-target={`#date-modal-${i}`}>
                  <div className={`d-flex justify-content-end ${d.isInMonth ? "active" : ""}`}>
                    {d.date &&  <span>{d.date.getUTCDate()}</span>}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        {calendarDates.map((d, i) => {
          return(
            <div key={i}  className="modal fade" id={`date-modal-${i}`} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  ...
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
          )
        })}
      </main>
    );

  
}

export default Calendar;