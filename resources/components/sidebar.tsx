import { FC } from "react";


const SideBar: FC = () => {
  return (
    <div className="sidebar">
    <div>
      <h2>Logo</h2>
      <h2>Profile</h2>
    </div>
    <div>
      <ul>
        <li>Calendar</li>
        <li>Contacts</li>
        <li>Contracts</li>
        <li>Send Broadcast </li>
      </ul>
    </div>
  </div>
    );
}
 
export default SideBar;
