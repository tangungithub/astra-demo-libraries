# Astra Design System - Component Library

Figma의 Design Variable을 활용한 React 컴포넌트 라이브러리입니다.

## 🎨 프로젝트 구조

```
src/
├── components/           # React 컴포넌트
│   ├── Button/          # Button 컴포넌트
│   ├── InputField/      # Input Field 컴포넌트
│   ├── Badge/           # Badge 컴포넌트
│   └── index.js         # 컴포넌트 export
├── tokens/              # Design Tokens
│   ├── design-tokens.css    # CSS 변수로 정의된 토큰
│   ├── design-tokens.js     # JavaScript 객체로 정의된 토큰
│   └── README.md           # 토큰 사용 가이드
└── App.js              # 데모 페이지
```

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 데모 페이지를 확인하세요.

## 📦 컴포넌트

### Button

다양한 variant와 크기를 지원하는 버튼 컴포넌트입니다.

**Props:**
- `label` (string): 버튼 텍스트
- `variant` ('Primary' | 'Neutral' | 'Subtle'): 버튼 스타일
- `size` ('Medium' | 'Small'): 버튼 크기
- `state` ('Default' | 'Hover' | 'Disabled'): 버튼 상태
- `hasIconStart` (boolean): 시작 아이콘 표시 여부
- `hasIconEnd` (boolean): 끝 아이콘 표시 여부
- `iconStart` (ReactNode): 시작 아이콘 컴포넌트
- `iconEnd` (ReactNode): 끝 아이콘 컴포넌트
- `onClick` (function): 클릭 이벤트 핸들러

**사용 예시:**

```jsx
import { Button } from './components';

function MyComponent() {
  return (
    <>
      <Button label="Primary Button" variant="Primary" />
      <Button label="Neutral Button" variant="Neutral" size="Small" />
      <Button 
        label="With Icon" 
        variant="Primary" 
        hasIconStart
        iconStart={<StarIcon />}
      />
    </>
  );
}
```

### InputField

Label, Input, Description을 포함하는 텍스트 입력 필드입니다.

**Props:**
- `label` (string): 입력 필드 라벨
- `value` (string): 입력 값
- `placeholder` (string): 플레이스홀더 텍스트
- `description` (string): 입력 필드 설명
- `showLabel` (boolean): 라벨 표시 여부
- `hasDescription` (boolean): 설명 표시 여부
- `state` ('Default' | 'Empty'): 입력 상태
- `onChange` (function): 값 변경 이벤트 핸들러

**사용 예시:**

```jsx
import { InputField } from './components';
import { useState } from 'react';

function MyForm() {
  const [name, setName] = useState('');
  
  return (
    <InputField
      label="이름"
      value={name}
      placeholder="이름을 입력하세요"
      description="실명을 입력해주세요"
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

### Badge

다양한 색상 variant를 지원하는 뱃지 컴포넌트입니다.

**Props:**
- `label` (string): 뱃지 텍스트
- `variant` ('Default' | 'Brand' | 'Secondary' | 'Success' | 'Warning' | 'Danger'): 뱃지 스타일
- `isRemovable` (boolean): 제거 버튼 표시 여부
- `onRemove` (function): 제거 버튼 클릭 이벤트 핸들러

**사용 예시:**

```jsx
import { Badge } from './components';

function MyComponent() {
  const handleRemove = () => {
    console.log('Badge removed!');
  };
  
  return (
    <>
      <Badge label="Default" variant="Default" />
      <Badge label="Success" variant="Success" isRemovable={false} />
      <Badge label="Removable" variant="Brand" onRemove={handleRemove} />
    </>
  );
}
```

## 🎨 Design Tokens

모든 컴포넌트는 Figma에서 추출한 Design Variable을 CSS 변수로 활용합니다.

### 주요 토큰

#### Color Tokens
- `--ads-color-brand-primary`: 브랜드 주 색상 (#5250f3)
- `--ads-color-brand-secondary`: 브랜드 보조 색상 (#d1d0f9)
- `--ads-color-brand-tertiary`: 브랜드 3차 색상 (#eaeaff)
- `--ads-color-success`: 성공 색상 (#47fc74)
- `--ads-color-warning`: 경고 색상 (#f8d33f)
- `--ads-color-danger`: 위험 색상 (#cf2828)

#### Typography Tokens
- `--ads-font-family-text`: 폰트 패밀리 (Instrument Sans)
- `--ads-size-font-body`: 본문 폰트 크기 (16px)
- `--ads-size-font-small`: 작은 폰트 크기 (14px)

#### Size Tokens
- `--ads-size-gap`: 기본 간격 (8px)
- `--ads-size-padding-x`: 가로 패딩 (12px)
- `--ads-size-padding-y`: 세로 패딩 (12px)
- `--ads-size-corner`: 모서리 반경 (8px)
- `--ads-size-corner-full`: 완전한 둥근 모서리 (999px)

전체 토큰 목록은 [`src/tokens/README.md`](src/tokens/README.md)를 참고하세요.

## 💡 커스터마이징

Design Tokens를 수정하여 디자인 시스템을 커스터마이징할 수 있습니다.

**CSS에서 토큰 덮어쓰기:**

```css
:root {
  --ads-color-brand-primary: #your-color;
  --ads-size-corner: 4px;
}
```

**JavaScript에서 토큰 사용:**

```javascript
import { colorTokens, sizeTokens } from './tokens/design-tokens';

const customStyle = {
  backgroundColor: colorTokens.brandPrimary,
  borderRadius: `${sizeTokens.corner.default}px`,
};
```

## 📋 출처

- **Figma 파일**: Juhan Demo
- **Node ID**: 15-11062
- **생성일**: 2026-02-19

## 📝 라이선스

MIT License

---

Made with ❤️ using Figma Design Tokens
