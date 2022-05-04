import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Hero.style';

const colors = {
  primary: {
    background: 'green',
  },
  success: {
    background: 'blue',
  },
  danger: {
    background: 'red',
  },
};

function Hero({ children, type, color }) {
  return (
    <S.HeroEl color={colors[color]}>
      {type === 'title' ? (
        <S.Title>{children}</S.Title>
      ) : (
        <S.Subtitle>{children}</S.Subtitle>
      )}
    </S.HeroEl>
  );
}

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['title', 'subtitle']),
  color: PropTypes.oneOf(['primary', 'success', 'danger']),
};

export default Hero;
