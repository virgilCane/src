

export default class CalendarDate{
  date:Date;
  isInMonth: boolean

  constructor(
    date: Date,
    isInMonth: boolean
    
    ){
    this.date = date;
    this.isInMonth = isInMonth
  }
}