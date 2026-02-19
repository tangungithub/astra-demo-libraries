import React from 'react';
import PropTypes from 'prop-types';
import './SelectField.css';

/**
 * Astra Design System - Select Field 컴포넌트
 * Label, Select, Description을 포함하는 드롭다운 선택 필드
 */
const SelectField = ({
  label = 'Label',
  value = '',
  placeholder = 'Value',
  description = 'Description',
  options = [],
  showLabel = true,
  hasDescription = true,
  state = 'Default',
  onChange,
  className = '',
  ...props
}) => {
  const isEmpty = state === 'Empty' || !value;

  return (
    <div className={`ads-select-field ${className}`}>
      {showLabel && (
        <label className="ads-select-field__label">
          {label}
        </label>
      )}
      
      <div className="ads-select-field__wrapper">
        <select
          className={`ads-select-field__select ${isEmpty ? 'ads-select-field__select--empty' : ''}`}
          value={value}
          onChange={onChange}
          {...props}
        >
          {isEmpty && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option, index) => (
            <option key={index} value={option.value || option}>
              {option.label || option}
            </option>
          ))}
        </select>
        
        {/* 드롭다운 아이콘 */}
        <div className="ads-select-field__icon">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      
      {hasDescription && (
        <p className="ads-select-field__description">
          {description}
        </p>
      )}
    </div>
  );
};

SelectField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  description: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
      }),
    ])
  ),
  showLabel: PropTypes.bool,
  hasDescription: PropTypes.bool,
  state: PropTypes.oneOf(['Default', 'Empty']),
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default SelectField;
