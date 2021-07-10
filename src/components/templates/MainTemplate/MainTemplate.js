import React from 'react';
import { Wrapper } from './MainTemplate.styles';
import Navigation from '../../organisms/Navigation/Navigation';

const MainTemplate = ({ children }) => (
  <Wrapper>
    <Navigation />
    {children}
  </Wrapper>
);

export default MainTemplate;
