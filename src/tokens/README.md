# Design Tokens

Figma 디자인 시스템에서 추출한 디자인 토큰입니다.

## 파일 구조

- `design-tokens.css` - CSS 변수로 정의된 토큰 (전역 스타일에서 사용)
- `design-tokens.js` - JavaScript 객체로 정의된 토큰 (컴포넌트에서 사용)

## 토큰 카테고리

### Color Tokens
- **Primary**: 주요 텍스트 및 UI 색상
- **Brand**: 브랜드 색상 (primary, secondary, tertiary)
- **Surface**: 배경 색상
- **Border**: 테두리 색상
- **Status**: 성공/경고/위험 상태 색상
- **Semantic**: 의미론적 색상 (on-brand, on-reverse)
- **Primitive**: 기본 팔레트 색상

### Typography Tokens
- **Font Family**: 폰트 패밀리 정의
- **Font Size**: 폰트 크기 (body, small)
- **Font Styles**: 미리 정의된 타이포그래피 스타일 (Label, Input 등)

### Size Tokens
- **Icon**: 아이콘 크기 및 stroke 두께
- **Gap**: 요소 간 간격
- **Padding**: X/Y 축 패딩
- **Corner**: 모서리 반경
- **Border**: 테두리 두께
- **Space**: SDS 스페이스 시스템
- **Typography Scale**: SDS 타이포그래피 스케일

## 사용 방법

### CSS에서 사용
\`\`\`css
/* index.css 또는 App.css에 import */
@import './tokens/design-tokens.css';

/* 사용 예시 */
.button {
  background-color: var(--ads-color-brand-primary);
  padding: var(--ads-size-padding-y) var(--ads-size-padding-x);
  border-radius: var(--ads-size-corner);
}
\`\`\`

### JavaScript/React에서 사용
\`\`\`javascript
import { colorTokens, sizeTokens, typographyTokens } from './tokens/design-tokens';

// 사용 예시
const Button = styled.button\`
  background-color: \${colorTokens.brandPrimary};
  padding: \${sizeTokens.paddingY.default}px \${sizeTokens.paddingX.default}px;
  border-radius: \${sizeTokens.corner.default}px;
  font-family: \${typographyTokens.fontFamily.text};
\`;
\`\`\`

## 출처
- **Figma 파일**: Juhan Demo
- **Node ID**: 15-11062
- **생성일**: 2026-02-19
