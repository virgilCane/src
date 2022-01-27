import DateEvent from "./date-event";


export default class CalendarDate{
  date:Date;
  isInMonth: boolean;
  events: Array<DateEvent>;

  constructor(
    {date,
    isInMonth,
    events} : Partial<CalendarDate> = {}
    
    ){
    this.date = date;
    this.isInMonth = isInMonth;
    this.events = events;
  }
}