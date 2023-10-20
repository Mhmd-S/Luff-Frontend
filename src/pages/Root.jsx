import { Outlet } from "react-router-dom";
import SettingsIcon from "../components/icons/SettingsIcon";
import HomeIcon from "../components/icons/HomeIcon";
import ChatIcon from "../components/icons/ChatIcon";
import DiscoverIcon from "../components/icons/DiscoverIcon";

const Root = () => {
  return (
    <div className='w-screen h-screen grid grid-rows-[90%_10%] grid-cols-1 md:grid-cols-[10%_90%] md:grid-rows-1 items-center'>

        {/* <ul className='w-full px-4 h-max flex flex-row justify-between items-center md:hidden'>
            <li>
                Logo
            </li>
            <li>
                <SettingsIcon/>
            </li>
        </ul> */}
        
        <div className="md:order-2 w-full h-full">
            <Outlet />
        </div>

        <ul className='w-full h-max flex flex-row md:flex-col justify-evenly items-center md:order-1'>
            
            <li className="hidden md:inline">
                Logo
            </li>

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
                <SettingsIcon/>
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