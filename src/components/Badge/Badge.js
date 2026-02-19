import React from 'react';
import PropTypes from 'prop-types';
import './Badge.css';

/**
 * Astra Design System - Badge 컴포넌트
 * 6가지 variant를 지원: Default, Brand, Secondary, Success, Warning, Danger
 */
const Badge = ({
  label = 'Label',
  variant = 'Default',
  isRemovable = true,
  onRemove,
  className = '',
}) => {
  const badgeClass = [
    'ads-badge',
    `ads-badge--${variant.toLowerCase()}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={badgeClass}>
      <span className="ads-badge__label">{label}</span>
      {isRemovable && (
        <button
          className="ads-badge__remove"
          onClick={onRemove}
          aria-label="Remove badge"
          type="button"
        >
          <svg
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 1L1 5M1 1L5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

Badge.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf([
    'Default',
    'Brand',
    'Secondary',
    'Success',
    'Warning',
    'Danger',
  ]),
  isRemovable: PropTypes.bool,
  onRemove: PropTypes.func,
  className: PropTypes.string,
};

export default Badge;
