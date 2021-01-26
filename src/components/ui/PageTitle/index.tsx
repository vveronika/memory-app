import React from 'react';
import { Title } from './page-title.styled';

interface Props {
  title: string;
}

const PageTitle: React.FC<Props> = ({ title }) => {
  return <Title>{title}</Title>;
};

export default PageTitle;
