import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

// 이미지 자산 (localhost 서버)
const imgDefaultAvatar = "http://localhost:3845/assets/11dbcb982f9ba115c7d5cc790cc48a457815fb67.png";

/**
 * Astra Design System - Avatar 컴포넌트
 * 사용자 프로필 이미지 또는 이니셜을 표시하는 아바타
 * 
 * 주의: 이니셜은 단일 문자(A, B, C)만 사용해야 합니다.
 * 여러 문자(AA, BB, CC)는 아바타 너비를 초과하여 오버플로우가 발생합니다.
 */
const Avatar = ({
  type = 'Image',
  size = 'Large',
  shape = 'Circle',
  initials = 'F',
  imageSrc = null,
  className = '',
}) => {
  const isInitial = type === 'Initial';
  const isImage = type === 'Image';
  
  // 이미지 소스 결정
  const avatarImage = imageSrc || imgDefaultAvatar;
  
  // 단일 문자만 사용 (첫 글자만 추출)
  const displayInitials = initials.charAt(0).toUpperCase();

  return (
    <div 
      className={`ads-avatar ads-avatar--${type.toLowerCase()} ads-avatar--${size.toLowerCase()} ads-avatar--${shape.toLowerCase()} ${className}`}
    >
      {isInitial && (
        <div className="ads-avatar__initials">
          <p className="ads-avatar__text">{displayInitials}</p>
        </div>
      )}
      
      {isImage && (
        <div className="ads-avatar__image-wrapper">
          <img 
            src={avatarImage} 
            alt={`Avatar ${displayInitials}`}
            className="ads-avatar__image"
          />
        </div>
      )}
    </div>
  );
};

Avatar.propTypes = {
  type: PropTypes.oneOf(['Initial', 'Image']),
  size: PropTypes.oneOf(['Small', 'Medium', 'Large']),
  shape: PropTypes.oneOf(['Circle', 'Square']),
  initials: PropTypes.string,
  imageSrc: PropTypes.string,
  className: PropTypes.string,
};

export default Avatar;
