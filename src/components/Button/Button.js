import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

/**
 * Astra Design System - Button 컴포넌트
 * Primary, Neutral, Subtle 세 가지 variant를 지원하며,
 * Default, Hover, Disabled 세 가지 상태를 가집니다.
 */
const Button = ({
  label = 'Button',
  variant = 'Primary',
  size = 'Medium',
  state = 'Default',
  hasIconStart = false,
  hasIconEnd = false,
  iconStart = null,
  iconEnd = null,
  onClick,
  className = '',
  ...props
}) => {
  // variant와 state를 조합한 클래스명 생성
  const buttonClass = [
    'ads-button',
    `ads-button--${variant.toLowerCase()}`,
    `ads-button--${size.toLowerCase()}`,
    `ads-button--${state.toLowerCase()}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const isDisabled = state === 'Disabled';

  return (
    <button
      className={buttonClass}
      onClick={!isDisabled ? onClick : undefined}
      disabled={isDisabled}
      {...props}
    >
      {hasIconStart && iconStart && (
        <span className="ads-button__icon ads-button__icon--start">
          {iconStart}
        </span>
      )}
      <span className="ads-button__label">{label}</span>
      {hasIconEnd && iconEnd && (
        <span className="ads-button__icon ads-button__icon--end">
          {iconEnd}
        </span>
      )}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(['Primary', 'Neutral', 'Subtle']),
  size: PropTypes.oneOf(['Small', 'Medium']),
  state: PropTypes.oneOf(['Default', 'Hover', 'Disabled']),
  hasIconStart: PropTypes.bool,
  hasIconEnd: PropTypes.bool,
  iconStart: PropTypes.node,
  iconEnd: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
