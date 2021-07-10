import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: ${({ theme: { navbarHeight } }) => navbarHeight} 1fr;
  &:nth-child(2) {
    grid-row: 2/3;
  }
`;
