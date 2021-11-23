import { FC } from "react";
import Image from "next/image";

const SideBar: FC = () => {
  return (
    <div className="sidebar">
    <div className='menu-header'>
      <Image src='/img/logo.JPG' alt='Hooty Home' height={100} width={200} />
      <button className='profile-btn rounded-circle'></button>
    </div>
    <div className='menu-wrapper pt-5'>
      <ul className="menu-options">
        <li><button className='rounded-pill'>Calendar</button></li>
        <li><button className='rounded-pill'>Contacts</button></li>
        <li><button className='rounded-pill'>Contracts</button></li>
        <li><button className='rounded-pill'>Send Broadcast</button></li>
      </ul>
    </div>
  </div>
    );
}
 
export default SideBar;
