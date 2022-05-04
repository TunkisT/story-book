import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Hero.style';

const colors = {
  primary: {
    background: 'green',
  },
  danger: {
    background: 'red',
  },
};

function Hero({ title, subtitle, color }) {
  return (
    <S.HeroEl color={colors[color]}>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.HeroEl>
  );
}

Hero.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'success', 'danger']),
};

Hero.defaultProps = {
  color: 'primary',
  title: 'title',
  subtitle: 'subtitle',
};

export default Hero;
