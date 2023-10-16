import FormButton from '../common/FormButton'
import SettingsMenu from './SettingsMenu'
import useSettings from './hooks/useSettings'

const Settings = () => {

  const { settingsPage, 
          handleClick, 
          displaySettingsPage, 
        } = useSettings();

  return (
    <>

      <div className={`w-full h-full ${settingsPage && 'hidden md:block md:w-1/3'}`}>

        <div className="w-full p-5 flex flex-col border-b-2 bg-[#fafafa]">

          <h1 className="text-4xl text-center font-semibold">
            Settings
          </h1>

          <h3 className="text-xl py-6 text-center text-sky-500 underline">
            View an edit information related to your account.
          </h3>

        </div>

        <SettingsMenu settingsPage={settingsPage} handleClick={handleClick} />

      </div>

      <div className='w-full h-full md:w-2/3 p-4'>
        {displaySettingsPage()}
      </div>

    </>
  )
}

export default Settings