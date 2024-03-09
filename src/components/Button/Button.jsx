import React from 'react';
import { StyleButton } from './Button.styled';

function Button({ onClick, label }) {
  return <StyleButton onClick={onClick}>{label}</StyleButton>;
}

export default Button;
