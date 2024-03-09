import React from 'react';
import { Input } from './InputEmail.styled';

function EmailInput({ value, onChange, placeholder, name }) {
  return (
    <div>
      <label htmlFor={name}></label>
      <Input
        type="email"
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default EmailInput;
