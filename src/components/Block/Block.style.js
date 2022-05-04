import styled from 'styled-components';

export const BlockEl = styled.div`
  background: ${({ color }) => color.background};
  border-radius: 0.3rem;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 1rem;
`;
