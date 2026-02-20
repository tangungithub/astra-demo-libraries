import React from 'react';
import PropTypes from 'prop-types';
import './FloatingAction.css';

// 이미지 자산 (localhost 서버)
const imgCircleBackground = "http://localhost:3845/assets/02d24f24279dfd7dbb40dbc82d233d14723e84ff.svg";

/**
 * Astra Design System - FloatingAction 컴포넌트
 * 전송 버튼을 위한 플로팅 액션 버튼
 */
const FloatingAction = ({
  onClick,
  size = 24,
  className = '',
  disabled = false,
}) => {
  return (
    <button
      className={`ads-floating-action ${disabled ? 'ads-floating-action--disabled' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label="Send"
    >
      {/* 배경 원형 */}
      <div className="ads-floating-action__background">
        <img src={imgCircleBackground} alt="" />
      </div>

      {/* 전송 아이콘 */}
      <div className="ads-floating-action__icon">
        <IconSend size={size} />
      </div>
    </button>
  );
};

// IconSend 컴포넌트 (SVG 인라인)
const IconSend = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 2L11 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 2L15 22L11 13L2 9L22 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

FloatingAction.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.number,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

IconSend.propTypes = {
  size: PropTypes.number,
};

export default FloatingAction;
