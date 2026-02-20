import React from 'react';
import PropTypes from 'prop-types';
import './PromptInput.css';

// 이미지 자산 (localhost 서버)
const imgSendButtonBg = "http://localhost:3845/assets/02d24f24279dfd7dbb40dbc82d233d14723e84ff.svg";
const imgIconSend = "http://localhost:3845/assets/7b1db22086ea6aeb39577779955e7d97080d010e.svg";
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

      {/* 전송 버튼 (우측 하단) */}
      <button
        className="ads-prompt-input__send-button"
        onClick={handleSendClick}
        aria-label="Send message"
      >
        <div className="ads-prompt-input__send-bg">
          <img src={imgSendButtonBg} alt="" />
        </div>
        <div className="ads-prompt-input__send-icon">
          <img src={imgIconSend} alt="Send" />
        </div>
      </button>

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
