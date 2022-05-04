import styled from 'styled-components';

export const HeroEl = styled.div`
  background: ${({ color }) => color.background};
  color: white;
  margin: 0;
`;
export const Title = styled.h1`
  padding: 1rem 1rem 0 1rem;
  margin-bottom: 0;
`;

export const Subtitle = styled.h4`
  padding: 0 1rem 1rem 1rem;
  margin-top: 0;
`;
