# Astra Design System - Figma Integration Rules

이 문서는 Figma 디자인을 코드로 변환할 때 따라야 할 규칙을 정의합니다.

---

## 🎯 핵심 규칙 (CRITICAL)

### 1. 컴포넌트 네이밍 규칙 (MANDATORY)

**컴포넌트 코드 파일의 이름은 Figma의 컴포넌트 명과 반드시 일치해야 합니다.**

#### 네이밍 변환 규칙

| Figma 컴포넌트명 | 파일명 | 컴포넌트명 |
|-----------------|--------|-----------|
| Button | `Button.js` | `Button` |
| Input Field | `InputField.js` | `InputField` |
| Select Field | `SelectField.js` | `SelectField` |
| Avatar Group | `AvatarGroup.js` | `AvatarGroup` |
| Icon Button | `IconButton.js` | `IconButton` |
| Sidebar Navigation | `SidebarNavigation.js` | `SidebarNavigation` |

**변환 규칙:**
- 공백(Space)은 제거하고 PascalCase로 변환
- 특수문자는 제거
- 숫자는 유지
- 약어는 대문자 유지 (예: `UIButton`)

**예시:**
```
Figma: "Text Area Field" → 코드: TextAreaField.js
Figma: "Button Group" → 코드: ButtonGroup.js
Figma: "Header-Main" → 코드: HeaderMain.js
```

### 2. Design Variable 사용 규칙 (MANDATORY)

**Figma에서 variable이 사용된 경우, 코드에서도 반드시 해당 variable을 사용해야 합니다.**

#### ❌ 금지사항
```css
/* 잘못된 예 - 하드코딩 */
.button {
  background-color: #5250f3;
  padding: 12px;
  border-radius: 8px;
  font-family: 'Instrument Sans';
}
```

#### ✅ 올바른 방법
```css
/* 올바른 예 - Variable 사용 */
.button {
  background-color: var(--ads-color-brand-primary, #5250f3);
  padding: var(--ads-size-padding-y, 12px);
  border-radius: var(--ads-size-corner, 8px);
  font-family: var(--ads-font-family-text, 'Instrument Sans');
}
```

**Variable 참조 위치:**
- CSS: `src/tokens/design-tokens.css`
- JavaScript: `src/tokens/design-tokens.js`

### 3. Code Connect 활용 규칙 (MANDATORY)

**하위 요소에 Code Connect가 연결된 컴포넌트가 있다면, 반드시 해당 컴포넌트를 활용해야 합니다.**

Figma MCP에서 반환하는 코드에 `<CodeConnectSnippet>` 요소가 포함된 경우:

#### ✅ 올바른 방법
```javascript
// MCP 응답에서 CodeConnectSnippet 발견:
// <CodeConnectSnippet data-node-id="15:813">
//   <IconSend size="24" />
// </CodeConnectSnippet>

// 프로젝트에서 해당 컴포넌트를 찾아 사용
import IconSend from './icons/IconSend';

const FloatingAction = () => (
  <div>
    <IconSend size={24} />  {/* Code Connect된 컴포넌트 활용 */}
  </div>
);
```

#### ❌ 금지사항
```javascript
// 잘못된 예 - Code Connect 무시하고 새로 구현
const FloatingAction = () => (
  <div>
    <svg>...</svg>  {/* ❌ 이미 연결된 컴포넌트 무시 */}
  </div>
);
```

**처리 절차:**
1. MCP 응답에서 `CodeConnectSnippet` 확인
2. import 경로에서 컴포넌트 위치 파악
3. 프로젝트 내에서 해당 컴포넌트 검색
4. 찾은 컴포넌트를 그대로 사용 (재구현 금지)

### 4. Figma 정의 범위 준수 규칙 (MANDATORY)

**Figma에서 정의되지 않은 기능이나 동작을 임의로 추가하지 않습니다.**

#### ✅ 올바른 방법
```javascript
// Figma에 정의된 variant만 구현
const Button = ({ variant = 'Primary' }) => {
  // Primary, Neutral, Subtle만 Figma에 정의됨
  return <button className={`ads-button--${variant}`}>Button</button>;
};

Button.propTypes = {
  variant: PropTypes.oneOf(['Primary', 'Neutral', 'Subtle']), // Figma 정의 그대로
};
```

#### ❌ 금지사항
```javascript
// 잘못된 예 - Figma에 없는 기능 임의 추가
const Button = ({ 
  variant = 'Primary',
  loading = false,  // ❌ Figma에 정의되지 않음
  fullWidth = false,  // ❌ Figma에 정의되지 않음
}) => {
  if (loading) return <Spinner />;  // ❌ 추측성 구현
  // ...
};
```

**준수 사항:**
- Figma variant만 props로 구현
- Figma에 없는 상태(loading, error 등) 추가 금지
- Figma에 없는 레이아웃 옵션(fullWidth, compact 등) 추가 금지
- 추측성 인터랙션 구현 금지

**예외:**
- 기본적인 접근성 속성 (aria-label, role 등)은 허용
- 이벤트 핸들러 props (onClick, onChange 등)는 허용
- className prop은 확장성을 위해 허용

---

## 📁 Design System Structure

### 1. Token Definitions

**위치:** `src/tokens/`

**구조:**
```
src/tokens/
├── design-tokens.css        # CSS 변수로 정의된 토큰
├── design-tokens.js         # JavaScript 객체로 정의된 토큰
└── README.md               # 토큰 사용 가이드
```

**Token 카테고리:**
- **Color Tokens**: Primary, Brand, Surface, Border, Status, Semantic
- **Typography Tokens**: Font Family, Font Size, Font Styles
- **Size Tokens**: Icon, Gap, Padding, Corner, Border

**사용 예시:**

```css
/* CSS에서 사용 */
@import './tokens/design-tokens.css';

.component {
  color: var(--ads-color-primary);
  background: var(--ads-color-brand-primary);
}
```

```javascript
// JavaScript에서 사용
import { colorTokens, sizeTokens, typographyTokens } from './tokens/design-tokens';

const style = {
  backgroundColor: colorTokens.brandPrimary,
  padding: `${sizeTokens.paddingY.default}px`,
};
```

### 2. Component Library

**위치:** `src/components/`

**컴포넌트 폴더 구조:**
```
src/components/
├── ComponentName/
│   ├── ComponentName.js      # 컴포넌트 로직 (Figma명과 일치)
│   ├── ComponentName.css     # 스타일 (Variable 사용 필수)
│   └── index.js              # Export 파일
└── index.js                  # 모든 컴포넌트 통합 export
```

**구현된 컴포넌트:**
- `Button/` - Primary, Neutral, Subtle variants
- `InputField/` - 텍스트 입력 필드
- `SelectField/` - 드롭다운 선택 필드
- `Badge/` - 6가지 color variants

**컴포넌트 구조 예시:**

```javascript
// src/components/Button/Button.js
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  label = 'Button',
  variant = 'Primary',
  size = 'Medium',
  state = 'Default',
  // ...
}) => {
  return (
    <button className={`ads-button ads-button--${variant.toLowerCase()}`}>
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['Primary', 'Neutral', 'Subtle']),
  size: PropTypes.oneOf(['Small', 'Medium']),
  state: PropTypes.oneOf(['Default', 'Hover', 'Disabled']),
};

export default Button;
```

```javascript
// src/components/Button/index.js
export { default } from './Button';
```

```javascript
// src/components/index.js
export { default as Button } from './Button';
export { default as InputField } from './InputField';
export { default as SelectField } from './SelectField';
export { default as Badge } from './Badge';
```

### 3. Frameworks & Libraries

**사용 프레임워크:**
- **UI Framework**: React 19.2.4
- **Build System**: Create React App (react-scripts 5.0.1)
- **Styling**: 순수 CSS (Tailwind 사용 안 함)
- **Testing**: React Testing Library

**스타일링 접근:**
- CSS 변수 (Design Tokens)
- BEM 네이밍 컨벤션
- 컴포넌트별 독립 CSS 파일

### 4. Asset Management

**현재 상태:**
- 로컬 assets: `public/` 폴더
- SVG 아이콘: 인라인 또는 컴포넌트 내부 정의
- Figma 이미지: localhost MCP 서버를 통해 제공

**아이콘 사용 예시:**
```javascript
// 인라인 SVG
<svg width="12" height="8" viewBox="0 0 12 8">
  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" />
</svg>
```

### 5. Icon System

**현재 구현:**
- 아이콘은 컴포넌트 내부에 인라인 SVG로 정의
- `currentColor`를 사용하여 부모 색상 상속
- 크기는 Design Tokens 사용 (`--ads-size-icon`)

**아이콘 패턴:**
```javascript
const RemoveIcon = () => (
  <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
    <path
      d="M5 1L1 5M1 1L5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
```

### 6. Styling Approach

**CSS 방법론:** BEM (Block Element Modifier)

**네이밍 패턴:**
```css
/* Block */
.ads-component-name { }

/* Block--Modifier */
.ads-component-name--primary { }
.ads-component-name--large { }

/* Block__Element */
.ads-component-name__label { }
.ads-component-name__icon { }

/* Block__Element--Modifier */
.ads-component-name__icon--start { }
```

**실제 예시:**
```css
/* src/components/Button/Button.css */
.ads-button {
  display: inline-flex;
  align-items: center;
  gap: var(--ads-size-gap, 8px);
}

.ads-button--primary {
  background-color: var(--ads-color-brand-primary, #5250f3);
  color: var(--ads-color-on-brand, #ffffff);
}

.ads-button__label {
  flex-shrink: 0;
}
```

**글로벌 스타일:**
- `src/index.css`: Design Tokens import 및 기본 스타일
- `src/App.css`: 데모 페이지 스타일

**반응형 디자인:**
- 현재 Desktop 우선
- 필요시 미디어 쿼리 사용
```css
@media (max-width: 768px) {
  .ads-button {
    width: 100%;
  }
}
```

### 7. Project Structure

```
astra-demo-libraries/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/           # 컴포넌트 라이브러리
│   │   ├── Badge/
│   │   ├── Button/
│   │   ├── InputField/
│   │   ├── SelectField/
│   │   └── index.js
│   ├── tokens/              # Design Tokens
│   │   ├── design-tokens.css
│   │   ├── design-tokens.js
│   │   └── README.md
│   ├── App.js               # 데모 페이지
│   ├── App.css
│   ├── index.js             # Entry point
│   └── index.css            # 글로벌 스타일
├── CLAUDE.md               # 이 파일
├── COMPONENT_README.md     # 컴포넌트 사용 가이드
├── IMPLEMENTATION_SUMMARY.md
└── package.json
```

---

## 🔧 Implementation Patterns

### Figma Variant → React Props 매핑

**규칙:** Figma의 variant 속성은 React props로 정확히 매핑

**Figma 예시:**
```
Variant=Primary, State=Default, Size=Medium
```

**React Props 예시:**
```jsx
<Button 
  variant="Primary"    // Figma의 Variant
  state="Default"      // Figma의 State
  size="Medium"        // Figma의 Size
/>
```

### Props 기본값 설정

Figma의 기본 variant를 props 기본값으로 설정:

```javascript
const Button = ({
  variant = 'Primary',   // Figma 기본값
  size = 'Medium',       // Figma 기본값
  state = 'Default',     // Figma 기본값
  label = 'Button',
}) => { ... }
```

### PropTypes 정의 (필수)

모든 컴포넌트는 PropTypes 정의 필수:

```javascript
import PropTypes from 'prop-types';

ComponentName.propTypes = {
  variant: PropTypes.oneOf(['Primary', 'Neutral', 'Subtle']),
  size: PropTypes.oneOf(['Small', 'Medium']),
  state: PropTypes.oneOf(['Default', 'Hover', 'Disabled']),
  label: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
```

### Variable Fallback 패턴

모든 CSS variable은 fallback 값 포함:

```css
.component {
  /* Variable이름, fallback값 */
  color: var(--ads-color-primary, rgba(0, 0, 0, 0.85));
  padding: var(--ads-size-padding-y, 12px);
  border-radius: var(--ads-size-corner, 8px);
}
```

### 공통 Props 네이밍 규칙

| Props 타입 | 네이밍 | 예시 |
|-----------|--------|------|
| 텍스트 | `label`, `value`, `placeholder` | `label="Submit"` |
| Boolean | `has...`, `is...`, `show...` | `hasIcon`, `isDisabled` |
| 핸들러 | `on...` | `onClick`, `onChange` |
| 스타일 | `variant`, `size`, `state` | `variant="Primary"` |
| 추가 클래스 | `className` | `className="custom"` |

---

## ✅ Implementation Checklist

새 컴포넌트를 Figma에서 코드로 변환할 때 체크리스트:

### 필수 체크
- [ ] **파일명이 Figma 컴포넌트명과 정확히 일치하는가?**
- [ ] **모든 Figma variable을 CSS 변수로 사용하는가?**
- [ ] **Code Connect된 하위 컴포넌트를 활용하는가?**
- [ ] **Figma에 정의되지 않은 기능을 추가하지 않았는가?**
- [ ] Props가 Figma variant와 일치하는가?
- [ ] PropTypes가 정의되어 있는가?
- [ ] Variable에 fallback 값이 포함되어 있는가?

### 권장 체크
- [ ] CSS 클래스가 BEM 네이밍 규칙을 따르는가?
- [ ] 접근성 속성이 추가되어 있는가? (aria-label, disabled 등)
- [ ] JSDoc 주석이 작성되어 있는가?
- [ ] export가 올바르게 설정되어 있는가?
- [ ] 컴파일 에러가 없는가?

---

## 📝 Code Examples

### 완전한 컴포넌트 예시

```javascript
// src/components/NewComponent/NewComponent.js
import React from 'react';
import PropTypes from 'prop-types';
import './NewComponent.css';

/**
 * Astra Design System - NewComponent
 * Figma Variable을 활용한 컴포넌트 구현
 */
const NewComponent = ({
  label = 'Label',
  variant = 'Default',
  size = 'Medium',
  className = '',
  ...props
}) => {
  return (
    <div 
      className={`ads-new-component ads-new-component--${variant.toLowerCase()} ${className}`}
      {...props}
    >
      <span className="ads-new-component__label">{label}</span>
    </div>
  );
};

NewComponent.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(['Default', 'Primary']),
  size: PropTypes.oneOf(['Small', 'Medium', 'Large']),
  className: PropTypes.string,
};

export default NewComponent;
```

```css
/* src/components/NewComponent/NewComponent.css */
.ads-new-component {
  display: flex;
  align-items: center;
  gap: var(--ads-size-gap, 8px);
  padding: var(--ads-size-padding-y, 12px) var(--ads-size-padding-x, 12px);
  border-radius: var(--ads-size-corner, 8px);
  font-family: var(--ads-font-family-text, 'Instrument Sans', sans-serif);
}

.ads-new-component--default {
  background-color: var(--ads-color-surface-bg, #ffffff);
  color: var(--ads-color-primary, rgba(0, 0, 0, 0.85));
}

.ads-new-component--primary {
  background-color: var(--ads-color-brand-primary, #5250f3);
  color: var(--ads-color-on-brand, #ffffff);
}

.ads-new-component__label {
  font-size: var(--ads-size-font-body, 16px);
  font-weight: 500;
  line-height: 1.4;
}
```

```javascript
// src/components/NewComponent/index.js
export { default } from './NewComponent';
```

### Design Token 추가 예시

```css
/* src/tokens/design-tokens.css에 추가 */
:root {
  /* 새로운 토큰 추가 */
  --ads-color-new: #123456;
  --ads-size-new: 20px;
}
```

```javascript
// src/tokens/design-tokens.js에 추가
export const colorTokens = {
  // 기존 토큰...
  new: '#123456',  // 새로운 토큰 추가
};

export const sizeTokens = {
  // 기존 토큰...
  new: 20,  // 새로운 토큰 추가
};
```

---

## 🚨 Common Mistakes to Avoid

### ❌ 잘못된 패턴

1. **Variable 하드코딩**
```css
/* 잘못됨 */
.button {
  color: #5250f3;
}
```

2. **파일명 불일치**
```
Figma: "Input Field"
파일명: input-field.js  ❌ (kebab-case)
올바름: InputField.js   ✅ (PascalCase)
```

3. **Variant 불일치**
```javascript
// Figma: Variant=Primary
<Button type="primary" />  ❌
<Button variant="Primary" />  ✅
```

4. **PropTypes 누락**
```javascript
// ❌ PropTypes 없음
const Button = ({ label }) => <button>{label}</button>;

// ✅ PropTypes 정의
Button.propTypes = {
  label: PropTypes.string,
};
```

5. **Code Connect 무시**
```javascript
// ❌ Code Connect된 컴포넌트 무시
const Card = () => (
  <div>
    <svg>...</svg>  {/* 새로 구현 */}
  </div>
);

// ✅ Code Connect 활용
import IconArrow from './icons/IconArrow';
const Card = () => (
  <div>
    <IconArrow />  {/* 기존 컴포넌트 사용 */}
  </div>
);
```

6. **Figma에 없는 기능 추가**
```javascript
// ❌ 추측성 기능 구현
<Button loading={true} fullWidth />

// ✅ Figma 정의 범위만 구현
<Button variant="Primary" size="Medium" />
```

---

## 📚 References

- **Design Tokens**: `src/tokens/README.md`
- **Component Guide**: `COMPONENT_README.md`
- **Implementation Summary**: `IMPLEMENTATION_SUMMARY.md`
- **Figma File**: Juhan Demo (Node ID: 15-11062)

---

## 🔄 Update Process

Design Tokens 업데이트 시:
1. Figma에서 variable 변경
2. MCP를 통해 새 variable 추출
3. `design-tokens.css`와 `design-tokens.js` 모두 업데이트
4. 영향받는 컴포넌트 확인 및 테스트
5. 변경사항 문서화

---

**마지막 업데이트:** 2026-02-20  
**프로젝트:** Astra Design System Component Library
