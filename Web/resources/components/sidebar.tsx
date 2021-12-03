import { FC } from "react";
import Image from "next/image";
import Routes from "../constants/routes";
import {useDispatch} from 'react-redux';
import Link from "next/link"




const SideBar: FC = () => {
  const dispatch = useDispatch();


  return (
    
 <div className="sidebar">
 <div className='menu-header'>
   <Link href="/"><Image src='/img/logo.JPG' alt='Hooty Home' height={100} width={200} /></Link>
   <button className='profile-btn rounded-circle'></button>
 </div>
   <div className='menu-wrapper pt-5'>
     <ul className="menu-options">
       <li><Link href={Routes.Calendar}><button className='rounded-pill'>Calendar</button></Link></li>
       <li><Link href={Routes.Chores}><button className='rounded-pill'>Chores</button></Link></li>
       <li><Link href={Routes.Housemates}><button className='rounded-pill'>Housemates</button></Link></li>
     </ul>
   </div>
 </div>
  
    );
}
 
export default SideBar;
