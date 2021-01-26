import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import BaseButton from 'components/ui/BaseButton';
import BaseInput from 'components/ui/BaseInput';
import { onNameChange } from 'redux/actions';
import { HomeWrapper } from './home.styled';

interface Props extends RouteComponentProps<any> {
  onNameChange: (userName: string) => void;
}

const Home: React.FC<Props> = (props: Props) => {
  const [name, setName] = useState<string>('');

  const handleContinue = (name: string) => {
    props.onNameChange(name);
    props.history.push('memo');
  };

  return (
    <HomeWrapper>
      <BaseInput
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        label="Insert your nickname"
      />
      <BaseButton
        disabled={!name}
        label="Continue"
        onClick={() => handleContinue(name)}
      />
    </HomeWrapper>
  );
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onNameChange: (userName: string) => dispatch(onNameChange(userName)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
