import React from 'react';
import PropTypes from 'prop-types';
import Bubbles from '../Bubbles';
import Avatar from '../Avatar';
import PromptInput from '../PromptInput';
import './MainPane.css';

/**
 * Astra Design System - MainPane 컴포넌트
 * 채팅 인터페이스의 메인 패널 (채팅 영역 + 입력 영역)
 */
const MainPane = ({
  children = null,
  className = '',
}) => {
  return (
    <div className={`ads-main-pane ${className}`}>
      {/* 채팅 영역 */}
      <div className="ads-main-pane__chat">
        {children || (
          <>
            <Bubbles type="ai" message="How can i help you?" />
            <Bubbles type="user" message="Can you do x?" />
          </>
        )}
      </div>

      {/* 프롬프트 입력 영역 */}
      <PromptInput placeholder="Describe your video" />
    </div>
  );
};

MainPane.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default MainPane;
