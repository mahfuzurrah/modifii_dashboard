import React from 'react';

const InputField = ({value, placeholder, onChange, type, error, disabled }) => {
  return (
    <div className='mt-3'>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required
        disabled={disabled}
        placeholder={placeholder}
        className='form-control'
      />
      {error && <p className="input_error">{error}</p>}
    </div>
  );
};

export default InputField;
