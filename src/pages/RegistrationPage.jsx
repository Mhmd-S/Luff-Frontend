import React from 'react'
import Registration from '../components/registration/Registration'
import { RegistrationProvider } from '../components/registration/context/useRegistrationContext'

const RegistrationPage = () => {
  return (
    <div>
      <RegistrationProvider>
        <Registration />
      </RegistrationProvider>
    </div>
  )
}

export default RegistrationPage;