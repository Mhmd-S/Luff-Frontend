import { Outlet } from "react-router-dom";
import SettingsIcon from "../components/icons/SettingsIcon";
import HomeIcon from "../components/icons/HomeIcon";
import ChatIcon from "../components/icons/ChatIcon";
import DiscoverIcon from "../components/icons/DiscoverIcon";

const Root = () => {
  return (
    <div className='w-screen h-screen grid relative grid-cols-1 md:grid-cols-[10%_90%] md:grid-rows-1 items-center'>

        
        <div className="md:order-2 w-full h-full">
            <Outlet />
        </div>

        <ul className='w-full md:h-full sticky py-3 border-t-[1px] border-gray-400 bottom-0 bg-[#ffffffc3] flex flex-row justify-evenly items-center md:order-1 md:flex-col md:border-r-[1px] md:border-t-0'>
            
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