import React from 'react';
import { InputWrapper, Input } from './base-input.styled';

interface Props {
  label: string;
  value: string;
  onChange: (value: React.FormEvent<HTMLInputElement>) => void;
}

const BaseInput: React.FC<Props> = (props) => {
  return (
    <InputWrapper>
      <Input
        maxLength={10}
        type="text"
        placeholder={props.label}
        value={props.value}
        onChange={props.onChange}
      />
    </InputWrapper>
  );
};

export default BaseInput;
