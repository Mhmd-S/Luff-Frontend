import InitialForm from '../common/InitialForm'
import FormField from '../common/FormField'
import useStep1 from './hooks/useStep1'
import FormButton from '../common/FormButton'
import FormFieldTextArea from '../common/FormFieldTextArea'
import FormGeneralError from '../common/FormGeneralError'
import RadioGroup from '../common/RadioGroup'

const Step1 = ({ nextStep }) => {

  const { 
    register, 
    handleSubmit, 
    onSubmit, 
    loading, 
    errors, 
    generalError 
  } = useStep1(nextStep);

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ];


  return (
    <div className='h-4/5 md:h-full'>
      <InitialForm onSubmit={handleSubmit(onSubmit)}>

        <h1 className='text-3xl font-bold text-grey-900'>
          Complete Your Profile
        </h1>

        <h3 className='text-sky-500 underline'>
          Tell us more about yourself!
        </h3>

        <FormGeneralError message={generalError} />

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
                    value: /^[a-zA-Z]{1,15} [a-zA-Z]{1,15}$/,
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
                    value: 25,
                    message: 'Bio must be at least 25 characters long',
                },
                maxLength: {
                    value: 500,
                    message: 'Bio must be less than 500 characters long',
                },
            }}/>
            
          <RadioGroup 
            label='Your gender' 
            name='gender'
            errors={errors}
            register={register}
            options={genderOptions} />
{/* 
          <RadioGroup 
            label='Personal Orientaion' 
            name='orientation'
            errors={errors}
            register={register}
            options={genderOptions} /> */}

        <FormButton text='Next Step' loading={loading} />

      </InitialForm>
    </div>
  )
}

export default Step1