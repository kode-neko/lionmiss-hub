import React from 'react';
import { useTranslation } from 'react-i18next';
import styled, { StyledComponent } from 'styled-components';
import { ThemeLMH } from '../../models';

const Cont = styled.div`
  padding: 10px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.back};
`;

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Cont>{t('section.main')}</Cont>
  );
};

export default Home;