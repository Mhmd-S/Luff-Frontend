import FormButton from '../common/FormButton'
import SettingsMenu from './SettingsMenu'
import useSettings from './hooks/useSettings'
import ChangeProfilePictures from './ChangeProfilePictures';
import ChangeBio from './ChangeBio';
import ChangeGender from './ChangeGender';
import ChangeOrientation from './ChangeOrientation';

const Settings = () => {

  const { settingsPage, 
          handleClick, 
          displaySettingsPage, 
          logout,
        } = useSettings();

  return (
      <div className='w-full h-full flex flex-col items-center overflow-y-scroll p-4'>

        <ul className={`w-full flex px-4 flex-col items-center h-full ${settingsPage && 'hidden'} [&>li]:my-6 [&>li]:rounded-md [&>li]:border-[1px] [&>li]:w-full [&>li]:md:w-2/3 `}>

          <li className='flex p-8 bg-[#fafafa] flex-col items-center'>
            <h1 className='w-full font-bold text-4xl'>
              Settings
            </h1>
            <p className='w-full'>
              Modify your profile settings.
            </p>
          </li>

          <li className='w-full h-full border-b-[1px]'>

            <div className='w-full p-4 border-b-[1px]'>

              <p className='text-2xl w-full font-bold text-grey-900'>
                Change Profile Picture
              </p>
              
              <p className='py-2'>
                Modify your profile pictures, or add new ones.
              </p>
            
            </div>
            
            <div className='w-full h-fit bg-[#fafafa] flex justify-end py-2 px-4'>
              <button onClick={()=>handleClick('ChangeProfilePictures')} className='w-fit h-fit text-sm py-2 px-3 bg-slate-900 text-white rounded-lg'>
                Modify Profile Pictures
              </button>
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
          
          <li className='w-full h-full border-b-[1px] border-[#fad5d5]'>

            <div className='w-full p-4 border-b-[1px]'>

              <p className='text-2xl w-full font-bold text-grey-900'>
                Log out of account
              </p>
              
              <p className='py-2'>
                Log out of account and be redirected to the login page.
              </p>
            
            </div>
            
            <div className='w-full h-fit bg-[#fff0f0] flex justify-end py-2 px-4'>
              <button onClick={logout} className='w-fit h-fit text-sm py-2 px-3 bg-red-600 text-white rounded-lg'>
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