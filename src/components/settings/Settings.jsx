import FormButton from '../common/FormButton'
import SettingsMenu from './SettingsMenu'
import useSettings from './hooks/useSettings'
import ChangeProfilePictures from './ChangeProfilePictures';
import FormButton2 from '../common/FormButton2';
import ChangeBio from './ChangeBio';
import ChangeGender from './ChangeGender';
import ChangeOrientation from './ChangeOrientation';

const Settings = () => {

  const { settingsPage, 
          handleClick, 
          displaySettingsPage, 
          handleLogout,
        } = useSettings();

  return (
      <div className='w-full h-full flex flex-col items-center py-4 '>

        <ul className={` overflow-y-scroll w-full h-full grid grid-cols-1 grid-rows-settingsSmallScreen place-items-center gap-14 px-4 ${settingsPage && 'hidden'} [&>li]:my-6 [&>li]:rounded-md [&>li]:border-[1px] [&>li]:h-full [&>li]:w-full [&>li]:flex [&>li]:flex-col [&>li]:justify-between [&>li]:md:w-2/3 md:grid-rows-settingsLargeScreen`}>

          <li className='flex p-8 bg-[#fafafa] flex-col items-center md:hidden'>
            <h1 className='w-full font-bold text-4xl'>
              Settings
            </h1>
            <p className='w-full'>
              Modify your profile settings.
            </p>
          </li>

          <li className='w-full border-b-[1px]'>

            <div className='w-full h-full p-4 flex flex-col justify-evenly'>

              <p className='text-2xl w-full font-bold text-grey-900'>
                Change Profile Picture
              </p>
              
              <p className='py-2'>
                Modify your profile pictures, or add new ones.
              </p>
            
            </div>
            
            <div className='w-full h-fit bg-[#fafafa] flex justify-end py-2 px-4  border-t-[1px]'>
              <FormButton2 onClick={()=>handleClick('ChangeProfilePictures')} text='Modify Profile Pictures'/>
            </div>

          </li>
          
          <li>
            <ChangeBio />
          </li>
          
          <li>
            <ChangeGender />
          </li>

          <li>
            <ChangeOrientation />
          </li>
          
          <li className='border-[#fad5d5] '>

            <div className='w-full h-full p-4 flex flex-col justify-evenly'>

              <p className='text-2xl w-full font-bold text-grey-900'>
                Log out of account
              </p>
              
              <p className='py-2'>
                Log out of account and be redirected to the login page.
              </p>
            
            </div>
            
            <div className='w-full h-fit bg-[#fff0f0] flex justify-end py-2 px-4  border-t-[1px] border-[#fad5d5]'>
              <button onClick={handleLogout} className='w-fit h-fit text-sm py-2 px-3 bg-red-600 text-white rounded-lg'>
                Log Out
              </button>
            </div>

          </li>
          
        </ul>
        
        {displaySettingsPage()}
      </div>
  
  )
}

export default Settings