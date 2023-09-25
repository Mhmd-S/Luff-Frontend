import React from 'react';
import FormErrorMessage from '../common/FormErrorMessage';

const FormField = ({
  label,
  name,
  type,
  register,
  errors,
  validationRules,
  defaultValue,
}) => {
  return (
    <label htmlFor={name}>
      {label}
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        {...register(name, validationRules)}
      />
      <FormErrorMessage name={name} errors={errors} />
    </label>
  );
};

export default FormField;
