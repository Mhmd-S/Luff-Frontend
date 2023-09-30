import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const useStep2 = () => {

    const [ generalError, setGeneralError ] = useState('');

    const { 
        register, 
        handleSubmit, 
        resetField,
        formState:{errors} 
    } = useForm()

    // Submit API request from here
    const submitName = (name) => {
        console.log(name)
    }

    const onSubmit = (data) => {
        submitName(data.name)
    }

    return { 
        register, 
        handleSubmit, 
        onSubmit,
        resetField,
        generalError, 
        errors 
    }

}

export default useStep2