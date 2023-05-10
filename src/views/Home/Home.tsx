import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { ThemeLMH } from '../../models';

const Cont = styled.div`
  padding: 10px;
  color: ${props => props.theme === ThemeLMH.DARK ? props.theme.light : props.theme.dark};
  background-color: ${props => props.theme === ThemeLMH.DARK ? props.theme.wrong : props.theme.good};
`;

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Cont>{t('section.main')}</Cont>
  );
};

export default Home;