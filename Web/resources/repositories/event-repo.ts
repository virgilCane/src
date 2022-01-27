import internal from 'stream';
import DateEvent from '../models/date-event';
import EventSearchFilters from '../models/event-search-filters';
import { BaseRepo } from './base-repo';

export class EventRepo extends BaseRepo{

  constructor(){
    super('events');
  }

  getAllEvents = async (eventSearchFilters: EventSearchFilters) =>{
    let values = await this.get(eventSearchFilters);
    let events = values?.map(e => new DateEvent(e));
    console.log(events);
                           
  }
}