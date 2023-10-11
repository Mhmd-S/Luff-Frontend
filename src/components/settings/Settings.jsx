import FormButton from '../common/FormButton'
import SettingsMenu from './SettingsMenu'
import useSettings from './hooks/useSettings'

const Settings = () => {

  const { settingsPage, handleClick, displaySettingsPage } = useSettings();

  return (
    <div className="w-full h-full flex flex-col items-center">

      <div className={`w-full h-full ${settingsPage && 'hidden'}`}>

        <div className="w-full flex flex-col px-4 py-6 shadow-md">

          <div className="w-full grid grid-row-1 grid-cols-[30%_70%]">
            <button className="w-fit">Go Back</button>
            <h1 className="text-4xl">Settings</h1>
          </div>

          <h3 className="text-xl py-6 text-center text-sky-500 underline">
            View an edit information related to your account.
          </h3>

        </div>

        <SettingsMenu settingsPage={settingsPage} handleClick={handleClick} />

      </div>

      <div className='w-full p-4 h-2/4'>
        {displaySettingsPage()}
      </div>

    </div>
  )
}

export default Settings