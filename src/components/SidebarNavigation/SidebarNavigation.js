import React from 'react';
import PropTypes from 'prop-types';
import './SidebarNavigation.css';

/**
 * Astra Design System - Sidebar Navigation 컴포넌트
 * 세로형 네비게이션 바로, 메인 네비게이션과 사용자 영역으로 구성
 */
const SidebarNavigation = ({
  selectedItem = 'film',
  onNavigate,
  userName = 'User',
  userAvatar = null,
  className = '',
}) => {
  const navigationItems = [
    { id: 'home', icon: 'IconHome', label: 'Home' },
    { id: 'film', icon: 'IconFilm', label: 'Film' },
    { id: 'book', icon: 'IconBook', label: 'Book' },
    { id: 'folder', icon: 'IconFolder', label: 'Folder' },
  ];

  const handleItemClick = (itemId) => {
    if (onNavigate) {
      onNavigate(itemId);
    }
  };

  return (
    <div className={`ads-sidebar-navigation ${className}`}>
      {/* 메인 네비게이션 */}
      <div className="ads-sidebar-navigation__main">
        <div className="ads-sidebar-navigation__nav">
          {/* 로고 */}
          <div className="ads-sidebar-navigation__logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#5250F3"/>
              <path
                d="M16 10L19.5 13.5L16 17L12.5 13.5L16 10Z"
                fill="white"
              />
              <path
                d="M16 15L19.5 18.5L16 22L12.5 18.5L16 15Z"
                fill="white"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* 네비게이션 아이템 */}
          {navigationItems.map((item) => (
            <button
              key={item.id}
              className={`ads-sidebar-navigation__button ${
                selectedItem === item.id ? 'ads-sidebar-navigation__button--selected' : ''
              }`}
              onClick={() => handleItemClick(item.id)}
              aria-label={item.label}
            >
              {renderIcon(item.icon)}
            </button>
          ))}
        </div>
      </div>

      {/* 하단 영역 (설정 & 프로필) */}
      <div className="ads-sidebar-navigation__footer">
        <button
          className="ads-sidebar-navigation__button"
          onClick={() => handleItemClick('settings')}
          aria-label="Settings"
        >
          <IconSettings />
        </button>

        <div className="ads-sidebar-navigation__avatar">
          {userAvatar ? (
            <img src={userAvatar} alt={userName} />
          ) : (
            <div className="ads-sidebar-navigation__avatar-placeholder">
              {userName.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// 아이콘 렌더링 함수
const renderIcon = (iconName) => {
  switch (iconName) {
    case 'IconHome':
      return <IconHome />;
    case 'IconFilm':
      return <IconFilm />;
    case 'IconBook':
      return <IconBook />;
    case 'IconFolder':
      return <IconFolder />;
    default:
      return null;
  }
};

// 아이콘 컴포넌트들
const IconHome = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 22V12H15V22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconFilm = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 2V22M17 2V22M2 12H22M2 7H7M2 17H7M17 17H22M17 7H22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconBook = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconFolder = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M22 19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H9L11 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V19Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconSettings = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle
      cx="12"
      cy="12"
      r="3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

SidebarNavigation.propTypes = {
  selectedItem: PropTypes.string,
  onNavigate: PropTypes.func,
  userName: PropTypes.string,
  userAvatar: PropTypes.string,
  className: PropTypes.string,
};

export default SidebarNavigation;
