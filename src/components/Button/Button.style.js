import styled from 'styled-components';

export const Btn = styled.button`
  background: ${({ color }) => color.background};
  border-radius: 0.3rem;
  border: 0;
  color: white;
  margin-right: 0.5rem;
  padding: 0.6rem 1rem;
`;
