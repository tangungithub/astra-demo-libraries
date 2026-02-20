import React from 'react';
import PropTypes from 'prop-types';
import './Bubbles.css';

// 이미지 자산 (localhost 서버)
const imgAstraLogo = "http://localhost:3845/assets/2096148008591a99ae30c2900842d3f98a7b76e2.svg";
const imgUserAvatar = "http://localhost:3845/assets/11dbcb982f9ba115c7d5cc790cc48a457815fb67.png";

/**
 * Astra Design System - Bubbles 컴포넌트
 * AI와 User 채팅 버블을 표시하는 메시지 컴포넌트
 */
const Bubbles = ({
  type = 'ai',
  message = '',
  avatarSrc = null,
  className = '',
}) => {
  const isAi = type === 'ai';
  const isUser = type === 'user';

  // 기본 메시지 설정
  const defaultMessage = isUser ? 'Can you do x?' : 'How can I help?';
  const displayMessage = message || defaultMessage;

  // 기본 아바타 설정
  const avatarImage = avatarSrc || (isUser ? imgUserAvatar : imgAstraLogo);

  return (
    <div className={`ads-bubbles ads-bubbles--${type} ${className}`}>
      {/* AI 버블: 왼쪽 아바타 */}
      {isAi && (
        <div className="ads-bubbles__avatar-container">
          <div className="ads-bubbles__avatar ads-bubbles__avatar--ai">
            <img src={avatarImage} alt="Astra AI" />
          </div>
        </div>
      )}

      {/* 메시지 영역 */}
      <div className="ads-bubbles__comment">
        <div className="ads-bubbles__slot">
          <p className="ads-bubbles__text">{displayMessage}</p>
        </div>
      </div>

      {/* User 버블: 오른쪽 아바타 */}
      {isUser && (
        <div className="ads-bubbles__avatar-container">
          <div className="ads-bubbles__avatar ads-bubbles__avatar--user">
            <img src={avatarImage} alt="User" />
          </div>
        </div>
      )}
    </div>
  );
};

Bubbles.propTypes = {
  type: PropTypes.oneOf(['ai', 'user']),
  message: PropTypes.string,
  avatarSrc: PropTypes.string,
  className: PropTypes.string,
};

export default Bubbles;
