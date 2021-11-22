import { FC } from "react";


const SideBar: FC = () => {
  return (
    <div className="sidebar">
    <div className='menu-header'>
      <h2>Logo</h2>
      <button className='profile-btn rounded-circle'></button>
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
