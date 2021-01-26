import React from 'react';
import { Button } from './base-button.styled';

interface Props {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const BaseButton: React.FC<Props> = ({ label, onClick, disabled }) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {label}
    </Button>
  );
};

export default BaseButton;
