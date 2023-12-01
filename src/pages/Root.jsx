import { Link, Outlet } from "react-router-dom";
import SettingsIcon from "../components/icons/SettingsIcon";
import HomeIcon from "../components/icons/HomeIcon";
import ChatIcon from "../components/chat/ChatIcon";
import { useNotification } from "../contexts/useNotificationContext";
import { useAuth } from "../contexts/useAuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Root = () => {

    const navigate = useNavigate();

    const { notificationMessage } = useNotification();
    const { user } = useAuth();

    useEffect(()=>{
        if (!user) {
            navigate('/login');
            return;
        }

        if (user.onboardStep !== 2 ){
            navigate('/onboarding')
            return;
        }

    }, [user])

  return (
        <div className='w-screen h-screen grid relative grid-cols-1 grid-rows-[92.5%_7.5%] md:grid-cols-[10%_90%] md:grid-rows-1 items-center place-items-center'>
            
            <div className="md:order-2 w-full h-full md:bg-[#f0f2f4]">
                <Outlet />
            </div>  

            <ul className='w-full h-full sticky border-t-[1px] bottom-0 flex flex-row justify-evenly items-center  md:flex-col '>

                <li className="hidden md:flex md:items-center md:justify-center">
                    <img src='./logo1.png' alt='logo' className="w-1/2" />
                </li>

                <li>
                    <Link to='/home'>
                        <HomeIcon/>
                    </Link>
                </li>

                {/* <li>
                    <DiscoverIcon/>
                </li> */}

                <li>
                    <Link to='/chat'>
                        <ChatIcon/>
                    </Link>
                </li>

                <li>
                    <Link to='/settings'>
                        <SettingsIcon/>
                    </Link>
                </li>

                <li>
                    <Link to='/profile'>
                        <img 
                            src={user.profilePictures[0]} 
                            alt='logo'
                            className='w-10 h-10 rounded-full border-[1px] border-my-orange'
                            />
                    </Link>
                </li>

            </ul>

            {/* Notification Message */}
            {notificationMessage && 
                <div className="absolute min-w-[40%] z-30 top-[7.5%] right-[5%] bg-green-500 p-4 rounded-lg text-white md:min-w-[25%] text-center">
                    {notificationMessage}
                </div>
            }

        </div>
  )
}

export default Root