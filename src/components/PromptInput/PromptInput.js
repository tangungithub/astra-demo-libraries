import React from 'react';
import PropTypes from 'prop-types';
import FloatingAction from '../FloatingAction';
import './PromptInput.css';

// 이미지 자산 (localhost 서버)
const imgIconPaperclip = "http://localhost:3845/assets/f0be2574e502f2c1f3567fae8c6564c22b2e4e69.svg";

/**
 * Astra Design System - PromptInput 컴포넌트
 * 비디오 설명 입력을 위한 텍스트 입력 필드
 */
const PromptInput = ({
  placeholder = 'Describe your video',
  value = '',
  onChange,
  onSend,
  onAttach,
  className = '',
}) => {
  const handleSendClick = () => {
    if (onSend) {
      onSend(value);
    }
  };

  const handleAttachClick = () => {
    if (onAttach) {
      onAttach();
    }
  };

  return (
    <div className={`ads-prompt-input ${className}`}>
      {/* 입력 영역 */}
      <textarea
        className="ads-prompt-input__textarea"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />

      {/* 전송 버튼 (우측 하단) - FloatingAction 컴포넌트 활용 */}
      <FloatingAction onClick={handleSendClick} size={24} className="ads-prompt-input__send-button" />

      {/* 첨부 버튼 (좌측 하단) */}
      <button
        className="ads-prompt-input__attach-button"
        onClick={handleAttachClick}
        aria-label="Attach file"
      >
        <img src={imgIconPaperclip} alt="Attach" />
      </button>
    </div>
  );
};

PromptInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSend: PropTypes.func,
  onAttach: PropTypes.func,
  className: PropTypes.string,
};

export default PromptInput;
