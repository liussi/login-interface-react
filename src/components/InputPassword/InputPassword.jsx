import Icon from 'components/Icon/Icon';
import React from 'react';
import Icons from '../../img/sprite.svg';
import { IconStyle, Input } from './InputPassword.styled';

function PasswordInput({ value, onChange, placeholder, name }) {
  return (
    <div>
      <label htmlFor={name}></label>
      <Input
        type="password"
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <IconStyle>
        
        <Icon iconPath={Icons + '#icon-eye'} width={18} height={14} />
      </IconStyle>
    </div>
  );
}

export default PasswordInput;
