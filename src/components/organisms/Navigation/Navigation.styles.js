import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  background-color: rgba(0, 55, 55, 0.3);
  height: ${({ theme: { navbarHeight } }) => navbarHeight};
`;
