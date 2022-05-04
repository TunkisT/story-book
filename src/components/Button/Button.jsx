import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

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

function Button({ children, type, color }) {
  return (
    <S.Btn color={colors[color]} type={type}>
      {children}
    </S.Btn>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  color: PropTypes.oneOf(['primary', 'success', 'danger']).isRequired,
};

export default Button;
