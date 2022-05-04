import styled from 'styled-components';

export const HeroEl = styled.div`
  background: ${({ color }) => color.background};
  color: white;
`;
export const Title = styled.h1`
  padding: 1rem 1rem 0 1rem;
`;

export const Subtitle = styled.h4`
  padding: 0 1rem 1rem 1rem;
`;
