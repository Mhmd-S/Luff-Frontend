import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const useStep1 = ({ nextStep }) => {

    const [ generalError, setGeneralError ] = useState('');

    const { 
        register, 
        handleSubmit, 
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
        generalError, 
        errors 
    }

}

export default useStep1