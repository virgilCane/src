import { FC } from "react";
import Image from "next/image";
import Routes from "../constants/routes";


interface props{
  redirect(route:string):void;
}

const SideBar: FC<props> = ({redirect}) => {

  const onNavClick = (route:string):void =>{
    redirect(route);
  }

  return (
    <div className="sidebar">
    <div className='menu-header'>
      <Image src='/img/logo-alt2.JPG' alt='Hooty Home' height={100} width={200} />
      <button className='profile-btn rounded-circle'></button>
    </div>
    <div className='menu-wrapper pt-5'>
      <ul className="menu-options">
        <li><button className='rounded-pill' onClick={() =>onNavClick(Routes.home)}>Calendar</button></li>
        <li><button className='rounded-pill' onClick={() =>onNavClick(Routes.contacts)}>Contacts</button></li>
        <li><button className='rounded-pill' onClick={() =>onNavClick(Routes.contracts)}>Contracts</button></li>
        <li><button className='rounded-pill' >Send Broadcast</button></li>
      </ul>
    </div>
  </div>
    );
}
 
export default SideBar;
