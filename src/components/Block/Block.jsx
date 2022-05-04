import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Block.style';

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

function Block({ children, color }) {
  return <S.BlockEl color={colors[color]}>{children}</S.BlockEl>;
}

Block.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'success', 'danger']),
};

Block.defaultProps = {
  color: 'primary',
};

export default Block;
