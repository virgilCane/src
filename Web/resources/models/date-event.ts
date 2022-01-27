
export default class DateEvent{
  name:string | undefined;
  id:number | undefined;
  description: string | undefined;
  dueDate:Date | undefined;
  dateCreated:Date | undefined;
  owner: number | undefined;
  participants: Array<number> | undefined;

  constructor(
    {
      name,
      id,
      description,
      dueDate,
      dateCreated,
      owner,
      participants
    }: Partial<DateEvent> = {}){
      this.name = name;
      this.id = id;
      this.description = description;
      this.dueDate = dueDate;
      this.dateCreated = dateCreated;
      this.owner = owner;
      this.participants = participants;
    }

}