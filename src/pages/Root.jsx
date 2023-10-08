import { Outlet } from "react-router-dom";
import SettingsIcon from "../components/icons/SettingsIcon";
import HomeIcon from "../components/icons/HomeIcon";
import ChatIcon from "../components/icons/ChatIcon";
import DiscoverIcon from "../components/icons/DiscoverIcon";

const Root = () => {
  return (
    <div className='w-screen h-screen grid grid-rows-[10%_80%_10%] grid-cols-1 items-center'>

        <ul className='w-full px-4 h-max flex flex-row justify-between items-center'>
            <li>
                Logo
            </li>
            <li>
                <SettingsIcon/>
            </li>
        </ul>
        
        <Outlet />
        
        <ul className='w-full h-max flex flex-row justify-evenly items-center'>
            <li>
                <HomeIcon/>
            </li>
            <li>
                <DiscoverIcon/>
            </li>
            <li>
                <ChatIcon/>
            </li>
            <li>
                <img 
                    src='https://via.placeholder.com/50' 
                    alt='logo'
                    className='w-10 h-10 rounded-full'
                    />
            </li>
        </ul>

    </div>
  )
}

export default Root