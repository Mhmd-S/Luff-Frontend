import React from 'react'
import InitialForm from '../common/InitialForm'
import FormField from '../common/FormField'
import useStep1 from './hooks/useStep1'
import FormButton from '../common/FormButton'
import FormFieldTextArea from '../common/FormFieldTextArea'

const Step1 = () => {

    const { register, handleSubmit, onSubmit, loading, errors } = useStep1()

    // I was thinking to make the onboarding two steps, but I think it's better to make it one step
    // My original plan was to make it two steps, one for personal info and one for the profile picture
    // IDK what do you think future self?
    // I was think about mobile, but maybe it still works on mobile? I don't know, I'll test it later

  return (
    <InitialForm onSubmit={handleSubmit(onSubmit)}>
        <FormField
            label='Name'
            name='name'
            type='text'
            placeholder='ex. John Doe'
            register={register}
            errors={errors}
            validationRules={{
              required: 'Name is required',
                pattern: {
                    value: /^[a-zA-Z]{15} [a-zA-Z]{15}$/,
                    message: 'Name must only contain letters, a space, and must be less than 30 characters long',
                },
            }}
        />

        <FormField
            label='Date of Birth (Can not be changed later)'
            name='dob'
            type='date'
            register={register}
            errors={errors}
            validationRules={{
              required: 'Date is required',
              min: {
                value: '1920-01-01',
                message: 'Date of Birth must be after 1970-01-01',
              },
              max: {
                value: '2023-01-01',
                message: 'Date of Birth must be before 2023-01-01',
              },
            }}
        />

        <FormFieldTextArea
            label='Bio'
            name='bio'
            placeholder='Tell us about yourself'
            register={register}
            errors={errors}
            validationRules={{
              required: 'Bio is required',
                minLength: {
                    value: 10,
                    message: 'Bio must be at least 10 characters long',
                },
                maxLength: {
                    value: 200,
                    message: 'Bio must be less than 200 characters long',
                },
            }}/>

        <FormButton text='Next' loading={loading} />
    </InitialForm>
  )
}

export default Step1