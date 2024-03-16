import React from 'react';
import { StyleButton } from './Button.styled';

function CustomButton({ onClick, label }) {
  return <StyleButton onClick={onClick}>{label}</StyleButton>;
}

export default CustomButton;
