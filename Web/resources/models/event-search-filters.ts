

export default class EventSearchFilters{
  id: number | undefined;
  name: string | undefined;
  description: string | undefined;
  owner:number | undefined;
  dueDate: Date | undefined;
  constructor({
    id,
    name,
    description,
    owner,
    dueDate
  }: Partial<EventSearchFilters> = {}){
    this.id = id;
    this.name = name;
    this.description = description;
    this.owner = owner;
    this.dueDate = dueDate;
  }
}