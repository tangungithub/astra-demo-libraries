import React from 'react';
import PropTypes from 'prop-types';
import './InputField.css';

/**
 * Astra Design System - Input Field 컴포넌트
 * Label, Input, Description을 포함하는 텍스트 입력 필드
 */
const InputField = ({
  label = 'Label',
  value = '',
  placeholder = 'Value',
  description = 'Description',
  showLabel = true,
  hasDescription = true,
  state = 'Default',
  onChange,
  className = '',
  ...props
}) => {
  const isEmpty = state === 'Empty' || !value;

  return (
    <div className={`ads-input-field ${className}`}>
      {showLabel && (
        <label className="ads-input-field__label">
          {label}
        </label>
      )}
      
      <input
        type="text"
        className={`ads-input-field__input ${isEmpty ? 'ads-input-field__input--empty' : ''}`}
        value={value}
        placeholder={isEmpty ? placeholder : ''}
        onChange={onChange}
        {...props}
      />
      
      {hasDescription && (
        <p className="ads-input-field__description">
          {description}
        </p>
      )}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  description: PropTypes.string,
  showLabel: PropTypes.bool,
  hasDescription: PropTypes.bool,
  state: PropTypes.oneOf(['Default', 'Empty']),
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default InputField;
